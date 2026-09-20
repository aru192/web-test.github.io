/* ====================
   カート
==================== */

let cart = [];

const cartButton =
    document.getElementById("cartButton");

const cartModal =
    document.getElementById("cartModal");

const closeCart =
    document.getElementById("closeCart");

const cartCount =
    document.getElementById("cartCount");

const cartItems =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");


/* 商品追加 */

document.querySelectorAll(".add-cart")
.forEach(button => {

    button.addEventListener("click", () => {

        const name =
            button.dataset.name;

        const price =
            Number(button.dataset.price);

        const item =
            cart.find(item =>
                item.name === name
            );

        if (item) {

            item.quantity++;

        } else {

            cart.push({
                name: name,
                price: price,
                quantity: 1
            });

        }

        updateCart();

    });

});


/* カート更新 */

function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    cart.forEach((item, index) => {

        total +=
            item.price * item.quantity;

        count += item.quantity;

        const div =
            document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <br>
                ¥${item.price.toLocaleString()}
                × ${item.quantity}
            </div>

            <button onclick="removeItem(${index})">
                削除
            </button>
        `;

        cartItems.appendChild(div);

    });

    cartCount.textContent = count;

    cartTotal.textContent =
        "¥" + total.toLocaleString();

}


/* 商品削除 */

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


/* カートを開く */

cartButton.addEventListener("click", () => {

    cartModal.classList.add("active");

});


/* カートを閉じる */

closeCart.addEventListener("click", () => {

    cartModal.classList.remove("active");

});


/* ====================
   商品詳細
==================== */

const productModal =
    document.getElementById("productModal");

const closeProduct =
    document.getElementById("closeProduct");

const productDetail =
    document.getElementById("productDetail");


const products = {

    tomato: {

        name: "朝採れミニトマト",

        price: "¥1,200",

        weight: "500g",

        image: "🍅",

        description:
            "朝に収穫した新鮮なミニトマトを、その日のうちに発送します。甘みと酸味のバランスが特徴です。",

        points: [
            "朝採れ",
            "500g入り",
            "新鮮な状態で発送",
            "サラダやお弁当におすすめ"
        ]

    },

    sweet: {

        name: "あまーいミニトマト",

        price: "¥1,500",

        weight: "500g",

        image: "🍅",

        description:
            "甘みの強いミニトマトを選んで詰め合わせました。お子様のおやつにもおすすめです。",

        points: [
            "甘みの強い品種",
            "500g入り",
            "そのまま食べてもおすすめ",
            "贈り物にもおすすめ"
        ]

    },

    set: {

        name: "食べ比べセット",

        price: "¥2,000",

        weight: "1kg",

        image: "🍅",

        description:
            "異なる味や色のミニトマトを楽しめる、おすすめの食べ比べセットです。",

        points: [
            "1kg入り",
            "複数種類を食べ比べ",
            "家族みんなで楽しめる",
            "ギフトにもおすすめ"
        ]

    }

};


document.querySelectorAll(".detail-button")
.forEach(button => {

    button.addEventListener("click", () => {

        const id =
            button.dataset.product;

        const product =
            products[id];

        productDetail.innerHTML = `

            <div class="product-detail">

                <div class="product-detail-image">
                    ${product.image}
                </div>

                <h2>
                    ${product.name}
                </h2>

                <p>
                    ${product.description}
                </p>

                <ul>
                    ${product.points
                        .map(point =>
                            `<li>${point}</li>`
                        )
                        .join("")
                    }
                </ul>

                <div class="product-detail-price">
                    ${product.price}
                </div>

                <p>
                    内容量：${product.weight}
                </p>

            </div>
        `;

        productModal.classList.add("active");

    });

});


closeProduct.addEventListener("click", () => {

    productModal.classList.remove("active");

});


/* ====================
   モーダル外クリック
==================== */

window.addEventListener("click", event => {

    if (event.target === productModal) {

        productModal.classList.remove("active");

    }

    if (event.target === cartModal) {

        cartModal.classList.remove("active");

    }

});


/* ====================
   スクロールアニメーション
==================== */

const reveals =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    reveals.forEach(element => {

        const top =
            element.getBoundingClientRect().top;

        if (top <
            windowHeight - 100) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* ====================
   ヘッダー
==================== */

window.addEventListener("scroll", () => {

    const header =
        document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.08)";

    } else {

        header.style.boxShadow =
            "none";

    }

});


/* ====================
   スマホメニュー
==================== */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const closeMenu =
    document.getElementById("closeMenu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.add("active");

});


closeMenu.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

});


/* メニューをクリックしたら閉じる */

document.querySelectorAll(".mobile-menu a")
.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* ====================
   注文
==================== */

document
    .getElementById("orderButton")
    .addEventListener("click", () => {

        if (cart.length === 0) {

            alert(
                "カートに商品がありません。"
            );

            return;

        }

        alert(
            "ご注文ありがとうございます！\n\n" +
            "注文フォームへ移動します。"
        );

    });
