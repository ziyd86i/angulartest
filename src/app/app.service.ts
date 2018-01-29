import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Calculate } from './calculate';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {

  constructor(private http:Http) { }

  userUrl:string = 'http://localhost:3000'

  SendCalculate(kilo: Object): Observable<Calculate> {
    console.log(kilo)
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers : headers});

    return this.http.get(`${this.userUrl}/getcalculate/${kilo}`, options)
                    .map((res:Response) =>res.json())
                    .catch((error:Response|any) => Observable.throw(error.json().error || 'Server error'));

  }
}
