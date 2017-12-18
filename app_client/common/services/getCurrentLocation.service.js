/**
 *   @author toto
 *   @createdDate    2017-12-19 02:40 AM
 *   @email  toto6321@qq.com
 */

// service getCurrentLocation
const getCurrentLocation = function () {
  const getPosition = (success, err, notAllowedToGetPosition) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, err)
    } else {
      // users don't allow the app to get location
      notAllowedToGetPosition()
    }
  }
  return {
    getMyPosition: getPosition
  }
}

angular
  .module('loc8r')
  .service('getCurrentLocation', getCurrentLocation)