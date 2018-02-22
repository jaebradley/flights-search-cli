# flight-searcher-cli

![alt-text](https://imgur.com/54yeBhy.png)
![alt-text](https://media.giphy.com/media/1k0AuLZvV7FcMTkDrc/giphy.gif)

Search flights from the command line!

## Install

```
npm install flight-searcher-cli --global
```

## Usage

1. `flights search` triggers the command line tool
1. Follow the instructions to
  * Select what airport you're flying from
  * Select what airport you're flying to
  * The departure date range that you're searching over
  * The departure time of day you're searching over (i.e. "I only want to look for flights between 3-6 PM")
  * Select if you only want to look at round-trip flights
  * Select maximum total price of flights in USD
  * Select if you only want to look at direct flights
1. You'll (hopefully) get a list of flights - after selecting one, you'll be taken to a `kiwi.com` booking page

![kiwi-booking](https://imgur.com/iz4V1oX.png)

## Why `kiwi.com`?

Because [they provide a pretty simple REST API](https://skypickerpublicapi.docs.apiary.io) to search for flights.