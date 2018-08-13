import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { IntroPage } from '../intro/intro';
import { CheckinPage } from '../checkin/checkin';
import { StartPage } from '../start/start';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	Contenido = [];
	constructor (public navCtrl: NavController, public storage: Storage){
		this.Contenido = [
      {
        'title': 'Angular',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': 'CSS3',
        'icon': 'css3',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': 'HTML5',
        'icon': 'html5',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529'
      },
    ]
	}
	
	openNavDetailsPage(item) {
    this.navCtrl.push(StartPage, { item: item });
  }

  ionViewDidLoad() {
	  this.storage.get('intro-done').then(done => {
	    if (!done) {
	      this.storage.set('intro-done', true); 
	      this.navCtrl.setRoot(IntroPage);
	    }
	  });
   }

   
otrapagina(){
	this.navCtrl.push(CheckinPage);
}}