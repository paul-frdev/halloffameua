'use client';

import { GoogleMap } from '@react-google-maps/api';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const defaultMapCenter = {
  lat: 35.8799866,
  lng: 76.5048004,
};
const defaultMapZoom = 10;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
};

const MapAddress = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 720px)' });

  const defaultMapContainerStyle = {
    width: isTablet ? '300px' : '702px',
    height: isTablet ? '370px' : '412px',
    borderRadius: '4px',
  };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={{
          ...defaultMapOptions,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
        }}
      />
    </div>
  );
};

export { MapAddress };