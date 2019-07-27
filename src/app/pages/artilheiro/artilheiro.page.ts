import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { ClassificacaoGeral } from "../../core/services/classificacao-geral-rest/classificacao-geral.service";
import { ArtilhariaRest } from "../../core/services/artilharia-rest/artilharia-rest.service";


@Component({
  selector: 'app-artilheiro',
  templateUrl: './artilheiro.page.html',
  styleUrls: ['./artilheiro.page.scss'],
})
export class ArtilheiroPage implements OnInit {
  constructor(
    public service: ArtilhariaRest,
    public navCtrl: NavController
  ) { }
  public listaGeral: any;

  ngOnInit() {
    this.carregarClasGeral();
  }
  carregarClasGeral() {
    this.service.listarArtilheiros().then((geralList: any) => {
      this.listaGeral = geralList;
    });
  }
  showDetail(artilheiro: any) {
    localStorage.setItem("artilheiro", artilheiro);
    this.navCtrl.navigateRoot("/detalhe-artilheiro");
  }

}
