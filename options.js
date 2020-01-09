let options = [
    'clickup_theme',
    'dash4_colored_faves',
    'clean_breadcrumbs',
    'visible_status',
    'wide_box_mode',
    'compact_status_group',
    'same_line_tags',
    'better_tasktray_close'
]

chrome.storage.sync.get(options, function(data) {
    data.clickup_theme ? document.getElementById('id_option_clickup_theme').checked=true:null;
    data.dash4_colored_faves ? document.getElementById('id_option_dash4_colored_faves').checked=true:null;
    data.clean_breadcrumbs ? document.getElementById('id_option_clean_breadcrumbs').checked=true:null;
    data.visible_status ? document.getElementById('id_option_visible_status').checked=true:null;
    data.wide_box_mode ? document.getElementById('id_option_wide_box_mode').checked=true:null;
    data.compact_status_group ? document.getElementById('id_option_compact_status_group').checked=true:null;
    data.same_line_tags ? document.getElementById('id_option_same_line_tags').checked=true:null;
    data.better_tasktray_close? document.getElementById('id_option_better_tasktray_close').checked=true:null;

    for (var i in options) {
        var opt = options[i];
        var opt_input = document.getElementById('id_option_'+opt);
        if (data[opt]) {
            opt_input.checked=true;
        }
        console.log('processing opt: '+opt, opt_input.id);
        opt_input.addEventListener('click', function(e) {
            var input = e.target;
            var option_obj = {}
            option_obj[input.name] = input.checked
            chrome.storage.sync.set(option_obj, function() {
                console.log('ClickerUpper: feature '+input.name+' is now '+(input.checked?'enabled':'disabled'), e);
            });
        })
    }
});
