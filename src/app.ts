type ValidSymbol = "#" | "$";

function generateRandomId(symbol: ValidSymbol, length?: number): string {
  length = length || 7;
  return (
    symbol +
    Math.random()
      .toString(36)
      .substr(2, length)
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
      app.innerHTML = generateRandomId("#", 7);
    }
  }, 1000);
}
