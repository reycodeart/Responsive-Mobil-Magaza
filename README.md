# Responsive Mobil Mağaza

Responsive Mobil Mağaza; HTML, Tailwind CSS ve Vanilla JavaScript ile geliştirilmiş, mobil-first odaklı bir e-ticaret prototipidir. Uygulama, sayfa yenilenmeden görünüm değiştiren uygulama içi routing mantığıyla Home, Product Detail, Cart, Search ve Profile ekranlarını yönetir.

## Kullanılan Teknolojiler

- HTML5
- Tailwind CSS
- Vanilla JavaScript
- Lucide Icons
- Vite

## Özellikler

- Sayfa yenilenmeden çalışan uygulama içi routing mantığı
- Sticky header ve sabit bottom navigation bar
- Gerçek ikon seti ile modern mobil uygulama hissi
- Kaydırılabilir kategori şeritleri
- Günün fırsatları banner alanı
- Premium kart görünümü ve koyu tema
- Ürün kartlarında favori butonu
- Ürün detay ekranında görsel galerisi
- Gelişmiş arama, kategori, fiyat, fırsat ve favori filtreleri
- Sepete ekleme / çıkarma / miktar değiştirme
- `localStorage` ile kalıcı sepet ve favoriler
- Unsplash tabanlı teknoloji ürün görselleri
- Lazy loading, semantik HTML ve erişilebilirlik odaklı yapı

## Proje Yapısı

```text
Responsive-Mobil-Magaza/
|- index.html
|- styles.css
|- app.js
|- README.md
|- PRESENTATION_NOTES.md
|- package.json
```

## Visual Studio Code'da Çalıştırma

1. Proje klasörünü Visual Studio Code ile aç.
2. `Terminal > New Terminal` ile terminal başlat.
3. Bağımlılıkları yükle:

   ```bash
   npm install
   ```

4. Geliştirme sunucusunu çalıştır:

   ```bash
   npm run dev
   ```

5. Terminalde verilen adresi tarayıcıda aç. Genelde:

   ```bash
   http://localhost:5173
   ```

## Diğer Komutlar

Üretim build'i:

```bash
npm run build
```

Build önizlemesi:

```bash
npm run preview
```

## Uygulama Akışı

- `#/home` -> Ana sayfa
- `#/product/:id` -> Ürün detay ekranı
- `#/cart` -> Sepet ekranı
- `#/search` -> Arama ekranı
- `#/profile` -> Profil ve favori özet ekranı

## Lighthouse ve Erişilebilirlik Notları

- `header`, `main`, `section`, `article`, `footer` gibi semantik etiketler kullanılır.
- Görseller `loading="lazy"` ve `decoding="async"` ile optimize edilir.
- Butonlarda `aria-label` tanımları bulunur.
- Kontrastlı dark mode paleti kullanılır.
- Kalıcı veri için hafif `localStorage` kullanılır, ek state kütüphanesi eklenmez.