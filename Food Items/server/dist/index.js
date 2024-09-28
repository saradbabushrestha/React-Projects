"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(
  "/images",
  express_1.default.static(path_1.default.join(__dirname, "../public/images"))
);
app.get("/", (req, res) => {
  console.log(path_1.default.join(__dirname, "../public"));
  const foodData = [
    {
      name: "YOMARI",
      price: 55,
      text: "Yomari is a traditional Nepali sweet dumpling made from rice flour, filled with molasses and sesame seeds.",
      image: "/images/yomari.png",
      type: "breakfast",
    },
    {
      name: "CHATTAMARI",
      price: 80,
      text: "Chattamari is a traditional Newari rice flour crepe, often topped with meat, eggs, or vegetables, and is sometimes referred to as Nepali pizza.",
      image: "/images/chatta.png",
      type: "lunch",
    },
    {
      name: "SAMAY BAJI",
      price: 250,
      text: "Samay Baji is a traditional Newari ceremonial dish featuring beaten rice, roasted meat, eggs, and spicy pickles.",
      image: "/images/samy.png",
      type: "dinner",
    },
    {
      name: "CHOILA",
      price: 130,
      text: "Choila is a spicy Newari dish made of grilled or smoked meat, typically seasoned with chili, garlic, and other spices.",
      image: "/images/choila.png",
      type: "lunch",
    },
    {
      name: "GORAMARI",
      price: 30,
      text: "Goramari is a traditional Newari fried snack made from wheat flour, typically enjoyed during festivals or special occasions.",
      image: "/images/gora.png",
      type: "breakfast",
    },
    {
      name: "SAPUMICHA",
      price: 180,
      text: "Sapu Michā is a traditional Newari dish made from buffalo leaf tripe, stuffed with bone marrow, and deep-fried until crispy.",
      image: "/images/sapi.png",
      type: "dinner",
    },
  ];
  res.json(foodData);
});
app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map
