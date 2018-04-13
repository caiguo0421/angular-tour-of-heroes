import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[];

  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  getHeros(): void {
    // this.heroes = this.heroService.getHeroes(); //orgin 没有使用observable时
    this.heroService.getHeroes().subscribe(heroes=>this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeros();
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
