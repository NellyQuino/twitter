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
    });


})