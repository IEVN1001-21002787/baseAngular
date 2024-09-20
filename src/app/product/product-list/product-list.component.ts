import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  mostrarImagen():void{
    this.muestraImg=!this.muestraImg
  }
  

  productos:any[]=[
    {
      "ProductoId":1,
      "Modelo":"Sentra",
      "Descripcion":"2 puertas",
      "Year":2020,
      "Precio":120000,
      "Color":"Rojo",
      "Marca":"Nissan",
      "ImagenUrl":"https://brochures.nissanpace.com/mx/sentra/img/sentra-rojo.png"
    },
    {
      "ProductoId":2,
      "Modelo":"Versa",
      "Descripcion":"4 puertas",
      "Year":2019,
      "Precio":170000,
      "Color":"Negro",
      "Marca":"Nissan",
      "ImagenUrl":"https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMzAyNzMyL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzA4NDUzMzYxODIwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjU0MCwiaGVpZ2h0IjozMTB9fX0="
    },
    {
      "ProductoId":3,
      "Modelo":"Miata",
      "Descripcion":"2 puertas",
      "Year":1995,
      "Precio":30000,
      "Color":"Amarillo",
      "Marca":"Mazda",
      "ImagenUrl":"https://www.mercedes-benz.com.mx/content/dam/hq/passengercars/cars/a-class/hatchback-w177-fl-pi/modeloverview/08-2022/images/mercedes-amg-a-class-w177-modeloverview-696x392-08-2022.png"
    },
  ]
  
}