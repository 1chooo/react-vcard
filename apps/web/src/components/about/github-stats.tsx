"use client";

import React, { useEffect, useState, FC } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { ThemeInput } from 'react-activity-calendar';

import config from '@/config';

/* 
* goto https://grubersjoe.github.io/react-activity-calendar/
* to see more themes
*/
const yellowTheme: ThemeInput = {
  light: ['hsl(0, 0%, 92%)', '#FFDA6B'],
  dark: ['hsl(0, 0%, 22%)', '#FFDA6B'],
};

const { about } = config;
const { githubUsername } = about;

const MOBILE_CALENDAR_SIZE = 12;
const LAPTOP_CALENDAR_SIZE = 12;
const MOBILE_BREAKPOINT = 768;

const GitHubStats: FC = () => {
  const [username, setUsername] = useState<string>(githubUsername);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    // Handle window width and search params client-side
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const urlParams = new URLSearchParams(window.location.search);
    const user = urlParams.get('user');
    if (user) {
      setUsername(user);
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial window width
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= MOBILE_BREAKPOINT;

  return (
    <section className="text-light-gray mt-5">
      <GitHubCalendar
        username={username}
        blockSize={isMobile ? MOBILE_CALENDAR_SIZE : LAPTOP_CALENDAR_SIZE}
        blockMargin={4}
        colorScheme="dark"
        blockRadius={2}
        fontSize={14}
        style={{ fontWeight: 'bold' }}
        theme={yellowTheme}
      />
    </section>
  );
};

export default GitHubStats;
