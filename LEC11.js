// studing call stack formed by different functions....

function hello() {
  console.log("hello");
}

function welcome() {
  hello();
  console.log("welcome");
}

console.log("welcome is being called");
welcome();
console.log("bye!");

//example 2

function one() {
  return 1;
}

function two() {
  return one() + one();
}

function three() {
  let ans = two() + one();
  console.log(ans);
}

three();

let h1 = document.querySelector("h1");

function changeColor(color, delay, ) {
  return new Promise(( resolve, reject) => {
    setTimeout(function () {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  })
  
}

async function demo() {
  try{
    await changeColor("red",2000);
    await changeColor("orange",2000);
    await changeColor("pink",2000);
  } catch(err) {
    console.log("error detected",err);
  }
  

  //by using this try catch block we can prevent this code....from that effect
  let a = 5;
  console.log(a);
 


}


// changeColor("red",1000)
// .then(()=> {
//   console.log("color changed to red");
//   return changeColor("orange",1000)
// })
// .then(()=> {
//   console.log("color changed to orange");
//   return changeColor("pink",1000)
// })
// .then(()=> {
//   console.log("color changed to pink");
  
// })


//callback hell...
// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("pink", 1000);
//   });
// });

//example 3

// function saveData(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// saveData(
//   "simran",
//   () => {
//     console.log("your data1 has been saved");
//     saveData(
//       "adhyan",
//       () => {
//         console.log("your data2 has also been saved");
//         saveData(
//           "hello dear",
//           () => {
//             console.log("your data3 has been saved");
//           },
//           () => {
//             console.log("weak connection data can't be saved");
//           }
//         );
//       },
//       () => {
//         console.log("weak connection dat can't be saved");
//       }
//     );
//   },
//   () => {
//     console.log("weak connection data can't be saved");
//   }
// );

function saveData(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("promise resolved"); //ans
    } else {
      reject("promise rejected"); //error
    }
  });
}

// saving data using promise....
saveData("simran")
  .then((ans) => {
    console.log("data1 has been saved",ans);
    return saveData("adhyan");
  })
  .then((ans)=> {
    console.log("data2 has been saved",ans);
    return saveData("hello dear");
  })
  .then((ans)=> {
    console.log("data3 has been saved");
  })
  .catch((error) => {
    console.log("promise rejected",error);
  });
