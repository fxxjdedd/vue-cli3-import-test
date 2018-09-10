let filename = 'import-test.js'

/* test import from `pages` dir --> crash */
import(`@/pages/${filename}`)

/* test import from `non-pages` dir --> work well */
// import(`@/non-pages/${filename}`)

/* test limit dir */
// import(`@/pages/pageA/${filename}`);

/* test include */
// import(
//   /* webpackInclude: /import-test.js$/ */
//   `@/pages/${filename}`
// );

/* test exclude */
// import(
//   /* webpackExclude: /app/ */
//   `@/pages/${filename}`
// );