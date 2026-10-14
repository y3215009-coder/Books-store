import styles from './Book.module.css';

export function Book({ title, author, likes, isAvilable, idNum }) {
  
  const cardStyle = likes > 100 ? `${styles.card} ${styles.popular}` : styles.card;

  return (
    <li className={cardStyle}>
      <h2>title: <span className={styles.highlight}>{title}</span></h2>
      <h4>idNum: {idNum}</h4>
      <h4>author: {author}</h4>
      <h4>likes: {likes}</h4>
      <h4>isAvilable: {isAvilable}</h4>
      
      {likes > 100 ? <h3>pupioler book</h3> : ""}
    </li>
  );
}
