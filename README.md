# typescript stuff

## some general terminoligy stuff

- js = dynamically typed; while other langs => statically typed
- js types: number, string, boolean, undefined, null, object, symbol
- ast: abstract syntax tree (see ast explorer, json view)

- .ts uses inference based on initial assignment

## key shortcuts

- F2: rename symbol
- Shift + Control + R: refactor options

## project setup

- yarn add typescript
- tsc --init
- in tsconfig
  -- "allowJs": true if we have vanilla js files in our project
  -- "outDir": "./dist" to set the out dir
- tsc (to compile to dist)
- put source in "src" folder
