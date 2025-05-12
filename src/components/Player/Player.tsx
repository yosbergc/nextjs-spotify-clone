import styles from './player.module.css'
import { FaPlay } from "react-icons/fa";
import { MdSkipPrevious } from "react-icons/md";
import { IoMdSkipForward } from "react-icons/io";
import { LiaRandomSolid } from "react-icons/lia";
import { GrPowerCycle } from "react-icons/gr";
import { CiSpeaker } from "react-icons/ci";
import { ResultSidebar } from '../ResultSidebar/ResultSidebar';

function Player() {
    return (
        <section className={styles.player}>
            <ResultSidebar />
            <section className={styles.center}>
                <section className={styles.innerPlayer}>
                <LiaRandomSolid color='white' size={25} style={{ cursor: 'pointer '}}/>
                <MdSkipPrevious color='white' size={25} style={{ cursor: 'pointer '}}/>
                <FaPlay color='white' size={25} style={{ cursor: 'pointer '}}/>
                <IoMdSkipForward color='white' size={25} style={{ cursor: 'pointer '}}/>
                <GrPowerCycle color='white' size={25}/>
                </section>
                <input type="range" name="playerTimeSlider" className={styles.playerTimeSlider} />
            </section>
            <section className={styles.rightPlayer}>
                <CiSpeaker color='white' size={25} style={{ cursor: 'pointer '}}/>
                <input type="range" name="volume" id="volume" />
            </section>
        </section>
    )
}
export { Player }