$(function() {
   var a = $('#click'),
       counter = 0,
       max = a.data('limit'),
       count = $('#count');

  a.on('click', function() {
    counter++;
    if(counter <= max) {
      count.text(counter);
    }

  });
});
