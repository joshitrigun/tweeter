$(document).ready(function () {
  const inputText = $("#tweet-text");

  inputText.on("keyup", function () {
    const updatedLength = 140 - $(this).val().length;
    const $output = $("output");
    if (updatedLength < 0) {
      $output.addClass("overCharCount");
      //$(".error-message1").slideDown(1000);
    } else if (updatedLength > 0) {
      $output.removeClass("overCharCount");
      $(".error-message2").slideUp(1000);
    } else {
      $(".error-message1").slideUp(1000);
    }
    const output = $(this).next().children()[1];
    $(output).val(updatedLength);
  });
});
