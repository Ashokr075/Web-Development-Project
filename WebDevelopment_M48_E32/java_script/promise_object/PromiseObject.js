// promise object(pending->resolved(fulfilled) or rejected)(settled)
// synchronous operation
console.log("StepOne");
console.log("StepTwo");
console.log("StepThree");
console.log("StepFour");
console.log("StepFive");
// asynchronous operation
setTimeout(()=>{
    console.log("Asynchronous Operation Starts");
},2000);

// fetch user informations
function fetchUserInformations(){
    setTimeout(()=>{
        // asynchronous operations
        let isUserInformationsFetched=false;
        if(isUserInformationsFetched){
            return "User informations fetched";
        }
        else{
            return "User informations have not fetched";
        }
    },5000);
}
console.log(fetchUserInformations());

// fetch user data
function fetchUserData(){
    let fetchUserDataPromise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // asynchronous operations
            let isUserDataFetched=false;
            if(isUserDataFetched){
                resolve("User data fetched.");
            }
            else{
                reject("User data have not fetched.");
            }
        },5000);
    });
    return fetchUserDataPromise;
}
fetchUserData()
.then((promiseResult)=>{
    console.log(promiseResult);
})
.catch((promiseResult)=>{
    console.log(promiseResult);
});

let placeOrderButton=document.getElementById("place_order_button");
let trackPackagePromiseObjectStatus=document.getElementById("track_package_promise_object_status");
// track the amazon package
function trackAmazonPackage(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // asynchronous operations
            let isOrderPlaced=true;
            if(isOrderPlaced){
                resolve("Order placed successfully.");
            }
            else{
                reject("Order have not placed.");
            }
        },5000);
    });
}
placeOrderButton.addEventListener("click",()=>{
    trackAmazonPackage()
    .then((promiseResult)=>{
        trackPackagePromiseObjectStatus.textContent=promiseResult;
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                let isProductShipped=true;
                if(isProductShipped){
                    resolve("Product shipped.");
                }
                else{
                    reject("Product have not shipped.");
                }
            },5000);
        });
    })
    .then((promiseResult)=>{
        trackPackagePromiseObjectStatus.textContent=promiseResult;
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                // asynchronous operations
                let isProductOutForDelivery=true;
                if(isProductOutForDelivery){
                    resolve("Product is arriving today.");
                }
                else{
                    reject("Product is not out for delivery.");
                }
            },5000);
        });
    })
    .then((promiseResult)=>{
        trackPackagePromiseObjectStatus.textContent=promiseResult;
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                // asynchronous operations
                let isProductDelivered=true;
                if(isProductDelivered){
                    resolve("Product delivered successfully.");
                }
                else{
                    reject("Product have not delivered.");
                }
            },5000);
        });
    })
    .then((promiseResult)=>{
        trackPackagePromiseObjectStatus.textContent=promiseResult;
    })
    .catch((promiseResult)=>{
        trackPackagePromiseObjectStatus.textContent=promiseResult;
    });
});