const products = [
  {
    id: 1,
    brand: 'Nebula',
    name: 'Nebula X15 Laptop',
    category: 'Laptop',
    price: 42999,
    oldPrice: 46999,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Ince kasa, 16 GB RAM ve gun boyu pil omru sunan premium laptop.',
    details:
      'Nebula X15; tasarim, ders ve gunluk uretkenlik icin mobil-first odakta secilen ana urunlerden biridir. 120 Hz ekran, hizli SSD ve sessiz sogutma sistemiyle profesyonel kullanim sunar.',
    specs: ['15.6 in IPS', '16 GB RAM', '1 TB SSD'],
    deal: true,
  },
  {
    id: 2,
    brand: 'Pulse',
    name: 'Pulse Air Headphones',
    category: 'Kulaklik',
    price: 3599,
    oldPrice: 4299,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Aktif gurultu engelleme ve yumusak kulak yastiklari ile net ses.',
    details:
      'Pulse Air, hareket halindeyken muzik ve gorusmeler icin yuksek konfor sunar. Hafif govdesi ve modern tasarimi sayesinde mobil kullanicilarin favorilerinden biridir.',
    specs: ['ANC destekli', '32 saat pil', 'Bluetooth 5.3'],
    deal: true,
  },
  {
    id: 3,
    brand: 'Aero',
    name: 'Aero S24 Phone',
    category: 'Telefon',
    price: 28999,
    oldPrice: 31999,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Gelistirilmis gece modu ve 120 Hz ekranla amiral gemisi deneyimi.',
    details:
      'Aero S24, tek elle kullanim kolayligi, guclu kamera yapisi ve hizli sarj destekli bataryasiyla modern mobil magazanin temel urunlerinden biri olarak konumlandirildi.',
    specs: ['256 GB', '50 MP kamera', '5000 mAh'],
    deal: false,
  },
  {
    id: 4,
    brand: 'Vertex',
    name: 'Vertex Creator Laptop',
    category: 'Laptop',
    price: 38999,
    oldPrice: 41999,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Tasarim ve video isleri icin guclu ekran kartli ince laptop.',
    details:
      'Vertex Creator, daha cok performans arayan kullanicilar icin gelistirildi. Renk dogrulugu yuksek ekran ve hizli coklu gorev performansi sunar.',
    specs: ['14 in OLED', 'RTX seri GPU', '32 GB RAM'],
    deal: false,
  },
  {
    id: 5,
    brand: 'Nova',
    name: 'Nova Buds Pro',
    category: 'Kulaklik',
    price: 2499,
    oldPrice: 2899,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Kompakt kutu, net mikrofon ve gunluk kullanim icin dengeli ses.',
    details:
      'Nova Buds Pro, ozellikle ogrenciler ve surekli hareket halinde olan kullanicilar icin optimize edilmis bir TWS kulaklik modelidir.',
    specs: ['TWS', 'Hizli sarj', 'IPX4'],
    deal: true,
  },
  {
    id: 6,
    brand: 'Luma',
    name: 'Luma Fold Phone',
    category: 'Telefon',
    price: 51999,
    oldPrice: 55999,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Katlanabilir ekran ve premium hissiyatla gelecek odakli telefon.',
    details:
      'Luma Fold Phone, yenilikci tasarim arayan kullanicilar icin secildi. Buyuk ekran deneyimi ve premium malzeme yapisi ile urun detay sayfasinda one cikacak sekilde tasarlandi.',
    specs: ['Foldable ekran', '512 GB', 'Kablosuz sarj'],
    deal: false,
  },
]

const categories = ['Tumu', 'Telefon', 'Laptop', 'Kulaklik']

const state = {
  route: 'home',
  selectedProductId: products[0].id,
  activeCategory: 'Tumu',
  searchQuery: '',
  cart: [],
  favorites: [],
}

const currency = new Intl.NumberFormat('tr-TR', {
  style: 'currency',
  currency: 'TRY',
  maximumFractionDigits: 0,
})

const appView = document.querySelector('#app-view')
const headerCartBadge = document.querySelector('#header-cart-badge')
const navCartBadge = document.querySelector('#nav-cart-badge')
const currentYear = document.querySelector('#current-year')
const staticRouteButtons = document.querySelectorAll('[data-route]')

currentYear.textContent = new Date().getFullYear()

const getProductById = (productId) =>
  products.find((product) => product.id === Number(productId)) ?? products[0]

