import Button from './Button/Button';
import css from './Options.module.css';
export default function Options({
  feedback,
  clickReset,
  updateFeedback,
  resetFeedback,
}) {
  return (
    <div className={css.wrapper}>
      <div className={css.thisbutton}>
        {Object.keys(feedback).map((key) => (
          <Button key={key} values={feedback} onClick={updateFeedback(key)}>
            {key}
          </Button>
        ))}
      </div>
      {clickReset && (
        <Button key="reset" values={feedback} onClick={resetFeedback}>
          reset
        </Button>
      )}
    </div>
  );
}