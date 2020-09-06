$(document).ready(function(){
    $('.tab,.event-content').hide();
    $('.tab:first,.event-content:first').show();
    $('.event-box').click(function(){
        $('.event-content').hide();
        var eventContent = $(this).attr("href");
        $(eventContent).show();
        $('.join-box').addClass('jumpani');
        var set = setTimeout(function(){
            $('.join-box').removeClass('jumpani');
        },1000)
		return false
    });
	$('.add').click(function(){
		$('#addcart').addClass('addani');
		var set = setTimeout(function(){
			$('#addcart').removeClass('addani');
		},1800);
	});
    $('.block img').click(function(){
        $('.tab').hide();
        var activeTab = $(this).attr('href');
        $(activeTab).show();
    });
    $('.view-switch').change( e =>{
        $('.tab').hide();
        $('#tab' + e.target.value).show();
    });
    $('.closeform').click(function(){
        $('#productlist,.allform').fadeOut();
    });
    $('a').click(function(){
        $('.allform').fadeOut();
        var active = $(this).attr("href");
        $(active).fadeIn();
    });
	$('.checkout,.social,.inf-icon').click(function(){
		alert("目前尚無網路 請稍後再試");
	});
	$('.send').click(function(){
		alert("資料已送出")
	});
	$('.contact-btn2').click(function(){
		alert('請先登入會員');
		$('#login').fadeIn();
	});
	$('.read').click(function(){
		alert('成功訂閱');
	});
	$('.heart').click(function(){
		$(this).toggleClass("h-check");
		if($(this).hasClass("h-check")){
			$("body").append("<div class='alert01'>加入最愛</div>")
		}
		else{
			$("body").append("<div class='alert01'>取消最愛</div>")
		}
	});
});

var blockContainer = document.querySelector(".block-container");
var blocks = Array.from(document.querySelectorAll(".block"));
var isMouseOn = false;
var leftPositions = blocks.map((block, i) => i * 250);

blockContainer.onmouseover = e => isMouseOn = true;
blockContainer.onmouseout = e => isMouseOn = false;

setInterval(function() {
    leftPositions.forEach((leftPosition,i) => blocks[i].style.left = leftPosition + "px");

    if(!isMouseOn) {
        leftPositions = leftPositions.map(leftPosition => {
            leftPosition--;

            if(leftPosition == -250) {
                leftPosition = (blocks.length - 1) * 250;
            }
            return leftPosition;
        });
    }
},10)