import { animate, keyframes, transition, trigger,style,state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[trigger("descriptorTransition",[state("left",style({left:0,opacity:1})),state("right",style({left:'100%',translate:'-100%',opacity:1})),transition('left => right',animate("500ms"
   ,keyframes([
    style({left:0,width:'100%',offset:0}),
    style({width:'100%',offset:0.1}),
    style({opacity:1,width:'100%',offset:0.5 }),
   style({left:'100%',width:'60px',offset:1}),
   ]
   ),
  )),
transition("right => left",animate("400ms",keyframes(
  [
     style({left:'100%',width:'100%',offset:0}),
    style({width:'100%',offset:0.1}),
    style({opacity:1,width:'100%',offset:0.5 }),
   style({left:0,width:'60px',offset:1}),   
  ]
)))
])],
 // trigger("descriptorTransitionBox",[state("left",style({})),state("right",style({})),transition('* => *',animate("500ms"))]),
 // [trigger("descriptorTransitionBox",[state("left",style({})),state("right",style({})),transition('* => *',animate("2s"))])]
})
export class HomeComponent implements OnInit {
transition:number=0;
descriptorTransition:number=0;

descriptor:string="Web Worker";
descriptors:Array<string>=["Web Worker","Digital Dreamer","Task Tackler"];
  constructor() { }

  ngOnInit(): void {
    let i =0;
    
    setInterval(()=>{setTimeout(()=>{this.descriptor = this.descriptors[i%3];console.log("now")},0);this.descriptorTransition++;i++},6500)
    
  }

}
