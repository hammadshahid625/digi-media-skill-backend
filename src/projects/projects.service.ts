import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from './schemas/project.schema';

import { UpdateProjectDto } from './dto/update-project.dto';
import { CreateProjectDto } from './dto/project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name)
    private projectModel: Model<Project>,
  ) {}

  create(dto: CreateProjectDto) {
    return this.projectModel.create(dto);
  }

  findAll() {
    return this.projectModel.find().sort({ createdAt: -1 });
  }

  async update(id: string, dto: UpdateProjectDto) {
    const updated = await this.projectModel.findByIdAndUpdate(
      id, dto,
      { new: true },
    );

    if (!updated) {
      throw new NotFoundException('Project not found');
    }

    return updated;
  }

  async delete(id: string) {
    const deleted = await this.projectModel.findByIdAndDelete(id);

    if (!deleted) {
      throw new NotFoundException('Project not found');
    }

    return {
      message: 'Project deleted successfully',
    };
  }
}
