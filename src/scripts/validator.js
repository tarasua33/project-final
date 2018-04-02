$(function(){
    $('#feedBackForm').validate({
        rules: {
            firstName: {
                required: true,
                minlength: 5,
                normalizer: function(value) {
                        return $.trim(value);
                        }
                    },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            firstName: {
                    required: "Name is Required item",
                    minlength: "Need 2 symbol in this item"
                },

            pswd: {
                     required: "Password is Required item",
                     minlength: "Not correct format"
                },

            email: {
                    required: "Email is Required item",
                    email: "Not correct format"
                }
            }

});
});
