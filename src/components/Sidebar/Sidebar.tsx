import styles from './sidebar.module.css'
import { FiPlus } from "react-icons/fi";
import { FilterSidebar } from '../FilterSidebar/FilterSidebar';
import { ResultSidebar } from '../ResultSidebar/ResultSidebar';
function Sidebar() {
    return (
        <section className={styles.sidebar}>
            <header>
                <h3>Your library</h3>
                <button className="secondary-btn">
                <FiPlus size={20} color='white'/>
                Create</button>
            </header>
            <FilterSidebar />
            <ResultSidebar />
            <ResultSidebar />
            <ResultSidebar />
        </section>
    )
}
export { Sidebar }