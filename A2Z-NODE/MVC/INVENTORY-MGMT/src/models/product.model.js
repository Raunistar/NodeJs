export default class ProductModel {
  constructor(_id, _name, _desc, _price, _imageUrl) {
    this.id = _id;
    this.name = _name;
    this.desc = _desc;
    this.price = _price;
    this.imageUrl = _imageUrl;
  }

  static get() {
    return products;
  }
}
var products = [
  {
    id: 1,
    name: "Atomic Habits",
    desc: "A supremely practical and useful book.",
    price: "$19.99",
    imageUrl:
      "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    name: "Ikigai",
    desc: "The Japanese secret to a long and happy life.",
    price: "$29.99",
    imageUrl:
      "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg",
  },
  {
    id: 3,
    name: "Deep Work",
    desc: "RULES FOR FOCUSED SUCCESS IN A DISTRACTED WORLD.",
    price: "$12.99",
    imageUrl:
      "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg",
  },
];
