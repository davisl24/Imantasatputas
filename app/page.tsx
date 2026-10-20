"use client";

import Link from "next/link";
import {SiteHeader,SiteFooter} from "./components/SiteShell";
import styles from "./page.module.css";
import {FeatureIcon} from "./components/FeatureIcon";

export default function ImantasDemo() {
  return (
    <main className={styles.page} id="sakums">
      <SiteHeader/>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.container + " " + styles.heroGrid}>
          <div className={styles.heroCopy}>
            <h1 id="hero-title">Atpūta pie jūras Salacgrīvā</h1>
            <p>Pieci vasaras dzīvokļi, guļbaļķu pirtsmāja un bišu pieredze. Aptuveni 250 metru līdz pludmalei.</p>
            <a href="/kontakti#pieprasijums" className={styles.primaryBtn}>Jautāt par pieejamību <span aria-hidden="true">→</span></a>
          </div><div className={styles.heroDemoPhoto} role="note"><span>Vieta Imantas foto</span><p>Demo: šeit būs saimnieku apstiprināts naktsmītnes vai apkārtnes attēls.</p></div>
        </div>
      </section>

      <section className={styles.stays} id="naktsmitnes"><div className={styles.container}><div className={styles.sectionHead}><h2>Kur palikt Imantās</h2><p>Vasaras dzīvokļi vai pirtsmāja — izvēlieties sev piemērotāko.</p></div><div className={styles.homeOffers}><article className={styles.homeOffer}><span className={styles.seasonInfo}><span aria-hidden="true">☀</span> Maijs–septembris</span><h3>Vasaras dzīvokļi</h3><p>Pieci dzīvokļi divās ēkās, piemēroti mierīgai atpūtai pie jūras.</p><div className={styles.amenityList}><span><FeatureIcon name="utensils"/> Virtuvīte</span><span><FeatureIcon name="home"/> Duša</span><span><FeatureIcon name="wifi"/> Wi-Fi</span></div><div className={styles.offerPhoto}><span>Dzīvokļu foto vieta</span><small>Demo · īsts interjera attēls vēlāk</small></div><Link className={styles.smallLink} href="/naktsmitnes">Apskatīt naktsmītnes →</Link></article><article className={styles.homeOffer}><span className={styles.seasonInfo}><span aria-hidden="true">◷</span> Visu gadu</span><h3>Guļbaļķu pirtsmāja</h3><p>Atpūta līdz sešiem viesiem ar malkas pirti un terasi.</p><div className={styles.amenityList}><span><FeatureIcon name="users"/> Līdz 6 viesiem</span><span><FeatureIcon name="flame"/> Malkas pirts</span><span><FeatureIcon name="home"/> Terase</span></div><div className={styles.offerPhoto}><span>Pirtsmājas foto vieta</span><small>Demo · īsts pirtsmājas attēls vēlāk</small></div><Link className={styles.smallLink} href="/naktsmitnes">Apskatīt pirtsmāju →</Link></article></div></div></section>
      <section className={styles.bee} id="pieredze"><div className={styles.container+" "+styles.beeRow}><h2>Bišu pieredze</h2><p>Bišu saimju iepazīšana, vaska sveču liešana un atpūta uz stropiem. Norise pēc vienošanās.</p><Link className={styles.smallLink} href="/bisu-pieredze">Uzzināt vairāk →</Link></div></section>
      <section className={styles.finalCta}><h2>Atpūta sākas ar vienu jautājumu</h2><p>Noskaidrojiet pieejamību saimniekiem ērtā veidā.</p><Link className={styles.primaryBtn} href="/kontakti#pieprasijums">Jautāt par pieejamību →</Link></section>
      <SiteFooter/>
    </main>
  );
}