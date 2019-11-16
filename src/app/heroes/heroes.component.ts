import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  //le sélecteur d'élement CSS du composant
  //'app-heroes' correspond au nom de l'élément HTML qui identifie ce composant dans le modèle d'un composant parent
  selector: 'app-heroes',
  //L'emplacement du fichier de modèle du composant
  templateUrl: './heroes.component.html',
  //l'emeplacement des styles CSS privés du composant
  styleUrls: ['./heroes.component.css']
})

//Toujours export la classe de composatn afin que vous puisiez le impor faire ailleurs comme dans le AppModule
export class HeroesComponent implements OnInit {
  

  heroes: Hero[];

  //selectedHero: Hero;  

  constructor(private heroService: HeroService) { }

  //est un crochet de cycle de vie, appels angulaires ngOnInit() peu de temps après la création d'un composant, C'est un bon endroit pour mettre la logique d'initialisation.
  ngOnInit() {
    this.getHeroes();
  }

  /*
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  */
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
   
}
