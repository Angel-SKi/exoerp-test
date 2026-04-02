import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @Input() placeholder = 'Cerca...';
  @Output() searchChange = new EventEmitter<string>();

  // Legge il testo digitato nell'input e lo emette al componente padre.
  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchChange.emit(input.value ?? '');
  }
}
