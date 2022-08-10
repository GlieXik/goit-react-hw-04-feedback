import { Notification } from "../Notification/Notification";

export const Statistics =({good,neutral,bad,total,positivePercentage})=>{

    return <>
    <div><h1> Statistics</h1>
        {total >0 ?
          (<div> 
          <p>Good:{good}</p>
          <p>Neutral:{neutral}</p>
          <p>Bad:{bad}</p>
          <p>Total:{total}</p>
          <p>Positive feedback: {positivePercentage}%</p></div>)
              : 
              (<Notification message="There is no feedback"></Notification>)

        }
    </div>
    </>
}