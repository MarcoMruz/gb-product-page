import { FC } from "react";

type Props = {
  items: string[];
};

const Breadcrumb: FC<Props> = ({ items }) => {
  const lastItem = items[items.length - 1];
  const otherItems = items.slice(0, items.length - 1);

  return (
    <nav className="flex flex-col gap-10 p-5">
      <div>
        <ol className="flex items-center gap-2">
          {otherItems.map((item, index) => (
            <li className="inline-flex" key={index}>
              <div className="flex items-center gap-2 text-lg font-medium opacity-60">
                / {item}
              </div>
            </li>
          ))}
          <li className="inline-flex">
            <div className="flex cursor-pointer items-center gap-2 text-lg hover:text-blue-600">
              / {lastItem}
            </div>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
