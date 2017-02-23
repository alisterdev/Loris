/* exported QueryString */

/**
 * The following class provides a simple API to manipulate browsers querystring
 *
 * For example usage, see dicom_archive
 *
 * @author Alex Ilea
 * @version 0.0.2
 * @since 2016-11-22
 *
 * @constructor
 * @return {{}} - QueryString helper object
 *
 */
var QueryString = {
  /**
   * Build and return an object containig querystring key/value pairs
   * based on current values inside the browser's querystring.
   *
   * @return {{}} - object with querystring key/value pairs
   */
  get: function() {
    var queryString = window.location.search.substring(1).split("&");
    var queryStringObj = {};

    queryString.forEach(function(param) {
      var key = param.split("=")[0];
      var value = param.split("=")[1];
      if (key !== "" && value !== "") {
        queryStringObj[key] = decodeURI(value);
      }
    });

    return queryStringObj;
  },

  /**
   * Appends passed key/value pair to browser's current querystring
   *
   * @param {{}} currentQuery - current query object
   * @param {string} fieldName - key
   * @param {string} fieldValue - value
   * @return {{}} - new object with querystring key/value pairs
   */
  set: function(currentQuery, fieldName, fieldValue) {
    // Always start with '?'
    var queryString = "?";

    // Deep copy of object representation of query
    var queryStringObj = JSON.parse(JSON.stringify(currentQuery));

    // Add/Delete to/from query string object
    if (fieldValue === "") {
      delete queryStringObj[fieldName];
    } else {
      queryStringObj[fieldName] = fieldValue;
    }

    // Build query string
    Object.keys(queryStringObj).map(function(key, count) {
      queryString += key + "=" + queryStringObj[key];
      if (count !== Object.keys(queryStringObj).length - 1) {
        queryString += "&";
      }
    });

    window.history.replaceState({}, "", queryString);

    return queryStringObj;
  },

  /**
   * Clears browser querystring
   *
   * @param {string} moduleName - module used in URL
   * @return {{}} - empty object
   */
  clear: function(moduleName) {
    if (moduleName !== undefined && moduleName !== "") {
      window.history.replaceState({}, "", "/" + moduleName + "/");
    } else {
      console.error('QueryString.clear() expects parameter `moduleName`!');
    }
    return {};
  }
};
