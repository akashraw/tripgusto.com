import { Injectable } from '@angular/core';
import { CData } from './customer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "https://www.tripgusto.com";
	constructor(private httpClient: HttpClient) {}
	createQuery(query: CData): Observable<CData>{
		return this.httpClient.post<CData>(`${this.PHP_API_SERVER}/backend/create.php`, query);	
	}
	sendEmail(emailData: CData){
		 this.httpClient.post(`${this.PHP_API_SERVER}/backend/Qsubmit.php`, emailData);
	}
}
