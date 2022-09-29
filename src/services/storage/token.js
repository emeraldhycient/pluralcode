
const KEY = 'token'



const setToken = (token) => {
    try {
        sessionStorage.setItem(KEY, token)
    } catch (e) {
        return null
    }
}

const getToken = () => {
    try {
        const token = sessionStorage.getItem(KEY)
        return token
    } catch (e) {
        return null
    }
}

const unsetToken = () => {
    try {
        sessionStorage.removeItem(KEY)
    } catch (e) {
        return null
    }
}

export { setToken, getToken, unsetToken }