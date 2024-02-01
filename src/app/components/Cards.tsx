import React, { useState } from 'react'
import styles from './cards.style.module.css'
import Image from 'next/image'
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';

interface CardTypes{
    image : string
    eventName : string
    date : string
    location : string
    handleModal : (IsOpen : boolean)=>void
}

// The ID that will be passed to the card for a Particular event, that ID will be passed as a Slug in the Link to open the form.

const Cards = (props: CardTypes) => {

    const handleModal = ()=>{
        props.handleModal(true)
    }
    return (
        <div className={styles.card} onClick={handleModal}>
            <div className={styles.img}>
                <Image
                    src={props.image}
                    width={350}
                    height={200}
                    alt="Picture of the author"
                    style={{borderTopLeftRadius:15, borderTopRightRadius:15}}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.tag}>Events</div>
                <div className={styles.date}>{props.date}</div>
                <div className={styles.eventName}>{props.eventName}</div>
                <div className={styles.location}>
                    <div><IoLocationOutline/></div>
                    <div>{props.location}</div>
                </div>
                <div className={styles.btn}>
                    <div>Register</div>
                    <div><FaArrowRightLong/></div>
                </div>
            </div>
        </div>
    )
}

export default Cards