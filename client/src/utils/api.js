import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:3000"});



// axios<method> (BASEURL + "<url>")
export const jwtLogin = (formData) => API.post("/auth/login", formData)
export const jwtSignup = (formData) => API.post("/auth/signup", formData)