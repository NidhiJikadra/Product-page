let products = JSON.parse(localStorage.getItem("products"))

const display = (data) => {
    document.getElementById("output").innerHTML = " "
    data.map((ele) => {
        let img = document.createElement("img")
        img.src(ele.img)
        let title = document.createElement("h1")
        title.innerHTML = ele.title
        let price = document.createElement("h2")
        title.innerHTML = ele.price
        let category = document.createElement("h3")
        title.innerHTML = ele.category
        let div = document.createElement("div")
        div.append(img, title, price, category)
        document.getElementById("output").append(div)
    })

}
const productdata = (e) => {
    e.preventDefault();
    let product = {
        img: document.getElementById("img").value,
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        category: document.getElementById("category").value,
    }
    products.push(product)
    localStorage.setItem("products", JSON.stringify(products))
    display(products)
}
document.querySelector("#form").addEventListener("submit", productdata)