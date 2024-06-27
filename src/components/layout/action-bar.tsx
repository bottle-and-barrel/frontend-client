import Link from "next/link";
import Brand from "../ui/brand";
import ActionBarButtons from "./action-bar-buttons";
import ActionBarSearch from "./action-bar-search";

export default function ActionBar() {
  return (
    <div className="flex justify-between items-center gap-6">
      <Link href="/">
        <Brand />
      </Link>
      <ActionBarSearch className="flex-grow" />
      <ActionBarButtons />
    </div>
  );
}
