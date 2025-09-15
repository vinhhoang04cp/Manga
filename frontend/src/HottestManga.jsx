import React, { useMemo, useState } from "react"
import "./App.css"
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import { hottestManga } from "./data/mangaData"
import "./assets/styles/components/Home/Hotlist.css"

// Simple 5-star rating with SVG icons (supports fractional fill)
function StarRating({ value = 0 }) {
  const max = 5
  const stars = []
  for (let i = 1; i <= max; i++) {
    const percent = Math.max(0, Math.min(1, value - (i - 1))) * 100
    stars.push(
      <span key={i} className="star-wrap" aria-hidden>
        <svg viewBox="0 0 24 24" className="star-bg"><path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.401 8.168L12 18.896l-7.335 3.87 1.401-8.168L.132 9.211l8.2-1.193z" /></svg>
        <svg viewBox="0 0 24 24" className="star-fg" style={{ width: percent + '%' }}><path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.401 8.168L12 18.896l-7.335 3.87 1.401-8.168L.132 9.211l8.2-1.193z" /></svg>
      </span>
    )
  }
  return <div className="stars" role="img" aria-label={`Đánh giá ${value}/5`}>{stars}</div>
}

const TABS = [
  { key: "all", label: "ALL" },
  { key: "day", label: "NGÀY" },
  { key: "week", label: "TUẦN" },
  { key: "month", label: "THÁNG" },
]

export default function HottestManga() {
  const [active, setActive] = useState("month")

  // Parse chapter time (vi) into approximate days-ago
  const parseDays = (s) => {
    if (!s || typeof s !== "string") return Number.POSITIVE_INFINITY
    const text = s.toLowerCase()
    const m = text.match(/\d+[\.,]?\d*/)
    const n = m ? parseFloat(m[0].replace(",", ".")) : 0
    const has = (re) => new RegExp(re, "i").test(text)
    if (has("gi.?")) return Math.max(0, n) / 24
    if (has("ng.?y")) return Math.max(0, n)
    if (has("tu.?n")) return Math.max(0, n) * 7
    if (has("th.?ng")) return Math.max(0, n) * 30
    if (has("n.?m")) return Math.max(0, n) * 365
    return Number.POSITIVE_INFINITY
  }

  const itemRecentDays = (item) => {
    const days = (item?.chapters || []).map((c) => parseDays(c?.time))
    return days.length ? Math.min(...days) : Number.POSITIVE_INFINITY
  }

  const thresholdFor = (tab) => {
    switch (tab) {
      case "day":
        return 1
      case "week":
        return 7
      case "month":
        return 120
      default:
        return Infinity
    }
  }

  // Demo: dùng cùng dữ liệu cho mọi tab; có thể thay bằng API/filter thật
  const base = useMemo(() => (Array.isArray(hottestManga) ? hottestManga : []), [])
  const list = useMemo(() => {
    const maxDays = thresholdFor(active)
    if (!isFinite(maxDays)) return base
    return base.filter((m) => itemRecentDays(m) <= maxDays)
  }, [active, base])

  return (
    <div className="app-container">
      <Header />
      <main className="hotlist-main">
        <section className="hotlist-section">
          <div className="container">
            {/* Header */}
            <header className="hotlist-header">
              <div className="title-block">
                <div className="accent" />
                <h1 className="hotlist-title">TRUYỆN HOT NHẤT</h1>
                <p className="hotlist-sub">Danh sách truyện Hot nhất được gợi ý</p>
              </div>

              {/* Tabs */}
              <nav className="hotlist-tabs" role="tablist" aria-label="Bộ lọc thời gian">
                {TABS.map(t => (
                  <button
                    key={t.key}
                    role="tab"
                    aria-selected={active === t.key}
                    className={`tab ${active === t.key ? 'active' : ''}`}
                    onClick={() => setActive(t.key)}
                  >
                    {t.label}
                  </button>
                ))}
              </nav>
            </header>

            {/* Grid */}
            <div className="hotlist-grid">
              {list.map((m, idx) => (
                <article key={m.id ?? idx} className="hotlist-item">
                  <div className="cover">
                    <img src={m.image} alt={m.title} loading="lazy" />
                  </div>
                  <div className="meta">
                    <h3 className="name"><a href="#">{m.title}</a></h3>
                    <div className="rating-row">
                      <StarRating value={Number(m.rating) || 0} />
                      <span className="rating-point">{m.rating}</span>
                    </div>
                    <div className="views-badge" title="Lượt xem">{m.views}</div>
                    <div className="chapters">
                      {(m.chapters || []).slice(0, 2).map((c, i) => (
                        <div key={i} className="chapter-line">
                          <span className="chapter-name">{c?.name}</span>
                          <span className="chapter-time">{c?.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


