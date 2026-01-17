import {Body,Controller,Delete, Get, Param, Post, Put,} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { UpdateProjectDto } from './dto/update-project.dto';
import { CreateProjectDto } from './dto/project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private service: ProjectsService) {}

  @Post()
  addProject(@Body() body: CreateProjectDto) {
    return this.service.create(body);
  }

  @Get()
  getProjects() {
    return this.service.findAll();
  }

  @Put(':id')
  updateProject(  @Param('id') id: string, @Body() body: UpdateProjectDto,) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  deleteProject(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
