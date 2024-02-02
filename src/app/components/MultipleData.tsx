import React, { useState } from 'react'
import styles from './multipledata.style.module.css'
import Cards from "./Cards"
import Modal from "./Modal"


interface CardData {
    image: string;
    eventName: string;
    date: string;
    location: string;
}
interface MultipleDataProps {
    cardData: CardData[];
}

const MultipleData = ({ cardData }: MultipleDataProps) => {
    const [IsModalOpen, SetIsModalOpen] = useState(false)

    // To store the data of the card that is selected, so that we can send this data to modal
    const [SelectedCardData, SetSelectedCardData] = useState<{}>({})

    const handleModal = (IsOpen: boolean) => {
        SetIsModalOpen(IsOpen)
    }

    return (
        <div>
            <div className={`${styles.container} ${IsModalOpen ? styles.blur : ""}`}>
                <div className={styles.heading}>Your Events</div>
                <div className={styles.cardContainer}>
                    {cardData.map((item, key) => (
                        <Cards key={key} image={item.image} date={item.date} eventName={item.eventName} location={item.location} handleModal={handleModal}
                        />
                    ))}
                </div>
            </div>
            {IsModalOpen && (<div className={styles.modal}>
                {/* We dont want to show the all the things in form if multiple data is there, so we are passing date as 3*/}
                <Modal handleModal={handleModal} dataNumber={3} />
            </div>)}
        </div>
    )
}

export default MultipleData