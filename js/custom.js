(function ($) {
  $('.grey_button a').live('click', function (e) {
    e.preventDefault();
    $('.job_description').not($(this).closest('li').find('.job_description')).hide();
    $(this).toggleClass('open').parent('div').next('.job_description').toggle();
  });
})(jQuery);
