export function TopBar() {
  return (
    <div className="flex size-full items-center gap-4 p-4">
      <a href="/">
        <img
          className="h-4 w-32"
          src="https://bubblestore.geniebook.com/_nuxt/img/logo-bubble-store.8b9a46f.svg"
          alt="Bubble Store"
        />
      </a>
      <span className="flex-1" />
      <img
        className="size-6"
        src="https://bubblestore.geniebook.com/_nuxt/img/icon-search-white.765d2d5.svg"
        alt="Search"
      />
      <img
        className="size-6"
        src="https://bubblestore.geniebook.com/_nuxt/img/Icon_Top Nav Bar_Cart.f96d8a4.svg"
        alt="Cart"
      />
    </div>
  );
}
