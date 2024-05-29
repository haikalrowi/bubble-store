import { data } from "../../lib/data";

function PopularCategories() {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold">Popular categories</div>
      <ul className="flex flex-col gap-2">
        {data.main.footer.popularCategories.map((c, i) => (
          <div key={i} className="text-xs font-bold">
            {c}
          </div>
        ))}
      </ul>
    </div>
  );
}

function SupportAndHelpCenter() {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold">Support and help center</div>
      <ul className="flex flex-col gap-2">
        {["FAQ", "Help", "Term & conditions", "Contact"].map((i, i_) => (
          <li key={i_} className="text-xs font-bold">
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BubbleStore() {
  return (
    <div className="flex flex-col items-center gap-2">
      <img
        className="h-8 w-64"
        src="https://bubblestore.geniebook.com/_nuxt/img/logo-bubble-store.8b9a46f.svg"
      />
      <span className="w-64 text-xs font-semibold">
        Copyright © 2024 Geniebook. All Rights Reserved
      </span>
    </div>
  );
}

export function Footer() {
  return (
    <div className="flex flex-col gap-8 bg-blue-900 px-4 py-8 text-white">
      <PopularCategories />
      <SupportAndHelpCenter />
      <BubbleStore />
      <div className="h-8" />
    </div>
  );
}
