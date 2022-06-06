//librerias
import { Component } from '@angular/core';

//servicio
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-pokeapi';
  pokemones = null;
  pokemon: any = {}

  constructor(private $pokemon: PokemonService) { 
    this.$pokemon.getPokemon().subscribe((res: any) => {
      this.pokemones = res.results;
    });
  }

  getInfo(url: string) {
    this.$pokemon.getinfo(url).subscribe((res: any) => {
      this.pokemon = res;
    })
  }



  


}
