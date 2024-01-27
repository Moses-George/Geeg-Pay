import { IOrder } from "@/types";

export const orders: IOrder[] = [
    {
        id: "p1",
        name: "Marcus Bergson",
        date: "Nov 15, 2023",
        amount: "80,000",
        status: "Paid",
        image_src: "/people/marcus.svg"
    },
    {
        id: "p2",
        name: "Jaydon Vaccaro",
        date: "Nov 15, 2023",
        amount: "150,000",
        status: "Refund",
        image_src: "/people/jaydon.svg"
    },
    {
        id: "p3",
        name: "Corey Schiefer",
        date: "Nov 14, 2023",
        amount: "87,000",
        status: "Paid",
        image_src: "/people/corey.svg"
    },
    {
        id: "p4",
        name: "Cooper Press",
        date: "Nov 14, 2023",
        amount: "100,000",
        status: "Refund",
        image_src: "/people/cooper.svg"
    },
    {
        id: "p5",
        name: "Philip Lubin",
        date: "Nov 15, 2023",
        amount: "78,000",
        status: "Paid",
        image_src: "/people/philip.svg"
    },
];

export const platforms = [
    {
        id: "p1",
        title: "Book Bazaar",
        amount: "$2,500,000",
        gain: 15,
        color: "bg-purple-700",
        width: "w-[60%]"
    },
    {
        id: "p2",
        title: "Artisan Aisle",
        amount: "$1,800,000",
        gain: 10,
        color: "bg-blue-400",
        width: "w-[50%]"
    },
    {
        id: "p3",
        title: "Toy Troop",
        amount: "$1,200,000",
        gain: 8,
        color: "bg-yellow-400",
        width: "w-[30%]"
    },
    {
        id: "p4",
        title: "XStore",
        amount: "$1,000,000",
        gain: 5,
        color: "bg-red-500",
        width: "w-[30%]"
    }
]