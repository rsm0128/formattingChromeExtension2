//////// PALETTE FUNCTIONS ///////////////////////////////
function rsmApplyPalette(configData) {
  $('#rsm-palette-style').remove();
  var cssStr = ""  
  + 'button.actionButton{background:' + configData.blue_btn_color + ';}'  
    + 'a{color:' + configData.label_txt_color + ';}'
    + '.original #banner a{color:' + configData.label_txt_color + ';} .claro .dijitSelectLabel{color:' + configData.label_txt_color + ';} .claro .dijitTextBox .dijitInputInner{color:' + configData.label_txt_color + ';}'
    + 'nav.ap-gn{background-color:' + configData.nav_back_color + ';}' 
    //Slider Background Color
    + '.original #slideout{background:' + configData.slider_back_color + ';}'
    //Slider Text Color
    + '.aui .ap-expanding-panel .ap-header .ap-header-title{color:' + configData.slider_txt_color + ';} .aui .table-of-contents .panels .ap-expanding-panel .ap-tree .ap-tree-item a{color:' + configData.slider_txt_color + ';} .original .dojoxExpandoTitle{color:' + configData.slider_txt_color + ';}'
    + '.ap-gn-icon-btn--circle .ap-gn-icon-btn__icon {background-color:' + configData.nav_button_color + ';fill:' + configData.nav_btntxt_color + ';}'
    + '.claro .dijitTreeRowSelected{background:' + configData.settings_selected_color + ';} .claro .dijitTreeRowHover{background:' + configData.nav_button_color + ';} .claro .dijitTreeRowSelected.dijitTreeRowHover{background:' + configData.nav_button_color + ';}'
    + '.original .masterSelector .dojoDndItemSelected{background:' + configData.settings_selected_color + ';} .original .masterSelector .dojoDndItemOver{background:' + configData.label_txt_color + ';} .original .masterSelector .dojoDndItemSelected .dojoDndItemOver{background:' + configData.label_txt_color + ';} .original .history .previewTable tr.selected td{background:' + configData.label_txt_color + ';}'
    + '.original .modelContentsHeadline .modelSize{color:' + configData.label_txt_color + ';}'
    + '.original .primary-button .dijitButtonNode{background:' + configData.blue_btn_color + '; background-color:' + configData.blue_btn_color + ';}'
    + '.claro.original .dijitToolbar .dijitDropDownButtonHover .dijitButtonNode{background:' + configData.blue_btn_hover + '; background-color:' + configData.blue_btn_hover + ';}'
    + '.claro.original .dijitToolbar .dijitDropDownButtonHoverFocused .dijitButtonNode{background:' + configData.blue_btn_hover + '; background-color:' + configData.blue_btn_hover + ';}'
    + '.claro .dojoDndItemAnchor{background:' + configData.blue_btn_hover + '; background-color:' + configData.blue_btn_hover + ';}'
    + '.claro.original .dijitToolbar .dijitDropDownButtonOpenedHover .dijitButtonNode{background:' + configData.blue_btn_hover + '; background-color:' + configData.blue_btn_hover + ';}'
    + '.claro.original .dijitToolbar .dijitButtonHover .dijitButtonNode{background:' + configData.blue_btn_hover + '; background-color:' + configData.blue_btn_hover + ';}'
    + '.original .dashboardWidget-BUTTON .primary-button .dijitButtonNode{background:' + configData.blue_btn_color + '; background-color:' + configData.blue_btn_color + ';}'
    + '.original .formulaBar .formulaBarRowLabelCell .dijitButtonText, .original .formulaEditor .formulaEditorRowLabelCell .dijitButtonText {color: ' + configData.label_txt_color + ';}'
    + '.classic .editable {background-color:' + configData.editable_cells_color + ';}'
    + '.classic .gridrowsummary1, .classic .gridrowsummary1 .noneditable{font-weight:bold; background:' + configData.sum1_cells_color + ';}'
    + '.classic .gridrowsummary2, .classic .gridrowsummary2 .noneditable{font-weight:bold; background:' + configData.sum2_cells_color + ';}'
    + '.classic .gridrowsummary3, .classic .gridrowsummary3 .noneditable{font-weight:bold; background:' + configData.sum3_cells_color + ';}'
    + 'body{font-size:' + configData.tbl_font_size + 'px;font-family:' + configData.tbl_font_family + ';}.classic td, .classic th{font-size:' + configData.tbl_font_size + 'px;font-family:' + configData.tbl_font_family + ';}'
    + '.aui a{font-size:' + configData.tbl_font_size + 'px;font-family:' + configData.tbl_font_family + ';}'
    + '.classic .gridcolumnheader{color:' + configData.th_txt_color + ';background:' + configData.th_back_color + '} .anaplanTabsView .classic .gridcolumnheader.gridlabelhighlight{color:' + configData.th_txt_color + ';background:' + configData.th_back_color + '} .anaplanTabsSettings .classic .gridcolumnheader.gridlabelhighlight{color:' + configData.th_txt_color + ';background:' + configData.th_back_color + '} .dijitLayoutContainerFocused .classic .gridcolumnheader.gridlabelhighlight{color:' + configData.th_txt_color + ';background:' + configData.th_back_color + '}'
    + '.classic .gridcrosshairs{background: transparent}'
    + '.original .dashboardWidget-STATIC_TEXT .heading2{color:' + configData.h2_txt_color + ';background-color:' + configData.h2_bg_color + '; font-weight: bold; text-align:'+ configData.h2_txt_align +';}'
    + '.original .dashboardWidget-STATIC_TEXT .instruction{background-color:' + configData.info_bg_color + ';}'
    + '.original .staticTextMenu .instruction .dijitMenuItemLabel{background-color:' + configData.info_bg_color + ';}'
  ;

  $('body').append("<style id='rsm-palette-style'>" + cssStr + "</style>");
  document.getElementById("rsm-palette-style").disabled = !configData.rsmPalette;
}
