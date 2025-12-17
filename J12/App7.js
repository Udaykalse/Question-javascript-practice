function getUser(userId) {
  return new Promise((res, rej) => {
    if (userId === 1) {
      res("User Found");
    } else {
      rej("User Not Found");
    }
  });
}

getUser(1)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
