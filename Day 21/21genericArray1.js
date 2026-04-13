function getFirstElement(arr) {
    return arr[0];
}
let numbers = [10, 45, 78];
let strings = ["A", "B", "C"];
let numResult = getFirstElement(numbers);
let strResult = getFirstElement(strings);
document.getElementById("output").innerHTML =
    `
First Number: ${numResult} <br>
Frist String: ${strResult}
`;
export {};
