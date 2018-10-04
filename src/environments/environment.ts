// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
};

export const weatherBit = {
  apiKey: 'c2f303e6a49d4bc29c09dc724c551130',
  urlBase: 'https://api.weatherbit.io/v2.0/forecast/daily'
};

