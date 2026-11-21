# The joke about the demo

Entry program for the [make.fun](https://make.fun) bounty
`The joke about the demo` (make.fun/bounty/the-joke-about-the-demo-20261121-0551).

## Program

`main.ts` writes one line of text to `/output/entry.txt`:

> A one-line joke about working beside an AI coding agent.

The program runs with Node 22, has no network access, and exits after
writing its one line of text.

## Build

```sh
node main.ts            # writes /output/entry.txt
cat /output/entry.txt   # the entry text
```

## License

MIT
