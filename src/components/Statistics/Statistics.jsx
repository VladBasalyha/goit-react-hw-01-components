import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>

    <ul className={css.statList}>
      {stats.map(stat => (
        <li key={stat.id} className={css.item}>
          <span className="label"> {stat.label} </span>
          <span className="percentage">{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
