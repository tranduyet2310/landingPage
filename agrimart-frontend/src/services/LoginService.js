import axios from "./customizeAxios";

const loginUser = (email, password) => {
    return axios.post("/api/auth/login", {email, password});
}

export { loginUser };