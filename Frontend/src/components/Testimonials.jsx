import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

const reviews = [
  {
    text: "Easy to use and very efficient! This platform has streamlined my workflow and saved me countless hours.",
    name: "LUCAS SMITH",
    role: "MARKETER",
  },
  {
    text: "Amazing experience with this platform! The interface is intuitive, and the features are exactly what I needed.",
    name: "EMILY JONES",
    role: "DEVELOPER",
  },
  {
    text: "Highly recommend for professionals! It provides excellent tools that help enhance productivity and collaboration.",
    name: "JASON LEE",
    role: "DESIGNER",
  },
  {
    text: "A must-have tool for productivity! The seamless integration with my existing workflow has been a game changer.",
    name: "SARAH BROWN",
    role: "MANAGER",
  },
  {
    text: "User-friendly and effective! I was able to get started quickly without any learning curve, and it works flawlessly.",
    name: "DAVID WILSON",
    role: "ENTREPRENEUR",
  },
  {
    text: "Great tool for businesses! This platform offers excellent support and features that cater perfectly to my needs.",
    name: "SOPHIA WHITE",
    role: "BUSINESS OWNER",
  },
  {
    text: "Boosted my workflow tremendously! The automation features and seamless experience have made my daily tasks easier.",
    name: "JAMES CARTER",
    role: "DEVELOPER",
  },
  {
    text: "Simple, clean, and powerful! I love how easy it is to navigate and how quickly I can accomplish my goals.",
    name: "OLIVIA MARTIN",
    role: "UI/UX DESIGNER",
  },
  {
    text: "An essential tool for any team! Our collaboration has significantly improved, and project management is a breeze.",
    name: "MICHAEL CLARK",
    role: "PROJECT MANAGER",
  },
  {
    text: "Saved me hours of work every week! This tool has completely changed the way I handle my daily workload.",
    name: "ISABELLA DAVIS",
    role: "FREELANCER",
  },
  {
    text: "Incredible support and features! The customer service is outstanding, and the feature set is exactly what I needed.",
    name: "ETHAN WALKER",
    role: "SOFTWARE ENGINEER",
  },
  {
    text: "This platform is a game-changer! The ease of use and powerful functionalities have made my work so much easier.",
    name: "AVA ROBINSON",
    role: "CONSULTANT",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const totalSlides = Math.ceil(reviews.length / slidesPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="w-full mx-auto  flex flex-col items-center text-center relative bg-[#DADFF6] py-14">
      <h2 className="text-4xl font-bold text-black mb-3">
        Trusted by{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          thousands
        </span>
        .
      </h2>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, groupIndex) => (
            <div
              key={groupIndex}
              className="flex min-w-full w-full bg-[#e4e7f7] py-7 px-5 my-10"
            >
              {reviews
                .slice(
                  groupIndex * slidesPerView,
                  groupIndex * slidesPerView + slidesPerView
                )
                .map((review, index) => (
                  <div
                    key={index}
                    className={` px-2 mb-4 mt-7 ${
                      slidesPerView === 1 ? "w-full" : "w-1/3"
                    }`}
                  >
                    <div className="bg-white shadow-md rounded-xl p-6 min-h-[250px] flex flex-col justify-between">
                      <p className="text-lg text-gray-800 italic">
                        "{review.text}"
                      </p>
                      <div>
                        <h3 className="mt-4 text-lg font-semibold text-left text-gray-900">
                          {review.name}
                        </h3>
                        <p className="text-sm text-gray-500 text-left">
                          {review.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-gray-900 scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
      <div className="text-black flex justify-around items-center mt-5 pt-4 w-full">
        <h1 className="text-xl font-bold"> Join the community</h1>
        <a
          href="https://github.com/samarhirau"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-black text-lg hover:text-gray-400"
        >
          <FaGithub />
          <span>Github</span>
        </a>

        <div>
          <p>Follow us and Stay connected. </p>
        </div>
      </div>
    </div>
  );
}
