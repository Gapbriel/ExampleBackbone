define(
  [
    'backbone',
    'jquery',
    'text!templates/productDetails.tpl.html',
	'models/productModel',
	'validate',
	'bootstrapvalid',
    'bootstrapDatepicker'
  ],
        function(Backbone, $,tpl,product,Validation,BootstrapValid,date) {
            
        var ProductView = Backbone.View.extend({

            template:_.template(tpl),

            initialize:function () {

                this.model.bind("change", this.render, this);
				this.model.bind("error",this.showerror,this);
                
	        },

            render:function (eventName) {
			    $(this.el).html(this.template(this.model.toJSON()));
				
				Backbone.Validation.bind(this);				
				this.model.on('validated:valid', this.valid, this);
                this.model.on('validated:invalid', this.invalid, this);
                this.$('#datetimepicker1').datetimepicker();
                return this;
            },

            events:{
                "change input":"change",
                "click .save":"saveProduct",
                "click .delete":"deleteProduct"
            },

            change:function (event) {
                var target = event.target;
                console.log('changing ' + target.id + ' from: ' + target.defaultValue + ' to: ' + target.value);
                // You could change your model on the spot, like this:
                // var change = {};
                // change[target.name] = target.value;
                // this.model.set(change);
            },

            saveProduct:function (e) {
                var productDetails = 
               	this.model.set({
                    name:$('#name').val(),
                    category:$('#category').val(),
                    client:$('#client').val(),
                    price:$('#price').val(),
                    amount:$('#amount').val(),
                    date:$('#date').val()
                });
				
				if(this.model.isValid(true)){
					if (this.model.isNew()) {
						appRouter.productList.create(this.model);
					} else {
						this.model.save();					
					}
				   this.$('.alert-success').fadeIn();
				   appRouter.navigate('', {trigger:true});
				   setTimeout(function(){
						 $('#content div').css('display','none');
				   },2500);
				   
				}	
				else{
				  this.$('.alert-error').fadeIn();
				}
				 
                return false;
            },

            deleteProduct:function () {
                this.model.destroy({
                    success:function () {
                        alert('Product deleted successfully');
                        window.history.back();            
                    }
                });
                return false;
            },

            close:function () {
                $(this.el).unbind();
                $(this.el).empty();
            },
			
			valid: function(){
				this.$('.alert-success').fadeIn();
			},

			invalid: function(){
				this.$('.alert-error').fadeIn();
			}
			
        });

            return ProductView;
        }

);