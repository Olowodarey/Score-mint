"use client";

import React, { useState } from 'react';
import styles from './Profile.module.css';

interface UserStats {
  eventsWon: number;
  totalPredictions: number;
  points: number;
  winRate: number;
  currentStreak: number;
  rank: number;
}

interface Event {
  id: string;
  name: string;
  date: string;
  result: 'won' | 'lost' | 'pending';
  prediction: string;
  points: number;
}

const Profile = () => {
  // Mock data - in production, this would come from blockchain/API
  const [userStats] = useState<UserStats>({
    eventsWon: 12,
    totalPredictions: 45,
    points: 1580,
    winRate: 26.7,
    currentStreak: 3,
    rank: 127
  });

  const [recentEvents] = useState<Event[]>([
    {
      id: '1',
      name: 'Man City vs Arsenal',
      date: '2025-12-28',
      result: 'won',
      prediction: 'Man City 2-1',
      points: 150
    },
    {
      id: '2',
      name: 'Barcelona vs Real Madrid',
      date: '2025-12-25',
      result: 'won',
      prediction: 'Barcelona 3-2',
      points: 200
    },
    {
      id: '3',
      name: 'Liverpool vs Chelsea',
      date: '2025-12-22',
      result: 'won',
      prediction: 'Liverpool 1-0',
      points: 120
    },
    {
      id: '4',
      name: 'PSG vs Bayern',
      date: '2025-12-20',
      result: 'lost',
      prediction: 'PSG 2-2',
      points: 0
    },
    {
      id: '5',
      name: 'Juventus vs Milan',
      date: '2025-12-18',
      result: 'lost',
      prediction: 'Milan 2-1',
      points: 0
    }
  ]);

  const [activeTab, setActiveTab] = useState<'overview' | 'history'>('overview');

  return (
    <div className={styles.profileContainer}>
      {/* Header Section */}
      <div className={styles.profileHeader}>
        <div className={styles.avatarSection}>
          <div className={styles.avatar}>
            <span className={styles.avatarText}>👤</span>
          </div>
          <div className={styles.userInfo}>
            <h1 className={styles.userName}>Prediction Master</h1>
            <p className={styles.userAddress}>0x742d...5f8a</p>
          </div>
        </div>
        
        <div className={styles.rankBadge}>
          <span className={styles.rankLabel}>Global Rank</span>
          <span className={styles.rankValue}>#{userStats.rank}</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>🏆</div>
          <div className={styles.statContent}>
            <div className={styles.statValue}>{userStats.eventsWon}</div>
            <div className={styles.statLabel}>Events Won</div>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>🎯</div>
          <div className={styles.statContent}>
            <div className={styles.statValue}>{userStats.totalPredictions}</div>
            <div className={styles.statLabel}>Total Predictions</div>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>⭐</div>
          <div className={styles.statContent}>
            <div className={styles.statValue}>{userStats.points.toLocaleString()}</div>
            <div className={styles.statLabel}>Total Points</div>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>📈</div>
          <div className={styles.statContent}>
            <div className={styles.statValue}>{userStats.winRate}%</div>
            <div className={styles.statLabel}>Win Rate</div>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>🔥</div>
          <div className={styles.statContent}>
            <div className={styles.statValue}>{userStats.currentStreak}</div>
            <div className={styles.statLabel}>Current Streak</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'overview' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'history' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('history')}
        >
          Prediction History
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className={styles.overviewSection}>
          <div className={styles.performanceCard}>
            <h3 className={styles.cardTitle}>Performance Overview</h3>
            <div className={styles.performanceMetrics}>
              <div className={styles.metricRow}>
                <span className={styles.metricLabel}>Predictions Made</span>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill}
                    style={{ width: `${(userStats.totalPredictions / 100) * 100}%` }}
                  />
                </div>
                <span className={styles.metricValue}>{userStats.totalPredictions}</span>
              </div>
              <div className={styles.metricRow}>
                <span className={styles.metricLabel}>Events Won</span>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill}
                    style={{ width: `${(userStats.eventsWon / userStats.totalPredictions) * 100}%` }}
                  />
                </div>
                <span className={styles.metricValue}>{userStats.eventsWon}</span>
              </div>
              <div className={styles.metricRow}>
                <span className={styles.metricLabel}>Win Rate</span>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill}
                    style={{ width: `${userStats.winRate}%` }}
                  />
                </div>
                <span className={styles.metricValue}>{userStats.winRate}%</span>
              </div>
            </div>
          </div>

          <div className={styles.achievementsCard}>
            <h3 className={styles.cardTitle}>Achievements</h3>
            <div className={styles.achievementsList}>
              <div className={styles.achievement}>
                <span className={styles.achievementIcon}>🎖️</span>
                <div className={styles.achievementInfo}>
                  <div className={styles.achievementName}>First Win</div>
                  <div className={styles.achievementDesc}>Win your first prediction</div>
                </div>
                <span className={styles.achievementBadge}>Unlocked</span>
              </div>
              <div className={styles.achievement}>
                <span className={styles.achievementIcon}>🔥</span>
                <div className={styles.achievementInfo}>
                  <div className={styles.achievementName}>Hot Streak</div>
                  <div className={styles.achievementDesc}>Win 3 predictions in a row</div>
                </div>
                <span className={styles.achievementBadge}>Unlocked</span>
              </div>
              <div className={styles.achievement}>
                <span className={styles.achievementIcon}>💯</span>
                <div className={styles.achievementInfo}>
                  <div className={styles.achievementName}>Century</div>
                  <div className={styles.achievementDesc}>Make 100 predictions</div>
                </div>
                <span className={`${styles.achievementBadge} ${styles.locked}`}>Locked</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <div className={styles.historySection}>
          <div className={styles.historyHeader}>
            <h3 className={styles.cardTitle}>Recent Predictions</h3>
            <div className={styles.filterButtons}>
              <button className={styles.filterButton}>All</button>
              <button className={styles.filterButton}>Won</button>
              <button className={styles.filterButton}>Lost</button>
            </div>
          </div>
          
          <div className={styles.eventsList}>
            {recentEvents.map((event) => (
              <div key={event.id} className={styles.eventCard}>
                <div className={styles.eventHeader}>
                  <div className={styles.eventInfo}>
                    <h4 className={styles.eventName}>{event.name}</h4>
                    <p className={styles.eventDate}>{new Date(event.date).toLocaleDateString()}</p>
                  </div>
                  <div className={`${styles.resultBadge} ${styles[event.result]}`}>
                    {event.result === 'won' && '✓ Won'}
                    {event.result === 'lost' && '× Lost'}
                    {event.result === 'pending' && '⏳ Pending'}
                  </div>
                </div>
                <div className={styles.eventDetails}>
                  <div className={styles.eventPrediction}>
                    <span className={styles.predictionLabel}>Your Prediction:</span>
                    <span className={styles.predictionValue}>{event.prediction}</span>
                  </div>
                  <div className={styles.eventPoints}>
                    <span className={styles.pointsValue}>
                      {event.result === 'won' ? '+' : ''}{event.points} pts
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;