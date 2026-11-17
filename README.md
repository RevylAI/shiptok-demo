# ShipTok demo

ShipTok is Revyl's iPhone app for watching a repository's merged pull requests as a feed of short vertical videos, plus one video for each week. This repository is a small public example of what ShipTok reads.

It's a copy of [Bug Bazaar](https://github.com/RevylAI/bug-bazaar), Revyl's Expo sample shop, with a few small changes merged as pull requests:

- Each merged pull request has before and after screenshots in its description and a video in a top-level comment tagged `<!-- shiptok:video -->`. ShipTok plays the tagged video first.
- A closed issue labeled `shiptok-weekly` holds the week's video and lists the pull requests it shows, in the order it shows them.

## Run the app

```bash
npm install
npx expo start
```

Then open it in the iOS Simulator, an Android emulator or a development build from the Expo menu.

The app also carries Revyl's auth-bypass deep-link sample: see [docs/auth-bypass-deep-links.md](docs/auth-bypass-deep-links.md).
