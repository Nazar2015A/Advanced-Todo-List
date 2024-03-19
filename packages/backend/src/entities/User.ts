import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Todo } from './Todo';
import { EnityEnum } from '../types/entity.enum';

@Entity({ name: EnityEnum.USERS })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    nullable: false
  })
  firstName: string;

  @Column({
    nullable: false
  })
  lastName: string;

  @Column({
    nullable: false,
    unique: true
  })
  email: string;

  @Column({
    nullable: false
  })
  password: string;

  @Column({
    default: false
  })
  isActivated: boolean;

  @Column()
  activationLink: string;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
}
