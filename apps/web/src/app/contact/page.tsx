"use client";

import React, { useEffect } from 'react';
import MapBox from '@/components/contact/map-box';
import { FaRegPaperPlane } from "react-icons/fa";
import PageHeader from '@/components/page-header';
import config from '@/config';

const { title } = config;

/**
 * TODO: #341 still need to update with another method to avoid client side not available metadata
 * export const metadata: Metadata = {
 *   title: `Contact | ${title}`,
 * };
 */

const Contact = () => {
  useEffect(() => {
    document.title = `Contact | ${title}`;
  }, [title]);

  return (
    <article data-page=''>
      <PageHeader header="Hugo's Contact" />
      <section className="mb-[10px]">
        <MapBox />
        <h3 className="text-white-2 text-2xl font-bold mb-[20px]">Contact Form</h3>
        <form action="#" className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea>
          <button
            className="form-btn"
            disabled
            data-form-btn
            onClick={() => alert('not implemented yet!')}
          >
            <FaRegPaperPlane />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article >
  );
}

export default Contact
