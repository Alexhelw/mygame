$.fn.ImgZoomIn = function() {
    var window_h = $(window).height();
    var scroll_h = $(window).scrollTop();

    bgstr = '<div id="ImgZoomInBG" style="position: absolute;filter:Alpha(Opacity=70); opacity:0.7;z-index: 10000;background-color: #000;display: none;"></div>';
    imgstr = '<img id="ImgZoomInImage" src="' + $(this).attr('src') + '" style="cursor:pointer; display:none; position:absolute; z-index:10001;" />';
    if ($('#ImgZoomInBG').length < 1) {
        $('body').append(bgstr);
    }
    if ($('#ImgZoomInImage').length < 1) {
        $('body').append(imgstr);
    } else {
        $('#ImgZoomInImage').attr('src', $(this).attr('src'));
    }

    $('#ImgZoomInBG').css('top', scroll_h + 'px');
    $('#ImgZoomInBG').css('width', '100%');
    $('#ImgZoomInBG').css('height', window_h + 'px');

    $('#ImgZoomInImage').css('width', '100%');
    $('#ImgZoomInImage').css('height', (window_h / 2) + 'px');
    $('#ImgZoomInImage').css('top', (scroll_h + window_h / 4) + 'px');

    $('#ImgZoomInBG').show();
    $('#ImgZoomInImage').show();
};
// PC端
$(document).ready(function() {
    $(document).on('click', '.item_img', function() {
        $(this).ImgZoomIn();
        $(document.body).css({
            "overflow-x": "hidden",
            "overflow-y": "hidden"
        });
    });

    $(document).on('click', '#ImgZoomInImage', function() {
        $('#ImgZoomInImage').hide();
        $('#ImgZoomInBG').hide();
        $(document.body).css({
            "overflow-x": "auto",
            "overflow-y": "auto"
        });
    });
});
// 手机端
$(document).ready(function() {
    $(document).on('touchend', '.item_img', function(t) {
        $(this).ImgZoomIn();
        document.ontouchstart = function() {
            return false;
        }
        t.preventDefault();
    });

    $(document).on('touchend', '#ImgZoomInImage', function(t) {
        $('#ImgZoomInImage').hide();
        $('#ImgZoomInBG').hide();
        document.ontouchstart = function() {
            return true;
        }
        t.preventDefault();
    });
});