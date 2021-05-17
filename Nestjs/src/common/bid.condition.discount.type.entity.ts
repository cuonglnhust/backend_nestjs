import { BaseEntity, Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('enum_bid_condition_discount_type_pkey', ['id'], { unique: true })
@Entity('enum_bid_condition_discount_type', { schema: 'public' })
export class BidConditionDiscountType extends BaseEntity {
  @PrimaryColumn({ type: 'text', name: 'id' })
  id: string;

  @Column('text', { name: 'description' })
  description: string;
}

export default BidConditionDiscountType;
