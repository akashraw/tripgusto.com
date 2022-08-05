import { ModalService } from './../modal.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CData } from '../customer';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  con:boolean;
  query: CData[];
  when =[{ id:1, whenTo:"This week"}, { id:2, whenTo:"In next two week"}, { id:3, whenTo:"Within a Month"}, { id:4, whenTo:"In 6 months"}, { id:5, whenTo:"Later in the year"}]
	where=[{ id:1, whereTo: 'Trek'}, { id:2, whereTo: 'Backpacking Trip'}, { id:3, whereTo: 'Pilgrim'}, { id:4, whereTo: 'Weekend Trips'}, { id:5, whereTo: 'Roadtrip'}]
  Cquery: CData = { id : null , name: null, phone: null, email: null,
                             pickup: null, when: null, where: null, message: null, date_from: null, date_to: null}
	constructor(private apiService: ApiService, private http:HttpClient, public modalService: ModalService) {}

  ngOnInit(){	
   
    }


  createQuery(form){
		form.value.id = this.Cquery.id;
		form.value.name = this.Cquery.name;
		form.value.phone = this.Cquery.phone;
    form.value.email = this.Cquery.email;
    form.value.pickup = this.Cquery.pickup;
    form.value.when = this.Cquery.when;
    form.value.where = this.Cquery.where;
    // form.value.date_from = this.Cquery.date_from;
    // form.value.date_to = this.Cquery.date_to;
    form.value.message = this.Cquery.message;
    
		this.apiService.createQuery(form.value).subscribe((query: CData)=>{
			console.log("Product created, ", query);
     
      alert("Your Query Has Been Submitted")
		})
  }
}
