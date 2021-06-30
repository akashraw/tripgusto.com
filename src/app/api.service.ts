import { Injectable } from '@angular/core';
import { CData } from './customer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "http://localhost/tryd";
	constructor(private httpClient: HttpClient) {}
	// readProducts(): Observable<CData[]>{
	// 	return this.httpClient.get<CData[]>(`${this.PHP_API_SERVER}/index.php`);
	// }
	createQuery(query: CData): Observable<CData>{
		return this.httpClient.post<CData>(`${this.PHP_API_SERVER}/create.php`, query);
	}
	// updateProduct(product: CData){
	// 	return this.httpClient.put<CData>(`${this.PHP_API_SERVER}/update_product.php`, product);
	// }
	// deleteProduct(id: number){
	// 	return this.httpClient.delete<CData>(`${this.PHP_API_SERVER}/delete_product.php/?id=${id}`);
	// }
}
