let user = {
  name: "Uday",
  address: {
    city: "Pune"
  }
};


function getCity(user){
    return user?.address?.city ?? "City Not Found";
}

console.log(getCity(user))