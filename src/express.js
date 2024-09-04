const express = require("express");
const multer = require("multer"); // Sử dụng thư viện multer để xử lý tải lên
const app = express();
const port = 3000; // Chọn cổng của máy chủ

// Thiết lập nơi lưu trữ hình ảnh
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/images/"); // Đặt thư mục lưu trữ ảnh
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Định nghĩa tuyến đường để xử lý yêu cầu tải lên
app.post("/api/upload", upload.single("image"), (req, res) => {
  // Tại đây, bạn có thể xử lý tệp hình ảnh đã tải lên (ví dụ: lưu đường dẫn vào cơ sở dữ liệu)
  res.status(200).send("Tải lên thành công");
});

// Khởi chạy máy chủ Express
app.listen(port, () => {
  console.log(`Máy chủ Express đang lắng nghe tại cổng ${port}`);
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Lỗi máy chủ");
});
