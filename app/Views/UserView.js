const UserService = require('../services/UserService')
class UserView {

    static createUser(payload) {
        if (payload === null) {
            return { error: "payload no existe" }
        } else if ((typeof payload.username !== "string" || payload.username === null) || (typeof payload.name !== "string" || payload.name === null) ||
            (typeof payload.id !== "number" || payload.id === null)) {
            return { error: "necesitas tener un valor válido " }
        }

    }

}
module.exports = UserView