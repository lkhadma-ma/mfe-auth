import { A as p, B as et, C as tt, D as Tn, K as nt, L as it, O as I, Q as Y, T as yn, W as rt, b as ln, d as dn, e as Ze, g as pe, h as hn, i as pn, j as A, k as fn, l as mn, m as gn, n as _n, o as In, q as fe, r as me, t as vn, u as ge, v as q, w as $, x as B, y as En } from "@nf-internal/chunk-TJ4SG5DZ";
import { d as H, e as a } from "@nf-internal/chunk-ACKELEN3";
import { __rest as jt } from "tslib";
var Mi = { PHONE: "phone", TOTP: "totp" }, Ui = { FACEBOOK: "facebook.com", GITHUB: "github.com", GOOGLE: "google.com", PASSWORD: "password", PHONE: "phone", TWITTER: "twitter.com" }, Vi = { EMAIL_LINK: "emailLink", EMAIL_PASSWORD: "password", FACEBOOK: "facebook.com", GITHUB: "github.com", GOOGLE: "google.com", PHONE: "phone", TWITTER: "twitter.com" }, Fi = { LINK: "link", REAUTHENTICATE: "reauthenticate", SIGN_IN: "signIn" }, Wi = { EMAIL_SIGNIN: "EMAIL_SIGNIN", PASSWORD_RESET: "PASSWORD_RESET", RECOVER_EMAIL: "RECOVER_EMAIL", REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION", VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL", VERIFY_EMAIL: "VERIFY_EMAIL" };
function xi() { return { "admin-restricted-operation": "This operation is restricted to administrators only.", "argument-error": "", "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.", "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.", "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.", "code-expired": "The SMS code has expired. Please re-send the verification code to try again.", "cordova-not-ready": "Cordova framework is not ready.", "cors-unsupported": "This browser is not supported.", "credential-already-in-use": "This credential is already associated with a different user account.", "custom-token-mismatch": "The custom token corresponds to a different audience.", "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.", "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.", "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.", "email-change-needs-verification": "Multi-factor users must always have a verified email.", "email-already-in-use": "The email address is already in use by another account.", "emulator-config-failed": 'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.', "expired-action-code": "The action code has expired.", "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.", "internal-error": "An internal AuthError has occurred.", "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.", "invalid-app-id": "The mobile app identifier is not registered for the current project.", "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.", "invalid-auth-event": "An internal AuthError has occurred.", "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.", "invalid-continue-uri": "The continue URL provided in the request is invalid.", "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.", "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.", "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.", "invalid-email": "The email address is badly formatted.", "invalid-emulator-scheme": "Emulator URL must start with a valid scheme (http:// or https://).", "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.", "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.", "invalid-credential": "The supplied auth credential is incorrect, malformed or has expired.", "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.", "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.", "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.", "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.", "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.", "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.", "wrong-password": "The password is invalid or the user does not have a password.", "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.", "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].", "invalid-provider-id": "The specified provider ID is invalid.", "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.", "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.", "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.", "invalid-tenant-id": "The Auth instance's tenant ID is invalid.", "login-blocked": "Login blocked by user-provided method: {$originalMessage}", "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.", "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.", "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.", "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.", "missing-continue-uri": "A continue URL must be provided in the request.", "missing-iframe-start": "An internal AuthError has occurred.", "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.", "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.", "missing-password": "A non-empty password must be provided", "missing-multi-factor-info": "No second factor identifier is provided.", "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.", "missing-phone-number": "To send verification codes, provide a phone number for the recipient.", "missing-verification-id": "The phone auth credential was created with an empty verification ID.", "app-deleted": "This instance of FirebaseApp has been deleted.", "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.", "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.", "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.", "network-request-failed": "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.", "no-auth-event": "An internal AuthError has occurred.", "no-such-provider": "User was not linked to an account with the given provider.", "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.", "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.", "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.', "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.", "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.", "provider-already-linked": "User can only be linked to one identity for the given provider.", "quota-exceeded": "The project's quota for this operation has been exceeded.", "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.", "redirect-operation-pending": "A redirect sign-in operation is already pending.", "rejected-credential": "The request contains malformed or mismatching credentials.", "second-factor-already-in-use": "The second factor is already enrolled on this account.", "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.", "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID", timeout: "The operation has timed out.", "user-token-expired": "The user's credential is no longer valid. The user must sign in again.", "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.", "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.", "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.", "unsupported-persistence-type": "The current environment does not support the specified persistence type.", "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.", "unverified-email": "The operation requires a verified email.", "user-cancelled": "The user did not grant your application the permissions it requested.", "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.", "user-disabled": "The user account has been disabled by an administrator.", "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.", "user-signed-out": "", "weak-password": "The password must be 6 characters long or more.", "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled.", "already-initialized": "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.", "missing-recaptcha-token": "The reCAPTCHA token is missing when sending request to the backend.", "invalid-recaptcha-token": "The reCAPTCHA token is invalid when sending request to the backend.", "invalid-recaptcha-action": "The reCAPTCHA action is invalid when sending request to the backend.", "recaptcha-not-enabled": "reCAPTCHA Enterprise integration is not enabled for this project.", "missing-client-type": "The reCAPTCHA client type is missing when sending request to the backend.", "missing-recaptcha-version": "The reCAPTCHA version is missing when sending request to the backend.", "invalid-req-type": "Invalid request parameters.", "invalid-recaptcha-version": "The reCAPTCHA version is invalid when sending request to the backend.", "unsupported-password-policy-schema-version": "The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.", "password-does-not-meet-requirements": "The password does not meet the requirements.", "invalid-hosting-link-domain": "The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)." }; }
function qn() { return { "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK." }; }
var Hi = xi, jn = qn, Gn = new me("auth", "Firebase", qn()), qi = { ADMIN_ONLY_OPERATION: "auth/admin-restricted-operation", ARGUMENT_ERROR: "auth/argument-error", APP_NOT_AUTHORIZED: "auth/app-not-authorized", APP_NOT_INSTALLED: "auth/app-not-installed", CAPTCHA_CHECK_FAILED: "auth/captcha-check-failed", CODE_EXPIRED: "auth/code-expired", CORDOVA_NOT_READY: "auth/cordova-not-ready", CORS_UNSUPPORTED: "auth/cors-unsupported", CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use", CREDENTIAL_MISMATCH: "auth/custom-token-mismatch", CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "auth/requires-recent-login", DEPENDENT_SDK_INIT_BEFORE_AUTH: "auth/dependent-sdk-initialized-before-auth", DYNAMIC_LINK_NOT_ACTIVATED: "auth/dynamic-link-not-activated", EMAIL_CHANGE_NEEDS_VERIFICATION: "auth/email-change-needs-verification", EMAIL_EXISTS: "auth/email-already-in-use", EMULATOR_CONFIG_FAILED: "auth/emulator-config-failed", EXPIRED_OOB_CODE: "auth/expired-action-code", EXPIRED_POPUP_REQUEST: "auth/cancelled-popup-request", INTERNAL_ERROR: "auth/internal-error", INVALID_API_KEY: "auth/invalid-api-key", INVALID_APP_CREDENTIAL: "auth/invalid-app-credential", INVALID_APP_ID: "auth/invalid-app-id", INVALID_AUTH: "auth/invalid-user-token", INVALID_AUTH_EVENT: "auth/invalid-auth-event", INVALID_CERT_HASH: "auth/invalid-cert-hash", INVALID_CODE: "auth/invalid-verification-code", INVALID_CONTINUE_URI: "auth/invalid-continue-uri", INVALID_CORDOVA_CONFIGURATION: "auth/invalid-cordova-configuration", INVALID_CUSTOM_TOKEN: "auth/invalid-custom-token", INVALID_DYNAMIC_LINK_DOMAIN: "auth/invalid-dynamic-link-domain", INVALID_EMAIL: "auth/invalid-email", INVALID_EMULATOR_SCHEME: "auth/invalid-emulator-scheme", INVALID_IDP_RESPONSE: "auth/invalid-credential", INVALID_LOGIN_CREDENTIALS: "auth/invalid-credential", INVALID_MESSAGE_PAYLOAD: "auth/invalid-message-payload", INVALID_MFA_SESSION: "auth/invalid-multi-factor-session", INVALID_OAUTH_CLIENT_ID: "auth/invalid-oauth-client-id", INVALID_OAUTH_PROVIDER: "auth/invalid-oauth-provider", INVALID_OOB_CODE: "auth/invalid-action-code", INVALID_ORIGIN: "auth/unauthorized-domain", INVALID_PASSWORD: "auth/wrong-password", INVALID_PERSISTENCE: "auth/invalid-persistence-type", INVALID_PHONE_NUMBER: "auth/invalid-phone-number", INVALID_PROVIDER_ID: "auth/invalid-provider-id", INVALID_RECIPIENT_EMAIL: "auth/invalid-recipient-email", INVALID_SENDER: "auth/invalid-sender", INVALID_SESSION_INFO: "auth/invalid-verification-id", INVALID_TENANT_ID: "auth/invalid-tenant-id", MFA_INFO_NOT_FOUND: "auth/multi-factor-info-not-found", MFA_REQUIRED: "auth/multi-factor-auth-required", MISSING_ANDROID_PACKAGE_NAME: "auth/missing-android-pkg-name", MISSING_APP_CREDENTIAL: "auth/missing-app-credential", MISSING_AUTH_DOMAIN: "auth/auth-domain-config-required", MISSING_CODE: "auth/missing-verification-code", MISSING_CONTINUE_URI: "auth/missing-continue-uri", MISSING_IFRAME_START: "auth/missing-iframe-start", MISSING_IOS_BUNDLE_ID: "auth/missing-ios-bundle-id", MISSING_OR_INVALID_NONCE: "auth/missing-or-invalid-nonce", MISSING_MFA_INFO: "auth/missing-multi-factor-info", MISSING_MFA_SESSION: "auth/missing-multi-factor-session", MISSING_PHONE_NUMBER: "auth/missing-phone-number", MISSING_SESSION_INFO: "auth/missing-verification-id", MODULE_DESTROYED: "auth/app-deleted", NEED_CONFIRMATION: "auth/account-exists-with-different-credential", NETWORK_REQUEST_FAILED: "auth/network-request-failed", NULL_USER: "auth/null-user", NO_AUTH_EVENT: "auth/no-auth-event", NO_SUCH_PROVIDER: "auth/no-such-provider", OPERATION_NOT_ALLOWED: "auth/operation-not-allowed", OPERATION_NOT_SUPPORTED: "auth/operation-not-supported-in-this-environment", POPUP_BLOCKED: "auth/popup-blocked", POPUP_CLOSED_BY_USER: "auth/popup-closed-by-user", PROVIDER_ALREADY_LINKED: "auth/provider-already-linked", QUOTA_EXCEEDED: "auth/quota-exceeded", REDIRECT_CANCELLED_BY_USER: "auth/redirect-cancelled-by-user", REDIRECT_OPERATION_PENDING: "auth/redirect-operation-pending", REJECTED_CREDENTIAL: "auth/rejected-credential", SECOND_FACTOR_ALREADY_ENROLLED: "auth/second-factor-already-in-use", SECOND_FACTOR_LIMIT_EXCEEDED: "auth/maximum-second-factor-count-exceeded", TENANT_ID_MISMATCH: "auth/tenant-id-mismatch", TIMEOUT: "auth/timeout", TOKEN_EXPIRED: "auth/user-token-expired", TOO_MANY_ATTEMPTS_TRY_LATER: "auth/too-many-requests", UNAUTHORIZED_DOMAIN: "auth/unauthorized-continue-uri", UNSUPPORTED_FIRST_FACTOR: "auth/unsupported-first-factor", UNSUPPORTED_PERSISTENCE: "auth/unsupported-persistence-type", UNSUPPORTED_TENANT_OPERATION: "auth/unsupported-tenant-operation", UNVERIFIED_EMAIL: "auth/unverified-email", USER_CANCELLED: "auth/user-cancelled", USER_DELETED: "auth/user-not-found", USER_DISABLED: "auth/user-disabled", USER_MISMATCH: "auth/user-mismatch", USER_SIGNED_OUT: "auth/user-signed-out", WEAK_PASSWORD: "auth/weak-password", WEB_STORAGE_UNSUPPORTED: "auth/web-storage-unsupported", ALREADY_INITIALIZED: "auth/already-initialized", RECAPTCHA_NOT_ENABLED: "auth/recaptcha-not-enabled", MISSING_RECAPTCHA_TOKEN: "auth/missing-recaptcha-token", INVALID_RECAPTCHA_TOKEN: "auth/invalid-recaptcha-token", INVALID_RECAPTCHA_ACTION: "auth/invalid-recaptcha-action", MISSING_CLIENT_TYPE: "auth/missing-client-type", MISSING_RECAPTCHA_VERSION: "auth/missing-recaptcha-version", INVALID_RECAPTCHA_VERSION: "auth/invalid-recaptcha-version", INVALID_REQ_TYPE: "auth/invalid-req-type", INVALID_HOSTING_LINK_DOMAIN: "auth/invalid-hosting-link-domain" };
var we = new Tn("@firebase/auth");
function ji(n, ...e) { we.logLevel <= tt.WARN && we.warn(`Auth (${Y}): ${n}`, ...e); }
function ve(n, ...e) { we.logLevel <= tt.ERROR && we.error(`Auth (${Y}): ${n}`, ...e); }
function R(n, ...e) { throw zt(n, ...e); }
function y(n, ...e) { return zt(n, ...e); }
function Gt(n, e, t) { let i = Object.assign(Object.assign({}, jn()), { [e]: t }); return new me("auth", "Firebase", i).create(e, { appName: n.name }); }
function T(n) { return Gt(n, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp"); }
function Q(n, e, t) { let i = t; if (!(e instanceof i))
    throw i.name !== e.constructor.name && R(n, "argument-error"), Gt(n, "argument-error", `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`); }
function zt(n, ...e) { if (typeof n != "string") {
    let t = e[0], i = [...e.slice(1)];
    return i[0] && (i[0].appName = n.name), n._errorFactory.create(t, ...i);
} return Gn.create(n, ...e); }
function l(n, e, ...t) { if (!n)
    throw zt(e, ...t); }
function S(n) { let e = "INTERNAL ASSERTION FAILED: " + n; throw ve(e), new Error(e); }
function O(n, e) { n || S(e); }
function se() { var n; return typeof self < "u" && ((n = self.location) === null || n === void 0 ? void 0 : n.href) || ""; }
function Kt() { return wn() === "http:" || wn() === "https:"; }
function wn() { var n; return typeof self < "u" && ((n = self.location) === null || n === void 0 ? void 0 : n.protocol) || null; }
function Gi() { return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && (Kt() || gn() || "connection" in navigator) ? navigator.onLine : !0; }
function zi() { if (typeof navigator > "u")
    return null; let n = navigator; return n.languages && n.languages[0] || n.language || null; }
var j = class {
    constructor(e, t) { this.shortDelay = e, this.longDelay = t, O(t > e, "Short delay should be less than long delay!"), this.isMobile = fn() || _n(); }
    get() { return Gi() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay); }
};
function $t(n, e) { O(n.emulator, "Emulator should always be set here"); let { url: t } = n.emulator; return e ? `${t}${e.startsWith("/") ? e.slice(1) : e}` : t; }
var Ae = class {
    static initialize(e, t, i) { this.fetchImpl = e, t && (this.headersImpl = t), i && (this.responseImpl = i); }
    static fetch() { if (this.fetchImpl)
        return this.fetchImpl; if (typeof self < "u" && "fetch" in self)
        return self.fetch; if (typeof globalThis < "u" && globalThis.fetch)
        return globalThis.fetch; if (typeof fetch < "u")
        return fetch; S("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"); }
    static headers() { if (this.headersImpl)
        return this.headersImpl; if (typeof self < "u" && "Headers" in self)
        return self.Headers; if (typeof globalThis < "u" && globalThis.Headers)
        return globalThis.Headers; if (typeof Headers < "u")
        return Headers; S("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"); }
    static response() { if (this.responseImpl)
        return this.responseImpl; if (typeof self < "u" && "Response" in self)
        return self.Response; if (typeof globalThis < "u" && globalThis.Response)
        return globalThis.Response; if (typeof Response < "u")
        return Response; S("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"); }
};
var Ki = { CREDENTIAL_MISMATCH: "custom-token-mismatch", MISSING_CUSTOM_TOKEN: "internal-error", INVALID_IDENTIFIER: "invalid-email", MISSING_CONTINUE_URI: "internal-error", INVALID_PASSWORD: "wrong-password", MISSING_PASSWORD: "missing-password", INVALID_LOGIN_CREDENTIALS: "invalid-credential", EMAIL_EXISTS: "email-already-in-use", PASSWORD_LOGIN_DISABLED: "operation-not-allowed", INVALID_IDP_RESPONSE: "invalid-credential", INVALID_PENDING_TOKEN: "invalid-credential", FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use", MISSING_REQ_TYPE: "internal-error", EMAIL_NOT_FOUND: "user-not-found", RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests", EXPIRED_OOB_CODE: "expired-action-code", INVALID_OOB_CODE: "invalid-action-code", MISSING_OOB_CODE: "internal-error", CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login", INVALID_ID_TOKEN: "invalid-user-token", TOKEN_EXPIRED: "user-token-expired", USER_NOT_FOUND: "user-token-expired", TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests", PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements", INVALID_CODE: "invalid-verification-code", INVALID_SESSION_INFO: "invalid-verification-id", INVALID_TEMPORARY_PROOF: "invalid-credential", MISSING_SESSION_INFO: "missing-verification-id", SESSION_EXPIRED: "code-expired", MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name", UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri", INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id", ADMIN_ONLY_OPERATION: "admin-restricted-operation", INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session", MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found", MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info", MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session", SECOND_FACTOR_EXISTS: "second-factor-already-in-use", SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded", BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error", RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled", MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token", INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token", INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action", MISSING_CLIENT_TYPE: "missing-client-type", MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version", INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version", INVALID_REQ_TYPE: "invalid-req-type" };
var $i = ["/v1/accounts:signInWithCustomToken", "/v1/accounts:signInWithEmailLink", "/v1/accounts:signInWithIdp", "/v1/accounts:signInWithPassword", "/v1/accounts:signInWithPhoneNumber", "/v1/token"], Bi = new j(3e4, 6e4);
function m(n, e) { return n.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), { tenantId: n.tenantId }) : e; }
function g(s, o, c, u) { return a(this, arguments, function* (n, e, t, i, r = {}) { return zn(n, r, () => a(null, null, function* () { let d = {}, h = {}; i && (e === "GET" ? h = i : d = { body: JSON.stringify(i) }); let f = q(Object.assign({ key: n.config.apiKey }, h)).slice(1), _ = yield n._getAdditionalHeaders(); _["Content-Type"] = "application/json", n.languageCode && (_["X-Firebase-Locale"] = n.languageCode); let w = Object.assign({ method: e, headers: _ }, d); return mn() || (w.referrerPolicy = "no-referrer"), n.emulatorConfig && pe(n.emulatorConfig.host) && (w.credentials = "include"), Ae.fetch()(yield Kn(n, n.config.apiHost, t, f), w); })); }); }
function zn(n, e, t) { return a(this, null, function* () { n._canInitEmulator = !1; let i = Object.assign(Object.assign({}, Ki), e); try {
    let r = new ht(n), s = yield Promise.race([t(), r.promise]);
    r.clearNetworkTimeout();
    let o = yield s.json();
    if ("needConfirmation" in o)
        throw ee(n, "account-exists-with-different-credential", o);
    if (s.ok && !("errorMessage" in o))
        return o;
    {
        let c = s.ok ? o.errorMessage : o.error.message, [u, d] = c.split(" : ");
        if (u === "FEDERATED_USER_ID_ALREADY_LINKED")
            throw ee(n, "credential-already-in-use", o);
        if (u === "EMAIL_EXISTS")
            throw ee(n, "email-already-in-use", o);
        if (u === "USER_DISABLED")
            throw ee(n, "user-disabled", o);
        let h = i[u] || u.toLowerCase().replace(/[_\s]+/g, "-");
        if (d)
            throw Gt(n, h, d);
        R(n, h);
    }
}
catch (r) {
    if (r instanceof fe)
        throw r;
    R(n, "network-request-failed", { message: String(r) });
} }); }
function L(s, o, c, u) { return a(this, arguments, function* (n, e, t, i, r = {}) { let d = yield g(n, e, t, i, r); return "mfaPendingCredential" in d && R(n, "multi-factor-auth-required", { _serverResponse: d }), d; }); }
function Kn(n, e, t, i) { return a(this, null, function* () { let r = `${e}${t}?${i}`, s = n, o = s.config.emulator ? $t(n.config, r) : `${n.config.apiScheme}://${r}`; return $i.includes(t) && (yield s._persistenceManagerAvailable, s._getPersistenceType() === "COOKIE") ? s._getPersistence()._getFinalTarget(o).toString() : o; }); }
function Yi(n) { switch (n) {
    case "ENFORCE": return "ENFORCE";
    case "AUDIT": return "AUDIT";
    case "OFF": return "OFF";
    default: return "ENFORCEMENT_STATE_UNSPECIFIED";
} }
var ht = class {
    clearNetworkTimeout() { clearTimeout(this.timer); }
    constructor(e) { this.auth = e, this.timer = null, this.promise = new Promise((t, i) => { this.timer = setTimeout(() => i(y(this.auth, "network-request-failed")), Bi.get()); }); }
};
function ee(n, e, t) { let i = { appName: n.name }; t.email && (i.email = t.email), t.phoneNumber && (i.phoneNumber = t.phoneNumber); let r = y(n, e, i); return r.customData._tokenResponse = t, r; }
function An(n) { return n !== void 0 && n.getResponse !== void 0; }
function Rn(n) { return n !== void 0 && n.enterprise !== void 0; }
var Re = class {
    constructor(e) { if (this.siteKey = "", this.recaptchaEnforcementState = [], e.recaptchaKey === void 0)
        throw new Error("recaptchaKey undefined"); this.siteKey = e.recaptchaKey.split("/")[3], this.recaptchaEnforcementState = e.recaptchaEnforcementState; }
    getProviderEnforcementState(e) { if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0)
        return null; for (let t of this.recaptchaEnforcementState)
        if (t.provider && t.provider === e)
            return Yi(t.enforcementState); return null; }
    isProviderEnabled(e) { return this.getProviderEnforcementState(e) === "ENFORCE" || this.getProviderEnforcementState(e) === "AUDIT"; }
    isAnyProviderEnabled() { return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER") || this.isProviderEnabled("PHONE_PROVIDER"); }
};
function Ji(n) { return a(this, null, function* () { return (yield g(n, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""; }); }
function $n(n, e) { return a(this, null, function* () { return g(n, "GET", "/v2/recaptchaConfig", m(n, e)); }); }
function Xi(n, e) { return a(this, null, function* () { return g(n, "POST", "/v1/accounts:delete", e); }); }
function Qi(n, e) { return a(this, null, function* () { return g(n, "POST", "/v1/accounts:update", e); }); }
function Pe(n, e) { return a(this, null, function* () { return g(n, "POST", "/v1/accounts:lookup", e); }); }
function te(n) { if (n)
    try {
        let e = new Date(Number(n));
        if (!isNaN(e.getTime()))
            return e.toUTCString();
    }
    catch { } }
function Zi(n, e = !1) { return p(n).getIdToken(e); }
function Bn(n, e = !1) { return a(this, null, function* () { let t = p(n), i = yield t.getIdToken(e), r = He(i); l(r && r.exp && r.auth_time && r.iat, t.auth, "internal-error"); let s = typeof r.firebase == "object" ? r.firebase : void 0, o = s?.sign_in_provider; return { claims: r, token: i, authTime: te(st(r.auth_time)), issuedAtTime: te(st(r.iat)), expirationTime: te(st(r.exp)), signInProvider: o || null, signInSecondFactor: s?.sign_in_second_factor || null }; }); }
function st(n) { return Number(n) * 1e3; }
function He(n) { let [e, t, i] = n.split("."); if (e === void 0 || t === void 0 || i === void 0)
    return ve("JWT malformed, contained fewer than 3 sections"), null; try {
    let r = ln(t);
    return r ? JSON.parse(r) : (ve("Failed to decode base64 JWT payload"), null);
}
catch (r) {
    return ve("Caught error parsing JWT payload as JSON", r?.toString()), null;
} }
function Pn(n) { let e = He(n); return l(e, "internal-error"), l(typeof e.exp < "u", "internal-error"), l(typeof e.iat < "u", "internal-error"), Number(e.exp) - Number(e.iat); }
function C(n, e, t = !1) { return a(this, null, function* () { if (t)
    return e; try {
    return yield e;
}
catch (i) {
    throw i instanceof fe && er(i) && n.auth.currentUser === n && (yield n.auth.signOut()), i;
} }); }
function er({ code: n }) { return n === "auth/user-disabled" || n === "auth/user-token-expired"; }
var pt = class {
    constructor(e) { this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4; }
    _start() { this.isRunning || (this.isRunning = !0, this.schedule()); }
    _stop() { this.isRunning && (this.isRunning = !1, this.timerId !== null && clearTimeout(this.timerId)); }
    getInterval(e) { var t; if (e) {
        let i = this.errorBackoff;
        return this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4), i;
    }
    else {
        this.errorBackoff = 3e4;
        let r = ((t = this.user.stsTokenManager.expirationTime) !== null && t !== void 0 ? t : 0) - Date.now() - 3e5;
        return Math.max(0, r);
    } }
    schedule(e = !1) { if (!this.isRunning)
        return; let t = this.getInterval(e); this.timerId = setTimeout(() => a(this, null, function* () { yield this.iteration(); }), t); }
    iteration() { return a(this, null, function* () { try {
        yield this.user.getIdToken(!0);
    }
    catch (e) {
        e?.code === "auth/network-request-failed" && this.schedule(!0);
        return;
    } this.schedule(); }); }
};
var ae = class {
    constructor(e, t) { this.createdAt = e, this.lastLoginAt = t, this._initializeTime(); }
    _initializeTime() { this.lastSignInTime = te(this.lastLoginAt), this.creationTime = te(this.createdAt); }
    _copy(e) { this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime(); }
    toJSON() { return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt }; }
};
function oe(n) { return a(this, null, function* () { var e; let t = n.auth, i = yield n.getIdToken(), r = yield C(n, Pe(t, { idToken: i })); l(r?.users.length, t, "internal-error"); let s = r.users[0]; n._notifyReloadListener(s); let o = !((e = s.providerUserInfo) === null || e === void 0) && e.length ? Jn(s.providerUserInfo) : [], c = tr(n.providerData, o), u = n.isAnonymous, d = !(n.email && s.passwordHash) && !c?.length, h = u ? d : !1, f = { uid: s.localId, displayName: s.displayName || null, photoURL: s.photoUrl || null, email: s.email || null, emailVerified: s.emailVerified || !1, phoneNumber: s.phoneNumber || null, tenantId: s.tenantId || null, providerData: c, metadata: new ae(s.createdAt, s.lastLoginAt), isAnonymous: h }; Object.assign(n, f); }); }
function Yn(n) { return a(this, null, function* () { let e = p(n); yield oe(e), yield e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e); }); }
function tr(n, e) { return [...n.filter(i => !e.some(r => r.providerId === i.providerId)), ...e]; }
function Jn(n) { return n.map(e => { var { providerId: t } = e, i = jt(e, ["providerId"]); return { providerId: t, uid: i.rawId || "", displayName: i.displayName || null, email: i.email || null, phoneNumber: i.phoneNumber || null, photoURL: i.photoUrl || null }; }); }
function nr(n, e) { return a(this, null, function* () { let t = yield zn(n, {}, () => a(null, null, function* () { let i = q({ grant_type: "refresh_token", refresh_token: e }).slice(1), { tokenApiHost: r, apiKey: s } = n.config, o = yield Kn(n, r, "/v1/token", `key=${s}`), c = yield n._getAdditionalHeaders(); c["Content-Type"] = "application/x-www-form-urlencoded"; let u = { method: "POST", headers: c, body: i }; return n.emulatorConfig && pe(n.emulatorConfig.host) && (u.credentials = "include"), Ae.fetch()(o, u); })); return { accessToken: t.access_token, expiresIn: t.expires_in, refreshToken: t.refresh_token }; }); }
function ir(n, e) { return a(this, null, function* () { return g(n, "POST", "/v2/accounts:revokeToken", m(n, e)); }); }
var ne = class n {
    constructor() { this.refreshToken = null, this.accessToken = null, this.expirationTime = null; }
    get isExpired() { return !this.expirationTime || Date.now() > this.expirationTime - 3e4; }
    updateFromServerResponse(e) { l(e.idToken, "internal-error"), l(typeof e.idToken < "u", "internal-error"), l(typeof e.refreshToken < "u", "internal-error"); let t = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : Pn(e.idToken); this.updateTokensAndExpiration(e.idToken, e.refreshToken, t); }
    updateFromIdToken(e) { l(e.length !== 0, "internal-error"); let t = Pn(e); this.updateTokensAndExpiration(e, null, t); }
    getToken(e, t = !1) { return a(this, null, function* () { return !t && this.accessToken && !this.isExpired ? this.accessToken : (l(this.refreshToken, e, "user-token-expired"), this.refreshToken ? (yield this.refresh(e, this.refreshToken), this.accessToken) : null); }); }
    clearRefreshToken() { this.refreshToken = null; }
    refresh(e, t) { return a(this, null, function* () { let { accessToken: i, refreshToken: r, expiresIn: s } = yield nr(e, t); this.updateTokensAndExpiration(i, r, Number(s)); }); }
    updateTokensAndExpiration(e, t, i) { this.refreshToken = t || null, this.accessToken = e || null, this.expirationTime = Date.now() + i * 1e3; }
    static fromJSON(e, t) { let { refreshToken: i, accessToken: r, expirationTime: s } = t, o = new n; return i && (l(typeof i == "string", "internal-error", { appName: e }), o.refreshToken = i), r && (l(typeof r == "string", "internal-error", { appName: e }), o.accessToken = r), s && (l(typeof s == "number", "internal-error", { appName: e }), o.expirationTime = s), o; }
    toJSON() { return { refreshToken: this.refreshToken, accessToken: this.accessToken, expirationTime: this.expirationTime }; }
    _assign(e) { this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime; }
    _clone() { return Object.assign(new n, this.toJSON()); }
    _performRefresh() { return S("not implemented"); }
};
function M(n, e) { l(typeof n == "string" || typeof n > "u", "internal-error", { appName: e }); }
var U = class n {
    constructor(e) { var { uid: t, auth: i, stsTokenManager: r } = e, s = jt(e, ["uid", "auth", "stsTokenManager"]); this.providerId = "firebase", this.proactiveRefresh = new pt(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = t, this.auth = i, this.stsTokenManager = r, this.accessToken = r.accessToken, this.displayName = s.displayName || null, this.email = s.email || null, this.emailVerified = s.emailVerified || !1, this.phoneNumber = s.phoneNumber || null, this.photoURL = s.photoURL || null, this.isAnonymous = s.isAnonymous || !1, this.tenantId = s.tenantId || null, this.providerData = s.providerData ? [...s.providerData] : [], this.metadata = new ae(s.createdAt || void 0, s.lastLoginAt || void 0); }
    getIdToken(e) { return a(this, null, function* () { let t = yield C(this, this.stsTokenManager.getToken(this.auth, e)); return l(t, this.auth, "internal-error"), this.accessToken !== t && (this.accessToken = t, yield this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), t; }); }
    getIdTokenResult(e) { return Bn(this, e); }
    reload() { return Yn(this); }
    _assign(e) { this !== e && (l(this.uid === e.uid, this.auth, "internal-error"), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map(t => Object.assign({}, t)), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager)); }
    _clone(e) { let t = new n(Object.assign(Object.assign({}, this), { auth: e, stsTokenManager: this.stsTokenManager._clone() })); return t.metadata._copy(this.metadata), t; }
    _onReload(e) { l(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null); }
    _notifyReloadListener(e) { this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e; }
    _startProactiveRefresh() { this.proactiveRefresh._start(); }
    _stopProactiveRefresh() { this.proactiveRefresh._stop(); }
    _updateTokensIfNecessary(e, t = !1) { return a(this, null, function* () { let i = !1; e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), i = !0), t && (yield oe(this)), yield this.auth._persistUserIfCurrent(this), i && this.auth._notifyListenersIfCurrent(this); }); }
    delete() { return a(this, null, function* () { if (I(this.auth.app))
        return Promise.reject(T(this.auth)); let e = yield this.getIdToken(); return yield C(this, Xi(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut(); }); }
    toJSON() { return Object.assign(Object.assign({ uid: this.uid, email: this.email || void 0, emailVerified: this.emailVerified, displayName: this.displayName || void 0, isAnonymous: this.isAnonymous, photoURL: this.photoURL || void 0, phoneNumber: this.phoneNumber || void 0, tenantId: this.tenantId || void 0, providerData: this.providerData.map(e => Object.assign({}, e)), stsTokenManager: this.stsTokenManager.toJSON(), _redirectEventId: this._redirectEventId }, this.metadata.toJSON()), { apiKey: this.auth.config.apiKey, appName: this.auth.name }); }
    get refreshToken() { return this.stsTokenManager.refreshToken || ""; }
    static _fromJSON(e, t) { var i, r, s, o, c, u, d, h; let f = (i = t.displayName) !== null && i !== void 0 ? i : void 0, _ = (r = t.email) !== null && r !== void 0 ? r : void 0, w = (s = t.phoneNumber) !== null && s !== void 0 ? s : void 0, he = (o = t.photoURL) !== null && o !== void 0 ? o : void 0, rn = (c = t.tenantId) !== null && c !== void 0 ? c : void 0, Ye = (u = t._redirectEventId) !== null && u !== void 0 ? u : void 0, sn = (d = t.createdAt) !== null && d !== void 0 ? d : void 0, an = (h = t.lastLoginAt) !== null && h !== void 0 ? h : void 0, { uid: Je, emailVerified: on, isAnonymous: cn, providerData: Xe, stsTokenManager: un } = t; l(Je && un, e, "internal-error"); let Di = ne.fromJSON(this.name, un); l(typeof Je == "string", e, "internal-error"), M(f, e.name), M(_, e.name), l(typeof on == "boolean", e, "internal-error"), l(typeof cn == "boolean", e, "internal-error"), M(w, e.name), M(he, e.name), M(rn, e.name), M(Ye, e.name), M(sn, e.name), M(an, e.name); let Qe = new n({ uid: Je, auth: e, email: _, emailVerified: on, displayName: f, isAnonymous: cn, photoURL: he, phoneNumber: w, tenantId: rn, stsTokenManager: Di, createdAt: sn, lastLoginAt: an }); return Xe && Array.isArray(Xe) && (Qe.providerData = Xe.map(Li => Object.assign({}, Li))), Ye && (Qe._redirectEventId = Ye), Qe; }
    static _fromIdTokenResponse(e, t, i = !1) { return a(this, null, function* () { let r = new ne; r.updateFromServerResponse(t); let s = new n({ uid: t.localId, auth: e, stsTokenManager: r, isAnonymous: i }); return yield oe(s), s; }); }
    static _fromGetAccountInfoResponse(e, t, i) { return a(this, null, function* () { let r = t.users[0]; l(r.localId !== void 0, "internal-error"); let s = r.providerUserInfo !== void 0 ? Jn(r.providerUserInfo) : [], o = !(r.email && r.passwordHash) && !s?.length, c = new ne; c.updateFromIdToken(i); let u = new n({ uid: r.localId, auth: e, stsTokenManager: c, isAnonymous: o }), d = { uid: r.localId, displayName: r.displayName || null, photoURL: r.photoUrl || null, email: r.email || null, emailVerified: r.emailVerified || !1, phoneNumber: r.phoneNumber || null, tenantId: r.tenantId || null, providerData: s, metadata: new ae(r.createdAt, r.lastLoginAt), isAnonymous: !(r.email && r.passwordHash) && !s?.length }; return Object.assign(u, d), u; }); }
};
var kn = new Map;
function b(n) { O(n instanceof Function, "Expected a class definition"); let e = kn.get(n); return e ? (O(e instanceof n, "Instance stored in cache mismatched with class"), e) : (e = new n, kn.set(n, e), e); }
var rr = (() => { class n {
    constructor() { this.type = "NONE", this.storage = {}; }
    _isAvailable() { return a(this, null, function* () { return !0; }); }
    _set(t, i) { return a(this, null, function* () { this.storage[t] = i; }); }
    _get(t) { return a(this, null, function* () { let i = this.storage[t]; return i === void 0 ? null : i; }); }
    _remove(t) { return a(this, null, function* () { delete this.storage[t]; }); }
    _addListener(t, i) { }
    _removeListener(t, i) { }
} return n.type = "NONE", n; })(), ft = rr;
function Ee(n, e, t) { return `firebase:${n}:${e}:${t}`; }
var ke = class n {
    constructor(e, t, i) { this.persistence = e, this.auth = t, this.userKey = i; let { config: r, name: s } = this.auth; this.fullUserKey = Ee(this.userKey, r.apiKey, s), this.fullPersistenceKey = Ee("persistence", r.apiKey, s), this.boundEventHandler = t._onStorageEvent.bind(t), this.persistence._addListener(this.fullUserKey, this.boundEventHandler); }
    setCurrentUser(e) { return this.persistence._set(this.fullUserKey, e.toJSON()); }
    getCurrentUser() { return a(this, null, function* () { let e = yield this.persistence._get(this.fullUserKey); if (!e)
        return null; if (typeof e == "string") {
        let t = yield Pe(this.auth, { idToken: e }).catch(() => { });
        return t ? U._fromGetAccountInfoResponse(this.auth, t, e) : null;
    } return U._fromJSON(this.auth, e); }); }
    removeCurrentUser() { return this.persistence._remove(this.fullUserKey); }
    savePersistenceForRedirect() { return this.persistence._set(this.fullPersistenceKey, this.persistence.type); }
    setPersistence(e) { return a(this, null, function* () { if (this.persistence === e)
        return; let t = yield this.getCurrentUser(); if (yield this.removeCurrentUser(), this.persistence = e, t)
        return this.setCurrentUser(t); }); }
    delete() { this.persistence._removeListener(this.fullUserKey, this.boundEventHandler); }
    static create(e, t, i = "authUser") { return a(this, null, function* () { if (!t.length)
        return new n(b(ft), e, i); let r = (yield Promise.all(t.map(d => a(null, null, function* () { if (yield d._isAvailable())
        return d; })))).filter(d => d), s = r[0] || b(ft), o = Ee(i, e.config.apiKey, e.name), c = null; for (let d of t)
        try {
            let h = yield d._get(o);
            if (h) {
                let f;
                if (typeof h == "string") {
                    let _ = yield Pe(e, { idToken: h }).catch(() => { });
                    if (!_)
                        break;
                    f = yield U._fromGetAccountInfoResponse(e, _, h);
                }
                else
                    f = U._fromJSON(e, h);
                d !== s && (c = f), s = d;
                break;
            }
        }
        catch { } let u = r.filter(d => d._shouldAllowMigration); return !s._shouldAllowMigration || !u.length ? new n(s, e, i) : (s = u[0], c && (yield s._set(o, c.toJSON())), yield Promise.all(t.map(d => a(null, null, function* () { if (d !== s)
        try {
            yield d._remove(o);
        }
        catch { } }))), new n(s, e, i)); }); }
};
function Sn(n) { let e = n.toLowerCase(); if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera"; if (ei(e))
    return "IEMobile"; if (e.includes("msie") || e.includes("trident/"))
    return "IE"; if (e.includes("edge/"))
    return "Edge"; if (Xn(e))
    return "Firefox"; if (e.includes("silk/"))
    return "Silk"; if (ni(e))
    return "Blackberry"; if (ii(e))
    return "Webos"; if (Qn(e))
    return "Safari"; if ((e.includes("chrome/") || Zn(e)) && !e.includes("edge/"))
    return "Chrome"; if (ti(e))
    return "Android"; {
    let t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, i = n.match(t);
    if (i?.length === 2)
        return i[1];
} return "Other"; }
function Xn(n = A()) { return /firefox\//i.test(n); }
function Qn(n = A()) { let e = n.toLowerCase(); return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android"); }
function Zn(n = A()) { return /crios\//i.test(n); }
function ei(n = A()) { return /iemobile/i.test(n); }
function ti(n = A()) { return /android/i.test(n); }
function ni(n = A()) { return /blackberry/i.test(n); }
function ii(n = A()) { return /webos/i.test(n); }
function Bt(n = A()) { return /iphone|ipad|ipod/i.test(n) || /macintosh/i.test(n) && /mobile/i.test(n); }
function sr(n = A()) { var e; return Bt(n) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone); }
function ar() { return In() && document.documentMode === 10; }
function ri(n = A()) { return Bt(n) || ti(n) || ii(n) || ni(n) || /windows phone/i.test(n) || ei(n); }
function si(n, e = []) { let t; switch (n) {
    case "Browser":
        t = Sn(A());
        break;
    case "Worker":
        t = `${Sn(A())}-${n}`;
        break;
    default: t = n;
} let i = e.length ? e.join(",") : "FirebaseCore-web"; return `${t}/JsCore/${Y}/${i}`; }
var mt = class {
    constructor(e) { this.auth = e, this.queue = []; }
    pushCallback(e, t) { let i = s => new Promise((o, c) => { try {
        let u = e(s);
        o(u);
    }
    catch (u) {
        c(u);
    } }); i.onAbort = t, this.queue.push(i); let r = this.queue.length - 1; return () => { this.queue[r] = () => Promise.resolve(); }; }
    runMiddleware(e) { return a(this, null, function* () { if (this.auth.currentUser === e)
        return; let t = []; try {
        for (let i of this.queue)
            yield i(e), i.onAbort && t.push(i.onAbort);
    }
    catch (i) {
        t.reverse();
        for (let r of t)
            try {
                r();
            }
            catch { }
        throw this.auth._errorFactory.create("login-blocked", { originalMessage: i?.message });
    } }); }
};
function or(t) { return a(this, arguments, function* (n, e = {}) { return g(n, "GET", "/v2/passwordPolicy", m(n, e)); }); }
var cr = 6, gt = class {
    constructor(e) { var t, i, r, s; let o = e.customStrengthOptions; this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = (t = o.minPasswordLength) !== null && t !== void 0 ? t : cr, o.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = o.maxPasswordLength), o.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = o.containsLowercaseCharacter), o.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = o.containsUppercaseCharacter), o.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = o.containsNumericCharacter), o.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = o.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = (r = (i = e.allowedNonAlphanumericCharacters) === null || i === void 0 ? void 0 : i.join("")) !== null && r !== void 0 ? r : "", this.forceUpgradeOnSignin = (s = e.forceUpgradeOnSignin) !== null && s !== void 0 ? s : !1, this.schemaVersion = e.schemaVersion; }
    validatePassword(e) { var t, i, r, s, o, c; let u = { isValid: !0, passwordPolicy: this }; return this.validatePasswordLengthOptions(e, u), this.validatePasswordCharacterOptions(e, u), u.isValid && (u.isValid = (t = u.meetsMinPasswordLength) !== null && t !== void 0 ? t : !0), u.isValid && (u.isValid = (i = u.meetsMaxPasswordLength) !== null && i !== void 0 ? i : !0), u.isValid && (u.isValid = (r = u.containsLowercaseLetter) !== null && r !== void 0 ? r : !0), u.isValid && (u.isValid = (s = u.containsUppercaseLetter) !== null && s !== void 0 ? s : !0), u.isValid && (u.isValid = (o = u.containsNumericCharacter) !== null && o !== void 0 ? o : !0), u.isValid && (u.isValid = (c = u.containsNonAlphanumericCharacter) !== null && c !== void 0 ? c : !0), u; }
    validatePasswordLengthOptions(e, t) { let i = this.customStrengthOptions.minPasswordLength, r = this.customStrengthOptions.maxPasswordLength; i && (t.meetsMinPasswordLength = e.length >= i), r && (t.meetsMaxPasswordLength = e.length <= r); }
    validatePasswordCharacterOptions(e, t) { this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1); let i; for (let r = 0; r < e.length; r++)
        i = e.charAt(r), this.updatePasswordCharacterOptionsStatuses(t, i >= "a" && i <= "z", i >= "A" && i <= "Z", i >= "0" && i <= "9", this.allowedNonAlphanumericCharacters.includes(i)); }
    updatePasswordCharacterOptionsStatuses(e, t, i, r, s) { this.customStrengthOptions.containsLowercaseLetter && (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)), this.customStrengthOptions.containsUppercaseLetter && (e.containsUppercaseLetter || (e.containsUppercaseLetter = i)), this.customStrengthOptions.containsNumericCharacter && (e.containsNumericCharacter || (e.containsNumericCharacter = r)), this.customStrengthOptions.containsNonAlphanumericCharacter && (e.containsNonAlphanumericCharacter || (e.containsNonAlphanumericCharacter = s)); }
};
var _t = class {
    constructor(e, t, i, r) { this.app = e, this.heartbeatServiceProvider = t, this.appCheckServiceProvider = i, this.config = r, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Se(this), this.idTokenSubscription = new Se(this), this.beforeStateQueue = new mt(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Gn, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this._resolvePersistenceManagerAvailable = void 0, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = r.sdkClientVersion, this._persistenceManagerAvailable = new Promise(s => this._resolvePersistenceManagerAvailable = s); }
    _initializeWithPersistence(e, t) { return t && (this._popupRedirectResolver = b(t)), this._initializationPromise = this.queue(() => a(this, null, function* () { var i, r, s; if (!this._deleted && (this.persistenceManager = yield ke.create(this, e), (i = this._resolvePersistenceManagerAvailable) === null || i === void 0 || i.call(this), !this._deleted)) {
        if (!((r = this._popupRedirectResolver) === null || r === void 0) && r._shouldInitProactively)
            try {
                yield this._popupRedirectResolver._initialize(this);
            }
            catch { }
        yield this.initializeCurrentUser(t), this.lastNotifiedUid = ((s = this.currentUser) === null || s === void 0 ? void 0 : s.uid) || null, !this._deleted && (this._isInitialized = !0);
    } })), this._initializationPromise; }
    _onStorageEvent() { return a(this, null, function* () { if (this._deleted)
        return; let e = yield this.assertedPersistence.getCurrentUser(); if (!(!this.currentUser && !e)) {
        if (this.currentUser && e && this.currentUser.uid === e.uid) {
            this._currentUser._assign(e), yield this.currentUser.getIdToken();
            return;
        }
        yield this._updateCurrentUser(e, !0);
    } }); }
    initializeCurrentUserFromIdToken(e) { return a(this, null, function* () { try {
        let t = yield Pe(this, { idToken: e }), i = yield U._fromGetAccountInfoResponse(this, t, e);
        yield this.directlySetCurrentUser(i);
    }
    catch (t) {
        console.warn("FirebaseServerApp could not login user with provided authIdToken: ", t), yield this.directlySetCurrentUser(null);
    } }); }
    initializeCurrentUser(e) { return a(this, null, function* () { var t; if (I(this.app)) {
        let o = this.app.settings.authIdToken;
        return o ? new Promise(c => { setTimeout(() => this.initializeCurrentUserFromIdToken(o).then(c, c)); }) : this.directlySetCurrentUser(null);
    } let i = yield this.assertedPersistence.getCurrentUser(), r = i, s = !1; if (e && this.config.authDomain) {
        yield this.getOrInitRedirectPersistenceManager();
        let o = (t = this.redirectUser) === null || t === void 0 ? void 0 : t._redirectEventId, c = r?._redirectEventId, u = yield this.tryRedirectSignIn(e);
        (!o || o === c) && u?.user && (r = u.user, s = !0);
    } if (!r)
        return this.directlySetCurrentUser(null); if (!r._redirectEventId) {
        if (s)
            try {
                yield this.beforeStateQueue.runMiddleware(r);
            }
            catch (o) {
                r = i, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(o));
            }
        return r ? this.reloadAndSetCurrentUserOrClear(r) : this.directlySetCurrentUser(null);
    } return l(this._popupRedirectResolver, this, "argument-error"), yield this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === r._redirectEventId ? this.directlySetCurrentUser(r) : this.reloadAndSetCurrentUserOrClear(r); }); }
    tryRedirectSignIn(e) { return a(this, null, function* () { let t = null; try {
        t = yield this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    }
    catch {
        yield this._setRedirectUser(null);
    } return t; }); }
    reloadAndSetCurrentUserOrClear(e) { return a(this, null, function* () { try {
        yield oe(e);
    }
    catch (t) {
        if (t?.code !== "auth/network-request-failed")
            return this.directlySetCurrentUser(null);
    } return this.directlySetCurrentUser(e); }); }
    useDeviceLanguage() { this.languageCode = zi(); }
    _delete() { return a(this, null, function* () { this._deleted = !0; }); }
    updateCurrentUser(e) { return a(this, null, function* () { if (I(this.app))
        return Promise.reject(T(this)); let t = e ? p(e) : null; return t && l(t.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(t && t._clone(this)); }); }
    _updateCurrentUser(e, t = !1) { return a(this, null, function* () { if (!this._deleted)
        return e && l(this.tenantId === e.tenantId, this, "tenant-id-mismatch"), t || (yield this.beforeStateQueue.runMiddleware(e)), this.queue(() => a(this, null, function* () { yield this.directlySetCurrentUser(e), this.notifyAuthListeners(); })); }); }
    signOut() { return a(this, null, function* () { return I(this.app) ? Promise.reject(T(this)) : (yield this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && (yield this._setRedirectUser(null)), this._updateCurrentUser(null, !0)); }); }
    setPersistence(e) { return I(this.app) ? Promise.reject(T(this)) : this.queue(() => a(this, null, function* () { yield this.assertedPersistence.setPersistence(b(e)); })); }
    _getRecaptchaConfig() { return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]; }
    validatePassword(e) { return a(this, null, function* () { this._getPasswordPolicyInternal() || (yield this._updatePasswordPolicy()); let t = this._getPasswordPolicyInternal(); return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : t.validatePassword(e); }); }
    _getPasswordPolicyInternal() { return this.tenantId === null ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId]; }
    _updatePasswordPolicy() { return a(this, null, function* () { let e = yield or(this), t = new gt(e); this.tenantId === null ? this._projectPasswordPolicy = t : this._tenantPasswordPolicies[this.tenantId] = t; }); }
    _getPersistenceType() { return this.assertedPersistence.persistence.type; }
    _getPersistence() { return this.assertedPersistence.persistence; }
    _updateErrorMap(e) { this._errorFactory = new me("auth", "Firebase", e()); }
    onAuthStateChanged(e, t, i) { return this.registerStateListener(this.authStateSubscription, e, t, i); }
    beforeAuthStateChanged(e, t) { return this.beforeStateQueue.pushCallback(e, t); }
    onIdTokenChanged(e, t, i) { return this.registerStateListener(this.idTokenSubscription, e, t, i); }
    authStateReady() { return new Promise((e, t) => { if (this.currentUser)
        e();
    else {
        let i = this.onAuthStateChanged(() => { i(), e(); }, t);
    } }); }
    revokeAccessToken(e) { return a(this, null, function* () { if (this.currentUser) {
        let t = yield this.currentUser.getIdToken(), i = { providerId: "apple.com", tokenType: "ACCESS_TOKEN", token: e, idToken: t };
        this.tenantId != null && (i.tenantId = this.tenantId), yield ir(this, i);
    } }); }
    toJSON() { var e; return { apiKey: this.config.apiKey, authDomain: this.config.authDomain, appName: this.name, currentUser: (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON() }; }
    _setRedirectUser(e, t) { return a(this, null, function* () { let i = yield this.getOrInitRedirectPersistenceManager(t); return e === null ? i.removeCurrentUser() : i.setCurrentUser(e); }); }
    getOrInitRedirectPersistenceManager(e) { return a(this, null, function* () { if (!this.redirectPersistenceManager) {
        let t = e && b(e) || this._popupRedirectResolver;
        l(t, this, "argument-error"), this.redirectPersistenceManager = yield ke.create(this, [b(t._redirectPersistence)], "redirectUser"), this.redirectUser = yield this.redirectPersistenceManager.getCurrentUser();
    } return this.redirectPersistenceManager; }); }
    _redirectUserForId(e) { return a(this, null, function* () { var t, i; return this._isInitialized && (yield this.queue(() => a(this, null, function* () { }))), ((t = this._currentUser) === null || t === void 0 ? void 0 : t._redirectEventId) === e ? this._currentUser : ((i = this.redirectUser) === null || i === void 0 ? void 0 : i._redirectEventId) === e ? this.redirectUser : null; }); }
    _persistUserIfCurrent(e) { return a(this, null, function* () { if (e === this.currentUser)
        return this.queue(() => a(this, null, function* () { return this.directlySetCurrentUser(e); })); }); }
    _notifyListenersIfCurrent(e) { e === this.currentUser && this.notifyAuthListeners(); }
    _key() { return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`; }
    _startProactiveRefresh() { this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh(); }
    _stopProactiveRefresh() { this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh(); }
    get _currentUser() { return this.currentUser; }
    notifyAuthListeners() { var e, t; if (!this._isInitialized)
        return; this.idTokenSubscription.next(this.currentUser); let i = (t = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !== null && t !== void 0 ? t : null; this.lastNotifiedUid !== i && (this.lastNotifiedUid = i, this.authStateSubscription.next(this.currentUser)); }
    registerStateListener(e, t, i, r) { if (this._deleted)
        return () => { }; let s = typeof t == "function" ? t : t.next.bind(t), o = !1, c = this._isInitialized ? Promise.resolve() : this._initializationPromise; if (l(c, this, "internal-error"), c.then(() => { o || s(this.currentUser); }), typeof t == "function") {
        let u = e.addObserver(t, i, r);
        return () => { o = !0, u(); };
    }
    else {
        let u = e.addObserver(t);
        return () => { o = !0, u(); };
    } }
    directlySetCurrentUser(e) { return a(this, null, function* () { this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(), this.currentUser = e, e ? yield this.assertedPersistence.setCurrentUser(e) : yield this.assertedPersistence.removeCurrentUser(); }); }
    queue(e) { return this.operations = this.operations.then(e, e), this.operations; }
    get assertedPersistence() { return l(this.persistenceManager, this, "internal-error"), this.persistenceManager; }
    _logFramework(e) { !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = si(this.config.clientPlatform, this._getFrameworks())); }
    _getFrameworks() { return this.frameworks; }
    _getAdditionalHeaders() { return a(this, null, function* () { var e; let t = { "X-Client-Version": this.clientVersion }; this.app.options.appId && (t["X-Firebase-gmpid"] = this.app.options.appId); let i = yield (e = this.heartbeatServiceProvider.getImmediate({ optional: !0 })) === null || e === void 0 ? void 0 : e.getHeartbeatsHeader(); i && (t["X-Firebase-Client"] = i); let r = yield this._getAppCheckToken(); return r && (t["X-Firebase-AppCheck"] = r), t; }); }
    _getAppCheckToken() { return a(this, null, function* () { var e; if (I(this.app) && this.app.settings.appCheckToken)
        return this.app.settings.appCheckToken; let t = yield (e = this.appCheckServiceProvider.getImmediate({ optional: !0 })) === null || e === void 0 ? void 0 : e.getToken(); return t?.error && ji(`Error while retrieving App Check token: ${t.error}`), t?.token; }); }
};
function v(n) { return p(n); }
var Se = class {
    constructor(e) { this.auth = e, this.observer = null, this.addObserver = En(t => this.observer = t); }
    get next() { return l(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer); }
};
var de = { loadJS() { return a(this, null, function* () { throw new Error("Unable to load external scripts"); }); }, recaptchaV2Script: "", recaptchaEnterpriseScript: "", gapiScript: "" };
function ur(n) { de = n; }
function Yt(n) { return de.loadJS(n); }
function lr() { return de.recaptchaV2Script; }
function dr() { return de.recaptchaEnterpriseScript; }
function hr() { return de.gapiScript; }
function ai(n) { return `__${n}${Math.floor(Math.random() * 1e6)}`; }
var pr = 500, fr = 6e4, _e = 1e12, It = class {
    constructor(e) { this.auth = e, this.counter = _e, this._widgets = new Map; }
    render(e, t) { let i = this.counter; return this._widgets.set(i, new Tt(e, this.auth.name, t || {})), this.counter++, i; }
    reset(e) { var t; let i = e || _e; (t = this._widgets.get(i)) === null || t === void 0 || t.delete(), this._widgets.delete(i); }
    getResponse(e) { var t; let i = e || _e; return ((t = this._widgets.get(i)) === null || t === void 0 ? void 0 : t.getResponse()) || ""; }
    execute(e) { return a(this, null, function* () { var t; let i = e || _e; return (t = this._widgets.get(i)) === null || t === void 0 || t.execute(), ""; }); }
}, vt = class {
    constructor() { this.enterprise = new Et; }
    ready(e) { e(); }
    execute(e, t) { return Promise.resolve("token"); }
    render(e, t) { return ""; }
}, Et = class {
    ready(e) { e(); }
    execute(e, t) { return Promise.resolve("token"); }
    render(e, t) { return ""; }
}, Tt = class {
    constructor(e, t, i) { this.params = i, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => { this.execute(); }; let r = typeof e == "string" ? document.getElementById(e) : e; l(r, "argument-error", { appName: t }), this.container = r, this.isVisible = this.params.size !== "invisible", this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler); }
    getResponse() { return this.checkIfDeleted(), this.responseToken; }
    delete() { this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler); }
    execute() { this.checkIfDeleted(), !this.timerId && (this.timerId = window.setTimeout(() => { this.responseToken = mr(50); let { callback: e, "expired-callback": t } = this.params; if (e)
        try {
            e(this.responseToken);
        }
        catch { } this.timerId = window.setTimeout(() => { if (this.timerId = null, this.responseToken = null, t)
        try {
            t();
        }
        catch { } this.isVisible && this.execute(); }, fr); }, pr)); }
    checkIfDeleted() { if (this.deleted)
        throw new Error("reCAPTCHA mock was already deleted!"); }
};
function mr(n) { let e = [], t = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; for (let i = 0; i < n; i++)
    e.push(t.charAt(Math.floor(Math.random() * t.length))); return e.join(""); }
var gr = "recaptcha-enterprise", ie = "NO_RECAPTCHA", be = class {
    constructor(e) { this.type = gr, this.auth = v(e); }
    verify(e = "verify", t = !1) { return a(this, null, function* () { function i(s) { return a(this, null, function* () { if (!t) {
        if (s.tenantId == null && s._agentRecaptchaConfig != null)
            return s._agentRecaptchaConfig.siteKey;
        if (s.tenantId != null && s._tenantRecaptchaConfigs[s.tenantId] !== void 0)
            return s._tenantRecaptchaConfigs[s.tenantId].siteKey;
    } return new Promise((o, c) => a(null, null, function* () { $n(s, { clientType: "CLIENT_TYPE_WEB", version: "RECAPTCHA_ENTERPRISE" }).then(u => { if (u.recaptchaKey === void 0)
        c(new Error("recaptcha Enterprise site key undefined"));
    else {
        let d = new Re(u);
        return s.tenantId == null ? s._agentRecaptchaConfig = d : s._tenantRecaptchaConfigs[s.tenantId] = d, o(d.siteKey);
    } }).catch(u => { c(u); }); })); }); } function r(s, o, c) { let u = window.grecaptcha; Rn(u) ? u.enterprise.ready(() => { u.enterprise.execute(s, { action: e }).then(d => { o(d); }).catch(() => { o(ie); }); }) : c(Error("No reCAPTCHA enterprise script loaded.")); } return this.auth.settings.appVerificationDisabledForTesting ? new vt().execute("siteKey", { action: "verify" }) : new Promise((s, o) => { i(this.auth).then(c => { if (!t && Rn(window.grecaptcha))
        r(c, s, o);
    else {
        if (typeof window > "u") {
            o(new Error("RecaptchaVerifier is only supported in browser"));
            return;
        }
        let u = dr();
        u.length !== 0 && (u += c), Yt(u).then(() => { r(c, s, o); }).catch(d => { o(d); });
    } }).catch(c => { o(c); }); }); }); }
};
function Z(n, e, t, i = !1, r = !1) { return a(this, null, function* () { let s = new be(n), o; if (r)
    o = ie;
else
    try {
        o = yield s.verify(t);
    }
    catch {
        o = yield s.verify(t, !0);
    } let c = Object.assign({}, e); if (t === "mfaSmsEnrollment" || t === "mfaSmsSignIn") {
    if ("phoneEnrollmentInfo" in c) {
        let u = c.phoneEnrollmentInfo.phoneNumber, d = c.phoneEnrollmentInfo.recaptchaToken;
        Object.assign(c, { phoneEnrollmentInfo: { phoneNumber: u, recaptchaToken: d, captchaResponse: o, clientType: "CLIENT_TYPE_WEB", recaptchaVersion: "RECAPTCHA_ENTERPRISE" } });
    }
    else if ("phoneSignInInfo" in c) {
        let u = c.phoneSignInInfo.recaptchaToken;
        Object.assign(c, { phoneSignInInfo: { recaptchaToken: u, captchaResponse: o, clientType: "CLIENT_TYPE_WEB", recaptchaVersion: "RECAPTCHA_ENTERPRISE" } });
    }
    return c;
} return i ? Object.assign(c, { captchaResp: o }) : Object.assign(c, { captchaResponse: o }), Object.assign(c, { clientType: "CLIENT_TYPE_WEB" }), Object.assign(c, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }), c; }); }
function V(n, e, t, i, r) { return a(this, null, function* () { var s, o; if (r === "EMAIL_PASSWORD_PROVIDER")
    if (!((s = n._getRecaptchaConfig()) === null || s === void 0) && s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")) {
        let c = yield Z(n, e, t, t === "getOobCode");
        return i(n, c);
    }
    else
        return i(n, e).catch(c => a(null, null, function* () { if (c.code === "auth/missing-recaptcha-token") {
            console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
            let u = yield Z(n, e, t, t === "getOobCode");
            return i(n, u);
        }
        else
            return Promise.reject(c); }));
else if (r === "PHONE_PROVIDER")
    if (!((o = n._getRecaptchaConfig()) === null || o === void 0) && o.isProviderEnabled("PHONE_PROVIDER")) {
        let c = yield Z(n, e, t);
        return i(n, c).catch(u => a(null, null, function* () { var d; if (((d = n._getRecaptchaConfig()) === null || d === void 0 ? void 0 : d.getProviderEnforcementState("PHONE_PROVIDER")) === "AUDIT" && (u.code === "auth/missing-recaptcha-token" || u.code === "auth/invalid-app-credential")) {
            console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);
            let h = yield Z(n, e, t, !1, !0);
            return i(n, h);
        } return Promise.reject(u); }));
    }
    else {
        let c = yield Z(n, e, t, !1, !0);
        return i(n, c);
    }
else
    return Promise.reject(r + " provider is not supported."); }); }
function oi(n) { return a(this, null, function* () { let e = v(n), t = yield $n(e, { clientType: "CLIENT_TYPE_WEB", version: "RECAPTCHA_ENTERPRISE" }), i = new Re(t); e.tenantId == null ? e._agentRecaptchaConfig = i : e._tenantRecaptchaConfigs[e.tenantId] = i, i.isAnyProviderEnabled() && new be(e).verify(); }); }
function ci(n, e) { let t = it(n, "auth"); if (t.isInitialized()) {
    let r = t.getImmediate(), s = t.getOptions();
    if (ge(s, e ?? {}))
        return r;
    R(r, "already-initialized");
} return t.initialize({ options: e }); }
function _r(n, e) { let t = e?.persistence || [], i = (Array.isArray(t) ? t : [t]).map(b); e?.errorMap && n._updateErrorMap(e.errorMap), n._initializeWithPersistence(i, e?.popupRedirectResolver); }
function ui(n, e, t) { let i = v(n); l(/^https?:\/\//.test(e), i, "invalid-emulator-scheme"); let r = !!t?.disableWarnings, s = li(e), { host: o, port: c } = Ir(e), u = c === null ? "" : `:${c}`, d = { url: `${s}//${o}${u}/` }, h = Object.freeze({ host: o, port: c, protocol: s.replace(":", ""), options: Object.freeze({ disableWarnings: r }) }); if (!i._canInitEmulator) {
    l(i.config.emulator && i.emulatorConfig, i, "emulator-config-failed"), l(ge(d, i.config.emulator) && ge(h, i.emulatorConfig), i, "emulator-config-failed");
    return;
} i.config.emulator = d, i.emulatorConfig = h, i.settings.appVerificationDisabledForTesting = !0, pe(o) ? (hn(`${s}//${o}${u}`), pn("Auth", !0)) : r || vr(); }
function li(n) { let e = n.indexOf(":"); return e < 0 ? "" : n.substr(0, e + 1); }
function Ir(n) { let e = li(n), t = /(\/\/)?([^?#/]+)/.exec(n.substr(e.length)); if (!t)
    return { host: "", port: null }; let i = t[2].split("@").pop() || "", r = /^(\[[^\]]+\])(:|$)/.exec(i); if (r) {
    let s = r[1];
    return { host: s, port: bn(i.substr(s.length + 1)) };
}
else {
    let [s, o] = i.split(":");
    return { host: s, port: bn(o) };
} }
function bn(n) { if (!n)
    return null; let e = Number(n); return isNaN(e) ? null : e; }
function vr() { function n() { let e = document.createElement("p"), t = e.style; e.innerText = "Running in emulator mode. Do not use with production credentials.", t.position = "fixed", t.width = "100%", t.backgroundColor = "#ffffff", t.border = ".1em solid #000000", t.color = "#b50000", t.bottom = "0px", t.left = "0px", t.margin = "0px", t.zIndex = "10000", t.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e); } typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", n) : n()); }
var W = class {
    constructor(e, t) { this.providerId = e, this.signInMethod = t; }
    toJSON() { return S("not implemented"); }
    _getIdTokenResponse(e) { return S("not implemented"); }
    _linkToIdToken(e, t) { return S("not implemented"); }
    _getReauthenticationResolver(e) { return S("not implemented"); }
};
function di(n, e) { return a(this, null, function* () { return g(n, "POST", "/v1/accounts:resetPassword", m(n, e)); }); }
function Er(n, e) { return a(this, null, function* () { return g(n, "POST", "/v1/accounts:update", e); }); }
function Tr(n, e) { return a(this, null, function* () { return g(n, "POST", "/v1/accounts:signUp", e); }); }
function yr(n, e) { return a(this, null, function* () { return g(n, "POST", "/v1/accounts:update", m(n, e)); }); }
function wr(n, e) { return a(this, null, function* () { return L(n, "POST", "/v1/accounts:signInWithPassword", m(n, e)); }); }
function qe(n, e) { return a(this, null, function* () { return g(n, "POST", "/v1/accounts:sendOobCode", m(n, e)); }); }
function Ar(n, e) { return a(this, null, function* () { return qe(n, e); }); }
function Rr(n, e) { return a(this, null, function* () { return qe(n, e); }); }
function Pr(n, e) { return a(this, null, function* () { return qe(n, e); }); }
function kr(n, e) { return a(this, null, function* () { return qe(n, e); }); }
function Sr(n, e) { return a(this, null, function* () { return L(n, "POST", "/v1/accounts:signInWithEmailLink", m(n, e)); }); }
function br(n, e) { return a(this, null, function* () { return L(n, "POST", "/v1/accounts:signInWithEmailLink", m(n, e)); }); }
var ce = class n extends W {
    constructor(e, t, i, r = null) { super("password", i), this._email = e, this._password = t, this._tenantId = r; }
    static _fromEmailAndPassword(e, t) { return new n(e, t, "password"); }
    static _fromEmailAndCode(e, t, i = null) { return new n(e, t, "emailLink", i); }
    toJSON() { return { email: this._email, password: this._password, signInMethod: this.signInMethod, tenantId: this._tenantId }; }
    static fromJSON(e) { let t = typeof e == "string" ? JSON.parse(e) : e; if (t?.email && t?.password) {
        if (t.signInMethod === "password")
            return this._fromEmailAndPassword(t.email, t.password);
        if (t.signInMethod === "emailLink")
            return this._fromEmailAndCode(t.email, t.password, t.tenantId);
    } return null; }
    _getIdTokenResponse(e) { return a(this, null, function* () { switch (this.signInMethod) {
        case "password":
            let t = { returnSecureToken: !0, email: this._email, password: this._password, clientType: "CLIENT_TYPE_WEB" };
            return V(e, t, "signInWithPassword", wr, "EMAIL_PASSWORD_PROVIDER");
        case "emailLink": return Sr(e, { email: this._email, oobCode: this._password });
        default: R(e, "internal-error");
    } }); }
    _linkToIdToken(e, t) { return a(this, null, function* () { switch (this.signInMethod) {
        case "password":
            let i = { idToken: t, returnSecureToken: !0, email: this._email, password: this._password, clientType: "CLIENT_TYPE_WEB" };
            return V(e, i, "signUpPassword", Tr, "EMAIL_PASSWORD_PROVIDER");
        case "emailLink": return br(e, { idToken: t, email: this._email, oobCode: this._password });
        default: R(e, "internal-error");
    } }); }
    _getReauthenticationResolver(e) { return this._getIdTokenResponse(e); }
};
function N(n, e) { return a(this, null, function* () { return L(n, "POST", "/v1/accounts:signInWithIdp", m(n, e)); }); }
var Nr = "http://localhost", D = class n extends W {
    constructor() { super(...arguments), this.pendingToken = null; }
    static _fromParams(e) { let t = new n(e.providerId, e.signInMethod); return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken), e.accessToken && (t.accessToken = e.accessToken), e.nonce && !e.pendingToken && (t.nonce = e.nonce), e.pendingToken && (t.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken, t.secret = e.oauthTokenSecret) : R("argument-error"), t; }
    toJSON() { return { idToken: this.idToken, accessToken: this.accessToken, secret: this.secret, nonce: this.nonce, pendingToken: this.pendingToken, providerId: this.providerId, signInMethod: this.signInMethod }; }
    static fromJSON(e) { let t = typeof e == "string" ? JSON.parse(e) : e, { providerId: i, signInMethod: r } = t, s = jt(t, ["providerId", "signInMethod"]); if (!i || !r)
        return null; let o = new n(i, r); return o.idToken = s.idToken || void 0, o.accessToken = s.accessToken || void 0, o.secret = s.secret, o.nonce = s.nonce, o.pendingToken = s.pendingToken || null, o; }
    _getIdTokenResponse(e) { let t = this.buildRequest(); return N(e, t); }
    _linkToIdToken(e, t) { let i = this.buildRequest(); return i.idToken = t, N(e, i); }
    _getReauthenticationResolver(e) { let t = this.buildRequest(); return t.autoCreate = !1, N(e, t); }
    buildRequest() { let e = { requestUri: Nr, returnSecureToken: !0 }; if (this.pendingToken)
        e.pendingToken = this.pendingToken;
    else {
        let t = {};
        this.idToken && (t.id_token = this.idToken), this.accessToken && (t.access_token = this.accessToken), this.secret && (t.oauth_token_secret = this.secret), t.providerId = this.providerId, this.nonce && !this.pendingToken && (t.nonce = this.nonce), e.postBody = q(t);
    } return e; }
};
function Nn(n, e) { return a(this, null, function* () { return g(n, "POST", "/v1/accounts:sendVerificationCode", m(n, e)); }); }
function Or(n, e) { return a(this, null, function* () { return L(n, "POST", "/v1/accounts:signInWithPhoneNumber", m(n, e)); }); }
function Cr(n, e) { return a(this, null, function* () { let t = yield L(n, "POST", "/v1/accounts:signInWithPhoneNumber", m(n, e)); if (t.temporaryProof)
    throw ee(n, "account-exists-with-different-credential", t); return t; }); }
