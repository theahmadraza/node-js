const fetchData = (callback) => {
    setTimeout(()=>{
        callback("Async " + "I am Callback" )
    }, 1500)
}

function text(txt){
    console.log(txt)
}

setTimeout(()=>{
    console.log("Timer is Done!")
    fetchData(text)
},2000)

console.log("Sync", "HI")
console.log("Sync", "Hello")

