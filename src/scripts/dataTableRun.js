/*function for RUN DATATABLE*/
$(document).ready( function () {
    $('#priceListTable').DataTable({
        "ajax": function (data, callback, settings) {
            callback(
                JSON.parse( localStorage.getItem('jsonTable') )
            );
        }
    });
} );