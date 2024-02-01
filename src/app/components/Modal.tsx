'use client'
import React, { useState } from 'react'
import { Button, Calendar, CalendarCell, CalendarGrid, Heading } from 'react-aria-components';
import styles from './modal.style.module.css'
import Link from 'next/link';

interface ModalProps{
    handleModal : (isOpen : boolean)=> void
}

const Modal = (props : ModalProps) => {

    const timeData :string[] = ["10:00 am","11:00 am","2:00 pm"]

    const [IsTimeSelected, SetIsTimeSelected] = useState<string | null>(null)

    const handleTime = (time : string)=>{
        SetIsTimeSelected(time)
    }

    const handleModal = ()=>{
        props.handleModal(false)
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.calendar}>
                    <Calendar aria-label="Appointment date" className={styles.ariaCalendar}>
                        <header>
                            <Button slot="previous" className={styles.ariaBtn}>◀</Button>
                            <Heading className={styles.ariaHeading} />
                            <Button slot="next" className={styles.ariaBtn}>▶</Button>
                        </header>
                        <CalendarGrid className={styles.ariaGrid}>
                            {(date) => <CalendarCell date={date} className={styles.ariaCell} />}
                        </CalendarGrid>
                    </Calendar>
                </div>
                <div className={styles.timeSlots}>
                    <h1>Time Slots</h1>
                    {timeData.map((item,key)=>(
                        <div key={key} 
                        className={`${styles.time} ${IsTimeSelected === item ? styles.selectedTime : ''}`}
                        onClick={()=>handleTime(item)}
                        >{item}</div>
                    ))}
                    <div className={styles.btns}>
                        <Link className={styles.nextBtn} href={`/register/${1}`}>Next</Link>
                        <button className={styles.cancelBtn} onClick={handleModal}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal