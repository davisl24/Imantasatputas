# IMANTAS — atpūta Salacgrīvā

Patstāvīgs **Coastal Editorial** mājaslapas demo projektam Imantas (Pērnavas iela 37, Salacgrīva).

## Palaišana

```bash
npm install
npm run dev
```

Atver http://localhost:3000.

## Projekta saturs
- Hero un ātrs pārskats par atpūtas iespējām
- Vasaras dzīvokļi, guļbaļķu pirtsmāja, bišu pieredze
- Full-width hero ar publiski pieejamu Imantas foto tikai demo; citur tekstuāli attēlu vietturi. Pirms oficiālas publicēšanas vajadzīga foto izmantošanas atļauja.
- Google Maps saite un rezervācijas **pieprasījuma e-pasta sagatavošana** (nevis automātiska rezervācija)

## Svarīgi
**Šis ir neoficiāls demonstrācijas projekts.** Rezervāciju pieejamība netiek pārbaudīta un forma pati neko nenosūta — tā atver lietotāja e-pasta programmu. Pirms oficiālas publicēšanas jāapstiprina saturs, cenas un fotogrāfiju tiesības ar īpašniekiem. Nav izdomātu atsauksmju vai pieejamības.

## Deploy
Vercel → Add New Project → Import `davisl24/Imantasatputas` → Framework: Next.js → Deploy.

## Design Blueprint
Sadaļas: hero → vasaras dzīvokļi/pirtsmāja → bišu pieredze → pieejamības pieprasījums → atrašanās vieta. Apstiprinātā palete: Warm Coastal Natural. Vasaras dzīvokļus un pirtsmājas interjeru demo attēlojam ar skaidri marķētām foto vietām, nevis neatbilstošām bildēm. Hero izmanto vienu pilna platuma reālu īpašuma foto. Nav galerijas un atsevišķas faktu joslas. Viena galvenā darbība — noskaidrot pieejamību.

## Pārbaude pirms klienta demonstrācijas
- [ ] `npm run build` izpildās
- [ ] Desktop 1440px / mobilais 390px bez horizontālas ritināšanas
- [ ] Pārbaudītas foto URL, kontakti un ārējās saites
- [ ] Rezervācijas pieprasījuma dati korekti atveras e-pasta klientā
- [ ] Apstiprinātas attēlu izmantošanas tiesības pirms jebkādas oficiālas publicēšanas
