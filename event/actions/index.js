export const TOGGLE_ACTIVE = "TOGGLE_ACTIVE";

export const toggleActive = (active, tabId, windowId) => ({
    type: TOGGLE_ACTIVE,
    active,
    tabId,
    windowId
});

export const CURRENT_TAB = "CURRENT_TAB";

export const currentTab = (tabId, windowId) => ({
    type: CURRENT_TAB,
    tabId,
    windowId
})
