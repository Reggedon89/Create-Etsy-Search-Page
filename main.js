function makeItem(placeholder) {
    return `
        <div class="placeholder">
        <div class="description">
        <span class="descText">${placeholder.title}</span>
        
        
            <a href="${placeholder.url}" target="_blank">
            <div class = "heart"> <i class="far fa-heart"></i></div>
            <img src="${placeholder.img}" alt="" />
            </a>
           
        
            
            </div>  
            <p class="title">${placeholder.title}</p>
              <p class="seller">${placeholder.seller}</p>
              <p class="price">$${placeholder.price}</p>
              </div>
    `
}

let html5 = ''

items.results.forEach( placeholder => {
    html5 += makeItem({
        img: placeholder.Images[0].url_170x135,
        title: placeholder.title,
        seller: placeholder.Shop.shop_name,
        price: placeholder.price,
        url: placeholder.url,
        
    })
})

document.querySelector("#itemList").innerHTML = html5

//places the tags into the tag bar

function tagBar(tagItem) {

    return `
           <div class="tagp>
           <p> ${tagItem.tag}</p>
           </div>
    `
}

let tagStr = ''

items.results.forEach(tagItem => {
    
        tagStr += tagBar({
            tag : tagItem.tags[0, 1, 3 ]
        })

})

document.querySelector("#tag-bar").innerHTML = tagStr

//Toggle the show more show less lists

function toggle() {
    let x = document.getElementsByClassName("showMore")[0]
    let y = document.getElementsByClassName("showButton")[0]
    if (x.style.display === "none") {
        x.style.display = "block"
        y.style.display = "none"
    } else {
        x.style.display = "none"
        y.style.display = "block"
    }
}

function toggle2() {
    let x = document.getElementById("showMore2")
    let y = document.getElementsByClassName("showButton2")[0]
    if (x.style.display === "none") {
        x.style.display = "block"
        y.style.display = "none"
    } else {
        x.style.display = "none"
        y.style.display = "block"
    }
}
//This changes the search icon when clicked
function blackGround() {
    let x = document.getElementById("search")
    let y = document.getElementById("submit")
    let z = document.getElementById("reset")
    if (document.activeElement === x) {
        m = y.style.backgroundColor="black"
        n = y.style.color= "white"
        return  m + n
    } else if(document.activeElement == z){
        m  = y.style.backgroundColor = "rgb(239, 239, 239)"
        n = y.style.color = "black"
        w = x.value = ''
        return m+n +w
    }
}



if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }

