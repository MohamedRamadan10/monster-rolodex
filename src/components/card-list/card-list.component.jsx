import Card from "../card/card.component";

const CardList = ({ monsters }) => (
   <div className="card-list">
      {monsters.map((monster, id) => {
         return <Card monster={monster} key={id} />;
      })}
   </div>
);

export default CardList;
