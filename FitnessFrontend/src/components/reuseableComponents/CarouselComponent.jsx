import React from "react";
import { Carousel } from "@material-tailwind/react";


const CarouselComponent = () => {
  return (
    <Carousel className="rounded-xl mt-6">
      <img
        src="../../assets/1.jpg"
      className="h-full w-full object-middle"
      />
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.FIKpWNHHvoRQ_PfbfTCnAgHaE7&pid=Api&P=0&h=220"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.Tjc3AMvchCD6IitZkZDs9AHaFj&pid=Api&P=0&h=220"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};

export default CarouselComponent;

