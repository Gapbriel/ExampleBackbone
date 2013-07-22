
define([
    'backbone',
    'views/headerView',
    'collections/productCollection',
    'views/productListView',        
    'views/productView'
  ],
  function(Backbone, HeaderView, ProductCollection , ProductListView ,ProductView) {

    var AppRouter = Backbone.Router.extend({

    routes:{
        "":"list",
        "products/:id":"productDetails"
    },

    initialize:function () {
        $('#header').html(new HeaderView().render().el);
    },

    list:function () {
        this.productList = new ProductCollection();
		this.productList.fetch();
        this.productListView = new ProductListView({model:this.productList});
        $('#sidebar').html(this.productListView.render().el);
    },

    productDetails:function (id) {
        this.product = this.productList.get(id);
        if (appRouter.productView) appRouter.productView.close();
        this.productView = new ProductView({model:this.product});
        $('#content').html(this.productView.render().el);
    }

  });
    appRouter = new AppRouter();
    
	var init = function() {
      Backbone.history.start();
    }

    return {
      init : init
    }
  }
);
