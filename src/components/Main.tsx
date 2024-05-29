import { data } from "../lib/data";
import { Category } from "./Main/Category";
import { Footer } from "./Main/Footer";
import { Item } from "./Main/Item";
import { Row } from "./Main/Row";

function TrendingItems() {
  return (
    <div className="flex gap-4 overflow-x-auto">
      {data.main.trendingItems.map((i, i_) => (
        <div className="p-1">
          <Item key={i_} {...i} />
        </div>
      ))}
    </div>
  );
}

function SearchByCategories() {
  return (
    <div className="flex flex-wrap justify-evenly gap-4">
      {data.main.searchByCategories.map((c, i) => (
        <Category key={i} {...c} />
      ))}
    </div>
  );
}

function MostPopular() {
  return (
    <div className="flex flex-nowrap gap-4 overflow-x-auto">
      {data.main.mostPopular.map((i, i_) => (
        <div className="p-1">
          <Item key={i_} {...i} />
        </div>
      ))}
    </div>
  );
}

export function Main() {
  return (
    <div className="size-full">
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
      <Footer />
    </div>
  );
}
