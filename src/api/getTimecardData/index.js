module.exports = async function (context, req) {
    context.res = {
        body: context.bindings.documents,
        headers: { 'Content-Type': 'application/json' }
    };
};