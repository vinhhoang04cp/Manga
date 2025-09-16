import { useRef } from 'react'
import './components/Category.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

// Bạn có thể thay mảng này bằng data thật từ API của bạn
const SUGGESTED_MANGA = [
  {
    id: 1,
    title: 'Bị Phản Bội Bởi Đồng Đội Và Sở…',
    rating: 3.6,
    chapter: 'Chapter #12',
    time: '10 giờ trước',
    cover: 'https://placehold.co/360x480/jpg?text=Gacha'
  },
  {
    id: 2,
    title: 'Kỵ Sĩ Chuyển Sinh Bị Lưu Đầy, Trở Nên…',
    rating: 4.0,
    chapter: 'Chapter #12',
    time: '11 giờ trước',
    cover: 'https://placehold.co/360x480/jpg?text=Knight'
  },
  {
    id: 3,
    title: 'Pháp Sư Hồi Phục Bị Đuổi Khỏi Tổ Đ…',
    rating: 4.0,
    chapter: 'Chapter #9',
    time: '12 giờ trước',
    cover: 'https://placehold.co/360x480/jpg?text=Healer'
  },
  {
    id: 4,
    title: 'Beast Tamer - Người Thuần Hóa…',
    rating: 4.0,
    chapter: 'Chapter #5',
    time: '12 giờ trước',
    cover: 'https://placehold.co/360x480/jpg?text=Beast+Tamer'
  },
  {
    id: 5,
    title: 'Ba Chị Em Nhà Mikadono Dễ Đổ…',
    rating: 3.8,
    chapter: 'Chapter #173',
    time: '13 giờ trước',
    cover: 'https://placehold.co/360x480/jpg?text=Mikadono'
  },
  {
    id: 6,
    title: 'Đội Quân Doraemon Đặc Biệt',
    rating: 4.0,
    chapter: 'Chapter #155',
    time: '1 ngày trước',
    cover: 'https://placehold.co/360x480/jpg?text=Doraemon'
  },
  {
    id: 7,
    title: 'Thất Hoàng Tử Quỷ Jilbagias',
    rating: 3.4,
    chapter: 'Chapter 65',
    time: '2 ngày trước',
    cover: 'https://placehold.co/360x480/jpg?text=Jilbagias'
  },
  {
    id: 8,
    title: 'Truyện Thuyết Đất Hứa',
    rating: 3.2,
    chapter: 'Chapter 218',
    time: '2 ngày trước',
    cover: 'https://placehold.co/360x480/jpg?text=Vinland'
  }
]

