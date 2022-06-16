const Card = ({ monster: { id, name, email } }) => (
   <div className="card" key={id}>
      <div className="card__content">
         <img
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
            alt={`${name}`}
         />
         <div className="card__name">{name}</div>
         <div className="card__email">{email}</div>
      </div>
   </div>
);

export default Card;
