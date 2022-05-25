

const setAccessToken =(User)=>{
 localStorage.setItem("Access",JSON.stringify(User));
}
const setRefreshToken =(User)=>{
    localStorage.setItem("Refresh",JSON.stringify(User));
}
const getAccessToken =()=>{
    return JSON.parse(localStorage.getItem("Access"));
}
const getRefreshToken =()=>{
    return JSON.parse(localStorage.getItem("Refresh"));
}
const UpdateAccessToken=(Token)=>{
    let User = JSON.parse(localStorage.getItem("Access"));
    console.log("older Access token",User)
    User=Token
    localStorage.setItem("Access",JSON.stringify(User));
}

const TokenService ={
    setAccessToken,
    setRefreshToken,
    getAccessToken,
    getRefreshToken,
    UpdateAccessToken,
}
export default TokenService;