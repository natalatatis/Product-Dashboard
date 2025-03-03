//each product contains an id, their name, price in USD, their image path and a description

const products = [
  {
    id: 1,
    name: "MoYu RS3M 2020",
    price: 8.99,
    image: "/images/rsrm2020.jpg",
    description:
      "A budget-friendly 3x3 speed cube with smooth turning, strong magnets, and excellent corner cutting, making it a top choice for beginners and advanced cubers alike.",
  },
  {
    id: 2,
    name: "MoYu WeiLong WRM V9 3x3 (20-Magnet Ball-Core + MagLev + UV)",
    price: 47.99,
    image: "/images/weilongv9.jpg",
    description:
      "An advanced 3x3 cube featuring a 20-magnet ball-core, MagLev technology, and a UV-coated surface for smoother and more stable performance.",
  },
  {
    id: 3,
    name: "MoYu Super WeiLong 3x3 V2 (20-Magnet Ball-Core + MagLev + UV)",
    price: 81.99,
    image: "/images/superweilong22.png",
    description:
      "The next-level Super WeiLong 3x3 with enhanced MagLev technology, ultra-strong magnets, and a UV coating for improved grip and handling, used by the World Record holder.",
  },
  {
    id: 4,
    name: "GAN15 MagLev UV 3x3",
    price: 69.99,
    image: "/images/gan15.jpg",
    description:
      "GAN’s latest innovation featuring MagLev, enhanced corner cutting, and a UV finish for better grip, offering an incredibly fast and effortless solving experience, used by some of the fastest cubers.",
  },
  {
    id: 5,
    name: "GAN14 MagLev Pro Aurora 3x3 (Limited Edition)",
    price: 99.99,
    image: "/images/ganaurora.jpg",
    description:
      "A limited edition flagship 3x3 cube from GAN with MagLev, customizable settings, and an exclusive Aurora color scheme for collectors and serious speedcubers.",
  },
  {
    id: 6,
    name: "YuXin Little Magic",
    price: 5.99,
    image: "/images/yuxin.jpg",
    description:
      "A great budget cube with smooth turns, decent corner cutting, and lightweight design—ideal for beginners looking to get into speedcubing.",
  },
  {
    id: 7,
    name: "Dayan GuHong Pro M 3x3 55mm (MagLev)",
    price: 19.99,
    image: "/images/guhongpro.jpg",
    description:
      "A compact and fast 3x3 cube with MagLev technology, offering a lightweight, effortless feel and great control for speedcubers.",
  },
  {
    id: 8,
    name: "Ex-Mars Cube 3x3",
    price: 99.99,
    image: "/images/exmars.jpg",
    description:
      "A futuristic smart cube with an electronic mechanism that allows automatic scrambling, guided solving, and AI-assisted features.",
  },
  {
    id: 9,
    name: "Gan Robot",
    price: 74.99,
    image: "/images/ganrobot.jpg",
    description:
      "A high-tech robot designed to scramble and solve GAN cubes automatically, perfect for demonstrations and practicing algorithms.",
  },
  {
    id: 10,
    name: "MoYu 21x21",
    price: 1499.99,
    image: "/images/2121.jpg",
    description:
      "The world's largest mass-produced cube, featuring 21 layers of intricate turning and engineering, built for extreme puzzle enthusiasts and collectors.",
  },
];

export default products;
