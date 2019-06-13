import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArtilheiroPage } from './artilheiro.page';

const routes: Routes = [
  {
    path: '',
    component: ArtilheiroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArtilheiroPage]
})
export class ArtilheiroPageModule {}
