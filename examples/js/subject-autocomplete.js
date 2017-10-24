$(function(){
	
	
/*var currencies = [
    { value: 'Afghan afghani', data: 'AFN' },
    { value: 'Albanian lek', data: 'ALL' },
    { value: 'Algerian dinar', data: 'DZD' },
    { value: 'European euro', data: 'EUR' },
    { value: 'Angolan kwanza', data: 'AOA' },
    { value: 'East Caribbean dollar', data: 'XCD' },
    { value: 'Vietnamese dong', data: 'VND' },
    { value: 'Yemeni rial', data: 'YER' },
    { value: 'Zambian kwacha', data: 'ZMK' },
    { value: 'Zimbabwean dollar', data: 'ZWD' },
  ];*/	
	
    $.getJSON("http://www.politifact.com/api/subjects/all/json/?callback=?",
        function(response) {
		
		
		var subjects = [];
		var baseurl = 'http://www.politifact.com/';
		var arrayLength = response.length;
		for (var i = 0; i < arrayLength; i++) {
			subjects.push({
				value: response[i].subject, 
				data: response[i].subject_slug, 
			
			});
		}		
	  $('#autocomplete').autocomplete({
    lookup: subjects,
    onSelect: function (suggestion) {
    // some function here
    }
  });

  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: subjects,
    onSelect: function (suggestion) {

	  
		$.getJSON('http://www.politifact.com/api/statements/truth-o-meter/subjects/' + suggestion.data + '/json/?n=3&callback=?',
			function(response) {
					var thehtml;
					$('#outputcontent').empty();
				for (var i = 0; i < response.length; i++) {
				     var thehtml = '<br /><a href=\'' + baseurl + response[i].statement_url + '\' target=\'_blank\'>' + response[i].ruling_headline + '</a>';
					$('#outputcontent').append(thehtml);
				}

		});
	  
	  
	  
    }
  });
        }
    );
});
