import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyAwr0OmjTbURDD_y8Br-u038vb6r-Fjxac",
      authDomain: "lkhadma-maroc.firebaseapp.com",
      projectId: "lkhadma-maroc",
      storageBucket: "lkhadma-maroc.firebasestorage.app",
      messagingSenderId: "1035581461246",
      appId: "1:1035581461246:web:f8d703acee10b12ede0baf",
      measurementId: "G-TP3VMNCCG7"
    })),
    provideAuth(() => getAuth()),
  ]
};
