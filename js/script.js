const products = [
    {
        id: 1,
        name: "SPARK SP200R",
        type: "Мотоцикл",
        brand: "SPARK",
        price: 59985,
        engine: 200,
        power: "14 к.с.",
        transmission: "5 передач",
        year: 2026,
        available: true,
        isNew: true,
        popular: 98,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNPq94NZX_12mH-SbzLX2wbQZ8wogzVeQnaStjcraDMg&s=10",
        description: "Надійний дорожній мотоцикл для міста та заміських поїздок."
    },
    {
        id: 2,
        name: "SPARK SP250R",
        type: "Мотоцикл",
        brand: "SPARK",
        price: 72900,
        engine: 250,
        power: "18 к.с.",
        transmission: "5 передач",
        year: 2026,
        available: true,
        isNew: true,
        popular: 95,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREvFKCRNo6FLyf6Fy9cjHS3E4kZgCb116jDaRxcpOLPA&s=10",
        description: "Універсальний мотоцикл з потужним двигуном та комфортною посадкою."
    },
    {
        id: 3,
        name: "BSE J5 Enduro",
        type: "Мотоцикл",
        brand: "BSE",
        price: 89500,
        engine: 250,
        power: "24 к.с.",
        transmission: "6 передач",
        year: 2026,
        available: true,
        isNew: true,
        popular: 93,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsn_I5JrbsEQYN8-2-hudBCVBkBRYTP0pbUGqPP0gILw&s=10",
        description: "Ендуро для активного відпочинку та пересування по бездоріжжю."
    },
    {
        id: 4,
        name: "LONCIN LX300",
        type: "Мотоцикл",
        brand: "LONCIN",
        price: 124900,
        engine: 300,
        power: "28 к.с.",
        transmission: "6 передач",
        year: 2026,
        available: true,
        isNew: false,
        popular: 91,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTck5jou0ZTDMRuR2FgqqRBgNqW8LqPevRImn3ifUIQ&s=10",
        description: "Сучасний мотоцикл для щоденних поїздок та подорожей."
    },
    {
        id: 5,
        name: "FORTE FT125-Q",
        type: "Скутер",
        brand: "FORTE",
        price: 47900,
        engine: 125,
        power: "9 к.с.",
        transmission: "Автомат",
        year: 2026,
        available: true,
        isNew: true,
        popular: 96,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoud8C0XNQV6Lz9AoQlqb0OpFGyiVzTalW1qkyndbRdA&s=10",
        description: "Економний міський скутер для комфортного пересування."
    },
    {
        id: 6,
        name: "FORTE FT150",
        type: "Скутер",
        brand: "FORTE",
        price: 52900,
        engine: 150,
        power: "11 к.с.",
        transmission: "Автомат",
        year: 2026,
        available: true,
        isNew: false,
        popular: 88,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMjowBoTZIssMiaBY_D0I-C8Nvzee6V7hhgPChX4JVOg&s=10",
        description: "Практичний скутер для міста з великим багажним відділенням."
    },
    {
        id: 7,
        name: "LONCIN XW300",
        type: "Квадроцикл",
        brand: "LONCIN",
        price: 159900,
        engine: 300,
        power: "23 к.с.",
        transmission: "Варіатор",
        year: 2026,
        available: true,
        isNew: true,
        popular: 94,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ZWCgkLgSogrATs2JU4-3J0LQKiwC64fD7feFL7I49A&s=10",
        description: "Повнопривідний квадроцикл для відпочинку та роботи."
    },
    {
        id: 8,
        name: "LONCIN XW500",
        type: "Квадроцикл",
        brand: "LONCIN",
        price: 219900,
        engine: 500,
        power: "32 к.с.",
        transmission: "Варіатор",
        year: 2026,
        available: true,
        isNew: false,
        popular: 90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUO_MVEBsOYM4E5mGctpQ6X2sLUy1joJHK4Ixr_mH5w&s=10",
        description: "Потужний квадроцикл з високою прохідністю."
    },
    {
        id: 9,
        name: "DOZER UTV 500",
        type: "UTV",
        brand: "DOZER",
        price: 289900,
        engine: 500,
        power: "38 к.с.",
        transmission: "Варіатор",
        year: 2026,
        available: true,
        isNew: true,
        popular: 87,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxxQpVltvZjrGGvYCFU7H5MDxlW8-Kc_G4uMP78UbOGg&s=10",
        description: "Практичний UTV для господарських робіт та перевезення вантажів."
    },
    {
        id: 10,
        name: "DOZER UTV 800",
        type: "UTV",
        brand: "DOZER",
        price: 379900,
        engine: 800,
        power: "52 к.с.",
        transmission: "Варіатор",
        year: 2026,
        available: true,
        isNew: false,
        popular: 84,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvo1QGZRZ3UVZ1aO0uEhKatEsnUsErOckN_I2OQEUm9w&s=10",
        description: "Великий UTV для складних робіт та перевезення."
    },
    {
        id: 11,
        name: "FORTE МД-81",
        type: "Мотоблок",
        brand: "FORTE",
        price: 42900,
        engine: 196,
        power: "9 к.с.",
        transmission: "2+1",
        year: 2026,
        available: true,
        isNew: true,
        popular: 92,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1SfIp5NNEcuzDDxHIzxyOxyw0zkV-PcU3NklNOyyuA&s=10",
        description: "Дизельний мотоблок для обробки землі та господарських робіт."
    },
    {
        id: 12,
        name: "FORTE МД-101",
        type: "Мотоблок",
        brand: "FORTE",
        price: 51900,
        engine: 270,
        power: "10 к.с.",
        transmission: "3+1",
        year: 2026,
        available: true,
        isNew: false,
        popular: 89,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuiIY02mvCh3B0ohsQr767frtgJx6E2fJbAUo0fksbOw&s=10",
        description: "Посилений мотоблок для великих ділянок та важкої роботи."
    },
    {
        id: 13,
        name: "Мінітрактор FORTE 244",
        type: "Трактор",
        brand: "FORTE",
        price: 189900,
        engine: 1500,
        power: "24 к.с.",
        transmission: "8+2",
        year: 2026,
        available: true,
        isNew: true,
        popular: 86,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDymWCMafvB1KVR8xcuSO4423D2iGnWUfht-DteGG-iA&s=10",
        description: "Компактний трактор для роботи на присадибній та фермерській ділянці."
    },
    {
        id: 14,
        name: "Мінітрактор FORTE 354",
        type: "Трактор",
        brand: "FORTE",
        price: 269900,
        engine: 2100,
        power: "35 к.с.",
        transmission: "8+2",
        year: 2026,
        available: true,
        isNew: false,
        popular: 80,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUTYDmhO2SekBMZIMnt52CpYRS5rWvzsQI9l-mGGGEQ&s=10",
        description: "Потужний компактний трактор для різноманітних господарських задач."
    },
    {
        id: 15,
        name: "DOZER GEN 5.5",
        type: "Генератор",
        brand: "DOZER",
        price: 32900,
        engine: 390,
        power: "5.5 кВт",
        transmission: "Автомат",
        year: 2026,
        available: true,
        isNew: true,
        popular: 90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRejjkio0tGQmyhAPoCVAayW9fOvF8J_j91bBudaQMMcw&s=10",
        description: "Бензиновий генератор для резервного електроживлення."
    },
    {
        id: 16,
        name: "DOZER GEN 8.0",
        type: "Генератор",
        brand: "DOZER",
        price: 58900,
        engine: 460,
        power: "8 кВт",
        transmission: "Автомат",
        year: 2026,
        available: true,
        isNew: false,
        popular: 82,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuZCenfNo9GOu4aEU-nQ58AnJZyjfEWgwbYQtM3Bp86Q&s=10",
        description: "Потужний генератор для будинку, майстерні та господарства."
    },
    {
        id: 17,
        name: "GEON X-Road 250",
        type: "Пітбайк",
        brand: "GEON",
        price: 87900,
        engine: 250,
        power: "25 к.с.",
        transmission: "6 передач",
        year: 2026,
        available: true,
        isNew: true,
        popular: 97,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpaRolOrK-yfg_belWz5HAq7hsSplRrgW77swWtUHFjw&s=10",
        description: "Надійний пітбайк GEON для активної їзди та бездоріжжя."
    },
    {
        id: 18,
        name: "GEON Scrambler 250",
        type: "Пітбайк",
        brand: "GEON",
        price: 99900,
        engine: 250,
        power: "26 к.с.",
        transmission: "6 передач",
        year: 2026,
        available: true,
        isNew: true,
        popular: 94,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqzhYNhUwY0pp0-KdOKKL5s_GelqilOyBOuMyyQC3n9A&s=10",
        description: "Пітбайк GEON для активного відпочинку та бездоріжжя."
    },
    {
        id: 19,
        name: "KOVI 250 Lite",
        type: "Пітбайк",
        brand: "KOVI",
        price: 109900,
        engine: 250,
        power: "28 к.с.",
        transmission: "6 передач",
        year: 2026,
        available: true,
        isNew: true,
        popular: 99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqeP4glM7JZ_UZihhZmEFvWUWRp7CpO_v5fxZmXQQ2pw&s=10",
        description: "Легкий та потужний пітбайк KOVI для бездоріжжя."
    },
    {
        id: 20,
        name: "KOVI 300 Pro",
        type: "Пітбайк",
        brand: "KOVI",
        price: 139900,
        engine: 300,
        power: "32 к.с.",
        transmission: "6 передач",
        year: 2026,
        available: true,
        isNew: true,
        popular: 98,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaza5775CAMP4KFqvFJxs6p210rJItfYI0y8Ai9u7ajg&s=10",
        description: "Потужний пітбайк KOVI для складних маршрутів."
    },
    {
        id: 21,
        name: "KAWASAKI KLX 140",
        type: "Пітбайк",
        brand: "KAWASAKI",
        price: 189900,
        engine: 144,
        power: "12 к.с.",
        transmission: "5 передач",
        year: 2026,
        available: true,
        isNew: true,
        popular: 96,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0qF5Z8mul5dmWEScRmwS7dW-UXQNH4UiE2uyGyDoq8g&s=10",
        description: "Компактний пітбайк Kawasaki для тренувань та бездоріжжя."
    },
    {
        id: 22,
        name: "YAMAHA TT-R 230",
        type: "Пітбайк",
        brand: "YAMAHA",
        price: 219900,
        engine: 230,
        power: "20 к.с.",
        transmission: "6 передач",
        year: 2026,
        available: true,
        isNew: true,
        popular: 98,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3vQzYMa1P6hG6UNEDetNajCnA5cQL1fi3rDqVoCRxrw&s=10",
        description: "Надійний пітбайк Yamaha для тренувань та активної їзди."
    },
    {
        id: 23,
        name: "YAMAHA TTR 250",
        type: "Пітбайк",
        brand: "YAMAHA",
        price: 239900,
        engine: 250,
        power: "23 к.с.",
        transmission: "6 передач",
        year: 2026,
        available: true,
        isNew: false,
        popular: 95,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfAKp5qm7uYZONakVEGVVDVjOTf7syVh_6nv1wHBWWHQ&s=10",
        description: "Потужний пітбайк Yamaha для бездоріжжя та активного відпочинку."
    },
    {
        id: 24,
        name: "KOVI 250 ATV",
        type: "Квадроцикл",
        brand: "KOVI",
        price: 149900,
        engine: 250,
        power: "20 к.с.",
        transmission: "Варіатор",
        year: 2026,
        available: true,
        isNew: true,
        popular: 96,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYS6dcq2lxDr0V2m7LyzT5wjpXBGuwdsjd7f1-RNVIXA&s=10",
        description: "Компактний квадроцикл KOVI для активного відпочинку."
    },
    {
        id: 25,
        name: "GEON ATV 300",
        type: "Квадроцикл",
        brand: "GEON",
        price: 169900,
        engine: 300,
        power: "23 к.с.",
        transmission: "Варіатор",
        year: 2026,
        available: true,
        isNew: true,
        popular: 95,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Nssq34tvkztvwRqc04CABjcT6ebVEb4DAfmU96UaJw&s=10",
        description: "Прохідний квадроцикл GEON для бездоріжжя та відпочинку."
    }
];

