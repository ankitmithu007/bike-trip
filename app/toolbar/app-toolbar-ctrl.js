angular.module('bikeNightApp').controller('appToolbarCtrl', function ($location, $anchorScroll) {


  this.type = 'Toolbar';
  this.enumNavBarItem = {
    home: {
      display: 'Home',
      id: 'home'
    },
    products: {
      display: 'Products',
      id: 'products'
    },
    aboutUs: {
      display: 'About Us',
      id: 'aboutUs',
    },
    contactUs: {
      display: 'Contact Us',
      id: 'contactUs'
    }
  };
  this.onNavbarClick = function (id) {
    console.log(id);

    // call $anchorScroll()

    // $timeout(function() {
    //   $anchorScroll('app-footer');
    // });
    //
    // $("html, body").animate({scrollTop: $("#app-footer").offset().top}, 1000);
    //todo not working
    $anchorScroll(id);
  };


});
