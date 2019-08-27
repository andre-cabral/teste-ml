import React, { Component } from 'react';
import { getUrlParameter } from '../helpers/url-helper';
import freeShippingImage from './images/free-shipping.png';
import { addZeroOnDecimals } from '../helpers/currency';

class QueryResults extends Component {
  componentDidMount(){
    const queryValue = getUrlParameter(this.props.location.search, 'q');
    this.props.queryRequest(queryValue);
  }

  render() {
    const { categories, items, error } = this.props;
  
    return(
      <article className="results col-10">
        <ul className="results__categories">
          {categories.slice(0,4).map((category, index, usedArray) => {
            const isLast = index === usedArray.length - 1;
            return (<li key={`category-${category}`} className={`results__category-name${isLast ? ' results__category-name--last' : ''}`}>{category}{!isLast && <span className="results__category-divider">&nbsp;>&nbsp;</span>}</li>);
          })}
        </ul>
        <ul className="results__items">
          {items.slice(0,4).map((product) => {
            const link = `/items/${product.id}`;
            return (
              <li key={`product-${product.id}`} className="results__product">
                <a className="results__image col-2" href={link}>
                  <img src={product.picture} alt={product.title} className="results__image-tag" />
                </a>
                <span className="results__information col-4 spacing-right--2-col">
                  <a className="results__price-container container--vertical-center" href={link}>
                    <span className="results__price-value">$ {product.price.amount},{addZeroOnDecimals(product.price.decimals)}</span>
                    {product.free_shipping && 
                    <img src={freeShippingImage} alt="Frete gratuito" className="results__shipping" />}
                  </a>
                  <a className="results__product-name" href={link}>{product.title}</a>
                </span>
                <span className="results__city">{product.city}</span>
              </li>
            );
          })}
        </ul>
      </article>
    );
  }
}

export default QueryResults;
