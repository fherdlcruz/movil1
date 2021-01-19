import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.page.html',
  styleUrls: ['./sms.page.scss'],
})
export class SmsPage implements OnInit {
  public contador:number = 10;
  public nombre:string=""; //NOMBRE DE LA PERSONA
  public paterno:string = ""; // PRIMER APELLIDO
  public materno:string ="";// SEGUNDO APELLIDO
  public edad:number = 0;
  public genero:string='';
  public mascotas:any;
  public listaIdiomas = ['INGLES', 'FRANCES','ESPAÑOL','ALEMAN','PORTUGUES'];
  public pais = ['MEXICO', 'USA','GUATEMALA','SALVADOR']
  //CONSTRUCTOR DE LA CLASE
  constructor() { }

  //MÉTODO RESERVADO DE EJECUCIÓN ÚNICA AL INICIAR O CREAR LA INSTANCIA
  ngOnInit() {
    console.log("entrando a la SMS Page");
  }
  
  //MÉTODO DE MUESTRA
  imprimir (): void {
    this.contador += 1;
  }

  //Aumentar edad
  edadAumentar(){
    this.edad +=1;
  }

  //Restar edad
  edadRestar(){
    this.edad -=1;
  }

}
