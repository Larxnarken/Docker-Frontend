import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { catchError, Observable, take } from 'rxjs';

//Interface for flashcard
interface Card {
  card_Id: string;
  front: string;
  back: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

//MainComponent mit vorbefüllten Flashcards
export class MainComponent implements OnInit{
  // Variablen oder so
  Cards : Card[] = [

   ];

  cart = new FormGroup({
    front: new FormControl(''),
    back: new FormControl(''),
  })  

  // End of Variablen

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.getCards()
  }

  public postCard(){

    this.http.post("http://localhost:4444/card", { "front": this.cart.get("front")?.value, "back": this.cart.get("back")?.value }).pipe(take(1)).subscribe((data)=>{
      console.log(data);
      this.getCards()
    });
    return ;
  };

  public getCards(){
    this.http.get<{data:Array<Card>, error:string}>("http://localhost:4444/card").pipe(take(1)).subscribe((data)=>{
      if ("data" in data){
        this.Cards = data.data;
      }else{
        window.alert("error")  
      }
    });
    return ;
  };

  public deleteCard(){

    //this.http.delete("http://localhost:4444/card").pipe(take(1)).subscribe((data)=>{
    //  this.getCards()      
    //});
    return ;
  };

}

