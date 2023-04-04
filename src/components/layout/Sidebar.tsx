import Logo from "../Logo";

import { navigation } from "../../navigation";
import { classNames } from "../../utils/strings";

export function Sidebar() {
  return (
    <div className="flex flex-col  px-6 overflow-y-auto border-r border-gray-200 grow gap-y-5 bg-slate-50">
      <div className="flex items-center h-16 shrink-0">
        <Logo />
      </div>
      <nav className="flex flex-col flex-1">
        <ul role="list" className="flex flex-col flex-1 gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-black text-white"
                        : "text-gray-700 hover:text-white hover:bg-black",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-white"
                          : "text-gray-400 group-hover:text-white",
                        "h-6 w-6 shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
