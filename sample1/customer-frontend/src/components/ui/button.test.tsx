import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "./button";

describe("Button", () => {
  it("renders an accessible button", () => {
    render(<Button>登入會員中心</Button>);

    expect(
      screen.getByRole("button", { name: "登入會員中心" }),
    ).toBeInTheDocument();
  });
});
