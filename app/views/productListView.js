define(
  [
    'backbone',
    'jquery',
	 'models/productModel',
	 'views/productListItemView'
  ],
        function(Backbone, $,product,ProductListItemView) {
            
          var ProductListView = Backbone.View.extend({

          tagName:'ul',

          initialize:function () {
              
              this.model.bind("reset", this.render, this);
              this.model.bind("change", this.calculate, this);
              this.model.bind("change", this.render, this);
              var self = this;
              this.model.bind("add", function (product) {
                $(self.el).append(new ProductListItemView({model:product}).render().el);
              });
          },

          render:function (eventName) {
            _.each(this.model.models, function (product) {
              $(this.el).append(new ProductListItemView({model:product}).render().el);
            }, this);
            $('#total').html('Total:'+this.calculate());
            return this;
            },

          calculate: function() {
            var acum = 0;
             for (i=0; i< this.model.models.length; i++)   
               acum += (parseInt( this.model.models[i].get('amount') ) * parseInt( this.model.models[i].get('price') ));
            return acum;
          }  


          });

           return ProductListView;
        }

);

 