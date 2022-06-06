import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  //obtener pokemones 
  getPokemon() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=150');
  }

  getinfo(url: string) {
    return this.http.get(url);
  }
}
