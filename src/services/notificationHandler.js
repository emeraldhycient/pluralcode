export const checkNofiticationSent = (item) => {
    if (item.id) {
        const data = sessionStorage.getItem(item.id);
        if (data)
            return false
        else {
            sessionStorage.setItem(item.id, JSON.stringify(item))
            return true
        }
    } else
        return false

}


