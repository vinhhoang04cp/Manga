import React from "react";
import '../../assets/styles/components/News/NewsDashboard.css';

/* ---- Helpers ----------------------------------------------------------- */
const StarIcon = ({ filled = false, half = false }) => (
  <svg className="star" viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient id="halfGrad" x1="0" x2="1" y1="0" y2="0">
        <stop offset="50%" stopColor="#ffd700" />
        <stop offset="50%" stopColor="#4a5568" />
      </linearGradient>
    </defs>
    <path
      className={filled ? "star-fill" : half ? "star-half" : "star-empty"}
      d="M12 2.25l2.986 6.05 6.683.972-4.835 4.715 1.142 6.663L12 17.77l-5.976 3.18 1.142-6.663L2.33 9.272l6.684-.972L12 2.25z"
    />
  </svg>
);

const Stars = ({ rating = 0 }) => {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.25 && rating - full < 0.75;
  const total = 5;
  return (
    <div className="stars">
      {Array.from({ length: total }).map((_, i) => {
        const idx = i + 1;
        return (
          <StarIcon
            key={i}
            filled={idx <= full}
            half={idx === full + 1 && hasHalf}
          />
        );
      })}
      <span className="rating-num">{rating}</span>
    </div>
  );
};

/* ---- Mock data (đặt tên/nhãn giống ảnh) ------------------------------- */
const FEATURED = {
  title: "Dorami - Cô em mèo máy đáng yêu, thông minh của Doraemon",
  author: "Mạc Văn Định",
  date: "06/06/2025",
  img: "https://via.placeholder.com/600x280/1a2332/ffffff?text=Dorami",
  blurb: "Trong bộ truyện Doraemon, tác giả Fujiko F. Fujio đã xây dựng hệ..."
};

const MID_CARDS = [
  {
    title: "Mori Ran - Cô bạn gái xinh đẹp, tài năng của Shinichi",
    date: "26/05/2025",
    author: "Mạc Văn Định",
    img: "https://via.placeholder.com/400x225/1a2332/ffffff?text=Mori+Ran",
    desc: "Thám tử lừng danh Conan là bộ truyện có..."
  },
  {
    title: "Top 10 truyện tranh Manhwa hay nhất",
    date: "23/05/2025",
    author: "Mạc Văn Định",
    img: "https://via.placeholder.com/400x225/1a2332/ffffff?text=Manhwa",
    desc: "Manhwa hay còn gọi là truyện tranh Hàn..."
  },
  {
    title: "Top 10 truyện tranh Manga hay nhất",
    date: "23/05/2025",
    author: "Mạc Văn Định",
    img: "https://via.placeholder.com/400x225/1a2332/ffffff?text=Manga",
    desc: "Manga là một thể loại truyện tranh vô cùng..."
  }
];

const TOP_FOLLOW = [
  {
    rank: "01",
    cover: "https://via.placeholder.com/76x96/2d4059/ffffff?text=Cover",
    title: "Nàng Nổi Loạn X Chàng Thợ May",
    chapter: "Chapter 116",
    views: "6.14K lượt xem",
    rating: 2.5,
    time: "2 tháng trước"
  },
  {
    rank: "02",
    cover: "https://via.placeholder.com/76x96/2d4059/ffffff?text=Cover",
    title: "Võ Luyện Đỉnh Phong",
    chapter: "Chapter #4846",
    views: "10K lượt xem",
    rating: 3.3,
    time: "20 giờ trước"
  },
  {
    rank: "03",
    cover: "https://via.placeholder.com/76x96/2d4059/ffffff?text=Cover",
    title: "Đội Quân Doraemon Đặc Biệt",
    chapter: "Chapter #155",
    views: "0 lượt xem",
    rating: 0,
    time: "2 ngày trước"
  },
  {
    rank: "04",
    cover: "https://via.placeholder.com/76x96/2d4059/ffffff?text=Cover",
    title: "Shangri-La Frontier",
    chapter: "Chapter #234",
    views: "28K lượt xem",
    rating: 3.5,
    time: "7 ngày trước"
  },
  {
    rank: "05",
    cover: "https://via.placeholder.com/76x96/2d4059/ffffff?text=Cover",
    title: "A Wonderful New World",
    chapter: "Chapter #262 END",
    views: "0 lượt xem",
    rating: 0,
    time: "9 ngày trước"
  },
  {
    rank: "06",
    cover: "https://via.placeholder.com/76x96/2d4059/ffffff?text=Cover",
    title: "Nguyên Tôn",
    chapter: "Chapter 951",
    views: "3.98K lượt xem",
    rating: 4.6,
    time: "6 tháng trước"
  }
];

