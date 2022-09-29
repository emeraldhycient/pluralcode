
const KEY = 'user'



const setUser = (User) => {
    try {
        localStorage.setItem(KEY, User)
    } catch (e) {
        return null
    }
}

const getUser = () => {
    try {
        const User = localStorage.getItem(KEY)
        return User
    } catch (e) {
        return null
    }
}

const unsetUser = () => {
    try {
        localStorage.removeItem(KEY)
    } catch (e) {
        return null
    }
}

export { setUser, getUser, unsetUser }