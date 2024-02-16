import React from 'react';

const Card = ({ data, onSelect }) => {
  // Check if data is an array
  const dataArray = Array.isArray(data) ? data : [data];


  return (
    <div className="p-4 m-4 cursor-pointermax-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {dataArray.map((carta, index) => (
        <div key={index} className="relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5">
          <div className="imagen-video">
            {carta.media_type === 'VIDEO' ? (
              <video className="w-full h-auto rounded-sm" controls>
                <source src={carta.media_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              // Assuming Card.Img is a component from a UI library like Bootstrap
              <img className="w-full h-auto rounded-sm" src={carta.media_url} alt={carta.caption} />
            )}
          </div>
          <div className="card-body">
            <div>
              <h2 className="text-xl font-bold mb-2 p-3 text-slate-300 flex-1">{carta.caption}</h2>
                {!carta.like_count || !carta.comments_count ?
                ''
                : 
                <p className="mb-2">
                  Likes: {carta.like_count} | Comments: {carta.comments_count}
                </p>
              }
              <a
                href={carta.permalink || carta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on Instagram
              </a>
            </div>
            <div className="text-muted mt-2">
              <small>{carta.timestamp || carta.date}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
