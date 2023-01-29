const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Asyns Promise " + "I am done!");
    }, 1500);
  });
  return promise
};
function text(txt) {
  console.log(txt);
  return fetchData();
}
function text2(txt) {
    console.log(txt);
}
setTimeout(() => {
  console.log("Timer is Done!");
  fetchData()
  .then(text)
  . then(text2)
  ;
}, 2000);
console.log("Sync", "HI");
console.log("Sync", "Hello");
