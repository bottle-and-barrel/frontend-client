import { Heart, ShoppingCart } from "lucide-react";
import ActionBarButton from "./action-bar-button";
import ActionBarProfile from "./action-bar-profile";

export default function ActionBarButtons() {
  return (
    <ul className="flex gap-1">
      <li>
        <ActionBarButton icon={Heart} label="Избранное" />
      </li>
      <li>
        <ActionBarButton icon={ShoppingCart} label="Корзина" />
      </li>
      <li>
        <ActionBarProfile />
      </li>
    </ul>
  );
}
