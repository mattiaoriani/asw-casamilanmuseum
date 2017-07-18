import { Injectable } from '@angular/core';
import {EventEmitter} from '@angular/core';

@Injectable()
export class TextToSpeechService {

  msg:SpeechSynthesisUtterance;
  endSpeach:EventEmitter<string>;

  constructor() {
    this.msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    //this.msg.lang = "it";
    var palo = this;
    //this.msg.voice = voices[11];
    this.endSpeach = new EventEmitter();
    speechSynthesis.onvoiceschanged = function () {
        voices = window.speechSynthesis.getVoices();
        palo.msg.voice = voices.filter(function (voice) { return voice.lang == 'it'; })[0];
    }

 }

  speach(textDescription){
   if(speechSynthesis.speaking){
     speechSynthesis.cancel();
   }else{
    //var voices = window.speechSynthesis.getVoices();
    //this.msg.voice = voices[11];
    var text = textDescription;
    var hasFinished:Boolean = false;
    this.msg.text = text;
    var palo = this;
    this.msg.onend = function(event) {
        console.log("END");
        palo.endSpeach.emit("SpeechFinished");
        console.log("ho emittato");
        speechSynthesis.cancel();
    }
    this.msg.onerror = function(event) {
        console.log("ERRORONE");
    }
     console.log("faccio partire");
     if(speechSynthesis.pending){
       console.log("c'è roba in pending");
     }
     palo.endSpeach.emit("Inizio");
     speechSynthesis.speak(this.msg);

   }

 }

 back(){
   var context = this;
   if(speechSynthesis.speaking){
     speechSynthesis.cancel();
     context.endSpeach.emit("SpeachFinished");
   }
 }




}
