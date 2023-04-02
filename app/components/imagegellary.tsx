'use client'

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { AnimationDefinition, motion, useMotionValueEvent } from "framer-motion";
import { Photo, PhotoAlbum, RenderContainer, RenderPhoto, RenderRowContainer } from "react-photo-album";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Lightbox from "yet-another-react-lightbox";
import React from "react";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { useState } from 'react';

interface Image extends Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
}


const images: Image[] = [
  {
    src: '/wit/1.jpg',
    width: 1080,
    height: 700,
    alt: 'Image 1',
    title: 'Image 1',
  },
  {
    src: '/wit/2.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 2',
    title: 'Image 2',
  },
  {
    src: '/wit/3.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/4.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 4',
  },
  {
    src: '/wit/5.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 5',
  },
  {
    src: '/wit/6.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 6',
  },
  {
    src: '/wit/7.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 7',
  },
  {
    src: '/wit/8.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 8',
  },
  {
    src: '/wit/9.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 9',
  },
  {
    src: '/wit/10.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 10',
  },
  {
    src: '/wit/11.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/12.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/13.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/14.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/15.jpg',
    width: 1080,
    height: 1100,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/16.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/17.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/18.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/19.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/20.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/21.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/22.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/23.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/24.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/25.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/26.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/27.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/28.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/29.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/30.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/31.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/32.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/33.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/34.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/35.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/36.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/37.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/38.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/39.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/40.jpg',
    width: 1080,
    height: 1100,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/41.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/42.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/43.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/44.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/45.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/46.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/47.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/48.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/49.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/50.jpg',
    width: 1080,
    height: 1400,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/51.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/52.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/53.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/54.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/55.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/56.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/57.jpg',
    width: 1080,
    height: 600,
    alt: 'Image 3',
    title: 'Image 3',
  },
  {
    src: '/wit/58.jpg',
    width: 1080,
    height: 800,
    alt: 'Image 3',
    title: 'Image 3',
  },
];


function onStart() {
  console.log("Animation started")
}

const renderPhoto: RenderPhoto<Image> = ({ layout, layoutOptions, imageProps: { alt, style, ...restImageProps } }) => (
  <motion.div
    whileHover={{
      scale: 1.05,
      transition: { duration: 1 },
    }}
    whileTap={{ scale: 0.9 }}
    animate="visible"
  >
    <img

      style={{ ...style, width: "100%", padding: 0 }} {...restImageProps} />
  </motion.div>
);

export default function ImageGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

  return (
    <>




      <PhotoAlbum
        photos={images}
        layout="masonry"
        columns={3}
        targetRowHeight={150}
        onClick={({ index }) => setSelectedImageIndex(index)}
        renderPhoto={renderPhoto}
      />

      <Lightbox
        slides={images}
        open={selectedImageIndex >= 0}
        index={selectedImageIndex}
        close={() => setSelectedImageIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />

    </>
  );
}
