const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_LIMIT = 0;

function getPagination(query) {
  const page = Math.abs(query.page) || DEFAULT_PAGE_NUMBER;
  const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT;    // if query limit is not set then the default page number of 0 allows Mongo to return all the documents in the colletion
  const skip = (page - 1) * limit;                              // the number of documents we want to skip depending on what page we are on

  return {
    skip,
    limit,
  };
}

module.exports = {
  getPagination,
};