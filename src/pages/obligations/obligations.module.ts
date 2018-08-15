import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObligationsPage } from './obligations';

@NgModule({
  declarations: [
    ObligationsPage,
  ],
  imports: [
    IonicPageModule.forChild(ObligationsPage),
  ],
})
export class ObligationsPageModule {}
