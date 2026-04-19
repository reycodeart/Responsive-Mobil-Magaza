import { createIcons, icons } from 'lucide'

const STORAGE_KEYS = {
  cart: 'responsive-mobile-store-cart',
  favorites: 'responsive-mobile-store-favorites',
}

const products = [
  {
    id: 1,
    brand: 'Nebula',
    name: 'Nebula X15 Laptop',
    category: 'Laptop',
    price: 42999,
    oldPrice: 46999,
    rating: 4.8,
    badge: 'Yeni',
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    ],
    shortDescription: 'İnce kasa, 16 GB RAM ve gün boyu pil ömrü sunan premium laptop.',
    details:
      'Nebula X15; tasarım, ders ve günlük üretkenlik için mobil-first odakta seçilen ana ürünlerden biridir. 120 Hz ekran, hızlı SSD ve sessiz soğutma sistemiyle profesyonel kullanım sunar.',
    specs: ['15.6 in IPS', '16 GB RAM', '1 TB SSD'],
    color: 'Gümüş',
    shipping: 'Yarın kargoda',
    deal: true,
  },
  {
    id: 2,
    brand: 'Pulse',
    name: 'Pulse Air Headphones',
    category: 'Kulaklık',
    price: 3599,
    oldPrice: 4299,
    rating: 4.7,
    badge: 'Popüler',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
    ],
    shortDescription: 'Aktif gürültü engelleme ve yumuşak kulak yastıkları ile net ses.',
    details:
      'Pulse Air, hareket halindeyken müzik ve görüşmeler için yüksek konfor sunar. Hafif gövdesi ve modern tasarımı sayesinde mobil kullanıcıların favorilerinden biridir.',
    specs: ['ANC destekli', '32 saat pil', 'Bluetooth 5.3'],
    color: 'Grafit',
    shipping: 'Bugün kargoda',
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
    badge: 'Amiral Gemisi',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=1200&q=80',
    ],
    shortDescription: 'Geliştirilmiş gece modu ve 120 Hz ekranla amiral gemisi deneyimi.',
    details:
      'Aero S24, tek elle kullanım kolaylığı, güçlü kamera yapısı ve hızlı şarj destekli bataryasıyla modern mobil mağazanın temel ürünlerinden biri olarak konumlandırıldı.',
    specs: ['256 GB', '50 MP kamera', '5000 mAh'],
    color: 'Uzay Siyahı',
    shipping: 'Aynı gün teslim',
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
    badge: 'Pro',
    image:
      'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    ],
    shortDescription: 'Tasarım ve video işleri için güçlü ekran kartlı ince laptop.',
    details:
      'Vertex Creator, daha çok performans arayan kullanıcılar için geliştirildi. Renk doğruluğu yüksek ekran ve hızlı çoklu görev performansı sunar.',
    specs: ['14 in OLED', 'RTX seri GPU', '32 GB RAM'],
    color: 'Koyu Gri',
    shipping: 'Yarın kargoda',
    deal: false,
  },
  {
    id: 5,
    brand: 'Nova',
    name: 'Nova Buds Pro',
    category: 'Kulaklık',
    price: 2499,
    oldPrice: 2899,
    rating: 4.5,
    badge: 'Fiyat/Performans',
    image:
      'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
    ],
    shortDescription: 'Kompakt kutu, net mikrofon ve günlük kullanım için dengeli ses.',
    details:
      'Nova Buds Pro, özellikle öğrenciler ve sürekli hareket halinde olan kullanıcılar için optimize edilmiş bir TWS kulaklık modelidir.',
    specs: ['TWS', 'Hızlı şarj', 'IPX4'],
    color: 'Beyaz',
    shipping: 'Bugün kargoda',
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
    badge: 'Premium',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=1200&q=80',
    ],
    shortDescription: 'Katlanabilir ekran ve premium hissiyatla gelecek odaklı telefon.',
    details:
      'Luma Fold Phone, yenilikçi tasarım arayan kullanıcılar için seçildi. Büyük ekran deneyimi ve premium malzeme yapısı ile ürün detay sayfasında öne çıkacak şekilde tasarlandı.',
    specs: ['Katlanabilir ekran', '512 GB', 'Kablosuz şarj'],
    color: 'Gece Mavisi',
    shipping: 'Ön sipariş',
    deal: false,
  },
]

