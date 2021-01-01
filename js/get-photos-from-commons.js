var api_endpoint = 'https://commons.wikimedia.org/w/api.php?action=query&list=allimages&aiuser=Srishti%20Sethi&aisort=timestamp&aidir=descending&ailimit=100&format=json';

$.ajax( {
	url: api_endpoint, 
	dataType: 'jsonp',
	success: function( data ) {
		var results = data && data.query && data.query.allimages,
			response = '',
			name;

		if ( results ) { 
			for( var i = 0; i< results.length; i++ ) {
				name = results[i].name.split( '.' )[0].replace( /_/g, ' ' );
				url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/' +
					results[i].url.substring(results[i].url.indexOf('commons/') + 'commons/'.length)
					+ '/640px-' + results[i].name;
				response += '<div class="item"><img src="' + url + '"><div class="photos-carousel carousel-caption"><h5>' + name + '</h5><span><a href="'+ results[i].descriptionurl + '" target="_blank">View on Wikimedia Commons</a></span></div></div>';
			}

			$( '.carousel-inner' ).append( response );
			$( '.item' ).first().addClass( 'active' );
			$( '#photoCarousel' ).carousel({interval: false});
		}
	}
} );
