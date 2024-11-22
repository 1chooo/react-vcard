"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface MarkdownImageProps {
  src: string;
  alt?: string;
}

const MarkdownImage: React.FC<MarkdownImageProps> = ({ src, alt }) => {
  const [imageSize, setImageSize] = useState({ width: 1, height: 1 });

  return (
    <div
      style={{
        marginTop: '2.5rem',
        marginBottom: '2.5rem',
        textAlign: 'center',
      }}
    >
      <Image
        src={src}
        alt={alt ?? 'Image'}
        layout="responsive"
        objectFit="contain"
        priority={true}
        onLoadingComplete={(target) => {
          setImageSize({
            width: target.naturalWidth,
            height: target.naturalHeight,
          });
        }}
        width={imageSize.width}
        height={imageSize.height}
        style={{
          borderRadius: "16px",
        }}
      />
      {alt && (
        <div
          style={{
            marginTop: '0.5rem',
            fontSize: '0.9rem',
            color: '#555',
            textAlign: 'center',
            marginBottom: '1rem',
          }}
        >
          {alt}
        </div>
      )}
    </div>
  );
};

export default MarkdownImage;
