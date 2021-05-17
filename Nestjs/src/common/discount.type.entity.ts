import { BaseEntity, Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('enum_discount_type_pkey', ['id'], { unique: true })
@Entity('enum_discount_type', { schema: 'public' })
export class DiscountType extends BaseEntity {
  @PrimaryColumn({ type: 'text', name: 'id' })
  id: string;

  @Column('text', { name: 'description' })
  description: string;
}

export default DiscountType;
