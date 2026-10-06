// app.component.ts
import { Component } from "@angular/core";
import { PokemonCardComponent } from "./components/pokemon-card/pokemon-card.component";
import { FormsModule } from "@angular/forms";

// URL base de las imágenes oficiales de Pokémon
const SPRITE =
  "https://raw.githubusercontent.com/" +
  "PokeAPI/sprites/master/sprites/pokemon";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [PokemonCardComponent, FormsModule],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  pokemons: Pokemon[] = [
    {
      id: 1,
      nombre: "Bulbasaur",
      imagen: SPRITE + "/1.png",
      tipos: ["grass", "poison"],
      altura: 7,
      peso: 69,
    },
    {
      id: 4,
      nombre: "Charmander",
      imagen: SPRITE + "/4.png",
      tipos: ["fire"],
      altura: 6,
      peso: 85,
    },
    {
      id: 7,
      nombre: "Squirtle",
      imagen: SPRITE + "/7.png",
      tipos: ["water"],
      altura: 5,
      peso: 90,
    },
    {
      id: 25,
      nombre: "Pikachu",
      imagen: SPRITE + "/25.png",
      tipos: ["electric"],
      altura: 4,
      peso: 60,
    },
    {
      id: 39,
      nombre: "Jigglypuff",
      imagen: SPRITE + "/39.png",
      tipos: ["normal", "fairy"],
      altura: 5,
      peso: 55,
    },
    {
      id: 52,
      nombre: "Meowth",
      imagen: SPRITE + "/52.png",
      tipos: ["normal"],
      altura: 4,
      peso: 42,
    },
    {
      id: 94,
      nombre: "Gengar",
      imagen: SPRITE + "/94.png",
      tipos: ["ghost", "poison"],
      altura: 15,
      peso: 405,
    },
    {
      id: 133,
      nombre: "Eevee",
      imagen: SPRITE + "/133.png",
      tipos: ["normal"],
      altura: 3,
      peso: 65,
    },
  ];
  favoritos: Pokemon[] = [];
  busqueda: string = "";
  get pokemonsFiltrados(): Pokemon[] {
    const texto = this.busqueda.toLowerCase().tria();
    return this.pokemons.filter(p => p.nombre.toLowerCase(),includes(texto)
  );
  }
  onFavoritoToggled(pokemon: Pokemon): void {
    const yaEsta = this.favoritos.filter(f => f.id === pokemon.id);

    if(yaEsta){
      this.favoritos = this.favoritos.filter(f => f.id !== pokemon.id);

    } else{
      this.favoritos = [...this.favoritos, pokemon];
    }
  }

  
}
