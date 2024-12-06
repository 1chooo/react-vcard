import React from 'react';
import Image from 'next/image';
import { useResponsiveImageSize } from '@/hooks/use-responsive-image-size';
import { breakpoints } from '@/lib/constants';
import config from '@/config';

const { about } = config;
const {
  firstName,
  lastName,
  middleName,
  preferredName
} = about;

type AvatarBoxProps = {
  avatar: string;
};

const AvatarBox: React.FC<AvatarBoxProps> = ({ avatar }) => {
  const imageSize = useResponsiveImageSize(breakpoints);

  return (
    <figure className="bg-bg-gradient-onyx rounded-[10px] flex items-center justify-center"
      style={{ width: `${imageSize.width}px`, height: `${imageSize.height}px` }}>
      <Image
        id="profile-img"
        src={avatar}
        alt={`${firstName} (${preferredName}) ${lastName}`}
        width={imageSize.width}
        height={imageSize.height}
        quality={50}
        loading="eager"
        priority
      />
    </figure>
  );
};

export default AvatarBox;
