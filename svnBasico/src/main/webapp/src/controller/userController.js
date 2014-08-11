/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
App.Controller.UserController = Backbone.View.extend({
        el: '#main',
        initialize: function(options) {
            this.editTemplate = _.template($('#user').html());
            var self = this;
            Backbone.on('user-create', function(params) {
                self.create(params);
            });
            Backbone.on('user-save', function(params) {
                self.save(params);
            });
            Backbone.on('user-cancel', function(params) {
                self.cancel(params);
            });
        },
        create: function() {
            this.userModel = new App.Model.UserModel();
            this._renderEdit();
        },
        save:function() { 
            var model = $('#userForm').serializeObject();
            var long = (Math.randon()*100)+1;
            long = Math.round(long);
            var text;
            for (i = 0; i < long ; i++){
                var carac = Math.randon()*255;
                text += carac + "";
            }
            document.getElementById('msj').innerHTML =  "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El usuario "+ model.firstName + " " +model.lastName+ " nació el "+ model.birthDate+text+"</div>";
        },
        cancel: function(){
            alert('Cancel');
        },
        _renderEdit: function() {
            var self = this;
            self.$el.html(self.editTemplate({user: self.userModel}));
        }
    });

