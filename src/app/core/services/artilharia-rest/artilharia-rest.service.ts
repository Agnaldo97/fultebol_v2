import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Config } from "../config-rest/config-teste.service";

// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: "root"
})
export class ArtilhariaRest {
  private baseURL = "http://www.futeboldospais.com.br/campeonato";
  private sufix = ".txt";
  //
  constructor(public http: Http, public config: Config) {
    console.log("Hello ArtilheirosProvider Provider");
  }

  getArtilharia(): any {
    return this.http.get(this.baseURL + "artilheiros" + this.sufix);
  }

  async listarArtilheiro() {
    const config = await this.config.getConfig();
    const response: any = await new Promise((resolve, reject) => {
      this.http
        .get(`${this.baseURL}${config.campeonatoAno}/json/artilheiros.txt`)
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
