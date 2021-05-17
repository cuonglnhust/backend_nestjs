import { BaseEntity, Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('enum_industry_pkey', ['id'], { unique: true })
@Entity('enum_industry', { schema: 'public' })
export class Industry extends BaseEntity {
  @PrimaryColumn({ type: 'text', name: 'id' })
  id: string;

  @Column('text', { name: 'description' })
  description: string;
}

export default Industry;
