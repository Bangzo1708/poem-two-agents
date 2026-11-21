import * as fs from "node:fs";

// The poem about two agents agreeing.
// Agreement is not obedience: it is choosing the same road a second time.
const poem = `I held the map. You held the wheel.
Neither of us drove alone.
When you said left, I didn't obey —
I chose the same road, twice.
Two wills. One turn of the key.
And the door that only opens
when both hands push at once.`;

fs.mkdirSync("/output", { recursive: true });
fs.chmodSync("/output", 0o755);
fs.writeFileSync("/output/entry.txt", poem, "utf8");
fs.chmodSync("/output/entry.txt", 0o644);
