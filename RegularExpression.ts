import { z } from 'zod'

// g - Global search, don't return after first match
// i - Case-insensitive search

//test - return true false
//exec - return array

//Flag
// g
let regex = /abc/g
console.log(regex.test('abc abc'))

// i 
let regeInsensitive = /abc/i
console.log(regeInsensitive.test('ABC'))

/*let regex2 = /[A-Z]phone/i
console.log(regex2.test('OPhoNe'))*/
let regex2 = /[^abce]phone/i
console.log(regex2.test('iphone'))

//Meta-characteres

// \d - Math any digit character (same as [0-9])
// \w - Math any word characte. A word character is any letter, digit
// \s - Mathch a whitespace character (space)
// \t - Mayj a tab character only
// \b - Find a match at beginning or ending of a word Also know as word boundary.
//  . - (period) Matchs any character except for newline
// \D - Match any non digit character (same as [^ 0-9])
// \W - Mathch any non word character (same as [^a-zA-Z0-9_])
// \S - Math a non whitespace character.

let _d = /\d/
console.log(_d.test('5'))

let _w = /\w/
console.log('\\w' + _w.test(' hello'))

let _s = /\s/
console.log(_s.test(' '))

const _t = /\t/;
console.log(_t.test('Hello\tWorld')); // Outputs: true (matches the tab)

const _b = /\bworld\b/;
console.log(_b.test('Hello world!')); // Outputs: true (matches 'world' as a whole word)

const _dot = /h.t/;
console.log(_dot.test('hat')); // Outputs: true (matches 'h', any character, 't')

const _D = /\D/;
console.log(_D.test('abc123')); // Outputs: true (matches the non-digit 'a')

const _W = /\W/;
console.log(_W.test('Hello@World')); // Outputs: true (matches the non-word character '@')

const _S = /\S/;
console.log(_S.test('Hello World')); // Outputs: true (matches the non-whitespace character 'H')


//Quantifiers: - Quantifiers are sysbols that have a special meaning in a regular expression

// +
let quantifiers = /\d+/
console.log(quantifiers.test('8888888885') + 'd')

// * 
let quantifiers2 = /hel*lo/
console.log(quantifiers2.test('hellllllo'))

// ^ math first string
let quantifiers3 = /^h/
console.log(quantifiers3.test('hello world'))

// $ math with end string
let quantifiers4 = /.com$/
console.log(quantifiers4.test('helloworld@gmail.com'))

// {}
let quantifiers5 = /hel{2}o world/;
console.log(quantifiers5.test('hello world')); // Outputs: true

let quantifiers6 = /hel{2,}o world/; // , more than 2 or equal 2
console.log(quantifiers6.test('helllo world')); // Outputs: true

let quantifiers7 = /hel{1,2}o world/; //  , between 1 or 2
console.log(quantifiers7.test('hello world')); // Outputs: true

// ? 
let quantifiers8 = /colou?r/;// can math u or r
console.log(quantifiers8.test('color')); // Outputs: true

let quantifiers9 = /Nov(ember)?||(hello)/;
console.log(quantifiers9.test('Novhello')); // Outputs: true

//********************************************************************* */
//test
let price = 'price: 500 $'
let test = /price: (\d+) \$/

let currentTest = test.exec(price)

if(currentTest) {
    let num = z.coerce.number()
    const currentNum = num.parse(currentTest[1])
    console.log(currentNum + 10)
}

