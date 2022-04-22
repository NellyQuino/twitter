const User = require('./../../app/models/User')

describe("Test para User", () => {
    test("Creacion de User", () => {
            const user = new User(1, "nellyquino", "nelly", "Bio", "dateCreated", "lastUpdated")
            expect(user.id).toBe(1)
            expect(user.username).toBe("nellyquino")
            expect(user.name).toBe("nelly")
            expect(user.bio).toBe("Bio")
            expect(user.dateCreated).toBe("dateCreated")
            expect(user.lastUpdated).toBe("lastUpdated")


        })
        /*test("Requerimiento 2: Fecha en atributos de User", () => {
        const user = new User(2, "nellyjqh", "nelly", "Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
    test("Requerimiento 3: Agregando getters", () => {
        const user = new User(2, "nellyjqh", "nelly", "Bio")
        expect(user.getUsername).toBe("nellyjqh")
    })
    test("Requerimiento 4: Agregar setters", () => {
        const user = new User(2, "nellyjqh", "nelly", "Bio")
        user.setUsername = "jazminqh"
        expect(user.username).toBe("jazminqh")
    })/** */

})