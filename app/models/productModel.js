define(
  [
    'underscore',
    'backbone'
  ],
  function(_,Backbone) {
    
	var Product = Backbone.Model.extend({
       defaults:{
        "id":null,
        "name":"",
        "category":"",
        "client":"",
        "price":0,
		"amount":"",
		"date":""
      },
	  validation: {
			name: {
			  required: true,
			  msg: 'Please provide your product name'
			},
			client: {
			  required: true,
			  msg: 'Please provide your name client'
			},
			price: [{
			  required: true,
			  msg: 'Please provide your product price'
			},{
				pattern: /^(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/ ,
				msg: 'Enter correct product price i.e. $45.23'
			}],
			amount: {
			  min : 1,
			  pattern : 'number', 		
			  required: true,
			  msg: 'Please provide your product amount greater than zero'
			},
			date: {
			  required: true,
			  msg: 'Please provide your date'
			}
	  }
  });
  
	
	return Product;
  }
);