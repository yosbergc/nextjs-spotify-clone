import styles from './sidebar.module.css'
import { FiPlus } from "react-icons/fi";
import { FilterSidebar } from '../FilterSidebar/FilterSidebar';
function Sidebar() {
    return (
        <section className={styles.sidebar}>
            <header>
                <h4>Your library</h4>
                <button className="secondary-btn">
                <FiPlus size={20} color='white'/>
                Create</button>
            </header>
            <FilterSidebar />
        </section>
    )
}
export { Sidebar }