const categories = ['Tümü', 'Telefon', 'Laptop', 'Kulaklık']
const priceRanges = [
  { value: 'all', label: 'Tüm fiyatlar' },
  { value: '0-5000', label: '0 - 5.000 TL' },
  { value: '5000-30000', label: '5.000 - 30.000 TL' },
  { value: '30000+', label: '30.000 TL+' },
]

const readStorage = (key, fallback) => {
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

const writeStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Ignore storage failures.
  }
}

const state = {
  route: 'home',
  selectedProductId: products[0].id,
  selectedGalleryIndex: 0,
  activeCategory: 'Tümü',
  searchQuery: '',
  activePriceRange: 'all',
  onlyDeals: false,
  onlyFavorites: false,
  sortBy: 'featured',
  cart: readStorage(STORAGE_KEYS.cart, []),
  favorites: readStorage(STORAGE_KEYS.favorites, []),
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

const persistState = () => {
  writeStorage(STORAGE_KEYS.cart, state.cart)
  writeStorage(STORAGE_KEYS.favorites, state.favorites)
}

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

const isWithinRange = (price, range) => {
  if (range === 'all') return true
  if (range === '0-5000') return price <= 5000
  if (range === '5000-30000') return price > 5000 && price <= 30000
  if (range === '30000+') return price > 30000
  return true
}

const matchesSearch = (product) => {
  const query = state.searchQuery.trim().toLocaleLowerCase('tr-TR')

  if (!query) return true

  return `${product.brand} ${product.name} ${product.category} ${product.badge} ${product.color}`
    .toLocaleLowerCase('tr-TR')
    .includes(query)
}

const getFilteredProducts = (includeCategory = true) => {
  let filtered = products.filter((product) => {
    const categoryMatch =
      !includeCategory ||
      state.activeCategory === 'Tümü' ||
      product.category === state.activeCategory

    return (
      categoryMatch &&
      matchesSearch(product) &&
      isWithinRange(product.price, state.activePriceRange) &&
      (!state.onlyDeals || product.deal) &&
      (!state.onlyFavorites || state.favorites.includes(product.id))
    )
  })

  if (state.sortBy === 'price-asc') {
    filtered = [...filtered].sort((a, b) => a.price - b.price)
  } else if (state.sortBy === 'price-desc') {
    filtered = [...filtered].sort((a, b) => b.price - a.price)
  } else if (state.sortBy === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating)
  } else if (state.sortBy === 'featured') {
    filtered = [...filtered].sort((a, b) => Number(b.deal) - Number(a.deal))
  }

  return filtered
}

const getHomeProducts = () => getFilteredProducts(true)
const getSearchResults = () => getFilteredProducts(false)
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

  persistState()
  updateCartBadges()
  renderApp()
}

const updateQuantity = (productId, mode) => {
  const cartItem = state.cart.find((item) => item.id === productId)
  if (!cartItem) return

  if (mode === 'increase') cartItem.quantity += 1
  if (mode === 'decrease') cartItem.quantity -= 1

  if (mode === 'remove' || cartItem.quantity <= 0) {
    state.cart = state.cart.filter((item) => item.id !== productId)
  }

  persistState()
  updateCartBadges()
  renderApp()
}

const toggleFavorite = (productId) => {
  if (state.favorites.includes(productId)) {
    state.favorites = state.favorites.filter((id) => id !== productId)
  } else {
    state.favorites.push(productId)
  }

  persistState()
  renderApp()
}

const openProduct = (productId) => {
  state.selectedProductId = productId
  state.selectedGalleryIndex = 0
  navigateTo(`product/${productId}`)
}

