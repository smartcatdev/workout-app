Vue.prototype.$http = Axios
const token = localStorage.getItem(Settings.TOKEN_ID)
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
}