const parseRoute = () => {
  const hash = window.location.hash.replace('#', '')

  if (!hash || hash === 'home') {
    return { name: 'home' }
  }

  if (hash.startsWith('product/')) {
    const id = Number(hash.split('/')[1])
    return Number.isFinite(id) ? { name: 'product', id } : { name: 'home' }
  }

  if (hash === 'cart' || hash === 'search' || hash === 'profile') {
    return { name: hash }
  }

  return { name: 'home' }
}

const navigateTo = (target) => {
  const nextHash = `#${target}`

  if (window.location.hash === nextHash) {
    syncRoute()
    renderApp()
    return
  }

  window.location.hash = target
}

const getHomeProducts = () =>
  products.filter(
    (product) =>
      state.activeCategory === 'Tumu' || product.category === state.activeCategory,
  )

const getSearchResults = () => {
  const query = state.searchQuery.trim().toLowerCase()

  if (!query) {
    return products
  }

  return products.filter((product) =>
    `${product.brand} ${product.name} ${product.category}`
      .toLowerCase()
      .includes(query),
  )
}

const getDeals = () => products.filter((product) => product.deal)

const getCartSummary = () => {
  const items = state.cart.map((entry) => {
    const product = getProductById(entry.id)

    return {
      ...product,
      quantity: entry.quantity,
      total: product.price * entry.quantity,
    }
  })

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.total, 0)

  return { items, itemCount, subtotal }
}

const updateCartBadges = () => {
  const { itemCount } = getCartSummary()

  headerCartBadge.textContent = itemCount
  navCartBadge.textContent = itemCount

  headerCartBadge.classList.toggle('hidden', itemCount === 0)
  navCartBadge.classList.toggle('hidden', itemCount === 0)
}

const addToCart = (productId) => {
  const existingItem = state.cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    state.cart.push({ id: productId, quantity: 1 })
  }

  updateCartBadges()
  renderApp()
}

const updateQuantity = (productId, mode) => {
  const cartItem = state.cart.find((item) => item.id === productId)

  if (!cartItem) {
    return
  }

  if (mode === 'increase') {
    cartItem.quantity += 1
  }

  if (mode === 'decrease') {
    cartItem.quantity -= 1
  }

  if (mode === 'remove' || cartItem.quantity <= 0) {
    state.cart = state.cart.filter((item) => item.id !== productId)
  }

  updateCartBadges()
  renderApp()
}

const toggleFavorite = (productId) => {
  if (state.favorites.includes(productId)) {
    state.favorites = state.favorites.filter((id) => id !== productId)
  } else {
    state.favorites.push(productId)
  }

  renderApp()
}

const productCardMarkup = (product) => {
  const isFavorite = state.favorites.includes(product.id)

  return `
    <article class="product-card">
      <div class="relative aspect-[4/4.7] overflow-hidden bg-slate-800">
        <button
          type="button"
          class="favorite-button ${isFavorite ? 'is-active' : ''}"
          data-action="favorite"
          data-product-id="${product.id}"
          aria-label="${product.name} favorilere ekle"
        >
          ${isFavorite ? '♥' : '♡'}
        </button>
        <button
          type="button"
          class="product-card__button"
          data-action="open-product"
          data-product-id="${product.id}"
          aria-label="${product.name} urun detayini ac"
        >
          <img
            src="${product.image}"
            alt="${product.name}"
            class="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </button>
      </div>
      <div class="space-y-3 p-4">
        <p class="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">${product.brand}</p>
        <button
          type="button"
          class="text-left"
          data-action="open-product"
          data-product-id="${product.id}"
        >
          <h3 class="text-sm font-semibold leading-6 text-white">${product.name}</h3>
        </button>
        <p class="text-xs leading-5 text-slate-400">${product.shortDescription}</p>
        <div class="flex items-center justify-between gap-3">
          <div>
            <strong class="block text-base text-white">${currency.format(product.price)}</strong>
            <span class="text-xs text-slate-500 line-through">${currency.format(product.oldPrice)}</span>
          </div>
          <button
            type="button"
            class="rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:-translate-y-0.5"
            data-action="add-to-cart"
            data-product-id="${product.id}"
            aria-label="${product.name} urununu sepete ekle"
          >
            Ekle
          </button>
        </div>
      </div>
    </article>
  `
}

