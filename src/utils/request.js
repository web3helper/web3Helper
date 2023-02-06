import axios from "axios";
import store from "../store";
import router from "../router";
// const baseURL = "http://apipc-xiaotuxian-front.itheima.net";
const baseURL = "/mock";
const instance = axios.create({
    baseURL,
    timeout: 5000
})

instance.interceptors.request.use(
    (config) => {
        const { profile } = store.state.user
        if(profile.token) {
            config.headers.Authorization = `Bearer ${profile.token}`
        }
        return config
    },
    (err) => {
        return Promise.reject(err)
    },
)

instance.interceptors.response.use(
    (res) => {
       return res.data
    },
    (err) => {
        if(err.response && err.response.status === 401) {
           store.commit("user/setUser", {});
           const fullPath = encodeURIComponent(router.currentRoute.value.fullPath);
           router.push("/login/redirecturl" + fullPath)
        }
        return Promise.reject(err)
    },
)

export default(url, method, submitData)=>{
    return instance({
        url,
        method,
        [params.toLowerCase() === "get" ? "params" : "data"]:submitData,
    })
}