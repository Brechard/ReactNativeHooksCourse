import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 6orQw5nmItZQXggjfKl_oisk-axB8klBTcdybvcj42icOBhYPQaGW7Zd9BRWPmPK2YE3oNzVlXZeURI7OkyeoKpkZrJ52bEPUKKyVrcohnt0tqU0ZoAXuBOrjzjzX3Yx'
    }
});