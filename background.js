chrome.runtime.onInstalled.addListener(function() {
	var default_options = {
        clickup_theme: false,
        dash4_colored_faves: false,
        clean_breadcrumbs: true,
        visible_status: true,
        wide_box_mode: false
	}
    chrome.storage.sync.set(default_options, function() {
      console.log("ClickerUpper Installed.");
    });
  });

