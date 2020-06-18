module.exports = async function (context, documents) {
    context.bindings.signalRMessages = [{
        "target": "newData",
        "arguments": documents
    }];
};