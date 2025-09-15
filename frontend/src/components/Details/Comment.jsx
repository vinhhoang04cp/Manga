import React, { useState } from 'react'
import '../../assets/styles/components/Details/Comment.css'
import { topManga } from '../../data/mangaData'
import { renderStars } from '../../utils/helpers.jsx'

export default function Comment() {
  const [activeTab, setActiveTab] = useState('Ngay')

  return (
    <section className="details-comment">
      <div className="content-wrapper">
        <div className="cmt-grid">
          {/* Left: Comments area */}
          <div className="cmt-left">
            <div className="cmt-header">
              <h2 className="cmt-title">BINH LUAN (0)</h2>
            </div>

            <div className="cmt-empty">
              <div className="cmt-mascot" aria-hidden>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="5" y="10" width="14" height="10" rx="2"/>
                  <path d="M8 10V8a4 4 0 018 0v2"/>
                </svg>
              </div>
              <p className="cmt-empty-text">
                Ban can <a href="#" className="link">dang nhap</a> de binh luan.
              </p>
            </div>
          </div>

          {/* Right: Top theo doi */}
          <aside className="cmt-right">
            <div className="cmt-r-header">
              <div className="cmt-r-accent" />
              <h3 className="cmt-r-title">TOP THEO DOI</h3>
              <p className="cmt-r-sub">Truyen moi duoc cap nhat.</p>
            </div>

            <div className="cmt-tabs">
              {['Ngay', 'Tuan', 'Thang'].map((t) => (
                <button
                  key={t}
                  className={`cmt-tab ${activeTab === t ? 'active' : ''}`}
                  onClick={() => setActiveTab(t)}
                >
                  {t}
                </button>
              ))}
            </div>

            <ul className="cmt-top-list">
              {topManga.map((m) => (
                <li key={m.id} className="cmt-top-item">
                  <div className={`cmt-rank rank-${m.rank}`}>{String(m.rank).padStart(2, '0')}</div>
                  <img className="cmt-cover" src={m.image} alt={m.title} />
                  <div className="cmt-meta">
                    <h4 className="cmt-name">{m.title}</h4>
                    <div className="cmt-rating">
                      <div className="stars">{renderStars(m.rating)}</div>
                      <span className="rating-value">{m.rating}</span>
                      <span className="cmt-views">{m.views}</span>
                    </div>
                    <div className="cmt-bottom">
                      <a href="#" className="cmt-chap">{m.chapter}</a>
                      <span className="cmt-time">{m.time}</span>
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

