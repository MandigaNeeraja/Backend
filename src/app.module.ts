import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './typeorm/entities/User';
//import { UsersModule } from './users/users.module';
//import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '80.241.215.212',     // Your MySQL server IP
      port: 3308,                 // Your MySQL server port
      username: 'root',           // MySQL username
      password: 'kW558ZqVpFO8',  // MySQL password
      database: 'Mandiga',  // Your MySQL database name
      entities: [User],
      //autoLoadEntities: true, //entities: [User],           // Define the entities here
      synchronize: true,          // Set to false in production
    }),
    //UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
