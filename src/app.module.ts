import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { BlogsModule } from './blogs/blogs.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api/(.*)'],
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1/nest'),
    UsersModule,
    BlogsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
