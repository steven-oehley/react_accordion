export function AccordionItem({ item, num, onToggle, open }) {
  return (
    <div
      className={`item border-b border-gray-200 p-4 cursor-pointer transition-colors duration-300 ${
        open ? "bg-blue-50" : "bg-white"
      }`}
      onClick={onToggle}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <p className="number font-bold text-lg mr-4 text-blue-600">
            {num + 1}
          </p>
          <p
            className={`title font-semibold text-gray-700 ${
              open ? "text-blue-600" : ""
            }`}
          >
            {item.title}
          </p>
        </div>
        <p className="icon font-bold text-xl text-blue-600">
          {open ? "-" : "+"}
        </p>
      </div>

      {open && (
        <div className="content-box mt-4 text-gray-600">{item.text}</div>
      )}
    </div>
  );
}
