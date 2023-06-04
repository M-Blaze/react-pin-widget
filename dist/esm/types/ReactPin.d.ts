import React from 'react';
export type PinType = 'numeric' | 'alphaNumeric' | 'alphaNumericPassword' | 'numericPassword' | 'alphabet';
interface ReactPinProps {
    length?: number;
    type?: PinType;
    inputClass?: string;
    onFill?: (code: string) => void;
}
declare const ReactPin: React.FC<ReactPinProps>;
export default ReactPin;