const dealBannerMarkup = () => {
  const deal = getDeals()[0]

  return `
    <section class="hero-banner rounded-[30px] border border-white/10 bg-gradient-to-r from-violet-600/20 via-slate-900 to-cyan-500/10 p-5 shadow-soft">
      <div class="flex items-start justify-between gap-4">
        <div class="max-w-[240px]">
          <p class="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Gunun Firsatlari</p>
          <h1 class="mt-3 text-3xl font-bold leading-tight text-white">${deal.name}</h1>
          <p class="mt-3 text-sm leading-7 text-slate-300">${deal.shortDescription}</p>
          <div class="mt-5 flex items-center gap-3">
            <button
              type="button"
              class="rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 px-4 py-2 text-sm font-semibold text-slate-950"
              data-action="open-product"
              data-product-id="${deal.id}"
            >
              Incele
            </button>
            <span class="text-sm font-semibold text-violet-200">${currency.format(deal.price)}</span>
          </div>
        </div>
        <div class="rounded-3xl border border-white/10 bg-slate-950/60 px-4 py-3 text-right">
          <p class="text-xs uppercase tracking-[0.22em] text-slate-500">Canli Sepet</p>
          <strong class="text-2xl text-white">${getCartSummary().itemCount}</strong>
        </div>
      </div>
    </section>
  `
}

const homeViewMarkup = () => {
  const visibleProducts = getHomeProducts()

  return `
    <section class="space-y-6">
      ${dealBannerMarkup()}

      <section aria-labelledby="categories-heading" class="space-y-4">
        <div class="flex items-center justify-between gap-3">
          <h2 id="categories-heading" class="text-xl font-semibold text-white">Kategoriler</h2>
          <button
            type="button"
            class="text-sm font-semibold text-cyan-300"
            data-action="go-search"
          >
            Aramaya git
          </button>
        </div>
        <div class="category-scroller flex gap-3 overflow-x-auto pb-2">
          ${categories
            .map(
              (category) => `
                <button
                  type="button"
                  class="category-pill ${state.activeCategory === category ? 'is-active' : ''}"
                  data-action="set-category"
                  data-category="${category}"
                  aria-pressed="${String(state.activeCategory === category)}"
                >
                  ${category}
                </button>
              `,
            )
            .join('')}
        </div>
      </section>

      <section aria-labelledby="products-heading" class="space-y-4">
        <div class="flex items-center justify-between gap-3">
          <h2 id="products-heading" class="text-xl font-semibold text-white">Urun Listesi</h2>
          <span class="text-sm text-slate-400">${visibleProducts.length} urun</span>
        </div>
        ${
          visibleProducts.length === 0
            ? `
              <div class="empty-state">
                Secili kategoride urun bulunamadi.
              </div>
            `
            : `
              <div class="product-grid">
                ${visibleProducts.map((product) => productCardMarkup(product)).join('')}
              </div>
            `
        }
      </section>
    </section>
  `
}

const productDetailMarkup = () => {
  const product = getProductById(state.selectedProductId)
  const isFavorite = state.favorites.includes(product.id)

  return `
    <section class="space-y-5">
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200"
        data-action="go-home"
      >
        ← Ana sayfaya don
      </button>

      <article class="overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/85 shadow-soft">
        <div class="relative aspect-[4/4.3] overflow-hidden bg-slate-800">
          <img
            src="${product.image}"
            alt="${product.name}"
            class="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <button
            type="button"
            class="favorite-button ${isFavorite ? 'is-active' : ''}"
            data-action="favorite"
            data-product-id="${product.id}"
            aria-label="${product.name} favorilere ekle"
          >
            ${isFavorite ? '♥' : '♡'}
          </button>
        </div>

        <div class="space-y-5 p-5">
          <div class="space-y-2">
            <p class="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">${product.brand}</p>
            <h1 class="text-3xl font-bold leading-tight text-white">${product.name}</h1>
            <div class="flex items-center gap-3 text-sm text-slate-400">
              <span>${product.category}</span>
              <span>•</span>
              <span>${product.rating} puan</span>
            </div>
          </div>

          <p class="text-sm leading-7 text-slate-300">${product.details}</p>

          <div class="grid grid-cols-3 gap-3">
            ${product.specs
              .map(
                (spec) => `
                  <div class="detail-spec px-3 py-3 text-center text-xs font-medium text-slate-200">
                    ${spec}
                  </div>
                `,
              )
              .join('')}
          </div>

          <div class="summary-card p-4">
            <div class="flex items-end justify-between gap-4">
              <div>
                <p class="text-sm text-slate-400">Fiyat</p>
                <strong class="block text-3xl text-white">${currency.format(product.price)}</strong>
                <span class="text-sm text-slate-500 line-through">${currency.format(product.oldPrice)}</span>
              </div>
              <button
                type="button"
                class="rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                data-action="add-to-cart"
                data-product-id="${product.id}"
                aria-label="${product.name} urununu sepete ekle"
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  `
}

