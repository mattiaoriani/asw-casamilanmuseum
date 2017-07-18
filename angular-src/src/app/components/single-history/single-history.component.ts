import { Component, OnInit } from '@angular/core';
import {UploadDataService} from '../../services/upload-data.service';
import {ActivatedRoute } from '@angular/router';
import {PassDataService} from '../../services/pass-data.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {TextToSpeechService} from '../../services/text-to-speech.service';





@Component({
  selector: 'app-single-history',
  templateUrl: './single-history.component.html',
  styleUrls: ['./single-history.component.scss']
})
export class SingleHistoryComponent implements OnInit {

  history:Object;
  msg:SpeechSynthesisUtterance;
  switcher:Boolean;

  constructor(private uploadData:UploadDataService, private router:ActivatedRoute, private passData:PassDataService,private textService: TextToSpeechService, private routerin: Router) {

  }

  config: Object = {
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  }

  ngOnInit() {
	   window.scrollTo(0, 0);
       this.history = JSON.parse(this.passData.getsingleComponent());
       this.textService.endSpeach.subscribe(item => this.checkSubscribe(item));
     }
     checkSubscribe(item){
       if(item == "SpeechFinished"){
         console.log("finitooo");
         var labelAudio = document.getElementById("infoaudio");
         var btnPlayStop = document.getElementById("btnaudio");
         labelAudio.innerHTML = "Clicca per ascoltare la descrizione";
         btnPlayStop.style.backgroundImage="url('../../../assets/play.png')";
         this.switcher = true;
       }else if(item == "Inizio"){
         console.log("inizio");
         var labelAudio = document.getElementById("infoaudio");
         var btnPlayStop = document.getElementById("btnaudio");
             labelAudio.innerHTML = "Clicca per stoppare l'ascolto";
             btnPlayStop.style.backgroundImage="url('../../../assets/stop.png')"; // change it
             this.switcher = false;
       }
     }

speak(description){
  this.textService.speach(description);
}

back(){
  this.textService.back();
}



}
