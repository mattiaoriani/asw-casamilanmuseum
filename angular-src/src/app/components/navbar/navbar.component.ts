import { ViewChild, ViewChildren, Component, QueryList, ElementRef, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {TextToSpeechService} from '../../services/text-to-speech.service';
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    private textService: TextToSpeechService) { }

    @ViewChild('pino') div:ElementRef;


  ngOnInit() {
    console.log(this.div.nativeElement);

  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessage.show('Logout effettuato', {
      cssClass:'alert-success',
      timeout: 3000
    });
    this.router.navigate(['']);
    this.textService.back();
    return false;
  }

  toggleNavBar(){
      $('.navbar-collapse').collapse('hide');
      this.textService.back();
  }



}
