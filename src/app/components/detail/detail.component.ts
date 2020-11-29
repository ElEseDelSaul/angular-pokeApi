import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  Pokemon: any = '';
  PokemonType = [];
  PokemonImg = '';

  constructor(private pokeService: PokeapiService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      params => {
        this.getPokemon(params['id'])
      } 
    )
   }

  ngOnInit(): void {
  }

  getPokemon(id){
    this.pokeService.getPokemons(id)
    .subscribe(
      res=>{
        console.log(res)
        this.Pokemon = res;
        this.PokemonImg = this.Pokemon.sprites.front_default;
        this.PokemonType = this.Pokemon.types[0].type.name;
      },
      err=>console.log(err)
    )
  }

}
