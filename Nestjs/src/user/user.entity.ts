import {
  BaseEntity,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Index('user_pkey', ['id'])
@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('varchar', {
    name: 'first_name',
    nullable: true,
    unique: false,
  })
  first_name: string;

  @Column('varchar', {
    name: 'last_name',
    nullable: true,
    unique: false,
  })
  last_name: string;

  @Column('varchar', {
    name: 'email',
    nullable: true,
    unique: false,
  })
  email: string;

  @Column('varchar', {
    nullable: true,
    unique: false,
    name: 'password',
  })
  password: string | null;

  @Column('datetime', {
    nullable: true,
    name: 'last_login_at',
  })
  lastLoginAt?: Date | null;

  @Column('datetime', {
    name: 'created_at',
    nullable: true,
    default: () => 'now()',
  })
  createdAt?: Date | null;

  error?: string;
 
}

export default User;
