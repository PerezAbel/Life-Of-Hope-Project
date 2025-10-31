import React from 'react';
import { FaHeart, FaRegHeart, FaComment, FaShare } from 'react-icons/fa';
import '../css/Gallery.css'  
import pic21 from '../Photos/pic21.jpeg'; 
import pic22 from '../Photos/pic22.jpeg';  
import pic23 from '../Photos/pic23.jpeg';  
import pic24 from '../Photos/pic24.jpeg'; 
import pic25 from '../Photos/pic25.jpeg';  
import pic26 from '../Photos/pic26.jpeg';  
import pic27 from '../Photos/pic27.jpeg'; 
import pic28 from '../Photos/pic28.jpeg';  
import pic29 from '../Photos/pic29.jpeg';  
import pic30 from '../Photos/pic30.jpeg'; 
import pic31 from '../Photos/pic31.jpeg';   
import pic32 from '../Photos/pic32.jpeg';  

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: pic21,
      alt: 'Community Event',
      caption: 'Our annual community gathering brought together over 500 people for a day of fun and connection.',
      likes: 124,
      comments: 23,
      height: 'h-80'
    },
    {
      id: 2,
      src: pic22,
      alt: 'Education Program',
      caption: 'Children engaged in our innovative learning programs that focus on STEM education.',
      likes: 89,
      comments: 15,
      height: 'h-64'
    },
    {
      id: 3,
      src: pic23,
      alt: 'Volunteer Team',
      caption: 'Our amazing volunteers who dedicate their time to make a difference in the community.',
      likes: 156,
      comments: 32,
      height: 'h-72'
    },
    {
      id: 4,
      src: pic24,
      alt: 'Family Support',
      caption: 'Providing essential resources and support to families in need throughout the year.',
      likes: 76,
      comments: 12,
      height: 'h-64'
    },
    {
      id: 5,
      src: pic25,
      alt: 'Charity Gala',
      caption: 'Our 2023 charity gala raised over $50,000 for community programs and initiatives.',
      likes: 210,
      comments: 45,
      height: 'h-80'
    },
    {
      id: 6,
      src: pic26,
      alt: 'New Facility',
      caption: 'The grand opening of our new community center with state-of-the-art facilities.',
      likes: 143,
      comments: 28,
      height: 'h-72'
    },
    {
      id: 7,
      src: pic27,
      alt: 'Skill Workshop',
      caption: 'Participants in our vocational training workshop learning valuable job skills.',
      likes: 67,
      comments: 9,
      height: 'h-64'
    },
    {
      id: 8,
      src: pic28,
      alt: 'Cultural Celebration',
      caption: 'Celebrating the diverse cultures that make up our wonderful community.',
      likes: 98,
      comments: 17,
      height: 'h-80'
    },
    {
      id: 9,
      src: pic29,
      alt: 'Senior Program',
      caption: 'Our senior wellness program helps keep our elders active and engaged.',
      likes: 54,
      comments: 8,
      height: 'h-72'
    }, 
    {
      id: 10,
      src: pic30,
      alt: 'Community Event',
      caption: 'Our annual community gathering brought together over 500 people for a day of fun and connection.',
      likes: 124,
      comments: 23,
      height: 'h-80'
    },
    {
      id: 11,
      src: pic31,
      alt: 'Education Program',
      caption: 'Children engaged in our innovative learning programs that focus on STEM education.',
      likes: 89,
      comments: 15,
      height: 'h-64'
    },
    {
      id: 12,
      src: pic32,
      alt: 'Volunteer Team',
      caption: 'Our amazing volunteers who dedicate their time to make a difference in the community.',
      likes: 156,
      comments: 32,
      height: 'h-72'
    }
  ];

  const [likedImages, setLikedImages] = React.useState([]);

  const toggleLike = (id) => {
    if (likedImages.includes(id)) {
      setLikedImages(likedImages.filter(imageId => imageId !== id));
    } else {
      setLikedImages([...likedImages, id]);
    }
  };

  return (
    <div className="gallery-container min-h-screen pb-12">
      {/* Header */}
      <header className="text-center py-16 relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-white opacity-20"></div>
        <h1 className="text-6xl font-bold text-white mb-6 font-title relative z-10">
          Our Gallery
        </h1>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white opacity-20"></div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className={`relative overflow-hidden rounded-xl shadow-xl bg-white transition-all duration-300 hover:shadow-2xl ${image.height}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
              <div className="transform translate-y-full group-hover:translate-y-0 transition-all duration-300 w-full p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white font-bold text-lg mb-2">{image.alt}</h3>
                <p className="text-gray-200 text-sm mb-3">{image.caption}</p>
                
                <div className="flex justify-between items-center text-white">
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => toggleLike(image.id)}
                      className="flex items-center space-x-1 hover:text-pink-400 transition"
                    >
                      {likedImages.includes(image.id) ? (
                        <FaHeart className="text-pink-500" />
                      ) : (
                        <FaRegHeart />
                      )}
                      <span>{likedImages.includes(image.id) ? image.likes + 1 : image.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-300 transition">
                      <FaComment />
                      <span>{image.comments}</span>
                    </button>
                  </div>
                  <button className="hover:text-green-300 transition">
                    <FaShare />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;