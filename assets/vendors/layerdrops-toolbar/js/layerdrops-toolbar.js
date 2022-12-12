(function ($) {
	"use strict";

	// boxed layout switcher
	if ($(".boxed-switcher").length) {
		$(".boxed-switcher").on("click", function () {
			$("body").toggleClass("boxed-wrapper");
		});
	}

	// color switcher

	if ($("#styleOptions").length) {
		$("#styleOptions").styleSwitcher({
			hasPreview: false,
			fullPath: "assets/css/colors/",
			cookie: {
				expires: 999,
				isManagingLoad: true
			}
		});
	}

	if ($("#colorMode").length) {
		$("#colorMode").styleSwitcher({
			hasPreview: false,
			fullPath: "assets/css/modes/",
			defaultThemeId: 'jssMode',
			cookie: {
				expires: 999,
				isManagingLoad: true
			}
		});
	}

	if ($("#langMode").length) {
		$("#langMode").styleSwitcher({
			hasPreview: false,
			fullPath: "assets/css/",
			defaultThemeId: 'langLtr',
			cookie: {
				expires: 999,
				isManagingLoad: true
			}
		});
	}

	if ($(".style-switcher").length) {
		$("#switcher-toggler").on("click", function (e) {
			e.preventDefault();
			$(".style-switcher").toggleClass("active");
		});
	}

})(jQuery);