const OTHER_NEWS = [
  {
    title: "Sunekichi Honekawa - Người anh họ tài giỏi của Suneo",
    author: "Mạc Văn Định",
    date: "13/06/2025",
    img: "https://via.placeholder.com/120x80/1a2332/ffffff?text=News",
    desc: "Nhắc đến thế giới nhân vật phụ trong Doraemon thì có một cái tên cũng nhận được nhiều sự chú ý..."
  },
  {
    title: "Bà Honekawa - Mẹ của Suneo trong câu chuyện Doraemon",
    author: "Mạc Văn Định", 
    date: "13/06/2025",
    img: "https://via.placeholder.com/120x80/1a2332/ffffff?text=News",
    desc: "Mỗi nhân vật phụ trong Doraemon đều được xây dựng tỉ mỉ, tạo nên một thế giới đa sắc màu..."
  },
  {
    title: "Mẹ của Jaian bà Gouda nghiêm khắc nhưng giàu tình thương",
    author: "Mạc Văn Định",
    date: "13/06/2025", 
    img: "https://via.placeholder.com/120x80/1a2332/ffffff?text=News",
    desc: "Ngoài Nobita và những người bạn thì các bà mẹ trong thế giới Doraemon cũng rất được yêu thích..."
  },
  {
    title: "Kaminari - Ông hàng xóm nóng tính nhưng đầy tình cảm trong Doraemon",
    author: "Mạc Văn Định",
    date: "12/06/2025",
    img: "https://via.placeholder.com/120x80/1a2332/ffffff?text=News", 
    desc: "Sở dĩ Doraemon có thể thu hút hàng triệu người hâm mộ qua bao thời gian không chỉ vì nhóm nhân vật chính..."
  },
  {
    title: "Hoshino Sumire - Ngôi sao tuổi teen tài năng trong Doraemon",
    author: "Mạc Văn Định",
    date: "12/06/2025",
    img: "https://via.placeholder.com/120x80/1a2332/ffffff?text=News",
    desc: "Hoshino Sumire là nhân vật để lại ấn tượng sâu sắc nhờ sự duyên dáng và chiều sâu trong tính cách..."
  },
  {
    title: "Yasuo Tanaka - Cậu nhóc năng động, hoạt bát trong thế giới Doraemon",
    author: "Mạc Văn Định",
    date: "12/06/2025",
    img: "https://via.placeholder.com/120x80/1a2332/ffffff?text=News",
    desc: "Trong Doraemon có nhiều nhân vật phụ góp phần làm phong phú thêm thế giới học đường..."
  },
  {
    title: "Mii-chan cô mèo đáng yêu làm rung động trái tim Doraemon",
    author: "Mạc Văn Định",
    date: "11/06/2025",
    img: "https://via.placeholder.com/120x80/1a2332/ffffff?text=News",
    desc: "Mii-chan là một nhân vật phụ nhỏ bé nhưng cũng chiếm được không ít cảm tình từ khán giả..."
  },
  {
    title: "Minamoto Michiko - Bà mẹ mẫu mực của Shizuka trong Doraemon",
    author: "Mạc Văn Định",
    date: "11/06/2025",
    img: "https://via.placeholder.com/120x80/1a2332/ffffff?text=News",
    desc: "Trong truyện Doraemon, nhân vật phụ không thường xuyên xuất hiện nhưng lại đóng vai trò quan trọng..."
  }
];

const LATEST_UPDATE = [
  {
    title: "Tôi Mạnh Hơn Anh Hùng",
    chapter: "Chapter 86",
    views: "120.82K lượt xem", 
    rating: 4.3,
    time: "2 giờ trước",
    cover: "https://via.placeholder.com/60x80/2d4059/ffffff?text=Cover"
  },
  {
    title: "Người Trái Đất Quả Thật Rất Tàn Ác",
    chapter: "Chapter 336",
    views: "1.76M lượt xem",
    rating: 3.4,
    time: "3 giờ trước",
    cover: "https://via.placeholder.com/60x80/2d4059/ffffff?text=Cover"
  },
  {
    title: "Ta Không Muốn Trùng Sinh Đâu",
    chapter: "Chapter 442", 
    views: "2.16M lượt xem",
    rating: 4.6,
    time: "3 giờ trước",
    cover: "https://via.placeholder.com/60x80/2d4059/ffffff?text=Cover"
  },
  {
    title: "Mỗi Tuần Ta Có Một Nghề Nghiệp Mới",
    chapter: "Chapter #833",
    views: "80.34K lượt xem",
    rating: 4.8,
    time: "20 giờ trước",
    cover: "https://via.placeholder.com/60x80/2d4059/ffffff?text=Cover"
  },
  {
    title: "Ta Có Một Sơn Trại",
    chapter: "Chapter #1207",
    views: "43.08K lượt xem", 
    rating: 4.2,
    time: "20 giờ trước",
    cover: "https://via.placeholder.com/60x80/2d4059/ffffff?text=Cover"
  }
];

