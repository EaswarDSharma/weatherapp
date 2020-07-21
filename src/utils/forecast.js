const request = require('request')

const forecast = (latitude, longitude, callback) => {
  //  const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&appid=19ecf8d7a4a30228c1c28a2d3fce8314'


    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {//body.daily[0].main
            callback(undefined,  ' It is currently ' + (body.current.temp-32)*5/6 + ' degress out. There is a ' + body.current.clouds + '% chance of rain.')
        }
    })
}

module.exports = forecast
