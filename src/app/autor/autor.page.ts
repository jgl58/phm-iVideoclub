import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage implements OnInit, OnDestroy {

  autor: {
    name: string,
    email: string,
    twitter: string,
    phone: string
};

  constructor() { 
    this.autor = {
      name: "Jonay Gilabert López",
      email: "jgl58@alu.ua.es",
      twitter:"https://twitter.com/Jonay_GL",
      phone: "777777777"
    }
  }

  ngOnInit() {
    console.log('AutorPage ngOnInit');
  }

  ionViewWillEnter() {
    console.log('AutorPage ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('AutorPage ionViewDidEnter');
  }
  ionViewWillLeave() {
    console.log('AutorPage ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('AutorPage ionViewDidLeave');
  }
  ngOnDestroy() {
    console.log('AutorPage ngOnDestroy');
  }

}
