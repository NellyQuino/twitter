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
     test("2. Get all user data in a list", () => {
         const user = UserService.create(1, "nellyquino", "nelly")
         const getInfoUserList = UserService.getInfo(user)

         expect(getInfoUserList[0]).toBe(1)
         expect(getInfoUserList[1]).toBe("nellyquino")
         expect(getInfoUserList[2]).toBe("nelly")
         expect(getInfoUserList[3]).toBe("Sin bio")
     })

     test("3. Update username", () => {
         const user = UserService.create(1, "nellyquino", "nelly")

         UserService.updateUserUsername(user, "nellyq")
         expect(user.username).toBe("nellyq")
     })
 })