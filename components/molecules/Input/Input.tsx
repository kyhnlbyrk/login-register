import * as React from 'react';
import { InputProps } from './Input.types';
import NonStyledInput from '../../atoms/NonStyledInput';
import Styles from './Input.module.scss';
import InputMessage from '../../atoms/InputMessage';

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, _ref) => {
  const [hasValue, setHasValue] = React.useState(!!props?.value);
  const [hasFocused, setHasFocused] = React.useState(props?.focused);

  const ref = React.useRef<HTMLDivElement>(null);

  const { id, label, status, focused, disabled, message, placeholder, dataTestId, ...rest } = props;

  const observerCallback = (mutationList: any) => {
    for (const mutation of mutationList) {
      if ('value' in mutation.target && mutation.target?.value && !hasValue) {
        setHasValue(true);
      }
    }
  };

  const observer = typeof window !== 'undefined' ? new MutationObserver(observerCallback) : null;

  React.useEffect(() => {
    //@ts-ignore
    const focusables = (ref.current.getElementsByTagName('input') || ref.current.getElementsByTagName('textarea')) as HTMLCollectionOf<HTMLInputElement>;
    const firstFocusable = focusables.length > 0 ? focusables[0] : null;

    if (firstFocusable && observer) {
      observer.observe(firstFocusable, { attributes: true, childList: true, characterData: true, subtree: true, attributeFilter: ['data-ready'] });
      firstFocusable.setAttribute('data-ready', 'true');
    }

    if ((props?.value || props?.value?.length > 0) && !hasValue) {
      setHasValue(true);
    } else if ((props?.value === undefined || props.value === null || props?.value === '') && hasValue) {
      setHasValue(false);
    }

    if (firstFocusable && firstFocusable?.value) {
      setHasValue(true);
    }

    const handleNativeElementKeyPress = (e: any) => {
      if (!hasValue && (e.target?.value?.length > 0 || e.target?.value)) {
        setHasValue(true);
      } else if (!hasValue && (e.target?.value?.length == 0 || e.target?.value === undefined || e.target?.value === null || e.target?.value === '')) {
        setHasValue(false);
      }
    };

    const handleNativeElementKeyUp = (e: any) => {
      if (firstFocusable && !e.target.value) {
        setHasValue(false);
      }
    };

    const handleNativeElementFocus = async () => {
      if (firstFocusable?.value) {
        setHasValue(true);
      } else {
        setHasValue(false);
      }
      setHasFocused(true);
    };

    const handleNativeElementBlur = async () => {
      if (firstFocusable?.value) {
        setHasValue(true);
      } else {
        setHasValue(false);
      }
      setHasFocused(false);
    };

    const isDisabled = firstFocusable?.hasAttribute('disabled');

    if (firstFocusable && !isDisabled) {
      firstFocusable.addEventListener('focus', handleNativeElementFocus);
      firstFocusable.addEventListener('keypress', handleNativeElementKeyPress);
      firstFocusable.addEventListener('input', handleNativeElementKeyPress);
      firstFocusable.addEventListener('keyup', handleNativeElementKeyUp);
      firstFocusable.addEventListener('blur', handleNativeElementBlur);
    }

    return () => {
      if (firstFocusable) {
        observer && observer.disconnect();
        firstFocusable.removeEventListener('focus', handleNativeElementFocus);
        firstFocusable.removeEventListener('keypress', handleNativeElementKeyPress);
        firstFocusable.removeEventListener('input', handleNativeElementKeyPress);
        firstFocusable.removeEventListener('keyup', handleNativeElementKeyUp);
        firstFocusable.removeEventListener('blur', handleNativeElementBlur);
      }
    };
  }, [ref.current, hasValue, props.value]);

  const $focused = focused || hasFocused;
  const showPlaceholder = (!hasValue && !label) || ($focused && !hasValue);
  return (
    <div className={Styles['input-wrapper']}>
      <div className={[Styles['input-wrapper__bordered'], $focused ? Styles['input-wrapper__focused'] : ''].join(' ')}>
        <div className={[Styles['input-wrapper__input'], disabled ? Styles['input-wrapper__disabled'] : '', Styles[`input-wrapper__input__${status}`]].join(' ')}>
          <label
            htmlFor={id}
            className={[Styles['input-wrapper__label'], $focused || hasValue ? Styles['input-wrapper__label__focused'] : '', Styles[`input-wrapper__label__${status}`]].join(' ')}
          >
            {label}
          </label>
          {showPlaceholder && (
            <div className={Styles['input-wrapper__placeholder']}>
              <span>{placeholder}</span>
            </div>
          )}
          <div className={Styles['input-wrapper__wrapper']} ref={ref}>
            <NonStyledInput id={id} focused={focused} disabled={disabled} {...rest} ref={_ref} />
          </div>
        </div>
      </div>
      {message && (
        <InputMessage dataTestId={dataTestId} status={status}>
          {message}
        </InputMessage>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
