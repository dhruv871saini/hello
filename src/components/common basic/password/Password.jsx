import React, { useCallback, useEffect, useRef, useState } from "react";
import "./password.css"
const Password = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordref=useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "@#1%^&*(){}";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);
  const copytext=useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
  })
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-100 container-fluid bg-secondary m-4 p-4">
        <h1 className="text-center text-white">Password Generator</h1>
        <div class="d-flex flex-row">
          <div class=" rounded ">
            <input style={{height:40}} type="text" value={password} readOnly 
                ref={passwordref}
            />
          </div>
          <div class="btn btn-primary rounded " onClick={copytext}>copy</div>
        </div>
        <div class="d-flex flex-row"><div class="cursor">
          <input
            type="range"
            name=""
            id=""
            min={6}
            max={20}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label for=""> Length : {length}</label>
        </div>
        <div class="cursor">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            name=""
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label for="numberInput">number</label>
        </div>
        <div class="cursor">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            name=""
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label for="characterInput"> character</label>
        </div></div>
      </div>
    </>
  );
};

export default Password;
