import { random } from "lodash";
import { generateRandomId, Component } from "./utils";

@Component({
  id: "app",
})
class App {
  static version: string;
  public onInit(el: HTMLElement | null): void {
    setInterval(function() {
      if (el) {
        el.innerHTML = generateRandomId({ symbol: "#", length: random(7, 10) });
      }
    }, 1000);
  }
}

function main(ComponentClass: any): void {
  const el = document.getElementById(ComponentClass.id);
  const cmp = new ComponentClass();
  cmp.onInit(el);
}

main(App);
