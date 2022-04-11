export class Payment {
  id: string;
  barcode: string;

  constructor({ id, barcode }: Payment) {
    Object.assign(this, {
      id,
      barcode,
    });
  }
}
