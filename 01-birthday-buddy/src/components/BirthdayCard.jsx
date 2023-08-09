const BirthdayCard = ({ props }) => {
  return (
    <div className="person">
      <img src={props.image} alt={props.name} className="profile-img" />
      <div>
        <h2>{props.name}</h2>
        <p>{props.age} years</p>
      </div>
    </div>
  );
};
export default BirthdayCard;
