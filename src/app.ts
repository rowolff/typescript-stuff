import { generateRandomId } from "./utils";

class App {
  id: string;
  constructor() {
    this.id = "app";
  }
}

function main(ComponentClass: any): void {
  const cmp = new ComponentClass();
  const app = document.getElementById(cmp.id);
  setInterval(function() {
    if (app) {
      app.innerHTML = generateRandomId({ symbol: "#", length: 7 });
    }
  }, 1000);
}

main(App);
