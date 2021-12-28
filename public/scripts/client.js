/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// const tweetData = [
//   {
//     user: {
//       name: "Newton",
//       avatars: "https://i.imgur.com/73hZDYK.png",
//       handle: "@SirIsaac",
//     },
//     content: {
//       text: "If I have seen further it is by standing on the shoulders of giants",
//     },
//     created_at: 1639432668137,
//   },
//   {
//     user: {
//       name: "Descartes",
//       avatars: "https://i.imgur.com/nlhLi3I.png",
//       handle: "@rd",
//     },
//     content: {
//       text: "Je pense , donc je suis",
//     },
//     created_at: 1639519068137,
//   },
// ];

// creates html for a tweet given the data
const createTweetElement = (tweetData) => {
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const newTweet = $("<article>").addClass("tweet-container");
  newTweet.append(`
  
        <header class="tweet-header">
          <div class="tweet-header-name">
            <img src=${tweetData.user.avatars} />
            <span>${tweetData.user.name}</span>
          </div>
          <div class="tweet-user-handle">
            <span>${tweetData.user.handle}</span>
          </div>
        </header>
        <div>
          <span>${escape(tweetData.content.text)}</span>
        </div>
        <hr />
        <footer class="tweet-footer">
          <div>
            <span>${moment(tweetData.created_at).fromNow()}</span>
          </div>
          <div class="tweet-reactions">
            <span>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-flag"></i>
            </span>
          </div>
        </footer>
      
`);
  return newTweet;
};

// given a collection of tweets renders them to the page
const renderTweets = function (tweetData) {
  $("#tweet-container-id").empty();
  for (let tweet of tweetData) {
    $("#tweet-container-id").prepend(createTweetElement(tweet));
  }
};

// handle new tweet submission
$(document).ready(function () {
  loadTweets();
  $(".tweetForm").submit(function (e) {
    e.preventDefault();
    const tweetChar = $("#tweet-text").val().length;

    if (tweetChar > 140) {
      $(".error-message1").slideDown(1000);
    } else if (tweetChar === 0) {
      $(".error-message2").slideDown(1000);
    } else {
      const tweetFormData = $(this).serialize();
      console.log(tweetFormData);
      $.ajax({
        type: "POST",
        url: "http://localhost:8080/tweets/",
        data: tweetFormData,
        success: () => {
          loadTweets();
        },
      });
      $("#tweet-text").val("");
      $(".counter").text("140");
    }
  });
});
//fetches tweets and renders to page
const loadTweets = () => {
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/tweets/",
    success: (data) => {
      renderTweets(data);
    },
  });
};
