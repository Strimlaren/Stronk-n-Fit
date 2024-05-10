import css from "../components_styles/Footer.module.css";
import * as Icon from "react-feather";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className={css.footer_container}>
      <ul className={css.ul}>
        <li>
          <Icon.User color="var(--blacker)" className={css.icon_standard} />
          <p>Profile</p>
        </li>
        <li>
          <Icon.Clock color="var(--blacker)" className={css.icon_standard} />
          <p>History</p>
        </li>
        <li>
          <Icon.Plus color="var(--blacker)" className={css.icon_standard} />
          <p>Workout</p>
        </li>
        <li>
          <Icon.PieChart color="var(--blacker)" className={css.icon_standard} />
          <p>Progress</p>
        </li>
        <li>
          <Icon.Thermometer
            color="var(--blacker)"
            className={css.icon_standard}
          />
          <p>Measures</p>
        </li>
      </ul>
    </div>
  );
}
