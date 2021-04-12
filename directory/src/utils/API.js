import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=20");
  },
};
//returns:
//[filtering for picture, name: first/last, phone, email, DOB]

// {
//   "gender": "male",
//   "name": {
//   "title": "Mr",
//   "first": "Leroy",
//   "last": "Spencer"
//   },
//   "location": {
//   "street": {
//   "number": 6517,
//   "name": "Herbert Road"
//   },
//   "city": "Fermoy",
//   "state": "Mayo",
//   "country": "Ireland",
//   "postcode": 53795,
//   "coordinates": {
//   "latitude": "25.4152",
//   "longitude": "-174.0304"
//   },
//   "timezone": {
//   "offset": "-10:00",
//   "description": "Hawaii"
//   }
//   },
//   "email": "leroy.spencer@example.com",
//   "login": {
//   "uuid": "ad1a46a7-ca86-4312-8dd5-ac4be337a29b",
//   "username": "ticklishgoose692",
//   "password": "stocking",
//   "salt": "VOFxmglb",
//   "md5": "3a66d099faba5caf06c7e8afa1b167ec",
//   "sha1": "481b29c09bd7eac94b0b6c306b2648ce2bffa7d5",
//   "sha256": "fed7f64bf865563b86785087c395307eee543e2b8d56b6c85eeb0c2947a6bf05"
//   },
//   "dob": {
//   "date": "1986-04-19T20:43:45.902Z",
//   "age": 35
//   },
//   "registered": {
//   "date": "2007-01-02T14:19:57.630Z",
//   "age": 14
//   },
//   "phone": "071-224-6166",
//   "cell": "081-738-1009",
//   "id": {
//   "name": "PPS",
//   "value": "3558926T"
//   },
//   "picture": {
//   "large": "https://randomuser.me/api/portraits/men/72.jpg",
//   "medium": "https://randomuser.me/api/portraits/med/men/72.jpg",
//   "thumbnail": "https://randomuser.me/api/portraits/thumb/men/72.jpg"
//   },
//   "nat": "IE"
//   },