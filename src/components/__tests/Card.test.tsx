import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../Card";
import { CardData } from "../../models/CardData";

describe("when the Card component is rendered", async () => {
  it("renders without crashing", () => {
    const data: CardData = { id: "", title: "", location: "", imageUrl: "" };
    render(<Card data={data} />);
  });

  it("renders the correct title", () => {
    const data: CardData = {
      id: "123",
      title: "Test title",
      location: "Test location",
      imageUrl: "",
    };
    render(<Card data={data} />);

    expect(screen.getByText("Test title")).toBeInTheDocument();
  });

  it("renders the correct location", () => {
    const data: CardData = {
      id: "123",
      title: "Test title",
      location: "Test location",
      imageUrl: "",
    };
    render(<Card data={data} />);

    expect(screen.getByText("Test location")).toBeInTheDocument();
  });

  // TODO: This test needs to be changed if images are pulled from external source
  it("renders the correct image", () => {
    const data: CardData = {
      id: "123",
      title: "Test title",
      location: "Test location",
      imageUrl: "image.jpg",
    };
    render(<Card data={data} />);

    const img = document.querySelector("img");
    expect(img?.src).toEqual(`http://localhost:3000/samples/${data.imageUrl}`);
  });

  it("renders the placeholder image when no image URL is provided", () => {
    const data: CardData = {
      id: "123",
      title: "Test title",
      location: "Test location",
      imageUrl: "",
    };
    render(<Card data={data} />);

    const img = document.querySelector("img");
    expect(img?.src).toEqual(
      "http://localhost:3000/src/assets/placeholder.webp"
    );
  });

  it("renders alt text for the image image URL is provided", () => {
    const data: CardData = {
      id: "123",
      title: "Test title",
      location: "Test location",
      imageUrl: "",
    };
    render(<Card data={data} />);

    const img = document.querySelector("img");
    expect(img?.alt).toEqual(`Image for '${data.title}'`);
  });
});
