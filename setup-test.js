import { afterEach, expect } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

// resets the test environment after each test is run to ensure that each test
// is run on a clean slate
afterEach(() => {
  cleanup();
});
