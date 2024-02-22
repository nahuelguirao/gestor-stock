module.exports.nameValidator = (name) => {
    return name.length <= 100
}

module.exports.productTitleValidator = (title) => {
    return title.length <= 255
}