import React from "react";


export default function Mains({ type, meals }) {
  return (
    <section className="extras">
    <h2 className="extras-heading">{type}</h2>
    {meals.map((item, index) => (
      <article className="menu-item" key={index}>
        <div className="mains-name">{item.name}</div>
        <strong className="mains-price">{item.price}€</strong>
      </article>
    ))}
  </section>
  );
}
