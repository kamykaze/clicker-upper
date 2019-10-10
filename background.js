chrome.runtime.onInstalled.addListener(function() {
	var default_options = {
        clickup_theme: true,
        dash4_colored_faves: true,
        clean_breadcrumbs: true,
        visible_status: true,
        wide_box_mode: true
	}
    chrome.storage.sync.set(default_options, function() {
      console.log("ClickerUpper Installed.");
    });
  });

