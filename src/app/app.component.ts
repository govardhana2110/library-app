import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-app';
  value=2;
ngOnInit (){
for (let i=0; 63>i;i++){
this.value=this.value+this.value;
console.log(this.value );
}
}
}
