import { Component, OnInit } from '@angular/core';
import { AuthService } from "angular2-social-login";


@Component({
  selector: 'app-talktoastrologer',
  templateUrl: './talktoastrologer.component.html',
  styleUrls: ['./talktoastrologer.component.css'],
  providers:[AuthService]
})
export class TalktoastrologerComponent implements OnInit {

  constructor(public _auth: AuthService){ }
  signIn(provider){
    console.log(provider);
     this._auth.login(provider).subscribe(
      (data) => {
                  console.log(data);
                  //user data 
                  //name, image, uid, provider, uid, email, token (accessToken for Facebook & google, no token for linkedIn), idToken(only for google) 
                }
    )
  
  }
  ngOnInit() {
  }

}
