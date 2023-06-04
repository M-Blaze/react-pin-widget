# React Pin Widget

### An easy to use Pin Component for React.

---

## Installation

Using npm:

```
npm i --save react-pin-input
```

---

Using yarn:

```
yarn add react-pin-input
```

---

## Usage

```
import ReactPin from 'react-pin-widget'
```

---

## Properties

<div>
  <strong>length: Number (Default: 6)</span> (optional)
  
  It is the number of pin input.
  
  Default value is 6
  
  ```
  <ReactPin length={5} />
  ```
</div>
<hr />
<div>
  <span>type: string</span> (optional)
  
  It is the type of input.

```
<ReactPin type='alphabet'/>
```

<strong ">Values accepted</strong>

  <ol>
    <li>
        <span>numeric (Default):</span> Accepts numbers only
    </li>
    <li>
        <span>alphaNumeric:</span> Accepts both alphabets and numbers
    </li>
    <li>
        <span>alphabet:</span> Accepts alphabets only
    </li>
    <li>
        <span>numericPassword:</span> Password type, accepts numbers only
    </li>
    <li>
        <span>alphaNumericPassword:</span> Password type, accepts both alphabets and numbers
    </li>
  </ol>
</div>
<hr />
<div>
  <span>inputClass: string</span> (optional)

Used to style pin inputs

</div>
<hr />
<div>
  <span>onFill: function</span> (optional)

emits and event on every key input.

```
const fillHandler = (val) => {
  console.log(val)
}

<ReactPin onFill={fillHandler}/>
```

</div>

---

## Demo

[https://react-components-playground.vercel.app/react-pin](https://react-components-playground.vercel.app/react-pin)

Author: [github.com/M-Blaze](github.com/M-Blaze)  
Link to package: [https://www.npmjs.com/package/react-pin-widget](https://www.npmjs.com/package/react-pin-widget)  
Link to repository: [https://github.com/M-Blaze/react-pin-widget](https://github.com/M-Blaze/react-pin-widget)