/* ---- UI ---------------------------------------------------------------- */
export default function NewsDashboard() {
  return (
    <div className="news-page">
      <div className="news-dashboard">
        {/* Left column: Featured */}
        <section className="col">
          <div className="section-title">
            <div className="bar" />
            <div>
              <h2>TIN TỨC NỔI BẬT</h2>
              <p className="muted">Tin tức được quan tâm</p>
            </div>
          </div>

          <article className="card feature-card">
            <div className="img-wrap ratio-21x9">
              <img src={FEATURED.img} alt={FEATURED.title} />
            </div>
            <div className="card-body">
              <h3 className="card-title">{FEATURED.title}</h3>
              <p className="card-desc">{FEATURED.blurb}</p>
              <div className="meta-row">
                <span className="muted">{FEATURED.author}</span>
                <span className="dot" />
                <span className="muted">{FEATURED.date}</span>
              </div>
            </div>
          </article>
        </section>

        {/* Middle column: two small cards stacked */}
        <section className="col mid">
          {MID_CARDS.slice(0, 2).map((it, idx) => (
            <article className="card small" key={idx}>
              <div className="img-wrap ratio-16x9">
                <img src={it.img} alt={it.title} />
              </div>
              <div className="card-body">
                <div className="meta-top">
                  <span className="muted">{it.author}</span>
                  <span className="dot" />
                  <span className="muted">{it.date}</span>
                </div>
                <h3 className="card-title">{it.title}</h3>
                <p className="card-desc">{it.desc}</p>
              </div>
            </article>
          ))}

          <article className="card small">
            <div className="img-wrap ratio-16x9">
              <img src={MID_CARDS[2].img} alt={MID_CARDS[2].title} />
            </div>
            <div className="card-body">
              <div className="meta-top">
                <span className="muted">{MID_CARDS[2].author}</span>
                <span className="dot" />
                <span className="muted">{MID_CARDS[2].date}</span>
              </div>
              <h3 className="card-title">{MID_CARDS[2].title}</h3>
              <p className="card-desc">{MID_CARDS[2].desc}</p>
            </div>
          </article>
        </section>

        {/* Right column: Top theo dõi */}
        <aside className="col sidebar">
          <div className="section-title right">
            <div>
              <h2>TOP THEO DÕI</h2>
              <p className="muted">Truyện mới được cập nhật.</p>
            </div>
          </div>

          <div className="tabs">
            <button className="tab active">Ngày</button>
            <button className="tab">Tuần</button>
            <button className="tab">Tháng</button>
            <div className="underline" />
          </div>

          <ul className="follow-list">
            {TOP_FOLLOW.map((it, idx) => (
              <li className="follow-item" key={idx}>
                <div className="cover">
                  <img src={it.cover} alt={it.title} />
                </div>

                <div className="follow-info">
                  <a className="follow-title" href="#!">
                    {it.title}
                  </a>
                  <div className="rating-views">
                    <Stars rating={it.rating} />
                    <span className="views-pill">{it.views}</span>
                  </div>
                  <a className="chapter-link" href="#!">
                    {it.chapter}
                  </a>
                  <div className="time muted">{it.time}</div>
                </div>

                <div
                  className={`rank-badge ${
                    idx === 0
                      ? "rank-yellow"
                      : idx === 1
                      ? "rank-orange"
                      : idx === 2
                      ? "rank-blue"
                      : idx === 3
                      ? "rank-navy"
                      : idx === 4
                      ? "rank-purple"
                      : "rank-gray"
                  }`}
                >
                  {it.rank}
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Section TIN TỨC KHÁC và Sidebar - 2 cột layout */}
      <div className="bottom-layout">
        <section className="other-news-section">
          <div className="section-title">
            <div className="bar" />
            <div>
              <h2>TIN TỨC KHÁC</h2>
              <p className="muted">Tin tức mới được cập nhật</p>
            </div>
          </div>
          
          <div className="other-news-grid">
            {OTHER_NEWS.map((news, idx) => (
              <article className="news-item" key={idx}>
                <div className="news-img">
                  <img src={news.img} alt={news.title} />
                </div>
                <div className="news-content">
                  <div className="meta-top">
                    <span className="muted">{news.author}</span>
                    <span className="dot" />
                    <span className="muted">{news.date}</span>
                  </div>
                  <h3 className="news-title">
                    <a href="#!">{news.title}</a>
                  </h3>
                  <p className="news-desc">{news.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Right sidebar with MỚI CẬP NHẬT */}
        <aside className="bottom-sidebar">
          <section className="latest-updates-section">
            <div className="section-title">
              <div className="bar" />
              <div>
                <h2>MỚI CẬP NHẬT</h2>
                <p className="muted">Truyện mới nhất</p>
              </div>
            </div>
            
            <ul className="latest-list">
              {LATEST_UPDATE.map((item, idx) => (
                <li className="latest-item" key={idx}>
                  <div className="latest-cover">
                    <img src={item.cover} alt={item.title} />
                  </div>
                  <div className="latest-info">
                    <a className="latest-title" href="#!">
                      {item.title}
                    </a>
                    <div className="rating-views">
                      <Stars rating={item.rating} />
                      <span className="views-pill">{item.views}</span>
                    </div>
                    <a className="chapter-link" href="#!">
                      {item.chapter}
                    </a>
                    <div className="time muted">{item.time}</div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}