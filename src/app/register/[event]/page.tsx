import React from 'react'
import styles from './page.style.module.css'
import Image from 'next/image'

const Page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.details}>
                <div className={styles.content}>
                    <div className={styles.date}>February 3 - 7, 2024</div>
                    <div className={styles.eventName}>Marathon</div>
                    <div className={styles.location}>Berlin, Germany</div>
                    <div className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat delectus optio sequi perspiciatis, animi nulla architecto ipsam nisi deserunt, deleniti enim dolorum quam numquam in quasi blanditiis ipsum voluptas veniam?</div>
                </div>
                <h1 className={styles.formHeading}>Register Yourself</h1>
                <form className={styles.form}>
                    <div className={styles.name}>Name</div>
                    <input className={styles.input}></input>
                    <div className={styles.email} >Email</div>
                    <input className={styles.input}></input>
                    <div>
                    <button type='submit' className={styles.submitBtn}>Register</button>
                    </div>
                    
                </form>
            </div>
            <div className={styles.img}>
                <Image
                    src="/marathon.png"
                    width={500}
                    height={350}
                    alt="Picture of the author"
                    style={{ borderRadius: 20 }}
                />
            </div>
        </div>
    )
}

export default Page