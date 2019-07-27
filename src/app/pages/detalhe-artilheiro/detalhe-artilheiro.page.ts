import { Component, OnInit } from "@angular/core";
import { ArtilhariaRest } from "../../core/services/artilharia-rest/artilharia-rest.service";

@Component({
  selector: "app-detalhe-artilheiro",
  templateUrl: "./detalhe-artilheiro.page.html",
  styleUrls: ["./detalhe-artilheiro.page.scss"]
})
export class DetalheArtilheiroPage implements OnInit {
  jogador: string;
  lista = new Array<any>();
  artilheiros: string[];
  listaJogador = new Array<any>();
  geral = new Array<any>();
  constructor(
    private serviceArtilheiro: ArtilhariaRest
  ) {
    this.jogador = localStorage.getItem("artilheiro");
  }
  ngOnInit() {
    //Consumo Detalhe Artilheiro
    this.abrirDetalhes();
    // this.carregarClassificacaoGeral();
  }

  async abrirDetalhes() {
    let response: any = await this.serviceArtilheiro.listarArtilheiros();
    this.listaJogador = response.filter(
      jogador => jogador.nome === this.jogador
    );
    console.log(this.listaJogador)
  }

  // async carregarClassificacaoGeral() {
  //   let response: any = await this.serviceClassificacao.listarGeral();
  //   this.geral = response.filter(
  //     listaGeral => listaGeral.equipe === this.artilhjogadoreiro
  //   );
  // }
}
