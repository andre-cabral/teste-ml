const R = require('ramda');

const parseItemResults = (itemResultData, descriptionResultData, categoryResultData) => {
  return {
    author: {
      name: "String",
      lastname: "String"
    },
    item: {
      ...parseResultItem(itemResultData),
      description: R.pathOr('', ['plain_text'], descriptionResultData),
      categories: parseCategories(R.pathOr([], ['path_from_root'], categoryResultData)),
    }
  }
};

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
    picture: R.pathOr('', ['pictures', '0', 'secure_url'], resultItemData),
    condition: R.pathOr('', ['condition'], resultItemData),
    free_shipping: R.pathOr(false, ['shipping', 'free_shipping'], resultItemData),
    sold_quantity: R.pathOr(0, ['sold_quantity'], resultItemData)

  }
}

const parseCategories = (pathFromRoot) => {
  return pathFromRoot.map((category) => {
    return R.pathOr('', ['name'], category);
  });
}
module.exports = { parseItemResults };