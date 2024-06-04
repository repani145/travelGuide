import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng',
  params: {
    latitude: '12.91285',
    longitude: '100.87808',
    lang: 'en_US',
    hotel_class: '1,2,3',
    limit: '30',
    adults: '1',
    amenities: 'beach,bar_lounge,airport_transportation',
    rooms: '1',
    child_rm_ages: '7,10',
    currency: 'USD',
    checkin: '2022-03-08',
    zff: '4,6',
    subcategory: 'hotel,bb,specialty',
    nights: '2'
  },
  headers: {
    'x-rapidapi-key': '365261b1a9msh97992ed858cdf7ap1e27b0jsn030cf19b09ae',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}



