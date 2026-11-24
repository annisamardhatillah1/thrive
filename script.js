// ===============================
// NAVIGATION
// ===============================

function goToCatalog() {
    document.getElementById("catalog").scrollIntoView({
        behavior: "smooth"
    });
}


// ===============================
// WISHLIST
// ===============================

function toggleHeart(button) {

    button.classList.toggle("active");

    if (button.classList.contains("active")) {

        button.innerHTML = "♥";

        showToast("Masuk wishlist! 🤎");

    } else {

        button.innerHTML = "♡";

        showToast("Dihapus dari wishlist.");

    }
}


// ===============================
// SEARCH
// ===============================

function searchProducts() {

    let keyword =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();

    document
        .querySelectorAll(".product")
        .forEach(function(product) {

            let name =
                product.dataset.name.toLowerCase();

            if (name.includes(keyword)) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

}


// ===============================
// SHOW ALL
// ===============================

function showAllProducts() {

    document
        .querySelectorAll(".product")
        .forEach(function(product) {

            product.style.display = "block";

        });

    document
        .getElementById("catalog")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ===============================
// CATEGORY FILTER
// ===============================

function filterCategory(category) {

    const categoryMap = {

        tops: [
            "vintage knit cardigan",
            "brown oversized shirt",
            "sage knit sweater",
            "cream basic blouse"
        ],

        bottoms: [
            "straight jeans y2k"
        ],

        dress: [
            "floral vintage dress"
        ],

        outer: [
            "minimalist blazer",
            "brown knit vest"
        ],

        accessories: []

    };


    let productNames =
        categoryMap[category] || [];


    document
        .querySelectorAll(".product")
        .forEach(function(product) {

            if (
                productNames.includes(
                    product.dataset.name
                )
            ) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });


    document
        .getElementById("catalog")
        .scrollIntoView({
            behavior: "smooth"
        });


    showToast(
        "Filter: " +
        category.charAt(0).toUpperCase() +
        category.slice(1) +
        " ✨"
    );

}


// ===============================
// TRENDING
// ===============================

function showTrending() {

    const trending = [
        "straight jeans y2k",
        "sage knit sweater",
        "minimalist blazer"
    ];


    document
        .querySelectorAll(".product")
        .forEach(function(product) {

            if (
                trending.includes(
                    product.dataset.name
                )
            ) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });


    document
        .getElementById("catalog")
        .scrollIntoView({
            behavior: "smooth"
        });


    showToast("Trending picks ✨");

}


// ===============================
// FILTER MODAL
// ===============================

function openFilter() {

    document
        .getElementById("filterModal")
        .classList.add("show");

}


function closeFilter() {

    document
        .getElementById("filterModal")
        .classList.remove("show");

}


function openCategories() {

    openFilter();

}


// ===============================
// INFO MODAL
// ===============================

function openInfo(title, text) {

    document.getElementById("infoTitle").innerText =
        title;

    document.getElementById("infoText").innerText =
        text;

    document
        .getElementById("infoModal")
        .classList.add("show");

}


function closeInfo() {

    document
        .getElementById("infoModal")
        .classList.remove("show");

}


// ===============================
// SELL
// ===============================

function openSell() {

    document
        .getElementById("sellModal")
        .classList.add("show");

}


function closeSell() {

    document
        .getElementById("sellModal")
        .classList.remove("show");

}


function submitSell() {

    let item =
        document
            .getElementById("sellItem")
            .value
            .trim();


    if (item === "") {

        showToast(
            "Isi nama barang dulu ya 🤎"
        );

        return;

    }


    closeSell();


    openInfo(
        "Siap dijual! 💸",
        "Barang " +
        item +
        " sudah masuk ke alur jual demo THRIVE. Tinggal lanjut upload foto dan detail barang."
    );

}


// ===============================
// WISHLIST PAGE
// ===============================

function openWishlist() {

    openInfo(
        "Wishlist 🤎",
        "Produk yang kamu suka bakal muncul di sini. Klik ikon ♡ di kartu produk untuk menyimpan item favorit."
    );

}


// ===============================
// PROFILE
// ===============================

function openProfile() {

    openInfo(
        "Profile 👋",
        "Hai! Ini halaman profil demo THRIVE. Kamu bisa melihat wishlist, riwayat pesanan, dan barang yang kamu jual."
    );

}


// ===============================
// CONTACT
// ===============================

function openContact() {

    openInfo(
        "Contact Us 💬",
        "Instagram: @thrive.thrift\n\n" +
        "WhatsApp: 08xx-xxxx-xxxx\n\n" +
        "Klik link Instagram atau WhatsApp di footer untuk menghubungi THRIVE."
    );

}


// ===============================
// CART
// ===============================

function openCart() {

    document
        .getElementById("cart")
        .classList.add("open");

}


function closeCart() {

    document
        .getElementById("cart")
        .classList.remove("open");

}


// ===============================
// ADD TO CART
// ===============================

function addToCart() {

    closeModal();

    openCart();

    showToast(
        "Produk masuk keranjang! 🛍️"
    );

}


// ===============================
// CHECKOUT
// ===============================

function openCheckout() {

    document
        .getElementById("checkoutModal")
        .classList.add("show");

}


function closeCheckout() {

    document
        .getElementById("checkoutModal")
        .classList.remove("show");

}


function finishCheckout() {

    closeCheckout();

    closeCart();

    openInfo(
        "Order berhasil! 🎉",
        "Checkout demo kamu berhasil diproses. Makasih udah thrift bareng THRIVE!"
    );

}


// ===============================
// TOAST
// ===============================

function showToast(message) {

    let toast =
        document.getElementById("toast");


    if (!toast) {

        toast =
            document.createElement("div");

        toast.id = "toast";

        toast.style.cssText = `
            position: fixed;
            bottom: 25px;
            left: 50%;
            transform: translateX(-50%);
            background: #51483e;
            color: #fff;
            padding: 12px 18px;
            border-radius: 999px;
            z-index: 3000;
            font-size: 13px;
            box-shadow: 0 10px 30px rgba(0,0,0,.18);
            transition: opacity .3s;
        `;

        document.body.appendChild(toast);

    }


    toast.textContent = message;

    toast.style.opacity = "1";


    clearTimeout(window.toastTimer);


    window.toastTimer =
        setTimeout(function() {

            toast.style.opacity = "0";

        }, 2200);

}


// ===============================
// PRODUCT DETAIL
// ===============================

document
    .querySelectorAll(".product")
    .forEach(function(product) {

        product.addEventListener(
            "click",
            function(event) {

                // Jangan buka detail
                // kalau yang ditekan tombol wishlist
                if (
                    event.target.classList.contains(
                        "heart"
                    )
                ) {
                    return;
                }


                let name =
                    product.querySelector(
                        ".product-name"
                    ).innerText;


                let price =
                    product.querySelector(
                        ".product-price"
                    ).innerText;


                let image =
                    product.querySelector(
                        "img"
                    ).src;


                document
                    .getElementById("modalName")
                    .innerText = name;


                document
                    .getElementById("modalPrice")
                    .innerText = price;


                document
                    .getElementById("modalImage")
                    .src = image;


                document
                    .getElementById("productModal")
                    .classList.add("show");

            }
        );

    });


// ===============================
// CLOSE PRODUCT MODAL
// ===============================

function closeModal() {

    document
        .getElementById("productModal")
        .classList.remove("show");

}


// ===============================
// SIZE
// ===============================

function selectSize(button) {

    document
        .querySelectorAll(".size button")
        .forEach(function(item) {

            item.classList.remove("selected");

        });


    button.classList.add("selected");

}


// ===============================
// CLOSE MODAL WHEN CLICK OUTSIDE
// ===============================

document
    .querySelectorAll(".modal")
    .forEach(function(modal) {

        modal.addEventListener(
            "click",
            function(event) {

                if (event.target === modal) {

                    modal.classList.remove(
                        "show"
                    );

                }

            }
        );

    });


// ===============================
// COUNTDOWN
// ===============================

let totalSeconds =
    2 * 3600 +
    15 * 60 +
    30;


setInterval(function() {

    if (totalSeconds <= 0) {
        return;
    }


    totalSeconds--;


    let hours =
        Math.floor(
            totalSeconds / 3600
        );


    let minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    let seconds =
        totalSeconds % 60;


    document.getElementById("hours")
        .innerText =
        String(hours)
            .padStart(2, "0");


    document.getElementById("minutes")
        .innerText =
        String(minutes)
            .padStart(2, "0");


    document.getElementById("seconds")
        .innerText =
        String(seconds)
            .padStart(2, "0");

}, 1000);