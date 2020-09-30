import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HeroService } from "../services/hero.service";
import { MessageService } from "../services/message.service";
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  
  selectedHero: Hero;
  heroes:Array<Hero>;
  
  hero:Hero = {
    id:1,
    name:'Windstorm'
  };
  
  constructor(private heroService:HeroService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero):void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  getHeroes():void{
    this.heroService.getHeroes()
        .subscribe(heroes=>this.heroes = heroes);
  }
}
