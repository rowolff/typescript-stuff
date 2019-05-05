type ValidSymbol = "#" | "$";

interface GenerateConfig {
  symbol: ValidSymbol;
  length: number;
}

function identity<T>(arg: T): T {
  return arg;
}

identity("James");

function generateRandomId(symbol: ValidSymbol, length: number): string;
function generateRandomId(options: GenerateConfig): string;
function generateRandomId(
  optionsOrSymbol: GenerateConfig | ValidSymbol
): string {
  if (typeof optionsOrSymbol === "string") {
    return (
      optionsOrSymbol +
      Math.random()
        .toString(36)
        .substr(2, length)
    );
  }
  return (
    optionsOrSymbol.symbol +
    Math.random()
      .toString(36)
      .substr(2, optionsOrSymbol.length)
  );
}

function userAlert(): void {
  alert("Hello!");
}

function someError(): never {
  throw new Error("Failed!");
}

function main() {
  const app = document.getElementById("app");
  setInterval(function() {
    if (app) {
      app.innerHTML = generateRandomId({ symbol: "#", length: 7 });
    }
  }, 1000);
}
