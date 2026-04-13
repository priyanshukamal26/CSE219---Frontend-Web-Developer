export{}

function identify<T>(value:T): T {
    return value;
}

let numResult: number = identify<number>(100)
let strResult: string = identify<string>("Hello TS with Generic")

let result: string = `
Number Value : ${numResult} <br>
String Value : ${strResult}
`
document.getElementById("output")!.innerHTML = result;

// console
console.log("Number : ", numResult);
console.log("String : ", strResult);