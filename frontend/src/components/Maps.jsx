import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const initialContainerStyle = {
  height: '400px',
  borderRadius: '25px',
};

const center = {
  lat: 44.657270101144345,
  lng: 4.762870499735958,
};

function MyComponent() {
  const [map, setMap] = useState(null);
  const [containerStyle, setContainerStyle] = useState(initialContainerStyle);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCM4H9WuudRoJR36F9vv1ATb6KO-2n2Er4",
  });



  useEffect(() => {
    function handleResize() {
      if (map) {
        map.panTo(center);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [map]);

  useEffect(() => {
    function handleMapCenterChanged() {
      const newCenter = map.getCenter();
      console.log('New center:', newCenter);
    }

    if (map) {
      map.addListener('center_changed', handleMapCenterChanged);
    }

    return () => {
      if (map) {
        map.removeListener('center_changed', handleMapCenterChanged);
      }
    };
  }, [map]);

  const onLoad = React.useCallback(function callback(map) {
    map.setZoom(20);
    map.panTo(center);
    setMap(map);
  }, []);
  
  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
 <GoogleMap
  mapContainerStyle={{ ...containerStyle, width: '100%' }}
  center={center}
  zoom={20}
  onLoad={onLoad}
  onUnmount={onUnmount}
>
  <Marker position={center} title="Aceasta este o locație" />
</GoogleMap>
  ) : <></>;
}

export default React.memo(MyComponent);
