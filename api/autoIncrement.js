module.exports = (request, response, next) => {
    if (request.method === 'POST') {
        request.body.createdAt = Date.now()
    }

    next();
}
