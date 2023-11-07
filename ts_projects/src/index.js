var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var getUserName = document.querySelector("#user");
var formSubmi = document.querySelector(".form");
var mainContainer = document.querySelector(".main_container");
// reusable fun
function myCustomFetcher(url, options) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url, options)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Network respomse was not ok - status: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    return [2 /*return*/, data];
            }
        });
    });
}
// Let's display the card UI
var showResultUI = function (singleUser) { };
// UserData[] - means array of an object
function fetchUserData(url) {
    myCustomFetcher(url, {}).then(function (userInfo) {
        for (var _i = 0, userInfo_1 = userInfo; _i < userInfo_1.length; _i++) {
            var singleUser = userInfo_1[_i];
            showResultUI(singleUser);
            //   console.log("login" + singleUser.url);
        }
    });
}
// default function call
fetchUserData("https://api.github.com/users");
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
