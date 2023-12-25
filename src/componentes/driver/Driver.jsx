import React from 'react'
import styles from './deriver.module.css';
import Drive from '../images/drive.png';

function Driver() {
  return (
    <div className={styles.drive}>
        <div className={styles.left}>
        <img src={Drive}/>
        </div>
        <div>
            <h2>
               Find your Perfect Car <span>Try before you buy</span>
            </h2>
            <p>
                Makes sure your future wheels work well with your lifestyle bt taking
                your name in the driver's seat. 
            </p>
            <button>Browser Car</button>
        </div>
    </div>
  )
}

export default Driver