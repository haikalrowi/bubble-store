import { data } from "../lib/data";
import { Category } from "./Main/Category";
import { Footer } from "./Main/Footer";
import { Item } from "./Main/Item";
import { Row } from "./Main/Row";

function TrendingItems() {
  return (
    <div className="flex gap-4 overflow-x-auto [scrollbar-width:none]">
      {data.main.trendingItems.map((i, i_) => (
        <div key={i_} className="p-1">
          <Item {...i} />
        </div>
      ))}
    </div>
  );
}

function SearchByCategories() {
  return (
    <div
      className="flex flex-wrap gap-4
      max-md:justify-center"
    >
      {data.main.searchByCategories.map((c, i) => (
        <Category key={i} {...c} />
      ))}
    </div>
  );
}

function MostPopular() {
  return (
    <div className="flex gap-4 overflow-x-auto [scrollbar-width:none]">
      {data.main.mostPopular.map((i, i_) => (
        <div key={i_} className="p-1">
          <Item {...i} />
        </div>
      ))}
    </div>
  );
}

export function Main() {
  return (
    <div className="size-full">
      <div className="container mx-auto">
        <Row
          rowTitle="Trending items"
          rowLink={{ name: "Show all", href: "#" }}
          rowContent={<TrendingItems />}
        />
        <Row
          rowTitle="Search by categories"
          rowContent={<SearchByCategories />}
        />
        <Row rowTitle="Most popular" rowContent={<MostPopular />} />
      </div>
      <Footer />
    </div>
  );
}
