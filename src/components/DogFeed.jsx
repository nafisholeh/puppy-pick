import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import heartIcon from "../assets/images/heart.png";
import Card from "../shared/Card";
import { db } from "../firebase/firebase";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { useUserAuth } from "../contexts/authContext";
import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const DogImageFeed = () => {
  const { user } = useUserAuth();
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

  const handleLike = async (imageUrl) => {
    if (!user) {
      console.error("User not authenticated");
      return;
    }

    const userDocRef = doc(db, "users", user.uid);

    try {
      if (likedImages.includes(imageUrl)) {
        setLikedImages(likedImages.filter((url) => url !== imageUrl));
        await updateDoc(userDocRef, {
          likedImages: arrayRemove(imageUrl),
        });
      } else {
        setLikedImages([...likedImages, imageUrl]);
        await updateDoc(userDocRef, {
          likedImages: arrayUnion(imageUrl),
        });
      }
    } catch (error) {
      console.error("Error updating liked images in Firestore:", error);
    }
  };

  const renderImage = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * 2 + columnIndex;
    const imageUrl = images[index];

    if (!imageUrl) return null;

    return (
      <div style={style} key={index} className="relative pl-4">
        <Card className="relative">
          <img src={imageUrl} alt="Dog" className="w-full h-64 object-contain rounded-lg" loading="lazy" />
          <button
            onClick={() => handleLike(imageUrl)}
            className={`absolute bottom-2 right-2 p-2 shadow-md rounded-full ${
              likedImages.includes(imageUrl) ? "bg-yellow-700" : "bg-true-gray-200"
            }`}>
            <img src={heartIcon} alt="Like" className="w-5 h-5" />
          </button>
        </Card>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 w-full flex flex-col">
      <h1 className="text-center text-3xl font-bold m-6">Dog Feed</h1>
      {loading ? (
        <div className="text-center text-xl">Loading images...</div>
      ) : (
        <div className="flex-1 relative pr-4">
          <AutoSizer>
            {({ height, width }) => (
              <Grid
                columnCount={2}
                columnWidth={width / 2}
                height={height}
                rowCount={Math.ceil(images.length / 2)}
                rowHeight={305}
                width={width}>
                {renderImage}
              </Grid>
            )}
          </AutoSizer>
        </div>
      )}
    </div>
  );
};

export default DogImageFeed;
