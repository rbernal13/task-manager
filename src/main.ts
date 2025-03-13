import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // Transforma los objetos de entrada en objetos de salida
    disableErrorMessages: false, // Muestra los errores en la respuesta del API
    validationError: {
      target: false, // Muestra los detalles de cada campo en el error
      value: false, // Muestra los valores de cada campo en el error
    },
    whitelist: false,
  }))
  app.setGlobalPrefix('api'); // Esto hace que todas las rutas tengan /api/
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
