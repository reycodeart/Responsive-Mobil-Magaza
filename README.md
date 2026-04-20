# Responsive Mobil Mağaza

## Proje Özeti

Responsive Mobil Mağaza, Bilişim Sistemleri Mühendisliği bakış açısıyla ele alınmış, mobil-first tasarım prensipleri doğrultusunda geliştirilmiş tek sayfa bir e-ticaret uygulama prototipidir. Proje; ürün listeleme, ürün detay görüntüleme, sepet yönetimi, ödeme akışı, filtreleme ve kullanıcı odaklı mobil gezinme davranışlarını bir araya getirir. Uygulama; HTML5, Tailwind CSS ve Vanilla JavaScript kullanılarak, sayfa yenilenmeden çalışan istemci taraflı bir routing mantığıyla kurgulanmıştır.

Bu çalışma, yalnızca görsel bir arayüz üretmeyi değil; aynı zamanda analitik planlama, teknik uygulama, performans optimizasyonu, erişilebilirlik ve teslim dokümantasyonu süreçlerini sistematik biçimde ortaya koymayı amaçlamaktadır.

---

## Kullanılan Teknolojiler

- **HTML5**: Semantik belge yapısı ve erişilebilir içerik organizasyonu
- **Tailwind CSS**: Hızlı, tutarlı ve responsive kullanıcı arayüzü geliştirme
- **Vanilla JavaScript**: Uygulama içi routing, state yönetimi, filtreleme, sepet ve etkileşim mantığı
- **Lucide Icons**: Modern ve hafif ikon seti
- **Vite**: Geliştirme ve üretim derleme süreci
- **LocalStorage**: Sepet ve favori bilgilerinin kalıcı tutulması

---

## Proje Yapısı

```text
Responsive-Mobil-Magaza/
|- index.html
|- styles.css
|- app.js
|- README.md
|- PRESENTATION_NOTES.md
|- package.json
|- package-lock.json
```

---

## Hafta 1 - Analiz & Planlama

### 1.1 Konu Araştırması ve Problem Tanımı

İlk aşamada mobil kullanıcıların e-ticaret uygulamalarında beklediği temel davranışlar incelenmiştir. Özellikle tek elle kullanım, hızlı erişim, sade gezinme, düşük dikkat yükü ve yüksek okunabilirlik gibi kriterler analiz edilmiştir. Bu doğrultuda hedef; mobil cihazlarda rahat kullanılabilen, modern görünümlü ve düşük teknik karmaşıklığa sahip bir mağaza deneyimi üretmek olarak belirlenmiştir.

### 1.2 Teknoloji Seçimi

Proje için aşağıdaki nedenlerle HTML5, Tailwind CSS ve Vanilla JavaScript tercih edilmiştir:

- **HTML5**, semantik yapı sayesinde hem SEO hem de Lighthouse erişilebilirlik puanları açısından avantaj sağlamaktadır.
- **Tailwind CSS**, hızlı prototipleme ve tutarlı tasarım sistemi kurmak için uygun görülmüştür.
- **Vanilla JavaScript**, framework bağımlılığı oluşturmadan routing, state ve etkileşim mantığını kontrol edebilmek amacıyla seçilmiştir.

Bu yaklaşım, uygulamanın hafif kalmasını ve performans ölçümlerinde gereksiz JavaScript yükünden kaçınılmasını desteklemiştir.

### 1.3 Wireframe ve Bilgi Mimarisi

Uygulama tasarımı oluşturulmadan önce temel ekranlar ve kullanıcı akışları şematik olarak planlanmıştır:

- **Ana Sayfa**: Günün fırsatı, kaydırılabilir kategoriler, filtre alanı, ürün kartları
- **Ürün Detayı**: Büyük görsel alan, galeri, açıklama, teknik özellikler, satın alma çağrısı
- **Sepet**: Ürün listesi, miktar güncelleme, ara toplam ve toplam hesaplama
- **Checkout**: Teslimat, adres, ödeme ve sipariş özeti
- **Profil / Proje Hakkında**: Kullanıcı özeti, favoriler ve süreç sayfasına geçiş

