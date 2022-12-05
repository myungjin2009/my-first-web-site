let Links = {
  setColor : function (destinationColor) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = destinationColor;
      i = i + 1;
    }
  }
};

let Body = {
  setColor : function (target, destinationColor) {
    target.style.color = destinationColor;
  },
  setBGColor : function (target, destinationColor) {
    target.style.backgroundColor = destinationColor;
  }
};

function nightDayHandler(self){
  var target = document.querySelector('body');

  if(self.value == 'night'){
    Body.setColor(target, 'white');
    Body.setBGColor(target, 'black');
    self.value = 'day';
    Links.setColor('powderblue');
  } else {
    Body.setBGColor(target, 'white');
    Body.setColor(target, 'black');
    self.value = 'night';
    Links.setColor('blue');
  }
}
