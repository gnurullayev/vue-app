export const setItem = (key, data) => {
    try{
        localStorage.setItem(key, data)
    }catch(error) {
        console.log("Error saving data");
    }
}

export const getItem = key => {
    try {   
        localStorage.getItem(key)
    }catch(error) {
        console.log("Error getting data");
        return null
    }
}