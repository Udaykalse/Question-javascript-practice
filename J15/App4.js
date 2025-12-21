async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    return console.log(data);
  } catch (err) {
    console.log(err);
  }
}
fetchData()

