


function displayInfo (event) {
   var termPH = $(this).attr(".ph1");
   var numberRecordsPH = $(this).attr(".ph2");
   var startYearPH = $(this).attr(".ph3");
   var endYearPH = $(this).attr(".ph4");
}





$.ajax({
    url: url,
    method: 'GET',
}).then(function (response) {
    console.log(response);