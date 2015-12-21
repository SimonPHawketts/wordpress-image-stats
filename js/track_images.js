/**
 * Created by simon on 20/12/2015.
 */
jQuery(document).on( 'jp_carousel.selectSlide', '.jp-carousel-wrap', function( event, slides ) {
        // This is just to show you what values get passed in.  Delete it before going to production.
        if ( window.console ) {
                //console.log( this );
                //console.log( event );
                //console.log( slides );
                // console.log( slides[0] );
                //console.log(event.delegateTarget);
        }

        //Add piwik page tracking
        var url=jQuery('div img').attr('src');
        //console.log(event.target.ownerDocument.title);
        _paq.push(['setCustomUrl', url]);
        _paq.push(['setDocumentTitle', event.target.ownerDocument.title]);
        _paq.push(['trackPageView']);

} )
