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
  <strong style="background-color: #ccc;">length: Number (Default: 6)</span> (optional)
  
  It is the number of pin input.
  
  Default value is 6
  
  ```
  <ReactPin length={5} />
  ```
</div>
<hr />
<div>
  <span style="background-color: #ccc;">type: string</span> (optional)
  
  It is the type of input.

```
<ReactPin type='alphabet'/>
```

<strong style="color: red">Values accepted</strong>

  <ol>
    <li>
        <span style="background-color: #ccc;">numeric (Default):</span> Accepts numbers only
    </li>
    <li>
        <span style="background-color: #ccc;">alphaNumeric:</span> Accepts both alphabets and numbers
    </li>
    <li>
        <span style="background-color: #ccc;">alphabet:</span> Accepts alphabets only
    </li>
    <li>
        <span style="background-color: #ccc;">numericPassword:</span> Password type, accepts numbers only
    </li>
    <li>
        <span style="background-color: #ccc;">alphaNumericPassword:</span> Password type, accepts both alphabets and numbers
    </li>
  </ol>
</div>
<hr />
<div>
  <span style="background-color: #ccc;">inputClass: string</span> (optional)

Used to style pin inputs

</div>
<hr />
<div>
  <span style="background-color: #ccc;">onFill: function</span> (optional)

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
