import React from 'react';

const Player = () => {
  return (
    <div className="player">
      <div className="upper-part">
        <div className="play-icon">
          <svg width="20" height="20" fill="#2992dc" stroke="#2992dc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-play" viewBox="0 0 24 24">
            <defs />
            <path d="M5 3l14 9-14 9V3z" />
          </svg>
        </div>
        <div className="info-area" id="test">
          <div className="song-info" id="song-info-1">
            <div className="title">Bunker</div>
            <div className="sub-line">
              <div className="subtitle">Balthazar</div>
              <div className="time">4.05</div>
            </div>
          </div>
          <div className="song-info" id="song-info-2">
            <div className="title">Words Remain</div>
            <div className="sub-line">
              <div className="subtitle">Moderator</div>
              <div className="time">4.05</div>
            </div>
          </div>
          <div className="song-info" id="song-info-3">
            <div className="title">Falling Out</div>
            <div className="sub-line">
              <div className="subtitle">Otzeki</div>
              <div className="time">4.05</div>
            </div>
          </div>
        </div>
      </div>
      <div className="progress-bar">
        <span className="progress" />
      </div>
    </div>
  );
};

export default Player;
