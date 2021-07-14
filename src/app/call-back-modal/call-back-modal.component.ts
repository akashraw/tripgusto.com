import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-call-back-modal',
  templateUrl: './call-back-modal.component.html',
  styleUrls: ['./call-back-modal.component.css']
})
export class CallBackModalComponent implements OnInit {
  myForm: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm= this.fb.group({
      email:'',
      phone:'',
      name:'',
      message:'',
      date:''
    })
    this.myForm.valueChanges.subscribe(console.log);
  }

}
