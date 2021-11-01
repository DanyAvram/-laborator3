let geo_params = {
    enableHighAccuracy:true,
    timeout:1000,
    maximumAge:0
};

get_geo_position();

function on_succes(position) {
    document.getElementById('latitudine').innerHTML = 'Latitudine = ' + position.coords.latitude;
    document.getElementById('longitudine').innerHTML = 'Longitudine = ' + position.coords.longitude;
    document.getElementById('acc').innerHTML = 'Altitude = ' + position.coords.altitude;

    let latlon = position.coords.latitude + ',' + position.coords.longitude;
    let img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+
    "&zoom=14&size=400x300&key=AIzaSyCnohaY9I0-7aeYfk2gr9CzLoaNJlN4CPg";

    let imgElem = `<img src=${img_url}>`;

    document.getElementById('map').innerHTML = imgElem;
}

function on_error(e) {
    document.getElementById('text').innerHTML = e.message;
}




function get_geo_position(){
    let geo = navigator.geolocation;
    geo.getCurrentPosition(on_succes, on_error, geo_params)
}