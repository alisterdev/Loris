/* exported formatColumn */

loris.hiddenHeaders = [];

/**
 * Modify behaviour of specified column cells in the Data Table component
 * @param {string} column - column name
 * @param {string} cell - cell content
 * @param {arrray} rowData - array of cell contents for a specific row
 * @param {arrray} rowHeaders - array of table headers (column names)
 * @return {*} a formated table cell for a given column
 */
function formatColumn(column, cell, rowData, rowHeaders) {
  // If a column if set as hidden, don't display it
  if (loris.hiddenHeaders.indexOf(column) > -1) {
    return null;
  }

  // Create the mapping between rowHeaders and rowData in a row object.
  let row = {};
  rowHeaders.forEach(function(header, index) {
    row[header] = rowData[index];
  }, this);

  // Default cell style
  let cellStyle = {
    whiteSpace: 'nowrap'
  };

  if (column === 'Progress') {
    if (cell === 'Failure') {
      cellStyle.color = '#fff';
      return (
        <td className="label-danger" style={cellStyle}>
          {cell}
        </td>
      );
    }

    if (cell === 'In Progress...') {
      cellStyle.color = '#fff';
      return (
        <td className="label-warning" style={cellStyle}>
          {cell}
        </td>
      );
    }

    let created = row['Number Of MincCreated'];
    let inserted = row['Number Of MincInserted'];
    return (
      <td style={cellStyle}>
        {cell} ({inserted} out of {created})
      </td>
    );
  }

  if (column === 'Tarchive Info') {
    let url = loris.BaseURL + '/dicom_archive/viewDetails/?tarchiveID=' + cell;
    return (
      <td style={cellStyle}>
        <a href={url}>View Details</a>
      </td>
    );
  }

  if (column === 'Number Of MincInserted') {
    if (cell > 0) {
      let url = loris.BaseURL + '/imaging_browser/?DCCID=' + row.CandID;
      return (
        <td style={cellStyle}>
          <a href={url}>{cell}</a>
        </td>
      );
    }
  }

  return (<td style={cellStyle}>{cell}</td>);
}
