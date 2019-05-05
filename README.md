# typescript stuff

## some general terminoligy stuff

- js = dynamically typed; while other langs => statically typed
- js types: number, string, boolean, undefined, null, object, symbol
- ast: abstract syntax tree (see ast explorer, json view)
- const bla: number = 1 // means type annotation

- .ts uses inference based on initial assignment

## key shortcuts

- F2: rename symbol
- Shift + Control + R: refactor options

## project setup

- yarn add typescript
- tsc --init
- in tsconfig
  -- "allowJs": true // if we have vanilla js files in our project
  -- "outDir": "./dist" // to set the out dir
  -- "noEmitOnError": true, // to block dist creation when ts errors happen
  -- "module": "commonjs" // for node, browsers: use webpack
- tsc (to compile to dist)
- put source in "src" folder
- webpack config:
  -- yarn init -y
  -- yarn add -D typescript webpack webpack-dev-server webpack-cli awesome-typescript-loader

## Useful type quirks

- const mything: '#' // means the type is literally # and cannot be anything else, it is of type #
- const mything: "#" | "\$" = "#"; // union type - all piped options are valid
- using a symbol alias:
  -- type ValidSymbol = "#" | "\$";
  -- const symbol: ValidSymbol = "#";
- when using if/switches etc performing null checks, union types that include null as an option are control-flow-converted to non-nullable types (same works with undefined)
- const someThing?: number // is an optional (and the same as union type number | undefined)
- interfaces are compile time only features used for type checking. in the compiled js, interfaces are gone
- A function signature (or type signature, or method signature) defines input and output of functions or methods. A signature can include: parameters and their types. a return value and type. exceptions that might be thrown or passed back

## classes

- class properties are non-optional in ts!
