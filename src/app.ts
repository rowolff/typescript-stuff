import { generateRandomId } from "./utils";

class App {
  static readonly id: string = "app";
  public onInit(el: HTMLElement | null): void {
    setInterval(function() {
      if (el) {
        el.innerHTML = generateRandomId({ symbol: "#", length: 7 });
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
