import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";
const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
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
        path: "",
        redirectTo: "/tabs/jogos",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/jogos",
    pathMatch: "full"
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
