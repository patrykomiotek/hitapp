// import { afterEach } from 'vitest'
// import { cleanup } from '@testing-library/react'
import "@testing-library/jest-dom/vitest";
import "@testing-library/jest-dom";

import { toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

// afterEach(() => {
//   cleanup();
// })
