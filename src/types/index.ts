import { ReactNode } from "react";

export interface ISidebarProps {
    display: string;
    lg_display: string;
    zIndex?: string
    isVisible?: boolean;
    setIsVisible: (param: boolean) => void
} 

export interface InputFieldProps {
    icon: ReactNode,
    type: string;
    id: string;
    name: string;
    placeholder: string;
    ringColorClass: string;
}

interface IChartColors {
    background: string;
    text: string;
}

export interface IChartCardProps {
    title: string;
    amount: string;
    color?: IChartColors;
    icon: ReactNode;
    image: ReactNode;
}

export interface IOrder {
    id: string;
    name: string;
    date: string;
    amount: string;
    status: string;
    image_src: string;
}