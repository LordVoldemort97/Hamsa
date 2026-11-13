const products = [
    { 
        id: 1, name: 'باقة التصميم الأولى', price: 35, oldPrice: 75, 
        desc: 'اصنع ذكرى رقمية متكاملة تأخذ من تحب في رحلة من المشاعر عبر 4 صفحات تفاعلية مصممة بكل حب!
              'رسائل من القلب: مساحات مخصصة لكتابة كلماتك وتهنئتك الخاصة.'
               'ألبوم ذكرياتكم: إمكانية إضافة أجمل صوركم المشتركة لتوثيق اللحظة.
              'أغنيتكم المفضلة: تشتغل في الخلفية لتكتمل الأجواء الرومانسية وتجعل المفاجأة لا تُنسى.
              'هدية مبتكرة تجمع بين الصوت والصورة والكلمة، لتبقى ذكرى خالدة بلمسة واحدة.',
        images: ['Products/Product_1/1.png', 'Products/Product_1/2.png', 'Products/Product_1/3.png', 'Products/Product_1/4.png'] 
    },
    { 
        id: 2, name: 'باقة التصميم الثانية', price: 35, oldPrice: 75, 
  desc: 'اصنع ذكرى رقمية متكاملة تأخذ من تحب في رحلة من المشاعر عبر 4 صفحات تفاعلية مصممة بكل حب!
              'رسائل من القلب: مساحات مخصصة لكتابة كلماتك وتهنئتك الخاصة.'
               'ألبوم ذكرياتكم: إمكانية إضافة أجمل صوركم المشتركة لتوثيق اللحظة.
              'أغنيتكم المفضلة: تشتغل في الخلفية لتكتمل الأجواء الرومانسية وتجعل المفاجأة لا تُنسى.
              'هدية مبتكرة تجمع بين الصوت والصورة والكلمة، لتبقى ذكرى خالدة بلمسة واحدة.',
                   images: ['Products/Product_2/1.png', 'Products/Product_2/2.png', 'Products/Product_2/3.png', 'Products/Product_2/4.png'] 
    },
    { 
        id: 3, name: 'باقة التصميم الثالثة', price: 35, oldPrice: 75, 
     desc: 'اصنع ذكرى رقمية متكاملة تأخذ من تحب في رحلة من المشاعر عبر 4 صفحات تفاعلية مصممة بكل حب!
              'رسائل من القلب: مساحات مخصصة لكتابة كلماتك وتهنئتك الخاصة.'
               'ألبوم ذكرياتكم: إمكانية إضافة أجمل صوركم المشتركة لتوثيق اللحظة.
              'أغنيتكم المفضلة: تشتغل في الخلفية لتكتمل الأجواء الرومانسية وتجعل المفاجأة لا تُنسى.
              'هدية مبتكرة تجمع بين الصوت والصورة والكلمة، لتبقى ذكرى خالدة بلمسة واحدة.',
        images: ['Products/Product_3/1.png', 'Products/Product_3/2.png', 'Products/Product_3/3.png', 'Products/Product_3/4.png'] 
    },
    { 
        id: 4, name: 'باقة التصميم الرابعة', price: 35, oldPrice: 75, 
  desc: 'اصنع ذكرى رقمية متكاملة تأخذ من تحب في رحلة من المشاعر عبر 4 صفحات تفاعلية مصممة بكل حب!
              'رسائل من القلب: مساحات مخصصة لكتابة كلماتك وتهنئتك الخاصة.'
               'ألبوم ذكرياتكم: إمكانية إضافة أجمل صوركم المشتركة لتوثيق اللحظة.
              'أغنيتكم المفضلة: تشتغل في الخلفية لتكتمل الأجواء الرومانسية وتجعل المفاجأة لا تُنسى.
              'هدية مبتكرة تجمع بين الصوت والصورة والكلمة، لتبقى ذكرى خالدة بلمسة واحدة.',        images: ['Products/Product_4/1.png', 'Products/Product_4/2.png', 'Products/Product_4/3.png', 'Products/Product_4/4.png'] 
    },
    { 
        id: 5, name: 'تصميم خاص (حسب الطلب) ✨', price: 100, oldPrice: 150, 
        desc: 'هل تبحث عن شيء مختلف تماماً؟ صمم بطاقتك أو موقعك المصغر بالكامل حسب رغبتك! <br><br><b>تشمل هذه الباقة:</b><br> - اختيار الألوان والخلفيات بالكامل.<br> - عدد لا محدود من التعديلات قبل التسليم.<br> - إضافة موسيقى وأزرار مخصصة.',
        images: ['Products/Product_5/1.png', 'Products/Product_5/2.png', 'Products/Product_5/3.png'] 
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let sliderIndexes = {1:0, 2:0, 3:0, 4:0, 5:0};

function updateCount() {
    document.querySelectorAll('.cart-count').forEach(el => {
        el.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if(product) {
        const existing = cart.find(item => item.id === id);
        if(existing) {
            existing.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCount();
        showNotif();
    }
}

function showNotif() {
    const notif = document.getElementById("notification");
    if(notif) {
        notif.classList.add("show");
        setTimeout(() => notif.classList.remove("show"), 2500);
    }
}

function showImg(productId, index) {
    const slider = document.getElementById(`slider-${productId}`);
    if(!slider) return;
    const imgs = slider.querySelectorAll('.slider-img');
    const dots = slider.querySelectorAll('.dot');
    
    if(index >= imgs.length) sliderIndexes[productId] = 0;
    if(index < 0) sliderIndexes[productId] = imgs.length - 1;
    
    imgs.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if(imgs.length > 0) {
        imgs[sliderIndexes[productId]].classList.add('active');
        if(dots.length > 0) dots[sliderIndexes[productId]].classList.add('active');
    }
}

function nextImg(productId) {
    sliderIndexes[productId]++;
    showImg(productId, sliderIndexes[productId]);
}

function prevImg(productId) {
    sliderIndexes[productId]--;
    showImg(productId, sliderIndexes[productId]);
}

// عرض المنتجات في الرئيسية
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if(!grid) return;
    
    grid.innerHTML = products.map(p => {
        let imgsHTML = p.images.map((img, i) => `
            <img src="${img}" class="slider-img ${i===0 ? 'active' : ''}" onerror="this.outerHTML='<div class=\'slider-img empty-img-state ${i===0 ? 'active' : ''}\'>يرجى إضافة صورة<br>${img}</div>'">
        `).join('');
        
        let dotsHTML = p.images.map((img, i) => `
            <div class="dot ${i===0 ? 'active' : ''}"></div>
        `).join('');

        return `
        <div class="card">
            <a href="product.html?id=${p.id}" style="text-decoration:none; color:inherit; display:block;">
                <div class="slider-container" id="slider-${p.id}" onclick="event.preventDefault(); window.location.href='product.html?id=${p.id}'">
                    ${imgsHTML}
                    <div class="img-indicators">${dotsHTML}</div>
                </div>
            </a>
            <button class="slider-btn btn-right" onclick="event.stopPropagation(); nextImg(${p.id})">&#10095;</button>
            <button class="slider-btn btn-left" onclick="event.stopPropagation(); prevImg(${p.id})">&#10094;</button>
            
            <h3>${p.name}</h3>
            <div class="price-box">
                <span class="price">${p.price} ريال</span>
                <span class="old-price">${p.oldPrice} ريال</span>
            </div>
            <div class="card-buttons">
                <a href="product.html?id=${p.id}" class="btn btn-outline">التفاصيل 🔍</a>
                <button class="btn" onclick="addToCart(${p.id})">أضف للسلة 🛒</button>
            </div>
        </div>
        `
    }).join('');
}

// عرض صفحة تفاصيل المنتج
function renderProductDetails() {
    const container = document.getElementById('product-details-container');
    if(!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === id);

    if(!product) {
        container.innerHTML = '<div style="text-align:center; padding: 100px 0;"><h2 style="color:var(--primary); font-size:2em;">عفواً، هذا المنتج غير متوفر</h2><a href="index.html" class="btn" style="display:inline-block; margin-top:20px; width:auto;">العودة للرئيسية</a></div>';
        return;
    }

    let imgsHTML = product.images.map((img, i) => `
        <img src="${img}" class="slider-img ${i===0 ? 'active' : ''}" onerror="this.outerHTML='<div class=\'slider-img empty-img-state ${i===0 ? 'active' : ''}\'>يرجى إضافة صورة<br>${img}</div>'">
    `).join('');
    
    let dotsHTML = product.images.map((img, i) => `
        <div class="dot ${i===0 ? 'active' : ''}"></div>
    `).join('');

    container.innerHTML = `
        <div class="product-page-layout">
            <div class="product-gallery">
                <div class="slider-container" id="slider-${product.id}">
                    ${imgsHTML}
                    <div class="img-indicators">${dotsHTML}</div>
                    <button class="slider-btn btn-right" onclick="nextImg(${product.id})">&#10095;</button>
                    <button class="slider-btn btn-left" onclick="prevImg(${product.id})">&#10094;</button>
                </div>
            </div>
            <div class="product-info">
                <h2>${product.name}</h2>
                <div class="price-box" style="justify-content: flex-start; margin-bottom: 25px;">
                    <span class="price" style="font-size:2em;">${product.price} ريال</span>
                    <span class="old-price" style="font-size:1.3em;">${product.oldPrice} ريال</span>
                </div>
                <p class="product-desc">${product.desc}</p>
                <button class="btn btn-large" onclick="addToCart(${product.id})">أضف إلى السلة الآن 🛒</button>
            </div>
        </div>
    `;
}

function renderCart() {
    const tbody = document.getElementById('cart-body');
    const totalEl = document.getElementById('cart-total');
    if(!tbody) return;
    
    if(cart.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:30px;">السلة فارغة حالياً</td></tr>';
        totalEl.innerText = '0';
        document.getElementById('checkout-btn').style.display = 'none';
        return;
    }

    document.getElementById('checkout-btn').style.display = 'inline-block';
    let total = 0;
    tbody.innerHTML = cart.map((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
            <tr>
                <td><img src="${item.images[0]}" onerror="this.src='https://via.placeholder.com/70'" style="width:70px; height:70px; border-radius:8px; object-fit:cover;"></td>
                <td style="font-weight:bold;">${item.name}</td>
                <td>${item.price} ريال</td>
                <td>
                    <input type="number" class="qty-input" value="${item.quantity}" min="1" onchange="updateQty(${index}, this.value)">
                </td>
                <td style="font-weight:bold; color:#e74c3c;">${itemTotal} ريال</td>
                <td><button class="remove-btn" title="حذف" onclick="removeItem(${index})">✖</button></td>
            </tr>
        `;
    }).join('');
    totalEl.innerText = total;
}

function updateQty(index, qty) {
    qty = parseInt(qty);
    if(qty > 0) {
        cart[index].quantity = qty;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCount();
        renderCart();
    }
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCount();
    renderCart();
}

function submitOrder(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    if(cart.length === 0) {
        alert('السلة فارغة!');
        return;
    }

    let orderDetails = `*طلب جديد من متجر همسة:* 
`;
    orderDetails += `الاسم: ${name}
`;
    orderDetails += `الجوال: ${phone}
`;
    orderDetails += `
*المنتجات:*
`;
    
    let total = 0;
    cart.forEach(item => {
        orderDetails += `- ${item.name} (الكمية: ${item.quantity})
`;
        total += item.price * item.quantity;
    });
    
    orderDetails += `
المبلغ الإجمالي: ${total} ريال`;
    
    const tiktokUrl = "https://www.tiktok.com/@hamsa4720";
    
    function redirectSmoothly() {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) overlay.style.display = 'flex';
        setTimeout(() => {
            localStorage.removeItem('cart');
            window.location.href = tiktokUrl;
        }, 3500);
    }

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(orderDetails).then(() => {
            redirectSmoothly();
        }).catch(err => {
            redirectSmoothly(); 
        });
    } else {
        let textArea = document.createElement("textarea");
        textArea.value = orderDetails;
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
        } catch (err) {}
        document.body.removeChild(textArea);
        redirectSmoothly();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateCount();
    renderProducts();
    renderProductDetails();
    renderCart();
    
    const checkoutForm = document.getElementById('checkout-form');
    if(checkoutForm) {
        checkoutForm.addEventListener('submit', submitOrder);
    }
});
