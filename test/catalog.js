/**
 * `catalog` namespace is a pseudo-child of `acme` namespace using dot notation or `memberof` tag
 * and is defined in the file itself rather than external `index.js`
 *
 * @namespace acme.catalog
 */

/**
 * Catalog year
 * @type {number}
 */
export const year = 2017;

/**
 * Catalog season
 * @type {string}
 */
export const season = 'Summer';

/**
 * Products available
 * @type {acme.Product[]}
 */
const products = [];

/**
 * Add product to catalog
 * @param {acme.Product} product - Product to add
 */
function add(product) {
}

/**
 * Publish catalog
 */
function publish() {
}
