import React, { useEffect, useState } from "react";
import axios from "axios";

const PexelsGallery = () => {




  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.src.medium}
          alt={photo.alt}
          className="rounded-lg object-cover w-full h-48"
        />
      ))}
    </div>
  );
};

export default PexelsGallery;
