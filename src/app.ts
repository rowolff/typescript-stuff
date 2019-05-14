import { generateRandomId } from "./utils";

function Component(options: { id: string }) {
  console.log(options);
  return (target: any) => {
    target.id = options.id;
  };
}

@Component({
  id: "app",
})
class App {
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
