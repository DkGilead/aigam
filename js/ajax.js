$("#main_form").on('submit', function(e) {
  e.preventDefault();
  var success = $(this).find('.email-success'),
  failed = $(this).find('.email-failed'),
  loader = $(this).find('.email-loading'),
  postUrl = $(this).attr('action');
  var data = {
    name: $(this).find('#name').val(),
    phone: $(this).find('#phone').val(),
  };
  if ((data['name'].length > 1) && (data['phone'].length > 1)) {
    $.ajax({
      type: "POST",
      url: postUrl,
      data: data,
      beforeSend: function() {
        loader.fadeIn(1000);
      },
      success: function(data) {
        loader.fadeOut(1000);
        success.delay(500).fadeIn(1000);
        failed.fadeOut(500);
      },
          error: function(xhr) { // if error occured
            loader.fadeOut(1000);
            failed.delay(500).fadeIn(1000);
            success.fadeOut(500);
          },
          complete: function() {
            loader.fadeOut(1000);
          }
        });
  } else {
    loader.fadeOut(1000);
    failed.delay(500).fadeIn(1000);
    success.fadeOut(500);
  }
  return false;
});