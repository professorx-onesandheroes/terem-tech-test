import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Card from "../components/Card";
import { CardData } from "../models/CardData";
import DarkModeSwitcher from "../components/DarkModeSwitcher";

// TODO: Fetch data from API
// import { featuredApi } from "../apis/featuredApi";
// import { popularApi } from "../apis/popularApi";
// import { AxiosError } from "axios";

// TODO: Use this for hard coded sample data
import popularSampleData from "../data/popular.json";
import featuredSampleData from "../data/featured.json";

// TODO: Configure a Azure static web app

const Home = () => {
  const [popular, setPopular] = useState<CardData[] | null>(popularSampleData);
  const [featured, setFeatured] = useState<CardData[] | null>(
    featuredSampleData
  );

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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

  // TODO: Use this to load data from API
  // useEffect(() => {
  //   const loadData = async () => {
  //     await popularApi
  //       .getAll()
  //       .then((response: CardData[]) => {
  //         setPopular(response);
  //       })
  //       .catch((error: AxiosError) => {
  //         // TODO: Implement error handling
  //       });

  //     await featuredApi
  //       .getAll()
  //       .then((response: CardData[]) => {
  //         setFeatured(response);
  //       })
  //       .catch((error: AxiosError) => {
  //         // TODO: Implement error handling
  //       });
  //   };

  //   loadData();
  // }, []);

  const handleSearchChange = (searchText: string) => {
    setPopular((prevState) => {
      return popularSampleData.filter((item) => {
        return item.title.toLowerCase().includes(searchText.toLowerCase());
      });
    });
  };

  return (
    <div className="flex flex-col w-screen h-screen p-8 sm:px-20 pt-4 bg-grey dark:bg-gray-800 overflow-y-auto">
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

          {popular ? (
            <>
              {popular.length > 0 ? (
                <div className="mt-4">
                  <Carousel responsive={responsive}>
                    {popular.map((item) => (
                      <div
                        key={item.id}
                        className="mx-2"
                        data-testid="popular-card"
                      >
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
            </>
          ) : (
            <p className="text-xs font-bold leading-loose text-gray-500">
              Loading data...
            </p>
          )}
        </div>

        {/* Featured */}
        <div className="mt-8">
          <h1 className="font-bold text-primary">Featured</h1>

          {featured ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-4">
              {featured.map((item) => (
                <div key={item.id} data-testid="featured-card">
                  <Card data={item} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs font-bold leading-loose text-gray-500">
              Loading data...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
