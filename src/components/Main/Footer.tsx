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
    <div
      className="flex flex-col gap-2 py-8
      max-md:items-center"
    >
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
    <div className="relative bg-blue-900 px-4 py-8 text-white">
      <div className="container mx-auto flex flex-col">
        <div className="flex flex-wrap gap-8">
          <PopularCategories />
          <SupportAndHelpCenter />
        </div>
        <div className="md:-order-1">
          <BubbleStore />
        </div>
        <div className="h-8" />
        <img
          className="absolute bottom-8 w-24
        max-md:-left-4 max-md:-scale-x-100 md:bottom-0 md:right-0 md:w-64"
          src="data:image/svg+xml;base64,PHN2ZyBpZD0iR3JvdXBfOTI0NSIgZGF0YS1uYW1lPSJHcm91cCA5MjQ1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzc0LjQ1IiBoZWlnaHQ9IjM0OC42MjkiIHZpZXdCb3g9IjAgMCAzNzQuNDUgMzQ4LjYyOSI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMzQzMSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMzQzMSIgd2lkdGg9IjM3NC40NSIgaGVpZ2h0PSIzNDguNjI5IiBmaWxsPSJub25lIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KICA8ZyBpZD0iR3JvdXBfOTI0NCIgZGF0YS1uYW1lPSJHcm91cCA5MjQ0IiBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSI+CiAgICA8cGF0aCBpZD0iUGF0aF8xMjU0NSIgZGF0YS1uYW1lPSJQYXRoIDEyNTQ1IiBkPSJNMzQ4LjYyOSwzNDguNjI5SDBDLjg3MSwxNTYuNDU5LDE1Ni40NjEuODcxLDM0OC42MjksMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjgyMSkiIGZpbGw9IiMyYWE3ZGUiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzEyNTQ2IiBkYXRhLW5hbWU9IlBhdGggMTI1NDYiIGQ9Ik05OS4wNzUsMTA5LjUxQTYwLjg4OCw2MC44ODgsMCwxLDAsMTU0LjgsNTMuNzg5LDYwLjk0Nyw2MC45NDcsMCwwLDAsOTkuMDc1LDEwOS41MW02Ni4yNzEtMzcuNTM2YTQyLjg2NCw0Mi44NjQsMCwxLDAsMzYuOTE1LDM2LjkxNSw0Mi45MDksNDIuOTA5LDAsMCwwLTM2LjkxNS0zNi45MTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05OC44NzggODMuMzYzKSIgZmlsbD0iI2E3ZDlmMCIvPgogIDwvZz4KPC9zdmc+Cg=="
        />
      </div>
    </div>
  );
}
