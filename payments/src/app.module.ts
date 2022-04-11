import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PresentationModule } from './presentation/presentation.module';

import { configService } from './config/config.service';
import { ApolloServerPluginInlineTraceDisabled } from 'apollo-server-core';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      cors: true,
      autoSchemaFile: true,
      plugins: [ApolloServerPluginInlineTraceDisabled()],
    }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    PresentationModule,
  ],
})
export class AppModule {}
