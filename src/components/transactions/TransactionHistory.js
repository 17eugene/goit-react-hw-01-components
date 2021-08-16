import PropTypes from 'prop-types';
import styles from "./transactions.module.css";


function TransactionHistory({items}) {
    return (
        <table className={styles.transactions_history}>
            <thead>
                <tr>
                    <th className={styles.table_head}>Type</th>
                    <th className={styles.table_head}>Amount</th>
                    <th className={styles.table_head}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td className={styles.table_body}>{item.type}</td>
                        <td className={styles.table_body}>{item.amount}</td>
                        <td className={styles.table_body}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
};

export default TransactionHistory;