import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialList from '../components/side-bar/social-list';
import config from '@/config';

const { about } = config;



describe('SocialList', () => {
  it('should render the correct number of social links', () => {
    render(<SocialList />);
    const socialLinks = screen.getAllByRole('listitem');
    expect(socialLinks).toHaveLength(socialLinks.length);
  });

  it('should render the correct social links', () => {
    render(<SocialList />);
    const { socialMedia } = about;
    const { githubUsername, twitterUsername, linkedinUsername, mediumUsername } = socialMedia;

    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', `https://github.com/${githubUsername}`);
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', `https://www.linkedin.com/in/${linkedinUsername}/`);
    expect(screen.getByRole('link', { name: 'Medium' })).toHaveAttribute('href', `https://medium.com/@${mediumUsername}`);
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute('href', `https://twitter.com/${twitterUsername}`);
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', 'https://blog.1chooo.com');
    expect(screen.getByRole('link', { name: 'CV' })).toHaveAttribute('href', './cv.pdf');
  });

  it('should open links in a new tab with rel="noopener noreferrer"', () => {
    render(<SocialList />);
    const socialLinks = screen.getAllByRole('link');
    socialLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
