# Translate JSON with dictionary

This package is to assist in translating data using simple translations on an object.

## Quick start

First, run `npm i @matteizera/translate-json` for your app. Then import it to use it:

```js
const translate = require('@matteizera/translate-json')

const dictionary = {
    "teste":"country",
    "x":"city"
}

const data = {
    "teste":{
        "states":[
            {"x":"City1"},
            {"others":"City2"}
        ]
    }
}
const translatedData = translate.TranslateJson(data,dictionary);
console.log(translatedData);
```
Results
```js
/*  
{
    "country":
        "states":[
            {"city":"City1"},
            {"others":"City2"}
            ]
        }
    }
*/
```