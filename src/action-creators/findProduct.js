export const findProduct = (name) => {
    return ({type: "FIND_PRODUCT", payload: name})
}