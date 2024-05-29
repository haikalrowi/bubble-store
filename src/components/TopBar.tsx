function Categories() {
  return (
    <div className="flex items-center gap-2">
      <span>Categories</span>
      <svg
        className="size-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-blue-900">
      <img
        className="size-4"
        src="https://bubblestore.geniebook.com/_nuxt/img/Icon_Search_Default_Hifi_Web.a22c553.svg"
        alt="Search"
      />
      <input
        className="text-xs outline-none"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

export function TopBar() {
  return (
    <div className="flex size-full items-center justify-evenly gap-4">
      <a href="/">
        <img
          className="h-4 w-32"
          src="https://bubblestore.geniebook.com/_nuxt/img/logo-bubble-store.8b9a46f.svg"
          alt="Bubble Store"
        />
      </a>
      <span
        className="flex-1
        md:hidden"
      />
      <img
        className="size-6
        md:hidden"
        src="https://bubblestore.geniebook.com/_nuxt/img/icon-search-white.765d2d5.svg"
        alt="Search"
      />
      <div className="max-md:hidden">
        <Categories />
      </div>
      <div
        className="flex-1
        max-md:hidden"
      >
        <Search />
      </div>
      <img
        className="size-6"
        src="https://bubblestore.geniebook.com/_nuxt/img/Icon_Top Nav Bar_Cart.f96d8a4.svg"
        alt="Cart"
      />
      <div className="max-md:hidden">
        <img
          className="size-6"
          src="https://bubblestore.geniebook.com/_nuxt/img/wishlist.3812699.svg"
          alt="Wishlist"
        />
      </div>
      <div className="max-md:hidden">
        <button className="rounded-full bg-white px-4 py-2 text-xs font-bold text-blue-900">
          Login
        </button>
      </div>
    </div>
  );
}
