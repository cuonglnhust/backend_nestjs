import { BaseEntity, Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('enum_electric_provider_pkey', ['id'], { unique: true })
@Entity('enum_electric_provider', { schema: 'public' })
export class ElectricProvider extends BaseEntity {
  @PrimaryColumn({ type: 'text', name: 'id' })
  id: string;

  @Column('text', { name: 'description' })
  description: string;
}

export default ElectricProvider;
