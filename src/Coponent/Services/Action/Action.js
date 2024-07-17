export const addStu = (data) => {

    return {
        type: "ADDCUS",
        payload: data
    }

}

export const getStu = () => {

    return {
        type: "GETCUS"
    }
}

export const singleStu = (id) => {

    return {
        type: "SINGLECUS",
        payload: id
    }
}


export const updateStu = (data) => {
    return {
        type: "UPDATECUS",
        payload: data
    }
}

export const deleteStu = (id) => {

    return {
        type: "DELETECUS",
        payload: id
    }
}