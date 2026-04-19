# Responsive Mobil Magaza

Responsive Mobil Magaza, HTML, Tailwind CSS ve Vanilla JavaScript ile gelistirilmis mobil-first bir e-ticaret prototipidir. Uygulama, sayfa yenilenmeden gorunum degistiren basit bir routing mantigi ile Home, Product Detail, Cart, Search ve Profile ekranlarini yonetir.

## Kullanilan Teknolojiler

- HTML5
- Tailwind CSS
- Vanilla JavaScript
- Vite

## Ozellikler

- Sayfa yenilenmeden calisan uygulama ici routing mantigi
- Home ekraninda kaydirilabilir kategoriler
- Gunun Firsatlari banner alani
- Mobilde iki sutunlu urun listesi
- Urun detay ekrani
- Calisan sepet ekrani ve toplam fiyat hesaplama
- Sticky header ve sabit bottom navigation bar
- Favori butonlari
- Dark mode uyumlu modern arayuz
- Unsplash tabanli teknoloji urun gorselleri
- Lazy loading ve semantik HTML yapisi

## Proje Yapisi

```text
Responsive-Mobil-Magaza/
|- index.html
|- styles.css
|- app.js
|- README.md
|- PRESENTATION_NOTES.md
|- package.json
```

## Visual Studio Code'da Calistirma

1. Proje klasorunu Visual Studio Code ile ac.
2. `Terminal > New Terminal` ile terminal baslat.
3. Bagimliliklari yukle:

   ```bash
   npm install
   ```

4. Gelistirme sunucusunu calistir:

   ```bash
   npm run dev
   ```

5. Terminalde verilen adresi tarayicida ac. Genelde:

   ```bash
   http://localhost:5173
   ```

## Diger Komutlar

Uretim build'i:

```bash
npm run build
```

Build onizlemesi:

```bash
npm run preview
```

## Uygulama Akisi

- `#/home` -> Ana sayfa
- `#/product/:id` -> Urun detay ekrani
- `#/cart` -> Sepet ekrani
- `#/search` -> Arama ekrani
- `#/profile` -> Profil placeholder ekrani

## Lighthouse ve Erisilebilirlik Notlari

- `header`, `main`, `section`, `article`, `footer` gibi semantik etiketler kullanilir.
- Gorseller `loading="lazy"` ve `decoding="async"` ile optimize edilir.
- Butonlarda `aria-label` tanimlari bulunur.
- Kontrastli dark mode paleti kullanilir.
- Gereksiz framework/state yonetim kutuphaneleri eklenmemistir.