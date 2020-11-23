import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEventType,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //* Modify/log the request here
    const modifiedReq = req.clone({
      withCredentials: true,
    });
    return next.handle(modifiedReq);
    // .pipe(
    //   tap((val) => {
    //     if (val.type === HttpEventType.Sent) {
    //       console.log('Request Sent');
    //     }
    //     if (val.type === HttpEventType.Response) {
    //       console.log('Response is ', val);
    //     }
    //   })
    // );
  }
}
