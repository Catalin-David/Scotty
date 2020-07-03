import React, {useState} from 'react';
import { PrimaryButton } from '@fluentui/react';
import styles from './GoalPopUp.module.scss';

export const GoalPopUp: React.FC<{toggleShowGoalPopUp: ()=>void, sendDateToParent:(goalDate: string)=>void}> = (props) => {

    const [goalEndDate, setGoalEndDate] = useState("string");

    const sendEndGoalDateToParent = () => {

        const dateInformation = goalEndDate.split("-")

        const dateToString = `${dateInformation[1]}/${dateInformation[2]}/${dateInformation[0]}`

        props.sendDateToParent(dateToString)
    }

    const handleDateChange = (event) => {
        setGoalEndDate(event.target.value)
    }

    return (
        <div className={ styles.modal }>
            <span className={styles.close} onClick={props.toggleShowGoalPopUp}>
                &times;
            </span>
            <form onSubmit={sendEndGoalDateToParent}>
                <h3>Let's set a goal finish date!</h3>
                <input type="date" onChange={handleDateChange}/>
                <input type="submit" value="Confirm"/>
            </form>

        </div>
    )
}