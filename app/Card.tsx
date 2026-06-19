import styles from './styles/Home.module.css';

export default function Card({ title, description, imageUrl }: { title: string; description: string; imageUrl: string }) {
  return (
    <div className={styles['card-container']}>
      <img src={`${process.env.NODE_ENV === "production" ? "/portfolio" : ""}${imageUrl}`} alt={title} className={styles['card-image']} />
      <h2 className={styles['card-title']}>{title}</h2>
      <p className={styles['card-description']}>{description}</p>
    </div>
  );
}

