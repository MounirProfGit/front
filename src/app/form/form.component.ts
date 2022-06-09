import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MailsService } from '../mails.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
mail = this.fb.group( {
  address: ['', Validators.compose([Validators.required, Validators.email])],
  name : ['', Validators.required],
  subject : ['', Validators.required],
  template: ['', Validators.required],
  message: ['', Validators.required]
});
templates:any =  this.mails.getTemplates();
envoyerForm(){
 
  if(this.mail.valid){
    console.log(this.mail.value);
    this.mails.sendMail(this.mail.value);
  }
}
  constructor(private fb: FormBuilder, private mails: MailsService) { }

  ngOnInit(): void {
  }

}
