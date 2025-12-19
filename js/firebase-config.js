 // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCYpa28S2vgjvr2G1CCEWWGw68QnRoC2DI",
    authDomain: "apartman-lilian.firebaseapp.com",
    projectId: "apartman-lilian",
    storageBucket: "apartman-lilian.firebasestorage.app",
    messagingSenderId: "836743173434",
    appId: "1:836743173434:web:eaf4f026bd6eecd360ec03",
    measurementId: "G-MP54C782YX",
    databaseURL: "https://apartman-lilian-default-rtdb.europe-west1.firebasedatabase.app" // OVO DODAJTE!
  };

  // Inicijalizacija Firebase
try {
    console.log("🔥 Pokrećem Firebase inicijalizaciju...");
    
    // Provjeri da li je Firebase SDK učitan
    if (typeof firebase === 'undefined') {
        throw new Error('Firebase SDK nije učitan! Provjerite script tagove.');
    }
    
    // Inicijaliziraj Firebase app
    const app = firebase.initializeApp(firebaseConfig);
    console.log("✅ Firebase app inicijaliziran");
    
    // Dobavi database servis
    const database = firebase.database();
    console.log("✅ Database servis spreman");
    
    // Dobavi analytics servis
    const analytics = firebase.analytics();
    console.log("✅ Analytics servis spreman");
    
    // Spremi u globalne varijable za korištenje u main.js
    window.firebaseDB = database;
    window.firebaseAnalytics = analytics;
    
    console.log("🎉 Firebase uspješno inicijaliziran!");
    console.log("📊 Database URL:", firebaseConfig.databaseURL);
    
} catch (error) {
    console.error("❌ Firebase greška:", error.message);
    console.error("Puni error:", error);
    
    // Prikaži korisničku poruku u konzoli za debug
    console.log("\n🔧 PROVJERITE:");
    console.log("1. Da li su Firebase script tagovi dodani u HTML");
    console.log("2. Da li imate databaseURL u konfiguraciji");
    console.log("3. Da li je Realtime Database kreiran u Firebase Console");
}

