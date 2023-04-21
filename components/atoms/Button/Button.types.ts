import { ButtonHTMLAttributes, ReactNode } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 color?: 'primary' | 'secondary'
 children: ReactNode;
 block?: boolean
 size?: 'small' | 'medium' | 'large'
}