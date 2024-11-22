import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MapBox from '../components/contact/map-box';

describe('MapBox component', () => {
  test('renders the iframe with the correct attributes', () => {
    render(<MapBox />);

    const iframe = screen.getByTitle('map address');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.9398617144193!2d121.19272387485687!3d24.968160640940518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823c1ec904dcb%3A0xcdc129d4455ce456!2sNational%20Central%20University!5e0!3m2!1sen!2stw!4v1704610088586!5m2!1sen!2stw");
    expect(iframe).toHaveAttribute('width', '400');
    expect(iframe).toHaveAttribute('height', '300');
    expect(iframe).toHaveAttribute('loading', 'lazy');
  });

  test('has the correct data attribute and class name', () => {
    render(<MapBox />);

    const section = screen.getByTestId('mapbox-section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('data-mapbox', 'true');
    expect(section).toHaveClass('mapbox');
  });
});