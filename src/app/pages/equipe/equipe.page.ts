import { Component, OnInit } from "@angular/core";
// import { IClassificacaoGeral } from "../interfaces/classificacaoGeral";
import { ClassificacaoGeral } from "../../core/services/classificacao-geral-rest/classificacao-geral.service";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-equipe",
  templateUrl: "./equipe.page.html",
  styleUrls: ["./equipe.page.scss"]
})
export class EquipePage implements OnInit {
  constructor(
    public service: ClassificacaoGeral,
    public navCtrl: NavController
  ) {}
  public listaGeral: any;

  ngOnInit() {
    this.carregarClasGeral();
  }
  carregarClasGeral() {
    this.service.listarGeral().then((geralList: any) => {
      this.listaGeral = geralList;
    });
  }
  showDetail(equipe: any) {
    localStorage.setItem("equipe", equipe);
    this.navCtrl.navigateRoot("/detalhe-equipe");
  }
}