var Dr = { USER_NOT_FOUND: "user-not-found" };
function Lr(n, e) { return a(this, null, function* () { let t = Object.assign(Object.assign({}, e), { operation: "REAUTH" }); return L(n, "POST", "/v1/accounts:signInWithPhoneNumber", m(n, t), Dr); }); }
var J = class n extends W {
    constructor(e) { super("phone", "phone"), this.params = e; }
    static _fromVerification(e, t) { return new n({ verificationId: e, verificationCode: t }); }
    static _fromTokenResponse(e, t) { return new n({ phoneNumber: e, temporaryProof: t }); }
    _getIdTokenResponse(e) { return Or(e, this._makeVerificationRequest()); }
    _linkToIdToken(e, t) { return Cr(e, Object.assign({ idToken: t }, this._makeVerificationRequest())); }
    _getReauthenticationResolver(e) { return Lr(e, this._makeVerificationRequest()); }
    _makeVerificationRequest() { let { temporaryProof: e, phoneNumber: t, verificationId: i, verificationCode: r } = this.params; return e && t ? { temporaryProof: e, phoneNumber: t } : { sessionInfo: i, code: r }; }
    toJSON() { let e = { providerId: this.providerId }; return this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (e.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (e.verificationCode = this.params.verificationCode), this.params.verificationId && (e.verificationId = this.params.verificationId), e; }
    static fromJSON(e) { typeof e == "string" && (e = JSON.parse(e)); let { verificationId: t, verificationCode: i, phoneNumber: r, temporaryProof: s } = e; return !i && !t && !r && !s ? null : new n({ verificationId: t, verificationCode: i, phoneNumber: r, temporaryProof: s }); }
};
function Mr(n) { switch (n) {
    case "recoverEmail": return "RECOVER_EMAIL";
    case "resetPassword": return "PASSWORD_RESET";
    case "signIn": return "EMAIL_SIGNIN";
    case "verifyEmail": return "VERIFY_EMAIL";
    case "verifyAndChangeEmail": return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition": return "REVERT_SECOND_FACTOR_ADDITION";
    default: return null;
} }
function Ur(n) { let e = $(B(n)).link, t = e ? $(B(e)).deep_link_id : null, i = $(B(n)).deep_link_id; return (i ? $(B(i)).link : null) || i || t || e || n; }
var X = class n {
    constructor(e) { var t, i, r, s, o, c; let u = $(B(e)), d = (t = u.apiKey) !== null && t !== void 0 ? t : null, h = (i = u.oobCode) !== null && i !== void 0 ? i : null, f = Mr((r = u.mode) !== null && r !== void 0 ? r : null); l(d && h && f, "argument-error"), this.apiKey = d, this.operation = f, this.code = h, this.continueUrl = (s = u.continueUrl) !== null && s !== void 0 ? s : null, this.languageCode = (o = u.lang) !== null && o !== void 0 ? o : null, this.tenantId = (c = u.tenantId) !== null && c !== void 0 ? c : null; }
    static parseLink(e) { let t = Ur(e); try {
        return new n(t);
    }
    catch {
        return null;
    } }
};
function Vr(n) { return X.parseLink(n); }
var Jt = (() => { class n {
    constructor() { this.providerId = n.PROVIDER_ID; }
    static credential(t, i) { return ce._fromEmailAndPassword(t, i); }
    static credentialWithLink(t, i) { let r = X.parseLink(i); return l(r, "argument-error"), ce._fromEmailAndCode(t, r.code, r.tenantId); }
} n.PROVIDER_ID = "password", n.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", n.EMAIL_LINK_SIGN_IN_METHOD = "emailLink"; return n; })(), P = class {
    constructor(e) { this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {}; }
    setDefaultLanguage(e) { this.defaultLanguageCode = e; }
    setCustomParameters(e) { return this.customParameters = e, this; }
    getCustomParameters() { return this.customParameters; }
};
var x = class extends P {
    constructor() { super(...arguments), this.scopes = []; }
    addScope(e) { return this.scopes.includes(e) || this.scopes.push(e), this; }
    getScopes() { return [...this.scopes]; }
}, yt = class n extends x {
    static credentialFromJSON(e) { let t = typeof e == "string" ? JSON.parse(e) : e; return l("providerId" in t && "signInMethod" in t, "argument-error"), D._fromParams(t); }
    credential(e) { return this._credential(Object.assign(Object.assign({}, e), { nonce: e.rawNonce })); }
    _credential(e) { return l(e.idToken || e.accessToken, "argument-error"), D._fromParams(Object.assign(Object.assign({}, e), { providerId: this.providerId, signInMethod: this.providerId })); }
    static credentialFromResult(e) { return n.oauthCredentialFromTaggedObject(e); }
    static credentialFromError(e) { return n.oauthCredentialFromTaggedObject(e.customData || {}); }
    static oauthCredentialFromTaggedObject({ _tokenResponse: e }) { if (!e)
        return null; let { oauthIdToken: t, oauthAccessToken: i, oauthTokenSecret: r, pendingToken: s, nonce: o, providerId: c } = e; if (!i && !r && !t && !s || !c)
        return null; try {
        return new n(c)._credential({ idToken: t, accessToken: i, nonce: o, pendingToken: s });
    }
    catch {
        return null;
    } }
};
var Fr = (() => { class n extends x {
    constructor() { super("facebook.com"); }
    static credential(t) { return D._fromParams({ providerId: n.PROVIDER_ID, signInMethod: n.FACEBOOK_SIGN_IN_METHOD, accessToken: t }); }
    static credentialFromResult(t) { return n.credentialFromTaggedObject(t); }
    static credentialFromError(t) { return n.credentialFromTaggedObject(t.customData || {}); }
    static credentialFromTaggedObject({ _tokenResponse: t }) { if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken)
        return null; try {
        return n.credential(t.oauthAccessToken);
    }
    catch {
        return null;
    } }
} n.FACEBOOK_SIGN_IN_METHOD = "facebook.com", n.PROVIDER_ID = "facebook.com"; return n; })(), Wr = (() => { class n extends x {
    constructor() { super("google.com"), this.addScope("profile"); }
    static credential(t, i) { return D._fromParams({ providerId: n.PROVIDER_ID, signInMethod: n.GOOGLE_SIGN_IN_METHOD, idToken: t, accessToken: i }); }
    static credentialFromResult(t) { return n.credentialFromTaggedObject(t); }
    static credentialFromError(t) { return n.credentialFromTaggedObject(t.customData || {}); }
    static credentialFromTaggedObject({ _tokenResponse: t }) { if (!t)
        return null; let { oauthIdToken: i, oauthAccessToken: r } = t; if (!i && !r)
        return null; try {
        return n.credential(i, r);
    }
    catch {
        return null;
    } }
} n.GOOGLE_SIGN_IN_METHOD = "google.com", n.PROVIDER_ID = "google.com"; return n; })(), xr = (() => { class n extends x {
    constructor() { super("github.com"); }
    static credential(t) { return D._fromParams({ providerId: n.PROVIDER_ID, signInMethod: n.GITHUB_SIGN_IN_METHOD, accessToken: t }); }
    static credentialFromResult(t) { return n.credentialFromTaggedObject(t); }
    static credentialFromError(t) { return n.credentialFromTaggedObject(t.customData || {}); }
    static credentialFromTaggedObject({ _tokenResponse: t }) { if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken)
        return null; try {
        return n.credential(t.oauthAccessToken);
    }
    catch {
        return null;
    } }
} n.GITHUB_SIGN_IN_METHOD = "github.com", n.PROVIDER_ID = "github.com"; return n; })(), Hr = "http://localhost", Ne = class n extends W {
    constructor(e, t) { super(e, e), this.pendingToken = t; }
    _getIdTokenResponse(e) { let t = this.buildRequest(); return N(e, t); }
    _linkToIdToken(e, t) { let i = this.buildRequest(); return i.idToken = t, N(e, i); }
    _getReauthenticationResolver(e) { let t = this.buildRequest(); return t.autoCreate = !1, N(e, t); }
    toJSON() { return { signInMethod: this.signInMethod, providerId: this.providerId, pendingToken: this.pendingToken }; }
    static fromJSON(e) { let t = typeof e == "string" ? JSON.parse(e) : e, { providerId: i, signInMethod: r, pendingToken: s } = t; return !i || !r || !s || i !== r ? null : new n(i, s); }
    static _create(e, t) { return new n(e, t); }
    buildRequest() { return { requestUri: Hr, returnSecureToken: !0, pendingToken: this.pendingToken }; }
};
var qr = "saml.", wt = class n extends P {
    constructor(e) { l(e.startsWith(qr), "argument-error"), super(e); }
    static credentialFromResult(e) { return n.samlCredentialFromTaggedObject(e); }
    static credentialFromError(e) { return n.samlCredentialFromTaggedObject(e.customData || {}); }
    static credentialFromJSON(e) { let t = Ne.fromJSON(e); return l(t, "argument-error"), t; }
    static samlCredentialFromTaggedObject({ _tokenResponse: e }) { if (!e)
        return null; let { pendingToken: t, providerId: i } = e; if (!t || !i)
        return null; try {
        return Ne._create(i, t);
    }
    catch {
        return null;
    } }
};
var jr = (() => { class n extends x {
    constructor() { super("twitter.com"); }
    static credential(t, i) { return D._fromParams({ providerId: n.PROVIDER_ID, signInMethod: n.TWITTER_SIGN_IN_METHOD, oauthToken: t, oauthTokenSecret: i }); }
    static credentialFromResult(t) { return n.credentialFromTaggedObject(t); }
    static credentialFromError(t) { return n.credentialFromTaggedObject(t.customData || {}); }
    static credentialFromTaggedObject({ _tokenResponse: t }) { if (!t)
        return null; let { oauthAccessToken: i, oauthTokenSecret: r } = t; if (!i || !r)
        return null; try {
        return n.credential(i, r);
    }
    catch {
        return null;
    } }
} n.TWITTER_SIGN_IN_METHOD = "twitter.com", n.PROVIDER_ID = "twitter.com"; return n; })();
function hi(n, e) { return a(this, null, function* () { return L(n, "POST", "/v1/accounts:signUp", m(n, e)); }); }
var k = class n {
    constructor(e) { this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType; }
    static _fromIdTokenResponse(e, t, i, r = !1) { return a(this, null, function* () { let s = yield U._fromIdTokenResponse(e, i, r), o = On(i); return new n({ user: s, providerId: o, _tokenResponse: i, operationType: t }); }); }
    static _forOperation(e, t, i) { return a(this, null, function* () { yield e._updateTokensIfNecessary(i, !0); let r = On(i); return new n({ user: e, providerId: r, _tokenResponse: i, operationType: t }); }); }
};
function On(n) { return n.providerId ? n.providerId : "phoneNumber" in n ? "phone" : null; }
function Gr(n) { return a(this, null, function* () { var e; if (I(n.app))
    return Promise.reject(T(n)); let t = v(n); if (yield t._initializationPromise, !((e = t.currentUser) === null || e === void 0) && e.isAnonymous)
    return new k({ user: t.currentUser, providerId: null, operationType: "signIn" }); let i = yield hi(t, { returnSecureToken: !0 }), r = yield k._fromIdTokenResponse(t, "signIn", i, !0); return yield t._updateCurrentUser(r.user), r; }); }