let favorites = JSON.parse(localStorage.getItem("motopointFavorites") || "[]");
let cart = JSON.parse(localStorage.getItem("motopointCart") || "[]");
let orders = JSON.parse(localStorage.getItem("motopointOrders") || "[]");
let compare = JSON.parse(localStorage.getItem("motopointCompare") || "[]");
let listMode = false;

const productsGrid = document.getElementById("productsGrid");
const productsCount = document.getElementById("productsCount");
const emptyState = document.getElementById("emptyState");
const catalogSearch = document.getElementById("catalogSearch");
const sortSelect = document.getElementById("sortSelect");
const search = document.getElementById("search");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const priceRange = document.getElementById("priceRange");
const engineFilter = document.getElementById("engineFilter");
const availableFilter = document.getElementById("availableFilter");
const newFilter = document.getElementById("newFilter");

const productModal = document.getElementById("productModal");
const modalContent = document.getElementById("modalContent");

const cartModal = document.getElementById("cartModal");
const cartContent = document.getElementById("cartContent");

const checkoutModal = document.getElementById("checkoutModal");

const toast = document.getElementById("toast");
const cartCount = document.getElementById("cartCount");

function saveData() {
    localStorage.setItem("motopointFavorites", JSON.stringify(favorites));
    localStorage.setItem("motopointCart", JSON.stringify(cart));
    localStorage.setItem("motopointCompare", JSON.stringify(compare));
    localStorage.setItem("motopointOrders", JSON.stringify(orders));
}

