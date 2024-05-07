export const Profile = ({
  user: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div>
      <div>
        <div>
          <img
            src={avatar}
            alt={username}
            width="120"
            height="120"
          />
          <p>{username}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>

        {/* <ul>
          <li>
            <span>Followers </span>
            <span>{followers}</span>
          </li>
          <li>
            <span>Views </span>
            <span>{views}</span>
          </li>
          <li>
            <span>Likes </span>
            <span>{likes}</span>
          </li>
        </ul> */}
      </div>
    </div>
  );
};
