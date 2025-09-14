import React from 'react';
import { newestComments } from '../../data/mangaData';
import '../../assets/styles/components/Home/NewestComment.css';

const NewestComment = () => {
  return (
    <div className="newest-comment">
      <div className="newest-comment-container">
        
        {/* Left Side - Character Image */}
        <div className="comment-character">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop" 
            alt="Anime Character"
            className="character-image"
          />
        </div>

        {/* Right Side - Comments Section */}
        <div className="comments-section">
          <div className="section-header">
            <h2 className="section-title">BÌNH LUẬN MỚI NHẤT</h2>
          </div>

          <div className="comments-grid">
            <div className="comments-carousel">
              {newestComments.map(comment => (
                <div key={comment.id} className="comment-card">
                  {/* User Info */}
                  <div className="comment-user">
                    <div className="user-avatar">
                      <img src={comment.avatar} alt={comment.username} />
                    </div>
                    <div className="user-details">
                      <span className="username">{comment.username}</span>
                      <span className="time-ago">{comment.timeAgo}</span>
                    </div>
                  </div>

                  {/* Comment Content */}
                  <div className="comment-content">
                    <div className="comment-text">
                      {comment.comment}
                    </div>
                    <div className="manga-thumbnail">
                      <img src={comment.manga.thumbnail} alt={comment.manga.title} />
                    </div>
                  </div>

                  {/* Manga Link */}
                  <div className="manga-link">
                    <a href={`#${comment.manga.title}`}>{comment.manga.title}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewestComment;
