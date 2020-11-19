# Among Bot: A Discord bot to play Among Us the right way

This bot will easily toggle the entire voice channel's mute state, so that no one is able to speak when it's not supposed to (i.e. during Among Us parties).

## Pre-requisites

You should have the following elements:

- A Discord developer app
- The Disscord's developer app API token

## Usage

Install dependencies with:

```sh
$ npm install
```

Then, create a copy of `.env.example`, and rename it to `.env`. After that, place inside your bot token in the `DISCORD_BOT_TOKEN` variable. Then, start the bot with:

```sh
$ npm start
```

To mute everyone, type on the chat:

```sh
-m
```

And this will toggle an immutable mute state. To unmute, type:

```sh
-u
```

And everything will go back to normal.

## License

This project is licensed under the MIT license.
