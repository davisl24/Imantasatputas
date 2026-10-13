"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";

const IMAGES = {
  cabin: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/857040444.jpg?k=acdd2f16f07678ca2264771065b9f164a5182d791e902f18a4499e2fc84927d3&o=",
  kitchen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/857040640.jpg?k=672119c66fd51031dd82cf732e14a0b610ebf0501692d3214e071ceb67c49491&o=",
};

const MAP = "https://www.google.com/maps/search/?api=1&query=P%C4%93rnavas+iela+37%2C+Salacgr%C4%ABva";
const MAP_EMBED = "https://maps.google.com/maps?q=P%C4%93rnavas%20iela%2037%2C%20Salacgr%C4%ABva%2C%20Latvija&z=15&output=embed";
const CABIN_SOURCE = "https://www.booking.com/hotel/lv/imantas-gulbalku-namins-ar-pirti.lv.html";
const APARTMENT_GALLERY = "https://www.booking.com/hotel/lv/pernavas-street-apartment-salacgriva.lv.html";

type Stay = "Vasaras dzīvokļi" | "Pirtsmāja" | "Bišu pieredze";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function ImantasDemo() {
  const [stay, setStay] = useState<Stay>("Vasaras dzīvokļi");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [guests, setGuests] = useState("2");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  function selectStay(value: Stay) {
    setStay(value);
    setFormError("");
    setMenuOpen(false);
    document.getElementById("pieprasijums")?.scrollIntoView({ behavior: "smooth" });
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const count = Number(guests);
    if (!Number.isInteger(count) || count < 1 || (stay === "Pirtsmāja" && count > 6)) {
      setFormError("Lūdzu, pārbaudiet viesu skaitu.");
      return;
    }
    if (stay !== "Bišu pieredze" && (!departure || departure <= arrival)) {
      setFormError("Izbraukšanai jābūt pēc ierašanās datuma.");
      return;
    }
    setFormError("");
    const lines = [
      "Labdien!",
      "",
      "Vēlos noskaidrot pieejamību Imantās.",
      "Atpūtas veids: " + stay,
      "Ierašanās / apmeklējums: " + arrival,
      ...(stay === "Bišu pieredze" ? [] : ["Izbraukšana: " + departure]),
      "Viesu skaits: " + guests,
      "E-pasts atbildei: " + email,
      "",
      "Lūdzu, informējiet par pieejamību un cenu.",
    ];
    // Demo neveic rezervāciju un neglabā personas datus; e-pasts jānosūta pašam lietotājam.
    window.location.href = "mailto:avei6@inbox.lv?subject=" +
      encodeURIComponent("Imantas — pieejamības pieprasījums") +
      "&body=" + encodeURIComponent(lines.join("\n"));
  }

  return (
    <main className={styles.page} id="sakums">
      <div className={styles.demoStrip}>
        Imantas · dizaina priekšskatījums · nav oficiālā mājaslapa
      </div>

      <header className={styles.header}>
        <div className={styles.container + " " + styles.nav}>
          <a className={styles.logo} href="#sakums" onClick={() => setMenuOpen(false)}>
            IMANTAS <span>ATPŪTA SALACGRĪVĀ</span>
          </a>
          <nav className={styles.navLinks} aria-label="Galvenā navigācija">
            <a href="#naktsmitnes">Naktsmītnes</a>
            <a href="#pieredze">Bišu pieredze</a>
            <a href="#vieta">Atrašanās vieta</a>
          </nav>
          <div className={styles.navActions}>
            <a className={styles.navCta} href="#pieprasijums">Jautāt par pieejamību <Arrow diagonal /></a>
            <button type="button" className={styles.menuButton}
              aria-expanded={menuOpen} aria-controls="imantas-mobile-menu"
              aria-label={menuOpen ? "Aizvērt izvēlni" : "Atvērt izvēlni"}
              onClick={() => setMenuOpen(!menuOpen)}>
              <span /><span />
            </button>
          </div>
        </div>
        {menuOpen && <nav id="imantas-mobile-menu" className={styles.mobileLinks} aria-label="Mobilā navigācija">
          <a onClick={() => setMenuOpen(false)} href="#naktsmitnes">Naktsmītnes</a>
          <a onClick={() => setMenuOpen(false)} href="#pieredze">Bišu pieredze</a>
          <a onClick={() => setMenuOpen(false)} href="#vieta">Atrašanās vieta</a>
        </nav>}
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.container + " " + styles.heroGrid}>
          <div className={styles.heroCopy}>
            <h1 id="hero-title">Atpūta pie jūras Salacgrīvā</h1>
            <p>Imantās pieejami pieci vasaras dzīvokļi un guļbaļķu pirtsmāja. Līdz pludmalei ir aptuveni 250 metri, un pēc vienošanās var iepazīt arī bišu saimes.</p>
            <a href="#pieprasijums" className={styles.primaryBtn}>Jautāt par pieejamību <Arrow /></a>
          </div>
          <figure className={styles.heroImage}>
            {/* Autentisks publiskais Imantas foto; lietošanas atļauja pirms publicēšanas jāsaskaņo. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMAGES.cabin} alt="Imantas guļbaļķu pirtsmāja ar apgaismotu terasi" />
          </figure>
        </div>
      </section>

      <section className={styles.stays} id="naktsmitnes" aria-labelledby="stays-title">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 id="stays-title">Kur palikt Imantās</h2>
            <p>Vasaras dzīvokļi vai pirtsmāja — izvēlieties sev piemērotāko.</p>
          </div>

          <article className={styles.apartment}>
            <div className={styles.apartmentCopy}>
              <h3>Vasaras dzīvokļi</h3>
              <p className={styles.description}>Pieci dzīvokļi divās ēkās, piemēroti pāriem, ģimenēm un nelielām kompānijām.</p>
              <div className={styles.facts}>
                <span>Maijs–septembris</span>
                <span>Virtuvīte, duša un Wi-Fi</span>
              </div>
              <button className={styles.smallLink} onClick={() => selectStay("Vasaras dzīvokļi")} type="button">
                Jautāt par dzīvokli <Arrow />
              </button>
            </div>
            <a className={styles.apartmentGallery} href={APARTMENT_GALLERY} target="_blank" rel="noopener noreferrer" aria-label="Apskatīt īstās Imantas dzīvokļu fotogrāfijas Booking.com">
              <span className={styles.galleryTitle}>Dzīvokļu fotogrāfijas</span>
              <span className={styles.galleryDescription}>Interjera attēlus var apskatīt Imantas publiskajā naktsmītnes profilā.</span>
              <span className={styles.galleryAction}>Atvērt foto galeriju <Arrow diagonal /></span>
            </a>
          </article>

          <article className={styles.sauna}>
            <figure className={styles.saunaImage}>
              {/* Attēlā redzama pirtsmājas virtuve, nevis vasaras dzīvoklis. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMAGES.kitchen} loading="lazy" alt="Imantas pirtsmājas koka interjers ar virtuves zonu" />
            </figure>
            <div className={styles.saunaContent}>
              <h3>Guļbaļķu pirtsmāja</h3>
              <p className={styles.description}>Atpūta līdz sešiem viesiem. Malkas pirts, virtuve un terase. Kubls pieejams papildus.</p>
              <div className={styles.facts}><span>Visu gadu</span><span>Līdz 6 viesiem</span><span>Malkas pirts</span></div>
              <button className={styles.smallLink} onClick={() => selectStay("Pirtsmāja")} type="button">
                Jautāt par pirtsmāju <Arrow />
              </button>
            </div>
          </article>
          <p className={styles.photoDisclaimer}>Pirtsmājas foto: <a href={CABIN_SOURCE} target="_blank" rel="noopener noreferrer">publiskais naktsmītnes profils</a>. Lietošanas tiesības pirms publicēšanas jāsaskaņo.</p>
        </div>
      </section>

      <section className={styles.bee} id="pieredze" aria-labelledby="bee-title">
        <div className={styles.container + " " + styles.beeRow}>
          <h2 id="bee-title">Bišu pieredze</h2>
          <p>Bišu saimju iepazīšana, vaska sveču liešana un atpūta uz stropiem. Norisi saskaņo ar saimniekiem.</p>
          <button type="button" className={styles.smallLink} onClick={() => selectStay("Bišu pieredze")}>Jautāt par iespējām <Arrow /></button>
        </div>
      </section>

      <section className={styles.inquiry} id="pieprasijums" aria-labelledby="inquiry-title">
        <div className={styles.container + " " + styles.requestGrid}>
          <div className={styles.requestHead}>
            <h2 id="inquiry-title">Noskaidrojiet pieejamību</h2>
            <p>Izvēlieties naktsmītni un datumus. Sagatavosim e-pastu saimniekiem — rezervācija netiek apstiprināta automātiski.</p>
            <a className={styles.phone} href="tel:+37129435752">+371 29 435 752 <Arrow diagonal /></a>
          </div>

          <form className={styles.requestForm} onSubmit={onSubmit}>
            <div className={styles.fields}>
              <div className={styles.field + " " + styles.spanFull}>
                <label htmlFor="stay">Atpūtas veids</label>
                <select id="stay" value={stay} onChange={e => { setStay(e.target.value as Stay); setFormError(""); }}>
                  <option>Vasaras dzīvokļi</option><option>Pirtsmāja</option><option>Bišu pieredze</option>
                </select>
              </div>
              <div className={styles.field}>
                <label htmlFor="arrival">{stay === "Bišu pieredze" ? "Apmeklējuma datums" : "Ierašanās"}</label>
                <input id="arrival" type="date" required value={arrival} onChange={e => setArrival(e.target.value)} />
              </div>
              {stay !== "Bišu pieredze" && <div className={styles.field}>
                <label htmlFor="departure">Izbraukšana</label>
                <input id="departure" type="date" min={arrival || undefined} required value={departure} onChange={e => setDeparture(e.target.value)} />
              </div>}
              <div className={styles.field}>
                <label htmlFor="guests">Viesu skaits</label>
                <input id="guests" type="number" required min={1} max={stay === "Pirtsmāja" ? 6 : undefined}
                  value={guests} onChange={e => setGuests(e.target.value)} />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">E-pasts atbildei</label>
                <input id="email" type="email" autoComplete="email" required placeholder="epasts@piemers.lv"
                  value={email} onChange={e => setEmail(e.target.value)} />
              </div>
            </div>
            {formError && <p className={styles.formError} role="alert">{formError}</p>}
            <div className={styles.formAction}>
              <p>Demo: pieejamība netiek pārbaudīta. E-pastu nosūtīsiet pats.</p>
              <button className={styles.primaryBtn} type="submit">Sagatavot e-pastu <Arrow /></button>
            </div>
          </form>
        </div>
      </section>

      <section className={styles.location} id="vieta" aria-labelledby="location-title">
        <div className={styles.container + " " + styles.locationGrid}>
          <div>
            <h2 id="location-title">Netālu no jūras</h2>
            <p>Pērnavas iela 37, Salacgrīva. Aptuveni 250 m līdz pludmalei.</p>
            <a href={MAP} target="_blank" rel="noopener noreferrer" className={styles.smallLink}>Atvērt maršrutu Google Maps <Arrow diagonal /></a>
          </div>
          <div className={styles.map}>
            <iframe title="Imantas atrašanās vieta — Pērnavas iela 37, Salacgrīva" src={MAP_EMBED}
              loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container + " " + styles.footerRow}>
          <div><div className={styles.footerLogo}>IMANTAS</div><p>Atpūta pie jūras, Salacgrīvā</p></div>
          <div><a href="tel:+37129435752">+371 29 435 752</a><p>Neoficiāls dizaina priekšskatījums</p></div>
        </div>
      </footer>
    </main>
  );
}