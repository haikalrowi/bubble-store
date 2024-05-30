export function Row(props: {
  rowTitle: string;
  rowLink?: { name: string; href: string };
  rowContent: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="font-bold text-blue-900">{props.rowTitle}</span>
        {props.rowLink && (
          <a
            className="text-sm font-extrabold text-orange-400"
            href={props.rowLink.href}
          >
            {props.rowLink.name}
          </a>
        )}
      </div>
      <div>{props.rowContent}</div>
    </div>
  );
}