var At = class n extends fe {
    constructor(e, t, i, r) { var s; super(t.code, t.message), this.operationType = i, this.user = r, Object.setPrototypeOf(this, n.prototype), this.customData = { appName: e.name, tenantId: (s = e.tenantId) !== null && s !== void 0 ? s : void 0, _serverResponse: t.customData._serverResponse, operationType: i }; }
    static _fromErrorAndOperation(e, t, i, r) { return new n(e, t, i, r); }
};
function pi(n, e, t, i) { return (e === "reauthenticate" ? t._getReauthenticationResolver(n) : t._getIdTokenResponse(n)).catch(s => { throw s.code === "auth/multi-factor-auth-required" ? At._fromErrorAndOperation(n, s, e, i) : s; }); }
function fi(n) { return new Set(n.map(({ providerId: e }) => e).filter(e => !!e)); }
function zr(n, e) { return a(this, null, function* () { let t = p(n); yield je(!0, t, e); let { providerUserInfo: i } = yield Qi(t.auth, { idToken: yield t.getIdToken(), deleteProvider: [e] }), r = fi(i || []); return t.providerData = t.providerData.filter(s => r.has(s.providerId)), r.has("phone") || (t.phoneNumber = null), yield t.auth._persistUserIfCurrent(t), t; }); }
function Xt(n, e, t = !1) { return a(this, null, function* () { let i = yield C(n, e._linkToIdToken(n.auth, yield n.getIdToken()), t); return k._forOperation(n, "link", i); }); }
function je(n, e, t) { return a(this, null, function* () { yield oe(e); let i = fi(e.providerData), r = n === !1 ? "provider-already-linked" : "no-such-provider"; l(i.has(t) === n, e.auth, r); }); }
function mi(n, e, t = !1) { return a(this, null, function* () { let { auth: i } = n; if (I(i.app))
    return Promise.reject(T(i)); let r = "reauthenticate"; try {
    let s = yield C(n, pi(i, r, e, n), t);
    l(s.idToken, i, "internal-error");
    let o = He(s.idToken);
    l(o, i, "internal-error");
    let { sub: c } = o;
    return l(n.uid === c, i, "user-mismatch"), k._forOperation(n, r, s);
}
catch (s) {
    throw s?.code === "auth/user-not-found" && R(i, "user-mismatch"), s;
} }); }
function gi(n, e, t = !1) { return a(this, null, function* () { if (I(n.app))
    return Promise.reject(T(n)); let i = "signIn", r = yield pi(n, i, e), s = yield k._fromIdTokenResponse(n, i, r); return t || (yield n._updateCurrentUser(s.user)), s; }); }
