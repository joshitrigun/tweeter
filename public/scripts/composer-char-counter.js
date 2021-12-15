$(document).ready(function () {
  //console.log("testing");
  const inputText = $("#tweet-text");
  // const charCounter = function () {
  //   let result = ;
  //   return result;
  // };

  inputText.on("keyup", function () {
    // console.log(this);
    // console.log($(this).val());
    // console.log($(this).val().length);
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



