let isDone: boolean = true

let decLiteral: number = 20
let hexLiteral: number = 0x14
let binaryLiteral: number = 0b10100
let octalLiteral: number = 0o24

let name2: string = 'bob'
let age = 31
let sentence = `Hello, my name is ${name2}
I'll be ${age + 1} year old next month233444.
`

let list: number[] = [1, 2, 3]
let list2: Array<number> = [4, 5, 6, 7]

let x: [string, number] = ['hello', 10]

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

let c: Color = Color.Blue
let colorName = Color['Red']

function warnUser(): void {
  console.log('ls')
}

let num: number | null = 4

function inifiniteLoop():never {
  while (true) {
    console.log('123')
  }
}

declare function create(o: object | null): void;

let someValue = 'this is a string'
let str2: string = someValue as string


let t: [string, number] = ['ls', 123]
console.log(str2)
