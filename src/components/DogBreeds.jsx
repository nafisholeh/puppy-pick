import React, { useState, useEffect } from "react";
import CardSelect from "../shared/CardSelect";
import SkeletonCard from "../shared/SkeletonCard";
import Button from "../shared/Button"; // Assuming you have a shared Button component

const MAX_BREED_PICK = 3;

const DogBreeds = () => {
  const [breeds, setBreeds] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedBreeds, setSelectedBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        setBreeds(data.message);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchBreeds();
  }, []);

  const handleSelectBreed = (breed) => {
    if (selectedBreeds.includes(breed)) {
      setSelectedBreeds(selectedBreeds.filter((item) => item !== breed));
    } else if (selectedBreeds.length < MAX_BREED_PICK) {
      setSelectedBreeds([...selectedBreeds, breed]);
    }
  };

  const handleProceed = () => {
    console.log("Proceeding with selected breeds:", selectedBreeds);
  };

  const maxSelectedReached = selectedBreeds.length === MAX_BREED_PICK;

  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <div className="px-6 pb-6 pt-4 relative">
        <div className="flex items-center justify-end mb-5">
          <Button onClick={handleProceed} state={selectedBreeds.length === 0 ? "disabled" : "default"} theme="primary">
            Proceed
          </Button>
        </div>

        {maxSelectedReached && (
          <div className="fixed bottom-8 right-8 bg-yellow-500 text-white text-lg font-bold p-4 rounded-lg shadow-lg">
            You’ve Reached the Maximum of 3 Breeds!
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {Object.keys(breeds).map((breed) => (
              <CardSelect
                key={breed}
                isSelected={selectedBreeds.includes(breed)}
                onSelect={() => handleSelectBreed(breed)}>
                {breed}
              </CardSelect>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DogBreeds;