function formatPrice(price) {
    return new Intl.NumberFormat("uk-UA").format(price) + " грн";
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

function updateCartCount() {
    cartCount.textContent = cart.length;
}

function getSelectedValues(selector) {
    return [...document.querySelectorAll(selector + ":checked")].map(item => item.value);
}

function filterProducts() {
    const query = catalogSearch.value.toLowerCase().trim();
    const types = getSelectedValues(".type-filter");
    const brands = getSelectedValues(".brand-filter");

    let result = products.filter(product => {

        const searchMatch =
            product.name.toLowerCase().includes(query) ||
            product.brand.toLowerCase().includes(query) ||
            product.type.toLowerCase().includes(query);

        const typeMatch =
            types.length === 0 ||
            types.includes(product.type);

        const brandMatch =
            brands.length === 0 ||
            brands.includes(product.brand);

        const min = Number(minPrice.value) || 0;
        const max = Number(maxPrice.value) || 500000;

        const priceMatch =
            product.price >= min &&
            product.price <= max;

        let engineMatch = true;

        if (engineFilter.value === "125") {
            engineMatch = product.engine <= 125;
        }

        if (engineFilter.value === "250") {
            engineMatch = product.engine > 125 && product.engine <= 250;
        }

        if (engineFilter.value === "500") {
            engineMatch = product.engine > 250 && product.engine <= 500;
        }

        if (engineFilter.value === "501") {
            engineMatch = product.engine > 500;
        }

        const availableMatch =
            !availableFilter.checked ||
            product.available;

        const newMatch =
            !newFilter.checked ||
            product.isNew;

        return searchMatch &&
            typeMatch &&
            brandMatch &&
            priceMatch &&
            engineMatch &&
            availableMatch &&
            newMatch;
    });

    if (sortSelect.value === "cheap") {
        result.sort((a, b) => a.price - b.price);
    }

    if (sortSelect.value === "expensive") {
        result.sort((a, b) => b.price - a.price);
    }

    if (sortSelect.value === "name") {
        result.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortSelect.value === "popular") {
        result.sort((a, b) => b.popular - a.popular);
    }

    return result;
}

function renderProducts() {
    const result = filterProducts();

    productsCount.textContent = result.length;

    productsGrid.classList.toggle("list-view", listMode);

    if (!result.length) {
        productsGrid.innerHTML = "";
        emptyState.classList.add("show");
        return;
    }

    emptyState.classList.remove("show");

    productsGrid.innerHTML = result.map(product => {

        const favorite = favorites.includes(product.id);
        const compared = compare.includes(product.id);

        return `
            <article class="product-card" onclick="showProduct(${product.id})">

                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80'">

                    <span class="badge ${product.isNew ? "" : "orange"}">
                        ${product.isNew ? "Новинка" : product.type}
                    </span>

                    <button class="favorite ${favorite ? "active" : ""}" onclick="event.stopPropagation(); toggleFavorite(${product.id})">
                        ${favorite ? "♥" : "♡"}
                    </button>
                </div>

                <div class="product-info">

                    <div class="product-type">
                        ${product.brand} • ${product.type}
                    </div>

                    <h3 class="product-name">
                        ${product.name}
                    </h3>

                    <p class="product-description">
                        ${product.description}
                    </p>

                    <div class="product-bottom">

                        <div class="price">
                            ${formatPrice(product.price)}
                            <small>ціна орієнтовна</small>
                        </div>

                        <div class="product-actions">

                            <button class="details-button" onclick="event.stopPropagation(); showProduct(${product.id})">
                                Характеристики
                            </button>

                            <button class="buy-button" onclick="event.stopPropagation(); addToCart(${product.id})">
                                Купити
                            </button>

                        </div>

                    </div>

                    <button class="compare-button ${compared ? "active" : ""}" onclick="event.stopPropagation(); toggleCompare(${product.id})">
                        ${compared ? "✓ Додано до порівняння" : "＋ Додати до порівняння"}
                    </button>

                </div>

            </article>
        `;
    }).join("");
}

function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(item => item !== id);
        showToast("Товар видалено з обраного");
    } else {
        favorites.push(id);
        showToast("Товар додано в обране");
    }

    saveData();
    renderProducts();
}

