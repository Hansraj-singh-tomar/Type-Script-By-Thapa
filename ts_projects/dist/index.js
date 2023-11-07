"use strict";
const getUserName = document.querySelector("#user");
const formSubmit = document.querySelector(".form");
const mainContainer = document.querySelector(".main_container");
// reusable fun
async function myCustomFetcher(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Network respomse was not ok - status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
}
// Let's display the card UI
const showResultUI = (singleUser) => {
    const { avatar_url, login, url } = singleUser;
    mainContainer.insertAdjacentHTML("beforeend", `<div class='card'>
     <img src=${avatar_url} alt=${login} />
     <hr />
     <div class="card-footer">
       <img src="${avatar_url}" alt="${login}" />
       <a href="${url}"> Github </a>
     </div>
     </div>
     `);
};
// UserData[] - means array of an object
function fetchUserData(url) {
    myCustomFetcher(url, {}).then((userInfo) => {
        for (const singleUser of userInfo) {
            showResultUI(singleUser);
            //   console.log("login" + singleUser.url);
        }
    });
}
// default function call
fetchUserData("https://api.github.com/users");
// lets perform search functionality
formSubmit.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchTerm = getUserName.value.toLowerCase();
    try {
        const url = "https://api.github.com/users";
        const allUserData = await myCustomFetcher(url, {});
        const matchingUsers = allUserData.filter((user) => {
            return user.login.toLowerCase().includes(searchTerm);
        });
        // we need to clear previous data
        mainContainer.innerHTML = "";
        if (matchingUsers.length === 0) {
            mainContainer?.insertAdjacentHTML("beforeend", `<p class="empty-msg">No matching users found</p>`);
        }
        else {
            for (const singleUser of matchingUsers) {
                showResultUI(singleUser);
            }
        }
    }
    catch (error) {
        console.log(error);
    }
});
// const getUsername = document.querySelector("#user") as HTMLInputElement;
// const formSubmit = document.querySelector("#form") as HTMLFormElement;
// const main_container = document.querySelector(".main_container") as HTMLElement;
// // subscribe to thapa technical
// // so lets define the contract of an object
// interface UserData {
//   id: number;
//   login: string;
//   avatar_url: string;
//   location: string;
//   url: string;
// }
// // reusable fun
// async function myCustomFetcher<T>(
//   url: string,
//   options?: RequestInit
// ): Promise<T> {
//   const response = await fetch(url, options);
//   if (!response.ok) {
//     throw new Error(
//       ` Network response was not ok - status: ${response.status}`
//     );
//   }
//   const data = await response.json();
//   //   console.log(data);
//   return data;
// }
// // let display the card UI
// const showResultUI = (singleUser: UserData) => {
//   const { avatar_url, login, url } = singleUser;
//   main_container.insertAdjacentHTML(
//     "beforeend",
//     `<div class='card'>
//     <img src=${avatar_url} alt=${login} />
//     <hr />
//     <div class="card-footer">
//       <img src="${avatar_url}" alt="${login}" />
//       <a href="${url}"> Github </a>
//     </div>
//     </div>
//     `
//   );
// };
// // subscribe to thapa technical
// function fetchUserData(url: string) {
//   myCustomFetcher<UserData[]>(url, {}).then((userInfo) => {
//     for (const singleUser of userInfo) {
//       showResultUI(singleUser);
//       console.log("login " + singleUser.login);
//     }
//   });
// }
// // default fun call
// fetchUserData("https://api.github.com/users");
// // let perform search fun
// formSubmit.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const searchTerm = getUsername.value.toLowerCase();
//   try {
//     const url = "https://api.github.com/users";
//     const allUserData = await myCustomFetcher<UserData[]>(url, {});
//     const matchingUsers = allUserData.filter((user) => {
//       return user.login.toLowerCase().includes(searchTerm);
//     });
//     // we need to clear the previous data
//     main_container.innerHTML = "";
//     if (matchingUsers.length === 0) {
//       main_container?.insertAdjacentHTML(
//         "beforeend",
//         `<p class="empty-msg">No matching users found.</p>`
//       );
//     } else {
//       for (const singleUser of matchingUsers) {
//         showResultUI(singleUser);
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });
