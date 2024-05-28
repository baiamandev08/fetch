
const p = new Promise((resolve, reject) => {
    const backData = {
        server: "js",
        age: "16",
        html: "css"
    }
    setTimeout(() => {
        resolve(backData)
        console.log("Promise... data")
    }, 2000)
})

p.then((main)=>{
    console.log(main)
})



document.addEventListener("DOMContentLoaded" ,()=>{
    fetch("https://dog.ceo/api/breeds/image/random").then((data)=> {
        console.log(data)
    })
})


const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve()
    },2000)
}).then(()=> {
    console.log(1)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
            console.log(2)
        },2000)
    })


}).then(()=>{

    setTimeout(()=>{
        console.log(3)
    },2000)
})



