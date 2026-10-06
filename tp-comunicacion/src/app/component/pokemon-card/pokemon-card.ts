import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon} from '../../models/pokemon-card/pokemon-card';
@Component({
  imports: [],
  selector: 'app-pokemon-card',
  styleUrl: './pokemon-card.css',
  templateUrl: './pokemon-card.html',
})
export class PokemonCard {
  @Input() pokemon!: Pokemon;

  @Output() favoritoToggled: const EventEmitter<Pokemon>();

  onFavorito(): void {
    this.favoritoToggled.emit(this.pokemon);
    
  }




}
