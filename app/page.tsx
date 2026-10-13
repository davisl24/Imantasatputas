"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";

const IMAGES = {
  sign: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/670067220.jpg?k=55ff3f62652df9865781bdbfb1e3f2ff55426227382ccba9f49c7efd68c8a6b6&o=",
  cabin: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/857040444.jpg?k=acdd2f16f07678ca2264771065b9f164a5182d791e902f18a4499e2fc84927d3&o=",
  kitchen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/857040640.jpg?k=672119c66fd51031dd82cf732e14a0b610ebf0501692d3214e071ceb67c49491&o=",
};

const MAP = "https://www.google.com/maps/search/?api=1&query=P%C4%93rnavas+iela+37%2C+Salacgr%C4%ABva";
const SOURCE_APARTMENTS = "https://www.booking.com/hotel/lv/pernavas-street-apartment-salacgriva.lv.html";
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
            <a href="#galerija">Galerija</a>
            <a href="#vieta">Atrašanās vieta</a>
          </nav>
          <a href="#pieprasijums" className={styles.navCta}>Pieteikt atpūtu <Arrow diagonal /></a>
          <button type="button" className={styles.mobileMenuToggle} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Aizvērt izvēlni" : "Atvērt izvēlni"} aria-expanded={menuOpen}>
            <span /> <span />
          </button>
        </header>
        {menuOpen && (
          <nav className={styles.mobileLinks} aria-label="Mobilā navigācija">
            <a href="#naktsmitnes" onClick={() => setMenuOpen(false)}>Naktsmītnes</a>
            <a href="#pieredze" onClick={() => setMenuOpen(false)}>Bišu pieredze</a>
            <a href="#galerija" onClick={() => setMenuOpen(false)}>Galerija</a>
            <a href="#vieta" onClick={() => setMenuOpen(false)}>Atrašanās vieta</a>
            <a href="#pieprasijums" onClick={() => setMenuOpen(false)}>Pieteikt atpūtu <Arrow /></a>
          </nav>
        )}
      </div>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.locationLine}><span className={styles.smallLine} /> Salacgrīva · 250 m līdz jūrai</div>
            <h1 id="hero-title">Atpūta <em>pie jūras</em> Salacgrīvā</h1>
            <p>Vasaras dzīvokļi, guļbaļķu pirtsmāja un īpaša bišu pieredze. Izvēlieties sev piemērotāko atpūtu vien dažu minūšu gājienā no pludmales.</p>
            <div className={styles.heroActions}>
              <a href="#naktsmitnes" className={styles.buttonDark}>Izvēlēties atpūtu <Arrow /></a>
              <a href="#vieta" className={styles.underlinedLink}>Kur mēs atrodamies <Arrow diagonal /></a>
            </div>
            <div className={styles.heroFooter}><span className={styles.heroFooterRule} /> Jūra, mežs un atpūta savā ritmā</div>
          </div>
          <div className={styles.heroVisual}>
            {/* Pagaidu publiskots īpašuma foto; lietošanas tiesības jāapstiprina pirms publicēšanas. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMAGES.cabin} alt="Imantas guļbaļķu pirtsmāja ar apgaismotu terasi vakarā" className={styles.heroPhoto} />
            <div className={styles.heroPictureLabel}>IMANTAS PIRTSMĀJA <span>SALACGRĪVA, LATVIJA</span></div>
          </div>
        </div>
      </section>

      <section className={styles.introBand} aria-label="Svarīgākais par Imantām">
        <div className={styles.introItems}>
          <div><strong>250 m</strong><span>līdz smilšainai pludmalei</span></div>
          <div><strong>5 dzīvokļi</strong><span>vasaras atpūtai</span></div>
          <div><strong>Līdz 6 viesiem</strong><span>pirtsmājā arī ziemā</span></div>
        </div>
      </section>

      <section className={styles.stays} id="naktsmitnes" aria-labelledby="stays-title">
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.kicker}>Palieciet pie mums</p>
            <h2 id="stays-title">Atpūta, kādu vēlaties</h2>
          </div>
          <p>Divas atšķirīgas iespējas — vasaras dienām pie jūras vai nesteidzīgam vakaram pirtī.</p>
        </div>
        <div className={styles.stayRow}>
          <div className={styles.stayImageWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMAGES.sign} alt="Saimniecības Imantas koka nosaukuma zīme zaļā dārzā" loading="lazy" className={styles.stayImage} />
            <span className={styles.imageIndex}>Īsts Imantas īpašuma foto</span>
          </div>
          <div className={styles.stayText}>
            <span className={styles.stayLabel}>Maijs — septembris</span>
            <h3>Vasaras dzīvokļi</h3>
            <p>Pieci dzīvokļi divās ēkās — pāriem, ģimenēm un nelielām kompānijām. Katrā dzīvoklī ir virtuvīte, duša, tualete un Wi-Fi.</p>
            <div className={styles.stayDetails}><span>2–4 vietīgi varianti</span><span>Terase un dārzs</span><span>Grila vietas</span></div>
            <button type="button" onClick={() => chooseStay("Vasaras dzīvokļi")} className={styles.actionLink}>Jautāt par dzīvokli <Arrow /></button>
          </div>
        </div>
        <div className={styles.stayRow + " " + styles.stayRowReverse}>
          <div className={styles.stayImageWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMAGES.cabin} alt="Imantas guļbaļķu pirtsmāja ar izgaismotu terasi vakarā" loading="lazy" className={styles.stayImage} />
            <span className={styles.imageIndex}>Īsts Imantas īpašuma foto</span>
          </div>
          <div className={styles.stayText}>
            <span className={styles.stayLabel}>Pieejama visu gadu</span>
            <h3>Guļbaļķu pirtsmāja</h3>
            <p>Mājīga pirtsmāja līdz sešiem viesiem, ar malkas pirti, aprīkotu virtuvi un terasi. Karstais kubls pieejams kā papildu iespēja.</p>
            <div className={styles.stayDetails}><span>Līdz 6 viesiem</span><span>Malkas pirts</span><span>Āra kubls</span></div>
            <button type="button" onClick={() => chooseStay("Pirtsmāja")} className={styles.actionLink}>Jautāt par pirtsmāju <Arrow /></button>
          </div>
        </div>
      </section>

      <section className={styles.beeSection} id="pieredze" aria-labelledby="bee-title">
        <div className={styles.beeText}>
          <p className={styles.kicker}>Vairāk nekā nakšņošana</p>
          <h2 id="bee-title">Iepazīstiet <em>bišu pasauli</em></h2>
          <p>Imantās iespējams iepazīt bišu saimju ikdienu, piedalīties vaska sveču liešanas nodarbībās un izmēģināt atpūtu uz bišu stropiem.</p>
          <p className={styles.beeNote}>Pieredzi un tās norisi lūdzam iepriekš saskaņot ar saimniekiem. Veselības ieguvumi netiek solīti.</p>
          <button type="button" onClick={() => chooseStay("Bišu pieredze")} className={styles.lightAction}>Uzzināt par bišu pieredzi <Arrow /></button>
        </div>
        <div className={styles.beeGraphic} aria-hidden="true">
          <div className={styles.hexOuter}><div className={styles.hexInner}>IMANTAS<span>Bišu pieredze</span></div></div>
          <span className={styles.graphicCaption}>DABA · MIERĀ · TUVUMĀ</span>
        </div>
      </section>

      <section className={styles.gallery} id="galerija" aria-labelledby="gallery-title">
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.kicker}>Ieskatieties</p>
            <h2 id="gallery-title">Mazs ieskats Imantās</h2>
          </div>
          <p>Attēli no publiski pieejamajiem Imantas naktsmītņu profiliem. Pilnai galerijai nepieciešami saimnieku oriģinālfoto.</p>
        </div>
        <div className={styles.galleryGrid}>
          <figure className={styles.galleryLarge}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMAGES.cabin} alt="Imantas guļbaļķu namiņš vakara apgaismojumā" loading="lazy" />
            <figcaption>Pirtsmāja</figcaption>
          </figure>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMAGES.sign} alt="Imantas vārds uz koka zīmes dārzā" loading="lazy" />
            <figcaption>Saimniecība</figcaption>
          </figure>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMAGES.kitchen} alt="Imantas pirtsmājas virtuvītes interjers" loading="lazy" />
            <figcaption>Interjers</figcaption>
          </figure>
        </div>
        <div className={styles.photoAttribution}>Foto avoti: <a href={SOURCE_APARTMENTS} target="_blank" rel="noopener noreferrer">Imantas</a> un <a href={SOURCE_CABIN} target="_blank" rel="noopener noreferrer">Imantas guļbaļķu namiņš</a> (Booking.com). Izmantošana tikai demo, pirms publicēšanas jāsaskaņo tiesības.</div>
      </section>

      <section className={styles.request} id="pieprasijums" aria-labelledby="request-title">
        <div className={styles.requestShell}>
          <div className={styles.requestIntro}>
            <p className={styles.kicker}>Plānojiet savu atpūtu</p>
            <h2 id="request-title">Noskaidrosim, vai ir brīvs</h2>
            <p>Norādiet vēlamo atpūtas veidu un datumus. Sagatavosim e-pastu saimniekiem, lai jūs varētu noskaidrot pieejamību un cenu.</p>
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
                {stay === "Bišu pieredze" && <div><label htmlFor="guests">Viesu skaits</label><input id="guests" type="number" min="1" max="5" required value={guests} onChange={(e) => setGuests(e.target.value)} /></div>}
              </div>
              {stay !== "Bišu pieredze" && <div className={styles.formSingle}><label htmlFor="guests">Viesu skaits</label><input id="guests" type="number" min="1" max={stay === "Pirtsmāja" ? "6" : "15"} required value={guests} onChange={(e) => setGuests(e.target.value)} /></div>}
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
          <p className={styles.kicker}>Kur atrast Imantas</p>
          <h2 id="location-title">Jūra ir tepat blakus</h2>
          <p>Salacgrīva, Pērnavas iela 37. Apmēram 250 metru pastaigā no smilšainas pludmales.</p>
          <a href={MAP} target="_blank" rel="noopener noreferrer" className={styles.actionLink}>Atvērt maršrutu Google Maps <Arrow diagonal /></a>
        </div>
        <div className={styles.mapCard}>
          <div className={styles.mapGrid} aria-hidden="true" />
          <div className={styles.mapPin} aria-hidden="true"><span /></div>
          <div className={styles.mapTag}>IMANTAS<span>Pērnavas iela 37, Salacgrīva</span></div>
          <a href={MAP} target="_blank" rel="noopener noreferrer" aria-label="Atvērt Imantas atrašanās vietu Google Maps" className={styles.mapOverlayLink} />
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
