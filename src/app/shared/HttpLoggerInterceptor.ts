import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoggerService } from "./logger.service";

@Injectable({
    providedIn: "root"
})
export class HttpRequestLogger implements HttpInterceptor {

    constructor(private logger: LoggerService){}


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(`${req.method} : ${req.urlWithParams}`)
        this.logger.logMessage(`Request => ${req.method} : ${req.urlWithParams}`)
        return next.handle(req)
    }
}