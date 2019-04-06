function rsm_save_options() {
  var color = document.getElementById('apply-color').checked;
  var indent = document.getElementById('apply-indent').checked;
  var tooltip = document.getElementById('apply-tooltip').checked;
  var grid = document.getElementById('apply-grid').checked;
  var link = document.getElementById('disable-link').checked;
  var palette = document.getElementById('apply-palette').checked;

  var nav_back_color = document.getElementById('nav-back-color').value;
  var nav_button_color = document.getElementById('nav-button-color').value;
  var nav_btntxt_color = document.getElementById('nav-btntxt-color').value;
  var slider_back_color = document.getElementById('slider-back-color').value;
  var slider_txt_color = document.getElementById('slider-txt-color').value;
  var settings_selected_color = document.getElementById('settings-selected-color').value;
  var label_txt_color = document.getElementById('label-txt-color').value;
  var h2_txt_color = document.getElementById('h2-txt-color').value;
  var h2_bg_color = document.getElementById('h2-bg-color').value;
  var h2_txt_align = document.getElementById('h2-txt-align').value;
  var info_bg_color = document.getElementById('info-bg-color').value;
  var editable_cells_color = document.getElementById('editable-cells-color').value;
  var sum1_cells_color = document.getElementById('sum1-cells-color').value;
  var sum2_cells_color = document.getElementById('sum2-cells-color').value;
  var sum3_cells_color = document.getElementById('sum3-cells-color').value;
  var tbl_font_family = document.getElementById('tbl-font-family').value;
  var tbl_font_size = document.getElementById('tbl-font-size').value;
  var th_back_color = document.getElementById('th-back-color').value;
  var th_txt_color = document.getElementById('th-txt-color').value;

  var configData = {
    rsmColor: color,
    rsmIndent: indent,
    rsmTooltip: tooltip,
    rsmGrid: grid,
    rsmLink: link,
    rsmPalette: palette,
    nav_back_color : nav_back_color,
    nav_button_color : nav_button_color,
    nav_btntxt_color : nav_btntxt_color,
    slider_back_color : slider_back_color,
    slider_txt_color : slider_txt_color,
    settings_selected_color : settings_selected_color,
    label_txt_color : label_txt_color,
    h2_txt_color : h2_txt_color,
    h2_txt_align : h2_txt_align,
    h2_bg_color : h2_bg_color,
    info_bg_color : info_bg_color,
    editable_cells_color : editable_cells_color,
    sum1_cells_color : sum1_cells_color,
    sum2_cells_color : sum2_cells_color,
    sum3_cells_color : sum3_cells_color,
    tbl_font_family : tbl_font_family,
    tbl_font_size : tbl_font_size,
    th_back_color : th_back_color,
    th_txt_color : th_txt_color
  };

  chrome.storage.local.set(configData, function() {
    //
  });

  return configData;
}

function rsm_restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.local.get(gDefaultSetting, function(items) {
    document.getElementById('apply-color').checked = items.rsmColor;
    document.getElementById('apply-indent').checked = items.rsmIndent;
    document.getElementById('apply-tooltip').checked = items.rsmTooltip;
    document.getElementById('apply-grid').checked = items.rsmGrid;
    document.getElementById('disable-link').checked = items.rsmLink;
    document.getElementById('apply-palette').checked = items.rsmPalette;
    
    document.getElementById('nav-back-color').value = items.nav_back_color;
    document.getElementById('nav-button-color').value = items.nav_button_color;
    document.getElementById('nav-btntxt-color').value = items.nav_btntxt_color;
    document.getElementById('slider-back-color').value = items.slider_back_color;
    document.getElementById('slider-txt-color').value = items.slider_txt_color;
    document.getElementById('settings-selected-color').value = items.settings_selected_color;
    document.getElementById('label-txt-color').value = items.label_txt_color;
    document.getElementById('h2-txt-color').value = items.h2_txt_color;
    document.getElementById('h2-bg-color').value = items.h2_bg_color;
    document.getElementById('h2-txt-align').value = items.h2_txt_align;
    document.getElementById('info-bg-color').value = items.info_bg_color;
    document.getElementById('editable-cells-color').value = items.editable_cells_color;
    document.getElementById('sum1-cells-color').value = items.sum1_cells_color;
    document.getElementById('sum2-cells-color').value = items.sum2_cells_color;
    document.getElementById('sum3-cells-color').value = items.sum3_cells_color;
    document.getElementById('tbl-font-family').value = items.tbl_font_family;
    document.getElementById('tbl-font-size').value = items.tbl_font_size;
    document.getElementById('th-back-color').value = items.th_back_color;
    document.getElementById('th-txt-color').value = items.th_txt_color;
  });
}

