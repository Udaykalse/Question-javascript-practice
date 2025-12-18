let user = {
  name: "Uday",
  age: 22,
  role: "Frontend"
};

for (let key in user){
    console.log(key +':-' + user[key] )
}