import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';
import { PokemonData } from './models/pokemonData';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseURL: string = ""
  private pokeData: any

  constructor(private http:HttpClient) {
    this.baseURL = environment.pokeapi
   }

  getPokemon(pokemonName:string):Observable<PokemonData>{
   this.pokeData = this.http.get<PokemonData>(`${this.baseURL}${pokemonName}`)
    return this.pokeData
  }
}
