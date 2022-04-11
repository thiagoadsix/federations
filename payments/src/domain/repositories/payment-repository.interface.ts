import { Payment } from '../entities';

export interface PaymentRepositoryInterface {
  pay(barcode: string): Promise<void>;
  get(id: string): Promise<Payment>;
}
