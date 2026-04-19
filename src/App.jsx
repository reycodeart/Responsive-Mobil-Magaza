import { useMemo, useState } from 'react'
import './App.css'

const categories = ['Tumu', 'Telefon', 'Kulaklik', 'Saat', 'Aksesuar']

const products = [
  {
    id: 1,
    name: 'Nova X Akilli Telefon',
    category: 'Telefon',
    price: 28999,
    oldPrice: 31999,
    rating: 4.8,
    badge: 'Yeni',
    color: 'var(--card-phone)',
  },
  {
    id: 2,
    name: 'Pulse Buds Pro',
    category: 'Kulaklik',
    price: 4999,
    oldPrice: 5799,
    rating: 4.7,
    badge: 'Cok Satan',
    color: 'var(--card-earbuds)',
  },
  {
    id: 3,
    name: 'Flow Watch S',
    category: 'Saat',
    price: 7999,
    oldPrice: 8999,
    rating: 4.6,
    badge: 'Yeni',
    color: 'var(--card-watch)',
  },
  {
    id: 4,
    name: 'MagSafe Powerbank',
    category: 'Aksesuar',
    price: 2499,
    oldPrice: 2999,
    rating: 4.5,
    badge: 'Indirim',
    color: 'var(--card-accessory)',
  },
]

const highlights = [
  { value: '24 saatte', label: 'kargo teslimi' },
  { value: '%15', label: 'ilk siparis indirimi' },
  { value: '4.9/5', label: 'musteri puani' },
]

const features = [
  'Mobil odakli hizli arayuz',
  'Guvenli odeme ve kolay iade',
  'Lighthouse dostu semantic yapi',
]

const formatPrice = (price) =>
  new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(price)

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Tumu')
  const [cartCount, setCartCount] = useState(1)

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'Tumu') {
      return products
    }

    return products.filter((product) => product.category === selectedCategory)
  }, [selectedCategory])

  const cartTotal = useMemo(() => {
    const starterPack = products[0].price + products[1].price
    return starterPack + cartCount * 499
  }, [cartCount])

  return (
    <div className="app-shell">
      <header className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Responsive Mobil Magaza</p>
          <h1>Mobil deneyime gore tasarlanmis teknoloji magazasi</h1>
          <p className="hero-text">
            Telefon, saat ve aksesuar urunlerini tek ekranda kesfet. Hedef,
            mobil cihazlarda hizli acilan, okunakli ve modern bir magaza arayuzu
            sunmak.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#urunler">
              Urunleri incele
            </a>
            <a className="secondary-button" href="#kampanya">
              Kampanyayi gor
            </a>
          </div>
        </div>

        <aside className="hero-card" aria-label="One cikan bilgiler">
          <div className="hero-card-top">
            <span className="hero-card-pill">Canli kampanya</span>
            <strong>Mobil haftasi</strong>
          </div>
          <ul className="highlight-list">
            {highlights.map((item) => (
              <li key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
          <div className="mini-cart">
            <div>
              <span>Sepet ozeti</span>
              <strong>{formatPrice(cartTotal)}</strong>
            </div>
            <button
              type="button"
              aria-label="Sepete bir urun ekle"
              onClick={() => setCartCount((count) => count + 1)}
            >
              +1 urun
            </button>
          </div>
        </aside>
      </header>

      <main>
        <section className="feature-strip" aria-label="Avantajlar">
          {features.map((feature) => (
            <article key={feature} className="feature-item">
              <span className="feature-dot" aria-hidden="true"></span>
              <p>{feature}</p>
            </article>
          ))}
        </section>

        <section className="catalog-section" id="urunler">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Kategori sec</p>
              <h2>One cikan urunler</h2>
            </div>
            <p className="section-text">
              Aradigin urune tek dokunusta ulasabilmek icin filtrelemeyi mobil
              kaydirma davranisina uygun sekilde tasarladik.
            </p>
          </div>

          <div className="category-row" role="tablist" aria-label="Urun kategorileri">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={category === selectedCategory ? 'chip active' : 'chip'}
                role="tab"
                aria-selected={category === selectedCategory}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'Tumu' ? 'Tumu' : category}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div
                  className="product-visual"
                  style={{ background: product.color }}
                  aria-hidden="true"
                >
                  <span>{product.category}</span>
                </div>

                <div className="product-body">
                  <div className="product-meta">
                    <span className="badge">{product.badge}</span>
                    <span className="rating">★ {product.rating}</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p className="product-description">
                    Yuksek performans, premium gorunum ve guncel mobil
                    ihtiyaclara uygun tasarim.
                  </p>
                  <div className="product-pricing">
                    <strong>{formatPrice(product.price)}</strong>
                    <span>{formatPrice(product.oldPrice)}</span>
                  </div>
                  <button
                    type="button"
                    className="add-button"
                    onClick={() => setCartCount((count) => count + 1)}
                  >
                    Sepete ekle
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="campaign-section" id="kampanya">
          <div className="campaign-copy">
            <p className="eyebrow">Site + Lighthouse odagi</p>
            <h2>Hiz, erisilebilirlik ve responsive tasarim tek yerde</h2>
            <p>
              Bu ekran; semantic baslik yapisi, kontrastli renk kullanimi,
              buton odak durumlari ve hafif veri modeliyle performans odakli bir
              teslim sunmak icin hazirlandi.
            </p>
          </div>

          <div className="campaign-card">
            <span className="campaign-badge">Haftanin firsati</span>
            <strong>2 urun alana ucretsiz kargo</strong>
            <p>
              Mobil uygulama benzeri bir deneyim icin sabit alt gezinme, buyuk
              dokunma alanlari ve tek elle kullanima uygun bosluklar kullanildi.
            </p>
            <a href="#alt-menu">Alt menuyu incele</a>
          </div>
        </section>
      </main>

      <nav className="bottom-nav" id="alt-menu" aria-label="Alt gezinme">
        <a href="#root" className="nav-item active">
          <span>⌂</span>
          <strong>Ana sayfa</strong>
        </a>
        <a href="#urunler" className="nav-item">
          <span>◫</span>
          <strong>Kategoriler</strong>
        </a>
        <a href="#kampanya" className="nav-item">
          <span>☆</span>
          <strong>Kampanya</strong>
        </a>
        <button type="button" className="nav-item cart-button">
          <span>🛒</span>
          <strong>Sepet ({cartCount})</strong>
        </button>
      </nav>
    </div>
  )
}

export default App
