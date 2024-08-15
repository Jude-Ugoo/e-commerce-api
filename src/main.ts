import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Use Validation Pipes globally
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove params not specified
    }),
  );
  await app.listen(8080);
}
bootstrap();
