export class Transfer {
  id: string;
  account: string;
  amount: number;

  constructor({ id, account, amount }: Transfer) {
    Object.assign(this, {
      id,
      account,
      amount,
    });
  }
}
