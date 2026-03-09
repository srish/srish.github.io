var api_endpoint = 'https://commons.wikimedia.org/w/api.php?action=query&generator=allimages&gaiuser=Srishti%20Sethi&gaisort=timestamp&gaidir=descending&gailimit=10&prop=imageinfo&iiprop=url&iiurlwidth=640&format=json&origin=*';

$( document ).ready( function() {
$.ajax( {
	url: api_endpoint,
	dataType: 'json',
	success: function( data ) {
		var pages = data && data.query && data.query.pages,
			response = '',
			name, info;

		if ( pages ) {
			$.each( pages, function( id, page ) {
				info = page.imageinfo[0];
				name = page.title.replace( 'File:', '' ).replace( /\.[^.]+$/, '' ).replace( /_/g, ' ' );
				response += '<div class="item"><img src="' + info.thumburl + '"><div class="photos-carousel carousel-caption"><h5>' + name + '</h5><span><a href="' + info.descriptionurl + '" target="_blank">View on Wikimedia Commons</a></span></div></div>';
			} );

			$( '.carousel-inner' ).append( response );
			$( '.item' ).first().addClass( 'active' );
			$( '#photoCarousel' ).carousel({interval: false});
		}
	}
} );
} );
