import React from "react";
import img1 from "../assets/images/activities/img1.jpeg";
import img2 from "../assets/images/activities/img2.jpeg";
import img3 from "../assets/images/activities/img3.jpeg";
import img4 from "../assets/images/activities/img4.jpeg";
import Heart from "../assets/icons/menu/Heart";

const images = [img1, img2, img3, img4];

export default function Activities() {
  return (
    <div className="flex flex-row justify-between items-center relative p-11 card h-3/6">
      <div className="absolute top-4 left-4 flex items-center">
        <Heart color="white" width={20} height={20} />
        <p className="font-medium">Activities in your area</p>
      </div>
      {images.map((image, index) => (
        <div key={index} className="w-48 h-48 flex rounded-md overflow-hidden">
          <img src={image} alt={`img${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
}
