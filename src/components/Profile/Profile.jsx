import css from "./Profile.module.css";
import clsx from "clsx";

export default function Profile({
  userData: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={clsx(css.container)}>
      <div className={clsx(css.info)}>
        <img className={clsx(css.image)} src={avatar} alt="User avatar" />
        <p className={clsx(css.name)}>{username}</p>
        <p className={clsx(css.tag)}>@{tag}</p>
        <p className={clsx(css.location)}>{location}</p>
      </div>

      <ul className={clsx(css.list)}>
        <li className={clsx(css.item)}>
          <span className={clsx(css.text)}>Followers</span>
          <span className={clsx(css.number)}>{followers}</span>
        </li>
        <li className={clsx(css.item)}>
          <span className={clsx(css.text)}>Views</span>
          <span className={clsx(css.number)}>{views}</span>
        </li>
        <li className={clsx(css.item)}>
          <span className={clsx(css.text)}>Likes</span>
          <span className={clsx(css.number)}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
