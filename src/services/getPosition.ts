interface Position {
  latitude: number;
  longitude: number;
}

interface GeolocationPosition {
  coords: {
    latitude: number;
    longitude: number;
  };
}

function getPosition(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });
}

export async function getGeo(): Promise< Position > {
  try {
    const positionObj = await getPosition();

    const position: Position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };
    const { latitude } = position;
    const {longitude} = position
    
    return { latitude , longitude };
  } catch (error) {
    console.error("Error getting geolocation:", error);
    throw error; 
  }
}

