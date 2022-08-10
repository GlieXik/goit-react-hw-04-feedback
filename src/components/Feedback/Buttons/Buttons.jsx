export const Buttons = ({onClickGood,onClickNeutral,onClickBad})=>{

    return <>
    <h1>Please leave feedback</h1>
    <button onClick={()=>onClickGood()}>Good</button>
    <button onClick={()=>onClickNeutral()}>Neutral</button>
    <button onClick={()=>onClickBad()}>Bad</button>
    </>   
}