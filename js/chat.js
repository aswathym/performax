$('#chat_container').ready(function() {

	var open_users = [];

	//Loading the Users into the Chat window
	var myFirebaseRef = new Firebase("https://chats-abin.firebaseio.com/users");
	myFirebaseRef.on("value", function(snapshot) {

		/*Getting the No of Users**/
		var no_of_users = Object.keys(snapshot.val()).length;
		$('#chat_container').find('.no_of_users').html(no_of_users);

		/*Appending the users into the users list**/
		snapshot.forEach(function(snap) {
			var user = snap.val();
			$('#user_container').append("<li class='user' alt="+user.id+"><span class='profile_image'><img src="+user.prof_pic+"></span><span class='user_name'>"+user.name+"</span></li>");
		})
	});


	$('#chat_container').on('click', '.fa-minus', function(eve) {
		eve.stopPropagation();
		$(this).parent().parent().parent().find('.chat_body').toggleClass('displayNone');
	});
	$('#chat_container').on('click', '.fa-times', function(eve) {
		eve.stopPropagation();
		var el = $(this).parent().parent().parent();
		var index = el.attr('alt');
		if(index && index > 0) {
			open_users.splice(open_users.indexOf(index), 1);
			el.remove();
		}
		console.log(open_users);
	});

	$('#chat_container').on('click', '.chat_sub_header .fa-user', function(eve) {
		eve.stopPropagation();
		$(this).parent().toggleClass('active')
		$(this).parent().parent().find('#user_container').toggleClass('displayNone');
	})

	$('#chat_container').on('click', '#user_container .user', function(eve) {
		eve.stopPropagation();
		$(this).parent().parent().find('#user_container').toggleClass('displayNone');
		$('#chat_container .chats').find('.chat_sub_header').removeClass('active');
		var length = $('#chat_container .chats').length,
			chat_name = $(this).find('.user_name').html();
		if(length >= 4) {
			$('#chat_container .chats:nth-child(1)').remove();
		}
		var user_id = $(this).attr("alt");
		if(open_users.indexOf(user_id) == -1) {
			open_users.push(user_id);
			$('#chat_container .chats:nth-child(1)').clone().appendTo( "#chat_container");
			$('#chat_container .chats:last-child()').find('.chat_heading').html(chat_name);			
			$('#chat_container .chats:last-child()').attr('alt', user_id);
		}
		console.log(open_users);
		var chatRef = new Firebase("https://chats-abin.firebaseio.com/chats");
		var message_container = $('#chat_container .chats:last-child()').find('.chat_space');
		chatRef.on("value", function(snapshot) {
			snapshot.forEach(function(snap) {
				var messages = snap.val();
				if(messages.id == user_id) {
					snap.forEach(function(message){
						var message = message.val();
						if(message.from == 'me') {
							message_container.append("<div><span class='me'><h5><b>You</b></h5>"+message.message+"</span><span class='dot_span'><i class='fa fa-circle' aria-hidden='true'></i></span></div>");
						}
						else if(message.from == 'other') {
							message_container.append("<div><span class='dot_span'><i class='fa fa-circle' aria-hidden='true'></i></span><span class='other'><h5><b>"+chat_name+"</b></h5>"+message.message+"</span></div>");
						}
					})
				}
			})
		});
	});	
});