// src/app/decorators/api-call.decorator.ts
import { Injector } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface ApiCallOptions {
  method: 'GET' | 'POST';
  body?: any;
  useAsync?: boolean;
}

export function ApiCall<T>(url: string, options: ApiCallOptions): MethodDecorator {
  return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const injector: Injector = (this as any).injector;
      if (!injector) {
        throw new Error('Injector not provided to the method.');
      }
      const apiService = injector.get(ApiService);

      let apiCall$: Observable<T>;

      if (options.method === 'GET') {
        apiCall$ = apiService.get<T>(url);
      } else {
        apiCall$ = apiService.post<T>(url, options.body);
      }

      if (options.useAsync) {
        const responseSubject = new BehaviorSubject<T | null>(null);
        const responseProperty = `${String(propertyKey)}Response$`;
        Object.defineProperty(this, responseProperty, {
          value: responseSubject.asObservable(),
          writable: false,
        });

        apiCall$.pipe(
          tap(response => {
            responseSubject.next(response);
            originalMethod.apply(this, [response, ...args]);
          })
        ).subscribe({
          error: (error) => {
            console.error('API call failed:', error);
            responseSubject.error(error);
          }
        });
      } else {
        apiCall$.pipe(
          tap(response => {
            originalMethod.apply(this, [response, ...args]);
          })
        ).subscribe({
          error: (error) => {
            console.error('API call failed:', error);
          }
        });
      }

      return descriptor;
    };

    const originalNgOnInit = target.ngOnInit;
    target.ngOnInit = function () {
      if (originalNgOnInit) {
        originalNgOnInit.apply(this);
      }
      descriptor.value.apply(this);
    };

    return descriptor;
  };
}
