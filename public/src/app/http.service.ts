import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getPokemon();
    this.pokeInfo();
  }
  getPokemon(){
    let tempObservable = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    tempObservable.subscribe(data => console.log("Pokemon!", data));
  }
  pokeInfo(){
    let stat = this._http.get('https://pokeapi.co/api/v2/ability/34/');
    stat.subscribe(data => console.log("Special ability", data.pokemon.length))
  }
}
