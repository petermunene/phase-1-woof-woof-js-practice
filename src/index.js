


document.addEventListener("DOMContentLoaded", () => {

 fetch("http://localhost:3000/pups")
    .then(res=>res.json())
    .then(pups=>{displayDogNames(pups)
         console.log(pups) })
})
 



function displayDogNames(pups){
    const dogName=document.getElementById("dog-bar")
    dogName.innerHTML=""
    
     pups.forEach(pup => {
    
        const dogSpan=document.createElement("span")
        dogName.appendChild(dogSpan)
        dogSpan.innerText=pup.name


        dogSpan.addEventListener("click",function (){
            const dogInfo=document.getElementById("dog-info")
            dogInfo.innerHTML=""

            const img=document.createElement("img")
            dogInfo.appendChild(img)
            img.src=pup.image
            const h=document.createElement("h2")
            dogInfo.appendChild(h)
            h.innerText=pup.name
            const button=document.createElement("button")
            dogInfo.append(button)
            if(pup.isGoodDog===true){
                button.innerText="Good Dog!"
            }
            else{
                button.innerText="Bad Dog!"
            }
        })
})
}




