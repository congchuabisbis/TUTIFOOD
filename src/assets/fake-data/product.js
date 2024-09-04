// all images imported from images directory
import product_01_image_01 from "../images/product_01.png";
import product_01_image_02 from "../images/product_011.png";
import product_01_image_03 from "../images/product_012.png";

import product_02_image_01 from "../images/product_02.png";
import product_02_image_02 from "../images/product_022.png";
import product_02_image_03 from "../images/product_023.png";

import product_03_image_01 from "../images/product_03.png";
import product_03_image_02 from "../images/product_032.png";
import product_03_image_03 from "../images/product_033.png";

import product_04_image_01 from "../images/product_04.jpg";
import product_04_image_02 from "../images/product_042.jpg";
import product_04_image_03 from "../images/product_043.jpg";

import product_05_image_01 from "../images/product_05.png";
import product_05_image_02 from "../images/product_052.png";
import product_05_image_03 from "../images/product_053.png";

import product_06_image_01 from "../images/product_06.png";
import product_06_image_02 from "../images/product_062.png";
import product_06_image_03 from "../images/product_063.png";

import product__010 from "../images/product__010.png";
import product__011 from "../images/product__011.png";
import product__012 from "../images/product__012.png";
import product__013 from "../images/product__013.png";
import product__014 from "../images/product__014.png";
import product__015 from "../images/product__015.png";

const products = [
  {
    id: "01",
    title: "Gà Rán",
    mota: "1 miếng gà rán vị truyền thống",
    price: "35.000 VND",
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Gà rán",
  },

  {
    id: "02",
    title: "Gà Rán Sốt Buffalo ",
    mota: "1 miếng gà sốt buffalo",
    price: "40.000 VND",
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Gà rán",
  },

  {
    id: "03",
    title: "Burger Cá",
    mota: "1 burger cá ",
    price: "55.000 VND",
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Burger",
  },

  {
    id: "04",
    title: "Pizza Hải Sản",
    mota: "1 pizza hải sản (vừa) ",
    price: "125.000 VND",
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",
  },
  {
    id: "05",
    title: "Burger Bò",
    mota: "1 burger bò",
    price: "55.000 VND",
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Burger",
  },
  {
    id: "06",
    title: "Gà Pie",
    mota: "1 phần gà pie",
    price: "35.000 VND",
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_01_image_03,
    category: "Thức ăn nhẹ",
  },
  {
    id: "07",
    title: "Gà Rán Sốt Đậu",
    price: "40.000 VND",
    mota: "1 miếng gà rán sốt đậu",
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Gà rán",
  },
  {
    id: "08",
    title: "Mực Rán",
    mota: "3 miếng mực rán",
    price: "55.000 VND",
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Thức ăn nhẹ",
  },

  {
    id: "09",
    title: "Combo 5",
    mota: "4 miếng gà + 1 khoai tây chiên + 2 phô mai que + 2 pepsi",
    price: "170.000 VND",
    image01: product__011,
    category: "Combo",
  },

  {
    id: "10",
    title: "Combo 6",
    mota: "5 miếng gà + 1 popcorn (vừa) / 4 gà miếng nuggets + 2 pepsi",
    price: "220.000 VND",
    image01: product__012,
    category: "Combo",
  },
  {
    id: "11",
    title: "Combo 1 ",
    mota: "1 burger gà + 1 miếng gà rán + 1 ly coca",
    price: "70.000 VND",
    image01: product__010,
    category: "Combo",
  },
  {
    id: "12",
    title: "Combo 2 ",
    mota: "1 mì ý sốt gà viên + 1 miếng gà rán + 1 ly pepsi",
    price: "90.000 VND",
    image01: product__015,
    category: "Combo",
  },

  {
    id: "13",
    title: "Pizza Nhiệt Đới",
    price: "120.000 VND",
    mota: "1 pizza nhiệt đới (vừa)",
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",
  },
  {
    id: "14",
    title: "Cá Nugget",
    mota: "6 miếng cá nugget",
    price: "65.000 VND",
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Thức ăn nhẹ",
  },

  {
    id: "15",
    title: "Crunchy Bread ",
    mota: "1 miếng crunch bread",
    price: "35.000 VND",
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Thức ăn nhẹ",
  },

  {
    id: "16",
    title: "Trà Lipton",
    mota: "1 ly trà lipton lớn",
    price: "17.000 VND",
    image01: product__014,
    category: "Thức uống",
  },
  {
    id: "17",
    title: "Pepsi Lon",
    mota: "1 lon pepsi",
    price: "20.000 VND",
    image01: product__013,
    category: "Thức uống",
  },
];

export default products;
