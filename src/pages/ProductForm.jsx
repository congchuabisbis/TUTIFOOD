import React, { useState } from "react";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductDescriptionChange = (event) => {
    setProductDescription(event.target.value);
  };

  const handleProductImageChange = (event) => {
    const file = event.target.files[0];
    setProductImage(file);

    // Tạo URL đến hình ảnh đã chọn để hiển thị xem trước
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Kiểm tra xem đã chọn hình ảnh hay chưa
    if (!productImage) {
      console.log("Vui lòng chọn hình ảnh sản phẩm");
      return;
    }

    try {
      // Tạo đường dẫn mới cho hình ảnh
      const imageName = Date.now() + "_" + productImage.name;
      const imagePath = `images/${imageName}`;

      // Tải hình ảnh lên thư mục images bằng cách sử dụng fetch hoặc axios
      const formData = new FormData();
      formData.append("image", productImage);

      const response = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        console.log("Lỗi khi tải lên hình ảnh");
        return;
      }

      // Lưu thông tin sản phẩm cùng với đường dẫn hình ảnh vào CSDL hoặc xử lý theo nhu cầu của bạn
      const productData = {
        name: productName,
        description: productDescription,
        image: imagePath,
      };

      // Tiếp tục xử lý thông tin sản phẩm và ảnh đã được chọn ở đây
      console.log("Thông tin sản phẩm:", productData);
    } catch (error) {
      console.log("Lỗi khi tải lên hình ảnh:", error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Tên sản phẩm:</label>
        <input
          type="text"
          value={productName}
          onChange={handleProductNameChange}
        />
      </div>
      <div>
        <label>Mô tả sản phẩm:</label>
        <textarea
          value={productDescription}
          onChange={handleProductDescriptionChange}
        />
      </div>
      <div>
        <label>Ảnh sản phẩm:</label>
        <input type="file" onChange={handleProductImageChange} />
      </div>
      {imagePreview && (
        <div>
          <label>Xem trước:</label>
          <img src={imagePreview} alt="Ảnh sản phẩm" />
        </div>
      )}
      <button type="submit">Xác nhận thêm sản phẩm</button>
    </form>
  );
};

export default ProductForm;
