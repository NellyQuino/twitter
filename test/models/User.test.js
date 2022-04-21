const User = require('./../../app/models/User')

describe("Test para User", () => {
    test("Creacion de User", () => {
        const user = new User(1, "nellyquino", "Bio", "dateCreated", "lastUpdated")
        expect(user.id).toBe(1)

    })
    test("Requerimiento 2: Fecha en atributos de User", () => {
        const user = new User(2, "nellyjqh", "nelly", "Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })

})