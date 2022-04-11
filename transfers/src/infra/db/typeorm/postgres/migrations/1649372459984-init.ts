import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1649372459984 implements MigrationInterface {
  name = 'init1649372459984';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "transfer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "account" character varying(255) NOT NULL, "amount" double precision NOT NULL, CONSTRAINT "PK_fd9ddbdd49a17afcbe014401295" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "transfer"`);
  }
}
