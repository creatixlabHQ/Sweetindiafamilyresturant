<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Sweet India Restaurant Menu</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- FONT AWESOME -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:Arial}
body{background:#f6f6f6}

/* VARIABLES */
:root{
  --bg-img:url('https://i.postimg.cc/4ySnFvHg/HD-wallpaper-nature-landscape-landscape-nature-thumbnail.jpg');
  --dark:#0b132b;
  --red:#e63946;
}

/* HEADER */
header{
background:#fff;
padding:15px;
position:sticky;
top:0;
z-index:10;
box-shadow:0 2px 10px rgba(0,0,0,.1)
}
header h2{color:var(--red)}
.search{
margin-top:10px;
padding:10px;
width:100%;
border-radius:8px;
border:1px solid #ddd
}

/* MENU */
.menu{
padding:15px;
display:grid;
grid-template-columns:repeat(auto-fill,minmax(160px,1fr));
gap:15px;
background:var(--bg-img);
background-size:cover;
background-position:center;
background-attachment:fixed;
min-height:100vh;
}
.card{
background:#fff;
border-radius:12px;
overflow:hidden;
box-shadow:0 5px 15px rgba(0,0,0,.15)
}
.card img{
width:100%;
height:120px;
object-fit:cover
}
.card-body{padding:10px}
.price{font-weight:bold;margin:5px 0}
.add-btn,.qty{
border:1px solid var(--red);
padding:6px;
border-radius:6px;
text-align:center;
cursor:pointer
}
.qty{
display:flex;
justify-content:space-between;
background:var(--red);
color:#fff
}
.qty button{
background:none;
border:none;
color:white;
font-size:18px;
cursor:pointer
}

/* CART BAR */
.cart-bar{
position:fixed;
bottom:-100px;
left:0;
width:100%;
background:#1d3557;
color:#fff;
padding:20px 25px;
display:flex;
justify-content:space-between;
align-items:center;
transition:.4s;
z-index:20;
font-size:18px; /* bigger text */
cursor:pointer;
}
.cart-bar .continue { font-weight:700; font-size:20px; }
.cart-bar.active{bottom:0}

/* CART PAGE */
.cart-page{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:var(--bg-img);
background-size:cover;
background-position:center;
transform:translateY(100%);
transition:.4s;
padding:15px;
overflow:auto;
z-index:99
}
.cart-page.open{transform:translateY(0)}
.cart-page::before{
content:"";
position:fixed;
inset:0;
background:rgba(255,255,255,.88);
z-index:-1
}
textarea,input{
width:100%;
padding:10px;
border-radius:8px;
border:1px solid #ddd;
margin-bottom:10px
}
.place-btn{
background:var(--red);
color:white;
padding:15px;
border:none;
width:100%;
border-radius:10px;
font-size:16px;
cursor:pointer
}

/* make order textarea use monospace for alignment */
#orderText { font-family: "Courier New", Courier, monospace; white-space:pre; height:160px; }

/* FOOTER */
footer{
background:linear-gradient(to right,var(--dark),#000);
color:#fff;
padding:60px 20px 30px;
}
.footer-container{
max-width:1100px;
margin:auto;
}
.footer-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:40px;
}
footer h3{margin-bottom:15px}
footer p,footer li{color:#ddd;font-size:14px}

.social-links a{
color:#fff;
font-size:20px;
margin-right:15px;
transition:.3s;
}
.social-links a:hover{color:#fcbf49}

.contact li,.opening li{
display:flex;
justify-content:space-between;
margin-bottom:8px;
}
.contact span:first-child{
width:30px;
}

.footer-bottom{
border-top:1px solid #333;
margin-top:40px;
padding-top:20px;
text-align:center;
font-size:13px;
color:#aaa;
}
</style>
</head>
<body>
<header>
<h2>🍴 Sweet India Family Restaurant</h2>
<input class="search" placeholder="Search food..." onkeyup="searchFood(this.value)">
</header>

<div class="menu" id="menu"></div>

<div class="cart-bar" id="cartBar" onclick="openCart()">
  <div><span id="cartCount">0</span> Items | ₹<span id="cartTotal">0</span></div>
  <div class="continue">Continue →</div>
</div>

<div class="cart-page" id="cartPage">
<h3>Your Order</h3>
<textarea id="orderText" readonly></textarea>
<input placeholder="Full Name" id="name" required>
<input placeholder="Phone Number" id="phone" required>
<textarea id="address" placeholder="Enter delivery address manually"></textarea>
<button onclick="detectAddress()">📍 Auto Detect Address</button><br><br>
<button class="place-btn" onclick="placeOrder()">Place Order</button>
</div>

<!-- FOOTER -->
<footer>
<div class="footer-container">
<div class="footer-grid">
 <div>
<h3>SWEET INDIA</h3>
<p><i>A family tradition of authentic Indian cuisine since 1995</i></p>
<div class="social-links">
<a href="#"><i class="fab fa-facebook-f"></i></a>
<a href="https://instagram.com/sweetindiaofficial" target="_blank"><i class="fab fa-instagram"></i></a>
<a href="#"><i class="fab fa-twitter"></i></a>
<a href="#"><i class="fab fa-yelp"></i></a>
<a href="https://wa.me/919569321287" target="_blank"><i class="fab fa-whatsapp"></i></a>
</div>
</div>
 <div>
<h3>Contact</h3>
<ul class="contact">
<li><span>📍</span><span>Near Bata Gali, Gandhinagar</span></li>
<li><span>📞</span><span>+91 9198951281 </span></li>
<li><span>📧</span><span>Rohitmujnani@gmail.com</span></li>
</ul>
</div>
 <div>
<h3>Opening Hours</h3>
<ul class="opening">
<li><span>Mon - Thu</span><span>11:00 - 22:00</span></li>
<li><span>Fri - Sat</span><span>11:00 - 23:00</span></li>
<li><span>Sunday</span><span>11:00 - 21:00</span></li>
</ul>
</div>
</div>
<div class="footer-bottom">
© 2025 Sweet India Family Restaurant | Designed by Shubham
</div>
</div>
</footer>

<script>
/*
  Full menu added below (items + prices).
  Order summary formatted like:
  1 x Dosa        ₹10
  2 x Chaumin     ₹20
  --------------------
  Total = ₹30
  --------------------
*/

const menuEl = document.getElementById('menu');
const cartBar = document.getElementById('cartBar');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const orderText = document.getElementById('orderText');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');

// A more complete menu (extracted/extended from the photos).
// You can adjust prices if you want exact values.
const items = [
  // Dosas
  {id:1, name:"Plain Dosa", price:90, img:"https://i.postimg.cc/m2mSFmqT/IMG-20251220-192236.jpg/400x300/?dosa"},
  {id:2, name:"Masala Dosa", price:120, img:"https://source.unsplash.com/400x300/?masala-dosa"},
  {id:3, name:"Special Dosa", price:150, img:"https://source.unsplash.com/400x300/?special-dosa"},
  {id:4, name:"Paneer Dosa", price:170, img:"https://source.unsplash.com/400x300/?paneer-dosa"},
  {id:5, name:"Onion Dosa", price:120, img:"https://source.unsplash.com/400x300/?onion-dosa"},
  {id:6, name:"Rava Dosa", price:130, img:"https://source.unsplash.com/400x300/?rava-dosa"},
  {id:7, name:"Schezwan Dosa", price:150, img:"https://source.unsplash.com/400x300/?schezwan-dosa"},
  // Pav & Snacks
  {id:8, name:"Pav Bhaji", price:150, img:"https://source.unsplash.com/400x300/?pav-bhaji"},
  {id:9, name:"Extra Pav", price:40, img:"https://source.unsplash.com/400x300/?bread"},
  // Burgers & Sandwich
  {id:10, name:"Veg Burger", price:99, img:"https://source.unsplash.com/400x300/?veg-burger"},
  {id:11, name:"Paneer Burger", price:120, img:"https://source.unsplash.com/400x300/?paneer-burger"},
  {id:12, name:"Cheese Burger", price:149, img:"https://source.unsplash.com/400x300/?cheese-burger"},
  {id:13, name:"Veg Sandwich", price:125, img:"https://source.unsplash.com/400x300/?sandwich"},
  {id:14, name:"Paneer Sandwich", price:150, img:"https://source.unsplash.com/400x300/?paneer-sandwich"},
  // Chowmein / Noodles
  {id:15, name:"Veg Chowmein", price:125, img:"https://source.unsplash.com/400x300/?chowmein"},
  {id:16, name:"Paneer Chowmein", price:165, img:"https://source.unsplash.com/400x300/?paneer-chowmein"},
  {id:17, name:"Singapuri Chowmein", price:190, img:"https://source.unsplash.com/400x300/?singapore-chowmein"},
  {id:18, name:"Hakka Noodles", price:155, img:"https://source.unsplash.com/400x300/?hakka-noodles"},
  {id:19, name:"Paneer Hakka Noodles", price:195, img:"https://source.unsplash.com/400x300/?paneer-noodles"},
  // Fried rice
  {id:20, name:"Jeera Rice", price:125, img:"https://source.unsplash.com/400x300/?jeera-rice"},
  {id:21, name:"Veg Fried Rice", price:145, img:"https://source.unsplash.com/400x300/?fried-rice"},
  {id:22, name:"Paneer Fried Rice", price:195, img:"https://source.unsplash.com/400x300/?paneer-fried-rice"},
  // Pizza
  {id:23, name:"Mix Veg Pizza", price:255, img:"https://source.unsplash.com/400x300/?veg-pizza"},
  {id:24, name:"Peri Peri Pizza", price:275, img:"https://source.unsplash.com/400x300/?peri-peri-pizza"},
  {id:25, name:"Paneer Pizza", price:295, img:"https://source.unsplash.com/400x300/?paneer-pizza"},
  {id:26, name:"Mushroom Pizza", price:325, img:"https://source.unsplash.com/400x300/?mushroom-pizza"},
  {id:27, name:"Cheese Pizza", price:300, img:"https://source.unsplash.com/400x300/?cheese-pizza"},
  // Starters & Sides
  {id:28, name:"Chhola Bhatura", price:150, img:"https://source.unsplash.com/400x300/?chole-bhature"},
  {id:29, name:"Finger Chips", price:125, img:"https://source.unsplash.com/400x300/?french-fries"},
  {id:30, name:"Peri Peri Chips", price:165, img:"https://source.unsplash.com/400x300/?peri-peri-fries"},
  {id:31, name:"Maggi Masala", price:95, img:"https://source.unsplash.com/400x300/?maggi"},
  // Biryani / Rice
  {id:32, name:"Veg Biryani", price:230, img:"https://source.unsplash.com/400x300/?veg-biryani"},
  {id:33, name:"Paneer Biryani", price:260, img:"https://source.unsplash.com/400x300/?paneer-biryani"},
  // Momos / Pakoda / Idli
  {id:34, name:"Veg Momos", price:100, img:"https://source.unsplash.com/400x300/?momos"},
  {id:35, name:"Veg Pakoda", price:160, img:"https://source.unsplash.com/400x300/?pakora"},
  {id:36, name:"Paneer Pakoda", price:160, img:"https://source.unsplash.com/400x300/?paneer-pakora"},
  {id:37, name:"Plain Idli", price:120, img:"https://source.unsplash.com/400x300/?idli"},
  {id:38, name:"Masala Idli", price:140, img:"https://source.unsplash.com/400x300/?masala-idli"},
  {id:39, name:"Fry Idli", price:160, img:"https://source.unsplash.com/400x300/?fried-idli"},
  // Pasta / Utappam / Chaat
  {id:40, name:"White Sauce Pasta", price:216, img:"https://source.unsplash.com/400x300/?pasta"},
  {id:41, name:"Red Sauce Pasta", price:216, img:"https://source.unsplash.com/400x300/?tomato-pasta"},
  {id:42, name:"Onion Uttapam", price:160, img:"https://source.unsplash.com/400x300/?uttapam"},
  {id:43, name:"Tomato Uttapam", price:180, img:"https://source.unsplash.com/400x300/?uttapam"},
  // Sweets / Shakes
  {id:44, name:"Chocolate Shake", price:120, img:"https://source.unsplash.com/400x300/?chocolate-shake"},
  {id:45, name:"Vanilla Shake", price:100, img:"https://source.unsplash.com/400x300/?vanilla-milkshake"},
  {id:46, name:"Gulab Jamun (1pc)", price:40, img:"https://source.unsplash.com/400x300/?gulab-jamun"},
  {id:47, name:"Rasgulla (1pc)", price:40, img:"https://source.unsplash.com/400x300/?rasgulla"},
  // Paneer / gravies (sample)
  {id:48, name:"Paneer Butter Masala", price:220, img:"https://source.unsplash.com/400x300/?paneer-butter-masala"},
  {id:49, name:"Paneer Chilli", price:245, img:"https://source.unsplash.com/400x300/?paneer-chilli"},
  {id:50, name:"Manchurian Veg", price:165, img:"https://source.unsplash.com/400x300/?veg-manchurian"}
];

let cart = {};

// render menu
function render(){
  menuEl.innerHTML = "";
  items.forEach(i=>{
    menuEl.innerHTML += `
      <div class="card">
        <img src="${i.img}" alt="${i.name}">
        <div class="card-body">
          <h4>${i.name}</h4>
          <div class="price">₹${i.price}</div>
          ${cart[i.id]?
            `<div class="qty">
              <button onclick="dec(${i.id})">-</button>
              <span>${cart[i.id]}</span>
              <button onclick="inc(${i.id})">+</button>
            </div>`:
            `<div class="add-btn" onclick="add(${i.id})">ADD</div>`}
        </div>
      </div>
    `;
  });
  updateCart();
}

function add(id){ cart[id] = (cart[id] || 0) + 1; render(); }
function inc(id){ cart[id] = (cart[id] || 0) + 1; render(); }
function dec(id){ if(!cart[id]) return; cart[id]--; if(cart[id] <= 0) delete cart[id]; render(); }

function updateCart(){
  let totalItems = 0;
  let totalPrice = 0;
  let lines = "";

  // We will format each line with monospace padding for alignment
  const padWidth =  thirtyToNumber(30); // 30 characters for left side (qty x name)

  for(let id in cart){
    const qty = cart[id];
    const it = items.find(x => x.id == id);
    if(!it) continue;
    const lineTotal = it.price * qty;
    totalItems += qty;
    totalPrice += lineTotal;

    // left part: "1 x Dosa"
    let left = `${qty} x ${it.name}`;
    if (left.length < padWidth) left = left.padEnd(padWidth, ' ');
    // ensure price right after padding
    lines += `${left}₹${lineTotal}\n`;
  }

  if(totalItems === 0){
    orderText.value = "";
  } else {
    lines += "--------------------\n";
    lines += `Total = ₹${totalPrice}\n`;
    lines += "--------------------\n";
    orderText.value = lines;
  }

  cartBar.classList.toggle("active", totalItems > 0);
  cartCount.innerText = totalItems;
  cartTotal.innerText = totalPrice;
}

// helper to safely return a number (avoid lint issues)
function thirtyToNumber(n){ return typeof n === 'number' ? n : 30; }

function openCart(){
  document.getElementById('cartPage').classList.add("open");
}

function placeOrder(){
  if(Object.keys(cart).length === 0){ alert("Cart is empty"); return; }
  if(!nameInput.value || !phoneInput.value){ alert("Please enter name and phone"); return; }

  // Send order to server (example endpoint used in original code)
  fetch("https://yash-wine.vercel.app/api/ssg66@gmail.com",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      Name: nameInput.value,
      Phone: phoneInput.value,
      Address: addressInput.value,
      Order: orderText.value
    })
  }).then(()=>{
    alert("✅ Order Sent");
    // clear cart
    cart = {};
    render();
    document.getElementById('cartPage').classList.remove("open");
  }).catch(err=>{
    console.error(err);
    alert("Error sending order. Check console.");
  });
}

function searchFood(q){
  // show all first (render) then filter
  render();
  if(!q) return;
  document.querySelectorAll(".card").forEach(c=>{
    if(!c.innerText.toLowerCase().includes(q.toLowerCase()))
      c.style.display="none";
  });
}

function detectAddress(){
  if(!navigator.geolocation){
    alert("Geolocation not supported");
    return;
  }
  navigator.geolocation.getCurrentPosition(async pos=>{
    try{
      const r = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`);
      const d = await r.json();
      addressInput.value = d.display_name || "Not detected";
    }catch(e){
      console.error(e);
      addressInput.value = "Unable to detect address";
    }
  }, err=>{
    alert("Location permission denied or unavailable");
  });
}

render();
</script>
</body>
</html>
