import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';
import { User } from './User';
import { EnityEnum } from '../types/entity.enum';

@Entity({ name: EnityEnum.TODOS })
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: false })
  isCompleted: boolean;

  @Column({ default: false })
  isPrivate: boolean;

  @ManyToOne(() => User, (user) => user.todos)
  user: User;
}
