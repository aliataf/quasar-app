// for when you don't specify quasar.conf.js > framework: 'all'
import { Quasar } from 'quasar';

export default async () => {
  const langIso = 'en-us';

  try {
    await import(
      /* webpackInclude: /(ar|en-us)\.js$/ */
      'quasar/lang/' + langIso
      )
      .then(lang => {
        Quasar.lang.set(lang.default)
      })
  }
  catch (err) {
    // Requested Quasar Language Pack does not exist,
    // let's not break the app, so catching error
  }
}