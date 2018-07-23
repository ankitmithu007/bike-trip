angular.module('bikeNightApp').controller('appFooterCtrl', function () {

  var forms = document.getElementsByClassName('query-validation');
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener('submit', function (event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });

  this.queryMessage = {
    name: {
      data: '',
      valid: true
    },
    city: {
      data: '',
      valid: true,
    },
    email: {
      data: '',
      valid: true,
    },
    mobile: {
      data: '',
      valid: true,
    },
    message: {
      data: '',
      valid: true,
    }
  };
  this.onSendMessage = function () {

    for (var key in this.queryMessage) {
      if (this.queryMessage.hasOwnProperty(key)) {

        var value = this.queryMessage[key];
        switch (key) {
          case 'name':
            if( !value || ( /\d/.test(value) ) ) {
              this.queryMessage.name.valid = false;
            }
            text = "Today is Saturday";
            break;
          case 'city':
            text = "Today is Sunday";
            break;
          case 'email':
            text = "Today is Sunday";
            break;
          case 'mobile':
            text = "Today is Sunday";
            break;
          case 'message':
            text = "Today is Sunday";
            break;
        }

      }
    }

  };

});