function addToCart(id) {
    if (!cart.includes(id)) {
        cart.push(id);
        showToast("Товар додано до кошика");
    } else {
        showToast("Цей товар вже є у кошику");
    }

    updateCartCount();
    saveData();
}

function removeFromCart(id) {
    cart = cart.filter(item => item !== id);

    saveData();
    updateCartCount();
    renderCart();

    showToast("Товар видалено з кошика");
}

function clearCart() {
    cart = [];

    saveData();
    updateCartCount();
    renderCart();

    showToast("Кошик очищено");
}

function toggleCompare(id) {
    if (compare.includes(id)) {
        compare = compare.filter(item => item !== id);
        showToast("Товар видалено з порівняння");
    } else {

        if (compare.length >= 3) {
            showToast("Можна порівнювати максимум 3 товари");
            return;
        }

        compare.push(id);
        showToast("Товар додано до порівняння");
    }

    saveData();
    renderProducts();
}

function showProduct(id) {
    const product = products.find(item => item.id === id);

    if (!product) {
        return;
    }

    modalContent.innerHTML = `
        <div class="modal-product">

            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80'">

            <div>

                <span class="section-label">
                    ${product.brand} • ${product.type}
                </span>

                <h2>${product.name}</h2>

                <p>${product.description}</p>

                <div class="modal-price">
                    ${formatPrice(product.price)}
                </div>

                <div class="modal-specs">

                    <div>
                        <b>Двигун</b><br>
                        ${product.engine} см³
                    </div>

                    <div>
                        <b>Потужність</b><br>
                        ${product.power}
                    </div>

                    <div>
                        <b>Трансмісія</b><br>
                        ${product.transmission}
                    </div>

                    <div>
                        <b>Рік</b><br>
                        ${product.year}
                    </div>

                    <div>
                        <b>Наявність</b><br>
                        ${product.available ? "В наявності" : "Під замовлення"}
                    </div>

                    <div>
                        <b>Бренд</b><br>
                        ${product.brand}
                    </div>

                </div>

                <button class="buy-button modal-buy" onclick="addToCart(${product.id}); closeProductModal()">
                    ДОДАТИ ДО КОШИКА
                </button>

            </div>

        </div>
    `;

    productModal.classList.remove("hidden");
    document.body.classList.add("no-scroll");
}

