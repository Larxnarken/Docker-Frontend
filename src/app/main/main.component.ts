import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, Observable } from 'rxjs';

//Interface for flashcard
interface Card {
  card_Id: string;
  front: string;
  back: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

//MainComponent mit vorbefüllten Flashcards
export class MainComponent {
  Cards : Card[] = [
    {card_Id:"test", front:"test", back:"test"},
    {card_Id:"test", front:"test", back:"test"}
  ];
    
  constructor(private http: HttpClient) {}

  public postCard(){
    this.http.post("http://localhost:4444/card", { "front": "sohn", "back": "hurensohn" }).subscribe((data)=>{
      console.log(data);
    });
    return ;
  };

}

