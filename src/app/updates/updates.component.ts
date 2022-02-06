import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {


  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_3htt5hn', 'template_hv3wpog', e.target as HTMLFormElement, 'user_FCLnGBox1GC8cBuAmNPYs')
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
