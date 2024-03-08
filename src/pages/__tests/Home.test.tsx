import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../Home";

// sample data
import popularSampleData from "../../data/popular.json";
import featuredSampleData from "../../data/featured.json";

describe("when the Home component is rendered", async () => {
  it("renders without crashing", () => {
    render(<Home />);
  });

  it("renders search input field with correct placeholder text", () => {
    render(<Home />);
    const searchInput = screen.getByPlaceholderText("Search for...");
    expect(searchInput).toBeInTheDocument();
  });

  // TODO: Something funky's happening with this test - it may have to do with the carousel
  //   it("renders popular cards when there are popular items in the state", () => {
  //     render(<Home />);
  //     const popularCards = screen.queryAllByTestId("popular-card");
  //     console.log("popularSampleData.length", popularSampleData.length);
  //     console.log("popularCards.length", popularCards.length);
  //     expect(popularCards.length).toBe(popularSampleData.length);
  //   });

  // TODO: This can be added as a future test when data is retrieved via API
  //   it("does not render popular cards when there are no popular items in the state", () => {
  //     render(<Home />);
  //     const popularCards = screen.queryAllByTestId("popular-card");
  //     expect(popularCards.length).toBe(0);
  //   });

  it("renders featured cards when there are featured items in the state", () => {
    render(<Home />);
    const featuredCards = screen.queryAllByTestId("featured-card");
    expect(featuredCards.length).toBe(featuredSampleData.length);
  });

  // TODO: This can be added as a future test when data is retrieved via API
  //   it("does not render featured cards when there are no featured items in the state", () => {
  //     render(<Home />);
  //     const featuredCards = screen.queryAllByTestId("featured-card");
  //     expect(featuredCards.length).toBe(0);
  //   });

  it("filters popular cards correctly when search input changes", async () => {
    render(<Home />);
    const searchInput = screen.getByPlaceholderText("Search for...");
    fireEvent.change(searchInput, { target: { value: "test" } });
    await waitFor(() => {
      const popularCards = screen.queryAllByTestId("popular-card");
      expect(popularCards.length).toBe(
        popularSampleData.filter((item) =>
          item.title.toLowerCase().includes("test")
        ).length
      );
    });
  });
});
