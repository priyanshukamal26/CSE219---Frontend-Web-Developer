export{}

// arrays
let A: string[] = ["Red", "Green", "Orange", "Yellow", "Blue"]
let B: string[] = ["Purple", "Pink", "Yellow", "Blue", "White", "Green"]

// Union Function
function getUnion(arr1: string[], arr2: string[]):string[]
{
    return [...new Set([...arr1, ...arr2])];
}

// Intersection Function
function getIntersection(arr1: string[], arr2: string[]):string[]
{
    return arr1.filter(item=>arr2.includes(item));
}

// result

let unionResult: string[] = getUnion(A, B);
let intersectionResult: string[] = getIntersection(A, B);

//display on webpage
let result: string = `
Array A: [${A}] <br>
Array B: [${B}] <br>
<b> Union: </b> [${unionResult}] <br>
<b> Intersection: </b> [${intersectionResult}]
`;

document.getElementById("output")!.innerHTML = result;

// console
console.log("Union : ", unionResult);
console.log("Intersection : ", intersectionResult);