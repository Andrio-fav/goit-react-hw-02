import css from './Options.module.css';

export default function Options({ onLeaveFeedback, onReset, hasFeedback }) {
  return (
    <div className={css.wrapper}>
      <button onClick={() => onLeaveFeedback('good')} className={css.button}>Good</button>
      <button onClick={() => onLeaveFeedback('neutral')} className={css.button}>Neutral</button>
      <button onClick={() => onLeaveFeedback('bad')} className={css.button}>Bad</button>
      {hasFeedback && (
        <button onClick={onReset} className={`${css.button} ${css.reset}`}>Reset</button>
      )}
    </div>
  );
}
