define([  
  'jquery',
  'underscore',
  'backbone',
  'localStorage',
  'models/productModel'
 ], function($,_,Backbone,localStorage,ProductModel) {    
      var ProductsCollection = Backbone.Collection.extend({
			model:ProductModel,
			localStorage: new Backbone.LocalStorage("ProductCollection")
			
    });
  
  return ProductsCollection;
  }
);