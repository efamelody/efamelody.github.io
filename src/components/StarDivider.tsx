import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface Props {
  light?: boolean;
}

export default function StarDivider({ light }: Props) {
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <div className={`h-[3px] w-16 sm:w-24 ${light ? "bg-white" : "bg-gray-300"}`} />
      <FontAwesomeIcon
        icon={faStar}
        className={`text-2xl ${light ? "text-white" : "text-gray-400"}`}
      />
      <div className={`h-[3px] w-16 sm:w-24 ${light ? "bg-white" : "bg-gray-300"}`} />
    </div>
  );
}
