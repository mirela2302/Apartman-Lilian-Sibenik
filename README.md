# 🏠 Apartman Lilian - Web stranica za apartman u Šibeniku

Profesionalna web stranica za Apartman Lilian u Šibeniku. Stranica omogućuje gostima pregled apartmana, galeriju slika, kontakt informacije i online rezervacije s integracijom Firebase baze podataka.

![Apartman Lilian Screenshot](screenshot.png)

## ✨ Značajke

- ✅ **Responsivan dizajn** - Prilagođen svim uređajima (mobiteli, tableti, desktop)
- ✅ **Višejezičnost** - Hrvatski jezik (mogućnost nadogradnje)
- ✅ **Online rezervacije** - Integrirana booking forma
- ✅ **Firebase baza** - Automatsko spremanje svih upita i rezervacija
- ✅ **Kontakt forma** - Za slanje upita vlasniku
- ✅ **Brzi upit** - Na početnoj stranici za brzi kontakt
- ✅ **Galerija slika** - Pregled apartmana kroz slike
- ✅ **FAQ sekcija** - Često postavljana pitanja
- ✅ **Sticky navigacija** - Navigacija koja prilikom skrolanja ostaje na vrhu
- ✅ **Mobile menu** - Prilagođen izbornik za mobilne uređaje

## 🛠️ Korištene tehnologije

- **HTML5** - Struktura stranice
- **CSS3** - Stiliziranje i responzivni dizajn
- **JavaScript (Vanilla)** - Funkcionalnost i interaktivnost
- **Firebase** - Baza podataka za spremanje rezervacija i upita
- **Font Awesome** - Ikone

## 📁 Struktura projekta

```
Apartman-Lilian-Sibenik/
├── css/
│   └── style.css                 # Svi stilovi za cijelu stranicu
├── js/
│   ├── main.js                    # Glavna JavaScript funkcionalnost
│   └── firebase-config.js         # Firebase konfiguracija
├── optimg/                         # Optimizirane slike
├── aktivniodmor.html               # Stranica s aktivnostima
├── booking.html                     # Stranica za rezervacije
├── galerija.html                     # Galerija slika
├── index.html                        # Početna stranica
├── kontakt.html                      # Kontakt stranica
└── o_nama.html                       # O nama stranica
```

## 🔥 Firebase integracija

Projekt koristi Firebase Realtime Database za spremanje:

1. **Brzi upiti** (quick_inquiries) - s početne stranice
2. **Kontakt poruke** (contact_messages) - s kontakt stranice
3. **Rezervacije** (bookings) - s booking stranice

Svaka forma automatski šalje podatke u Firebase s vremenskom oznakom i statusom.

## 📱 Stranice

### 🏠 Početna (index.html)
- Hero sekcija s uvodnom slikom
- Brzi upit forma
- Osnovne informacije o apartmanu

### 📅 Rezervacije (booking.html)
- Booking forma s poljima:
  - Ime i prezime
  - Email
  - Telefon
  - Datum dolaska
  - Datum odlaska
  - Broj gostiju
- Generiranje booking koda (AL-xxxxxx)

### 📞 Kontakt (kontakt.html)
- Kontakt forma za upite
- FAQ sekcija s padajućim odgovorima
- Kontakt informacije

### 🖼️ Galerija (galerija.html)
- Pregled slika apartmana

### 🏃 Aktivni odmor (aktivniodmor.html)
- Informacije o aktivnostima u okolici

### 👪 O nama (o_nama.html)
- Informacije o vlasnicima i apartmanu

## 🚀 Pokretanje projekta lokalno

```bash
# Kloniraj repozitorij
git clone https://github.com/tvoje-ime/Apartman-Lilian-Sibenik.git

# Uđi u mapu projekta
cd Apartman-Lilian-Sibenik

# Otvori u browseru
# Dvoklik na index.html ili koristi Live Server u VSCode-u
```

## ⚙️ JavaScript funkcionalnosti

### Navigacija
- Sticky navigacija na scrol
- Mobile dropdown menu
- Aktivni tab označen prema trenutnoj stranici

### Forme
- Automatska validacija polja
- Slanje podataka u Firebase
- Notifikacije o uspješnom slanju
- Sprječavanje duplog slanja

### FAQ
- Interaktivna pitanja i odgovori
- Animacije pri otvaranju/zatvaranju

## 🔧 Konfiguracija

Za vlastitu Firebase konfiguraciju, uredi datoteku `js/firebase-config.js`:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

## 📸 Screenshotovi

### Desktop prikaz
![Desktop](./screenshot_desktop.png)

### Mobilni prikaz
![Mobile](./screenshot_mobile.png)

## 🚀 Nadogradnje (TODO)

- [ ] Dodati višejezičnost (EN, DE, IT)
- [ ] Implementirakalendar za prikaz dostupnosti
- [ ] Dodati Google Maps integraciju
- [ ] Sustav za recenzije gostiju
- [ ] Newsletter pretplata
- [ ] Dark mode opcija

## 👩‍💻 Autorica

Mirela Slavica
- GitHub: [@mirela2302](https://github.com/mirela2302)

## 📄 Licenca

Ovaj projekt je vlasništvo Apartmana Lilian i namijenjen je za komercijalnu upotrebu.

## 🙏 Zahvale

- [Firebase](https://firebase.google.com/) - Za bazu podataka
- [Font Awesome](https://fontawesome.com/) - Za ikone
- [Google Fonts](https://fonts.google.com/) - Za fontove
