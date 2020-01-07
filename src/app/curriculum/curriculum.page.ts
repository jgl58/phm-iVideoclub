import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit,OnDestroy {
  listaTrabajos: {fecha: string, desc: string}[];
  constructor() { 
    this.listaTrabajos= [
      {
        fecha:"2019-2020",
        desc:"Máster en Desarrollo de software para dispositivos móviles"
      },
      {
        fecha:"2013-2019",
        desc:"Grado en Ingeniería Informática"
      }
    ]
  }

  ngOnInit() {
    console.log('CurriculumPage ngOnInit');
  }

  ionViewWillEnter() {
    console.log('CurriculumPage ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('CurriculumPage ionViewDidEnter');
  }
  ionViewWillLeave() {
    console.log('CurriculumPage ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('CurriculumPage ionViewDidLeave');
  }
  ngOnDestroy() {
    console.log('CurriculumPage ngOnDestroy');
  }

}
