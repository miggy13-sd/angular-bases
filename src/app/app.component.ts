import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
public  title = 'Mi primera app de angular';

public counter: number= 10;

increaseBy(value: number):void{
  this.counter +=value;
}
ResetCounter(){
  this.counter =10;
}
}