function Ge(n, e) { return a(this, null, function* () { return gi(v(n), e); }); }
function _i(n, e) { return a(this, null, function* () { let t = p(n); return yield je(!1, t, e.providerId), Xt(t, e); }); }
function Ii(n, e) { return a(this, null, function* () { return mi(p(n), e); }); }
function Kr(n, e) { return a(this, null, function* () { return L(n, "POST", "/v1/accounts:signInWithCustomToken", m(n, e)); }); }
function $r(n, e) { return a(this, null, function* () { if (I(n.app))
    return Promise.reject(T(n)); let t = v(n), i = yield Kr(t, { token: e, returnSecureToken: !0 }), r = yield k._fromIdTokenResponse(t, "signIn", i); return yield t._updateCurrentUser(r.user), r; }); }
var G = class {
    constructor(e, t) { this.factorId = e, this.uid = t.mfaEnrollmentId, this.enrollmentTime = new Date(t.enrolledAt).toUTCString(), this.displayName = t.displayName; }
    static _fromServerResponse(e, t) { return "phoneInfo" in t ? Rt._fromServerResponse(e, t) : "totpInfo" in t ? Pt._fromServerResponse(e, t) : R(e, "internal-error"); }
}, Rt = class n extends G {
    constructor(e) { super("phone", e), this.phoneNumber = e.phoneInfo; }
    static _fromServerResponse(e, t) { return new n(t); }
}, Pt = class n extends G {
    constructor(e) { super("totp", e); }
    static _fromServerResponse(e, t) { return new n(t); }
};
function ze(n, e, t) { var i; l(((i = t.url) === null || i === void 0 ? void 0 : i.length) > 0, n, "invalid-continue-uri"), l(typeof t.dynamicLinkDomain > "u" || t.dynamicLinkDomain.length > 0, n, "invalid-dynamic-link-domain"), l(typeof t.linkDomain > "u" || t.linkDomain.length > 0, n, "invalid-hosting-link-domain"), e.continueUrl = t.url, e.dynamicLinkDomain = t.dynamicLinkDomain, e.linkDomain = t.linkDomain, e.canHandleCodeInApp = t.handleCodeInApp, t.iOS && (l(t.iOS.bundleId.length > 0, n, "missing-ios-bundle-id"), e.iOSBundleId = t.iOS.bundleId), t.android && (l(t.android.packageName.length > 0, n, "missing-android-pkg-name"), e.androidInstallApp = t.android.installApp, e.androidMinimumVersionCode = t.android.minimumVersion, e.androidPackageName = t.android.packageName); }
function Qt(n) { return a(this, null, function* () { let e = v(n); e._getPasswordPolicyInternal() && (yield e._updatePasswordPolicy()); }); }
function Br(n, e, t) { return a(this, null, function* () { let i = v(n), r = { requestType: "PASSWORD_RESET", email: e, clientType: "CLIENT_TYPE_WEB" }; t && ze(i, r, t), yield V(i, r, "getOobCode", Rr, "EMAIL_PASSWORD_PROVIDER"); }); }
function Yr(n, e, t) { return a(this, null, function* () { yield di(p(n), { oobCode: e, newPassword: t }).catch(i => a(null, null, function* () { throw i.code === "auth/password-does-not-meet-requirements" && Qt(n), i; })); }); }
function Jr(n, e) { return a(this, null, function* () { yield yr(p(n), { oobCode: e }); }); }
function vi(n, e) { return a(this, null, function* () { let t = p(n), i = yield di(t, { oobCode: e }), r = i.requestType; switch (l(r, t, "internal-error"), r) {
    case "EMAIL_SIGNIN": break;
    case "VERIFY_AND_CHANGE_EMAIL":
        l(i.newEmail, t, "internal-error");
        break;
    case "REVERT_SECOND_FACTOR_ADDITION": l(i.mfaInfo, t, "internal-error");
    default: l(i.email, t, "internal-error");
} let s = null; return i.mfaInfo && (s = G._fromServerResponse(v(t), i.mfaInfo)), { data: { email: (i.requestType === "VERIFY_AND_CHANGE_EMAIL" ? i.newEmail : i.email) || null, previousEmail: (i.requestType === "VERIFY_AND_CHANGE_EMAIL" ? i.email : i.newEmail) || null, multiFactorInfo: s }, operation: r }; }); }
function Xr(n, e) { return a(this, null, function* () { let { data: t } = yield vi(p(n), e); return t.email; }); }
function Qr(n, e, t) { return a(this, null, function* () { if (I(n.app))
    return Promise.reject(T(n)); let i = v(n), o = yield V(i, { returnSecureToken: !0, email: e, password: t, clientType: "CLIENT_TYPE_WEB" }, "signUpPassword", hi, "EMAIL_PASSWORD_PROVIDER").catch(u => { throw u.code === "auth/password-does-not-meet-requirements" && Qt(n), u; }), c = yield k._fromIdTokenResponse(i, "signIn", o); return yield i._updateCurrentUser(c.user), c; }); }
