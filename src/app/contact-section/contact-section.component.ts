import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {
myForm:any= {}
nameControl:string = "hello";
  constructor() { }

  ngOnInit(): void {
  }

}
