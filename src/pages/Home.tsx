import React, { useState } from "react";
import Card from "../components/Card";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { CardData } from "../models/CardData";

// TODO: Fetch data from API
import popularAllData from "../data/popular.json";
import featuredAllData from "../data/featured.json";
import DarkModeSwitcher from "../components/DarkModeSwitcher";

// TODO: Configure a Azure static web app

const Home = () => {
  const [popular, setPopular] = useState<CardData[]>(popularAllData);
  const [featured, setFeatured] = useState<CardData[]>(featuredAllData);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleSearchChange = (searchText: string) => {
    setPopular((prevState) => {
      return popularAllData.filter((item) => {
        return item.title.toLowerCase().includes(searchText.toLowerCase());
      });
    });
  };

  return (
    <div className="flex flex-col w-screen h-screen p-8 sm:px-20 pt-4 bg-grey dark:bg-gray-800">
      {/* Search bar */}
      <div className="flex flex-row justify-between">
        <div className="w-3/5">
          <input
            className="w-full rounded-md border-[1.5px] text-sm border-stroke py-2 px-5 outline-none transition focus:border-blue-300 active:border-blue-300"
            placeholder="Search for..."
            onChange={(e) => {
              handleSearchChange(e.target.value);
            }}
          />
        </div>

        <div className="">
          <DarkModeSwitcher />
        </div>
      </div>

      {/* Content */}
      <div className="flex-col bg-white p-6 mt-6 rounded-md">
        {/* Popular around you */}
        <div className="">
          <h1 className="font-bold text-primary">Popular around you</h1>

          {popular.length > 0 ? (
            <div className="mt-4">
              <Carousel responsive={responsive}>
                {popular.map((item) => (
                  <div className="mx-2">
                    <Card key={item.id} data={item} />
                  </div>
                ))}
              </Carousel>
            </div>
          ) : (
            <p className="text-xs font-bold leading-loose text-gray-500">
              No results matching your search text was found.
            </p>
          )}
        </div>

        {/* Featured */}
        <div className="mt-8">
          <h1 className="font-bold text-primary">Featured</h1>

          <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mt-4">
            {featured.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
