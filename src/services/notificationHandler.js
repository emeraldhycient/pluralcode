export const checkNofiticationSent = (item) => {
    if (item.id) {
        const data = sessionStorage.getItem(item.id);
        if (data) {
            console.log("here brrrruh", data)
            return false
        }
        return true
    }
    return false
}


