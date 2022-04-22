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
     test("4. Give a list of users give me he list of usernames", () => {
         const user1 = UserService.create(1, "nelly1", "nelly")
         const user2 = UserService.create(1, "nelly2", "nelly")
         const user3 = UserService.create(1, "nelly3", "nelly")

         const usernames = UserService.getAllUsernames([user1, user2, user3])

         expect(usernames).toContain("nelly1")
         expect(usernames).toContain("nelly2")
         expect(usernames).toContain("nelly3")
     })
 })