import styles from './filtersidebar.module.css'
function FilterSidebar() {
    return (
        <section className={styles.filterSidebarContainer}>
            <button className="filter">Playlists</button>
            <button className="filter">Artists</button>
            <button className="filter">Albums</button>
        </section>
    )
}
export { FilterSidebar }