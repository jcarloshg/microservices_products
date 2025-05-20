import { ValidationPipe } from '@nestjs/common';

export const ValidationPipeInit = new ValidationPipe({
  whitelist: true,
  forbidNonWhitelisted: true,
  //   exceptionFactory: (errors: ValidationError[]) => {
  //     console.log(`[errors] -> `, errors);
  //   },
});
