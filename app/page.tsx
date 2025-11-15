import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Law Firm Landing Page Templates</h1>
          <p className={styles.subtitle}>
            Professional, conversion-optimized landing page templates for Personal Injury and Criminal Defense law firms
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Personal Injury Templates</h2>
          <p className={styles.sectionDescription}>
            Designed for compassion, trust, and maximum client conversions in personal injury cases
          </p>

          <div className={styles.templateGrid}>
            <Link href="/templates/pi/template-1" className={styles.templateCard}>
              <div className={styles.templateHeader}>
                <span className={styles.templateNumber}>Template 1</span>
                <span className={styles.templateBadge}>Layout 1</span>
              </div>
              <h3 className={styles.templateTitle}>Compassion & Strength</h3>
              <p className={styles.templateDescription}>
                Attorney photo with integrated contact form. Perfect for solo and small firms building trust through personal connection.
              </p>
              <ul className={styles.templateFeatures}>
                <li>Hero: Attorney Left + Form Right + Top Banner</li>
                <li>Ideal: Solo/small firms (2-5 attorneys)</li>
                <li>Focus: Car accidents, slip & fall, medical malpractice</li>
              </ul>
              <span className={styles.templateLink}>View Template →</span>
            </Link>

            <Link href="/templates/pi/template-2" className={styles.templateCard}>
              <div className={styles.templateHeader}>
                <span className={styles.templateNumber}>Template 2</span>
                <span className={styles.templateBadge}>Layout 2</span>
              </div>
              <h3 className={styles.templateTitle}>Results-Driven Power</h3>
              <p className={styles.templateDescription}>
                Video background with prominent call-to-action. Designed for established firms with impressive case results.
              </p>
              <ul className={styles.templateFeatures}>
                <li>Hero: Video Background + Giant CTA + Achievements</li>
                <li>Ideal: Established firms (5-20 attorneys)</li>
                <li>Focus: Truck accidents, catastrophic injury, wrongful death</li>
              </ul>
              <span className={styles.templateLink}>View Template →</span>
            </Link>

            <Link href="/templates/pi/template-3" className={styles.templateCard}>
              <div className={styles.templateHeader}>
                <span className={styles.templateNumber}>Template 3</span>
                <span className={styles.templateBadge}>Layout 3</span>
              </div>
              <h3 className={styles.templateTitle}>Local Authority</h3>
              <p className={styles.templateDescription}>
                Community-focused layout emphasizing local presence and personal attention to clients.
              </p>
              <ul className={styles.templateFeatures}>
                <li>Hero: Text Left + Attorney Right + Top Banner</li>
                <li>Ideal: Solo/small firms (1-3 attorneys)</li>
                <li>Focus: Local cases, community reputation, accessibility</li>
              </ul>
              <span className={styles.templateLink}>View Template →</span>
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Criminal Defense Templates</h2>
          <p className={styles.sectionDescription}>
            Built for urgency, authority, and immediate client action in criminal defense matters
          </p>

          <div className={styles.templateGrid}>
            <Link href="/templates/cd/template-1" className={styles.templateCard}>
              <div className={styles.templateHeader}>
                <span className={styles.templateNumber}>Template 1</span>
                <span className={styles.templateBadge}>Layout 2</span>
              </div>
              <h3 className={styles.templateTitle}>Emergency Defense 24/7</h3>
              <p className={styles.templateDescription}>
                Urgent video background with pulsing call button. Perfect for firms offering immediate arrest response.
              </p>
              <ul className={styles.templateFeatures}>
                <li>Hero: Urgent Video + Pulsing CTA + 24/7 Emphasis</li>
                <li>Ideal: Solo/small firms (1-4 attorneys)</li>
                <li>Focus: DUI, domestic violence, drug crimes, immediate response</li>
              </ul>
              <span className={styles.templateLink}>View Template →</span>
            </Link>

            <Link href="/templates/cd/template-2" className={styles.templateCard}>
              <div className={styles.templateHeader}>
                <span className={styles.templateNumber}>Template 2</span>
                <span className={styles.templateBadge}>Layout 1</span>
              </div>
              <h3 className={styles.templateTitle}>Former Prosecutor</h3>
              <p className={styles.templateDescription}>
                Professional attorney image with credentials. Highlights prosecutorial experience and trial expertise.
              </p>
              <ul className={styles.templateFeatures}>
                <li>Hero: Attorney Left + Form Right + Credentials</li>
                <li>Ideal: Solo/firms with prosecutor background</li>
                <li>Focus: Serious felonies, white collar, federal crimes</li>
              </ul>
              <span className={styles.templateLink}>View Template →</span>
            </Link>

            <Link href="/templates/cd/template-3" className={styles.templateCard}>
              <div className={styles.templateHeader}>
                <span className={styles.templateNumber}>Template 3</span>
                <span className={styles.templateBadge}>Layout 3</span>
              </div>
              <h3 className={styles.templateTitle}>High-Stakes Authority</h3>
              <p className={styles.templateDescription}>
                Premium layout for multi-attorney firms handling complex, high-profile criminal cases.
              </p>
              <ul className={styles.templateFeatures}>
                <li>Hero: Text Left + Team Photo + Trust Indicators</li>
                <li>Ideal: Multi-attorney firms (5-15 lawyers)</li>
                <li>Focus: Complex cases, appeals, high-profile defense</li>
              </ul>
              <span className={styles.templateLink}>View Template →</span>
            </Link>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>All templates use custom CSS with BEM naming conventions. No Tailwind CSS.</p>
          <p>Optimized for conversions, SEO, and accessibility.</p>
        </footer>
      </div>
    </main>
  )
}
