var main = function() {
	$('.post-btn').click(function() {
		var post = $('.status-box').val()
		$('<li>').text(post).prependTo('.posts')
		$('.status-box').val('')
		$('.word-counter').text('140')
		$('.word-counter').css('color', '#404040')
		$(this).addClass('disabled')
		$('.clear-btn').removeClass('disabled')
	})

	$('.clear-btn').click(function() {
		$('.posts').empty()
		$(this).addClass('disabled')
	})

	$('.status-box').keyup(function() {
		var postLength = $(this).val().length
		var charactersLeft = 140 - postLength
		$('.word-counter').text(charactersLeft)

		if(charactersLeft <= 0) {
			$('.word-counter').css('color', 'red')
			$('.post-btn').addClass('disabled')
		}
		else {
			$('.word-counter').css('color', '#404040')
			$('.post-btn').removeClass('disabled')
		}
	})

	$('.post-btn').addClass('disabled')
	$('.clear-btn').addClass('disabled')
}

$(document).ready(main);