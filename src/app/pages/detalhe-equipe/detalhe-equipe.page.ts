import { Component, OnInit } from "@angular/core";
import { NavParams } from "@ionic/angular";
import { ClassificacaoGeral } from "../../core/services/classificacao-geral-rest/classificacao-geral.service";
import { ArtilhariaRest } from "../../core/services/artilharia-rest/artilharia-rest.service";

@Component({
  selector: "app-detalhe-equipe",
  templateUrl: "./detalhe-equipe.page.html",
  styleUrls: ["./detalhe-equipe.page.scss"]
})
export class DetalheEquipePage implements OnInit {
  equipe: string;
  lista = new Array<any>();
  artilheiros: string[];
  listaEquipe = new Array<any>();
  geral = new Array<any>();
  constructor(
    private serviceClassificacao: ClassificacaoGeral,
    private serviceArtilheiro: ArtilhariaRest
  ) {
    this.equipe = localStorage.getItem("equipe");
  }

  ngOnInit() {
    //Consumo Detalhe Artilheiro
    this.abrirDetalhes();
    this.carregarClassificacaoGeral();
  }

  async abrirDetalhes() {
    let response: any = await this.serviceArtilheiro.listarArtilheiro();
    this.listaEquipe = response.filter(
      listaEquipe => listaEquipe.equipe === this.equipe
    );
  }

  async carregarClassificacaoGeral() {
    let response: any = await this.serviceClassificacao.listarGeral();
    this.geral = response.filter(
      listaGeral => listaGeral.equipe === this.equipe
    );
  }
}
