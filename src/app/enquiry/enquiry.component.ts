import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ApiService } from '../api.service';
import { CData } from '../customer';
@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
  // public sendEmail(e: Event) {
  //   e.preventDefault();
  //   emailjs.sendForm('service_u18lfso', 'template_l7s0gkd', e.target as HTMLFormElement, 'user_qr8XtgpBb1qNh8naHnsTu')
  //     .then((result: EmailJSResponseStatus) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // }
  query: CData[];
	Cquery: CData = { id : null , name: null, phone: null, email: null,
                             pickup: null, date_from: null, date_to: null, message: null}
	constructor(private apiService: ApiService) {
	// 	this.apiService.readProducts().subscribe((products: Product[])=>{
	// 	this.products = products;
	// 	console.log(this.products);
	// }) 
  }

  ngOnInit(){	}


  createQuery(form){
		form.value.id = this.Cquery.id;
		form.value.name = this.Cquery.name;
		form.value.phone = this.Cquery.phone;
    form.value.email = this.Cquery.email;
    form.value.pickup = this.Cquery.pickup;
    form.value.date_from = this.Cquery.date_from;
    form.value.date_to = this.Cquery.date_to;
    form.value.message = this.Cquery.message;
	// 	if(this.Cquery && this.Cquery.id){
	// 		this.apiService.updateProduct(form.value).subscribe((query: CData)=>{
	// 		console.log("Product updated" , query);
	// 		this.apiService.readProducts().subscribe((query: CData[])=>{
	// 			this.query = query;
	// 		})
	// 	});
	// }
	// else{
		this.apiService.createQuery(form.value).subscribe((query: CData)=>{
			console.log("Product created, ", query);
			// this.apiService.readProducts().subscribe((query: CData[])=>{
			// 	this.query = query;
			// })
		});
	// }
}

// selectProduct(product: Product){
// 	this.Cquery = product;
// }

// deleteProduct(id){
// 	this.apiService.deleteProduct(id).subscribe((product: Product)=>{
// 		console.log("Product deleted, ", product);
// 		this.apiService.readProducts().subscribe((products: Product[])=>{
// 			this.products = products;
// 		})
// 	});
// }

}
