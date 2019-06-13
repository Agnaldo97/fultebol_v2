import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
// import 'rxjs/add/operator/map';
@Injectable({
  providedIn: "root"
})
export class Config {
  private baseURL = "http://www.futeboldospais.com.br/config/config.txt";
  constructor(public http: Http) {
    console.log("Hello Config Provider");
  }
  async getConfig() {
    const response: any = await new Promise((resolve, reject) => {
      this.http.get(this.baseURL).subscribe(
        (result: any) => {
          resolve(JSON.parse(result._body));
        },
        error => {
          reject(error.message);
        }
      );
    });
    return response;
  }
}
