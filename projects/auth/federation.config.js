const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'auth',

  exposes: {
    './AuthService': './projects/auth/src/app/domains/auth/feature/auth.service.ts',
    './AUTH_ROUTES': './projects/auth/src/app/app.routes.ts',
    './BtnContinueWithGoogle': './projects/auth/src/app/domains/google/feature/continue-with.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
  ],
  features: {
    ignoreUnusedDeps: true
  }
  
});
