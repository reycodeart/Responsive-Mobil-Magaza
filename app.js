const products = [
  {
    id: 1,
    name: 'Aero X1 Pro',
    category: 'Akilli Telefon',
    price: 26999,
    oldPrice: 29999,
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    shortDescription: '120Hz ekran, guclu kamera sistemi ve tum gun pil omru.',
    details:
      'Mobil-first tasarlanan magazada one cikan urun. Yuksak performansli islemci, gece cekim odakli kamera ve hizli sarj ozelligi ile gundelik kullanim icin ideal.',
    specs: ['6.7 in AMOLED', '256 GB depolama', '5000 mAh pil'],
  },
  {
    id: 2,
    name: 'Nova Buds Air',
    category: 'Kulaklik',
    price: 3499,
    oldPrice: 4299,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
    shortDescription: 'Aktif gurultu engelleme ve dengeli ses deneyimi.',
    details:
      'Hafif ve konforlu kulak ici tasarim. Online dersler, muzik ve gunluk kullanim icin dengeli bir deneyim sunar.',
    specs: ['ANC destekli', '30 saat toplam pil', 'USB-C kutu'],
  },
  {
    id: 3,
    name: 'Pulse Watch Fit',
    category: 'Akilli Saat',
    price: 5999,
    oldPrice: 6999,
    image:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80',
    shortDescription: 'Saglik takibi, spor modlari ve hafif govde.',
    details:
      'Kalp ritmi, uyku takibi ve antrenman modlariyla aktif yasam icin optimize edildi. Mobil ekranda kolay anlasilan bir urun karti deneyimi sunar.',
    specs: ['AMOLED ekran', 'Suya dayanikli', '7 gun pil'],
  },
  {
    id: 4,
    name: 'MagCharge Mini',
    category: 'Aksesuar',
    price: 1799,
    oldPrice: 2199,
    image:
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    shortDescription: 'Kablosuz sarj destekli kompakt powerbank.',
    details:
      'Cepte tasinabilir yapida olup hareket halindeki kullanicilar icin hizli cozum sunar. Tek elle kullanima uygun ergonomik forma sahiptir.',
    specs: ['5000 mAh', 'Kablosuz sarj', 'USB-C PD'],
  },
  {
    id: 5,
    name: 'VisionPad Lite',
    category: 'Tablet',
    price: 14999,
    oldPrice: 16999,
    image:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80',
    shortDescription: 'Ders, not alma ve medya tuketimi icin ince tablet.',
    details:
      'Buyuk ekranli ancak hafif govdeli yapisi ile hem ogrenciler hem de gundelik kullanicilar icin ideal. Responsive duzende ikinci sutunda rahatca goruntulenir.',
    specs: ['10.9 in ekran', '128 GB', 'Kalem destegi'],
  },
  {
    id: 6,
    name: 'Snap Grip Stand',
    category: 'Aksesuar',
    price: 899,
    oldPrice: 1099,
    image:
      'https://images.unsplash.com/photo-1616410011236-7a42121dd981?auto=format&fit=crop&w=900&q=80',
    shortDescription: 'Telefon tutucu, stand ve kavrama aparati bir arada.',
    details:
      'Mobil fotograf ve video kullanimina uygun cift amacli aksesuar. Kucuk ama kullanisli urunler icin mockup verisine iyi bir ornek.',
    specs: ['Katlanabilir govde', 'Magsafe uyumlu', 'Hafif tasarim'],
  },
]

const state = {
  selectedProductId: products[0].id,
  activeFilter: 'all',
  cart: [],
}

const currency = new Intl.NumberFormat('tr-TR', {
  style: 'currency',
  currency: 'TRY',
  maximumFractionDigits: 0,
})

const productGrid = document.querySelector('#product-grid')
const detailPanel = document.querySelector('#product-detail')
const cartList = document.querySelector('#cart-items')
const subtotalElement = document.querySelector('#subtotal')
const grandTotalElement = document.querySelector('#grand-total')
const cartBadge = document.querySelector('#cart-count-badge')
const filterButtons = document.querySelectorAll('.filter-chip')

const categoryMap = {
  phone: 'Akilli Telefon',
  watch: 'Akilli Saat',
  audio: 'Kulaklik',
  accessory: 'Aksesuar',
  tablet: 'Tablet',
}

const getSelectedProduct = () =>
  products.find((product) => product.id === state.selectedProductId) ?? products[0]

const getCartSummary = () => {
  const items = state.cart.map((entry) => {
    const product = products.find((item) => item.id === entry.id)
    return {
      ...product,
      quantity: entry.quantity,
      total: product.price * entry.quantity,
    }
  })

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.total, 0)

  return { items, totalItems, subtotal }
}

const getVisibleProducts = () => {
  if (state.activeFilter === 'all') return products
  return products.filter((product) => product.category === categoryMap[state.activeFilter])
}

const renderProducts = () => {
  productGrid.innerHTML = ''

  getVisibleProducts().forEach((product) => {
    const card = document.createElement('article')
    card.className =
      'group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80 shadow-soft'
    card.innerHTML = `
      <button
        class="flex h-full flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        data-product-id="${product.id}"
        aria-label="${product.name} detaylarini gor"
      >
        <div class="relative aspect-[4/3] overflow-hidden bg-slate-800">
          <img
            src="${product.image}"
            alt="${product.name}"
            class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          <span class="absolute left-4 top-4 rounded-full bg-cyan-300 px-3 py-1 text-xs font-semibold text-slate-950">
            ${product.category}
          </span>
        </div>
        <div class="flex flex-1 flex-col gap-4 p-5">
          <div>
            <h3 class="text-lg font-semibold text-white">${product.name}</h3>
            <p class="mt-2 text-sm text-slate-300">${product.shortDescription}</p>
          </div>
          <div class="mt-auto flex items-end justify-between gap-3">
            <div>
              <p class="text-xl font-bold text-white">${currency.format(product.price)}</p>
              <p class="text-sm text-slate-500 line-through">${currency.format(product.oldPrice)}</p>
            </div>
            <span class="rounded-full border border-fuchsia-400/40 px-3 py-2 text-xs font-semibold text-fuchsia-200">
              Detay
            </span>
          </div>
        </div>
      </button>
    `

    card.querySelector('button').addEventListener('click', () => {
      state.selectedProductId = product.id
      renderDetails()
    })

    productGrid.appendChild(card)
  })
}

