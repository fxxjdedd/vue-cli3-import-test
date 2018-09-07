// test import from `pages` dir --> crash
let filename = 'import-test.js'
import(`@/pages/${filename}`)

// test import from `non-pages` dir --> work well

// import(`@/non-pages/${filename}`)
