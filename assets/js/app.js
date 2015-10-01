;(function(window, document, undefined) {
  'use strict';

  window.app = {};
  app.init = function() {
    console.log('App initialised');
  };

  app.init();
  app.getHouses = function(){
  	var location = $('#location').val();
    var url = "http://api.zoopla.co.uk/api/v1/property_listings.json?area=" + location + "&api_key=c88442waawanw44ygzem2ee2"
    $.get(url, function(json){
      var listData = [];
      json['listing'].forEach(function(item){
        listData.push({
          "numBedrooms" : item.num_bedrooms,
          "price" : item.price,
          'description' : item.description,
          'area' : item.county,
          'propertyType' : item.property_type,
          'address' : item.address,
          'lat' : item.latitude,
          'lng' : item.londitude
        });  
      });
    });
  };


})(window, window.document);
