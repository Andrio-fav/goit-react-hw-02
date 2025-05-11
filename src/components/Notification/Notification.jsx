import css from './Notification.module.css';
export default function Notification() {
  return (
    <div className={css.wrapper}>
      <p className={css.message}>No feedback yet</p>
    </div>
  );
}
