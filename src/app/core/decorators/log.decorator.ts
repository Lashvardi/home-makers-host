import { LoggerService } from './../logger.service';

export function LogMethod(): MethodDecorator {
  return function (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> | void {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const logger = new LoggerService();
      logger.log(`Called ${String(propertyKey)} with args: ${JSON.stringify(args)}`);

      const result = originalMethod.apply(this, args);

      logger.log(`Result from ${String(propertyKey)}: ${JSON.stringify(result)}`);

      return result;
    };

    return descriptor;
  };
}