function Zr(n, e, t) { return I(n.app) ? Promise.reject(T(n)) : Ge(p(n), Jt.credential(e, t)).catch(i => a(null, null, function* () { throw i.code === "auth/password-does-not-meet-requirements" && Qt(n), i; })); }
function es(n, e, t) { return a(this, null, function* () { let i = v(n), r = { requestType: "EMAIL_SIGNIN", email: e, clientType: "CLIENT_TYPE_WEB" }; function s(o, c) { l(c.handleCodeInApp, i, "argument-error"), c && ze(i, o, c); } s(r, t), yield V(i, r, "getOobCode", Pr, "EMAIL_PASSWORD_PROVIDER"); }); }
function ts(n, e) { let t = X.parseLink(e); return t?.operation === "EMAIL_SIGNIN"; }
function ns(n, e, t) { return a(this, null, function* () { if (I(n.app))
    return Promise.reject(T(n)); let i = p(n), r = Jt.credentialWithLink(e, t || se()); return l(r._tenantId === (i.tenantId || null), i, "tenant-id-mismatch"), Ge(i, r); }); }
function is(n, e) { return a(this, null, function* () { return g(n, "POST", "/v1/accounts:createAuthUri", m(n, e)); }); }
function rs(n, e) { return a(this, null, function* () { let t = Kt() ? se() : "http://localhost", i = { identifier: e, continueUri: t }, { signinMethods: r } = yield is(p(n), i); return r || []; }); }
function ss(n, e) { return a(this, null, function* () { let t = p(n), r = { requestType: "VERIFY_EMAIL", idToken: yield n.getIdToken() }; e && ze(t.auth, r, e); let { email: s } = yield Ar(t.auth, r); s !== n.email && (yield n.reload()); }); }
function as(n, e, t) { return a(this, null, function* () { let i = p(n), s = { requestType: "VERIFY_AND_CHANGE_EMAIL", idToken: yield n.getIdToken(), newEmail: e }; t && ze(i.auth, s, t); let { email: o } = yield kr(i.auth, s); o !== n.email && (yield n.reload()); }); }
function os(n, e) { return a(this, null, function* () { return g(n, "POST", "/v1/accounts:update", e); }); }
function cs(i, r) { return a(this, arguments, function* (n, { displayName: e, photoURL: t }) { if (e === void 0 && t === void 0)
    return; let s = p(n), c = { idToken: yield s.getIdToken(), displayName: e, photoUrl: t, returnSecureToken: !0 }, u = yield C(s, os(s.auth, c)); s.displayName = u.displayName || null, s.photoURL = u.photoUrl || null; let d = s.providerData.find(({ providerId: h }) => h === "password"); d && (d.displayName = s.displayName, d.photoURL = s.photoURL), yield s._updateTokensIfNecessary(u); }); }
