import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";



const Map = withScriptjs(withGoogleMap((props) => {
    return (<div>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
            <Marker position={{ lat: -34.397, lng: 150.644 }} />
            <Marker position={{ lat: -34.122, lng: 150.211 }} />
            <Marker position={{ lat: -34.21, lng: 150.56 }} />
        </GoogleMap>
    </div>);
}))

export default Map;