function loader(source) { // loader参数--代码
    console.log('loader11111111111')
    return source
}

loader.pitch = function() {
    console.log('loader1-pitch')
}

module.exports = loader