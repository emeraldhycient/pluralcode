export const checkNofiticationSent = (item) => {
    if (item.id) {
        const data = sessionStorage.getItem(item.id);
        if (data) {
            console.log("here brrrruh")
            return false
        }
        return true
    } else
        return false

}


