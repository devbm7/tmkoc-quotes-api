# TMKOC quotes API

A simple API to retrieve some quotes of TMKOC, Jethiya!


## Production host

[https://tmkoc-quotes-api.onrender.com](https://tmkoc-quotes-api.onrender.com)


## API

### `GET /v1/quotes`

Get a random quote in this format:

> [https://tmkoc-quotes-api.onrender.com/v1/quotes](https://tmkoc-quotes-api.onrender.com/v1/quotes)

    [
        {
            "quote": "Tapu ke papa, sambhal ke!",
            "author": "Daya Gada"
        }
    ]


### `GET /v1/quotes/{number}`

Returns an array with `{number}` quotes e.g. `GET /v1/quotes/2`.

> [https://tmkoc-quotes-api.onrender.com/v1/quotes/2](https://tmkoc-quotes-api.onrender.com/v1/quotes/2)

    [
      {
        "quote": "Tapu ke papa, sambhal ke!",
        "author": "Daya Gada"
      },
      {
        "quote": "Jethalal, ye kya tamasha bana rakha hai!",
        "author": "Champaklal Gada"
      }
    ]


## Contributing

If you want to add some quotes, just add them in `quotes.js` file and do a pull request !


## Credits

Inspired by [Breaking Bad Quotes](https://github.com/shevabam/breaking-bad-quotes).