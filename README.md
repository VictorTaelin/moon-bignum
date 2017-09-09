## Moon-bignum

This is mostly an example of how to use [Moon](https://github.com/maiavictor/moon-lang) to export a `npm` lib. The steps are simple:

1. Create your library as a `lib.moon` file.

2. Use `echo \"module.exports = $(moon compile lib)()\" > lib.js` to make a CommonJS lib.

3. Optionally, use `ccjs lib.js > lib.min.js` to minify.

4. Export it on `package.json`.

Note: this uses very simple bignum algorithms and isn't very optimized. Division in particular is very slow.
