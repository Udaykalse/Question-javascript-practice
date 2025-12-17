function loadData() {
  return new Promise((res) => {
    setTimeout(() => {
      res("Data Loaded");
    }, 2000);
  });
}

loadData().then((res) => console.log(res));
