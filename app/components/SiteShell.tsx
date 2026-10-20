"use client";
import {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import s from "../page.module.css";
const links=[{href:"/",label:"Sākums"},{href:"/par-imantam",label:"Par Imantām"},{href:"/naktsmitnes",label:"Naktsmītnes"},{href:"/bisu-pieredze",label:"Bišu pieredze"},{href:"/galerija",label:"Galerija"},{href:"/kontakti",label:"Kontakti"}];
export function SiteHeader(){
 const [open,setOpen]=useState(false);const pathname=usePathname();
 return <><div className={s.demoStrip}>Imantas · dizaina priekšskatījums · nav oficiālā mājaslapa</div><header className={s.header}><div className={s.container+" "+s.nav}>
 <Link className={s.logo} href="/" onClick={()=>setOpen(false)}>IMANTAS <span>ATPŪTA SALACGRĪVĀ</span></Link>
 <nav className={s.navLinks} aria-label="Galvenā navigācija"><ul className={s.navList}>{links.map(l=><li key={l.href}><Link href={l.href} aria-current={pathname===l.href?"page":undefined}>{l.label}</Link></li>)}</ul></nav>
 <div className={s.navActions}><a className={s.navCta} href="/kontakti#pieprasijums">Jautāt par pieejamību</a><button type="button" className={s.menuButton} aria-expanded={open} aria-controls="imantas-mobile-menu" aria-label={open?"Aizvērt izvēlni":"Atvērt izvēlni"} onClick={()=>setOpen(!open)}><span/><span/></button></div></div>
 {open&&<nav id="imantas-mobile-menu" className={s.mobileLinks} aria-label="Mobilā navigācija"><ul className={s.mobileNavList}>{links.map(l=><li key={l.href}><Link href={l.href} aria-current={pathname===l.href?"page":undefined} onClick={()=>setOpen(false)}>{l.label}</Link></li>)}</ul></nav>}</header></>
}
export function SiteFooter(){return <footer className={s.footer}><div className={s.container+" "+s.footerRow}><div><Link className={s.footerLogo} href="/">IMANTAS</Link><p>Atpūta pie jūras Salacgrīvā · neoficiāls demo</p></div><nav aria-label="Kājenes navigācija"><ul className={s.footerLinks}>{links.map(l=><li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul></nav><div><a href="tel:+37129435752">+371 29 435 752</a><p><a href="mailto:avei6@inbox.lv">avei6@inbox.lv</a></p></div></div></footer>}
