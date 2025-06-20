// src/data/products.ts
import productImg from "../../assets/meat-plate.png";

import chickenIcon from "../../assets/chicken-cat-icon-gray.svg";
import beefIcon from "../../assets/cow-cat-icon-gray.svg";
import lambIcon from "../../assets/lamb-cat-icon-gray.svg";

import chickenIconHover from "../../assets/chicken-cat-icon-yellow.svg";
import beefIconHover from "../../assets/cow-cat-icon-yellow.svg";
import lambIconHover from "../../assets/lamb-cat-icon-yellow.svg";

export interface Product {
  name: string;
  description: string;
  image: string;
}

export interface Category {
  label: string;
  key: string;
  image: string;
  hoverImage: string;
  products: {
    type: string;
    items: Product[];
  }[];
}

export const CATEGORIES: Category[] = [
  {
    label: "Beef Products",
    key: "beef",
    image: beefIcon,
    hoverImage: beefIconHover,
    products: [
      {
        type: "Fresh",
        items: Array(4).fill({
          name: "BEEF MINCE ( LOCAL )",
          description:
            "Freshly ground local beef — 100% natural, no additives. Perfect for everyday meals like burgers, pasta, or kofta.",
          image: productImg,
        }),
      },
      {
        type: "Frozen",
        items: Array(4).fill({
          name: "BEEF MINCE ( LOCAL )",
          description:
            "Freshly ground local beef — 100% natural, no additives. Perfect for everyday meals like burgers, pasta, or kofta.",
          image: productImg,
        }),
      },
      {
        type: "Chilled",
        items: Array(4).fill({
          name: "BEEF MINCE ( LOCAL )",
          description:
            "Freshly ground local beef — 100% natural, no additives. Perfect for everyday meals like burgers, pasta, or kofta.",
          image: productImg,
        }),
      },
    ],
  },
  {
    label: "Lamb Products",
    key: "lamb",
    image: lambIcon,
    hoverImage: lambIconHover,
    products: [
      {
        type: "Fresh",
        items: Array(3).fill({
          name: "LAMB CHOPS",
          description: "Tender local lamb chops, perfect for grilling.",
          image: productImg,
        }),
      },
      {
        type: "Frozen",
        items: Array(3).fill({
          name: "LAMB CHOPS",
          description: "Tender local lamb chops, perfect for grilling.",
          image: productImg,
        }),
      },
      {
        type: "Chilled",
        items: Array(3).fill({
          name: "LAMB CHOPS",
          description: "Tender local lamb chops, perfect for grilling.",
          image: productImg,
        }),
      },
    ],
  },
  {
    label: "Chicken Products",
    key: "chicken",
    image: chickenIcon,
    hoverImage: chickenIconHover,
    products: [
      {
        type: "Chilled",
        items: Array(3).fill({
          name: "CHICKEN BREAST",
          description: "Boneless chicken breast, ready to cook.",
          image: productImg,
        }),
      },
      {
        type: "Frozen",
        items: Array(3).fill({
          name: "CHICKEN BREAST",
          description: "Boneless chicken breast, ready to cook.",
          image: productImg,
        }),
      },
      {
        type: "Fresh",
        items: Array(3).fill({
          name: "CHICKEN BREAST",
          description: "Boneless chicken breast, ready to cook.",
          image: productImg,
        }),
      },
    ],
  },
];
