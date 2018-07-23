angular.module('bikeNightApp').controller('appContentCtrl', function () {


  this.type = 'Content'
  this.carouselItems = [
    {
      id:0,
      name:'Our Bike Trip',
      metaData:'Our Bike Trip',
      imgPath:'images/slide-show/slide-show1.jpg',
      active:true,
    },
    {
      id:1,
      name:'SuryaLanka',
      metaData:'SuryaLanka - 760 Km',
      imgPath:'images/slide-show/slide-show2.jpg',
      active:false
    },
    {
      id:2,
      name:'Gandikota',
      metaData:'Gandikota - 820 Km',
      imgPath:'images/slide-show/slide-show3.jpg',
      active:false
    },
    {
      id:3,
      name:'Anathgiri Hills',
      metaData:'Anathgiri Hills - 190 Km',
      imgPath:'images/slide-show/slide-show4.jpg',
      active:false
    },
    {
      id:4,
      name:'Srisailam',
      metaData:'Srisailam - 510 Km',
      imgPath:'images/slide-show/slide-show5.jpg',
      active:false
    }
  ];
  this.enumProductType = {
    tent:{
      name:'tent'
    },
    grill:{
      name:' BBQ Grill Maker'
    },
    camera:{
      name:'Go pro'
    },
    bag:{
      name:'Rucksack'
    }
  }
  this.products = [
    {
      id:'',
      name:'',
      type:this.enumProductType.tent,
      imgPath:'images/tent/tent1.jpg',
      title:'For 2 Person',
      text:[
        {
          display:'Product Size: L-200 cm x B-200 cm x H-130 cm'
        },
        {
          display:'Protects From Wind, Sunlight, Rain, Insects. Breathable Polyester Fabric'
        },
        {
          display:'Easy to Carry, Quick to Set Up and Fold Down.Automatic Tent Body Sets Up Instantly By A Single Person.\n' +
          '            Wearable and waterproof floor'
        }
      ],
      footer:'&#x20B9 150/day',
      price:150,
    },
    {
      id:'',
      name:'',
      type:this.enumProductType.tent,
      imgPath:'images/tent/tent2.jpg',
      title:'For 4-5 Person',
      text:[
        {
          display:'Bedroom 120 X 200 cm. Max useful height: 105 cm.'
        },
        {
          display:'Flysheet protects you from condensation. Free-standing dome structure.'
        }
      ],
      footer:'&#x20B9 300/day',
      price:300,
    },
    {
      id:'',
      name:'',
      type:this.enumProductType.tent,
      imgPath:'images/tent/tent3.jpg',
      title:'For 6 Person',
      text:[
        {
          display:'Easy to Carry, Quick to Set Up and Fold Down.Automatic Tent Body Sets Up Instantly By A Single Person.'
        },
        {
          display:'Lightweight enough for family hiking and traveling.'
        }
      ],
      footer:'&#x20B9 350/day',
      price:350,
    }
  ];

  this.onCarouselClick = function (id){
    //todo
    console.log(id);
  };



});
