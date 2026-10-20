"use client";

import Link from "next/link";
import {SiteHeader,SiteFooter} from "./components/SiteShell";
import styles from "./page.module.css";

const IMAGES: { cabin: string; bee?: string } = {
  cabin: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/857040444.jpg?k=acdd2f16f07678ca2264771065b9f164a5182d791e902f18a4499e2fc84927d3&o=",
  // bee: "/images/imantas-bisu-pieredze.jpg", // Ieliec tikai īstu un lietošanai saskaņotu Imantas foto.
};

export default function ImantasDemo() {
  return (
    <main className={styles.page} id="sakums">
      <SiteHeader/>
      <section className={styles.hero} aria-labelledby="hero-title">
        <figure className={styles.heroImage}>
          {/* Demo: publisks īpašuma foto; pirms oficiālas publicēšanas jāsaņem atļauja. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMAGES.cabin} alt="Imantas guļbaļķu pirtsmāja ar apgaismotu terasi" />
        </figure>
        <div className={styles.container + " " + styles.heroGrid}>
          <div className={styles.heroCopy}>
            <h1 id="hero-title">Atpūta pie jūras Salacgrīvā</h1>
            <p>Pieci vasaras dzīvokļi, guļbaļķu pirtsmāja un bišu pieredze. Aptuveni 250 metru līdz pludmalei.</p>
            <a href="/kontakti#pieprasijums" className={styles.primaryBtn}>Jautāt par pieejamību <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className={styles.stays} id="naktsmitnes"><div className={styles.container}><div className={styles.sectionHead}><h2>Kur palikt Imantās</h2><p>Vasaras dzīvokļi vai pirtsmāja — izvēlieties sev piemērotāko.</p></div><div className={styles.homeOffers}><article className={styles.homeOffer}><span>01 / MAIJS–SEPTEMBRIS</span><h3>Vasaras dzīvokļi</h3><p>Pieci dzīvokļi divās ēkās. Virtuvīte, duša un Wi-Fi.</p><Link className={styles.smallLink} href="/naktsmitnes">Apskatīt naktsmītnes →</Link></article><article className={styles.homeOffer}><span>02 / VISU GADU</span><h3>Guļbaļķu pirtsmāja</h3><p>Atpūta līdz sešiem viesiem ar malkas pirti un terasi.</p><Link className={styles.smallLink} href="/naktsmitnes">Apskatīt pirtsmāju →</Link></article></div></div></section>
      <section className={styles.bee} id="pieredze"><div className={styles.container+" "+styles.beeRow}><h2>Bišu pieredze</h2><p>Bišu saimju iepazīšana, vaska sveču liešana un atpūta uz stropiem. Norise pēc vienošanās.</p><Link className={styles.smallLink} href="/bisu-pieredze">Uzzināt vairāk →</Link></div></section>
      <section className={styles.finalCta}><h2>Atpūta sākas ar vienu jautājumu</h2><p>Noskaidrojiet pieejamību saimniekiem ērtā veidā.</p><Link className={styles.primaryBtn} href="/kontakti#pieprasijums">Jautāt par pieejamību →</Link></section>
      <SiteFooter/>
    </main>
  );
}