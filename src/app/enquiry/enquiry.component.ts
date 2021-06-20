import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_u18lfso', 'template_l7s0gkd', e.target as HTMLFormElement, 'user_qr8XtgpBb1qNh8naHnsTu')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
