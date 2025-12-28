"use client";

import styles from './Homepage.module.css';

export default function Homepage() {
  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            ⚡ Web3-Powered Predictions
          </div>
          
          <h1 className={styles.heroTitle}>
            Fair, Transparent Prediction Giveaways for Social Creators
          </h1>
          
          <p className={styles.heroSubtitle}>
            Run verifiable prediction contests and leaderboards on X (Twitter). 
            Lock rewards, let followers predict for free, settle results on-chain. 
            Zero gambling. Maximum trust.
          </p>
          
          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>
              Create Giveaway →
            </button>
            <button className={styles.secondaryButton}>
              Join as Participant
            </button>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>10K+</div>
              <div className={styles.statLabel}>Predictions</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>5K+</div>
              <div className={styles.statLabel}>Users</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>$50K+</div>
              <div className={styles.statLabel}>Rewards</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>The Problem</span>
          <h2 className={styles.sectionTitle}>
            Current Prediction Giveaways Are Broken
          </h2>
          <p className={styles.sectionSubtitle}>
            Creators run prediction contests every day, but trust is impossible to establish.
          </p>
        </div>

        <div className={styles.problemGrid}>
          <div className={styles.problemCard}>
            <div className={styles.problemIcon}>💬</div>
            <div className={styles.problemContent}>
              <h3>Chaotic Replies</h3>
              <p>Thousands of predictions buried in tweet replies with no structure</p>
            </div>
          </div>

          <div className={styles.problemCard}>
            <div className={styles.problemIcon}>⏰</div>
            <div className={styles.problemContent}>
              <h3>Disputable Timestamps</h3>
              <p>No way to prove when someone made their prediction</p>
            </div>
          </div>

          <div className={styles.problemCard}>
            <div className={styles.problemIcon}>✋</div>
            <div className={styles.problemContent}>
              <h3>Manual Winner Selection</h3>
              <p>Creators manually scroll through replies to find winners</p>
            </div>
          </div>

          <div className={styles.problemCard}>
            <div className={styles.problemIcon}>⚠️</div>
            <div className={styles.problemContent}>
              <h3>Bias Accusations</h3>
              <p>Followers accuse creators of favoritism or fake winners</p>
            </div>
          </div>

          <div className={styles.problemCard}>
            <div className={styles.problemIcon}>❌</div>
            <div className={styles.problemContent}>
              <h3>Zero Trust</h3>
              <p>No transparent, verifiable way to run a fair contest</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>The Solution</span>
          <h2 className={styles.sectionTitle}>
            ScoreMint: On-Chain Predictions, Automatic Settlement
          </h2>
          <p className={styles.sectionSubtitle}>
            Web3 infrastructure for transparent, fair prediction contests and leaderboards.
          </p>
        </div>

        <div className={styles.solutionGrid}>
          <div className={styles.solutionCard}>
            <div className={styles.solutionHeader}>
              <div className={styles.solutionIcon}>🎯</div>
              <h3>Single Prediction Giveaways</h3>
            </div>
            <div className={styles.solutionFeatures}>
              <div className={styles.featureItem}>Creator locks reward in smart contract</div>
              <div className={styles.featureItem}>Unique link shared on X (Twitter)</div>
              <div className={styles.featureItem}>Followers submit predictions on-chain (free)</div>
              <div className={styles.featureItem}>Oracle confirms final result</div>
              <div className={styles.featureItem}>Earliest correct prediction wins automatically</div>
              <div className={styles.featureItem}>Winner receives reward instantly</div>
            </div>
          </div>

          <div className={styles.solutionCard}>
            <div className={styles.solutionHeader}>
              <div className={styles.solutionIcon}>🏆</div>
              <h3>Leaderboards & Competitions</h3>
            </div>
            <div className={styles.solutionFeatures}>
              <div className={styles.featureItem}>Create leaderboards for tournaments or seasons</div>
              <div className={styles.featureItem}>Participants earn points for correct predictions</div>
              <div className={styles.featureItem}>Scores update automatically after each event</div>
              <div className={styles.featureItem}>Lock reward pool upfront</div>
              <div className={styles.featureItem}>Top scorers win at the end</div>
              <div className={styles.featureItem}>Recurring competitions without manual tracking</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>How It Works</span>
          <h2 className={styles.sectionTitle}>
            Simple for Creators, Free for Participants
          </h2>
        </div>

        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3>Create Event</h3>
              <p>Creator sets up prediction event (match, award show, etc.)</p>
            </div>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>Lock Reward</h3>
              <p>Funds are secured in smart contract</p>
            </div>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3>Share Link</h3>
              <p>Post unique prediction link on X (Twitter)</p>
            </div>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h3>Predict On-Chain</h3>
              <p>Followers submit predictions (free, timestamped)</p>
            </div>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>5</div>
            <div className={styles.stepContent}>
              <h3>Oracle Confirms</h3>
              <p>Trusted oracle reports final result</p>
            </div>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>6</div>
            <div className={styles.stepContent}>
              <h3>Auto Settlement</h3>
              <p>Winner determined and paid instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Web3 Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Why Web3</span>
          <h2 className={styles.sectionTitle}>
            This Cannot Be Done Reliably With Web2
          </h2>
          <p className={styles.sectionSubtitle}>
            Blockchain enables trust, transparency, and automation impossible with traditional tech.
          </p>
        </div>

        <div className={styles.whyWeb3Grid}>
          <div className={styles.web3Card}>
            <div className={styles.web3Icon}>🔒</div>
            <div className={styles.web3Content}>
              <h3>Immutable Timestamps</h3>
              <p>Predictions are recorded on-chain with tamper-proof timestamps</p>
            </div>
          </div>

          <div className={styles.web3Card}>
            <div className={styles.web3Icon}>📊</div>
            <div className={styles.web3Content}>
              <h3>Trustless Scoring</h3>
              <p>Smart contracts calculate scores without human intervention</p>
            </div>
          </div>

          <div className={styles.web3Card}>
            <div className={styles.web3Icon}>💰</div>
            <div className={styles.web3Content}>
              <h3>Automatic Rewards</h3>
              <p>Winners are paid instantly via smart contract execution</p>
            </div>
          </div>

          <div className={styles.web3Card}>
            <div className={styles.web3Icon}>✅</div>
            <div className={styles.web3Content}>
              <h3>Public Verification</h3>
              <p>Anyone can verify the entire contest on the blockchain</p>
            </div>
          </div>

          <div className={styles.web3Card}>
            <div className={styles.web3Icon}>⚖️</div>
            <div className={styles.web3Content}>
              <h3>Creator-Independent Fairness</h3>
              <p>Results are determined by code, not creator discretion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Who It's For</span>
          <h2 className={styles.sectionTitle}>
            Built for Creators and Communities
          </h2>
        </div>

        <div className={styles.audienceGrid}>
          <div className={styles.audienceCard}>
            <div className={styles.audienceIcon}>⚽</div>
            <h3>Football Creators</h3>
            <p>Engage your followers with prediction giveaways</p>
          </div>

          <div className={styles.audienceCard}>
            <div className={styles.audienceIcon}>👥</div>
            <h3>Sports Communities</h3>
            <p>Run fair leaderboards for your fan groups</p>
          </div>

          <div className={styles.audienceCard}>
            <div className={styles.audienceIcon}>🎁</div>
            <h3>Brand Campaigns</h3>
            <p>Create verified fan rewards programs</p>
          </div>

          <div className={styles.audienceCard}>
            <div className={styles.audienceIcon}>🌐</div>
            <h3>Web3 Communities</h3>
            <p>Engage DAOs with transparent contests</p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>What Makes Us Different</span>
          <h2 className={styles.sectionTitle}>
            Proof-of-Prediction, Not Gambling
          </h2>
        </div>

        <div className={styles.differentiatorGrid}>
          <div className={styles.differentiatorCard}>
            <div className={styles.differentiatorHeader}>
              <div className={styles.differentiatorEmoji}>🚫</div>
              <h3>No User Staking</h3>
            </div>
            <p>Participants never risk their own money. This is not betting.</p>
          </div>

          <div className={styles.differentiatorCard}>
            <div className={styles.differentiatorHeader}>
              <div className={styles.differentiatorEmoji}>💝</div>
              <h3>Creator-Funded</h3>
            </div>
            <p>Rewards come from creators, making it safe & inclusive for all.</p>
          </div>

          <div className={styles.differentiatorCard}>
            <div className={styles.differentiatorHeader}>
              <div className={styles.differentiatorEmoji}>⏱️</div>
              <h3>Dispute-Proof Timestamps</h3>
            </div>
            <p>On-chain timestamps eliminate arguments about when predictions were made.</p>
          </div>

          <div className={styles.differentiatorCard}>
            <div className={styles.differentiatorHeader}>
              <div className={styles.differentiatorEmoji}>📈</div>
              <h3>Transparent Scoring</h3>
            </div>
            <p>All scores are calculated on-chain and publicly verifiable.</p>
          </div>

          <div className={styles.differentiatorCard}>
            <div className={styles.differentiatorHeader}>
              <div className={styles.differentiatorEmoji}>🐦</div>
              <h3>Twitter-Native</h3>
            </div>
            <p>Designed to go viral on X (Twitter) where football conversations happen.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <span className={styles.notGamblingBadge}>
            ✓ Proof-of-Prediction, Not Gambling
          </span>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Future Vision</span>
          <h2 className={styles.sectionTitle}>
            Where We're Headed
          </h2>
          <p className={styles.sectionSubtitle}>
            Building the standard infrastructure for fair social prediction contests.
          </p>
        </div>

        <div className={styles.visionGrid}>
          <div className={styles.visionCard}>
            <div className={styles.visionIcon}>🏅</div>
            <div className={styles.visionContent}>
              <h3>Seasonal Leaderboards</h3>
              <p>World Cup, AFCON, EPL, and other major tournaments</p>
            </div>
          </div>

          <div className={styles.visionCard}>
            <div className={styles.visionIcon}>🖼️</div>
            <div className={styles.visionContent}>
              <h3>NFT Badges</h3>
              <p>Collectible achievements for top leaderboard winners</p>
            </div>
          </div>

          <div className={styles.visionCard}>
            <div className={styles.visionIcon}>🤝</div>
            <div className={styles.visionContent}>
              <h3>Brand Sponsorships</h3>
              <p>Sponsored prediction leagues with larger prize pools</p>
            </div>
          </div>

          <div className={styles.visionCard}>
            <div className={styles.visionIcon}>👥</div>
            <div className={styles.visionContent}>
              <h3>Multi-Winner Distributions</h3>
              <p>Reward top 10, top 100, or custom winner tiers</p>
            </div>
          </div>

          <div className={styles.visionCard}>
            <div className={styles.visionIcon}>🌍</div>
            <div className={styles.visionContent}>
              <h3>Beyond Sports</h3>
              <p>Awards shows, esports, trending events, and more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Ready to Launch Your First Prediction Event?</h2>
          <p className={styles.ctaSubtitle}>
            Join creators and communities building trust through transparent, on-chain predictions.
          </p>
          <button className={styles.ctaButton}>
            Get Started Now →
          </button>
        </div>
      </section>
    </div>
  );
}