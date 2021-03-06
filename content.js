$(function() {

    chrome.storage.sync.get([
        'clickup_theme',
        'dash4_colored_faves',
        'clean_breadcrumbs',
        'visible_status',
        'wide_box_mode',
        'compact_status_group',
        'same_line_tags',
        'better_tasktray_close',
        'modern_sticky_spaces',
        'search_full_path',
    ]
    , function(data) {
        data.clickup_theme? $('body').addClass('clickup-theme'):null;
        data.dash4_colored_faves? $('body').addClass('dash4-colored-faves'):null;
        data.clean_breadcrumbs? $('body').addClass('clean-breadcrumbs'):null;
        data.visible_status? $('body').addClass('visible-status'):null;
        data.wide_box_mode? $('body').addClass('wide-box-mode'):null;
        data.compact_status_group? $('body').addClass('compact-status-group'):null;
        data.same_line_tags? $('body').addClass('same-line-tags'):null;
        data.better_tasktray_close? $('body').addClass('better-tasktray-close'):null;
        data.modern_sticky_spaces? $('body').addClass('modern-sticky-spaces'):null;
        data.search_full_path? $('body').addClass('search-full-path'):null;
    });

    const log_styles = [
        'color: green',
        'font-weight: bold',
    ].join(';');
    console.log('%c Clicker Upper initialized.',log_styles);
});
