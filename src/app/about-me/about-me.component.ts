import { Component, OnInit } from '@angular/core';

import { animate, keyframes, transition, trigger,style,state } from '@angular/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations:[
    trigger("imgCoverState",[
      state("covered", style({})),
      state("uncovered", style({
        transform:"rotate(45deg) scale(0.4) ",
        right:" calc(10% + 175px)",top:"275px",opacity:0


      })),
        transition("covered => uncovered", animate("1200ms",keyframes([
          style({offset:0}),
          style({transform:"rotate(35deg) scale(1)",opacity:1,offset: 0.6}),
         style({transform:"rotate(45deg) scale(0.4) ",
        right:" calc(10% + 175px)",top:"275px",opacity:0,offset:1  })
        ]) 



        ))

    ])
  ]
})
export class AboutMeComponent implements OnInit {
imgCoverState:string="covered"
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=> this.imgCoverState = "uncovered", 2222)
  }

}
