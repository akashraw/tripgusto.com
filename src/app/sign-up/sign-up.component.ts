import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor( 
    public authService:AuthService
  ) { }

  ngOnInit(): void {
    var pass_field: HTMLElement = document.querySelector(".pass") as HTMLElement;
    var showBtn: HTMLElement = document.querySelector(".show") as HTMLElement;
    showBtn.addEventListener("click", function () {
      if (pass_field.type === "password") {
        pass_field.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "#3498db";
      } else {
        pass_field.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.color = "#222";
      }
    });
  }

}
