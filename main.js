function makeItem(placeholder) {
    return `
        <div class="placeholder">
            <img src="${placeholder.img}" alt="" />
              <p class="title">${placeholder.title}</p>
              <p class="seller">${placeholder.seller}</p>
              <p class="price">${placeholder.price}</p>
              </div>
    `
}


let html5 = ''

items.results.forEach( placeholder => {
    html5 += makeItem({
        img: placeholder.Images[0].url_170x135,
        title: placeholder.title,
        seller: placeholder.Shop.shop_name,
        price: placeholder.price
    })
})

document.querySelector("#itemList").innerHTML = html5

