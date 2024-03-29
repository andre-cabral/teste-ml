const R = require('ramda');

const parseQueryResults = (queryResultsData) => {
  return {
    author: {
      name: "String",
      lastname: "String"
    },
    categories: parseCategories(R.pathOr([], ['filters'], queryResultsData), R.pathOr([], ['available_filters'], queryResultsData)),
    items: R.pathOr([], ['results'], queryResultsData).map((item) => {
      return parseResultItem(item);
    }),
  }
};

const parseCategories = (filtersData, availableFiltersData) => {
  const categories = filtersData.filter((filter) => {
    return R.pathOr('', ['id'], filter) === 'category';
  });
  const filtersCategories = R.pathOr([], ['0', 'values'], categories).map((category) => {
    return R.pathOr('', ['name'], category);
  });
  if(filtersCategories.length > 0){
    return filtersCategories;
  } else {
    const availableFiltersCategories = availableFiltersData.filter((filter) => {
      return R.pathOr('', ['id'], filter) === 'category';
    });
    return R.pathOr([], ['0', 'values'], availableFiltersCategories).map((category) => {
      return R.pathOr('', ['name'], category);
    });
  }
}

const parseResultItem = (resultItemData) => {
  const priceSplit = R.pathOr(0, ['price'], resultItemData).toString().split('.');
  return {
    id: R.pathOr('', ['id'], resultItemData),
    title: R.pathOr('', ['title'], resultItemData),
    price: {
      currency: R.pathOr('', ['currency_id'], resultItemData),
      amount: R.pathOr(0, ['0'], priceSplit),
      decimals: R.pathOr(0, ['1'], priceSplit)
    },
    city: R.pathOr('', ['address', 'city_name'], resultItemData),
    picture: R.pathOr('', ['thumbnail'], resultItemData),
    condition: R.pathOr('', ['condition'], resultItemData),
    free_shipping: R.pathOr(false, ['shipping', 'free_shipping'], resultItemData)
  }
}
module.exports = { parseQueryResults };