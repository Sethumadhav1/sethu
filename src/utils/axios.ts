import axios from "axios";
// import { pca } from "../main";
// import {PROD_CONFIG,QA_CONFIG,DEV_CONFIG} from "../config"
// export let config = DEV_CONFIG;
// if(process.env.REACT_APP_ENV === "dev"){
//   config = DEV_CONFIG
// }else if(process.env.REACT_APP_ENV === "qa"){
//   config = QA_CONFIG;
// }
const instance = axios.create({});

// const getToken = () => {
  // const accounts = pca.getAllAccounts();
  // const tokenRequest = {
  //   account: accounts[0],
  //   scopes: ["User.Read"],
  //   forceRefresh: true,
  // };
  // pca
  //   .acquireTokenSilent(tokenRequest)
  //   .then((response) => {
  //     if (response.idToken) {
  //       localStorage.setItem("idToken", response.idToken);
  //     } else {
  //       pca.loginRedirect({
  //         scopes: ["user.read"],
  //       });
  //     }
  //   })
  //   .catch((e) => console.log(e));

//       oktaAuth.tokenManager.renew("accessToken").then((response:any)=>{
//         if(!response.accessToken){
//           oktaAuth.signInWithRedirect({ originalUri: '/' });
//         }
//       }).catch((e)=>{
//         oktaAuth.signInWithRedirect({ originalUri: '/' });
//       })
// };

// setInterval(getToken, 3500000);

// instance.interceptors.request.use(
//   async (config) => {
//     const token = localStorage.getItem("okta-token-storage");

//     if (token) {
//       const authToken = JSON.parse(token)?.accessToken?.accessToken;
//       config.headers["Authorization"] = "Bearer " + authToken;
//     }
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );



export default instance;
