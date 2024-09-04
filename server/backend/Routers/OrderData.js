const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/orderData", async (req, res) => {
  let data = req.body.order_data;
   const originalDate = new Date(req.body.order_date);
   const day = originalDate.getDate();
   const month = originalDate.getMonth() + 1;
   const year = originalDate.getFullYear();
   const formattedDate = `${day}/${month}/${year}`;

   // Thay đổi định dạng ngày trong dữ liệu trước khi lưu trữ
   data.unshift({ Order_date: formattedDate });

  //Nếu email không tồn tại trong db thì sau đó. Còn lại thị: InsertMany()
  let eId = await Order.findOne({ email: req.body.email });

  if (eId === null) {
    try {

      const total_amount = data.reduce((total, item) => {
        const itemTotalPrice = item.totalPrice || 0; // Đảm bảo item.totalPrice là một số nguyên hợp lệ
        return total + itemTotalPrice;
      }, 0);
  

      await Order.create({
        email: req.body.email,
        fullName: req.body.fullName,
        phoneNumber: req.body.phoneNumber,
        city: req.body.city,
        district: req.body.district,
        ward: req.body.ward,
        address: req.body.address,
        note: req.body.note,
        status: req.body.status,
        total_amount: total_amount,
        order_data: [data],
      }).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      console.log(error.message);
      res.send("Lỗi từ máy chủ", error.message);
    }
  } else {
    try {
      // Lấy giá trị total_amount hiện tại từ cơ sở dữ liệu
      const currentTotalAmount = eId.total_amount || 0;

      // Tính toán giá trị mới cho total_amount bằng cách thêm giá trị mới từ order_data
      const newTotalAmount = data.reduce((total, item) => {
        const itemTotalPrice = item.totalPrice || 0;
        return total + itemTotalPrice;
      }, currentTotalAmount);
      await Order.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data }, total_amount: newTotalAmount }
      ).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      res.send("Lồi từ máy chủ", error.message);
    }
  }
});

//Đơn hàng
router.post("/myOrderData", async (req, res) => {
  try {
    
    let eId = await Order.findOne({ email: req.body.email });
    
    res.json({ orderData: eId });
  } catch (error) {
    res.send("Error", error.message);
  }
});

module.exports = router;
