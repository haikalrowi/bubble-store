export function Item(props: {
  itemImage: string;
  itemName: string;
  itemPrice: number;
  itemDiscount?: {
    before: number;
    after: number;
  };
}) {
  return (
    <div
      className="flex h-52 w-32 flex-col rounded-3xl bg-white shadow transition-all
      hover:scale-95
      md:h-60 md:w-36
      lg:h-72 lg:w-44"
    >
      <img
        className="size-32 rounded-t-3xl
        md:size-36
        lg:size-44"
        src={props.itemImage}
      />
      <div className="flex flex-1 flex-col justify-between rounded-b-3xl p-2">
        <div className="line-clamp-2 text-xs">{props.itemName}</div>
        <div className="flex gap-2">
          {props.itemDiscount && (
            <div className="flex items-center gap-1 text-[#2aa7df] opacity-70 grayscale">
              <img
                className="h-4"
                src="https://bubblestore.geniebook.com/_nuxt/img/Icon Bubble.a8ba8a5.svg"
              />
              <span className="text-sm font-black line-through">
                {props.itemDiscount.before}
              </span>
            </div>
          )}
          <div className="flex items-center gap-1 text-[#2aa7df]">
            <img
              className="h-4"
              src="https://bubblestore.geniebook.com/_nuxt/img/Icon Bubble.a8ba8a5.svg"
            />
            <span className="text-sm font-black">
              {props.itemDiscount ? props.itemDiscount.after : props.itemPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
