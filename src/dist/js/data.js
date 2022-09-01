window.addEventListener("load", () => {
  fetch("https://climaxdash.herokuapp.com/")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
