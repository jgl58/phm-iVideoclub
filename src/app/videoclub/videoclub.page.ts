import { PeliculasAPIService } from './../services/peliculas-api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage implements OnInit, OnDestroy {

  modoLista: Boolean
  listaPeliculas: any[]

  constructor(private router: Router, private peliculasAPIService: PeliculasAPIService) { 
    this.modoLista = true;
    peliculasAPIService.getPeliculas().subscribe(
      result => {
        this.listaPeliculas = result;
      },
      err => {
        console.log(err);
      }
    );
    
  }

  verPaginaDetalle(id): void {
    this.router.navigate(['/detalle', id]);
  }

  cambiarVista(){
    if(this.modoLista == true){
      this.modoLista = false;
    }else{
      this.modoLista = true;
    }
  }


  ngOnInit() {
    console.log('VideoclubPage ngOnInit');
  }

  ionViewWillEnter() {
    console.log('VideoclubPage ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('VideoclubPage ionViewDidEnter');
  }
  ionViewWillLeave() {
    console.log('VideoclubPage ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('VideoclubPage ionViewDidLeave');
  }
  ngOnDestroy() {
    console.log('VideoclubPage ngOnDestroy');
  }


}
