//  async function greet() {
//     Ab();
//     return "hello";
// }

// greet()
// .then(()=> {
//     console.log("promise fulfilled");
// })
// .catch(()=> {
//     console.log("error occured");
// })


// JSON 

// let jsnRes = '{"fact":"A cats brain is more similar to a mans brain than that of a dog.","length":66}'
// let validRes = JSON.parse(jsnRes);
// console.log(validRes);
// console.log(validRes.fact);


//sending a request using fetch

let url = "https://catfact.ninja/fact"

fetch(url)
.then((res)=> {
    return res.json();
})
.then((data1)=> {
     console.log(data1.fact);
     return fetch(url);
})
.then((res)=> {
    return res.json();
})
.then((data2)=> {
    console.log(data2.fact);
})

.catch((err)=> {
    console.log(err);
})


async function getFacts() {
    try {
    let res =  await fetch(url);
    let data = await res.json();
    console.log(data);
} catch(e) {
    console.log(e);
}
    

}



