let Links = {
  setColor : function (destinationColor) {
    $('a').css('color', destinationColor);
   }
};

let Body = {
  let color = 0;

  setColor : function (destinationColor) {
    $('body').css('color', destinationColor);

  },
  setBGColor : function (destinationColor) {
    $('body').css('backgroundColor', destinationColor);
  },
  setImageBrightness : function (destinationBright) {
    $('img').css('filter', 'brightness(' + destinationBright + ')');
  },
  setButton : function (destinationButton) {
    switch(destinationButton) {
      case "btn btn-dark" :
        $('button.btn-dark').css('display','none');
        $('button.btn-light').css('display','inline');
        break;
      case "btn btn-light" :
        $('button.btn-dark').css('display','inline');
        $('button.btn-light').css('display','none');
        break;
    }
  },
};

function changeVoiletColorHandler() {
    console.log("test");
//  console.log(Body.color);
//  Body.color += 1;
}
function dayHandler(self){
  Body.setColor('white');
  Body.setBGColor('black');
  Body.setImageBrightness("0.4");
  Body.setButton("btn btn-dark");
  Links.setColor('powderblue');
}
function nightHandler(self) {
  Body.setBGColor('white');
  Body.setColor('black');
  Body.setImageBrightness("1");
  Body.setButton("btn btn-light");
  Links.setColor('blue');
}
