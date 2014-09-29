jQuery(document).ready(function($) {
	
	$('#btnSiderBar').click(function(event) {
		$('#siderLeftBar').sidebar('toggle');
	});

	$('#siderLeftBar').sidebar({
		// overlay : true,
		onChange : function() {
			var id_interval = setInterval(function() {
				$('#menuTop').width($('body').width());
				$('#menuBottom').width($('body').width());
			}, 1);

			setTimeout(function() {
				clearInterval(id_interval);
			}, 350);
		}
	}).sidebar('show');

	$(window).resize(function() {
		$('#menuTop').width($('body').width());
		$('#menuBottom').width($('body').width());
	});

	$('.ui.dropdown').dropdown();

	$('#btnAdd').click(function() {
		$('#modalAdd').modal('show');
	});

	$('#btnUpdate').click(function() {
		$('#modalUpdate').modal('show');
	});

	$('#btnDelete').click(function() {
		$('#modalDelete').modal('show');
	});

});