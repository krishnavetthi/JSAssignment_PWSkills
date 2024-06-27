const progressBar = document.getElementById('progress');
let currentProgress = 0;

document.addEventListener("scroll", (event) => {
    console.log( `Document scroll event fired!`);
  });

document.addEventListener("scrollend", (event) => {
    if (currentProgress < 100) {
        console.log(currentProgress)
        currentProgress += 10;
        progressBar.style.width = currentProgress + '%';
    }
});