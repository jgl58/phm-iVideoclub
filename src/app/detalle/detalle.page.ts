import { PeliculasAPIService } from './../services/peliculas-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  pelicula: any;

  constructor(private activatedRoute: ActivatedRoute, private peliculasAPIService: PeliculasAPIService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.peliculasAPIService.getPelicula(id).subscribe(
      result => {
        this.pelicula = result;
      },
      err => {
        console.log(err);
      }
    );
  }

}
