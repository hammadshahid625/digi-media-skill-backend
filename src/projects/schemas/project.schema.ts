import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Project extends Document {

  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ type: [String] })
  techStack: string[];

  @Prop()
  image: string;

  @Prop()
  liveUrl: string;

  @Prop()
  githubUrl: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
