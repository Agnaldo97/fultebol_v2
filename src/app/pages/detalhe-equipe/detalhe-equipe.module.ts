import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalheEquipePage } from './detalhe-equipe.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheEquipePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalheEquipePage]
})
export class DetalheEquipePageModule {}
