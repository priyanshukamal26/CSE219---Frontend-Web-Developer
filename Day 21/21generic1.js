function identify(value) {
    return value;
}
let numResult = identify(100);
let strResult = identify("Hello TS with Generic");
let result = `
Number Value : ${numResult} <br>
String Value : ${strResult}
`;
document.getElementById("output").innerHTML = result;
// console
console.log("Number : ", numResult);
console.log("String : ", strResult);
export {};
