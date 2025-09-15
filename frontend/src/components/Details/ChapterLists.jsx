import React, { useMemo, useState } from 'react'
import '../../assets/styles/components/Details/ChapterLists.css'

// Simple star component reused for the sidebar rating
const Star = ({ filled = false }) => (
  <svg
    className={`cl-star ${filled ? 'filled' : ''}`}
    width="14"
    height="14"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.401 8.168L12 18.896l-7.335 3.87 1.401-8.168L.132 9.211l8.2-1.193z" />
  </svg>
)

export default function ChapterLists() {
  // Demo data to mirror the screenshot
  const initialChapters = useMemo(
    () => [
      { id: 1, name: 'Chapter 273.4', updated: '9 tháng trước', views: 4730, uploader: 'Hang truyện' },
      { id: 2, name: 'Chapter 273.3', updated: '9 tháng trước', views: 2721, uploader: 'Hang truyện' },
      { id: 3, name: 'Chapter 272.2', updated: '9 tháng trước', views: 2198, uploader: 'Hang truyện' },
      { id: 4, name: 'Chapter 272.1', updated: '9 tháng trước', views: 2237, uploader: 'Hang truyện' },
      { id: 5, name: 'Chapter 271', updated: '1 năm trước', views: 1554, uploader: 'Hang truyện' },
      { id: 6, name: 'Chapter 270', updated: '1 năm trước', views: 807, uploader: 'Hang truyện' },
      { id: 7, name: 'Chapter 269', updated: '1 năm trước', views: 625, uploader: 'Hang truyện' },
      { id: 8, name: 'Chapter 268', updated: '1 năm trước', views: 591, uploader: 'Hang truyện' },
      { id: 9, name: 'Chapter 267', updated: '1 năm trước', views: 584, uploader: 'Hang truyện' },
      { id: 10, name: 'Chapter 266', updated: '1 năm trước', views: 438, uploader: 'Hang truyện' },
      { id: 11, name: 'Chapter 265', updated: '1 năm trước', views: 396, uploader: 'Hang truyện' },
      { id: 12, name: 'Chapter 264', updated: '1 năm trước', views: 336, uploader: 'Hang truyện' }
    ],
    []
  )

  const [query, setQuery] = useState('')
  const [asc, setAsc] = useState(false) // default desc like screenshot

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const list = initialChapters.filter((c) => c.name.toLowerCase().includes(q))
    return list.sort((a, b) => {
      // Extract chapter numeric for stable sorting, fallback to name
      const na = parseFloat(a.name.replace(/[^0-9.]/g, '')) || 0
      const nb = parseFloat(b.name.replace(/[^0-9.]/g, '')) || 0
      return asc ? na - nb : nb - na
    })
  }, [initialChapters, query, asc])

  // Sidebar data (compact, similar to screenshot structure)
  const related = [
    {
      id: 'r1',
      title: 'Jujutsu Kaisen Modulo',
      cover: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=84&h=112&fit=crop',
      rating: 0,
      views: '7.95K lượt xem',
      chapter: 'Chapter #1',
      time: '5 ngày trước'
    },
    {
      id: 'r2',
      title: 'Bị Phản Bội Bởi Đồng Đội Và Sở Hữu ...',
      cover: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=84&h=112&fit=crop',
      rating: 3.6,
      views: '80.45K lượt xem',
      chapter: 'Chapter 175',
      time: '4 giờ trước'
    },
    {
      id: 'r3',
      title: 'Mùa Hè Hikaru Ra Đi',
      cover: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=84&h=112&fit=crop',
      rating: 0,
      views: '10.05K lượt xem',
      chapter: 'Chapter #32',
      time: '6 ngày trước'
    },
    {
      id: 'r4',
      title: 'Dark Gathering',
      cover: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=84&h=112&fit=crop',
      rating: 2.1,
      views: '40.88K lượt xem',
      chapter: 'Chapter #73',
      time: '5 ngày trước'
    },
    {
      id: 'r5',
      title: 'Thất Hoàng Tử Quỷ Jilbagias',
      cover: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=84&h=112&fit=crop',
      rating: 3.4,
      views: '80K lượt xem',
      chapter: 'Chapter 65',
      time: '4 giờ trước'
    }
  ]

  const renderStars = (value) => {
    const full = Math.floor(value)
    const stars = Array.from({ length: 5 }, (_, i) => i < full)
    return (
      <span className="cl-stars" aria-label={`Đánh giá ${value}`}>
        {stars.map((v, i) => (
          <Star key={i} filled={v} />
        ))}
        <span className="cl-score">{value}</span>
      </span>
    )
  }

  return (
    <section className="chapter-lists">
      <div className="content-wrapper">
        <div className="cl-grid">
          {/* Left: Danh sách chương */}
          <div className="cl-left">
            <div className="cl-header">
              <h2 className="cl-title">DANH SÁCH CHƯƠNG</h2>
              <div className="cl-accent" />
            </div>

            <div className="cl-table">
              <div className="cl-thead">
                <div className="cl-th cl-chap" role="button" onClick={() => setAsc((s) => !s)}>
                  <span>Chap</span>
                  <svg
                    className={`cl-sort ${asc ? 'asc' : 'desc'}`}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M7 14l5-5 5 5H7z" />
                  </svg>
                </div>
                <div className="cl-search">
                  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  </svg>
                  <input
                    className="form-input cl-input"
                    type="text"
                    placeholder="Tìm kiếm"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    aria-label="Tìm kiếm chương"
                  />
                </div>
                <div className="cl-th">Ngày cập nhật</div>
                <div className="cl-th">Lượt xem</div>
                <div className="cl-th">Người đăng</div>
              </div>

              <div className="cl-tbody">
                {filtered.map((c) => (
                  <a key={c.id} className="cl-row" href="#">
                    <div className="cl-td cl-td-name">
                      <span className="cl-book" aria-hidden>
                        <svg width="18" height="18" viewBox="0 0 24 24">
                          <path d="M18 2H6a2 2 0 00-2 2v16a1 1 0 001.447.894L8 20.118l2.553.776A1 1 0 0012 20V4h6a2 2 0 010 4h-6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </span>
                      <span className="cl-name">{c.name}</span>
                    </div>
                    <div className="cl-td">{c.updated}</div>
                    <div className="cl-td">{c.views.toLocaleString('vi-VN')}</div>
                    <div className="cl-td">{c.uploader}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Truyện liên quan */}
          <aside className="cl-right">
            <div className="cl-r-header">
              <div className="cl-r-accent" />
              <h3 className="cl-r-title">TRUYỆN LIÊN QUAN</h3>
              <p className="cl-r-sub">Truyện được mọi người yêu thích.</p>
            </div>

            <ul className="cl-related">
              {related.map((item) => (
                <li key={item.id} className="cl-r-item">
                  <img className="cl-r-cover" src={item.cover} alt={item.title} loading="lazy" />
                  <div className="cl-r-meta">
                    <div className="cl-r-top">
                      <h4 className="cl-r-name">{item.title}</h4>
                      <span className="cl-r-views">{item.views}</span>
                    </div>
                    <div className="cl-r-rating">{renderStars(item.rating)}</div>
                    <div className="cl-r-bottom">
                      <a href="#" className="cl-r-chap">{item.chapter}</a>
                      <span className="cl-r-time">{item.time}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
