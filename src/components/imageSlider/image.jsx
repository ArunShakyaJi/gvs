import React from "react";

const Slider = () => {
  const images = [
    { id: 1, name: 'image1', route: '/Client1.png' },
    { id: 2, name: 'image2', route: '/Client2.png' },
    { id: 3, name: 'image3', route: '/Client3.png' },
    { id: 4, name: 'image4', route: '/Client4.png' },
    { id: 5, name: 'image5', route: '/Client5.png' },
    { id: 6, name: 'image6', route: '/Client6.png' }
  ];

  return (
    <div className=" flex absolute">
      {/* Second set of images */}
      <div className="flex space-x-16 animate-loop-scroll items-center relative  top-0 left-0 w-full z-10">
        {images.map((img) => (
          <div key={img.id} className="flex justify-center items-center">
            <img src={img.route} className="w-24 h-auto" alt={img.name} />
          </div>
        ))}
      </div>

      {/* First set of images */}
      <div className="flex space-x-16 animate-loop-scroll relative items-center ">
        {images.map((img) => (
          <div key={img.id} className="flex justify-center items-center">
            <img src={img.route} className="w-24 h-auto" alt={img.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
