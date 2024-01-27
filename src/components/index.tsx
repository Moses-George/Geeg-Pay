import { ReactComponent as TrendRed } from "@/assets/trend-red.svg";
import { ReactComponent as TrendGreen } from "@/assets/trend-green.svg";
import { ReactComponent as Dashboard } from "@/assets/dashboard.svg";
import { ReactComponent as People } from "@/assets/person-icon.svg";
import { ReactComponent as Box } from "@/assets/box.svg";
import { ReactComponent as Divide } from "@/assets/divide.svg";
import { ReactComponent as Info } from "@/assets/info.svg";
import { ReactComponent as Order } from "@/assets/order.svg";
import { ReactComponent as Money } from "@/assets/money.svg";
import { ReactComponent as Refund } from "@/assets/refund.svg";
import { ReactComponent as Cart } from "@/assets/cart.svg";

export const chartCards = [
    {
        id: "c1",
        title: "Total Order",
        amount: "350",
        color: { background: "bg-[#d5f3eb]", text: "#34CAA5" },
        icon: <TrendGreen />,
        image: <Order />
    },
    {
        id: "c2",
        title: "Total Refund",
        amount: "270",
        color: { background: "bg-[#f1b3b2]", text: "#ED544E" },
        icon: <TrendRed />,
        image: <Refund />
    },
    {
        id: "c3",
        title: "Average Sales",
        amount: "1567",
        color: { background: "bg-[#f1b3b2]", text: "#ED544E" },
        icon: <TrendRed />,
        image: <Cart />
    },
    {
        id: "c4",
        title: "Total Income",
        amount: "$350,000",
        color: { background: "bg-[#d5f3eb]", text: "#34CAA5" },
        icon: <TrendGreen />,
        image: <Money />
    },
];

export const links = [
    {
        id: "l1",
        to: "/",
        icon: <Dashboard className="fill-gray-500" />
    },
    {
        id: "l2",
        to: "#people",
        icon: <People />
    },
    {
        id: "l3",
        to: "#box",
        icon: <Box />
    },
    {
        id: "l4",
        to: "#divide",
        icon: <Divide />
    },
    {
        id: "l5",
        to: "#info",
        icon: <Info />
    }
];