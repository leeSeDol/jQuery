	var entries = [
		{
			"term":"Bacchus",
			"part":"n",
			"difinition":" A convenient deity invented by the ancient as an excuse. "
		},
		{
			"term":"Bite",
			"part":"v.t",
			"difinition":" To speak of a man as you find him when he can't."
		},
		{
			"term":"Ae",
			"part":"v.e",
			"difinition":" a man as you find him when he can't to do this."
		}
	];

	var html = '';
	$.each(entries , function(entryIndex , entry){
		html+='<div class="entry">' +(entryIndex+1);
		html+='<div class="term">'+ this	['term'] +'</div>';
		html+='<div class="part">'+ this	['part'] +'</div>';
		html+='<div class="difinition">'+ this	['difinition'] +'</div>';
		html+='</div>';
	});
	$("#wrap").html(html);

