# Uppgift: Få alla tester att bli gröna

## Introduktion

Denna uppgift går ut på att skriva kod för att säkerställa att alla Cypress-tester blir gröna. Du kommer att arbeta med en React-applikation som använder Vite som byggverktyg. Applikationen har flera komponenter och tester som verifierar deras funktionalitet.

## Förutsättningar

Innan du börjar, se till att du har följande installerat på din dator:

- Node.js (version 14 eller senare)
- npm (Node Package Manager)

## Steg-för-steg Instruktioner

### 1. Klona Repositoriet

Börja med att klona repositoriet till din lokala maskin:

```sh
git clone <repository-url>
cd <repository-directory>
```

### 2. Installera Beroenden

Installera alla nödvändiga beroenden genom att köra följande kommando:

```sh
npm install
```

### 3. Starta Utvecklingsservern

Starta utvecklingsservern för att se applikationen i din webbläsare:

```sh
npm run dev
```

Öppna webbläsaren och navigera till [http://localhost:5173](http://localhost:5173) för att se applikationen.

### 4. Kör Cypress Tester

Öppna ett nytt terminalfönster och starta Cypress testlöpare:

```sh
npx cypress open
```

Välj sedan "E2E Testing" och välj en webbläsare för att köra testerna. Klicka på "Start E2E Testing" och välj sedan en testfil för att köra testerna.

### 5. Implementera Funktionalitet

För att få alla tester att bli gröna, behöver du implementera följande funktionalitet i din applikation:

#### BookingHistory Komponent

- Visa titeln "Booking History".
- Visa en lista med bokningar.
- Visa bokningsdetaljer för varje bokning.
- Tillåt användaren att filtrera bokningar efter datum.
- Visa ett meddelande när inga bokningar hittas.

#### BookingForm Komponent

- Tillåt användaren att välja ett datum och tid.
- Tillåt användaren att välja en städtyp.
- Tillåt användaren att välja en städare.
- Visa valideringsfel för tomma fält.
- Återställ formuläret efter inskickning.

#### UpcomingBookings Komponent

- Visa titeln "Upcoming Bookings".
- Visa en lista med kommande bokningar.
- Visa bokningsdetaljer korrekt.

### 6. Uppdatera CSS

Se till att stilarna i `src/index.css` och `src/App.css` matchar de krav som ställs i testerna.

### 7. Verifiera Att Alla Tester Blir Gröna

Efter att du har implementerat all funktionalitet, kör alla tester igen för att verifiera att de blir gröna.

### 8. Skicka In Uppgiften

När alla tester är gröna, skicka in din lösning enligt instruktionerna från din lärare.

### Exempel på Kod

Här är ett exempel på hur du kan implementera en del av funktionaliteten:

```jsx
import React from 'react';

function App() {
  return (
    <div>
      <h1>Bokningshistorik</h1>
      <div className="booking-list">
        <div className="booking-item">
          <div className="booking-date">2023-10-01</div>
          <div className="booking-time">10:00</div>
          <div className="booking-location">Stockholm</div>
        </div>
      </div>
    </div>
  );
}

export default App;
```

### Slutsats

Genom att följa dessa steg och implementera den nödvändiga funktionaliteten, kommer du att kunna få alla Cypress-tester att bli gröna. Lycka till!
