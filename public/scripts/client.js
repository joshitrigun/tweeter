/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1639432668137,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1639519068137,
  },
];

const createTweetElement = (tweetData) => {
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
          <span>${tweetData.content.text}</span>
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

const renderTweets = function (tweetData) {
  $("#tweet-container-id").empty();
  for (let twee of tweetData) {
    $("#tweet-container-id").prepend(createTweetElement(twee));
  }
};

$(document).ready(() => {
  renderTweets(tweetData);
});
