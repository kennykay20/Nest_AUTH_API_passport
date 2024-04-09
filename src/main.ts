import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { configs } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Auth_api')
    .setDescription('The Pern authentication api ')
    .setVersion('1.0')
    .addTag('auth_api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('API', app, document);
  await app.listen(configs.port.http_port);
  Logger.log(`app running on port ${configs.port.http_port}`);
}
bootstrap();
