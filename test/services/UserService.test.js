 const { TestWatcher } = require('jest')
 const UserService = require('../../app/services/UserService')

 describe("Test for UserServices", () => {
     test("1.Create a new user using the UserService", () => {
         const user = UserService.create(1, "nellyquino", "nelly")
         expect(user.username).toBe("nellyquino")
         expect(user.name).toBe("nelly")
         expect(user.id).toBe(1)
         expect(user.bio).not.toBeUndefined()
     })
 })