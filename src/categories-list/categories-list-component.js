import React, { Component } from 'react';

class CategoriesList extends Component {
  render() {
    const { categories = [], maximum = 1 } = this.props;
    return(
      <ul className="categories">
        {categories.length === 0 && <li className="categories__name"><span className="categories__divider">&nbsp;</span></li>}
        {categories.slice(0,maximum).map((category, index, usedArray) => {
          const isLast = index === usedArray.length - 1;
          return (<li key={`category-${category}`} className={`categories__name${isLast ? ' categories__name--last' : ''}`}>{category}{!isLast && <span className="categories__divider">&nbsp;>&nbsp;</span>}</li>);
        })}
      </ul>
    );
  }
}

export default CategoriesList;
