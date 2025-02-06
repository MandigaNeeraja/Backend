import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { User } from './user.entity'; // Create user entity 
//import { UserModule } from './user/user.module'; // create this module
//import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '80.241.215.212',     // Your MySQL server IP
      port: 3308,                 // Your MySQL server port
      username: 'root',           // MySQL username
      password: 'kW558ZqVpFO8',  // MySQL password
      database: 'Mandiga',  // Your MySQL database name
      autoLoadEntities: true, //entities: [User],           // Define the entities here
      synchronize: true,          // Set to false in production
    }),
    //UserModule,
  ],
})
export class AppModule {}
