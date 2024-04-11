import React from 'react';

interface RatingProps{
    value: number
}

const Rating:React.FC<RatingProps> = ({ value }) => {
  return (
    <div className="flex ">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`h-5 w-5 fill-current ${
            index < Math.round(value) ? 'text-yellow-400' : 'text-gray-300'
          }`}
          viewBox="0 0 24 24"
        >
          <path d="M12 1.196l2.928 6.39 6.648.63-4.814 4.75 1.186 6.919-6.948-3.65-6.978 3.642 1.19-6.935-4.818-4.738 6.66-.624 2.935-6.388z"></path>
        </svg>
      ))}
    </div>
  
   
  );
};

export default Rating;