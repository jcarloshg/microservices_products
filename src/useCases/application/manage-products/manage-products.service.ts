import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { ConnectionRepository } from 'src/useCases/domain/repository';
import {
  CreateProductRepository,
  DeleteProductByIdRepository,
  GetAllProductRepository,
  GetProductByIdRepository,
  UpdateProductRepository,
} from 'src/useCases/domain/repository/manage-products';
import {
  ConnectionSqlLitePrisma,
  CreateProductSqlLite,
  DeleteProductByIdSqlLite,
  GetAllProductsSqlLite,
  GetProductByIdSqlLite,
  UpdateProductSqlLite,
} from 'src/useCases/infrastructure/sql-lite-prisma';

@Injectable()
export class ManageProductsService implements OnModuleInit, OnModuleDestroy {
  private readonly _Logger: Logger = new Logger('ProductsService');

  private readonly connection: ConnectionRepository;

  public readonly create: CreateProductRepository;
  public readonly deleteById: DeleteProductByIdRepository;
  public readonly getAll: GetAllProductRepository;
  public readonly getById: GetProductByIdRepository;
  public readonly update: UpdateProductRepository;

  constructor() {
    this._Logger.log('ProductsService initialized');

    const services = this._initSqlLitePrisma();

    // example of how to initialize other databases
    // const services = this._initMongoDB();
    // const services = this._initPostgres();
    // const services = this._initMySQL_and_Dynamo();

    this.connection = services.connection;
    this.create = services.create;
    this.deleteById = services.deleteById;
    this.getAll = services.getAll;
    this.getById = services.getById;
    this.update = services.update;
  }

  onModuleInit() {
    // if you need to initialize the connection to the database, do it here
  }

  async onModuleDestroy() {
    await this.connection.disconnect();
  }

  private _initSqlLitePrisma() {
    this._Logger.log('Initializing SQL Lite Prisma');
    const connection = new ConnectionSqlLitePrisma();
    const sqlLite = {
      connection: connection,
      create: new CreateProductSqlLite(connection),
      getAll: new GetAllProductsSqlLite(connection),
      getById: new GetProductByIdSqlLite(connection),
      deleteById: new DeleteProductByIdSqlLite(connection),
      update: new UpdateProductSqlLite(connection),
    };
    return sqlLite;
  }
}
