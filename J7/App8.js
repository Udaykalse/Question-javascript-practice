function areaCircleSafe(r) {
  if (typeof r !== "number" || r <= 0) {
    return "Invalid radius";
  }
  return Math.PI * r * r;
}

console.log(areaCircleSafe(4))