import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HeroService } from "../services/hero.service";
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes:Array<Hero>;
  hero:Hero = {
    id:1,
    name:'Windstorm'
  };
  
  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  selectedHero: Hero;
  onSelect(hero: Hero):void{
    this.selectedHero = hero;
  }

  getHeroes():void{
    this.heroService.getHeroes()
        .subscribe(heroes=>this.heroes = heroes);
  }
}