const productCardMarkup = (product) => {
  const isFavorite = state.favorites.includes(product.id)

  return `
    <article class="product-card">
      <div class="product-card__media">
        <span class="product-chip">${product.badge}</span>
        <button
          type="button"
          class="favorite-button ${isFavorite ? 'is-active' : ''}"
          data-action="favorite"
          data-product-id="${product.id}"
          aria-label="${product.name} favorilere ekle"
        >
          <i data-lucide="${isFavorite ? 'heart-off' : 'heart'}"></i>
        </button>
        <button
          type="button"
          class="product-card__button"
          data-action="open-product"
          data-product-id="${product.id}"
          aria-label="${product.name} ürün detayını aç"
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
        <div class="flex items-center justify-between gap-2">
          <p class="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">${product.brand}</p>
          <span class="text-xs text-slate-400">${product.rating} ★</span>
        </div>
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
            aria-label="${product.name} ürününü sepete ekle"
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
    <section class="hero-banner premium-card p-5">
      <div class="hero-banner__overlay"></div>
      <div class="relative flex items-start justify-between gap-4">
        <div class="max-w-[260px]">
          <p class="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Günün Fırsatı</p>
          <h1 class="mt-3 text-3xl font-bold leading-tight text-white">${deal.name}</h1>
          <p class="mt-3 text-sm leading-7 text-slate-300">${deal.shortDescription}</p>
          <div class="mt-5 flex items-center gap-3">
            <button
              type="button"
              class="rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 px-4 py-2 text-sm font-semibold text-slate-950"
              data-action="open-product"
              data-product-id="${deal.id}"
            >
              İncele
            </button>
            <span class="text-sm font-semibold text-violet-200">${currency.format(deal.price)}</span>
          </div>
        </div>
        <div class="hero-stat-card">
          <p class="text-xs uppercase tracking-[0.22em] text-slate-500">Canlı Sepet</p>
          <strong class="text-2xl text-white">${getCartSummary().itemCount}</strong>
          <span class="mt-2 inline-flex text-xs text-slate-400">Ücretsiz kargo avantajı</span>
        </div>
      </div>
    </section>
  `
}

const filtersPanelMarkup = () => `
  <section class="filter-panel">
    <div class="space-y-3">
      <div class="flex items-center justify-between gap-3">
        <h2 class="text-lg font-semibold text-white">Akıllı Filtreler</h2>
        <button
          type="button"
          class="text-sm font-semibold text-cyan-300"
          data-action="reset-filters"
        >
          Sıfırla
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
    </div>

    <div class="grid gap-3 sm:grid-cols-2">
      <label class="filter-select">
        <span>Fiyat aralığı</span>
        <select data-filter-select="price">
          ${priceRanges
            .map(
              (option) => `
                <option value="${option.value}" ${state.activePriceRange === option.value ? 'selected' : ''}>
                  ${option.label}
                </option>
              `,
            )
            .join('')}
        </select>
      </label>

      <label class="filter-select">
        <span>Sıralama</span>
        <select data-filter-select="sort">
          <option value="featured" ${state.sortBy === 'featured' ? 'selected' : ''}>Öne çıkanlar</option>
          <option value="price-asc" ${state.sortBy === 'price-asc' ? 'selected' : ''}>Fiyat artan</option>
          <option value="price-desc" ${state.sortBy === 'price-desc' ? 'selected' : ''}>Fiyat azalan</option>
          <option value="rating" ${state.sortBy === 'rating' ? 'selected' : ''}>En yüksek puan</option>
        </select>
      </label>
    </div>

    <div class="filter-toggle-row">
      <button
        type="button"
        class="toggle-chip ${state.onlyDeals ? 'is-active' : ''}"
        data-action="toggle-deals"
        aria-pressed="${String(state.onlyDeals)}"
      >
        <i data-lucide="badge-percent"></i>
        <span>Sadece fırsatlar</span>
      </button>
      <button
        type="button"
        class="toggle-chip ${state.onlyFavorites ? 'is-active' : ''}"
        data-action="toggle-favorites"
        aria-pressed="${String(state.onlyFavorites)}"
      >
        <i data-lucide="heart"></i>
        <span>Sadece favoriler</span>
      </button>
    </div>
  </section>
`

