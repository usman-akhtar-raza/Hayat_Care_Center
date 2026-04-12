import Image from "next/image";
import styles from "./MealVisualRibbon.module.css";

const mealVisuals = [
  {
    slot: "Breakfast",
    dish: "Fruit Yogurt Parfait",
    image: "/images/meal-plan/meal-01.jpg",
  },
  {
    slot: "Lunch",
    dish: "Herb Chicken Bowl",
    image: "/images/meal-plan/meal-02.jpg",
  },
  {
    slot: "Dinner",
    dish: "Salmon And Greens",
    image: "/images/meal-plan/meal-03.jpg",
  },
  {
    slot: "Breakfast",
    dish: "Whole Grain Toast Plate",
    image: "/images/meal-plan/meal-04.jpg",
  },
  {
    slot: "Lunch",
    dish: "Vegetable Soup And Salad",
    image: "/images/meal-plan/meal-05.jpg",
  },
  {
    slot: "Dinner",
    dish: "Chicken Rice Dinner",
    image: "/images/meal-plan/meal-06.jpg",
  },
] as const;

const loopedVisuals = [...mealVisuals, ...mealVisuals];

export default function MealVisualRibbon() {
  return (
    <div data-reveal className={styles.shell}>
      <div className={styles.header}>
        <p className={styles.title}>Sample dishes from the weekly schedule</p>
      </div>

      <div className={styles.marquee}>
        <div className={styles.track}>
          {loopedVisuals.map((item, index) => (
            <article key={`${item.dish}-${index}`} className={styles.card}>
              <div className={styles.media}>
                <Image
                  src={item.image}
                  alt={`${item.slot} meal example: ${item.dish}`}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 70vw, 248px"
                />
              </div>
              <div className={styles.copy}>
                <p className={styles.mealType}>{item.slot}</p>
                <p className={styles.dish}>{item.dish}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