function closeProductModal() {
    productModal.classList.add("hidden");

    if (
        cartModal.classList.contains("hidden") &&
        checkoutModal.classList.contains("hidden")
    ) {
        document.body.classList.remove("no-scroll");
    }
}

function openCart() {
    renderCart();
    cartModal.classList.remove("hidden");
    document.body.classList.add("no-scroll");
}

function closeCart() {
    cartModal.classList.add("hidden");

    if (
        productModal.classList.contains("hidden") &&
        checkoutModal.classList.contains("hidden")
    ) {
        document.body.classList.remove("no-scroll");
    }
}

function renderCart() {

    if (!cart.length) {
        cartContent.innerHTML = `
            <div class="cart-empty">
                <div style="font-size:50px">🛒</div>
                <h3>Кошик порожній</h3>
                <p>Додайте товари з каталогу.</p>
            </div>
        `;

        return;
    }

    const cartProducts = cart
        .map(id => products.find(product => product.id === id))
        .filter(Boolean);

    const total = cartProducts.reduce((sum, product) => sum + product.price, 0);

    cartContent.innerHTML = `
        <div>
            ${cartProducts.map(product => `
                <div class="cart-item">

                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80'">

                    <div>
                        <h4>${product.name}</h4>
                        <p>${formatPrice(product.price)}</p>
                    </div>

                    <button class="remove-cart" onclick="removeFromCart(${product.id})">
                        ×
                    </button>

                </div>
            `).join("")}
        </div>

        <div class="cart-footer">

            <div class="cart-total">
                Разом: ${formatPrice(total)}
            </div>

            <div class="cart-footer-buttons">
                <button class="clear-cart" onclick="clearCart()">
                    Очистити
                </button>

                <button class="checkout-button" onclick="openCheckout()">
                    ОФОРМИТИ ЗАМОВЛЕННЯ
                </button>
            </div>

        </div>
    `;
}

