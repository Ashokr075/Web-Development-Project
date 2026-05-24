// user data API fetching
// fetch("url(API)"):Promise<Response>
let userDataTableBody=document.querySelector("#user_data_table_body");
let serialNumber=0;

fetch("UserDataAPI.json")
.then((promiseResult)=>{
    return promiseResult.json();
})
.then((promiseResult)=>{
    promiseResult.map((userData)=>{
        userDataTableBody.innerHTML+=
        `
            <tr>
                <td>${++serialNumber}</td>
                <td>${userData.username}</td>
                <td>${userData.password}</td>
                <td>${userData.emailUsername}</td>
            </tr>
        `;
    });
})