import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      data-te-ripple-init
      data-te-ripple-color="light"
      onClick={scrollToTop}
      data-aos="fade-up"
      data-aos-once="true"
      className={`fixed bottom-5 right-5 ${
        visible ? "inline-block" : "hidden"
      } rounded-full bg-orange-400 p-4 uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-orange-600`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke-width="2.5"
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  );
};

export default BackToTop;
