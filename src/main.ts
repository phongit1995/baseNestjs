import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CheckRequest } from './common/check.middlware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(CheckRequest);
  const options = new DocumentBuilder()
    .setTitle('Manga API Docs')
    .setVersion('1.0')
    .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document);
    await app.listen(4000);
    console.log(`App running on : ${await app.getUrl()}`)
}
bootstrap();
