import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  public paises: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://restcountries.com/v2/lang/es')
      .subscribe(paises => {
        console.log(paises);
        this.paises = paises
      })
  }

  drop(evento: CdkDragDrop<any>) {
    console.log("OK", evento);
    moveItemInArray(this.paises, evento.previousIndex, evento.currentIndex);
  }

  getColorCard(d: number) {
    let color: string;
    // switch (d) {
    //   case 0:
    //     return color = '#000000';
    //   case 1:
    //     return color = '#1e98e4';
    //   case 2:
    //     return color = '#ff2a00';
    //   case 3:
    //     return color = '#008000';
    // }
    color=this.colorHEX();
    return color;
  }

   generarLetra(){
    var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
    var numero = (Math.random()*15).toFixed(0);
    return letras[numero];
  }

   colorHEX(){
    var coolor = "";
    for(var i=0;i<6;i++){
      coolor = coolor + this.generarLetra() ;
    }
    return "#" + coolor;
  }

}
