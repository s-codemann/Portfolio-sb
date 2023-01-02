import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
skillImgLink= "assets/img/css.png"
skillDescription="Throughout the projects I've built and by continuing to learn about the designing language of the web, I have aquired a solid grasp on CSS concepts and preprocessing languages like SCSS";
skills:Array<any> = [{name:"CSS",skillImgLink:"assets/img/css.png",skillDescription:"Throughout the projects I've built and by continuing to learn about the designing language of the web, I have aquired a solid grasp on CSS concepts and preprocessing languages like SCSS"},
{name:"Angular",skillImgLink:"assets/img/angular.png",skillDescription:"I have used Angular to build many of my projects, amongst them this website, and learned to appreciate it's advantages for managing larger projects"},
{name:"Databases",skillImgLink:"assets/img/database.png",skillDescription:"I have utilised simple text and NOSQL databases for creating truly usable applications"},
{name:"Javascript",skillImgLink:"assets/img/jscript.png",skillDescription:"The essence of every one of my projects and my primary language. To truly get a grasp on it, I haven't shied away from building even complex projects with Vanilla Javascript"},
{name:"HTML",skillImgLink:"assets/img/html.png",skillDescription:"Not to be underestimated. I have learned that well structured HTML and the appropriate tags go a long way to build a solid project"},
{name:"Git",skillImgLink:"assets/img/git.png",skillDescription:"Essential for version control, backups and team collaboration, git has been with me from early on in my journey and my workflow would be unimaginable without it"},
{name:"REST-API",skillImgLink:"assets/img/rest.png",skillDescription:"APIs are essential for many services and I have used them for use cases ranging from pagination to CRUD/database applications"},
{name:"Design",skillImgLink:"assets/img/design.png",skillDescription:"Even if my focus is on the development side of things, I have learned and continue to educate myself important design principles"},
//{name:,skillImgLink:,skillDescription:},
]
selectSkill(clickedSkill:any){
  this.skillImgLink=clickedSkill.skillImgLink,this.skillDescription=clickedSkill.skillDescription,clickedSkill.focused=true;
  this.skills.filter((skill)=>skill != clickedSkill).forEach(skill=> skill.focused=false)

}
  constructor() { }

  ngOnInit(): void {
  }

}
