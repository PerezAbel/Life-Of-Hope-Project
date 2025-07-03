import React from 'react';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: 'https://www.scfirststeps.org/media/xo3ew0ic/2019_12_12_anw6584.jpg',
      alt: 'Community event 2023',
      caption: 'Annual community gathering',
      height: 'h-48'
    },
    {
      id: 2,
      src: 'https://source.unsplash.com/random/400x600?education',
      alt: 'Education program',
      caption: 'Children learning in our education center',
      height: 'h-72'
    },
    {
      id: 3,
      src: 'https://source.unsplash.com/random/400x500?volunteers',
      alt: 'Volunteers at work',
      caption: 'Our dedicated volunteer team',
      height: 'h-60'
    },
    {
      id: 4,
      src: 'https://source.unsplash.com/random/400x550?family',
      alt: 'Family support',
      caption: 'Supporting families in need',
      height: 'h-64'
    },
    {
      id: 5,
      src: 'https://source.unsplash.com/random/400x700?event',
      alt: 'Fundraising event',
      caption: '2023 charity gala',
      height: 'h-80'
    },
    {
      id: 6,
      src: 'https://source.unsplash.com/random/400x450?community-center',
      alt: 'New facility',
      caption: 'Our new community center',
      height: 'h-56'
    }
  ];

  return (
    <div className="pt-20">

      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">Gallery</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Witness the powerful moments captured in images, showcasing the impact of our initiatives and community projects.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className={`relative overflow-hidden rounded-2xl border border-blue-200 bg-white group ${image.height}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-blue-700/80 text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {image.caption}
            </div>
            <div className="absolute top-2 left-2 bg-yellow-400 text-blue-900 text-xs font-semibold px-2 py-1 rounded shadow-sm">
              {image.alt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
