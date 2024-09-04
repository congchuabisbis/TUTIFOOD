import React from "react";
import ProductForm from "./ProductForm";

const Contact = () => {
  const handleAddProductClick = () => {
    // Xử lý khi nút "Thêm sản phẩm" được nhấp vào ở đây
    console.log("Thêm sản phẩm");
  };

  return (
    <div>
      <h1>Trang quản lý sản phẩm</h1>
      <button onClick={handleAddProductClick}>Thêm sản phẩm</button>
      <hr />
      <ProductForm />
    </div>
  );
};

export default Contact;
