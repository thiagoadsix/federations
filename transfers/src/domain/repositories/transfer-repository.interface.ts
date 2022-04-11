import { Transfer } from '../entities';

export interface TransferRepositoryInterface {
  transfer(amount: number, account: string): Promise<void>;
  get(id: string): Promise<Transfer>;
}
