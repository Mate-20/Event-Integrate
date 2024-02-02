import React, { useState } from 'react'
import styles from './twodata.style.module.css'
import Cards from "./Cards"
import Modal from "./Modal"

interface CardData {
    image: string;
    eventName: string;
    date: string;
    location: string;
}
interface TwoDataProps {
    cardData: CardData[];
}

const TwoData = ({cardData} : TwoDataProps) => {
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
                {/* We want to show the image if multiple data is there, so we are passing true for image */}
                <Modal handleModal={handleModal} dataNumber={2} />
            </div>)}
        </div>
    )
}

export default TwoData