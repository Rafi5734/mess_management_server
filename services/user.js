import User from "../models/user.js";

const newUser = new User({
  userName: "test",
  email: "test@example.com",
  phone: "0198765654",
  category: "member",
  status: "student",
  working_place: "Gulshan",
});

newUser.save().then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})