function App() {
  const railRef = useRef(null)

  const scrollByCard = (dir = 1) => {
    const rail = railRef.current
    if (!rail) return
    const card = rail.querySelector('.manga-card')
    const amount = card ? card.offsetWidth + 24 : 260 // 24 = gap
    rail.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  const renderStars = (rating) => {
    const full = Math.floor(rating)
    const half = rating - full >= 0.5 ? 1 : 0
    const empty = 5 - full - half
    return (
      <>
        {Array.from({ length: full }).map((_, i) => (
          <i key={`f${i}`} className="star full" />
        ))}
        {half ? <i className="star half" /> : null}
        {Array.from({ length: empty }).map((_, i) => (
          <i key={`e${i}`} className="star" />
        ))}
      </>
    )
  }

  return (
    <div className="app-container">
      <Header />

      {/* ==== MAIN: Section MANGA giống ảnh ==== */}
      <main className="main-content">
        <section className="manga-section">
          <div className="section-head">
            <div className="section-titles">
              <h2 className="section-title">MANGA</h2>
              <p className="section-subtitle">Gợi ý theo sở thích của bạn.</p>
            </div>

            <div className="section-actions">
              <a className="see-all" href="#">Xem tất cả</a>
              <div className="nav-btns">
                <button
                  className="nav-btn"
                  aria-label="Previous"
                  onClick={() => scrollByCard(-1)}
                >
                  {/* Chevron Left */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  className="nav-btn"
                  aria-label="Next"
                  onClick={() => scrollByCard(1)}
                >
                  {/* Chevron Right */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="cards-rail" ref={railRef}>
            {SUGGESTED_MANGA.map((m) => (
              <article key={m.id} className="manga-card">
                <div className="cover-wrap">
                  <img src={m.cover} alt={m.title} loading="lazy" />
                </div>

                <h3 className="title" title={m.title}>{m.title}</h3>

                <div className="rating">
                  <span className="stars">{renderStars(m.rating)}</span>
                  <span className="score">{m.rating.toFixed(1)}</span>
                </div>

                <a href="#" className="chapter">{m.chapter}</a>
                <div className="time">{m.time}</div>
              </article>
            ))}
          </div>
        </section>


        <section className="manga-section">
          <div className="section-head">
            <div className="section-titles">
              <h2 className="section-title">MANGA</h2>
              <p className="section-subtitle">Gợi ý theo sở thích của bạn.</p>
            </div>

            <div className="section-actions">
              <a className="see-all" href="#">Xem tất cả</a>
              <div className="nav-btns">
                <button
                  className="nav-btn"
                  aria-label="Previous"
                  onClick={() => scrollByCard(-1)}
                >
                  {/* Chevron Left */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  className="nav-btn"
                  aria-label="Next"
                  onClick={() => scrollByCard(1)}
                >
                  {/* Chevron Right */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="cards-rail" ref={railRef}>
            {SUGGESTED_MANGA.map((m) => (
              <article key={m.id} className="manga-card">
                <div className="cover-wrap">
                  <img src={m.cover} alt={m.title} loading="lazy" />
                </div>

                <h3 className="title" title={m.title}>{m.title}</h3>

                <div className="rating">
                  <span className="stars">{renderStars(m.rating)}</span>
                  <span className="score">{m.rating.toFixed(1)}</span>
                </div>

                <a href="#" className="chapter">{m.chapter}</a>
                <div className="time">{m.time}</div>
              </article>
            ))}
          </div>
        </section>


        <section className="manga-section">
          <div className="section-head">
            <div className="section-titles">
              <h2 className="section-title">MANGA</h2>
              <p className="section-subtitle">Gợi ý theo sở thích của bạn.</p>
            </div>

            <div className="section-actions">
              <a className="see-all" href="#">Xem tất cả</a>
              <div className="nav-btns">
                <button
                  className="nav-btn"
                  aria-label="Previous"
                  onClick={() => scrollByCard(-1)}
                >
                  {/* Chevron Left */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  className="nav-btn"
                  aria-label="Next"
                  onClick={() => scrollByCard(1)}
                >
                  {/* Chevron Right */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="cards-rail" ref={railRef}>
            {SUGGESTED_MANGA.map((m) => (
              <article key={m.id} className="manga-card">
                <div className="cover-wrap">
                  <img src={m.cover} alt={m.title} loading="lazy" />
                </div>

                <h3 className="title" title={m.title}>{m.title}</h3>

                <div className="rating">
                  <span className="stars">{renderStars(m.rating)}</span>
                  <span className="score">{m.rating.toFixed(1)}</span>
                </div>

                <a href="#" className="chapter">{m.chapter}</a>
                <div className="time">{m.time}</div>
              </article>
            ))}
          </div>
        </section>

        
        <section className="manga-section">
          <div className="section-head">
            <div className="section-titles">
              <h2 className="section-title">MANGA</h2>
              <p className="section-subtitle">Gợi ý theo sở thích của bạn.</p>
            </div>

            <div className="section-actions">
              <a className="see-all" href="#">Xem tất cả</a>
              <div className="nav-btns">
                <button
                  className="nav-btn"
                  aria-label="Previous"
                  onClick={() => scrollByCard(-1)}
                >
                  {/* Chevron Left */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  className="nav-btn"
                  aria-label="Next"
                  onClick={() => scrollByCard(1)}
                >
                  {/* Chevron Right */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="cards-rail" ref={railRef}>
            {SUGGESTED_MANGA.map((m) => (
              <article key={m.id} className="manga-card">
                <div className="cover-wrap">
                  <img src={m.cover} alt={m.title} loading="lazy" />
                </div>

                <h3 className="title" title={m.title}>{m.title}</h3>

                <div className="rating">
                  <span className="stars">{renderStars(m.rating)}</span>
                  <span className="score">{m.rating.toFixed(1)}</span>
                </div>

                <a href="#" className="chapter">{m.chapter}</a>
                <div className="time">{m.time}</div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