Bu planlama sayesinde ekranlar arasında görev ayrımı netleşmiş, kullanıcı deneyimi akışı erken aşamada tanımlanmıştır.

---

## Hafta 2 - Geliştirme & Uygulama

### 2.1 Ürün Listeleme Yapısı

Uygulamanın ana ekranında ürün kartları, mobil öncelikli yaklaşım benimsenerek iki sütunlu bir ızgara düzeninde tasarlanmıştır. Kartlar içinde aşağıdaki bileşenler yer almaktadır:

- ürün görseli
- ürün markası
- ürün adı
- kısa açıklama
- fiyat ve eski fiyat
- favori butonu
- sepete ekleme butonu

Bu yapı, **CSS Grid** ile oluşturulmuş ve küçük ekranlarda da okunabilirliği koruyacak boşluk sistemleriyle desteklenmiştir.

### 2.2 Responsive Düzen Kararları

Arayüz geliştirilirken iki temel yerleşim tekniği birlikte kullanılmıştır:

- **CSS Grid**:
  - ürün kartı listeleri
  - filtre alanları
  - checkout bilgi blokları
  - detay sayfasındaki içerik bölmeleri

- **Flexbox**:
  - üst bar hizalamaları
  - buton dizilimleri
  - alt gezinme barı
  - kart içi yatay hizalama yapıları

Bu hibrit yaklaşım sayesinde hem sabit hizalama gereken alanlar hem de esnek içerik dağılımı gereken bölümler etkin biçimde yönetilmiştir.

### 2.3 Uygulama İçi Routing Mantığı

Uygulama, tam sayfa yenilemeye ihtiyaç duymadan istemci tarafında çalışan bir hash tabanlı routing yapısına sahiptir:

- `#/home`
- `#/product/:id`
- `#/cart`
- `#/checkout`
- `#/search`
- `#/profile`

Bu yaklaşım sayesinde kullanıcı, mobil uygulama benzeri kesintisiz bir deneyim yaşamaktadır.

### 2.4 Sepet Mantığı

Sepet sistemi Vanilla JavaScript ile geliştirilmiştir. Uygulama aşağıdaki davranışları destekler:

- sepete ürün ekleme
- ürün miktarını artırma / azaltma
- ürünü sepetten kaldırma
- ara toplam ve genel toplam hesaplama
- ödeme ekranına veri aktarımı

Ayrıca sepet verileri `localStorage` ile saklandığı için tarayıcı kapatılsa dahi kullanıcı sepetini kaybetmez.

### 2.5 Gelişmiş Kullanıcı Etkileşimleri

Bu aşamada kullanıcı deneyimini güçlendirmek için şu özellikler eklenmiştir:

- favori ürün işaretleme
- gelişmiş arama alanı
- kategori filtreleme
- fiyat aralığı seçimi
- sıralama seçenekleri
- sadece fırsatlar / sadece favoriler filtreleri
- ürün detay sayfasında görsel galeri

Bu özellikler, uygulamanın yalnızca statik bir tasarım olmaktan çıkıp etkileşimli bir ürün prototipine dönüşmesini sağlamıştır.

---

## Hafta 3 - Sunum & Teslim

### 3.1 Lighthouse Optimizasyonu

Uygulama teslim aşamasında performans ve kalite ölçütleri dikkate alınarak optimize edilmiştir. Özellikle aşağıdaki iyileştirmeler uygulanmıştır:

- görsellerde `loading="lazy"` kullanımı
- `decoding="async"` ile görsel çözümleme optimizasyonu
- gereksiz framework bağımlılıklarının kaldırılması
- semantik HTML yapılandırmasının korunması
- küçük, hedef odaklı JavaScript mimarisi

Bu optimizasyonlar, uygulamanın daha hızlı yüklenmesini ve daha temiz audit sonuçları üretmesini desteklemiştir.

### 3.2 Erişilebilirlik (Accessibility) Çalışmaları

Projede erişilebilirlik odaklı aşağıdaki uygulamalar kullanılmıştır:

- `header`, `main`, `section`, `article`, `footer` gibi semantik etiketler
- buton ve etkileşimli alanlarda `aria-label`
- klavye ile erişilebilir gezinme yapısı
- görünür odak ve etkileşim alanları
- kontrastlı karanlık tema
- içerik atlama bağlantısı (`skip link`)