const renderDetails = () => {
  const product = getSelectedProduct()

  detailPanel.innerHTML = `
    <div class="overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/80 shadow-soft">
      <div class="relative aspect-[16/10] overflow-hidden bg-slate-800">
        <img
          src="${product.image}"
          alt="${product.name}"
          class="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 to-transparent px-6 pb-6 pt-12">
          <span class="inline-flex rounded-full bg-fuchsia-500/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Urun Detay Sayfasi
          </span>
        </div>
      </div>
      <div class="space-y-6 p-6">
        <div class="space-y-3">
          <div class="flex flex-wrap items-center gap-3">
            <h3 class="text-2xl font-bold text-white">${product.name}</h3>
            <span class="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
              ${product.category}
            </span>
          </div>
          <p class="text-sm leading-7 text-slate-300">${product.details}</p>
        </div>

        <div class="grid gap-4 rounded-3xl border border-white/10 bg-slate-950/60 p-5 sm:grid-cols-3">
          ${product.specs
            .map(
              (spec) => `
                <div class="rounded-2xl border border-white/6 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  ${spec}
                </div>
              `,
            )
            .join('')}
        </div>

        <div class="flex flex-col gap-4 rounded-3xl bg-slate-950/60 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p class="text-sm text-slate-400">Guncel fiyat</p>
            <p class="text-3xl font-bold text-white">${currency.format(product.price)}</p>
          </div>
          <button
            id="detail-add-button"
            class="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            type="button"
            aria-label="${product.name} urununu sepete ekle"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  `

  detailPanel.querySelector('#detail-add-button').addEventListener('click', () => {
    addToCart(product.id)
  })
}

const addToCart = (productId) => {
  const existingItem = state.cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    state.cart.push({ id: productId, quantity: 1 })
  }

  renderCart()
}

const updateQuantity = (productId, change) => {
  const cartItem = state.cart.find((item) => item.id === productId)
  if (!cartItem) return

  cartItem.quantity += change

  if (cartItem.quantity <= 0) {
    state.cart = state.cart.filter((item) => item.id !== productId)
  }

  renderCart()
}

const renderCart = () => {
  const { items, totalItems, subtotal } = getCartSummary()

  cartBadge.textContent = `${totalItems} urun`
  subtotalElement.textContent = currency.format(subtotal)
  grandTotalElement.textContent = currency.format(subtotal)

  cartList.innerHTML = ''
  const cartEmpty = document.querySelector('#cart-empty')

  if (items.length === 0) {
    cartEmpty.classList.remove('hidden')
    return
  }

  cartEmpty.classList.add('hidden')

  items.forEach((item) => {
    const li = document.createElement('li')
    li.className =
      'rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200'
    li.innerHTML = `
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="font-semibold text-white">${item.name}</p>
          <p class="mt-1 text-xs text-slate-400">${item.category}</p>
        </div>
        <p class="font-semibold text-cyan-200">${currency.format(item.total)}</p>
      </div>
      <div class="mt-4 flex items-center justify-between gap-4">
        <div class="inline-flex items-center rounded-full border border-white/10 bg-slate-950/70">
          <button
            class="min-h-10 min-w-10 rounded-full text-lg text-white transition hover:bg-white/10"
            type="button"
            data-action="decrease"
            data-product-id="${item.id}"
            aria-label="${item.name} miktarini azalt"
          >
            -
          </button>
          <span class="min-w-10 text-center text-sm">${item.quantity}</span>
          <button
            class="min-h-10 min-w-10 rounded-full text-lg text-white transition hover:bg-white/10"
            type="button"
            data-action="increase"
            data-product-id="${item.id}"
            aria-label="${item.name} miktarini artir"
          >
            +
          </button>
        </div>
        <button
          class="text-xs font-semibold text-fuchsia-200 transition hover:text-fuchsia-100"
          type="button"
          data-action="remove"
          data-product-id="${item.id}"
          aria-label="${item.name} urununu sil"
        >
          Kaldir
        </button>
      </div>
    `

    li.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', () => {
        const targetId = Number(button.dataset.productId)
        const action = button.dataset.action

        if (action === 'increase') updateQuantity(targetId, 1)
        if (action === 'decrease') updateQuantity(targetId, -1)
        if (action === 'remove') updateQuantity(targetId, -Infinity)
      })
    })

    cartList.appendChild(li)
  })
}

const setFilter = (filter) => {
  state.activeFilter = filter

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === filter
    button.classList.toggle('is-active', isActive)
    button.setAttribute('aria-pressed', String(isActive))
  })

  const visibleProducts = getVisibleProducts()
  if (!visibleProducts.some((product) => product.id === state.selectedProductId)) {
    state.selectedProductId = visibleProducts[0]?.id ?? products[0].id
  }

  renderProducts()
  renderDetails()
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setFilter(button.dataset.filter)
  })
})

renderProducts()
renderDetails()
renderCart()
