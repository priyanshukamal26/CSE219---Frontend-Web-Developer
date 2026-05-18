const obj = [{"name":"PK", "age":20}, {"name":"SN", "age":19}]
console.log("From forEach \n---------------");
obj.forEach(function(object){
    console.log(object.name + "\n" + object.age);
})
console.log("-----------\nFrom vanilla for loop");
for(let i = 0; i < obj.length; i++) {
    console.log(obj[i].name + " " + obj[i].age);
}
console.log("-----------\nFrom for each loop");