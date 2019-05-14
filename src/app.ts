import { generateRandomId, Component } from "./utils";

function prop(x: any, name: any) {
  console.log(x, name);
}

function param(x: any, name: any, index: any) {
  console.log(x, name, index);
}

@Component({
  id: "app",
})
class App {
  @prop
  static version: string;
  public onInit(@param el: HTMLElement | null): void {
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
