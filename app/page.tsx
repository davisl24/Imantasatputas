"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";

const IMAGES = {
  cabin: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/857040444.jpg?k=acdd2f16f07678ca2264771065b9f164a5182d791e902f18a4499e2fc84927d3&o=",
  kitchen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/857040640.jpg?k=672119c66fd51031dd82cf732e14a0b610ebf0501692d3214e071ceb67c49491&o=",
};

const MAP = "https://www.google.com/maps/search/?api=1&query=P%C4%93rnavas+iela+37%2C+Salacgr%C4%ABva";
const MAP_EMBED = "https://maps.google.com/maps?q=P%C4%93rnavas%20iela%2037%2C%20Salacgr%C4%ABva%2C%20Latvija&z=15&output=embed";
const SOURCE_CABIN = "https://www.booking.com/hotel/lv/imantas-gulbalku-namins-ar-pirti.lv.html";

type Stay = "Vasaras dzīvokļi" | "Pirtsmāja" | "Bišu pieredze";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function ImantasDemo() {
  const [stay, setStay] = useState<Stay>("Vasaras dzīvokļi");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  function chooseStay(value: Stay) {
    setStay(value);
    setFormError("");
    document.getElementById("pieprasijums")?.scrollIntoView({ behavior: "smooth" });
  }

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (stay !== "Bišu pieredze" && (!departure || departure <= arrival)) {
      setFormError("Lūdzu, izvēlieties izbraukšanas datumu pēc ierašanās datuma.");
      return;
    }
    setFormError("");
    const content = [
      "Labdien!",
      "",
      "Vēlos noskaidrot pieejamību saimniecībā Imantas.",
      "",
      "Interesē: " + stay,
      "Vēlamais datums: " + arrival,
      ...(stay === "Bišu pieredze" ? [] : ["Izbraukšana: " + departure]),
      "Viesu skaits: " + guests,
      "Vārds: " + name,
      "Atbildes e-pasts: " + email,
      ...(message.trim() ? ["", "Papildu informācija:", message.trim()] : []),
      "",
      "Lūdzu, apstipriniet pieejamību un cenu.",
    ].join("\n");
    const subject = encodeURIComponent("Imantas – pieprasījums par " + stay);
    const body = encodeURIComponent(content);
    // Atver tikai e-pasta klientu; pati demonstrācija datus nesūta un neglabā.
    window.location.href = "mailto:avei6@inbox.lv?subject=" + subject + "&body=" + body;
  }

  return (
    <main className={styles.page} id="sakums">
      <div className={styles.demoBar}>
        <span className={styles.demoDot} />
        Dizaina priekšskatījums · nav oficiālā mājaslapa
      </div>

      <div className={styles.navigationWrap}>
        <header className={styles.navigation}>
          <a href="#sakums" className={styles.brand} aria-label="Imantas — sākums" onClick={() => setMenuOpen(false)}>
            <span className={styles.brandName}>IMANTAS</span>
            <span className={styles.brandSubtitle}>ATPŪTA SALACGRĪVĀ</span>
          </a>
          <nav className={styles.desktopLinks} aria-label="Galvenā navigācija">
            <a href="#naktsmitnes">Naktsmītnes</a>
            <a href="#pieredze">Bišu pieredze</a>
            <a href="#vieta">Atrašanās vieta</a>
          </nav>
          <a href="#pieprasijums" className={styles.navCta}>Jautāt par pieejamību <Arrow diagonal /></a>
          <button type="button" className={styles.mobileMenuToggle} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Aizvērt izvēlni" : "Atvērt izvēlni"} aria-expanded={menuOpen}>
            <span /> <span />
          </button>
        </header>
        {menuOpen && (
          <nav className={styles.mobileLinks} aria-label="Mobilā navigācija">
            <a href="#naktsmitnes" onClick={() => setMenuOpen(false)}>Naktsmītnes</a>
            <a href="#pieredze" onClick={() => setMenuOpen(false)}>Bišu pieredze</a>
            <a href="#vieta" onClick={() => setMenuOpen(false)}>Atrašanās vieta</a>
            <a href="#pieprasijums" onClick={() => setMenuOpen(false)}>Jautāt par pieejamību <Arrow /></a>
          </nav>
        )}
      </div>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.locationLine}>Salacgrīva · netālu no jūras</p>
            <h1 id="hero-title">Atpūta <em>pie jūras</em> Salacgrīvā</h1>
            <p>Vasaras dzīvokļi, guļbaļķu pirtsmāja un bišu pieredze dažu minūšu gājienā no pludmales.</p>
            <a href="#naktsmitnes" className={styles.buttonDark}>Apskatīt atpūtas iespējas <Arrow /></a>
          </div>
          <figure className={styles.heroVisual}>
            {/* Publiskots īpašuma foto tikai demo. Tiesības pirms publicēšanas jāsaskaņo. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMAGES.cabin} alt="Imantas guļbaļķu pirtsmāja ar izgaismotu terasi vakarā" className={styles.heroPhoto} />
          </figure>
        </div>
      </section>

      <section className={styles.stays} id="naktsmitnes" aria-labelledby="stays-title">
        <div className={styles.sectionHeader}>
          <h2 id="stays-title">Nakšņošana Imantās</h2>
        </div>

        <article className={styles.apartmentBlock}>
          <div className={styles.apartmentIntro}>
            <p className={styles.stayLabel}>Maijs — septembris</p>
            <h3>Vasaras dzīvokļi</h3>
            <p>Pieci dzīvokļi divās ēkās — pāriem, ģimenēm un nelielām kompānijām.</p>
          </div>
          <div className={styles.apartmentAside}>
            <p>Virtuvīte, duša, tualete un Wi-Fi katrā dzīvoklī.</p>
            <button type="button" onClick={() => chooseStay("Vasaras dzīvokļi")} className={styles.actionLink}>Jautāt par dzīvokli <Arrow /></button>
          </div>
        </article>

        <article className={styles.saunaBlock}>
          <div className={styles.saunaVisual}>
            {/* Pirtsmājas interjers, nevis vasaras dzīvokļa foto. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMAGES.kitchen} alt="Imantas pirtsmājas koka interjers ar nelielu virtuvi" loading="lazy" />
          </div>
          <div className={styles.saunaCopy}>
            <p className={styles.stayLabel}>Pieejama visu gadu</p>
            <h3>Guļbaļķu pirtsmāja</h3>
            <p>Līdz sešiem viesiem. Malkas pirts, virtuve un terase; āra kubls kā papildu iespēja.</p>
            <button type="button" onClick={() => chooseStay("Pirtsmāja")} className={styles.actionLink}>Jautāt par pirtsmāju <Arrow /></button>
          </div>
        </article>
        <p className={styles.photoAttribution}>Demo foto avots: <a href={SOURCE_CABIN} target="_blank" rel="noopener noreferrer">Imantas pirtsmājas publiskais profils</a>. Izmantošanas tiesības pirms publicēšanas jāsaskaņo.</p>
      </section>

      <section className={styles.beeSection} id="pieredze" aria-labelledby="bee-title">
        <div className={styles.beeInner}>
          <div className={styles.beeText}>
            <h2 id="bee-title">Bišu pieredze</h2>
            <p>Iepazīstiet bišu saimes, izmēģiniet vaska sveču liešanu vai atpūtu uz stropiem.</p>
          </div>
          <div className={styles.beeAside}>
            <p>Aktivitātes iepriekš jāsaskaņo ar saimniekiem.</p>
            <button type="button" onClick={() => chooseStay("Bišu pieredze")} className={styles.actionLink}>Jautāt par iespējām <Arrow /></button>
          </div>
        </div>
      </section>

      <section className={styles.request} id="pieprasijums" aria-labelledby="request-title">
        <div className={styles.requestShell}>
          <div className={styles.requestIntro}>
            <h2 id="request-title">Noskaidrojiet pieejamību</h2>
            <p>Izvēlieties atpūtas veidu un datumus. Atvērsies sagatavots e-pasts saimniekiem.</p>
            <div className={styles.requestContact}><a href="tel:+37129435752">+371 29 435 752 <Arrow diagonal /></a><span>Vēlaties sazināties uzreiz? Piezvaniet.</span></div>
          </div>
          <div className={styles.formPanel}>
            <div className={styles.formDemoNote}><span className={styles.demoDot} /> Demonstrācija: pieejamība netiek pārbaudīta un dati netiek automātiski nosūtīti</div>
            <form onSubmit={submitInquiry}>
              <label htmlFor="stay">Atpūtas veids</label>
              <select id="stay" value={stay} onChange={(e) => {setStay(e.target.value as Stay);setFormError("");}}>
                <option>Vasaras dzīvokļi</option><option>Pirtsmāja</option><option>Bišu pieredze</option>
              </select>
              <div className={styles.formPair}>
                <div><label htmlFor="arrive">{stay === "Bišu pieredze" ? "Apmeklējuma datums" : "Ierašanās"}</label><input id="arrive" type="date" required value={arrival} onChange={(e) => setArrival(e.target.value)} /></div>
                {stay !== "Bišu pieredze" && <div><label htmlFor="leave">Izbraukšana</label><input id="leave" type="date" required min={arrival || undefined} value={departure} onChange={(e) => setDeparture(e.target.value)} /></div>}
                {stay === "Bišu pieredze" && <div><label htmlFor="guests">Viesu skaits</label><input id="guests" type="number" min="1" required value={guests} onChange={(e) => setGuests(e.target.value)} /></div>}
              </div>
              {stay !== "Bišu pieredze" && <div className={styles.formSingle}><label htmlFor="guests">Viesu skaits</label><input id="guests" type="number" min="1" max={stay === "Pirtsmāja" ? "6" : undefined} required value={guests} onChange={(e) => setGuests(e.target.value)} /></div>}
              <div className={styles.formPair}>
                <div><label htmlFor="name">Jūsu vārds</label><input id="name" type="text" autoComplete="name" placeholder="Vārds" required value={name} onChange={(e) => setName(e.target.value)} /></div>
                <div><label htmlFor="email">E-pasts atbildei</label><input id="email" type="email" autoComplete="email" placeholder="epasts@piemers.lv" required value={email} onChange={(e) => setEmail(e.target.value)} /></div>
              </div>
              <label htmlFor="notes">Papildu jautājums <span className={styles.optional}>(neobligāti)</span></label>
              <textarea id="notes" rows={3} placeholder="Kas jums vēl būtu svarīgi?" value={message} onChange={(e) => setMessage(e.target.value)} />
              {formError && <p role="alert" className={styles.formError}>{formError}</p>}
              <button type="submit" className={styles.formSubmit}>Sagatavot pieprasījuma e-pastu <Arrow /></button>
              <p className={styles.formSmall}>Atvērsies jūsu e-pasta programma ar aizpildītu ziņu. Jūs to pārskatīsiet un nosūtīsiet pats.</p>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.location} id="vieta" aria-labelledby="location-title">
        <div>
          <h2 id="location-title">Imantas Salacgrīvā</h2>
          <p>Pērnavas iela 37, Salacgrīva. Aptuveni 250 m līdz pludmalei.</p>
          <a href={MAP} target="_blank" rel="noopener noreferrer" className={styles.actionLink}>Atvērt maršrutu Google Maps <Arrow diagonal /></a>
        </div>
        <div className={styles.mapCard}>
          <iframe
            title="Imantas atrašanās vieta — Pērnavas iela 37, Salacgrīva"
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div><span className={styles.footerBrand}>IMANTAS</span><p>Atpūta netālu no jūras, Salacgrīvā</p></div>
          <div><a href="tel:+37129435752">+371 29 435 752</a><a href="mailto:avei6@inbox.lv">avei6@inbox.lv</a></div>
        </div>
        <div className={styles.footerBottom}><span>© 2026 Imantas · dizaina demo</span><span>Neoficiāls priekšskatījums. Informācija un foto pirms publicēšanas jāsaskaņo ar saimniekiem.</span><a href="#sakums">Atpakaļ augšā ↑</a></div>
      </footer>
    </main>
  );
}
