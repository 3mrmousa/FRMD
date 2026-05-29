import Link from "next/link";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

export default function StoreLinks() {
  return (
    <div className="flex flex-col items-start pl-5">
      <p className="font-bold text-sm text-muted-foreground tracking-wider mb-2">
        Store
      </p>
      <ul
        className="flex flex-col items-start gap-2
       text-primary-foreground font-bebas tracking-wider w-full"
      >
        <Link
          href="/admin/orders"
          className="flex items-center gap-2 text-lg pl-3 w-full hover:text-primary hover:bg-muted transition-colors duration-300 cursor-pointer"
        >
          <ShoppingBagOutlinedIcon fontSize="small" />
          Orders
        </Link>
        <Link
          href="/admin/products"
          className="flex items-center gap-2 text-lg pl-3 w-full hover:text-primary hover:bg-muted transition-colors duration-300 cursor-pointer"
        >
          <InventoryOutlinedIcon fontSize="small" />
          Products
        </Link>
        <Link
          href="/admin/customers"
          className="flex items-center gap-2 text-lg pl-3 w-full hover:text-primary hover:bg-muted transition-colors duration-300 cursor-pointer"
        >
          <PeopleOutlinedIcon fontSize="small" />
          Customers
        </Link>
        <Link
          href="/admin/discounts"
          className="flex items-center gap-2 text-lg pl-3 w-full hover:text-primary hover:bg-muted transition-colors duration-300 cursor-pointer"
        >
          <LocalOfferOutlinedIcon fontSize="small" />
          Discounts
        </Link>
      </ul>
    </div>
  );
}
