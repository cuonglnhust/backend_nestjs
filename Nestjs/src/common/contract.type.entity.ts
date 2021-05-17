import { BaseEntity, Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('enum_contract_type_pkey', ['id'], { unique: true })
@Entity('enum_contract_type', { schema: 'public' })
export class ContractType extends BaseEntity {
  @PrimaryColumn({ type: 'text', name: 'id' })
  id: string;

  @Column('text', { name: 'description' })
  description: string;
}

export default ContractType;
