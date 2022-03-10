window.addEventListener("DOMContentLoaded", () => {
    toggleBuyBtn()
})

const producto = Array.from(document.querySelectorAll(".producto"))
let counterProduct = 0

const toggleBuyBtn = () => {
    for (let i = 0; i < producto.length; i++) {
        producto[i].addEventListener("click", (e) => {
            if (e.target.className.includes("buyBtn")) {
                const count = producto[i].querySelector(".count")
                const buyBtn = producto[i].querySelector(".buyBtn")
                const btns = producto[i].querySelector(".btns")
                buyBtn.classList.add("hide")
                btns.classList.remove("hide")
                count.innerText=counterProduct+1
                
                minProducts(producto[i], count, buyBtn,btns) 
                maxproducts(producto[i], count,)
                
            }
        })
        
    }
    
}

const minProducts = (producto, count,buyBtn, btns) => {
    console.log("producto", producto.querySelector(".btnMin"))
    const btnMin = producto.querySelector(".btnMin")
    btnMin.addEventListener("click", () => {
        if (counterProduct > 0) {
            counterProduct -= 1
            count.innerText = counterProduct
        }else{
            buyBtn.classList.remove("hide")
            btns.classList.add("hide")
        }
        console.log("minProducts", counterProduct);
    })
}

const maxproducts = (producto, count,) => {
    console.log("producto", producto.querySelector(".btnMas"))
    const btnMas = producto.querySelector(".btnMas")
    btnMas.addEventListener("click", () => {
        counterProduct += 1
        count.innerText = counterProduct
        console.log("maxProducts", counterProduct);
    })
}
