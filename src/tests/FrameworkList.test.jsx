import React from "react";
import { render, screen } from "@testing-library/react";
import FrameworkList from "../targets/FrameworkList";

describe("Rendering the List with Props", () => {
  it("Should render No Data! when no data propped", () => {
    // コンポーネントのレンダリング
    render(<FrameworkList />);
    // 期待値の検証
    expect(screen.getByText("No Data!")).toBeInTheDocument();
  });

  it("Should render List Item Correctly", () => {
    // ダミーデータ
    const dummyData = [
      { id: 1, item: "React Dummy" },
      { id: 2, item: "Angular Dummy" },
      { id: 3, item: "Vue Dummy" },
    ];
    const dummyItems = dummyData.map((item) => item.item);
    // コンポーネントのレンダリング
    render(<FrameworkList frameworks={dummyData} />);
    // 期待値の検証
    const expectItems = screen
      .getAllByRole("listitem")
      .map((item) => item.textContent);
    expect(expectItems).toEqual(dummyItems);
    expect(screen.queryByText("No Data!")).toBeNull();
  });
});
