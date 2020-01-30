import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-montre-analogic',
  templateUrl: './montre-Analogic.component.html',
  styleUrls: ['./montre-Analogic.component.css']
})
export class MontreAnalogicComponent implements OnInit {

  Hour=0;
  Minute=0;
  Seconds=0;  

  constructor() 
  {
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
        
    /* Cette partie est pour initialiser la partie Hour est Minute et seconde */    

    this.Seconds=sec*(this.Seconds+6);     
    this.Minute=min*(this.Minute+6);
    this.Hour=hr*(this.Hour+30);    
   
    /* J'ai utilise trop de Math Ici Lol ! :D */

    /* Cette partie est pour initialiser l'Heure et Minute lorsque y'a un certain avancement 
    pour l'un des deux c a dire par exemple lorsque elle est 1:23:20 ou bien 11:37:56 */

    this.Hour=sec*(1/20) + min*(1/2) + this.Hour;
    this.Minute=sec*(6/60) + this.Minute;
  }

  ngOnInit() 
  {    
    let watch:Observable<any>;
    
    watch=interval(1000);

    watch.subscribe(
      s=>{
       
        this.Hour = this.Hour+(6/3600);      
        this.Minute = this.Minute+(6/60);                             
        this.Seconds = this.Seconds+6;

        this.runTheClock();
      }
    )    
  }

  runTheClock() 
  {    

    let HOURHAND = document.querySelector("#hour") as HTMLElement;
    let MINUTEHAND = document.querySelector("#minute") as HTMLElement;
    let SECONDHAND = document.querySelector("#second") as HTMLElement;

    HOURHAND.style.transform = "rotate(" + this.Hour + "deg)";
    MINUTEHAND.style.transform = "rotate(" + this.Minute + "deg)";
    SECONDHAND.style.transform = "rotate(" + this.Seconds + "deg)";

  }

}