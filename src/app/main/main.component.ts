import { Component } from '@angular/core';

//Interface for flashcard
interface Flashcard {
  front: string;
  back: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

//MainComponent mit vorbefüllten Flashcards
export class MainComponent {
  flashcards = [
    { front: 'Frage 1', back: 'Antwort 1' },
    { front: 'Frage 2', back: 'Antwort 2' }
  ];

  newFlashcard: Flashcard = { front: '', back: '' };

  //Funktion um Flashcard hinzuzufügen
  addFlashcard() {
    if (this.newFlashcard.front.trim() && this.newFlashcard.back.trim()) {
      this.flashcards.push({ ...this.newFlashcard });
      this.newFlashcard = { front: '', back: '' };
    }
  }
}

