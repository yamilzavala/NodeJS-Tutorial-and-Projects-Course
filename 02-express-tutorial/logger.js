const logger = (req, res, next) => {
    const timer = new Date().getFullYear();
    const url = req.url;
    const method = req.method;
    console.log(method, url, timer)
    next()
}

module.exports = logger;