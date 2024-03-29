import React, { useState } from 'react'
import styles from './singledata.style.module.css'
import Cards from "./Cards"
import Modal from "./Modal"
import Image from 'next/image';
import { IoLocationOutline } from "react-icons/io5";

interface CardData {
    image: string;
    eventName: string;
    date: string;
    location: string;
}
interface SingleDataProps {
    cardData: CardData[];
}

const SingleData = ({ cardData }: SingleDataProps) => {

    const [IsModalOpen, SetIsModalOpen] = useState(false)

    // To store the data of the card that is selected, so that we can send this data to modal
    const [SelectedCardData, SetSelectedCardData] = useState<{}>({})

    const handleModal = (IsOpen: boolean) => {
        SetIsModalOpen(IsOpen)
    }

    return (
        <div className={styles.body}>
            <div className={`${styles.container}`}>
                {cardData.map((item, key) => (
                    <div key={key} className={styles.eventContainer}>
                        <div className={styles.eventDetails}>
                            <div className={styles.date}>{item.date}</div>
                            <div className={styles.name}>{item.eventName}</div>
                            <div className={styles.location}>
                                <div style={{ marginTop: 2 }}><IoLocationOutline /></div>
                                <div>{item.location}</div>
                            </div>
                            <div className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam assumenda rem tempore pariatur enim molestias! Nisi doloribus sint laborum fugiat quia fugit mollitia, odit nemo optio voluptas sit ea explicabo!</div>
                        </div>
                        <div className={styles.eventImg}>
                            <Image
                                src={item.image}
                                width={350}
                                height={300}
                                alt="Picture of the author"
                                style={{ borderRadius: 10 }}
                            />
                        </div>
                    </div>
                ))}
                <div className={styles.modal}>
                    <div className={styles.schedule}>Schedule</div>
                    {/* We dont want to show the some of the things in form if only single data is there, so we are passing date as 1*/}
                    <Modal handleModal={handleModal} dataNumber={1}/>
                </div>
            </div>
        </div>
    )
}

export default SingleData