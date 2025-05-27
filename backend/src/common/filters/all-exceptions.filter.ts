import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException ? exception.getStatus() : 500;

    let message: any;

if (exception instanceof HttpException) {
  const response = exception.getResponse();
  if (typeof response === 'string') {
    message = response;
  } else if (typeof response === 'object' && response !== null) {
    message = (response as any).message || JSON.stringify(response);
  } else {
    message = exception.message;
  }
} else if (exception instanceof Error) {
  message = exception.message;
} else {
  message = JSON.stringify(exception);
}


    this.logger.error(`Status: ${status} - Error: ${message}`);

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      error: message,
    });
  }
}
