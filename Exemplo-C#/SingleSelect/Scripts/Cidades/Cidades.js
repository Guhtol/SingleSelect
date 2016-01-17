$(document).ready(init);

var select = Select('selectId');

function init() {
  
    $.get('Cidades/ListaCidades', ajaxResponse);
};

function ajaxResponse(data) {

    select.append(data,'Nome','Id');
}