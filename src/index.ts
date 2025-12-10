import { keccak256, toUtf8Bytes } from "ethers";
import CustomErrors from "./data/custom-errors.json"
import fs from "fs";

const main = () => {
  const errorSelectors: Record<string, string> = {};

  CustomErrors.map((error) => {
    const selector = keccak256(toUtf8Bytes(error)).slice(0, 10);
    errorSelectors[selector] = error;
  });

  fs.writeFileSync("./src/data/custom-error-selectors.json", JSON.stringify(errorSelectors, null, 2));
  console.log("Complete calculating the error selectors for all custom errors");
}

main();
