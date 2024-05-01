import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={clsx(css.item)}>
      <img src={avatar} alt="Avatar" width="70" />
      <p className={clsx(css.name)}>{name}</p>
      <p
        className={clsx(css.text, isOnline === true ? css.online : css.offline)}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
