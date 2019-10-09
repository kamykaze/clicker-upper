$(function() {

    chrome.storage.sync.get([
        'clickup_theme',
        'dash4_colored_faves',
        'clean_breadcrumbs',
        'visible_status',
        'wide_box_mode'
    ]
    , function(data) {
        data.click_theme? $('body').addClass('click-theme'):null;
        data.dash4_colored_faves? $('body').addClass('dash4-colored-faves'):null;
        data.clean_breadcrumbs? $('body').addClass('clean-breadcrumbs'):null;
        data.visible_status? $('body').addClass('visible-status'):null;
        data.wide_box_mode? $('body').addClass('wide-box-mode'):null;
    });

    const log_styles = [
        'color: green',
        'font-weight: bold',
    ].join(';');
    console.log('%c Clicker Upper initialized.',log_styles);
});
