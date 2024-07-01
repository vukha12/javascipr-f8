let thePromise = new Promise((resolve, reject) => {
  reject();
});

thePromise
  .then(function (callback) {
    console.log(callback);
  })
  .catch(() => {
    console.log("error");
  });
