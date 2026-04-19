import './App.css'

const weeks = [
  {
    number: '1',
    label: 'Hafta 1',
    title: 'Analiz & Planlama',
    theme: 'teal',
    items: [
      'Konu arastirmasi ve kapsam belirleme',
      'Kullanilacak arac ve teknolojilerin secimi',
      'Wireframe / akis diyagrami / is modeli taslagi',
      'Hafta sonu: Danisman onayi',
    ],
  },
  {
    number: '2',
    label: 'Hafta 2',
    title: 'Gelistirme & Uygulama',
    theme: 'purple',
    items: [
      'Asil urunun / analizin / uygulamanin gelistirilmesi',
      'Ara kontrol: Ilerleme paylasimi',
      'Testler ve gozden gecirme',
      'Hata duzeltme ve iyilestirme',
    ],
  },
  {
    number: '3',
    label: 'Hafta 3',
    title: 'Sunum & Teslim',
    theme: 'orange',
    items: [
      'Rapor / dokumantasyon yazimi',
      'Sunum dosyasinin hazirlanmasi',
      'Canli sinif sunumu (5-8 dk)',
      'Peer review ve degerlendirme',
    ],
  },
]

const phases = [
  'H1: Rol belirleme + arastirma + tasarim',
  'H2: Gelistirme + ara kontrol',
  'H3: Entegrasyon + test + sunum',
]

const scoring = [
  'Teknik %35',
  'UX %20',
  'Sunum %20',
  'Ekip Katkisi %25',
]

const stack = ['HTML/CSS', 'Tailwind', 'Lighthouse']

function App() {
  return (
    <div className="app-shell">
      <header className="page-header">
        <div>
          <p className="eyebrow">Mobil & Modern</p>
          <h1>Responsive Mobil Magaza</h1>
          <p className="intro-text">
            Mobile-first tasarim; urun listesi, detay sayfasi ve sepet
            ekranlarini CSS Grid/Flex ile tum cihazlara uyarlayan proje plani.
          </p>
        </div>
        <div className="header-note">Cikti: Calisan site + Lighthouse skoru + cihaz testleri</div>
      </header>

      <main className="page-grid">
        <section className="project-card" aria-label="Proje ozeti karti">
          <div className="project-card__inner">
            <p className="project-badge">Mobil &amp; Modern</p>
            <h2>Responsive Mobil Magaza</h2>
            <p className="project-copy">
              Mobile-first tasarim: urun listesi, detay sayfasi ve sepet
              ekranlarini CSS Grid/Flex ile tum cihazlara uyarla.
            </p>

            <div className="stack-row" aria-label="Kullanilan teknolojiler">
              {stack.map((item) => (
                <span key={item} className="stack-pill">
                  {item}
                </span>
              ))}
            </div>

            <p className="project-output">
              Cikti: Calisan site + Lighthouse skoru + cihaz testleri
            </p>
          </div>
        </section>

        <section className="timeline-section" aria-labelledby="timeline-heading">
          <div className="timeline-header">
            <h2 id="timeline-heading">3 Haftalik Proje Takvimi</h2>
            <p>Tum projeler icin ortak surec yapisi</p>
          </div>

          <div className="timeline-grid">
            {weeks.map((week) => (
              <article key={week.number} className={`week-card week-card--${week.theme}`}>
                <div className="week-card__topline" aria-hidden="true"></div>
                <div className="week-number">{week.number}</div>
                <p className="week-label">{week.label}</p>
                <h3>{week.title}</h3>
                <ul className="week-list">
                  {week.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>

      <section className="phase-strip" aria-label="Asama takibi">
        {phases.map((phase) => (
          <article key={phase} className="phase-item">
            <span className="phase-dot" aria-hidden="true"></span>
            <p>{phase}</p>
          </article>
        ))}
      </section>

      <section className="score-strip" aria-label="Degerlendirme olcutleri">
        <strong>Degerlendirme:</strong>
        {scoring.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>
    </div>
  )
}

export default App
