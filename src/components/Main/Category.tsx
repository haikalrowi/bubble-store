export function Category(props: {
  categoryImage: string;
  categoryName: string;
}) {
  return (
    <div
      className="flex flex-col items-center gap-2 transition-all
      hover:scale-95"
    >
      <div className="size-20 rounded-3xl bg-white shadow-md">
        <img className="size-full" src={props.categoryImage} />
      </div>
      <div className="w-20 text-center text-sm font-bold text-blue-900">
        {props.categoryName}
      </div>
    </div>
  );
}
