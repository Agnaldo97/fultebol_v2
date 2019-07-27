import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "",
        children: [
          {
            path: "",
            loadChildren: "../jogos/jogos.module#JogosPageModule"
          }
        ]
      },
      {
        path: "jogos",
        children: [
          {
            path: "",
            loadChildren: "../jogos/jogos.module#JogosPageModule"
          }
        ]
      },
      {
        path: "equipes",
        children: [
          {
            path: "",
            loadChildren: "../equipe/equipe.module#EquipePageModule"
          }
        ]
      },
      {
        path: "artilheiros",
        children: [
          {
            path: "",
            loadChildren: "../artilheiro/artilheiro.module#ArtilheiroPageModule"
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
