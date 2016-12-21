var axios = require('axios');


var helpers = {
    getRandom: function () {
      return axios.get('https://en.wikipedia.org/w/api.php?action=query&list=random&format=json&origin=*');
    },
    searchWikis: function (searchStr) {
        return axios.get('https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search='+searchStr);
    }
}

module.exports = helpers;
