import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {PassDataService} from '../../services/pass-data.service';
import {TextToSpeechService} from '../../services/text-to-speech.service';

@Component({
  selector: 'app-single-trophy',
  templateUrl: './single-trophy.component.html',
  styleUrls: ['./single-trophy.component.scss']
})
export class SingleTrophyComponent implements OnInit {

  trophy:Object;

  constructor(private router:ActivatedRoute,private passData:PassDataService, private textService: TextToSpeechService) { }

  config: Object = {
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: false,
    slidesPerView: 'auto',
    centeredSlides: true,
    preloadImages: false,
    grabCursor: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  };


  ngOnInit() {
    this.trophy = JSON.parse(this.passData.getsingleComponent());
    this.textService.endSpeach.subscribe(item => this.checkSubscribe(item));
  }
  checkSubscribe(item){
    if(item == "SpeechFinished"){
      console.log("finitooo");
      var infoaudio = document.getElementsByClassName("audio-info");
      var buttonaudio = <HTMLElement[]><any>document.getElementsByClassName("btn-audio");
      for(var i=0; i<infoaudio.length; i++) {
            infoaudio[i].innerHTML = "Clicca per ascoltare la descrizione";
      }
      for(var i=0; i<buttonaudio.length; i++) {
            buttonaudio[i].style.backgroundImage="url('../../../assets/play.png')";
      }
    }else if(item == "Inizio"){
      console.log("inizio");
      var infoaudio = document.getElementsByClassName("audio-info");
      var buttonaudio = <HTMLElement[]><any>document.getElementsByClassName("btn-audio");
      for(var i=0; i<infoaudio.length; i++) {
            infoaudio[i].innerHTML = "Clicca per stoppare l'ascolto";
      }
      for(var i=0; i<buttonaudio.length; i++) {
            buttonaudio[i].style.backgroundImage="url('../../../assets/stop.png')";
      }
    }
  }
  speak(description){
    this.textService.speach(description);
  }
  back(){
    this.textService.back();
  }
}
