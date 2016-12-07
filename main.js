function setHeight(columns) {
	columns.height('auto');
   		var tallestcolumn = 0;
   		columns.each(function() {
   			currentHeight = $(this).height();
   			if (currentHeight > tallestcolumn) {
   				tallestcolumn = currentHeight;
   			}
   		});
   		columns.height(tallestcolumn);
   }
$(document).ready(function(){
	var owl = $('.list-top-clinics').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        },
        navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        onInitialize : function(){ setTimeout(function(){ reHieghtSlide( '.list-top-clinics', false ) }, 500)}
    });
	$( window ).resize(function() {
		//setHeight($('#top-phongkham  .clinic-item'));
	  if($( window ).width() < 1300){
		  $(".list-top-clinics > .owl-stage-outer").height('auto');
		  carouselEventCallback(owl, '.list-top-clinics', false);
	  }
	});
	// Equal Height DIV
	function setEqualHeight(columns) {
		var tallestcolumn = 0;
		columns.each(function() {
			currentHeight = $(this).height();
			if (currentHeight > tallestcolumn) {
				tallestcolumn = currentHeight;
			}
		});
		columns.height(tallestcolumn);
	}

	setEqualHeight($('#top-phongkham  .clinic-item'));
	//User Panel Menu
	$('.user-control .user').hover(function(){
		if($('.user-control .panel-menu').css('display') == 'none'){
			$(this).next('.panel-menu').fadeIn(300);
		}		
	}, function(){
		$(this).next('.panel-menu').mouseleave(function(){
			$('.user-control .panel-menu').hide();
		});
	});

//	fixbug ECO-1115 start
	$('body').click(function(){
		 $('.user-control .panel-menu').hide();
	})
	$('#mnc').click(function(event){
		event.stopPropagation();
	})
//	fixbug ECO-1115 end    

    
    
	//Rate
    $(function() {
        $ratedemoedit = $(".rating-demo-edit").rateYo({
            rating: 1,
            starWidth: "24px",
            spacing: "2px",
            number: 5,
            normalFill: "#dddddd",
            ratedFill: "#ed8786",
            fullStar: true
        });

    });

    $('.panel .owl-carousel.owl-single.wnav').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        },
        navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
    });

    $('.panel .owl-carousel.owl-two.wnav').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 2
            }
        },
        navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
    });
    $('.panel .owl-carousel.owl-three.wnav').owlCarousel({
        loop: false,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 3
            }
        },
        navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
    });
    $('.panel .owl-carousel.owl-four.wnav').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 4
            }
        },
        navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
    });
    

//    // Button Like Action
    $('#add_like').click(function(event){
        event.preventDefault();
        if($(this).hasClass('liked')){
            $(this).removeClass('liked');
            $(this).find('.fa').removeClass('fa-heart').addClass('fa-heart-o');
        }else{            
            $(this).addClass('liked');
            $(this).find('.fa').removeClass('fa-heart-o').addClass('fa-heart');
        };
        
    });
    //accordion-panel
    $('.accordion-panel .accordion-title').click(function(event) {
        event.preventDefault();
        if($(this).parents('.accordion-panel').hasClass('opened')){
            $(this).parents('.accordion-panel').removeClass('opened');
        }else{
            $(this).parents('.accordion-panel').addClass('opened');
        }
    });
});

function countDownTime(dateString, endDateString){

	var countDown = 'H?t khuy?n mãi';
	var dateNow =new Date().getTime()/1000;

	if(!endDateString){
		return dateString;
		//endDateString='1970-00-01 00:00:00';
	}
	var reggie = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
	var dateArray = reggie.exec(endDateString);
	var dateStart = (new Date(dateArray[1],dateArray[2]-1,dateArray[3],dateArray[4],dateArray[5],dateArray[6]).getTime())/1000;
	var dateDiff = dateStart-dateNow; // in minute

	if(dateDiff > 0){
		day = parseInt(dateDiff/86400) ;
		hr =  parseInt((dateDiff % 86400)/3600) ;
		min = parseInt ((dateDiff%3600)/60);
		sec =  parseInt(dateDiff%60);
		if (!!day && day < 10) {
			day = '0' + day;
		}
		if (!!hr && hr < 10) {
			hr = '0' + hr;
		}
		if (!!min && min < 10) {
			min = '0' + min;
		}
		if (!!sec && sec < 10) {
			sec = '0' + sec;
		}
		countDown =  'Còn' + ' ' + day + ' Ngày ' + hr + ':' + min + ':' + sec;
	}else{
		countDown = 'Ðã k?t thúc lúc '+dateArray[4]+":"+dateArray[5] + ":"+dateArray[6]+" "+dateArray[3]+"/"+dateArray[2]+"/"+dateArray[1];
	}


	return countDown;
}


/*
 * set height of slide on owlCarousel plugin
 */
