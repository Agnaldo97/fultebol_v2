import { Component, OnInit } from "@angular/core";
import { NavParams } from "@ionic/angular";

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

  constructor(public navParams: NavParams) {
    this.jogador = this.navParams.get("jogador");
  }
  ionViewDidLoad() {
    // this.carregasDetalhes();
  }
  ngOnInit() {}
}
