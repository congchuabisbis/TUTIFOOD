const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecrect = "LeTuanKiet$#";

// phương thức tạo người dùng mới
router.post("/createuser",[
  //Validate email và password
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    // password must be at least 5 chars long
    body('password','Incorrect Password').isLength({ min: 5 })
], async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

     //Mã hóa password
    const salt = await bcrypt.genSalt(10);
    
    let secPassword = await bcrypt.hash(req.body.password, salt);


    try {
        await User.create({
          name: req.body.name,
          password: secPassword,
          email: req.body.email,
          location: req.body.location,
        }).then(res.json({ success: true }));
        
    } catch (error) {
        console.log(error)
        res.json({ success: false });
    }
})

//Đăng nhập
router.post("/loginuser",[
    //Validate email và password
    body('email').isEmail(),
    // password must be at least 5 chars long
    body('password','Incorrect Password').isLength({ min: 5 })
],async(req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  

  //Kiểm tra email có trùng trong db không
  let email = req.body.email;
  let password = req.body.password;
  
 
    try {
      let userData = await User.findOne({ email });

      if (!userData) {
        return res.status(400).json({ error: "Sai email vui lòng thử lại" });
      }
      //Kiểm tra mật khẩu có trùng trong db không
      const pwdCompare = await bcrypt.compare(password, userData.password);
      if (!pwdCompare) {
        return res.status(400).json({ error: "Sai mật khẩu vui lòng thử lại" });
      }

      const data = {
        user: {
          id: userData.id,
        },
      };
      // Lấy thông tin vai trò từ cơ sở dữ liệu
      const isAdmin = userData.admin;
      const authToken = jwt.sign(data, jwtSecrect);
      return res.json({ success: true, authToken: authToken, isAdmin });
    } catch (error) {
        console.log(error)
        res.json({ success: false });
    }
})

module.exports = router;
