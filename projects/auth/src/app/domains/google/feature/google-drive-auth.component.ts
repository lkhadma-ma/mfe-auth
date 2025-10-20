import { Component, Output, EventEmitter, inject } from '@angular/core';
import { GoogleAuthService } from '../data-access/google-auth.service';
import { CommonModule } from '@angular/common';

export interface GoogleDriveAuthConfig {
  clientId: string;
  scope: string;
  redirectUri?: string;
}

@Component({
  selector: 'app-google-drive-auth',
  imports: [CommonModule],
  template: `
<div class="mfe-auth-container mfe-auth-bg-white mfe-auth-rounded-lg mfe-auth-shadow-md mfe-auth-p-6 mfe-auth-max-w-md mfe-auth-mx-auto">
  <!-- Header -->
  <div class="mfe-auth-text-center mfe-auth-mb-6">
    <div class="mfe-auth-mx-auto mfe-auth-w-12 mfe-auth-h-12 mfe-auth-bg-blue-100 mfe-auth-rounded-full mfe-auth-flex mfe-auth-items-center mfe-auth-justify-center mfe-auth-mb-4">
      <svg class="mfe-auth-w-6 mfe-auth-h-6 mfe-auth-text-blue-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
      </svg>
    </div>
    <h2 class="mfe-auth-text-xl mfe-auth-font-semibold mfe-auth-text-gray-900">Google Drive Access</h2>
    <p class="mfe-auth-text-gray-600 mfe-auth-mt-2">
      Grant permission to access your Google Drive files and folders
    </p>
  </div>

  <!-- Status Indicator -->
  <div *ngIf="isConnected" class="mfe-auth-bg-green-50 mfe-auth-border mfe-auth-border-green-200 mfe-auth-rounded-lg mfe-auth-p-4 mfe-auth-mb-6">
    <div class="mfe-auth-flex mfe-auth-items-center">
      <svg class="mfe-auth-w-5 mfe-auth-h-5 mfe-auth-text-green-500 mfe-auth-mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      <span class="mfe-auth-text-green-800 mfe-auth-font-medium">Google Drive Connected</span>
    </div>
  </div>

  <!-- Permissions List -->
  <div class="mfe-auth-bg-gray-50 mfe-auth-rounded-lg mfe-auth-p-4 mfe-auth-mb-6">
    <h3 class="mfe-auth-text-sm mfe-auth-font-medium mfe-auth-text-gray-900 mfe-auth-mb-3">This will allow:</h3>
    <ul class="mfe-auth-space-y-2 mfe-auth-text-sm mfe-auth-text-gray-600">
      <li class="mfe-auth-flex mfe-auth-items-center">
        <svg class="mfe-auth-w-4 mfe-auth-h-4 mfe-auth-text-green-500 mfe-auth-mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        View and manage Google Drive files
      </li>
      <li class="mfe-auth-flex mfe-auth-items-center">
        <svg class="mfe-auth-w-4 mfe-auth-h-4 mfe-auth-text-green-500 mfe-auth-mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        Upload and download files
      </li>
      <li class="mfe-auth-flex mfe-auth-items-center">
        <svg class="mfe-auth-w-4 mfe-auth-h-4 mfe-auth-text-green-500 mfe-auth-mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        Create and organize folders
      </li>
    </ul>
  </div>

  <!-- Authorization Button -->
  <button 
    (click)="onAuthorizeClick()"
    [disabled]="isAuthenticating || isConnected"
    class="mfe-auth-w-full mfe-auth-bg-blue-600 mfe-auth-text-white mfe-auth-py-3 mfe-auth-px-4 mfe-auth-rounded-lg mfe-auth-font-medium mfe-auth-flex mfe-auth-items-center mfe-auth-justify-center mfe-auth-transition-colors mfe-auth-duration-200 hover:mfe-auth-bg-blue-700 focus:mfe-auth-outline-none focus:mfe-auth-ring-2 focus:mfe-auth-ring-blue-500 focus:mfe-auth-ring-offset-2 disabled:mfe-auth-opacity-50 disabled:mfe-auth-cursor-not-allowed">
    
    <!-- Loading Spinner -->
    <svg *ngIf="isAuthenticating" class="mfe-auth-animate-spin mfe-auth-w-5 mfe-auth-h-5 mfe-auth-mr-2" fill="none" viewBox="0 0 24 24">
      <circle class="mfe-auth-opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="mfe-auth-opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>

    <!-- Google Icon -->
    <svg *ngIf="!isAuthenticating && !isConnected" class="mfe-auth-w-5 mfe-auth-h-5 mfe-auth-mr-2" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>

    <!-- Success Icon -->
    <svg *ngIf="isConnected && !isAuthenticating" class="mfe-auth-w-5 mfe-auth-h-5 mfe-auth-mr-2" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
    </svg>

    <!-- Button Text -->
    <span>
      {{
        isAuthenticating ? 'Connecting to Google Drive...' :
        isConnected ? 'Google Drive Connected' :
        'Authorize Google Drive'
      }}
    </span>
  </button>

  <!-- Footer Note -->
  <p class="mfe-auth-text-xs mfe-auth-text-gray-500 mfe-auth-text-center mfe-auth-mt-4">
    Your data is secure and we only access what you authorize
  </p>
</div>
  
  `,
  styles: `
  :host {
    display: block;
    }

    /* Ensure smooth transitions */
    .mfe-auth-transition-colors {
    transition-property: color, background-color, border-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    }
  `
})
export class GoogleDriveAuthComponent {
    private googleAuthService = inject(GoogleAuthService);

  
    isAuthenticating = false;
    isConnected = false;
  
    async onAuthorizeClick(): Promise<void> {
      this.isAuthenticating = true;
  
      try {
        // First ensure user is authenticated with Firebase
        const currentUser = this.googleAuthService.currentUser();
        if (!currentUser) {
          await this.googleAuthService.loginWithGoogle();
        }
  
        // Now link Google Drive using GSI
        await this.googleAuthService.linkGoogleDrive();
        
        this.isConnected = true;
        console.log('Google Drive authorization completed successfully');
        
      } catch (error: any) {
        console.error('Google Drive authorization failed:', error);
      } finally {
        this.isAuthenticating = false;
      }
    }
  
    // Optional: Method to check current status
    checkConnectionStatus(): void {
      // You can implement additional logic here to check if Drive is already connected
      // This would require extending your service to check Drive connection status
    }
}