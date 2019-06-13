import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: "root"
})
export class ResultadoRest {
  private baseURL = "http://www.futeboldospais.com.br/campeonato2018/json/";
  private sufix = ".txt";

  constructor(public http: Http) {
    console.log("Hello ArtilheirosProvider Provider");
  }

  getJogos(): any {
    return this.http.get(this.baseURL + "jogos" + this.sufix);
  }

  async listaJogos() {
    const response: any = await new Promise((resolve, reject) => {
      this.http.get(this.baseURL + "jogos" + this.sufix).subscribe(
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
