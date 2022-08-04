import { Injectable } from '@angular/core';
import { CData } from './customer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  var: any;
  API_SERVER = "https://z44go7o5dunqz2x4cw6htezlo40pykjd.lambda-url.ap-south-1.on.aws/";
	constructor(private httpClient: HttpClient) {}
	createQuery(query: CData): Observable<CData>{
		return this.var= this.httpClient.post<CData>(this.API_SERVER, query)
		   
	}
	
}
