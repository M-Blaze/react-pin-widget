import React from 'react';
import { Pin } from '../@types';
import './pin-input.css';
interface PinInputProps {
    type: string;
    code: Pin;
    className?: string;
    style?: React.CSSProperties;
    inputHandler: (code: Pin) => void;
}
declare const PinInput: React.ForwardRefExoticComponent<PinInputProps & React.RefAttributes<HTMLInputElement>>;
export default PinInput;
