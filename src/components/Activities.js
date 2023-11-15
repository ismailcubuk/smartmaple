import React from "react";
import img1 from "../assets/images/activities/img1.jpeg";
import img2 from "../assets/images/activities/img2.jpeg";
import img3 from "../assets/images/activities/img3.jpeg";
import img4 from "../assets/images/activities/img4.jpeg";
import Heart from "../assets/icons/menu/Heart";

const images = [img1, img2, img3, img4];

export default function Activities() {
  return (
    <div className="flex flex-col card gap-2 h-full">
      <div className="flex gap-1 h-2/6 lg:h-2/6 xl:h-1/6 px-8 items-center">
        <Heart color="white" width={20} height={20} />
        <p className="font-medium">Activities in your area</p>
      </div>
      <div className="flex h-4/6 lg:h-4/6 xl:h-5/6 justify-around">
      {images.map((image, index) => (
        <div key={index} className=" w-1/4 p-4  h-full flex rounded-md">
          <img src={image} alt={`img${index + 1}`} className="w-full h-full rounded-3xl object-fill" />
        </div>
      ))}
      </div>
    </div>
  );
}
