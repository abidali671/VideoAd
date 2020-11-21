///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Redirect Link
let redirectLocation =
  "https://www.brainpickings.org/?fbclid=IwAR2PMDwZzDngDNZiWa7bKswWXvQfsREiRy12a67KfHhsSOBi6y-w2yEpXao";
// Video Link
let videoLink = "../video-1605777762.mp4";

///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Video Script
let videoPlayer = document.querySelector("#starter-video");
let skipBtn = document.querySelector("#skip-btn");
let muteBtn = document.querySelector("#mute-btn");
videoPlayer.setAttribute("src", videoLink);

videoPlayer.onended = function () {
  // window.location.replace(redirectLocation);
};
skipBtn.addEventListener("click", function () {
  window.location.replace(redirectLocation);
});
muteBtn.addEventListener("click", function () {
  if (videoPlayer.muted == true) {
    muteBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
    videoPlayer.muted = false;
  } else if (videoPlayer.muted == false) {
    muteBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
    videoPlayer.muted = true;
  }
});
