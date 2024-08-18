import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import heartIcon from "../assets/images/heart.png";
import Card from "../shared/Card";

const DogImageFeed = () => {
  const location = useLocation();
  const selectedBreeds = location.state?.selectedBreeds || [];

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likedImages, setLikedImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagePromises = selectedBreeds.map(async (breed) => {
          const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
          const data = await response.json();
          return data.message;
        });

        const imagesArray = await Promise.all(imagePromises);
        const flattenedImages = imagesArray.flat();
        setImages(flattenedImages);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    if (selectedBreeds.length > 0) {
      fetchImages();
    }
  }, [selectedBreeds]);

  const handleLike = (imageUrl) => {
    if (likedImages.includes(imageUrl)) {
      setLikedImages(likedImages.filter((url) => url !== imageUrl));
    } else {
      setLikedImages([...likedImages, imageUrl]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 w-full p-6 overflow-y-auto">
      <h1 className="text-center text-3xl font-bold mb-6">Dog Image Feed</h1>
      {loading ? (
        <div className="text-center text-xl">Loading images...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {images.map((imageUrl, index) => (
            <Card key={index} className="relative">
              <img src={imageUrl} alt="Dog" className="w-full h-64 object-cover rounded-lg" />
              <button
                onClick={() => handleLike(imageUrl)}
                className={`absolute bottom-2 right-2 p-2 shadow-md rounded-full ${
                  likedImages.includes(imageUrl) ? "bg-yellow-700" : "bg-true-gray-200"
                }`}>
                <img src={heartIcon} alt="Like" className="w-5 h-5" />
              </button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default DogImageFeed;
