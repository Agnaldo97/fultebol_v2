import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "tabs", loadChildren: "./pages/tabs/tabs.module#TabsPageModule" },
  { path: "", redirectTo: "jogos", pathMatch: "full" },
  {
    path: "artilheiro",
    loadChildren: "./pages/artilheiro/artilheiro.module#ArtilheiroPageModule"
  },
  {
    path: "equipe",
    loadChildren: "./pages/equipe/equipe.module#EquipePageModule"
  },
  { path: "jogos", loadChildren: "./pages/jogos/jogos.module#JogosPageModule" },
  {
    path: "tabela",
    loadChildren: "./pages/tabela/tabela.module#TabelaPageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
