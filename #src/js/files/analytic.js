if (document.querySelectorAll('.table-users-rating__item').length > 0) {
	document.querySelectorAll('.table-users-rating__item').forEach(usersRatingItem => {
		usersRatingItem.addEventListener("mouseenter", function (e) {
			usersRatingItem.classList.add('_hover');
			if (usersRatingItem.nextElementSibling.classList.contains('table-users-rating__body')) {
				usersRatingItem.nextElementSibling.classList.add('_hover');
				usersRatingItem.nextElementSibling.nextElementSibling.classList.add('_hover');
			} else if (usersRatingItem.nextElementSibling.classList.contains('table-users-rating__actions')) {
				usersRatingItem.previousElementSibling.classList.add('_hover');
				usersRatingItem.nextElementSibling.classList.add('_hover');
			} else {
				usersRatingItem.previousElementSibling.classList.add('_hover');
				usersRatingItem.previousElementSibling.previousElementSibling.classList.add('_hover');
			}
		});
		usersRatingItem.addEventListener("mouseleave", function (e) {
			usersRatingItem.classList.remove('_hover');
			if (usersRatingItem.nextElementSibling.classList.contains('table-users-rating__body')) {
				usersRatingItem.nextElementSibling.classList.remove('_hover');
				usersRatingItem.nextElementSibling.nextElementSibling.classList.remove('_hover');
			} else if (usersRatingItem.nextElementSibling.classList.contains('table-users-rating__actions')) {
				usersRatingItem.previousElementSibling.classList.remove('_hover');
				usersRatingItem.nextElementSibling.classList.remove('_hover');
			} else {
				usersRatingItem.previousElementSibling.classList.remove('_hover');
				usersRatingItem.previousElementSibling.previousElementSibling.classList.remove('_hover');
			}
		});
	});
}
