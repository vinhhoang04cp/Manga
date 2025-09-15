import React from 'react'
import '../../assets/styles/components/Details/Info.css'

const Star = ({ filled = false }) => (
  <svg
    className={`star ${filled ? 'filled' : ''}`}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.401 8.168L12 18.896l-7.335 3.87 1.401-8.168L.132 9.211l8.2-1.193z" />
  </svg>
)

export default function Info() {
  const tags = ['Supernatural', 'Fantasy', 'Action', 'Shounen', 'Demons']
  const moods = [
    { emoji: '😡', label: 'Tệ', tone: 'bad' },
    { emoji: '🙁', label: 'Hơi tệ', tone: 'poor' },
    { emoji: '😐', label: 'Bình thường', tone: 'normal' },
    { emoji: '🙂', label: 'Hay', tone: 'good' },
    { emoji: '🤩', label: 'Tuyệt vời', tone: 'great' },
  ]

  return (
    <section className="details-info">
      <div className="content-wrapper">
        <div className="breadcrumb">
          <a href="/">Trang Chủ</a>
          <span className="sep">/</span>
          <span className="current">Chú Thuật Hồi Chiến</span>
        </div>

        <div className="info-grid">
          {/* Left: Cover */}
          <aside className="left">
            <div className="cover-card">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=320&h=430&fit=crop&auto=format"
                alt="Bìa truyện Jujutsu Kaisen"
                loading="lazy"
              />
            </div>
            <button className="report-btn" type="button">
              <span className="icon" aria-hidden>!</span>
              Báo cáo lỗi
            </button>
          </aside>

          {/* Middle: Meta */}
          <div className="middle">
            <div className="title-wrap">
              <div className="accent" />
              <h1 className="title">CHÚ THUẬT HỒI CHIẾN</h1>
              <div className="rating">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} filled />
                ))}
                <Star />
                <span className="score">4.2</span>
              </div>
            </div>

            <div className="row-meta">
              <div className="label">Thể loại:</div>
              <div className="value">
                <span className="flag" title="Japan" aria-hidden>
                  🇯🇵
                </span>
                Manga
              </div>
            </div>

            <div className="row-tags">
              <div className="label">Tags:</div>
              <div className="tags">
                {tags.map((t) => (
                  <span key={t} className="tag">#{t}</span>
                ))}
              </div>
            </div>

            <div className="info-table">
              <div className="col">
                <div className="info-item">
                  <span className="item-label">Tình trạng:</span>
                  <span className="item-value">Đang tiến hành</span>
                </div>
                <div className="info-item">
                  <span className="item-label">Cập nhật:</span>
                  <span className="item-value">18h00 23/12/2024</span>
                </div>
              </div>
              <div className="col">
                <div className="info-item">
                  <span className="item-label">Tác giả:</span>
                  <span className="item-value">Akutami Gege</span>
                </div>
                <div className="info-item">
                  <span className="item-label">Lượt xem:</span>
                  <span className="item-value">48.989</span>
                </div>
              </div>
            </div>

            <div className="summary">
              <h3 className="summary-title">
                Tóm tắt nội dung truyện Chú thuật hồi chiến tại HangTruyen
              </h3>
              <p>
                Yuuji Itadori là một thiên tài có tốc độ và sức mạnh, nhưng cậu
                ấy muốn dành thời gian của mình trong Câu lạc bộ Tâm Linh. Một
                ngày sau cái chết của ông mình, anh gặp Megumi Fushiguro, người
                đang tìm kiếm vật thể bị nguyền rủa mà các thành viên CLB đã tìm
                thấy. <a className="read-more" href="#">Đọc Thêm</a>
              </p>
            </div>

            <div className="actions">
              <button className="btn primary">ĐỌC NGAY</button>
              <div className="follow">
                <button className="bookmark" aria-label="Theo dõi">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 2h12a1 1 0 0 1 1 1v19l-7-4-7 4V3a1 1 0 0 1 1-1z" />
                  </svg>
                </button>
                <span className="count">648 lượt theo dõi</span>
              </div>
            </div>
          </div>

          {/* Right: Feedback */}
          <aside className="right">
            <div className="feedback">
              <div className="bubble">
                Cho chúng mình biết cảm nhận của bạn về truyện này nhé!
              </div>
              <div className="ninja" aria-hidden />
              <div className="rating-card">
                {moods.map((m) => (
                  <button key={m.label} className={`mood ${m.tone}`} type="button">
                    <span className="face" aria-hidden>
                      {m.emoji}
                    </span>
                    <span className="label">{m.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
