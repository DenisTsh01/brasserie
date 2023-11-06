import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px', // Lățime de 100% pentru a face harta responsivă
  height: '400px'
};

const center = {
  lat: 44.657280101144345,
  lng: 4.762861499735958
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCM4H9WuudRoJR36F9vv1ATb6KO-2n2Er4"
  });

  const [map, setMap] = useState(null);

  useEffect(() => {
    // Funcție pentru detectarea schimbărilor de dimensiune ale ferestrei
    function handleResize() {
      if (window.innerWidth < 600) {
        containerStyle.width = '200px';
      } else {
        containerStyle.width = '400px';
      }
      if (map) {
        map.panTo(center);
      }
    }

    // Adaugă un event listener pentru a asculta schimbările de dimensiune ale ferestrei
    window.addEventListener('resize', handleResize);

    // Îndepărtează event listener-ul la dezmontarea componentei
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [map]);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker
          position={center}
          title="Aceasta este o locație"
        />
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent);
