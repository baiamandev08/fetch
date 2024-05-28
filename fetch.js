const random_Btn = document.getElementById("random_Btn")
const random_Img = document.getElementById("random_Img")


random_Btn.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random").then((response) => {
        return response.json()
    }).then((data) => {
        random_Img.src=data.message

    })
},false)

















// random_Btn.addEventListener("click", ()=>{
//     fetch("https://dog.ceo/api/breeds/image/random").then((response)=>{
//         return response.json()
//     }).then((data)=>{
//         random_Img.src=data.message
//     })
// })


// document.addEventListener("DOMContentLoaded" ,()=>{
//
//     fetch("https://dog.ceo/api/breeds/image/random").then((response)=>{
//         console.log(response.json())
//     })
// },false)
