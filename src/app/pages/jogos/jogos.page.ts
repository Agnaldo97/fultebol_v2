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
  results: Observable<any>;
  resultsWithOutFilter: any;

  constructor(private service: ResultadoRest) {}

  ionViewDidLoad() {}

  ngOnInit() {
    this.carregar();
  }

  async carregar() {
    this.results = await this.service.listaJogos();
    this.resultsWithOutFilter = this.results;
  }

  async buscar(env) {
    this.categoria = env.detail.value;
    if (this.categoria === "Todos") {
      this.results = this.resultsWithOutFilter;
    }
    if (this.categoria === "Master") {
      this.results = this.resultsWithOutFilter.filter(
        resultado => resultado.categoria === "Master"
      );
    }
    if (this.categoria === "Senior") {
      this.results = this.resultsWithOutFilter.filter(
        resultado => resultado.categoria === "Senior"
      );
    }
  }
}
