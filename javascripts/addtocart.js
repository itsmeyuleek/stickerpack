$(document).ready(function(e) {
    $('.button').click(function() {
        var target        = $('.cart').first(),
            target_offset = target.offset();

        var target_x = target_offset.left,
            target_y = target_offset.top;

        console.log('target: ' + target_x + ', ' + target_y);

		var obj_id = 1 + Math.floor(Math.random() * 100000),
			obj_class = 'cart-animation-helper',
			obj_class_id = obj_class + '_' + obj_id;

        var obj = $("<div>", {
            'class': obj_class + ' ' + obj_class_id
        });

        $(this).parent().parent().append(obj);

        var obj_offset = obj.offset(),
			dist_x = target_x - obj_offset.left + 10,
            dist_y = target_y - obj_offset.top + 10,
            delay  = 0.8; // seconds

        console.log('obj_off: ' + obj_offset.left + ', ' + obj_offset.top);

        setTimeout(function(){
            obj.css({
            	'transition': 'transform ' + delay + 's ease-in',
            	'transform' : "translateX(" + dist_x + "px)"
            });
			$('<style>.' + obj_class_id + ':after{ \
				transform: translateY(' + dist_y + 'px); \
				opacity: 1; \
				border-radius: 100%; \
				max-height: 20px; \
				max-width: 20px; margin: 0; \
			}</style>').appendTo('head');
        }, 0);


        obj.show(1).delay((delay + 0.02) * 1000).hide(1, function() {
            $(obj).remove();
        });
    });
});
