import { generateRandomId } from "./utils";

class App {
  static id: string = "app";
}

function main(ComponentClass: any): void {
  const app = document.getElementById(ComponentClass.id);
  setInterval(function() {
    if (app) {
      app.innerHTML = generateRandomId({ symbol: "#", length: 7 });
    }
  }, 1000);
}

main(App);
