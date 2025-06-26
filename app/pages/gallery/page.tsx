'use client';

import Image from "next/image";

const galleryImages = [
  "/diesel.jpg",
  "/gas.png",
  "/mobile.jpg",
  "/portable.jpg"
];

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-blue-900">
      <div className="text-center mb-12">
        <h5 className="text-red-600 uppercase font-bold tracking-widest">Our Work</h5>
        <h1 className="text-4xl font-bold">Gallery</h1>
        <p className="mt-4 max-w-2xl mx-auto">
          Explore some of our completed projects, professional installations, and dedicated team in action.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={500}
              height={300}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
