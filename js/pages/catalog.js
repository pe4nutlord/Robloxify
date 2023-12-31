"use strict"

pages.catalog = async () => {
    if (settings.get("theme", "oldTopBarText")) {
        $.watch(".heading.ng-scope", () => {
            $("#main-view > .search-bars > .heading.ng-scope > a")[0].text = "Catalog";
        })
    }

    if (settings.get("catalog", "recentCategory")) {
        $.watch(".font-header-2.text-subheader.panel.panel-default.ng-scope", (selector) => {
            $(selector[1]).after(`<li class="font-header-2 text-subheader panel panel-default ng-scope"> <a id="expandable-menu-category-1" class="small text menu-link text-link-secondary panel-heading"> <a class="small text menu-link text-link-secondary panel-heading" href="https://${currentUrlPaths[2]}/catalog?Category=1&CreatorName=Roblox&salesTypeFilter=1&SortType=3&IncludeNotForSale" onclick="setTimeout(() => {window.location.reload()})">Recent Items</a> <span class="toggle-submenu ng-hide icon-minus"></span> </a> </li>`);
        })
    }
}