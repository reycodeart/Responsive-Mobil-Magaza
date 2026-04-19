# Responsive Mobil Magaza

Responsive Mobil Magaza, hocanin istedigi 3 haftalik teslim planina uygun olarak hazirlanmis mobil-first bir e-ticaret arayuzudur. Proje; urun listesi, urun detay alani ve sepet deneyimini tek sayfa uzerinde responsive, hizli ve erisilebilir bir yapiyla sunar.

## Kullanilan Teknolojiler

- HTML5
- CSS3
- Tailwind CSS
- JavaScript
- Vite

## Proje Ozellikleri

- Mobil-first responsive tasarim
- Urun listesi bolumu
- Urun detay paneli
- Sepete ekleme / cikarma islemleri
- Toplam fiyat hesaplama
- Lazy loading kullanan urun gorselleri
- Semantik HTML ve erisilebilirlik etiketleri
- Koyu tema modern arayuz

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

1. Repoyu bilgisayarina indir veya klonla.
2. Visual Studio Code ile proje klasorunu ac.
3. Ust menuden `Terminal > New Terminal` sec.
4. Asagidaki komutu calistir:

   ```bash
   npm install
   ```

5. Ardindan gelistirme sunucusunu baslat:

   ```bash
   npm run dev
   ```

6. Terminal sana genelde su adrese benzer bir link verir:

   ```bash
   http://localhost:5173
   ```

7. Bu adresi tarayicida ac ve projeyi incele.

## Diger Komutlar

Uretim build'i almak icin:

```bash
npm run build
```

Build ciktisini yerelde onizlemek icin:

```bash
npm run preview
```

## Lighthouse ve Performans Notlari

- Gorseller `loading="lazy"` ile yuklenir.
- Sayfada semantik bolumler (`header`, `main`, `section`, `article`, `aside`, `footer`) kullanilir.
- Kontrastli renk paleti tercih edilmistir.
- Butonlar ve etkilesimli alanlarda `aria-label` kullanilmistir.
- Vitrin verileri hafif tutulmustur; gereksiz kutuphane kullanimi azaltılmistir.

## Sunum Icin Kisa Ozet

Sunumda anlatmak icin hazir notlar `PRESENTATION_NOTES.md` dosyasina eklenmistir.