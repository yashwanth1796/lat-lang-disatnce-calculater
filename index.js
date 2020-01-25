  /**
   * Haversine Formula to get distance
   * @param latitude and longitude
   */
 function checkIfValid(latlang1, latlang2) {
if (latlang1.hasOwnProperty('lat') && latlang1.hasOwnProperty('lng')
	&& latlang2.hasOwnProperty('lat') && latlang2.hasOwnProperty('lng')) {
	getDistance(latlang1, latlang2)
} else {
    return 'invalid JSON';
   }
}

 function getDistance(from, to) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = convertToRadians(to.lat - from.lat);
    var dLong = convertToRadians(to.lng - from.lng);
    var a = (Math.sin(dLat / 2) * Math.sin(dLat / 2))
     + (Math.cos(convertToRadians(from.lat)) * Math.cos(convertToRadians(to.lat)))//eslint-disable-line
     * Math.sin(dLong / 2) * Math.sin(dLong / 2)//eslint-disable-line
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))//eslint-disable-line
    var distance = R * c;//eslint-disable-line
    return convertToKMs(distance);
  }
  /**
   * To convert to radians from degree's
   * @param number
   */
  function convertToRadians(value) {
    return (Math.PI * value) / 180;
  }
  /**
   * To convert to kilometers from meters
   * @param Number
   */
  function convertToKMs(value) {
    return value / 1000;
  }


export default checkIfValid;