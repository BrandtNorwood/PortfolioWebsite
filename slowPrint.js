var showText = function (target, message, index, interval) {   
    if (index < message.length) {
      $(target).append(message[index++]);

      if(message[index]=='\n'){
        $(target).append("<br />");
      } 

      setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
  }



  var cursor = true;
        var speed = 250;
        setInterval(() => {
          if(cursor) {
            document.getElementById('cursor').style.opacity = 0;
            cursor = false;
          }else {
            document.getElementById('cursor').style.opacity = 1;
            cursor = true;
          }
        }, speed);