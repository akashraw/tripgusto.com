import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CData } from '../customer';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
 
  
  query: CData[];
	Cquery: CData = { id : null , name: null, phone: null, email: null,
                             pickup: null, date_from: null, date_to: null, message: null}
	constructor(private apiService: ApiService) {}

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
		this.apiService.createQuery(form.value).subscribe((query: CData)=>{
			console.log("Product created, ", query);
      alert("Your Query Has Been Submitted")
		});
  }
}

