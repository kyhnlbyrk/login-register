import * as React from 'react';
import { NonStyledInputProps } from './NonStyledInput.types';
import Styles from './NonStyledInput.module.scss';

const NonStyledInput = React.forwardRef<HTMLInputElement, NonStyledInputProps>((props, ref) => {
  return <input className={Styles['input--nonstyled']} {...props} ref={ref} />;
});

NonStyledInput.defaultProps = {
  inputMode: 'text',
};

NonStyledInput.displayName = 'NonStyledInput';

export default NonStyledInput;
