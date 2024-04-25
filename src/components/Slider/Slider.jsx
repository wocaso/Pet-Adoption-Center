import React, { useEffect, useRef, useState } from "react";
import "../Slider/Slider.css";
import { data } from "../../data.js";

function Slider() {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(false);
  const [sliderVisible, setSliderVisible] = useState(false);

  useEffect(() => {
    const listNode = listRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSliderVisible(true);
          } else {
            setSliderVisible(false);
          }
        });
      },
      { threshold: 0.5 } 
    );

    observer.observe(listNode);

    return () => {
      observer.unobserve(listNode);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderVisible) {
        scrollToImage("next");
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, sliderVisible]);

  useEffect(() => {
    const listNode = listRef.current;
    const listItem = listNode.querySelectorAll("li")[currentIndex];

    if (listItem && autoScrollEnabled) {
      listItem.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [currentIndex, autoScrollEnabled]);

  const scrollToImage = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "prev") {
        return prevIndex === 0 ? data.length - 1 : prevIndex - 1;
      } else {
        return (prevIndex + 1) % data.length;
      }
    });
  };

  const handleMouseEnter = () => {
    setAutoScrollEnabled(false);
  };

  const handleMouseLeave = () => {
    setAutoScrollEnabled(true);
  };

  return (
    <div className="main-container">
      <div className="slider-container">
        <div className="leftArrow" onClick={() => scrollToImage("prev")}>
          &#10092;
        </div>

        <div
          className="container-images"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul ref={listRef}>
            {data.map((item, index) => (
              <li className="slider-card" key={item.id}>
                <div
                  className="slider-card-img"
                  style={{
                    backgroundImage: `url(${item.imgUrl})`,
                  }}
                ></div>
                <p className="slider-card-text">Laila</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rightArrow" onClick={() => scrollToImage("next")}>
          &#10093;
        </div>
      </div>
    </div>
  );
}

export default Slider;
