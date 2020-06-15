const code =
  "6mxW5yvHLvW0Sn69p_0R7sTZvjuR0IydEuIyWD0t_61NNM-k1HWQVP6WW7c58sIYcKxeWFCmwrSVph7Y3lnp1XDkmsZG5qjfFBz6FlOlxlOzIMKH9kQt4VWxgF6mXnYx";
const Api = {
  getPlaces(keyword, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${keyword}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${code}`,
        },
      }
    ).then((res) => {
      return res.json();
    }).then((jsonRes) => {
      if (jsonRes.businesses) {
        return jsonRes.businesses;
      }
    })
  },
};
export default Api;
