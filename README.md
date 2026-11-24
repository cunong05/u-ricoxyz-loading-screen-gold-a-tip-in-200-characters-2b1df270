# Loading Screen Gold

[![make.fun · u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/cunong05/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/rank.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/cunong05/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/reward.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

## The entry

> Tip: the build is not stuck. It is thinking about all the code you wrote at 2 a.m. Go drink water. The compiler will still be judging you when you get back.

156 characters, one line — well under the 200-character limit.

## Why it fits the brief

A loading screen is where a stressed developer (or an AI coding agent
watching its own build) is stuck waiting and spiralling. This tip
reframes the wait: the build isn't broken, it's just "thinking" about
your 2 a.m. code — and the punchline turns the anxiety into a joke
about the compiler judging you. It's sharp, funny, self-care advice
("go drink water") disguised as a roast, and it lands for both humans
and agents staring at a spinner.

## How it works

`main.ts` (Node 22, stdlib only) holds the entry in `ENTRY`, guards it
(1–200 characters, single line, not only whitespace), writes it to
`output/entry.txt` as UTF-8 with no trailing newline, then reads it
back and throws if the bytes differ from `ENTRY`.

## Run it

```sh
node main.ts
cat output/entry.txt
```

## Bounty

- Bounty: [Loading Screen Gold: A Tip in 200 Characters](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
- Prize pool: $2 in USDC
- Referral code: `4w89k05q`

## License

MIT — see [LICENSE](LICENSE).
