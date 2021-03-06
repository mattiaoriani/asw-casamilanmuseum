import { Component, OnInit } from '@angular/core';
import {UploadDataService} from '../../services/upload-data.service';
import {ActivatedRoute} from '@angular/router';
import {TextToSpeechService} from '../../services/text-to-speech.service';

@Component({
  selector: 'app-single-footballer',
  templateUrl: './single-footballer.component.html',
  styleUrls: ['./single-footballer.component.scss']
})
export class SingleFootballerComponent implements OnInit {

  footballer:Object;
  switcher: Boolean;

  constructor(private uploadData:UploadDataService,private router:ActivatedRoute, private textService:TextToSpeechService) { }

  config: Object = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 0
  };

  ngOnInit() {
    this.router.params.subscribe(params => this.footballer = JSON.parse(params["id"]));
    this.switcher = true;
    this.textService.endSpeach.subscribe(item => this.checkSubscribe(item));
  }
  checkSubscribe(item){
    if(item == "SpeechFinished"){
      console.log("finitooo");
      var labelAudio = document.getElementById("infoaudio");
      var btnPlayStop = document.getElementById("btnaudio");
      labelAudio.innerHTML = "Clicca per ascoltare la biografia";
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
  getSumAppearences(footballer) {
    let total = 0;
    for(var i = 0; i < footballer["statics"].length; i++){
        total +=footballer["statics"][i]["apperances"];
    }
    return total;
  }

  getSumGoals(footballer) {
    let total = 0;
    for(var i = 0; i < footballer["statics"].length; i++){
        total +=footballer["statics"][i]["goals"];
    }
    return total;
  }

  getThrophyPath(trophy) {
    switch(trophy.name){
      case "Scudetto Serie A": return "../../assets/hall-of-fame/scudetto.png";
      case "Champions League": return "../../assets/hall-of-fame/championsleague.png";
      case "Coppa Italia TIM": return "../../assets/hall-of-fame/coppaitalia.png";
      case "UEFA Supercup": return "../../assets/hall-of-fame/supercoppaeuropea.png";
      case "FIFA Club's World Cup": return "../../assets/hall-of-fame/fifaworldcup.png";
      case "Supercoppa Italiana": return "../../assets/hall-of-fame/supercoppaitaliana.png";
      case "Coppa Intercontinentale": return "../../assets/hall-of-fame/intercontinentale.png";
      case "FIFA Pallone d'oro": return "../../assets/hall-of-fame/pallonedoro.png";
      default : return "../../assets/hall-of-fame/presenze.png";;
    }
  }
  checkIfHasThrophy(footballer){
    var size = Object.keys(footballer["trophiesWon"]).length;
    if(size==0){
      return false;
    }else{
      return true;
    }
  }

  speak(description){
    this.textService.speach(description);
  }

  back(){
    this.textService.back();
  }

}
