import { BaseEntity, Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('enum_pref_pkey', ['id'], { unique: true })
@Entity('enum_pref', { schema: 'public' })
export class Pref extends BaseEntity {
  @PrimaryColumn({ type: 'text', name: 'id' })
  id: string;

  @Column('text', { name: 'description' })
  description: string;
}

export default Pref;
