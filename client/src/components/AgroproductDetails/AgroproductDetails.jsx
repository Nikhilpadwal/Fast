import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./AgroproductDetails.scss";

import Contact from "../../components/Contact/Contact";

import img1 from "../../assets/Product/singleleaf.png";
import img2 from "../../assets/Product/whitebg.png";
import img3 from "../../assets/Product/whiteline.png";
import Imulsifier from "../../assets/Product/04.jpg";

import { FaRegCompass } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BiSolidFlask } from "react-icons/bi";
import { PiVideoCameraBold } from "react-icons/pi";

function AgroproductDetails() {
  const location = useLocation();
  const category = location.state?.subcategories;

  if (!category) {
    return <div>No details found</div>;
  }

  const product = {
    productName: "Silicon Super Spreaders",
    productTag:
      "Enabling maximized agricultural coverage and spray efficiency for more than 35 years",
    productDetails:
      "Our history and expertise in agriculture has led us to the development of industry-leading technologies. Silwet super spreaders and super penetrants can enable spray treatments to spread up to 10 times more than conventional adjuvants to help growers improve yield and spray efficiency. And they work fast. \n\nWhen needed, Silwet adjuvants can allow treatments to absorb in 2 minutes or less—providing advanced uptake and rain fastness, so growers can apply treatments at the right time. And, they can help increase spray treatment performance—even against the hardest to wet plants and the toughest weeds. Silwet super spreaders and super penetrants can give growers the confidence that their spray treatment will deliver maximum performance.",
    imageUrl: [],
    benefits: [
      {
        title: "Improve crop yield with better agrochemical performance",
        description: [
          "10x more spreading than conventional spreaders, such as non-ionic surfactants.",
          "Improved adhesion to the plant surface.",
          "Rapid plant penetration when needed.",
          "Rain fastness in 2 minutes or less.",
          "Low phytotoxicity.",
        ],
      },
      {
        title: "Save time and money with greater spray efficiency",
        description: [
          "Lower spray volumes for fewer tank mixes and less water use.",
          "Lower adjuvant dose rates.",
          "Less run-off and wasted agrochemicals.",
        ],
      },
      {
        title: "Easy to use",
        description: [
          "High compatibility—mixes easily with a broad range of agrochemicals.",
          "Broad product portfolio for a wide range of crops, climates and treatments.",
          "OMRI Listed and IBD certified products available for use in organic farming.",
          "Stability over a broad pH range for in-can use.",
        ],
      },
    ],
    howToUse: {
      howToUseHeading:
        "Advanced, multifunctional technology for varying spray conditions",
      howToUseDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum interdum elit nec auctor. Vestibulum vitae iaculis erat, eu aliquam augue.",
      thumbnailUrl: "",
      videoUrl: "",
    },
    subCategories: [
      {
        title: "Silicon Super Spreaders",
        categoryImage: Imulsifier,
        products: [
          {
            productName: "Silicon Super Spreader",
            productCode: "FX SPT 500",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Silicon Super Spreader",
            productCode: "FX SP 100",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Silicon Super Spreader",
            productCode: "FENSIL 360",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Silicon Super Spreader",
            productCode: "FX SP 225",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Silicon Super Spreader",
            productCode: "FX SP 220",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Economical Silicon Super Spreader",
            productCode: "FX SP 330",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Silicon Super Spreader",
            productCode: "FX SPT 500",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Silicon Super Spreader",
            productCode: "FX SP 100",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Silicon Super Spreader",
            productCode: "FENSIL 360",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Silicon Super Spreader",
            productCode: "FX SP 225",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Silicon Super Spreader",
            productCode: "FX SP 220",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Economical Silicon Super Spreader",
            productCode: "FX SP 330",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Wetting Sticking Agent",
            productCode: "",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Chipko",
            productCode: "DIKO WET 80",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Orange Peel Oil Based Spreader",
            productCode: "FX SP CL",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "pH Stable Silicon Spreader",
            productCode: "FX SP pH",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
        ],
      },
      {
        title: "Nitrobenzene Emulsifier",
        categoryImage: Imulsifier,
        products: [
          {
            productName: "Silicon Super Spreader",
            productCode: "FX SPT",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Silicon Super Spreader",
            productCode: "FX SPT",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Silicon Super Spreader",
            productCode: "FX SPT",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
        ],
      },
      {
        title: "Emulsifier/Adjuvant for SL formulation",
        categoryImage: Imulsifier,
        products: [
          {
            productName: "Silicon Super Spreader",
            productCode: "FX SPT",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Silicon Super Spreader",
            productCode: "FX SPT",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Imidacloprid Emulsifier for SL",
            productCode: "NB ",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
        ],
      },
      {
        title: "Emulsifier for EC formulation",
        categoryImage: Imulsifier,
        products: [
          {
            productName: "Neem oil emulsifier",
            productCode: "DIKO ENO",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Karanja oil emulsifier",
            productCode: "DIKO EKO",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Fish oil emulsifier",
            productCode: "DIKO FIO",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Eucalyptus oil emulsifier",
            productCode: "DIKO U-Cal",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Neem oil emulsifier",
            productCode: "DIKO ENO",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Karanja oil emulsifier",
            productCode: "DIKO EKO",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Fish oil emulsifier",
            productCode: "DIKO FIO",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Eucalyptus oil emulsifier",
            productCode: "DIKO U-Cal",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Neem oil emulsifier",
            productCode: "DIKO ENO",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Karanja oil emulsifier",
            productCode: "DIKO EKO",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Fish oil emulsifier",
            productCode: "DIKO FIO",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Eucalyptus oil emulsifier",
            productCode: "DIKO U-Cal",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
        ],
      },
      {
        title: "Conventional Emulsifier",
        categoryImage: Imulsifier,
        products: [
          {
            productName: "Nonyl Phenol Ethoxylate 9.5 moles",
            productCode: "NP 9.5",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Nonyl Phenol Ethoxylate 4.5 moles",
            productCode: "NP 4.5",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "Polysorbate 80/ Tween 80",
            productCode: "NB 100",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
        ],
      },
      {
        title: "Surfactant for SC formulation",
        categoryImage: Imulsifier,
        products: [
          {
            productName: "SC formulation Paste",
            productCode: "FX PCS 80",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
          {
            productName: "SC surfactant pair",
            productCode: "NP 4.5",
            productImage: Imulsifier,
            quantities: ["50Kgs", "200Kgs"],
            description:
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie curabitur sed donec cubilia posuere enim commodo sociosqu. Sociosqu nibh semper conubia bibendum morbi integer nulla; imperdiet viverra. Consequat placerat proin penatibus primis sociosqu curae in dapibus. Ad class consectetur rhoncus; neque vivamus nisl integer. Volutpat class morbi magnis montes mi sem suspendisse. Nec sem volutpat, ullamcorper rhoncus laoreet per. Himenaeos hendrerit metus feugiat maximus lectus. Egestas aliquam nulla arcu a interdum inceptos libero. Porttitor libero congue tempus nibh ultrices aliquet eu.",
          },
        ],
      },
    ],
  };

  return (
    <div className="AgroproductDetails">
      <div className="product-section1">
        <div className="imgSection">
          <div className="left-section">
            <p>Fenton Chemical's</p>

            <h1 className="product-name">{product?.productName}</h1>

            <div className="jump-btn-container">
              <p>Jump to Product</p>
            </div>
          </div>

          <div className="right-section">
            <img className="leaf" src={img1} alt="" />
            <img className="whitebg" src={img2} alt="" />
            <img className="line" src={img3} alt="" />

            <div className="left-btn-section">
              <div className="btn-container">
                <p>Overview</p>
                <FaRegCompass size={"1.3rem"} />
              </div>

              <div className="btn-container">
                <p>Why us</p>
                <FaRegQuestionCircle size={"1.3rem"} />
              </div>

              <div className="btn-container">
                <p>How to</p>
                <PiVideoCameraBold size={"1.3rem"} />
              </div>

              <div className="btn-container">
                <p>Product</p>
                <BiSolidFlask size={"1.3rem"} />
              </div>
            </div>
          </div>
        </div>

        <div className="overlay"></div>
      </div>

      <div className="details-sec">
        <h1>{category.heading}</h1>
        <img src={category.image} alt={category.heading} />
        <p>{category.description}</p>
      </div>

      <Contact />
    </div>
  );
}

export default AgroproductDetails;