const homeViewMarkup = () => {
  const visibleProducts = getHomeProducts()

  return `
    <section class="space-y-6">
      ${dealBannerMarkup()}
      ${filtersPanelMarkup()}

      <section aria-labelledby="products-heading" class="space-y-4">
        <div class="flex items-center justify-between gap-3">
          <div>
            <h2 id="products-heading" class="text-xl font-semibold text-white">Ürün Listesi</h2>
            <p class="mt-1 text-sm text-slate-400">2 sütunlu mobil-first ürün ızgarası</p>
          </div>
          <span class="text-sm text-slate-400">${visibleProducts.length} ürün</span>
        </div>
        ${
          visibleProducts.length === 0
            ? `
              <div class="empty-state">
                Seçili filtrelere uygun ürün bulunamadı.
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
  const activeImage = product.gallery[state.selectedGalleryIndex] ?? product.image

  return `
    <section class="space-y-5">
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200"
        data-action="go-home"
      >
        <i data-lucide="arrow-left"></i>
        <span>Ana sayfaya dön</span>
      </button>

      <article class="premium-card overflow-hidden">
        <div class="detail-hero">
          <div class="relative aspect-[4/4.2] overflow-hidden bg-slate-800">
            <img
              src="${activeImage}"
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
              <i data-lucide="${isFavorite ? 'heart-off' : 'heart'}"></i>
            </button>
          </div>

          <div class="gallery-strip">
            ${product.gallery
              .map(
                (image, index) => `
                  <button
                    type="button"
                    class="gallery-thumb ${state.selectedGalleryIndex === index ? 'is-active' : ''}"
                    data-action="select-gallery"
                    data-gallery-index="${index}"
                    aria-label="${product.name} için ${index + 1}. görseli aç"
                  >
                    <img src="${image}" alt="${product.name} görsel ${index + 1}" loading="lazy" decoding="async" />
                  </button>
                `,
              )
              .join('')}
          </div>
        </div>

        <div class="space-y-5 p-5">
          <div class="detail-heading-row">
            <div class="space-y-2">
              <p class="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">${product.brand}</p>
              <h1 class="text-3xl font-bold leading-tight text-white">${product.name}</h1>
              <div class="flex items-center gap-3 text-sm text-slate-400">
                <span>${product.category}</span>
                <span>•</span>
                <span>${product.rating} puan</span>
                <span>•</span>
                <span>${product.color}</span>
              </div>
            </div>
            <span class="product-chip">${product.badge}</span>
          </div>

          <p class="text-sm leading-7 text-slate-300">${product.details}</p>

          <div class="detail-meta-grid">
            <div class="detail-meta-card">
              <span>Teslimat</span>
              <strong>${product.shipping}</strong>
            </div>
            <div class="detail-meta-card">
              <span>Renk</span>
              <strong>${product.color}</strong>
            </div>
            <div class="detail-meta-card">
              <span>Kampanya</span>
              <strong>${product.deal ? 'Aktif' : 'Standart'}</strong>
            </div>
          </div>

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
                aria-label="${product.name} ürününü sepete ekle"
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
          ${items.length} çeşit
        </span>
      </div>

      ${
        items.length === 0
          ? `
            <div class="empty-state text-center">
              <p class="text-lg font-semibold text-white">Sepetin boş</p>
              <p class="mt-2 text-sm leading-7 text-slate-400">
                Ürün kartlarından veya ürün detay sayfasından ürün ekleyerek sepetini doldurabilirsin.
              </p>
              <button
                type="button"
                class="mt-4 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 px-4 py-2 text-sm font-semibold text-slate-950"
                data-action="go-home"
              >
                Alışverişe dön
              </button>
            </div>
          `
          : `
            <div class="space-y-4">
              ${items
                .map(
                  (item) => `
                    <article class="cart-item premium-card p-4">
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
                                aria-label="${item.name} miktarını azalt"
                              >
                                -
                              </button>
                              <span class="min-w-10 text-center text-sm">${item.quantity}</span>
                              <button
                                class="quantity-button"
                                type="button"
                                data-action="increase"
                                data-product-id="${item.id}"
                                aria-label="${item.name} miktarını artır"
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
                              Kaldır
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
                  <strong class="text-base text-white">Ücretsiz</strong>
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
                  Ödemeye Geç
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
        <h1 class="mt-2 text-3xl font-bold text-white">Ürün Ara</h1>
        <p class="mt-2 text-sm leading-7 text-slate-400">
          Marka, kategori veya ürün adı yaz. Sonuçlar sayfa yenilenmeden anında güncellenir.
        </p>
      </div>

      <div class="premium-card p-4">
        <label class="sr-only" for="search-input-inner">Ürün ara</label>
        <div class="search-box">
          <i data-lucide="search"></i>
          <input
            id="search-input-inner"
            data-search-field
            class="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
            type="search"
            value="${state.searchQuery}"
            placeholder="Laptop, telefon veya marka ara..."
          />
        </div>
      </div>

      ${filtersPanelMarkup()}

      ${
        results.length === 0
          ? `
            <div class="empty-state">
              Aramana uygun ürün bulunamadı. Farklı bir anahtar kelime dene.
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
        <h1 class="mt-2 text-3xl font-bold text-white">Profil & Özet</h1>
      </div>

      <article class="premium-card p-5">
        <div class="flex items-center gap-4">
          <div class="grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-cyan-300 to-violet-400 text-xl font-bold text-slate-950">
            RM
          </div>
          <div>
            <h2 class="text-xl font-semibold text-white">Responsive Kullanıcı</h2>
            <p class="text-sm text-slate-400">Premium mobil mağaza deneyimi</p>
          </div>
        </div>

        <div class="mt-6 grid grid-cols-2 gap-4">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-sm text-slate-400">Favoriler</p>
            <strong class="mt-2 block text-2xl text-white">${state.favorites.length}</strong>
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-sm text-slate-400">Sepetteki ürün</p>
            <strong class="mt-2 block text-2xl text-white">${getCartSummary().itemCount}</strong>
          </div>
        </div>

        <div class="mt-6">
          <h3 class="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Favori ürünler</h3>
          ${
            favoriteProducts.length === 0
              ? `
                <div class="empty-state mt-3">
                  Henüz favori ürün eklemedin.
                </div>
              `
              : `
                <div class="mt-3 space-y-3">
                  ${favoriteProducts
                    .map(
                      (product) => `
                        <button
                          type="button"
                          class="premium-card flex w-full items-center gap-4 p-3 text-left"
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
  if (state.route === 'product') return productDetailMarkup()
  if (state.route === 'cart') return cartViewMarkup()
  if (state.route === 'search') return searchViewMarkup()
  if (state.route === 'profile') return profileViewMarkup()
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

const renderIcons = () => {
  createIcons({ icons })
}

const renderApp = () => {
  syncRoute()
  appView.innerHTML = renderView()
  updateCartBadges()
  updateRouteButtons()
  renderIcons()

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
  if (!actionTarget) return

  const { action, productId, category, galleryIndex } = actionTarget.dataset
  const id = Number(productId)

  if (action === 'set-category') {
    state.activeCategory = category
    navigateTo('home')
  }

  if (action === 'open-product') {
    openProduct(id)
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

  if (action === 'toggle-deals') {
    state.onlyDeals = !state.onlyDeals
    renderApp()
  }

  if (action === 'toggle-favorites') {
    state.onlyFavorites = !state.onlyFavorites
    renderApp()
  }

  if (action === 'reset-filters') {
    state.activeCategory = 'Tümü'
    state.activePriceRange = 'all'
    state.onlyDeals = false
    state.onlyFavorites = false
    state.sortBy = 'featured'
    state.searchQuery = ''
    renderApp()
  }

  if (action === 'select-gallery') {
    state.selectedGalleryIndex = Number(galleryIndex)
    renderApp()
  }
})

appView.addEventListener('input', (event) => {
  if (!event.target.matches('[data-search-field]')) return
  state.searchQuery = event.target.value
  renderApp()
})

appView.addEventListener('change', (event) => {
  const select = event.target.closest('[data-filter-select]')
  if (!select) return

  const type = select.dataset.filterSelect
  if (type === 'price') state.activePriceRange = select.value
  if (type === 'sort') state.sortBy = select.value
  renderApp()
})

staticRouteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    navigateTo(button.dataset.route)
  })
})

window.addEventListener('hashchange', renderApp)

renderIcons()

if (!window.location.hash) {
  window.location.hash = 'home'
} else {
  renderApp()
}