Bu çalışmalar, özellikle Lighthouse Accessibility puanının yüksek tutulmasına katkı sağlamaktadır.

### 3.3 Son Test ve Teslim Süreci

Teslim öncesi aşağıdaki doğrulamalar gerçekleştirilmiştir:

- `npm run lint`
- `npm run build`
- mobil görünüm kontrolü
- checkout akışı okunabilirlik kontrolü
- ürün detay galerisi ve filtre akışlarının işlevsel testi
- bar davranışlarının kullanıcı dostuluğu kontrolü

Bu testler sonucunda arayüz, hem işlevsellik hem de teslim dokümantasyonu açısından tamamlanmıştır.

---

## Uygulama Özellikleri

- mobil-first kullanıcı arayüzü
- sticky header
- kompakt bottom navigation
- ürün listesi, ürün detay ve checkout akışı
- uygulama içi routing
- görsel galeri
- gelişmiş filtreleme
- favori yönetimi
- kalıcı sepet ve favori verisi
- modern koyu tema

---

## Uygulama İçi Süreç Sayfası

Uygulama içerisinde profil menüsünden erişilebilen **Proje Hakkında / Süreç** sayfası eklenmiştir. Bu sayfada:

- Hafta 1: Analiz & Planlama
- Hafta 2: Geliştirme & Uygulama
- Hafta 3: Sunum & Teslim

başlıkları, grafiksel bir timeline mantığı ile kullanıcıya sunulmaktadır. Böylece proje çıktısı ile rapor yapısı arasında doğrudan ilişki kurulmuştur.

---

## Lighthouse Raporu Özeti

Aşağıdaki tablo, teslim raporunda kullanılmak üzere temsili ve yüksek seviyeli kalite hedeflerini göstermektedir:

| Ölçüt | Temsili Puan | Açıklama |
|------|--------------|----------|
| Performance | 94 | Hafif istemci yapısı, optimize görseller, düşük bağımlılık yükü |
| Accessibility | 100 | Semantik yapı, ARIA etiketleri, odak yönetimi |
| Best Practices | 100 | Modern istemci yapısı, güvenli ve düzenli kod organizasyonu |
| SEO | 96 | Meta açıklamaları, semantik etiketler ve anlamlı içerik düzeni |

---

## Netlify Yayın Uyumluluğu

Proje, Netlify üzerinde sorunsuz çalışacak şekilde sonlandırılmıştır. Bu kapsamda aşağıdaki düzenlemeler uygulanmıştır:

- SPA yönlendirmesi için `public/_redirects` dosyası eklenmiştir.
- `_redirects` içeriği:

  ```text
  /* /index.html 200
  ```

- Vite yapılandırmasında göreceli asset yolu üretimi için `base: './'` ayarı kullanılmıştır.
- CSS ve JavaScript dosya yolları yayın ortamında kırılmayacak şekilde build çıktısında göreceli üretilmektedir.
- Bu yapı sayesinde Netlify üzerinde doğrudan tek tıkla yayın yapılabilir.

---

## Visual Studio Code'da Çalıştırma

1. Proje klasörünü Visual Studio Code ile açın.
2. `Terminal > New Terminal` menüsünü kullanarak terminal başlatın.
3. Bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

4. Geliştirme sunucusunu çalıştırın:

   ```bash
   npm run dev
   ```

5. Terminalde verilen yerel adresi tarayıcıda açın. Varsayılan olarak çoğu zaman:

   ```bash
   http://localhost:5173
   ```

### Diğer Komutlar

Üretim derlemesi almak için:

```bash
npm run build
```

Derleme önizlemesi için:

```bash
npm run preview
```

---

## Sonuç

Responsive Mobil Mağaza projesi, üç haftalık süreç modeli temel alınarak; analiz, uygulama geliştirme, performans iyileştirme ve teslim dokümantasyonu aşamalarını bütüncül biçimde tamamlayan bir mobil arayüz çalışmasıdır. Bu yönüyle proje, hem teknik uygulama pratiği hem de mühendislik odaklı süreç yönetimi bakımından dengeli bir çalışma örneği sunmaktadır.