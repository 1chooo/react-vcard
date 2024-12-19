import React from 'react';
import config from '@/config';

import "@/styles/side-bar/info-content.css";

const { status } = config;
const { about } = config;
const {
  firstName,
  lastName,
  middleName,   // TODO: Research how to render this in the UI
  preferredName
} = about;

function InfoContent({ }) {
  return (
    <div className="info-content">
      <h1
        className="name"
        title={`${firstName} (${preferredName}) ${lastName}`}
      >{firstName} ({preferredName}) {lastName}
      </h1>
      <p className="title">
        <strong>{status}</strong>
      </p>
    </div>
  );
};

export default InfoContent;
