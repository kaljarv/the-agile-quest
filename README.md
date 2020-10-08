# TheDataImperativeGame

## To do

* Make final report nicer
* Allow viewing of interim report by clicking the Investments button
* Convert localisation to use i18l

## Editing settings and texts

The settings and text strings are collected in two json files found in `/src/assets/data/`.

Texts are fetched from `texts.json` using the string itself (or in some cases an uppercase moniker) as the first key and Angular’s LOCALE_ID as the second. If a translation for the locale is not found, en-US is used. If no entry at all for the string is found in `texts.json`, the string itself is used.

See `/src/app/shared/shared.types.ts` and `investment.types.ts` for the data formats.

## Editing other files

Make the necessary edits and then deploy the compiled app with `ng deploy`.

## Authors

Game concept and the book on which it is based: prof. Henri Schildt, Aalto University.

UX and graphic design: Kiira Keski-Hakuni, Aalto University.

Engineering: Kalle Järvenpää / @kaljarv, [Kalle Järvenpää Design](http://kaljarv.com/).

## Licensing

The software is distributed under the [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/) (CC BY 4.0) license with the exception of those linked libraries and graphic assets that have a separate license of their own.