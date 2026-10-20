# IMANTAS — viesu nama demo

Next.js daudzlapu demo Salacgrīvā, Pērnavas ielā 37. Dizains balstīts KARLE viesu nama editorial pieejā, pielāgots Imantas Warm Coastal Natural identitātei.

## Lapas
- `/` — pilna platuma hero, naktsmītņu pārskats, bišu pieredze, CTA
- `/naktsmitnes` — vasaras dzīvokļi un guļbaļķu pirtsmāja
- `/bisu-pieredze` — pieredzes apraksts un pieteikšanās ceļš
- `/kontakti` — e-pasta pieprasījuma sagatavošana, tālrunis un atrašanās vieta

Visām lapām ir kopīga sticky navigācija un kājene. Desktop un mobile izkārtojumi definēti `app/page.module.css`.

## Lokāla palaišana
```bash
npm ci
npm run dev
```
Atver http://localhost:3000. Pirms nodošanas palaid `npm run build`.

## Demo ierobežojumi
- Tikai hero izmanto publiski pieejamu Imantas īpašuma foto. Publicēšanai nepieciešama izmantošanas atļauja.
- Pārējām fotogrāfijām ir skaidri teksta vietturi; nav AI vai stock uzņēmuma foto.
- Nav izdomātu atsauksmju, cenu vai automātiski apstiprinātas pieejamības.
- Kontaktforma izmanto `mailto:`: apmeklētājs nosūta e-pastu pats; sistēma neko automātiski nesūta un neglabā.
- Pirms oficiālas palaišanas jāapstiprina klienta dati, teksts, foto tiesības un privātuma informācija.

## QA pirms demonstrācijas
- [ ] `npm run build` sekmīgs
- [ ] Atvērtas visas četras lapas, un navigācija/CTA darbojas
- [ ] Desktop 1440px un mobile 390px bez horizontālas ritināšanas
- [ ] Sticky navigācija nepārklāj sadaļu virsrakstus
- [ ] `mailto:` saturs un ārējās saites pārbaudītas
- [ ] Pārbaudīta tastatūras navigācija un kontrasts

Vecā main versija saglabāta zarā `backup/imantas-main-before-editorial-20261020`.
