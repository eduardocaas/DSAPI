import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 8001;
  await app.listen(port, () => {
    console.log(`Server running in ${port}`);
  });
}
bootstrap();
