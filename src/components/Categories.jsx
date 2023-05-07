import React from "react";

const category = [
  {
    img: "https://cdn.shopify.com/s/files/1/0059/0630/1017/files/WechatIMG322711_360x.jpg?v=1665301747",
    name: "Custom Keyboards",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0059/0630/1017/files/K8-pro-lifestyle1_360x.jpg?v=1665300076",
    name: "Normal Profile Keyboards",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0059/0630/1017/files/K3-PRO-HOME-PAGE-1_360x.jpg?v=1666692004",
    name: "Low Profile Keyboards",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0059/0630/1017/files/K3-PRO-HOME-PAGE-1_360x.jpg?v=1666692004",
    name: "Mice",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0059/0630/1017/files/home-ISO-1_360x.jpg?v=1666693640",
    name: "ISO/JIS Layout Keyboards",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0059/0630/1017/files/Switches-1_360x.jpg?v=1633951242",
    name: "Switches",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0059/0630/1017/files/KEYCAPS-1_47df00e1-98b4-4f9b-9112-3ee16c87dd27_360x.jpg?v=1677723341",
    name: "Keycaps",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0059/0630/1017/files/Palm-Rest-1_360x.jpg?v=1633951800",
    name: "Palm Rests",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0059/0630/1017/files/Accessories-1_360x.jpg?v=1633951855",
    name: "Other Accessories",
  },
];

const Categories = () => {
  return (
    <section className="container mx-auto flex flex-wrap mt-40 gap-x-12 justify-center gap-y-8">
      {category.map((elem, index) => {
        return (
          <div
            className="w-96 flex flex-col p-5  items-center shadow-md hover:cursor-pointer"
            key={index}
          >
            <img src={elem.img} alt={elem.name} />
            <p className="mt-5 text-2xl">{elem.name}</p>
          </div>
        );
      })}
    </section>
  );
};
export default Categories;