const cartViewMarkup = () => {
  const { items, subtotal } = getCartSummary()

  return `
    <section class="space-y-5">
      <div class="flex items-center justify-between gap-3">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Cart Page</p>
          <h1 class="mt-2 text-3xl font-bold text-white">Sepetim</h1>
        </div>
        <span class="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-2 text-sm font-semibold text-amber-200">
          ${items.length} cesit
        </span>
      </div>

      ${
        items.length === 0
          ? `
            <div class="empty-state text-center">
              <p class="text-lg font-semibold text-white">Sepetin bos</p>
              <p class="mt-2 text-sm leading-7 text-slate-400">
                Urun kartlarindan veya urun detay sayfasindan urun ekleyerek sepetini doldurabilirsin.
              </p>
              <button
                type="button"
                class="mt-4 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 px-4 py-2 text-sm font-semibold text-slate-950"
                data-action="go-home"
              >
                Alisverise don
              </button>
            </div>
          `
          : `
            <div class="space-y-4">
              ${items
                .map(
                  (item) => `
                    <article class="cart-item p-4">
                      <div class="flex gap-4">
                        <img
                          src="${item.image}"
                          alt="${item.name}"
                          class="h-24 w-24 rounded-2xl object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                        <div class="flex flex-1 flex-col justify-between gap-3">
                          <div>
                            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">${item.brand}</p>
                            <h2 class="mt-1 text-lg font-semibold text-white">${item.name}</h2>
                            <p class="mt-1 text-sm text-slate-400">${currency.format(item.total)}</p>
                          </div>
                          <div class="flex items-center justify-between gap-3">
                            <div class="inline-flex items-center rounded-full border border-white/10 bg-slate-950/70">
                              <button
                                class="quantity-button"
                                type="button"
                                data-action="decrease"
                                data-product-id="${item.id}"
                                aria-label="${item.name} miktarini azalt"
                              >
                                -
                              </button>
                              <span class="min-w-10 text-center text-sm">${item.quantity}</span>
                              <button
                                class="quantity-button"
                                type="button"
                                data-action="increase"
                                data-product-id="${item.id}"
                                aria-label="${item.name} miktarini artir"
                              >
                                +
                              </button>
                            </div>
                            <button
                              class="text-sm font-semibold text-fuchsia-200"
                              type="button"
                              data-action="remove"
                              data-product-id="${item.id}"
                            >
                              Kaldir
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  `,
                )
                .join('')}

              <section class="summary-card p-5">
                <div class="flex items-center justify-between text-sm text-slate-400">
                  <span>Ara Toplam</span>
                  <strong class="text-base text-white">${currency.format(subtotal)}</strong>
                </div>
                <div class="mt-3 flex items-center justify-between text-sm text-slate-400">
                  <span>Kargo</span>
                  <strong class="text-base text-white">Ucretsiz</strong>
                </div>
                <div class="mt-4 h-px bg-white/10"></div>
                <div class="mt-4 flex items-center justify-between">
                  <span class="text-base font-semibold text-slate-200">Toplam</span>
                  <strong class="text-2xl font-bold text-white">${currency.format(subtotal)}</strong>
                </div>
                <button
                  type="button"
                  class="mt-5 w-full rounded-2xl bg-gradient-to-r from-cyan-300 to-violet-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5"
                >
                  Odemeye Gec
                </button>
              </section>
            </div>
          `
      }
    </section>
  `
}

const searchViewMarkup = () => {
  const results = getSearchResults()

  return `
    <section class="space-y-5">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Search</p>
        <h1 class="mt-2 text-3xl font-bold text-white">Urun Ara</h1>
        <p class="mt-2 text-sm leading-7 text-slate-400">
          Marka, kategori veya urun adi yaz. Sonuclar sayfa yenilenmeden aninda guncellenir.
        </p>
      </div>

      <div class="search-result-card p-4">
        <label class="sr-only" for="search-input-inner">Urun ara</label>
        <input
          id="search-input-inner"
          data-search-field
          class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/50"
          type="search"
          value="${state.searchQuery}"
          placeholder="Laptop, telefon veya marka ara..."
        />
      </div>

      ${
        results.length === 0
          ? `
            <div class="empty-state">
              Aramana uygun urun bulunamadi. Farkli bir anahtar kelime dene.
            </div>
          `
          : `
            <div class="product-grid">
              ${results.map((product) => productCardMarkup(product)).join('')}
            </div>
          `
      }
    </section>
  `
}

