import React, { useState, useEffect } from "react";
import CardSelect from "../shared/CardSelect";
import SkeletonCard from "../shared/SkeletonCard";
import Button from "../shared/Button"; // Assuming you have a shared Button component

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
    } else if (selectedBreeds.length < 3) {
      setSelectedBreeds([...selectedBreeds, breed]);
    }
  };

  const handleProceed = () => {
    console.log("Proceeding with selected breeds:", selectedBreeds);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="px-6 pb-6 pt-4 relative">
        <div className="absolute top-0 right-0 mt-4 mr-6">
          <Button onClick={handleProceed} state={selectedBreeds.length === 0 ? "disabled" : "default"} theme="primary">
            Proceed
          </Button>
        </div>

        <div className="text-center mb-9 mt-2 text-lg font-medium text-gray-700">You can select up to 3 breeds.</div>

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