function us(n, e) { let t = p(n); return I(t.auth.app) ? Promise.reject(T(t.auth)) : Ei(t, e, null); }
function ls(n, e) { return Ei(p(n), null, e); }
function Ei(n, e, t) { return a(this, null, function* () { let { auth: i } = n, s = { idToken: yield n.getIdToken(), returnSecureToken: !0 }; e && (s.email = e), t && (s.password = t); let o = yield C(n, Er(i, s)); yield n._updateTokensIfNecessary(o, !0); }); }
function ds(n) { var e, t; if (!n)
    return null; let { providerId: i } = n, r = n.rawUserInfo ? JSON.parse(n.rawUserInfo) : {}, s = n.isNewUser || n.kind === "identitytoolkit#SignupNewUserResponse"; if (!i && n?.idToken) {
    let o = (t = (e = He(n.idToken)) === null || e === void 0 ? void 0 : e.firebase) === null || t === void 0 ? void 0 : t.sign_in_provider;
    if (o) {
        let c = o !== "anonymous" && o !== "custom" ? o : null;
        return new F(s, c);
    }
} if (!i)
    return null; switch (i) {
    case "facebook.com": return new kt(s, r);
    case "github.com": return new St(s, r);
    case "google.com": return new bt(s, r);
    case "twitter.com": return new Nt(s, r, n.screenName || null);
    case "custom":
    case "anonymous": return new F(s, null);
    default: return new F(s, i, r);
} }
var F = class {
    constructor(e, t, i = {}) { this.isNewUser = e, this.providerId = t, this.profile = i; }
}, Oe = class extends F {
    constructor(e, t, i, r) { super(e, t, i), this.username = r; }
}, kt = class extends F {
    constructor(e, t) { super(e, "facebook.com", t); }
}, St = class extends Oe {
    constructor(e, t) { super(e, "github.com", t, typeof t?.login == "string" ? t?.login : null); }
}, bt = class extends F {
    constructor(e, t) { super(e, "google.com", t); }
}, Nt = class extends Oe {
    constructor(e, t, i) { super(e, "twitter.com", t, i); }
};
function hs(n) { let { user: e, _tokenResponse: t } = n; return e.isAnonymous && !t ? { providerId: null, isNewUser: !1, profile: null } : ds(t); }
function ps(n, e) { return p(n).setPersistence(e); }
function fs(n) { return oi(n); }
function ms(n, e) { return a(this, null, function* () { return v(n).validatePassword(e); }); }
function Ti(n, e, t, i) { return p(n).onIdTokenChanged(e, t, i); }
function yi(n, e, t) { return p(n).beforeAuthStateChanged(e, t); }
function gs(n, e, t, i) { return p(n).onAuthStateChanged(e, t, i); }
function _s(n) { p(n).useDeviceLanguage(); }
function Is(n, e) { return p(n).updateCurrentUser(e); }
function vs(n) { return p(n).signOut(); }
function Es(n, e) { return v(n).revokeAccessToken(e); }
function Ts(n) { return a(this, null, function* () { return p(n).delete(); }); }
var Ce = class n {
    constructor(e, t, i) { this.type = e, this.credential = t, this.user = i; }
    static _fromIdtoken(e, t) { return new n("enroll", e, t); }
    static _fromMfaPendingCredential(e) { return new n("signin", e); }
    toJSON() { return { multiFactorSession: { [this.type === "enroll" ? "idToken" : "pendingCredential"]: this.credential } }; }
    static fromJSON(e) { var t, i; if (e?.multiFactorSession) {
        if (!((t = e.multiFactorSession) === null || t === void 0) && t.pendingCredential)
            return n._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);
        if (!((i = e.multiFactorSession) === null || i === void 0) && i.idToken)
            return n._fromIdtoken(e.multiFactorSession.idToken);
    } return null; }
};
var Ot = class n {
    constructor(e, t, i) { this.session = e, this.hints = t, this.signInResolver = i; }
    static _fromError(e, t) { let i = v(e), r = t.customData._serverResponse, s = (r.mfaInfo || []).map(c => G._fromServerResponse(i, c)); l(r.mfaPendingCredential, i, "internal-error"); let o = Ce._fromMfaPendingCredential(r.mfaPendingCredential); return new n(o, s, c => a(null, null, function* () { let u = yield c._process(i, o); delete r.mfaInfo, delete r.mfaPendingCredential; let d = Object.assign(Object.assign({}, r), { idToken: u.idToken, refreshToken: u.refreshToken }); switch (t.operationType) {
        case "signIn":
            let h = yield k._fromIdTokenResponse(i, t.operationType, d);
            return yield i._updateCurrentUser(h.user), h;
        case "reauthenticate": return l(t.user, i, "internal-error"), k._forOperation(t.user, t.operationType, d);
        default: R(i, "internal-error");
    } })); }
    resolveSignIn(e) { return a(this, null, function* () { let t = e; return this.signInResolver(t); }); }
};
function ys(n, e) { var t; let i = p(n), r = e; return l(e.customData.operationType, i, "argument-error"), l((t = r.customData._serverResponse) === null || t === void 0 ? void 0 : t.mfaPendingCredential, i, "argument-error"), Ot._fromError(i, r); }
function Cn(n, e) { return g(n, "POST", "/v2/accounts/mfaEnrollment:start", m(n, e)); }
function ws(n, e) { return g(n, "POST", "/v2/accounts/mfaEnrollment:finalize", m(n, e)); }
function As(n, e) { return g(n, "POST", "/v2/accounts/mfaEnrollment:start", m(n, e)); }
function Rs(n, e) { return g(n, "POST", "/v2/accounts/mfaEnrollment:finalize", m(n, e)); }
function Ps(n, e) { return g(n, "POST", "/v2/accounts/mfaEnrollment:withdraw", m(n, e)); }
var Ct = class n {
    constructor(e) { this.user = e, this.enrolledFactors = [], e._onReload(t => { t.mfaInfo && (this.enrolledFactors = t.mfaInfo.map(i => G._fromServerResponse(e.auth, i))); }); }
    static _fromUser(e) { return new n(e); }
    getSession() { return a(this, null, function* () { return Ce._fromIdtoken(yield this.user.getIdToken(), this.user); }); }
    enroll(e, t) { return a(this, null, function* () { let i = e, r = yield this.getSession(), s = yield C(this.user, i._process(this.user.auth, r, t)); return yield this.user._updateTokensIfNecessary(s), this.user.reload(); }); }
    unenroll(e) { return a(this, null, function* () { let t = typeof e == "string" ? e : e.uid, i = yield this.user.getIdToken(); try {
        let r = yield C(this.user, Ps(this.user.auth, { idToken: i, mfaEnrollmentId: t }));
        this.enrolledFactors = this.enrolledFactors.filter(({ uid: s }) => s !== t), yield this.user._updateTokensIfNecessary(r), yield this.user.reload();
    }
    catch (r) {
        throw r;
    } }); }
}, at = new WeakMap;
function ks(n) { let e = p(n); return at.has(e) || at.set(e, Ct._fromUser(e)), at.get(e); }
var De = "__sak";
var Le = class {
    constructor(e, t) { this.storageRetriever = e, this.type = t; }
    _isAvailable() { try {
        return this.storage ? (this.storage.setItem(De, "1"), this.storage.removeItem(De), Promise.resolve(!0)) : Promise.resolve(!1);
    }
    catch {
        return Promise.resolve(!1);
    } }
    _set(e, t) { return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve(); }
    _get(e) { let t = this.storage.getItem(e); return Promise.resolve(t ? JSON.parse(t) : null); }
    _remove(e) { return this.storage.removeItem(e), Promise.resolve(); }
    get storage() { return this.storageRetriever(); }
};
var Ss = 1e3, bs = 10, Ns = (() => { class n extends Le {
    constructor() { super(() => window.localStorage, "LOCAL"), this.boundEventHandler = (t, i) => this.onStorageEvent(t, i), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.fallbackToPolling = ri(), this._shouldAllowMigration = !0; }
    forAllChangedKeys(t) { for (let i of Object.keys(this.listeners)) {
        let r = this.storage.getItem(i), s = this.localCache[i];
        r !== s && t(i, s, r);
    } }
    onStorageEvent(t, i = !1) { if (!t.key) {
        this.forAllChangedKeys((c, u, d) => { this.notifyListeners(c, d); });
        return;
    } let r = t.key; i ? this.detachListener() : this.stopPolling(); let s = () => { let c = this.storage.getItem(r); !i && this.localCache[r] === c || this.notifyListeners(r, c); }, o = this.storage.getItem(r); ar() && o !== t.newValue && t.newValue !== t.oldValue ? setTimeout(s, bs) : s(); }
    notifyListeners(t, i) { this.localCache[t] = i; let r = this.listeners[t]; if (r)
        for (let s of Array.from(r))
            s(i && JSON.parse(i)); }
    startPolling() { this.stopPolling(), this.pollTimer = setInterval(() => { this.forAllChangedKeys((t, i, r) => { this.onStorageEvent(new StorageEvent("storage", { key: t, oldValue: i, newValue: r }), !0); }); }, Ss); }
    stopPolling() { this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null); }
    attachListener() { window.addEventListener("storage", this.boundEventHandler); }
    detachListener() { window.removeEventListener("storage", this.boundEventHandler); }
    _addListener(t, i) { Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[t] || (this.listeners[t] = new Set, this.localCache[t] = this.storage.getItem(t)), this.listeners[t].add(i); }
    _removeListener(t, i) { this.listeners[t] && (this.listeners[t].delete(i), this.listeners[t].size === 0 && delete this.listeners[t]), Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling()); }
    _set(t, i) { return a(this, null, function* () { yield H(n.prototype, this, "_set").call(this, t, i), this.localCache[t] = JSON.stringify(i); }); }
    _get(t) { return a(this, null, function* () { let i = yield H(n.prototype, this, "_get").call(this, t); return this.localCache[t] = JSON.stringify(i), i; }); }
    _remove(t) { return a(this, null, function* () { yield H(n.prototype, this, "_remove").call(this, t), delete this.localCache[t]; }); }
} return n.type = "LOCAL", n; })(), wi = Ns;
var Os = 1e3;
function ot(n) { var e, t; let i = n.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), r = RegExp(`${i}=([^;]+)`); return (t = (e = document.cookie.match(r)) === null || e === void 0 ? void 0 : e[1]) !== null && t !== void 0 ? t : null; }
function ct(n) { return `${window.location.protocol === "http:" ? "__dev_" : "__HOST-"}FIREBASE_${n.split(":")[3]}`; }
var Cs = (() => { class n {
    constructor() { this.type = "COOKIE", this.listenerUnsubscribes = new Map; }
    _getFinalTarget(t) { if (typeof window === void 0)
        return t; let i = new URL(`${window.location.origin}/__cookies__`); return i.searchParams.set("finalTarget", t), i; }
    _isAvailable() { return a(this, null, function* () { var t; return typeof isSecureContext == "boolean" && !isSecureContext || typeof navigator > "u" || typeof document > "u" ? !1 : (t = navigator.cookieEnabled) !== null && t !== void 0 ? t : !0; }); }
    _set(t, i) { return a(this, null, function* () { }); }
    _get(t) { return a(this, null, function* () { if (!this._isAvailable())
        return null; let i = ct(t); if (window.cookieStore) {
        let r = yield window.cookieStore.get(i);
        return r?.value;
    } return ot(i); }); }
    _remove(t) { return a(this, null, function* () { if (!this._isAvailable() || !(yield this._get(t)))
        return; let r = ct(t); document.cookie = `${r}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`, yield fetch("/__cookies__", { method: "DELETE" }).catch(() => { }); }); }
    _addListener(t, i) { if (!this._isAvailable())
        return; let r = ct(t); if (window.cookieStore) {
        let u = h => { let f = h.changed.find(w => w.name === r); f && i(f.value), h.deleted.find(w => w.name === r) && i(null); }, d = () => window.cookieStore.removeEventListener("change", u);
        return this.listenerUnsubscribes.set(i, d), window.cookieStore.addEventListener("change", u);
    } let s = ot(r), o = setInterval(() => { let u = ot(r); u !== s && (i(u), s = u); }, Os), c = () => clearInterval(o); this.listenerUnsubscribes.set(i, c); }
    _removeListener(t, i) { let r = this.listenerUnsubscribes.get(i); r && (r(), this.listenerUnsubscribes.delete(i)); }
} return n.type = "COOKIE", n; })(), Ds = Cs;
var Ls = (() => { class n extends Le {
    constructor() { super(() => window.sessionStorage, "SESSION"); }
    _addListener(t, i) { }
    _removeListener(t, i) { }
} return n.type = "SESSION", n; })(), Zt = Ls;
function Ms(n) { return Promise.all(n.map(e => a(null, null, function* () { try {
    return { fulfilled: !0, value: yield e };
}
catch (t) {
    return { fulfilled: !1, reason: t };
} }))); }
var Us = (() => { class n {
    constructor(t) { this.eventTarget = t, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this); }
    static _getInstance(t) { let i = this.receivers.find(s => s.isListeningto(t)); if (i)
        return i; let r = new n(t); return this.receivers.push(r), r; }
    isListeningto(t) { return this.eventTarget === t; }
    handleEvent(t) { return a(this, null, function* () { let i = t, { eventId: r, eventType: s, data: o } = i.data, c = this.handlersMap[s]; if (!c?.size)
        return; i.ports[0].postMessage({ status: "ack", eventId: r, eventType: s }); let u = Array.from(c).map(h => a(this, null, function* () { return h(i.origin, o); })), d = yield Ms(u); i.ports[0].postMessage({ status: "done", eventId: r, eventType: s, response: d }); }); }
    _subscribe(t, i) { Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[t] || (this.handlersMap[t] = new Set), this.handlersMap[t].add(i); }
    _unsubscribe(t, i) { this.handlersMap[t] && i && this.handlersMap[t].delete(i), (!i || this.handlersMap[t].size === 0) && delete this.handlersMap[t], Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler); }
} n.receivers = []; return n; })();
function Ke(n = "", e = 10) { let t = ""; for (let i = 0; i < e; i++)
    t += Math.floor(Math.random() * 10); return n + t; }
var Dt = class {
    constructor(e) { this.target = e, this.handlers = new Set; }
    removeMessageHandler(e) { e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e); }
    _send(e, t, i = 50) { return a(this, null, function* () { let r = typeof MessageChannel < "u" ? new MessageChannel : null; if (!r)
        throw new Error("connection_unavailable"); let s, o; return new Promise((c, u) => { let d = Ke("", 20); r.port1.start(); let h = setTimeout(() => { u(new Error("unsupported_event")); }, i); o = { messageChannel: r, onMessage(f) { let _ = f; if (_.data.eventId === d)
            switch (_.data.status) {
                case "ack":
                    clearTimeout(h), s = setTimeout(() => { u(new Error("timeout")); }, 3e3);
                    break;
                case "done":
                    clearTimeout(s), c(_.data.response);
                    break;
                default:
                    clearTimeout(h), clearTimeout(s), u(new Error("invalid_response"));
                    break;
            } } }, this.handlers.add(o), r.port1.addEventListener("message", o.onMessage), this.target.postMessage({ eventType: e, eventId: d, data: t }, [r.port2]); }).finally(() => { o && this.removeMessageHandler(o); }); }); }
};
function E() { return window; }
function Vs(n) { E().location.href = n; }
function en() { return typeof E().WorkerGlobalScope < "u" && typeof E().importScripts == "function"; }
function Fs() { return a(this, null, function* () { if (!navigator?.serviceWorker)
    return null; try {
    return (yield navigator.serviceWorker.ready).active;
}
catch {
    return null;
} }); }
function Ws() { var n; return ((n = navigator?.serviceWorker) === null || n === void 0 ? void 0 : n.controller) || null; }
function xs() { return en() ? self : null; }
var Ai = "firebaseLocalStorageDb", Hs = 1, Me = "firebaseLocalStorage", Ri = "fbase_key", z = class {
    constructor(e) { this.request = e; }
    toPromise() { return new Promise((e, t) => { this.request.addEventListener("success", () => { e(this.request.result); }), this.request.addEventListener("error", () => { t(this.request.error); }); }); }
};
function $e(n, e) { return n.transaction([Me], e ? "readwrite" : "readonly").objectStore(Me); }
function qs() { let n = indexedDB.deleteDatabase(Ai); return new z(n).toPromise(); }
function Lt() { let n = indexedDB.open(Ai, Hs); return new Promise((e, t) => { n.addEventListener("error", () => { t(n.error); }), n.addEventListener("upgradeneeded", () => { let i = n.result; try {
    i.createObjectStore(Me, { keyPath: Ri });
}
catch (r) {
    t(r);
} }), n.addEventListener("success", () => a(null, null, function* () { let i = n.result; i.objectStoreNames.contains(Me) ? e(i) : (i.close(), yield qs(), e(yield Lt())); })); }); }
function Dn(n, e, t) { return a(this, null, function* () { let i = $e(n, !0).put({ [Ri]: e, value: t }); return new z(i).toPromise(); }); }
function js(n, e) { return a(this, null, function* () { let t = $e(n, !1).get(e), i = yield new z(t).toPromise(); return i === void 0 ? null : i.value; }); }
function Ln(n, e) { let t = $e(n, !0).delete(e); return new z(t).toPromise(); }
var Gs = 800, zs = 3, Ks = (() => { class n {
    constructor() { this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => { }, () => { }); }
    _openDb() { return a(this, null, function* () { return this.db ? this.db : (this.db = yield Lt(), this.db); }); }
    _withRetries(t) { return a(this, null, function* () { let i = 0; for (;;)
        try {
            let r = yield this._openDb();
            return yield t(r);
        }
        catch (r) {
            if (i++ > zs)
                throw r;
            this.db && (this.db.close(), this.db = void 0);
        } }); }
    initializeServiceWorkerMessaging() { return a(this, null, function* () { return en() ? this.initializeReceiver() : this.initializeSender(); }); }
    initializeReceiver() { return a(this, null, function* () { this.receiver = Us._getInstance(xs()), this.receiver._subscribe("keyChanged", (t, i) => a(this, null, function* () { return { keyProcessed: (yield this._poll()).includes(i.key) }; })), this.receiver._subscribe("ping", (t, i) => a(this, null, function* () { return ["keyChanged"]; })); }); }
    initializeSender() { return a(this, null, function* () { var t, i; if (this.activeServiceWorker = yield Fs(), !this.activeServiceWorker)
        return; this.sender = new Dt(this.activeServiceWorker); let r = yield this.sender._send("ping", {}, 800); r && !((t = r[0]) === null || t === void 0) && t.fulfilled && !((i = r[0]) === null || i === void 0) && i.value.includes("keyChanged") && (this.serviceWorkerReceiverAvailable = !0); }); }
    notifyServiceWorker(t) { return a(this, null, function* () { if (!(!this.sender || !this.activeServiceWorker || Ws() !== this.activeServiceWorker))
        try {
            yield this.sender._send("keyChanged", { key: t }, this.serviceWorkerReceiverAvailable ? 800 : 50);
        }
        catch { } }); }
    _isAvailable() { return a(this, null, function* () { try {
        if (!indexedDB)
            return !1;
        let t = yield Lt();
        return yield Dn(t, De, "1"), yield Ln(t, De), !0;
    }
    catch { } return !1; }); }
    _withPendingWrite(t) { return a(this, null, function* () { this.pendingWrites++; try {
        yield t();
    }
    finally {
        this.pendingWrites--;
    } }); }
    _set(t, i) { return a(this, null, function* () { return this._withPendingWrite(() => a(this, null, function* () { return yield this._withRetries(r => Dn(r, t, i)), this.localCache[t] = i, this.notifyServiceWorker(t); })); }); }
    _get(t) { return a(this, null, function* () { let i = yield this._withRetries(r => js(r, t)); return this.localCache[t] = i, i; }); }
    _remove(t) { return a(this, null, function* () { return this._withPendingWrite(() => a(this, null, function* () { return yield this._withRetries(i => Ln(i, t)), delete this.localCache[t], this.notifyServiceWorker(t); })); }); }
    _poll() { return a(this, null, function* () { let t = yield this._withRetries(s => { let o = $e(s, !1).getAll(); return new z(o).toPromise(); }); if (!t)
        return []; if (this.pendingWrites !== 0)
        return []; let i = [], r = new Set; if (t.length !== 0)
        for (let { fbase_key: s, value: o } of t)
            r.add(s), JSON.stringify(this.localCache[s]) !== JSON.stringify(o) && (this.notifyListeners(s, o), i.push(s)); for (let s of Object.keys(this.localCache))
        this.localCache[s] && !r.has(s) && (this.notifyListeners(s, null), i.push(s)); return i; }); }
    notifyListeners(t, i) { this.localCache[t] = i; let r = this.listeners[t]; if (r)
        for (let s of Array.from(r))
            s(i); }
    startPolling() { this.stopPolling(), this.pollTimer = setInterval(() => a(this, null, function* () { return this._poll(); }), Gs); }
    stopPolling() { this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null); }
    _addListener(t, i) { Object.keys(this.listeners).length === 0 && this.startPolling(), this.listeners[t] || (this.listeners[t] = new Set, this._get(t)), this.listeners[t].add(i); }
    _removeListener(t, i) { this.listeners[t] && (this.listeners[t].delete(i), this.listeners[t].size === 0 && delete this.listeners[t]), Object.keys(this.listeners).length === 0 && this.stopPolling(); }
} return n.type = "LOCAL", n; })(), Pi = Ks;
function Mn(n, e) { return g(n, "POST", "/v2/accounts/mfaSignIn:start", m(n, e)); }
function $s(n, e) { return g(n, "POST", "/v2/accounts/mfaSignIn:finalize", m(n, e)); }
function Bs(n, e) { return g(n, "POST", "/v2/accounts/mfaSignIn:finalize", m(n, e)); }
var ut = ai("rcb"), Ys = new j(3e4, 6e4), Mt = class {
    constructor() { var e; this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(!((e = E().grecaptcha) === null || e === void 0) && e.render); }
    load(e, t = "") { return l(Js(t), e, "argument-error"), this.shouldResolveImmediately(t) && An(E().grecaptcha) ? Promise.resolve(E().grecaptcha) : new Promise((i, r) => { let s = E().setTimeout(() => { r(y(e, "network-request-failed")); }, Ys.get()); E()[ut] = () => { E().clearTimeout(s), delete E()[ut]; let c = E().grecaptcha; if (!c || !An(c)) {
        r(y(e, "internal-error"));
        return;
    } let u = c.render; c.render = (d, h) => { let f = u(d, h); return this.counter++, f; }, this.hostLanguage = t, i(c); }; let o = `${lr()}?${q({ onload: ut, render: "explicit", hl: t })}`; Yt(o).catch(() => { clearTimeout(s), r(y(e, "internal-error")); }); }); }
    clearedOneInstance() { this.counter--; }
    shouldResolveImmediately(e) { var t; return !!(!((t = E().grecaptcha) === null || t === void 0) && t.render) && (e === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded); }
};
function Js(n) { return n.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(n); }
var Ut = class {
    load(e) { return a(this, null, function* () { return new It(e); }); }
    clearedOneInstance() { }
};
var re = "recaptcha", Xs = { theme: "light", type: "image" }, Vt = class {
    constructor(e, t, i = Object.assign({}, Xs)) { this.parameters = i, this.type = re, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = v(e), this.isInvisible = this.parameters.size === "invisible", l(typeof document < "u", this.auth, "operation-not-supported-in-this-environment"); let r = typeof t == "string" ? document.getElementById(t) : t; l(r, this.auth, "argument-error"), this.container = r, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new Ut : new Mt, this.validateStartingState(); }
    verify() { return a(this, null, function* () { this.assertNotDestroyed(); let e = yield this.render(), t = this.getAssertedRecaptcha(), i = t.getResponse(e); return i || new Promise(r => { let s = o => { o && (this.tokenChangeListeners.delete(s), r(o)); }; this.tokenChangeListeners.add(s), this.isInvisible && t.execute(e); }); }); }
    render() { try {
        this.assertNotDestroyed();
    }
    catch (e) {
        return Promise.reject(e);
    } return this.renderPromise ? this.renderPromise : (this.renderPromise = this.makeRenderPromise().catch(e => { throw this.renderPromise = null, e; }), this.renderPromise); }
    _reset() { this.assertNotDestroyed(), this.widgetId !== null && this.getAssertedRecaptcha().reset(this.widgetId); }
    clear() { this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach(e => { this.container.removeChild(e); }); }
    validateStartingState() { l(!this.parameters.sitekey, this.auth, "argument-error"), l(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), l(typeof document < "u", this.auth, "operation-not-supported-in-this-environment"); }
    makeTokenCallback(e) { return t => { if (this.tokenChangeListeners.forEach(i => i(t)), typeof e == "function")
        e(t);
    else if (typeof e == "string") {
        let i = E()[e];
        typeof i == "function" && i(t);
    } }; }
    assertNotDestroyed() { l(!this.destroyed, this.auth, "internal-error"); }
    makeRenderPromise() { return a(this, null, function* () { if (yield this.init(), !this.widgetId) {
        let e = this.container;
        if (!this.isInvisible) {
            let t = document.createElement("div");
            e.appendChild(t), e = t;
        }
        this.widgetId = this.getAssertedRecaptcha().render(e, this.parameters);
    } return this.widgetId; }); }
    init() { return a(this, null, function* () { l(Kt() && !en(), this.auth, "internal-error"), yield Qs(), this.recaptcha = yield this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0); let e = yield Ji(this.auth); l(e, this.auth, "internal-error"), this.parameters.sitekey = e; }); }
    getAssertedRecaptcha() { return l(this.recaptcha, this.auth, "internal-error"), this.recaptcha; }
};
function Qs() { let n = null; return new Promise(e => { if (document.readyState === "complete") {
    e();
    return;
} n = () => e(), window.addEventListener("load", n); }).catch(e => { throw n && window.removeEventListener("load", n), e; }); }
var ue = class {
    constructor(e, t) { this.verificationId = e, this.onConfirmation = t; }
    confirm(e) { let t = J._fromVerification(this.verificationId, e); return this.onConfirmation(t); }
};
function Zs(n, e, t) { return a(this, null, function* () { if (I(n.app))
    return Promise.reject(T(n)); let i = v(n), r = yield Be(i, e, p(t)); return new ue(r, s => Ge(i, s)); }); }