function openCheckout() {

    if (!cart.length) {
        showToast("Спочатку додайте товар у кошик");
        return;
    }

    cartModal.classList.add("hidden");
    checkoutModal.classList.remove("hidden");
    document.body.classList.add("no-scroll");
}
function closeCheckout() {
    checkoutModal.classList.add("hidden");

    document.querySelector(".checkout-window").innerHTML = `
        <button class="modal-close" id="checkoutClose">×</button>
        <h2>Оформлення замовлення</h2>

        <form id="checkoutForm">
            <input type="text" id="orderName" placeholder="Ваше ім'я" required>
            <input type="tel" id="orderPhone" placeholder="Телефон" required>

            <button type="submit" class="checkout-button">
                ПІДТВЕРДИТИ ЗАМОВЛЕННЯ
            </button>
        </form>
    `;

    document.getElementById("checkoutClose").addEventListener("click", closeCheckout);
    document.getElementById("checkoutForm").addEventListener("submit", checkoutSubmit);

    document.body.classList.remove("no-scroll");
}

function resetFilters() {
    document.querySelectorAll(".type-filter, .brand-filter").forEach(input => {
        input.checked = false;
    });

    document.querySelectorAll(".brand-filter").forEach(input => {
        input.checked = false;
    });

    minPrice.value = 0;
    maxPrice.value = 500000;
    priceRange.value = 500000;

    engineFilter.value = "all";
    availableFilter.checked = false;
    newFilter.checked = false;

    catalogSearch.value = "";
    sortSelect.value = "popular";

    renderProducts();
}

function updatePriceFromRange() {
    maxPrice.value = priceRange.value;
    renderProducts();
}

function syncPriceRange() {
    let value = Number(maxPrice.value);

    if (value < 0) {
        value = 0;
    }

    if (value > 500000) {
        value = 500000;
    }

    maxPrice.value = value;
    priceRange.value = value;

    renderProducts();
}

function searchFromHeader() {
    catalogSearch.value = search.value.trim();

    document.getElementById("catalog").scrollIntoView({
        behavior: "smooth"
    });

    renderProducts();
}

document.querySelectorAll(".type-filter, .brand-filter").forEach(input => {
    input.addEventListener("change", renderProducts);
});

catalogSearch.addEventListener("input", renderProducts);

