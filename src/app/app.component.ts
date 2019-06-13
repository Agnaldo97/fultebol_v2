import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Pages } from "./pages/interfaces/pages";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  public appPages: Array<Pages>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.appPages = [
      {
        title: "Jogos",
        url: "/jogos",
        direct: "root",
        icon: "cart"
      }
    ];
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
