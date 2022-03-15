import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Ball from './Ball';


const game = () => {
    const [winNumber, setWinNumber] = useState(Math.ceil(Math.random()*5));
    const [winBall, setWinBall] = useState([]);
    const [word, setWord]=useState('바나나');
    const [value, setValue]=useState('');
    const [result, setResult]=useState('');
    const inputRef =useRef(null);

    const onSubmitForm =(e) =>{
        e.preventDefault();

        //끝말잇기 로직
        if(word[word.length-1] === value[0]){
            setResult('딩동댕~');
            setWord(value);
            setValue('');
            inputRef.current.focus();
        } else{
            setResult('땡!');
            setValue('');
            inputRef.current.focus();
        }
    };

    const onChangeInput =(e) =>{
        setValue({value: e.target.value});
    };

        return (
            <>
            <div class="font">당첨 ball</div>
            <div id="결과창" class="font">
                {/* {winBall((v) => <Ball key={v} number={v} />)} */}
            </div>
            <form onSubmit = {onSubmitForm}>
                <label id="label" htmlFor="wordInput">글자를 입력하세요.</label>
                <input id="wordInput" className="wordInput" ref={inputRef} value={value} onChange={onChangeInput} />
                {/*value와 onChange는 세트임. onChange를 안 쓰려면 defaultValue라고 써야한다. */}
                <button >입력</button>
            </form>
            </>
        );
}

export default game;