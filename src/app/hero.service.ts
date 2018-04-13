import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
// import {Observable, of } from 'rxjs';
import{ Observable} from "rxjs/Observable";
import{ of} from "rxjs/observable/of";
import {MessageService} from "./message.service"

@Injectable()
export class HeroService {

  constructor(private messageSevice:MessageService) { }

  getHeroes(): Observable<Hero[]> {
    //通知messageSevice
    this.messageSevice.add("HeroSerivce:fetched heroes");
    return of(HEROES);
  }

  getHero(id:number):Observable<Hero>{
    this.messageSevice.add("HeroSerivce:fetched hero id=${id}");
    return of(HEROES.find(hero=>hero.id===id));
  }

}
