import { Component, OnInit } from "@angular/core";
import { ResultadoRest } from "../../core/services/resultado-rest/resultado-rest.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-jogos",
  templateUrl: "./jogos.page.html",
  styleUrls: ["./jogos.page.scss"]
})
export class JogosPage implements OnInit {
  public categoria: String;
  public lista = new Array<any>();
  public lista2 = new Array<any>();
  public lista3 = new Array<any>();
  public listaTodos = new Array<any>();
  public listaMaster = new Array<any>();
  public listaSenior = new Array<any>();
  results: Observable<any>;

  constructor(private service: ResultadoRest) {}

  ionViewDidLoad() {}

  ngOnInit() {
    this.categoria = "Todos";
    this.carregar("Todos");
  }

  async carregar(env) {
    this.categoria =
      env.detail === undefined && env === "Todos"
        ? this.categoria
        : env.detail.value;
    console.log("Teste", this.categoria);

    if (this.categoria === "Todos") {
      this.results = await this.service.listaJogos();
    }
    if (this.categoria === "Master") {
      let listMaster: any = await this.service.listaJogos();
      this.results = listMaster.filter(
        resultado => resultado.categoria === "Master"
      );
    }
    if (this.categoria === "Senior") {
      let listSeniot: any = await this.service.listaJogos();
      this.results = listSeniot.filter(
        resultado => resultado.categoria === "Senior"
      );
    }
  }
}
