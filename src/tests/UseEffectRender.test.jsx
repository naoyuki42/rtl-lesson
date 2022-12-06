import React from "react";
import { render, screen } from "@testing-library/react";
import UseEffectRender from "../targets/UseEffectRender";

describe("useEffect Rendering", () => {
  it("Should Render Only After Async Function Resolved", async () => {
    // コンポーネントのレンダリング
    render(<UseEffectRender />);
    // 期待値の検証
    expect(screen.queryByText(/I am/)).toBeNull();
    expect(await screen.findByText(/I am/)).toBeInTheDocument();
  });
});
