var x;
$(document).ready(function(){
	$('#button').click(function(){
		var location = $('#location').val();				
		$.post("http://localhost:3030/houses", {'location': location}, function(data){
      var listData = [];
      data = JSON.parse(data);
      data['listing'].forEach(function(item){
        listData.push({
          "numBedrooms" : item.num_bedrooms,
          "price" : item.price,
          'description' : item.description,
          'area' : item.county,
          'propertyType' : item.property_type,
          'address' : item.displayable_address,
          'lat' : item.latitude,
          'lng' : item.longitude
        });  
      });
      $('#html').empty();
      listData.forEach(function(item) {
      	if(item.price == "0"){
      		item.price = "TBC";
      	}
      	$('#html').append('<head><link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"><link rel="stylesheet" type="text/css" href="/assets/css/stylesheet.css"></head><div id="output"><center><h2>Area: ' + item.area + '</h2><b>Num of Bedrooms:' + item.numBedrooms + '</b><br>Description:' + item.description + '<br>' + item.price + '<br><br></center>')
      });
      console.log(listData);
		});
	});
});