$(document).ready(function () {
  const inputText = $("#tweet-text");

  inputText.on("keyup", function () {
    const updatedLength = 140 - $(this).val().length;
    const $output = $("output");
    if (updatedLength < 0) {
      $output.addClass("overCharCount");
    } else {
      $output.removeClass("overCharCount");
    }
    const output = $(this).next().children()[1];
    $(output).val(updatedLength);
  });
});
