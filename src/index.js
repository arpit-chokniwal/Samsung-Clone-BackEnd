const express = require("express");

const cors = require("cors");

const connect = require("./configs/db");

const { register, login } = require("./controllers/auth.controller");

const { body } = require("express-validator");

// const {
//   register,
//   login,
//   resetPassword,
// } = require("./controllers/auth.controller");


const mobileController = require("./controllers/mobile.controller");

const app = express();

app.use(cors());
app.use(express.json());

// app.post(
//   "/register",
//   body("username")
//     .isString()
//     .notEmpty()
//     .isLength({ min: 3 })
//     .withMessage("Username should be atleast of 3 character"),
//   body("number")
//     .isLength({ min: 10, max: 10 })
//     .withMessage("Mobile number should be 10 digit"),
//   body("email").custom(async (value) => {
//     const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (pattern.test(value)) {
//       return true;
//     }
//     throw new Error("You have entered an invalid email address!");
//   }),
//   body("password")
//     .isString()
//     .custom(async (value) => {
//       let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
//       if (pattern.test(value)) {
//         return true;
//       }
//       throw new Error("Password is not strong");
//     }),
//   register
// );
// app.post("/login", login);

// app.patch(
//   "/reset/:id",
//   body("newPassword")
//     .isString()
//     .custom(async (value) => {
//       let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
//       if (pattern.test(value)) {
//         return true;
//       }
//       throw new Error("Password is not strong");
//     }),
//   resetPassword
// );

app.post("/register", register);
app.post("/login", login);


/**
 * GooGle Oauth Service 👇
*/

const passport = require("./configs/google-oauth");
passport.serializeUser(function (user, done){
    done(null, user);
});

passport.deserializeUser(function (user, done){
    done(null, user);
});

app.get('/auth/google',
passport.authenticate('google', { scope:
  	[ 'email', 'profile' ] 
}));
 
app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: 'https://samsung-clone-masai.netlify.app',
        failureRedirect: '/auth/google/failure'
}));

app.use("/mobiles", mobileController);

app.listen(process.env.PORT || 4500, '0.0.0.0', async () => {
  try {
    await connect();
    console.log("listning to port 4500");
  } catch (err) {
    console.log(err);
  }
});

// app.listen(2349, async () => {
//   try {
//     await connect();
//     console.log("listning to port 2349");
//   } catch (err) {
//     console.log(err);
//   }
// });
