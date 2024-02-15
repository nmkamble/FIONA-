var openbutton = $('#open-button-abc');
	openbutton.on("click",expand);
	function expand(event) {
		event.preventDefault();
		$('#chat-box-abc').removeClass('chat-box-close');
		$('#chat-box-abc').addClass('chat-box-open');
		
		$('#open-button-abc').removeClass('show-button');
		$('#open-button-abc').addClass('hide-button');
		
		$('#close-button-abc').removeClass('hide-button');
		$('#close-button-abc').addClass('show-button');
	}
	
  var closebutton = $('#close-button-abc');
	closebutton.on("click",collapse);
	function collapse(event) {
		event.preventDefault();
		$('#chat-box-abc').removeClass('chat-box-open');
		$('#chat-box-abc').addClass('chat-box-close');
		
		$('#open-button-abc').removeClass('hide-button');
		$('#open-button-abc').addClass('show-button');
		
		$('#close-button-abc').removeClass('show-button');
		$('#close-button-abc').addClass('hide-button');
	}
	
