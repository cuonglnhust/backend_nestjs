import { BaseEntity, Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('enum_import_status_pkey', ['id'], { unique: true })
@Entity('enum_import_status', { schema: 'public' })
export class ImportStatus extends BaseEntity {
  @PrimaryColumn({ type: 'text', name: 'id' })
  id: string;

  @Column('text', { name: 'description' })
  description: string;
}

export default ImportStatus;
