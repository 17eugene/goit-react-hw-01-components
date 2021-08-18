import PropTypes from 'prop-types';
import styles from './statistics.module.css';

function Statistic({ title, stats }) {
    return (
        <section className={styles.section}>
            {title && <h2 className={styles.title}>{title}</h2>}
            
            <ul className={styles.list}>
                {stats.map(stat => (
                    <li key={stat.id} className={styles.item}>
                        <span className={styles.label}>{stat.label}</span>
                        <span className={styles.percentage}>{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
};

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}

export default Statistic;