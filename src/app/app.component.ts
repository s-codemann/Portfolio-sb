import { Component } from '@angular/core';
import{HostListener} from '@angular/core'
import { timeout } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simplePortolio-sb';
  showNav=true;
  yOffset:number =0;
  disappearIntvs:any=[]
@HostListener('window:scroll', ['$event'])
public onWindowScroll($event:Event){
  let newYOffset = window.pageYOffset;
  let disappearTimeout;
if(newYOffset>this.yOffset){
this.disappearIntvs.push(setTimeout(()=>{this.showNav=false; },10))
}




else {this.disappearIntvs.forEach((intv:any)=>
  clearTimeout(intv)
);
this.showNav=true}
console.log(disappearTimeout)

this.yOffset = newYOffset;
}

}
