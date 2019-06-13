import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Config } from "../config-rest/config-teste.service";

// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: "root"
})
export class ResultadoRest {
  private baseURL = "http://www.futeboldospais.com.br/campeonato";
  private sufix = ".txt";
  //
  constructor(public http: Http, public config: Config) {
    console.log("Hello ArtilheirosProvider Provider");
  }

  getJogos(): any {
    return this.http.get(this.baseURL + "jogos" + this.sufix);
  }

  async listaJogos() {
    const config = await this.config.getConfig();
    const response: any = await new Promise((resolve, reject) => {
      this.http
        .get(`${this.baseURL}${config.campeonatoAno}/json/jogos.txt`)
        .subscribe(
          (result: any) => {
            resolve(result._body);
          },
          error => {
            reject(error.message);
          }
        );
    });
    return JSON.parse(response);
  }
}
