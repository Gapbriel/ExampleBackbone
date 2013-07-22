define(
  [
    'backbone',
    'jquery',
    'text!templates/productListItem.tpl.html',
	  'models/productModel'
  ],
        function(Backbone, $,tpl,product) {
            
        var ProductListItemView = Backbone.View.extend({

            tagName:"li",

            template:_.template(tpl),

                initialize:function () {
                this.model.bind("change", this.render, this);
                this.model.bind("destroy", this.close, this);
            },

            render:function (eventName) {
                $(this.el).html(this.template(this.model.toJSON()));
                return this;
            },

            close:function () {
                $(this.el).unbind();
                $(this.el).remove();
            }
       });

            return ProductListItemView;
        }

);

 