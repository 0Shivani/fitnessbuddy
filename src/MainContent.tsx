import React, { JSX, useState } from 'react';
import { TrainerType } from './App';

const MainContent:React.FC<TrainerType> = ({trainer}:TrainerType):JSX.Element => {
    const [count, setCount] = useState<number>(1)
    return (
        <div>
            <p>{trainer.tagName}</p>
            <p>{trainer.trainerName} Trainer Number {count}</p>
            <button onClick={()=>setCount((prev)=>prev+1)}></button>
        </div>
    );
};

export default MainContent;