sortSelect.addEventListener("change", renderProducts);

engineFilter.addEventListener("change", renderProducts);

availableFilter.addEventListener("change", renderProducts);

newFilter.addEventListener("change", renderProducts);

priceRange.addEventListener("input", updatePriceFromRange);

maxPrice.addEventListener("change", syncPriceRange);

minPrice.addEventListener("change", renderProducts);

document.getElementById("resetFilters").addEventListener("click", resetFilters);

document.getElementById("searchBtn").addEventListener("click", searchFromHeader);

search.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        searchFromHeader();
    }
});

document.getElementById("gridView").addEventListener("click", () => {

    listMode = false;

    document.getElementById("gridView").classList.add("active");
    document.getElementById("listView").classList.remove("active");

    renderProducts();
});

document.getElementById("listView").addEventListener("click", () => {

    listMode = true;

    document.getElementById("listView").classList.add("active");
    document.getElementById("gridView").classList.remove("active");

    renderProducts();
});

document.getElementById("cartButton").addEventListener("click", openCart);

document.getElementById("modalClose").addEventListener("click", closeProductModal);

document.getElementById("cartClose").addEventListener("click", closeCart);

document.getElementById("checkoutClose").addEventListener("click", closeCheckout);

productModal.addEventListener("click", event => {
    if (event.target === productModal) {
        closeProductModal();
    }
});

cartModal.addEventListener("click", event => {
    if (event.target === cartModal) {
        closeCart();
    }
});

checkoutModal.addEventListener("click", event => {
    if (event.target === checkoutModal) {
        closeCheckout();
    }
});

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeProductModal();
        closeCart();
        closeCheckout();

    }

});

document.getElementById("contactForm").addEventListener("submit", event => {

    event.preventDefault();

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const requestType = document.getElementById("requestType");
    const message = document.getElementById("message");
    const formMessage = document.getElementById("formMessage");

    if (
        !name.value.trim() ||
        !phone.value.trim() ||
        !requestType.value
    ) {
        formMessage.textContent = "Заповніть ім'я, телефон та тему звернення.";
        formMessage.style.color = "#d33";
        return;
    }

    formMessage.textContent = "Дякуємо! Ваш запит прийнято.";
    formMessage.style.color = "#299c38";

    name.value = "";
    phone.value = "";
    requestType.value = "";
    message.value = "";
});

function checkoutSubmit(event) {

    event.preventDefault();

    if (!cart.length) {
        closeCheckout();
        showToast("Кошик порожній");
        return;
    }

    const orderNumber =
        "MP-" +
        Math.floor(100000 + Math.random() * 900000);

    const name = document.getElementById("orderName").value;
    const phone = document.getElementById("orderPhone").value;
    const cartProducts = cart.map(id => products.find(p => p.id === id));

const total = cartProducts.reduce((sum, p) => sum + p.price, 0);

orders.push({
    number: orderNumber,
    customer: name,
    phone: phone,
    items: cartProducts,
    total: total,
    date: new Date().toLocaleString("uk-UA")
});

saveData();

    checkoutModal.querySelector(".checkout-window").innerHTML = `
        <button class="modal-close" onclick="closeCheckout()">×</button>

        <div style="text-align:center;padding:30px 10px">

            <div style="font-size:60px">✅</div>

            <h2 style="color:#299c38">
                Замовлення прийнято
            </h2>

            <p style="margin:15px 0">
                Дякуємо, ${name}!
            </p>

            <p>
                Номер замовлення:
                <strong>${orderNumber}</strong>
            </p>

            <p style="margin-top:10px;color:#777">
                Ми зв'яжемося з вами за номером ${phone}.
            </p>

            <button
                class="checkout-button"
                style="margin-top:25px"
                onclick="closeCheckout()"
            >
                ЗАКРИТИ
            </button>

        </div>
    `;

    cart = [];

saveData();
updateCartCount();
renderCart();
}

document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", event => {

        const href = link.getAttribute("href");
        const target = document.querySelector(href);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

updateCartCount();
renderProducts();
document.getElementById("checkoutForm").addEventListener("submit", checkoutSubmit);