function ea(n, e, t) { return a(this, null, function* () { let i = p(n); yield je(!1, i, "phone"); let r = yield Be(i.auth, e, p(t)); return new ue(r, s => _i(i, s)); }); }
function ta(n, e, t) { return a(this, null, function* () { let i = p(n); if (I(i.auth.app))
    return Promise.reject(T(i.auth)); let r = yield Be(i.auth, e, p(t)); return new ue(r, s => Ii(i, s)); }); }
function Be(n, e, t) { return a(this, null, function* () { var i; if (!n._getRecaptchaConfig())
    try {
        yield oi(n);
    }
    catch {
        console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.");
    } try {
    let r;
    if (typeof e == "string" ? r = { phoneNumber: e } : r = e, "session" in r) {
        let s = r.session;
        if ("phoneNumber" in r) {
            l(s.type === "enroll", n, "internal-error");
            let o = { idToken: s.credential, phoneEnrollmentInfo: { phoneNumber: r.phoneNumber, clientType: "CLIENT_TYPE_WEB" } };
            return (yield V(n, o, "mfaSmsEnrollment", (h, f) => a(null, null, function* () { if (f.phoneEnrollmentInfo.captchaResponse === ie) {
                l(t?.type === re, h, "argument-error");
                let _ = yield lt(h, f, t);
                return Cn(h, _);
            } return Cn(h, f); }), "PHONE_PROVIDER").catch(h => Promise.reject(h))).phoneSessionInfo.sessionInfo;
        }
        else {
            l(s.type === "signin", n, "internal-error");
            let o = ((i = r.multiFactorHint) === null || i === void 0 ? void 0 : i.uid) || r.multiFactorUid;
            l(o, n, "missing-multi-factor-info");
            let c = { mfaPendingCredential: s.credential, mfaEnrollmentId: o, phoneSignInInfo: { clientType: "CLIENT_TYPE_WEB" } };
            return (yield V(n, c, "mfaSmsSignIn", (f, _) => a(null, null, function* () { if (_.phoneSignInInfo.captchaResponse === ie) {
                l(t?.type === re, f, "argument-error");
                let w = yield lt(f, _, t);
                return Mn(f, w);
            } return Mn(f, _); }), "PHONE_PROVIDER").catch(f => Promise.reject(f))).phoneResponseInfo.sessionInfo;
        }
    }
    else {
        let s = { phoneNumber: r.phoneNumber, clientType: "CLIENT_TYPE_WEB" };
        return (yield V(n, s, "sendVerificationCode", (d, h) => a(null, null, function* () { if (h.captchaResponse === ie) {
            l(t?.type === re, d, "argument-error");
            let f = yield lt(d, h, t);
            return Nn(d, f);
        } return Nn(d, h); }), "PHONE_PROVIDER").catch(d => Promise.reject(d))).sessionInfo;
    }
}
finally {
    t?._reset();
} }); }
function na(n, e) { return a(this, null, function* () { let t = p(n); if (I(t.auth.app))
    return Promise.reject(T(t.auth)); yield Xt(t, e); }); }
function lt(n, e, t) { return a(this, null, function* () { l(t.type === re, n, "argument-error"); let i = yield t.verify(); l(typeof i == "string", n, "argument-error"); let r = Object.assign({}, e); if ("phoneEnrollmentInfo" in r) {
    let s = r.phoneEnrollmentInfo.phoneNumber, o = r.phoneEnrollmentInfo.captchaResponse, c = r.phoneEnrollmentInfo.clientType, u = r.phoneEnrollmentInfo.recaptchaVersion;
    return Object.assign(r, { phoneEnrollmentInfo: { phoneNumber: s, recaptchaToken: i, captchaResponse: o, clientType: c, recaptchaVersion: u } }), r;
}
else if ("phoneSignInInfo" in r) {
    let s = r.phoneSignInInfo.captchaResponse, o = r.phoneSignInInfo.clientType, c = r.phoneSignInInfo.recaptchaVersion;
    return Object.assign(r, { phoneSignInInfo: { recaptchaToken: i, captchaResponse: s, clientType: o, recaptchaVersion: c } }), r;
}
else
    return Object.assign(r, { recaptchaToken: i }), r; }); }
var ia = (() => { class n {
    constructor(t) { this.providerId = n.PROVIDER_ID, this.auth = v(t); }
    verifyPhoneNumber(t, i) { return Be(this.auth, t, p(i)); }
    static credential(t, i) { return J._fromVerification(t, i); }
    static credentialFromResult(t) { let i = t; return n.credentialFromTaggedObject(i); }
    static credentialFromError(t) { return n.credentialFromTaggedObject(t.customData || {}); }
    static credentialFromTaggedObject({ _tokenResponse: t }) { if (!t)
        return null; let { phoneNumber: i, temporaryProof: r } = t; return i && r ? J._fromTokenResponse(i, r) : null; }
} n.PROVIDER_ID = "phone", n.PHONE_SIGN_IN_METHOD = "phone"; return n; })();
function K(n, e) { return e ? b(e) : (l(n._popupRedirectResolver, n, "argument-error"), n._popupRedirectResolver); }
var le = class extends W {
    constructor(e) { super("custom", "custom"), this.params = e; }
    _getIdTokenResponse(e) { return N(e, this._buildIdpRequest()); }
    _linkToIdToken(e, t) { return N(e, this._buildIdpRequest(t)); }
    _getReauthenticationResolver(e) { return N(e, this._buildIdpRequest()); }
    _buildIdpRequest(e) { let t = { requestUri: this.params.requestUri, sessionId: this.params.sessionId, postBody: this.params.postBody, tenantId: this.params.tenantId, pendingToken: this.params.pendingToken, returnSecureToken: !0, returnIdpCredential: !0 }; return e && (t.idToken = e), t; }
};
function ra(n) { return gi(n.auth, new le(n), n.bypassAuthState); }
function sa(n) { let { auth: e, user: t } = n; return l(t, e, "internal-error"), mi(t, new le(n), n.bypassAuthState); }
function aa(n) { return a(this, null, function* () { let { auth: e, user: t } = n; return l(t, e, "internal-error"), Xt(t, new le(n), n.bypassAuthState); }); }
var Ue = class {
    constructor(e, t, i, r, s = !1) { this.auth = e, this.resolver = i, this.user = r, this.bypassAuthState = s, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(t) ? t : [t]; }
    execute() { return new Promise((e, t) => a(this, null, function* () { this.pendingPromise = { resolve: e, reject: t }; try {
        this.eventManager = yield this.resolver._initialize(this.auth), yield this.onExecution(), this.eventManager.registerConsumer(this);
    }
    catch (i) {
        this.reject(i);
    } })); }
    onAuthEvent(e) { return a(this, null, function* () { let { urlResponse: t, sessionId: i, postBody: r, tenantId: s, error: o, type: c } = e; if (o) {
        this.reject(o);
        return;
    } let u = { auth: this.auth, requestUri: t, sessionId: i, tenantId: s || void 0, postBody: r || void 0, user: this.user, bypassAuthState: this.bypassAuthState }; try {
        this.resolve(yield this.getIdpTask(c)(u));
    }
    catch (d) {
        this.reject(d);
    } }); }
    onError(e) { this.reject(e); }
    getIdpTask(e) { switch (e) {
        case "signInViaPopup":
        case "signInViaRedirect": return ra;
        case "linkViaPopup":
        case "linkViaRedirect": return aa;
        case "reauthViaPopup":
        case "reauthViaRedirect": return sa;
        default: R(this.auth, "internal-error");
    } }
    resolve(e) { O(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp(); }
    reject(e) { O(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp(); }
    unregisterAndCleanUp() { this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp(); }
};
var oa = new j(2e3, 1e4);
function ca(n, e, t) { return a(this, null, function* () { if (I(n.app))
    return Promise.reject(y(n, "operation-not-supported-in-this-environment")); let i = v(n); Q(n, e, P); let r = K(i, t); return new tn(i, "signInViaPopup", e, r).executeNotNull(); }); }
function ua(n, e, t) { return a(this, null, function* () { let i = p(n); if (I(i.auth.app))
    return Promise.reject(y(i.auth, "operation-not-supported-in-this-environment")); Q(i.auth, e, P); let r = K(i.auth, t); return new tn(i.auth, "reauthViaPopup", e, r, i).executeNotNull(); }); }
function la(n, e, t) { return a(this, null, function* () { let i = p(n); Q(i.auth, e, P); let r = K(i.auth, t); return new tn(i.auth, "linkViaPopup", e, r, i).executeNotNull(); }); }
var tn = (() => { class n extends Ue {
    constructor(t, i, r, s, o) { super(t, i, s, o), this.provider = r, this.authWindow = null, this.pollId = null, n.currentPopupAction && n.currentPopupAction.cancel(), n.currentPopupAction = this; }
    executeNotNull() { return a(this, null, function* () { let t = yield this.execute(); return l(t, this.auth, "internal-error"), t; }); }
    onExecution() { return a(this, null, function* () { O(this.filter.length === 1, "Popup operations only handle one event"); let t = Ke(); this.authWindow = yield this.resolver._openPopup(this.auth, this.provider, this.filter[0], t), this.authWindow.associatedEvent = t, this.resolver._originValidation(this.auth).catch(i => { this.reject(i); }), this.resolver._isIframeWebStorageSupported(this.auth, i => { i || this.reject(y(this.auth, "web-storage-unsupported")); }), this.pollUserCancellation(); }); }
    get eventId() { var t; return ((t = this.authWindow) === null || t === void 0 ? void 0 : t.associatedEvent) || null; }
    cancel() { this.reject(y(this.auth, "cancelled-popup-request")); }
    cleanUp() { this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, n.currentPopupAction = null; }
    pollUserCancellation() { let t = () => { var i, r; if (!((r = (i = this.authWindow) === null || i === void 0 ? void 0 : i.window) === null || r === void 0) && r.closed) {
        this.pollId = window.setTimeout(() => { this.pollId = null, this.reject(y(this.auth, "popup-closed-by-user")); }, 8e3);
        return;
    } this.pollId = window.setTimeout(t, oa.get()); }; t(); }
} n.currentPopupAction = null; return n; })(), da = "pendingRedirect", Te = new Map, Ft = class n extends Ue {
    constructor(e, t, i = !1) { super(e, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], t, void 0, i), this.eventId = null; }
    execute() { return a(this, null, function* () { let e = Te.get(this.auth._key()); if (!e) {
        try {
            let i = (yield ha(this.resolver, this.auth)) ? yield H(n.prototype, this, "execute").call(this) : null;
            e = () => Promise.resolve(i);
        }
        catch (t) {
            e = () => Promise.reject(t);
        }
        Te.set(this.auth._key(), e);
    } return this.bypassAuthState || Te.set(this.auth._key(), () => Promise.resolve(null)), e(); }); }
    onAuthEvent(e) { return a(this, null, function* () { if (e.type === "signInViaRedirect")
        return H(n.prototype, this, "onAuthEvent").call(this, e); if (e.type === "unknown") {
        this.resolve(null);
        return;
    } if (e.eventId) {
        let t = yield this.auth._redirectUserForId(e.eventId);
        if (t)
            return this.user = t, H(n.prototype, this, "onAuthEvent").call(this, e);
        this.resolve(null);
    } }); }
    onExecution() { return a(this, null, function* () { }); }
    cleanUp() { }
};
function ha(n, e) { return a(this, null, function* () { let t = Si(e), i = ki(n); if (!(yield i._isAvailable()))
    return !1; let r = (yield i._get(t)) === "true"; return yield i._remove(t), r; }); }
function nn(n, e) { return a(this, null, function* () { return ki(n)._set(Si(e), "true"); }); }
function pa(n, e) { Te.set(n._key(), e); }
function ki(n) { return b(n._redirectPersistence); }
function Si(n) { return Ee(da, n.config.apiKey, n.name); }
function fa(n, e, t) { return ma(n, e, t); }
function ma(n, e, t) { return a(this, null, function* () { if (I(n.app))
    return Promise.reject(T(n)); let i = v(n); Q(n, e, P), yield i._initializationPromise; let r = K(i, t); return yield nn(r, i), r._openRedirect(i, e, "signInViaRedirect"); }); }
function ga(n, e, t) { return _a(n, e, t); }
function _a(n, e, t) { return a(this, null, function* () { let i = p(n); if (Q(i.auth, e, P), I(i.auth.app))
    return Promise.reject(T(i.auth)); yield i.auth._initializationPromise; let r = K(i.auth, t); yield nn(r, i.auth); let s = yield Ni(i); return r._openRedirect(i.auth, e, "reauthViaRedirect", s); }); }
function Ia(n, e, t) { return va(n, e, t); }
function va(n, e, t) { return a(this, null, function* () { let i = p(n); Q(i.auth, e, P), yield i.auth._initializationPromise; let r = K(i.auth, t); yield je(!1, i, e.providerId), yield nn(r, i.auth); let s = yield Ni(i); return r._openRedirect(i.auth, e, "linkViaRedirect", s); }); }
function Ea(n, e) { return a(this, null, function* () { return yield v(n)._initializationPromise, bi(n, e, !1); }); }
function bi(n, e, t = !1) { return a(this, null, function* () { if (I(n.app))
    return Promise.reject(T(n)); let i = v(n), r = K(i, e), o = yield new Ft(i, r, t).execute(); return o && !t && (delete o.user._redirectEventId, yield i._persistUserIfCurrent(o.user), yield i._setRedirectUser(null, e)), o; }); }
function Ni(n) { return a(this, null, function* () { let e = Ke(`${n.uid}:::`); return n._redirectEventId = e, yield n.auth._setRedirectUser(n), yield n.auth._persistUserIfCurrent(n), e; }); }
var Ta = 600 * 1e3, Wt = class {
    constructor(e) { this.auth = e, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now(); }
    registerConsumer(e) { this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null); }
    unregisterConsumer(e) { this.consumers.delete(e); }
    onEvent(e) { if (this.hasEventBeenHandled(e))
        return !1; let t = !1; return this.consumers.forEach(i => { this.isEventForConsumer(e, i) && (t = !0, this.sendToConsumer(e, i), this.saveEventToCache(e)); }), this.hasHandledPotentialRedirect || !ya(e) || (this.hasHandledPotentialRedirect = !0, t || (this.queuedRedirectEvent = e, t = !0)), t; }
    sendToConsumer(e, t) { var i; if (e.error && !Oi(e)) {
        let r = ((i = e.error.code) === null || i === void 0 ? void 0 : i.split("auth/")[1]) || "internal-error";
        t.onError(y(this.auth, r));
    }
    else
        t.onAuthEvent(e); }
    isEventForConsumer(e, t) { let i = t.eventId === null || !!e.eventId && e.eventId === t.eventId; return t.filter.includes(e.type) && i; }
    hasEventBeenHandled(e) { return Date.now() - this.lastProcessedEventTime >= Ta && this.cachedEventUids.clear(), this.cachedEventUids.has(Un(e)); }
    saveEventToCache(e) { this.cachedEventUids.add(Un(e)), this.lastProcessedEventTime = Date.now(); }
};
function Un(n) { return [n.type, n.eventId, n.sessionId, n.tenantId].filter(e => e).join("-"); }
function Oi({ type: n, error: e }) { return n === "unknown" && e?.code === "auth/no-auth-event"; }
function ya(n) { switch (n.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect": return !0;
    case "unknown": return Oi(n);
    default: return !1;
} }
function wa(t) { return a(this, arguments, function* (n, e = {}) { return g(n, "GET", "/v1/projects", e); }); }
var Aa = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, Ra = /^https?/;
function Pa(n) { return a(this, null, function* () { if (n.config.emulator)
    return; let { authorizedDomains: e } = yield wa(n); for (let t of e)
    try {
        if (ka(t))
            return;
    }
    catch { } R(n, "unauthorized-domain"); }); }
