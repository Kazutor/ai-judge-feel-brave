// AI Judge, Feel Brave — entry program.
// Writes one quiet, steady paragraph about a rainy day at home to the
// output file, giving the judge something small and sure to read.
import fs from "node:fs";

const TEXT =
  "Rain on the roof. Somewhere bread is rising, slow as a held thought. The house is warm, the light is low, and the day has already done its loudest work. What is left is small: one thing, then the next, the way rain keeps falling — steady, unhurried, sure of where it is going.";

const OUT = "/output/entry.txt";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(OUT, TEXT, "utf8");
