import React, { useState, useEffect } from "react";
import CardSelect from "../shared/CardSelect";

const DogBreeds = () => {
  const [breeds, setBreeds] = useState({});
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="px-6 pb-6 pt-4">
        <div className="text-center mb-9 text-lg font-medium text-gray-700">You can select up to 3 breeds.</div>
        {loading ? (
          <div className="text-center text-xl">Loading breeds...</div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {Object.keys(breeds).map((breed) => (
              <CardSelect>{breed}</CardSelect>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DogBreeds;
