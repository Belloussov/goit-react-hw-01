import clsx from "clsx";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={clsx(css.table)}>
      <thead className={clsx(css.head)}>
        <tr>
          <th className={clsx(css.item)}>Type</th>
          <th className={clsx(css.item)}>Amount</th>
          <th className={clsx(css.item)}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={clsx(css.transactions)}>
            <td className={clsx(css.item)}>{type}</td>
            <td className={clsx(css.item)}>{amount}</td>
            <td className={clsx(css.item)}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
