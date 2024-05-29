export function TopBar() {
  return (
    <div className="flex size-full gap-4 p-3">
      <img
        className="p-1"
        src="https://bubblestore.geniebook.com/_nuxt/img/logo-bubble-store.8b9a46f.svg"
        alt="Bubble Store"
      />
      <span className="flex-1" />
      <img
        src="https://bubblestore.geniebook.com/_nuxt/img/icon-search-white.765d2d5.svg"
        alt="Search"
      />
      <img
        src="https://bubblestore.geniebook.com/_nuxt/img/Icon_Top Nav Bar_Cart.f96d8a4.svg"
        alt="Cart"
      />
    </div>
  );
}