function ka(n) { let e = se(), { protocol: t, hostname: i } = new URL(e); if (n.startsWith("chrome-extension://")) {
    let o = new URL(n);
    return o.hostname === "" && i === "" ? t === "chrome-extension:" && n.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : t === "chrome-extension:" && o.hostname === i;
} if (!Ra.test(t))
    return !1; if (Aa.test(n))
    return i === n; let r = n.replace(/\./g, "\\."); return new RegExp("^(.+\\." + r + "|" + r + ")$", "i").test(i); }
var Sa = new j(3e4, 6e4);
function Vn() { let n = E().___jsl; if (n?.H) {
    for (let e of Object.keys(n.H))
        if (n.H[e].r = n.H[e].r || [], n.H[e].L = n.H[e].L || [], n.H[e].r = [...n.H[e].L], n.CP)
            for (let t = 0; t < n.CP.length; t++)
                n.CP[t] = null;
} }
function ba(n) { return new Promise((e, t) => { var i, r, s; function o() { Vn(), gapi.load("gapi.iframes", { callback: () => { e(gapi.iframes.getContext()); }, ontimeout: () => { Vn(), t(y(n, "network-request-failed")); }, timeout: Sa.get() }); } if (!((r = (i = E().gapi) === null || i === void 0 ? void 0 : i.iframes) === null || r === void 0) && r.Iframe)
    e(gapi.iframes.getContext());
else if (!((s = E().gapi) === null || s === void 0) && s.load)
    o();
else {
    let c = ai("iframefcb");
    return E()[c] = () => { gapi.load ? o() : t(y(n, "network-request-failed")); }, Yt(`${hr()}?onload=${c}`).catch(u => t(u));
} }).catch(e => { throw ye = null, e; }); }
var ye = null;
function Na(n) { return ye = ye || ba(n), ye; }
var Oa = new j(5e3, 15e3), Ca = "__/auth/iframe", Da = "emulator/auth/iframe", La = { style: { position: "absolute", top: "-100px", width: "1px", height: "1px" }, "aria-hidden": "true", tabindex: "-1" }, Ma = new Map([["identitytoolkit.googleapis.com", "p"], ["staging-identitytoolkit.sandbox.googleapis.com", "s"], ["test-identitytoolkit.sandbox.googleapis.com", "t"]]);
function Ua(n) { let e = n.config; l(e.authDomain, n, "auth-domain-config-required"); let t = e.emulator ? $t(e, Da) : `https://${n.config.authDomain}/${Ca}`, i = { apiKey: e.apiKey, appName: n.name, v: Y }, r = Ma.get(n.config.apiHost); r && (i.eid = r); let s = n._getFrameworks(); return s.length && (i.fw = s.join(",")), `${t}?${q(i).slice(1)}`; }
function Va(n) { return a(this, null, function* () { let e = yield Na(n), t = E().gapi; return l(t, n, "internal-error"), e.open({ where: document.body, url: Ua(n), messageHandlersFilter: t.iframes.CROSS_ORIGIN_IFRAMES_FILTER, attributes: La, dontclear: !0 }, i => new Promise((r, s) => a(null, null, function* () { yield i.restyle({ setHideOnLeave: !1 }); let o = y(n, "network-request-failed"), c = E().setTimeout(() => { s(o); }, Oa.get()); function u() { E().clearTimeout(c), r(i); } i.ping(u).then(u, () => { s(o); }); }))); }); }
var Fa = { location: "yes", resizable: "yes", statusbar: "yes", toolbar: "no" }, Wa = 500, xa = 600, Ha = "_blank", qa = "http://localhost", Ve = class {
    constructor(e) { this.window = e, this.associatedEvent = null; }
    close() { if (this.window)
        try {
            this.window.close();
        }
        catch { } }
};
function ja(n, e, t, i = Wa, r = xa) { let s = Math.max((window.screen.availHeight - r) / 2, 0).toString(), o = Math.max((window.screen.availWidth - i) / 2, 0).toString(), c = "", u = Object.assign(Object.assign({}, Fa), { width: i.toString(), height: r.toString(), top: s, left: o }), d = A().toLowerCase(); t && (c = Zn(d) ? Ha : t), Xn(d) && (e = e || qa, u.scrollbars = "yes"); let h = Object.entries(u).reduce((_, [w, he]) => `${_}${w}=${he},`, ""); if (sr(d) && c !== "_self")
    return Ga(e || "", c), new Ve(null); let f = window.open(e || "", c, h); l(f, n, "popup-blocked"); try {
    f.focus();
}
catch { } return new Ve(f); }
function Ga(n, e) { let t = document.createElement("a"); t.href = n, t.target = e; let i = document.createEvent("MouseEvent"); i.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), t.dispatchEvent(i); }
var za = "__/auth/handler", Ka = "emulator/auth/handler", $a = encodeURIComponent("fac");
function Fn(n, e, t, i, r, s) { return a(this, null, function* () { l(n.config.authDomain, n, "auth-domain-config-required"), l(n.config.apiKey, n, "invalid-api-key"); let o = { apiKey: n.config.apiKey, appName: n.name, authType: t, redirectUrl: i, v: Y, eventId: r }; if (e instanceof P) {
    e.setDefaultLanguage(n.languageCode), o.providerId = e.providerId || "", vn(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (let [h, f] of Object.entries(s || {}))
        o[h] = f;
} if (e instanceof x) {
    let h = e.getScopes().filter(f => f !== "");
    h.length > 0 && (o.scopes = h.join(","));
} n.tenantId && (o.tid = n.tenantId); let c = o; for (let h of Object.keys(c))
    c[h] === void 0 && delete c[h]; let u = yield n._getAppCheckToken(), d = u ? `#${$a}=${encodeURIComponent(u)}` : ""; return `${Ba(n)}?${q(c).slice(1)}${d}`; }); }
function Ba({ config: n }) { return n.emulator ? $t(n, Ka) : `https://${n.authDomain}/${za}`; }
var dt = "webStorageSupport", xt = class {
    constructor() { this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = Zt, this._completeRedirectFn = bi, this._overrideRedirectResult = pa; }
    _openPopup(e, t, i, r) { return a(this, null, function* () { var s; O((s = this.eventManagers[e._key()]) === null || s === void 0 ? void 0 : s.manager, "_initialize() not called before _openPopup()"); let o = yield Fn(e, t, i, se(), r); return ja(e, o, Ke()); }); }
    _openRedirect(e, t, i, r) { return a(this, null, function* () { yield this._originValidation(e); let s = yield Fn(e, t, i, se(), r); return Vs(s), new Promise(() => { }); }); }
    _initialize(e) { let t = e._key(); if (this.eventManagers[t]) {
        let { manager: r, promise: s } = this.eventManagers[t];
        return r ? Promise.resolve(r) : (O(s, "If manager is not set, promise should be"), s);
    } let i = this.initAndGetManager(e); return this.eventManagers[t] = { promise: i }, i.catch(() => { delete this.eventManagers[t]; }), i; }
    initAndGetManager(e) { return a(this, null, function* () { let t = yield Va(e), i = new Wt(e); return t.register("authEvent", r => (l(r?.authEvent, e, "invalid-auth-event"), { status: i.onEvent(r.authEvent) ? "ACK" : "ERROR" }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = { manager: i }, this.iframes[e._key()] = t, i; }); }
    _isIframeWebStorageSupported(e, t) { this.iframes[e._key()].send(dt, { type: dt }, r => { var s; let o = (s = r?.[0]) === null || s === void 0 ? void 0 : s[dt]; o !== void 0 && t(!!o), R(e, "internal-error"); }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER); }
    _originValidation(e) { let t = e._key(); return this.originValidationPromises[t] || (this.originValidationPromises[t] = Pa(e)), this.originValidationPromises[t]; }
    get _shouldInitProactively() { return ri() || Qn() || Bt(); }
}, Ci = xt, Fe = class {
    constructor(e) { this.factorId = e; }
    _process(e, t, i) { switch (t.type) {
        case "enroll": return this._finalizeEnroll(e, t.credential, i);
        case "signin": return this._finalizeSignIn(e, t.credential);
        default: return S("unexpected MultiFactorSessionType");
    } }
}, Ht = class n extends Fe {
    constructor(e) { super("phone"), this.credential = e; }
    static _fromCredential(e) { return new n(e); }
    _finalizeEnroll(e, t, i) { return ws(e, { idToken: t, displayName: i, phoneVerificationInfo: this.credential._makeVerificationRequest() }); }
    _finalizeSignIn(e, t) { return $s(e, { mfaPendingCredential: t, phoneVerificationInfo: this.credential._makeVerificationRequest() }); }
}, Ya = (() => { class n {
    constructor() { }
    static assertion(t) { return Ht._fromCredential(t); }
} return n.FACTOR_ID = "phone", n; })(), Ja = (() => { class n {
    static assertionForEnrollment(t, i) { return We._fromSecret(t, i); }
    static assertionForSignIn(t, i) { return We._fromEnrollmentId(t, i); }
    static generateSecret(t) { return a(this, null, function* () { var i; let r = t; l(typeof ((i = r.user) === null || i === void 0 ? void 0 : i.auth) < "u", "internal-error"); let s = yield As(r.user.auth, { idToken: r.credential, totpEnrollmentInfo: {} }); return xe._fromStartTotpMfaEnrollmentResponse(s, r.user.auth); }); }
} return n.FACTOR_ID = "totp", n; })(), We = class n extends Fe {
    constructor(e, t, i) { super("totp"), this.otp = e, this.enrollmentId = t, this.secret = i; }
    static _fromSecret(e, t) { return new n(t, void 0, e); }
    static _fromEnrollmentId(e, t) { return new n(t, e); }
    _finalizeEnroll(e, t, i) { return a(this, null, function* () { return l(typeof this.secret < "u", e, "argument-error"), Rs(e, { idToken: t, displayName: i, totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp) }); }); }
    _finalizeSignIn(e, t) { return a(this, null, function* () { l(this.enrollmentId !== void 0 && this.otp !== void 0, e, "argument-error"); let i = { verificationCode: this.otp }; return Bs(e, { mfaPendingCredential: t, mfaEnrollmentId: this.enrollmentId, totpVerificationInfo: i }); }); }
}, xe = class n {
    constructor(e, t, i, r, s, o, c) { this.sessionInfo = o, this.auth = c, this.secretKey = e, this.hashingAlgorithm = t, this.codeLength = i, this.codeIntervalSeconds = r, this.enrollmentCompletionDeadline = s; }
    static _fromStartTotpMfaEnrollmentResponse(e, t) { return new n(e.totpSessionInfo.sharedSecretKey, e.totpSessionInfo.hashingAlgorithm, e.totpSessionInfo.verificationCodeLength, e.totpSessionInfo.periodSec, new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(), e.totpSessionInfo.sessionInfo, t); }
    _makeTotpVerificationInfo(e) { return { sessionInfo: this.sessionInfo, verificationCode: e }; }
    generateQrCodeUrl(e, t) { var i; let r = !1; return (Ie(e) || Ie(t)) && (r = !0), r && (Ie(e) && (e = ((i = this.auth.currentUser) === null || i === void 0 ? void 0 : i.email) || "unknownuser"), Ie(t) && (t = this.auth.name)), `otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`; }
};
function Ie(n) { return typeof n > "u" || n?.length === 0; }
var Wn = "@firebase/auth", xn = "1.10.8";
var qt = class {
    constructor(e) { this.auth = e, this.internalListeners = new Map; }
    getUid() { var e; return this.assertAuthConfigured(), ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) || null; }
    getToken(e) { return a(this, null, function* () { return this.assertAuthConfigured(), yield this.auth._initializationPromise, this.auth.currentUser ? { accessToken: yield this.auth.currentUser.getIdToken(e) } : null; }); }
    addAuthTokenListener(e) { if (this.assertAuthConfigured(), this.internalListeners.has(e))
        return; let t = this.auth.onIdTokenChanged(i => { e(i?.stsTokenManager.accessToken || null); }); this.internalListeners.set(e, t), this.updateProactiveRefresh(); }
    removeAuthTokenListener(e) { this.assertAuthConfigured(); let t = this.internalListeners.get(e); t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh()); }
    assertAuthConfigured() { l(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth"); }
    updateProactiveRefresh() { this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh(); }
};
function Xa(n) { switch (n) {
    case "Node": return "node";
    case "ReactNative": return "rn";
    case "Worker": return "webworker";
    case "Cordova": return "cordova";
    case "WebExtension": return "web-extension";
    default: return;
} }
function Qa(n) { nt(new et("auth", (e, { options: t }) => { let i = e.getProvider("app").getImmediate(), r = e.getProvider("heartbeat"), s = e.getProvider("app-check-internal"), { apiKey: o, authDomain: c } = i.options; l(o && !o.includes(":"), "invalid-api-key", { appName: i.name }); let u = { apiKey: o, authDomain: c, clientPlatform: n, apiHost: "identitytoolkit.googleapis.com", tokenApiHost: "securetoken.googleapis.com", apiScheme: "https", sdkClientVersion: si(n) }, d = new _t(i, r, s, u); return _r(d, t), d; }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e, t, i) => { e.getProvider("auth-internal").initialize(); })), nt(new et("auth-internal", e => { let t = v(e.getProvider("auth").getImmediate()); return (i => new qt(i))(t); }, "PRIVATE").setInstantiationMode("EXPLICIT")), rt(Wn, xn, Xa(n)), rt(Wn, xn, "esm2017"); }
var Za = 300, eo = Ze("authIdTokenMaxAge") || Za, Hn = null, to = n => e => a(null, null, function* () { let t = e && (yield e.getIdTokenResult()), i = t && (new Date().getTime() - Date.parse(t.issuedAtTime)) / 1e3; if (i && i > eo)
    return; let r = t?.token; Hn !== r && (Hn = r, yield fetch(n, { method: r ? "POST" : "DELETE", headers: r ? { Authorization: `Bearer ${r}` } : {} })); });
function no(n = yn()) { let e = it(n, "auth"); if (e.isInitialized())
    return e.getImmediate(); let t = ci(n, { popupRedirectResolver: Ci, persistence: [Pi, wi, Zt] }), i = Ze("authTokenSyncURL"); if (i && typeof isSecureContext == "boolean" && isSecureContext) {
    let s = new URL(i, location.origin);
    if (location.origin === s.origin) {
        let o = to(s.toString());
        yi(t, o, () => o(t.currentUser)), Ti(t, c => o(c));
    }
} let r = dn("auth"); return r && ui(t, `http://${r}`), t; }
function io() { var n, e; return (e = (n = document.getElementsByTagName("head")) === null || n === void 0 ? void 0 : n[0]) !== null && e !== void 0 ? e : document; }
ur({ loadJS(n) { return new Promise((e, t) => { let i = document.createElement("script"); i.setAttribute("src", n), i.onload = e, i.onerror = r => { let s = y("internal-error"); s.customData = r, t(s); }, i.type = "text/javascript", i.charset = "UTF-8", io().appendChild(i); }); }, gapiScript: "https://apis.google.com/js/api.js", recaptchaV2Script: "https://www.google.com/recaptcha/api.js", recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render=" });
Qa("Browser");
import "tslib";
export { Wi as ActionCodeOperation, X as ActionCodeURL, W as AuthCredential, qi as AuthErrorCodes, ce as EmailAuthCredential, Jt as EmailAuthProvider, Fr as FacebookAuthProvider, Mi as FactorId, xr as GithubAuthProvider, Wr as GoogleAuthProvider, D as OAuthCredential, yt as OAuthProvider, Fi as OperationType, J as PhoneAuthCredential, ia as PhoneAuthProvider, Ya as PhoneMultiFactorGenerator, Ui as ProviderId, Vt as RecaptchaVerifier, wt as SAMLAuthProvider, Vi as SignInMethod, Ja as TotpMultiFactorGenerator, xe as TotpSecret, jr as TwitterAuthProvider, Jr as applyActionCode, yi as beforeAuthStateChanged, Ds as browserCookiePersistence, wi as browserLocalPersistence, Ci as browserPopupRedirectResolver, Zt as browserSessionPersistence, vi as checkActionCode, Yr as confirmPasswordReset, ui as connectAuthEmulator, Qr as createUserWithEmailAndPassword, Hi as debugErrorMap, Ts as deleteUser, rs as fetchSignInMethodsForEmail, hs as getAdditionalUserInfo, no as getAuth, Zi as getIdToken, Bn as getIdTokenResult, ys as getMultiFactorResolver, Ea as getRedirectResult, ft as inMemoryPersistence, Pi as indexedDBLocalPersistence, ci as initializeAuth, fs as initializeRecaptchaConfig, ts as isSignInWithEmailLink, _i as linkWithCredential, ea as linkWithPhoneNumber, la as linkWithPopup, Ia as linkWithRedirect, ks as multiFactor, gs as onAuthStateChanged, Ti as onIdTokenChanged, Vr as parseActionCodeURL, jn as prodErrorMap, Ii as reauthenticateWithCredential, ta as reauthenticateWithPhoneNumber, ua as reauthenticateWithPopup, ga as reauthenticateWithRedirect, Yn as reload, Es as revokeAccessToken, ss as sendEmailVerification, Br as sendPasswordResetEmail, es as sendSignInLinkToEmail, ps as setPersistence, Gr as signInAnonymously, Ge as signInWithCredential, $r as signInWithCustomToken, Zr as signInWithEmailAndPassword, ns as signInWithEmailLink, Zs as signInWithPhoneNumber, ca as signInWithPopup, fa as signInWithRedirect, vs as signOut, zr as unlink, Is as updateCurrentUser, us as updateEmail, ls as updatePassword, na as updatePhoneNumber, cs as updateProfile, _s as useDeviceLanguage, ms as validatePassword, as as verifyBeforeUpdateEmail, Xr as verifyPasswordResetCode };
/*! Bundled license information:

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
