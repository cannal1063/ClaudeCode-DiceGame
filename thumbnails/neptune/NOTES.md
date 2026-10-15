# Neptune Flood thumbnails — working notes

Video: "The $4B Company With 62 Employees | Neptune Flood Deep Dive" (transcript in transcript.txt)

Chosen direction (round 3): white/off-white Apple-keynote style, Neptune brand blue #004E9F
with a blue gradient (#004e9f -> #1f7cf0 -> #3ec5ff), Inter Display 800/900, faint ripple rings,
real Neptune logo (nep-logo.png wordmark, nep-mark.png face mark, captured from neptuneflood.com).

- w1 — "60% margins. on floods."  (favourite)
- w2 — $2,000 ring chart, "$660 is theirs. Zero risk."  (favourite)
- w3 — face slot + stat card (62 employees / $4B / 60% margin)
- w4 — "2 minutes vs 30 days" quote cards (apples-to-oranges; "2 min vs 50 questions" is more accurate)
- f1, f2 — face-ready versions of w1/w2; the grey #face div is a placeholder for the creator's cutout

Next: user supplies a face photo -> remove background -> drop into #face in f1/f2/w3, add soft
white outline + shadow, check legibility at sidebar size (~168px wide).

Facts to keep honest: 60% = adjusted EBITDA margin (~59%); $660 = example cut of a $2,000 policy;
"never paid a claim" is only true "from its balance sheet" (carriers/reinsurers pay).

Render: `node render.js f1 f2` (needs `playwright`; writes <name>.png at 1280x720).