function reHieghtSlide(parent, three) {

	var heightest = 0;
	var n = 0;

	console.log(parent);
	$(parent+' .owl-item.active').each( function() {
		var currentHi = $(this).outerHeight();

		if(three) {
			n++;
			if( currentHi > heightest && n <= 3 ) {
				heightest = currentHi;
			}

		} else {
			if(currentHi > heightest ) {
				heightest = currentHi;
			}
		}

	});

	$(parent+ ' .owl-stage-outer').css('height', heightest);
}

/*
 * carousel trigger event
 */

function carouselEventCallback(owl, parent, three){
	owl.on('changed.owl.carousel',function(){
		setTimeout(function(){  reHieghtSlide(parent, three);}, 200);
	});
}

/*
* add mark
 */
function mark(name, url, addlink, cb){

	$.post( addlink,{"user_code":user_code,"type":type,"name":name,"code":code,"url":url},function(data){

		if (typeof cb === "function") {
			cb(data);
		}

	});
}

/*
* append/unAppend alert div to body
 */
var alertHml = '<div id="alertPopup">'
	+'<div class="popup-notice">'
	+'<div class="notice-content success">'
	+'<strong id="nttext">Review thành công!</strong>'
	+'</div>'
	+'</div>'
	+'<div class="popup-notice-error">'
	+'<div class="notice-content error">'
	+'<strong id="nttext-error">B?n chua dang nh?p.</strong>'
	+'</div>'
	+'</div>'
	+'</div>';

function addRemoveAlertFromBody(type, cb){

	if(type == 'add'){
		$('body').append(alertHml);
	} else {
		$( "#alertPopup" ).remove();
	}

	if(cb) { cb();}
}


/*
 * remove mark
 */
function unMark(removelink, user_code, code, type, cb){

	$.post(removelink,{"user_code":user_code,"code":code,"type":type},function(data){

		if (typeof cb === "function") {
			cb(data);
		}
	});
}

/*
* alert if user don't login yet
 */
function showAlertNotLogin(msg, timeOut, cb){
	addRemoveAlertFromBody('add');
	$('#nttext').text(msg);
	$('#nttext-error').text(msg);
	$('.popup-notice-error').fadeIn();

	timeOut = (timeOut) ? timeOut: 2000;

	setTimeout(function(){
		addRemoveAlertFromBody('remove');
		$('.popup-notice-error').fadeOut();
		$('#modal-dkdn').modal('show');
		$('#tab-login').trigger('click');
	}, timeOut);

	if(cb) { cb();}
}

/*
 * alert do action successfully
 */
function showAlertSuccess( msg, timeOut, cb ){
	addRemoveAlertFromBody('add');
	$('#nttext').text(msg);
	$('.popup-notice').fadeIn();

	timeOut = (timeOut) ? timeOut: 2000;
	setTimeout(function(){
		$('.popup-notice').fadeOut();
		addRemoveAlertFromBody('remove');
		if(cb) { cb();}
	}, timeOut);


}

/*
 * alert do action error
 */
function showAlertError(msg, timeOut, cb){

	addRemoveAlertFromBody('add');
	$('#nttext-error').text(msg);
	$('.popup-notice-error').fadeIn();

	timeOut = (timeOut) ? timeOut: 2000;

	setTimeout(function(){
		$('.popup-notice-error').fadeOut();
		addRemoveAlertFromBody('remove');

		if(cb) { cb();}
	}, timeOut);
}

/*
* paginate data
 */
function pagingData( data, currentPage, record){

	if ( !Array.isArray(data) ){
		return [];
	}

	currentPage = currentPage-1;
	var pathData = [];

	for( var i= currentPage*record; i < (currentPage*record)+record; i++ ) {

		if( data[i]) {
			pathData.push(data[i]);
		} else {
			break;
		}

	}
	return pathData;

}

/*
* scroll
 */

function divScrollTo(obj, time, down) {

	time = (time) ? time : 500;
	down = (down) ? down : 0;

	var offsetTop = $(obj).position().top - $(obj).closest('body').position().top;
	$('body').animate({scrollTop: offsetTop-down}, time);
}

function loadMoreTrigger(){
	$('.detail-summary, .div-show-more').showMore({
		speedDown: 300,
		speedUp: 300,
		height: '165px',
		showText: 'Xem thêm',
		hideText: 'Thu g?n '
	});
}

/*
* fix size image gallery
 */

(function ( $ ) {

	$.fn.imageAutoSize = function() {

		this.find('img').each( function() {
			var wi = $(this).width();
			var hi = $(this).height();

			console.log(wi+'---'+hi);
			if(wi >= hi) {
				$(this).addClass('full-width');
			} else {
				$(this).addClass('full-height');

			}

		});
		return this;
	};

}( jQuery ));

/*
*
*/
function checkBackButton(key){

	$('body').on('click', 'a', function () {
		var href = $(this).attr('href');
		var host = document.location.origin
		localStorage.setItem(key, host+href);
	});

	var backLink =  document.referrer ;
	var lastActiveLink =  localStorage.getItem(key);
	//console.log('back link :'+backLink)
	//console.log('save link :'+lastActiveLink)
	localStorage.setItem(key, '');

	if(backLink == lastActiveLink || lastActiveLink == '') {
		return false;
	}

	return true;
}



