import React, { useState } from 'react';

const ReadMoreText = ({ text, maxLength = 200 }) => {
  // State to manage whether the text is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expanded state
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  // Render truncated text if not expanded, otherwise render full text
  return (
    <div>
      <p className="my-4 text-sm tracking-wider font-neue">
        {isExpanded ? text : text.length > maxLength ? text.slice(0, maxLength) + '...' : text}
      </p>
      {text.length > maxLength && (
        <button
          onClick={toggleReadMore}
          className="read_text"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default ReadMoreText;
