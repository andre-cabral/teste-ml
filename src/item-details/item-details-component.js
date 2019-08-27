import React, { Component } from 'react';
import Button from '../button/button-component';
import CategoriesList from '../categories-list/categories-list-component';
import { addZeroOnDecimals } from '../helpers/currency';

class ItemDetails extends Component {
  componentDidMount(){
    const productId = this.props.match.params.id;
    this.props.detailsRequest(productId);
  }

  render() {
    const { id, title, price, picture, condition, free_shipping, sold_quantity, description, categories } = this.props;
    const buySubmit = (e) => {
      e.preventDefault();
    };

    return(
      <article className="item col-10">
        <CategoriesList categories={categories} maximum={4} />
        <div className="item__container">
          <section className="item__product spacing-bottom--1-col-big">
            <div className="item__image-container col-7">
              <img className="item__image" src={picture} alt={title} />
            </div>
            <div className="item__buybox">
              <span className="item__condition">{condition} - {sold_quantity} vendidos</span>
              <h1 className="item__title">{title}</h1>
              <span className="item__price">$ {price.amount},{addZeroOnDecimals(price.decimals)}</span>
              <form className="item__form" onSubmit={buySubmit}>
                <Button classes="button--buy" text="Comprar" queryButton={false} />
              </form>
            </div>
          </section>
          <section className="item__information col-7">
            <h3 className="item__info-title">Descripción del producto</h3>
            <p className="item__description">{description}</p>
          </section>
        </div>
      </article>
    );
  }
}

export default ItemDetails;
