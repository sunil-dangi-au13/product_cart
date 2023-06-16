import axios from "axios";
// axios.defaults.baseURL= 'https://fakestoreapi.com/products'
//const url = 'https://fakestoreapi.com/products'


const ApiCall = async ({ action, method, headers, data }) => {
    const apiUrl = import.meta.env.VITE_BASE_URL
    const res = await axios({
       // url: "https://fakestoreapi.com/products",
        method,
        headers,
        baseURL: apiUrl,
        url: action,
        data,
    }).catch(error => {
        console.log('error',error.res.data);
        return error.res
    })
    return res.data
}

// axios({
//     url: "https://fakestoreapi.com/products",
//     method: "GET",
//     headers: {}
// }).then((res) => {
// console.log(res);

// }).catch((err) => {
//     console.log(err);
// })
//   const getusers = async()=>{
//         try {
//             const response = await axios.get(url)
//             const data = response.data
//             //console.log(data,'----->>>>');
//             return data


//         }
//          catch (error) {
//             //console.log("error handling");
//         }

//     }
//     return getusers();




export default ApiCall
