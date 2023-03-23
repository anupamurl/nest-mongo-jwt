import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { UsersModule } from './users/users.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
  .setTitle('Swagger UI')
  .setDescription('Nest js swagger')
  .setVersion('1.0') 
  .build();
  
 

const document = SwaggerModule.createDocument(app, config, {
  include: [UsersModule]   
});


SwaggerModule.setup('api', app, document);




  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
