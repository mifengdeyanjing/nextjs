import styles from './Avatar.module.css';
import { getColorByName } from '../utils/color';

/**
 * A component that displays a user's avatar.
 * It shows the first letter of the user's name on a colored background.
 */
export default function Avatar({ name, size = 48, className = '' }) {
  const firstLetter = name ? name.charAt(0).toUpperCase() : '?';
  const bgColor = getColorByName(name);

  const style = {
    backgroundColor: bgColor,
    width: `${size}px`,
    height: `${size}px`,
    fontSize: `${size * 0.5}px`,
  };

  return (
    <div className={`${styles.avatar} ${className}`} style={style}>
      <span className={styles.letter}>{firstLetter}</span>
    </div>
  );
} 