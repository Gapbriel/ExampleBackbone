define(
  [
    'backbone',
    'jquery',
    'text!templates/header.tpl.html',
    'views/productView',
	'models/productModel',
    'jqueryUI'
  ],
        function(Backbone, $,tpl,ProductView,Product,jqueryUI) {
            
        var HeaderView = Backbone.View.extend({

            template:_.template(tpl),

            initialize:function () {
                this.render();
            },

            render:function (eventName) {
                $(this.el).html(this.template());
                return this;
            },

            events:{
                "click .new":"newProduct"
            },

            newProduct:function (event) {
                appRouter.navigate('', {trigger:true});
                if (appRouter.productView) appRouter.productView.close();
                appRouter.productView = new ProductView({model:new Product()});
                $('#content').html(appRouter.productView.render().el);
                $('#content').effect("slide");
                return false;
            }

        });

            return HeaderView;
        }

);