// let url2 = "https://dog.ceo/api/breeds/image/random";

// async function getImg() {
//     try {
//         let link = await axios.get(url2);
//         console.log(link.data.message);
//         return link.data.message;
//     } catch (e) {
//         console.log("error -",e);
//         return "/";
//     }

// }



// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let link = await getImg();
    
//     let i = document.querySelector("#result");
//     i.setAttribute("src",link);
     
// })


// btn.addEventListener("click", async () => {
//     let fact =  await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// } );


// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact; 
//     } catch (e) {
//         console.log("error- ",e);
//         return "no fact found";
        
//     }
    
    
//}

// let url3 = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = { headers: {Accept: "text/plain"}};
//         let res = await axios.get(url3, config);
//         console.log(res.data);
//     } catch (e) {
//         console.log("error- ",e);
//     }
    
    
// }


let url4 = "http://universities.hipolabs.com/search?name=";
//let country = "nepal";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let colArr = await getColleges(country);
    show(colArr);
})

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr) {
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }

    
    
}

async function getColleges(country) {
    try {
        let res = await axios.get(url4 + country);
        return  res.data;
    } catch(err)  {
        console.log(err);
        return [];
    }

    
}