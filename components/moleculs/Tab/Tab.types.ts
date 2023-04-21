import { ReactNode } from "react";

export interface TabPanelProps {
 children: ReactNode;
 title: string;
}

export interface TabProps {
 children: ReactNode;
 dataTestId?: string;
}