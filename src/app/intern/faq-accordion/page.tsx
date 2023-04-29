"use client";

import img from "@/assets/images/faq.gif";
import Image from "next/image";

import { IoIosArrowUp } from "react-icons/io";

const accordions = [
  {
    title: "What is Bookmark?",
    content: "Lorem ipsum dolor sit amet.",
  },
  {
    title: "What is maximum file size?",
    content:
      "No more than 2GB. All files İn your account must fit your allotted storage space.",
  },
  {
    title: "Can I cancel my subscription?",
    content:
      "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
  },
  {
    title: "How do I reset my password?",
    content:
      "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
  },
  {
    title: "Do you provide additional support?",
    content:
      "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
  },
];

export default function FaqAccordion() {
  const handleClick = (e: any) => {

    const accordionItems = document.querySelectorAll(".accordion-item");

    if(e.currentTarget.classList.contains("opened"))
    {
      e.currentTarget.classList.remove("opened");
      return;
    }
    
    accordionItems.forEach((item) => {
      item.classList.remove("opened");
    });

    e.currentTarget.classList.toggle("opened");
  };

  return (
    <div className="faq-accordion">
      <div className="left">
        <div className="faq-img">
          <Image src={img} alt="faq" />
        </div>
      </div>
      <div className="right">
        <div className="accordion-wrapper">
          <div className="faq-accordion-content">
            <h1 className="black">FAQ</h1>
            <div className="accordion">
              {accordions.map((item, key) => (
                <div
                  className={`accordion-item`}
                  key={key}
                  onClick={handleClick}
                >
                  <div className="accordion-title">
                    <h2>{item.title}</h2>
                    <IoIosArrowUp color="#d88d77" fontSize={24} />
                  </div>
                  <p className="accordion-content">
                    You can invite up to 2 additional users on the Free plan.
                    There is no limit on team members for the Premium plan.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
