let st = "hello hello hello";
let result = st.concat(" ","world"," ","!");
console.log(result);
let r = st.replaceAll("hello","hey");
console.log(r);

//let arr = ["a","b","v","e","f"];
//arr.splice(2,1,"c","d");


let obj1 = {
    name1 : "simran",
    age1: 19,
    course1: "B-tech",
};

let obj2 = {
    name2 : "simi",
    age2: 20,
    course2: "B-tech",
};

let v = {...obj1,...obj2};
console.log(v);

let arr = ["a","b","v","e","f"];
let o = {...arr};






