/**
 *   @author toto
 *   @createdDate    2017-12-21 04:04 PM
 *   @email  toto6321@qq.com
 */
const getDayName = function () {
  return function (index, isShortName = false) {
    const weekArray = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ]
    const shortWeekArray = [
      'Mon',
      'Tue',
      'Wed',
      'Thur',
      'Fri',
      'Sat',
      'Sun'
    ]
    return isShortName ? shortWeekArray[index] : weekArray[index]
  }
}

angular.module('loc8r').filter('getDayName', getDayName)