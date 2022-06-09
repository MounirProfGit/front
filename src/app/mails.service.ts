import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailsService {

  getTemplates(){
    return this.http.get('http://localhost:3000/api/mails/templates');
    
  }

  sendMail(mailToSend: any){
    this.http.post<any>('http://localhost:3000/api/mails', mailToSend).subscribe(data => {
      console.log(data);
    });
  }
  constructor(private http: HttpClient ) { }
}
