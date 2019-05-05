type ValidSymbol = "#" | "$";

interface GenerateConfig {
  symbol: ValidSymbol;
  length: number;
}

function generateRandomId(options: GenerateConfig): string {
  return (
    options.symbol +
    Math.random()
      .toString(36)
      .substr(2, options.length)
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
