import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'transfer' })
export class TransferModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255, type: 'varchar', nullable: false })
  account: string;

  @Column({ type: 'float', nullable: false })
  amount: number;
}
