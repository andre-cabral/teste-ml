import React, { Component } from 'react';
import Button from '../button/button-component';
import CategoriesList from '../categories-list/categories-list-component';

class ItemDetails extends Component {
  componentDidMount(){
    const productId = this.props.match.params.id;
    this.props.detailsRequest(productId);
  }

  render() {
    const { id, categories } = this.props;
    const buySubmit = (e) => {
      e.preventDefault();
    };

    return(
      <article className="details col-10">
        <CategoriesList categories={categories} maximum={4} />
        <section className="details__container">
          <form className="query__form" onSubmit={buySubmit}>
            <Button classes="button--query container--vertical-center" text="Comprar" queryButton={false} />
          </form>
        </section>
      </article>
    );
  }
}

export default ItemDetails;
