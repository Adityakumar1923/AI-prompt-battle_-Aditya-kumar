let total = 0;
let cartItems = [];

function addToCart(item, price) {
    const cartList = document.getElementById("cartList");

    const li = document.createElement("li");
    li.innerText = item + " - ₹" + price;
    cartList.appendChild(li);

    cartItems.push(item);
    total += price;

    updateTotal();
}

function updateTotal() {
    let discount = 0;

    if (total >= 299) {
        discount = total * 0.20;
        document.getElementById("offerMsg").innerText =
            "🎉 20% OFF Applied!";
    } else {
        document.getElementById("offerMsg").innerText =
            "Add ₹" + (299 - total) + " more to get 20% OFF";
    }

    document.getElementById("total").innerText =
        Math.floor(total - discount);
}

function placeOrder() {
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const upcomingList = document.getElementById("upcomingList");

    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.innerText = "🕒 " + item + " – Arriving soon";
        upcomingList.appendChild(li);
    });

    alert("Order placed successfully!");

    // reset
    cartItems = [];
    total = 0;
    document.getElementById("cartList").innerHTML = "";
    document.getElementById("total").innerText = "0";
    document.getElementById("offerMsg").innerText = "";
}