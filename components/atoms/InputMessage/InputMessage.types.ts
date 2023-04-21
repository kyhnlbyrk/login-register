import { ReactNode } from "react";

export type InputMessageType = 'error' | 'success' | 'warning';
export interface InputMessageProps {
  children?: ReactNode;
  status?: InputMessageType;
  dataTestId?: string | number;
}