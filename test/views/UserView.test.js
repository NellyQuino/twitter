const User = require('../../app/models/User')
const UserView = require('./../../app/views/UserView')


describe("Test for UserView", () => {
    test("Return an error object when try to create a new user with an null pyload", () => {
        const payload = null
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/payload no existe/)
    })
    test("Return an error object when try to create a new user with pyload with invalid properties", () => {
        const payload = { username: null, name: 12, id: "id" }
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/necesitas tener un valor válido/)
    })
    test("Return an error object when try to create a new user a payload with missing properties ", () => {

        const payload = { username: "Username" }
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/necesitas tener un valor válido/)

    })
    test("Create a user by a given a valid payload", () => {
        const payload = { id: 1, username: "username", name: "name" }
        const result = UserView.createUser(payload)
        expect(result.id).toBe(1)
        expect(result.username).toBe("username")
        expect(result.name).toBe("name")




    })




})