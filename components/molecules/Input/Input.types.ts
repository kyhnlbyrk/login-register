import { InputMessageType } from "../../atoms/InputMessage/InputMessage.types";
import { NonStyledInputProps } from "../../atoms/NonStyledInput";

export interface InputProps extends NonStyledInputProps {
 label?: React.ReactNode | string;
 message?: string;
 status?: InputMessageType;
 value?: any;
 dataTestId?: string;
 id: string;
}