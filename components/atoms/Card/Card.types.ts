import { ReactNode } from "react";

export interface CardProps {
 size?: 'small' | 'medium' | 'large';
 children: ReactNode;
}