// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCxdSpzkHPjlETXkmrN5Iff6_hCn28_8Hw',
    authDomain: 'angular-fitnesstracker.firebaseapp.com',
    databaseURL: 'https://angular-fitnesstracker.firebaseio.com',
    projectId: 'angular-fitnesstracker',
    storageBucket: 'angular-fitnesstracker.appspot.com',
    messagingSenderId: '229854883281'
  }
};