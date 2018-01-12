// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyB2wAgAMkPl889lpKxni6w4YFsUAu-hE8s",
    authDomain: "angular5crud-dc64a.firebaseapp.com",
    databaseURL: "https://angular5crud-dc64a.firebaseio.com",
    projectId: "angular5crud-dc64a",
    storageBucket: "angular5crud-dc64a.appspot.com",
    messagingSenderId: "860738202585"
  }
};
