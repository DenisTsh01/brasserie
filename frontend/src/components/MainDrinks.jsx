import React from "react";


export default function Mains({type, drinks }) {
  return (
    <section className="extras">
    <h2 className="extras-heading">{type}</h2>
      {drinks.map((drink, index) => (
        <article className="menu-item" key={index}>
          <h3 className="mains-name">{drink.name}</h3>
          <strong className="mains-price">{drink.price}€</strong>
          <p className="mains-description">{drink.grams} cl</p>
        </article>
      ))}
    </section>
  );
}