function rsm_handle_action(action) {
  var configData = rsm_save_options();

  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: action,
        data: configData
      });
  });
}

function rsm_color_change() {
  var elem = document.getElementById("apply-color");
  var action = elem.checked ? 'apply-color':'disable-color';

  rsm_handle_action(action);
}

function rsm_indent_change() {
  var elem = document.getElementById("apply-indent");
  var action = elem.checked ? 'apply-indent':'disable-indent';

  rsm_handle_action(action);
}

function rsm_tooltip_change() {
  var elem = document.getElementById("apply-tooltip");
  var action = elem.checked ? 'apply-tooltip':'disable-tooltip';

  rsm_handle_action(action);
}

function rsm_grid_change() {
  var elem = document.getElementById("apply-grid");
  var action = elem.checked ? 'apply-grid':'disable-grid';

  rsm_handle_action(action);
}

function rsm_link_change() {
  var elem = document.getElementById("disable-link");
  var action = elem.checked ? 'disable-link':'apply-link';

  rsm_handle_action(action);
}

function rsm_palette_change() {
  var elem = document.getElementById("apply-palette");
  var action = elem.checked ? 'apply-palette':'disable-palette';

  rsm_handle_action(action);
}

function rsm_style_change() {
  rsm_handle_action('style_change');
}

function rsm_toggle_color_panel() {
  var x = document.getElementById("style-panel");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', function(){
  rsm_restore_options();
  document.getElementById('apply-color').addEventListener('change', rsm_color_change);
  document.getElementById('apply-indent').addEventListener('change', rsm_indent_change);
  document.getElementById('apply-tooltip').addEventListener('change', rsm_tooltip_change);
  document.getElementById('apply-grid').addEventListener('change', rsm_grid_change);
  document.getElementById('disable-link').addEventListener('change', rsm_link_change);
  document.getElementById('apply-palette').addEventListener('change', rsm_palette_change);
  document.getElementById('btn-collapsible').addEventListener('click', rsm_toggle_color_panel);
  document.getElementById('nav-back-color').addEventListener('change', rsm_style_change);
  document.getElementById('nav-button-color').addEventListener('change', rsm_style_change);
  document.getElementById('nav-btntxt-color').addEventListener('change', rsm_style_change);
  document.getElementById('slider-back-color').addEventListener('change', rsm_style_change);
  document.getElementById('slider-txt-color').addEventListener('change', rsm_style_change);
  document.getElementById('settings-selected-color').addEventListener('change', rsm_style_change);
  document.getElementById('label-txt-color').addEventListener('change', rsm_style_change);
  document.getElementById('h2-txt-color').addEventListener('change', rsm_style_change);
  document.getElementById('h2-bg-color').addEventListener('change', rsm_style_change);
  document.getElementById('h2-txt-align').addEventListener('change', rsm_style_change);
  document.getElementById('info-bg-color').addEventListener('change', rsm_style_change);
  document.getElementById('editable-cells-color').addEventListener('change', rsm_style_change);
  document.getElementById('sum1-cells-color').addEventListener('change', rsm_style_change);
  document.getElementById('sum2-cells-color').addEventListener('change', rsm_style_change);
  document.getElementById('sum3-cells-color').addEventListener('change', rsm_style_change);
  document.getElementById('tbl-font-family').addEventListener('change', rsm_style_change);
  document.getElementById('tbl-font-size').addEventListener('change', rsm_style_change);
  document.getElementById('th-back-color').addEventListener('change', rsm_style_change);
  document.getElementById('th-txt-color').addEventListener('change', rsm_style_change);
});
