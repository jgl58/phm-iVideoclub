import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';
@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage implements OnInit, OnDestroy {

  listaPeliculas: any[]

  constructor(private router: Router, private service: PeliculasService) { 
    this.listaPeliculas = service.getPeliculas()
  }

  verPaginaDetalle(id): void {
    this.router.navigate(['/detalle', id]);
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
