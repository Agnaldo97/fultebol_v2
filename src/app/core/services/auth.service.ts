import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { apiUrl } from "../../../environments/environment";

// import 'rxjs/add/operator/map';

@Injectable({
	providedIn: "root"
})
export class AuthService {
	private API_URL_USER = apiUrl + "public/users";
	private API_URL_UPDATE_USER = apiUrl + "private/users";
	private API_URL_AUTHENTICATE = apiUrl + "public/authenticate";

	constructor(public http: Http) { }

	// Metodo que cria uma conta
	createAccount(user) {
		return new Promise((resolve, reject) => {
			this.http.post(this.API_URL_USER, user).subscribe(
				(result: any) => {
					resolve(result.json());
				},
				error => {
					reject(error.json());
				}
			);
		});
	}

	//Metodo que valida usuario
	login(email: string, password: string) {
		return new Promise((resolve, reject) => {
			var data = {
				email: email,
				senha: password
			};
			this.http.post(this.API_URL_AUTHENTICATE, data).subscribe(
				(result: any) => {
					resolve(result.json());
				},
				error => {
					reject(error.json());
				}
			);
		});
	}

	//busca CEP
	getCep(cep) {
		return new Promise((resolve, reject) => {
			let API_URL_getCEP = "https://viacep.com.br/ws/" + String(cep) + "/json";

			this.http.get(API_URL_getCEP).subscribe(
				(result: any) => {
					//return JSON.parse(result._body)
					resolve(JSON.parse(result._body));
				},
				error => {
					error.json();
				}
			);
		});
	}

	//verifica se o email é válido
	validateEmail(email) {
		let API_URL_validateEmail = apiUrl + "public/users?email=" + String(email);

		return new Promise((resolve, reject) => {
			this.http.get(API_URL_validateEmail).subscribe(
				(result: any) => {
					resolve(result);
				},
				error => {
					reject(error.message);
				}
			);
		});
	}

	updateUser(user){
		return new Promise((resolve, reject) => {

			this.http.put(this.API_URL_UPDATE_USER, user).subscribe(
				(result: any) => {
					console.log(result.json())
					resolve(result.json());
				},
				error => {
					console.log(error.json())
					reject(error.json());
				}
			);
		});
	}
}
