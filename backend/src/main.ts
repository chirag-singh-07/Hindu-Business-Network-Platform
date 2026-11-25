import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const config = app.get(ConfigService);
  const env = config.getOrThrow<string>('NODE_ENV');
  const prefix = config.getOrThrow<string>('API_PREFIX');
  const port = config.getOrThrow<number>('PORT');
  const origins = config.getOrThrow<string>('CORS_ORIGINS').split(',').map((value) => value.trim()).filter(Boolean);

  app.use(helmet());
  app.enableCors({ origin: origins, credentials: true, methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'] });
  app.setGlobalPrefix(prefix);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));

  if (env !== 'production') {
    const options = new DocumentBuilder()
      .setTitle('Hindu Business Network API')
      .setDescription('Versioned API for the Hindu Business Network platform')
      .setVersion('0.1.0')
      .build();
    SwaggerModule.setup(`${prefix}/docs`, app, SwaggerModule.createDocument(app, options));
  }

  await app.listen(port, '0.0.0.0');
}

void bootstrap();
