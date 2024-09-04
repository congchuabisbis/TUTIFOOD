

// Kết nối với db
const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://lekiet524:123@cluster0.d0ntifh.mongodb.net/tutifood?retryWrites=true&w=majority&appName=AtlasApp";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // Thêm tùy chọn này cho driver MongoDB mới nhất
    });

    console.log("Đã kết nối");
    const foodItemsCollection = mongoose.connection.db.collection("food_items");
    const data = await foodItemsCollection.find({}).toArray();

    const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");
    const dataCat = await foodCategoryCollection.find({}).toArray();
    
    if (!data & !dataCat) {
      console.log("Error DB");
    } else {
      global.food_items = data;
      global.foodCategory = dataCat;
    }
   
  } catch (error) {
    console.error("Lỗi khi kết nối đến MongoDB:", error);
  }
};

module.exports = mongoDB;