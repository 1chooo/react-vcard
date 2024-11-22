import React from 'react';
import Image from 'next/image';
import { useResponsiveImageSize } from '@/hooks/use-responsive-image-size';
import { breakpoints } from '@/lib/constants';

import "@/styles/side-bar/avatar-box.css";

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
    <figure className="avatar-box">
      <Image
        id="profile-img"
        src={avatar}
        alt={`${firstName} (${preferredName}) ${lastName}`}
        width={imageSize.width}
        height={imageSize.height}
        loading="eager"
      />
    </figure>
  );
};

export default AvatarBox;
