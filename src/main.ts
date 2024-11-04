import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'http://localhost:3000',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    },
  });

  const config = new DocumentBuilder()
    .setTitle('Todo')
    .setDescription('Todoリストの機能を提供するREST APIです。')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Write OpenAPI spec to openapi.yaml
  writeFileSync('./openapi.yaml', JSON.stringify(document, null, 2));

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
