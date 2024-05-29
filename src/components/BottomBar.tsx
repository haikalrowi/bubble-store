import { clsx } from "clsx";

function Item(props: {
  imgSrc: string;
  itemName: string;
  itemActive?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <img className="size-5" src={props.imgSrc} alt="Home" />
      <span
        className={clsx(
          "text-[.625rem] opacity-50",
          props.itemActive && "font-semibold text-blue-900 !opacity-100",
        )}
      >
        {props.itemName}
      </span>
    </div>
  );
}

export function BottomBar() {
  return (
    <div className="flex size-full items-center justify-around p-2">
      <Item
        imgSrc="https://bubblestore.geniebook.com/_nuxt/img/GB-bubblestore-iconset-active-home.0078654.svg"
        itemName="Home"
        itemActive
      />
      <Item
        imgSrc="https://bubblestore.geniebook.com/_nuxt/img/GB-bubblestore-iconset-my-order.e9dc3c8.svg"
        itemName="My orders"
      />
      <Item
        imgSrc="https://bubblestore.geniebook.com/_nuxt/img/GB-bubblestore-iconset-wishlist.17e8771.svg"
        itemName="My wishlist"
      />
      <Item
        imgSrc="https://bubblestore.geniebook.com/_nuxt/img/GB-bubblestore-iconset-my-profile.9233c93.svg"
        itemName="My account"
      />
    </div>
  );
}