const profileViewMarkup = () => {
  const favoriteProducts = products.filter((product) => state.favorites.includes(product.id))

  return `
    <section class="space-y-5">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">Profile</p>
        <h1 class="mt-2 text-3xl font-bold text-white">Profil & Ozet</h1>
      </div>

      <article class="profile-card p-5">
        <div class="flex items-center gap-4">
          <div class="grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-cyan-300 to-violet-400 text-xl font-bold text-slate-950">
            RM
          </div>
          <div>
            <h2 class="text-xl font-semibold text-white">Responsive Kullanici</h2>
            <p class="text-sm text-slate-400">Mobil-first magaza prototipi kullanicisi</p>
          </div>
        </div>

        <div class="mt-6 grid grid-cols-2 gap-4">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-sm text-slate-400">Favoriler</p>
            <strong class="mt-2 block text-2xl text-white">${state.favorites.length}</strong>
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-sm text-slate-400">Sepetteki urun</p>
            <strong class="mt-2 block text-2xl text-white">${getCartSummary().itemCount}</strong>
          </div>
        </div>

        <div class="mt-6">
          <h3 class="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Favori urunler</h3>
          ${
            favoriteProducts.length === 0
              ? `
                <div class="empty-state mt-3">
                  Henuz favori urun eklemedin.
                </div>
              `
              : `
                <div class="mt-3 space-y-3">
                  ${favoriteProducts
                    .map(
                      (product) => `
                        <button
                          type="button"
                          class="search-result-card flex w-full items-center gap-4 p-3 text-left"
                          data-action="open-product"
                          data-product-id="${product.id}"
                        >
                          <img
                            src="${product.image}"
                            alt="${product.name}"
                            class="h-16 w-16 rounded-2xl object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                          <div>
                            <p class="text-sm font-semibold text-white">${product.name}</p>
                            <span class="text-xs text-slate-400">${currency.format(product.price)}</span>
                          </div>
                        </button>
                      `,
                    )
                    .join('')}
                </div>
              `
          }
        </div>
      </article>
    </section>
  `
}

const renderView = () => {
  if (state.route === 'product') {
    return productDetailMarkup()
  }

  if (state.route === 'cart') {
    return cartViewMarkup()
  }

  if (state.route === 'search') {
    return searchViewMarkup()
  }

  if (state.route === 'profile') {
    return profileViewMarkup()
  }

  return homeViewMarkup()
}

const updateRouteButtons = () => {
  staticRouteButtons.forEach((button) => {
    const route = button.dataset.route
    const isCurrent =
      state.route === route || (state.route === 'product' && route === 'home')

    button.classList.toggle('is-current', isCurrent)
    button.setAttribute('aria-current', isCurrent ? 'page' : 'false')
  })
}

const syncRoute = () => {
  const routeInfo = parseRoute()
  state.route = routeInfo.name

  if (routeInfo.name === 'product') {
    state.selectedProductId = getProductById(routeInfo.id).id
  }
}

const renderApp = () => {
  syncRoute()
  appView.innerHTML = renderView()
  updateCartBadges()
  updateRouteButtons()

  if (state.route === 'search') {
    const searchField = document.querySelector('[data-search-field]')
    if (searchField) {
      requestAnimationFrame(() => {
        searchField.focus()
        searchField.setSelectionRange(searchField.value.length, searchField.value.length)
      })
    }
  }
}

appView.addEventListener('click', (event) => {
  const actionTarget = event.target.closest('[data-action]')

  if (!actionTarget) {
    return
  }

  const { action, productId, category } = actionTarget.dataset
  const id = Number(productId)

  if (action === 'set-category') {
    state.activeCategory = category
    navigateTo('home')
  }

  if (action === 'open-product') {
    state.selectedProductId = id
    navigateTo(`product/${id}`)
  }

  if (action === 'add-to-cart') {
    addToCart(id)
  }

  if (action === 'favorite') {
    toggleFavorite(id)
  }

  if (action === 'go-home') {
    navigateTo('home')
  }

  if (action === 'go-search') {
    navigateTo('search')
  }

  if (action === 'increase' || action === 'decrease' || action === 'remove') {
    updateQuantity(id, action)
  }
})

appView.addEventListener('input', (event) => {
  if (!event.target.matches('[data-search-field]')) {
    return
  }

  state.searchQuery = event.target.value
  renderApp()
})

staticRouteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    navigateTo(button.dataset.route)
  })
})

window.addEventListener('hashchange', renderApp)

if (!window.location.hash) {
  window.location.hash = 'home'
} else {
  renderApp()
}
