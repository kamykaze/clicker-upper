let options = [
    'clickup_theme',
    'dash4_colored_faves',
    'clean_breadcrumbs',
    'visible_status',
    'wide_box_mode'
]

chrome.storage.sync.get(options, function(data) {
    data.click_theme ? document.getElementById('id_option_click_theme').checked=true:null;
    data.dash4_colored_faves ? document.getElementById('id_option_dash4_colored_faves').checked=true:null;
    data.clean_breadcrumbs ? document.getElementById('id_option_clean_breadcrumbs').checked=true:null;
    data.visible_status ? document.getElementById('id_option_visible_status').checked=true:null;
    data.wide_box_mode ? document.getElementById('id_option_wide_box_mode').checked=true:null;

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
