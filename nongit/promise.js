let myPromise = ()=> new Promise(function(accept, reject){
    let choice = confirm("do you want to leave this blog?: ");
    //   console.log(choice);
    if (choice === true){
        accept(true)
    }else{
        reject(false);
    }
}) // create promise
// create test function
//pass as anonymous function


console.log("before promise");
test(()=>{
    console.log("after promise")
});


async function test(cb){
    try{
        let userChoice = await myPromise();
        if(userChoice) {
            console.log("blog deleted successfully");
            cb();
        }else{
            cb()}
            // console.log(userChoice);
    } catch (err) {
        console.error(err)
    }
}
// function myDisplayer(some){console.log("demo") = some;}
// let myPromise = new
// Promise(function(myResolve, 
//     myReject){
//         let x = 0;
//         if (x == 0){
//             myResolve("OK");
//         } else {myReject("ERROR");
//     }
//     });

//     myPromise.then(function(value){myDisplayer(value);}, 
//     function(error){myDisplayer(error);});



// setTimeout(fuction(){
//     myFunction("I love you !!!");
// }, 3000);
// function myFunction(value){
//     console.log("demo");
// }


const promise = new Promise((resolve, reject) => {
    const num = Math.random();
    if (num >= 0.5){
        resolve("Promise fulfilled!");
    } else {
        reject("Promise failed");
    }

});


// function handleResolve(value){
//     console.log(value);
// }
// function handleReject(reason){
//     console.log(reason);
// }

// promise.then(handleResolve, handleReject);

Promise.resolve("successful").then((result) => console.log(result));
Promise.reject("not successful").then(
    () => {}, (reason) => console.log(reason));




