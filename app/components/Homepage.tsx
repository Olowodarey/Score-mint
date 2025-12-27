"use client";

import styles from './Homepage.module.css';

export default function Homepage() {
  const features = [
    {
      icon: "⚽",
      title: "Predict",
      description: "Submit football match predictions on-chain for upcoming games."
    },
    {
      icon: "�",
      title: "Earn Points",
      description: "Get points for correct predictions and climb the rankings."
    },
    {
      icon: "�",
      title: "Win Rewards",
      description: "Compete for prizes in creator-funded challenges."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Connect Wallet",
      description: "Link your wallet to get started"
    },
    {
      number: "2",
      title: "Make Predictions",
      description: "Submit your picks on-chain"
    },
    {
      number: "3",
      title: "Compete & Win",
      description: "Earn points and claim rewards"
    }
  ];

  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            On-Chain Predictions
          </div>
          
          <h1 className={styles.heroTitle}>
            Football Predictions.<br />
            On the Blockchain.
          </h1>
          
          <p className={styles.heroSubtitle}>
            Make predictions on football matches, earn points for accuracy, 
            and compete for rewards. All on-chain, all transparent.
          </p>
          
          <button className={styles.primaryButton}>
            Get Started →
          </button>

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

      {/* Features Section */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>How It Works</h2>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Ready to Play?</h2>
          <p className={styles.ctaSubtitle}>
            Connect your wallet and start making predictions
          </p>
          <button className={styles.ctaButton}>
            Connect Wallet
          </button>
        </div>
      </section>
    </div>
  );
}