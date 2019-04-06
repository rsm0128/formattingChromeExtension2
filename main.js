var gPrevValue = '';

var gConfigData = {};

$(document).ready(function() {
  $('body').click(function(e){
    setTimeout(function(){

      rsmApplyTooltip(gConfigData.rsmTooltip);
      rsmApplyGrid(gConfigData.rsmGrid);
      rsmApplyDisableLink(gConfigData.rsmLink);

      if ( $(e.target).closest('table.formulaEditorExpressionTable').length ) return;
      if ( $('.dijitTabContainerTopChildWrapper.dijitVisible .formulaEditorText').length == 0 ) return;
      
      rsmReInitHighLighter();
      let curValue = $('.dijitTabContainerTopChildWrapper.dijitVisible .formulaEditorText').val();

      if ( $('.dijitTabContainerTopChildWrapper.dijitVisible .formated_text').length && curValue == gPrevValue ) return; // if not updated

      var el = $(".dijitTabContainerTopChildWrapper.dijitVisible .formated_text").get(0);
      let selection = rsmGetSelectionCharacterOffsetWithin(el);
      rsmApplyHighlighter(gConfigData.rsmColor);

      if (1) {
        rsmSetSelectionRange(el, selection.start + curValue.length - gPrevValue.length, selection.start + curValue.length - gPrevValue.length);
      }

      rsmApplyIndent(gConfigData.rsmIndent);
      $('.dijitTabContainerTopChildWrapper.dijitVisible .formulaEditorText').attr('prev_value', curValue);
      gPrevValue = curValue;

    }, 100);
  });

  $(document).keydown(function(e) {
    var lrud_keys = [37,38,39,40];
    if (lrud_keys.indexOf(event.which) >= 0 && $('.dijitTabContainerTopChildWrapper.dijitVisible .formulaEditorText').length) {
      if($(e.target).closest('table.formulaEditorExpressionTable').length) return;
      setTimeout(function(){
        rsmUpdateFormatting($('.dijitTabContainerTopChildWrapper.dijitVisible .formulaEditorText').val());
        $('.dijitTabContainerTopChildWrapper.dijitVisible .formulaEditorText').attr('prev_value', $('.dijitTabContainerTopChildWrapper.dijitVisible .formulaEditorText').val());
      }, 100);
    }
  });

  $('body').click();
  rsmApplyPalette(gConfigData);
});

//////// EXTENSION FUNCTIONS //////////////////////////
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {

    if ( request.action == 'apply-indent' ) {
      gConfigData.rsmIndent = true;
    } else if ( request.action == 'disable-indent' ) {
      gConfigData.rsmIndent = false;
    } else if ( request.action == 'apply-color' ) {
      gConfigData.rsmColor = true;
    } else if ( request.action == 'disable-color' ) {
      gConfigData.rsmColor = false;
    } else if ( request.action == 'apply-tooltip' ) {
      gConfigData.rsmTooltip = true;
    } else if ( request.action == 'disable-tooltip' ) {
      gConfigData.rsmTooltip = false;
    } else if ( request.action == 'apply-grid' ) {
      gConfigData.rsmGrid = true;
    } else if ( request.action == 'disable-grid' ) {
      gConfigData.rsmGrid = false;
    } else if ( request.action == 'apply-link' ) {
      gConfigData.rsmLink = false;
    } else if ( request.action == 'disable-link' ) {
      gConfigData.rsmLink = true;
    } else if ( request.action == 'apply-palette' ) {
      gConfigData.rsmPalette = true;
      rsmApplyPalette(request.data);
    } else if ( request.action == 'disable-palette' ) {
      gConfigData.rsmPalette = false;
      rsmApplyPalette(request.data);
    } else if ( request.action == 'style_change' ) {
      rsmApplyPalette(request.data);
    }

    rsmApplyTooltip(gConfigData.rsmTooltip);
    rsmApplyGrid(gConfigData.rsmGrid);
    rsmApplyDisableLink(gConfigData.rsmLink);

    if ( $('.dijitTabContainerTopChildWrapper.dijitVisible .formulaEditorText').length == 0 ) return;
    rsmReInitHighLighter();
    rsmApplyHighlighter(gConfigData.rsmColor);
    rsmApplyIndent(gConfigData.rsmIndent);
  } 
);

function rsmReadSettings() {
  chrome.storage.local.get(gDefaultSetting, function(items) {
    gConfigData = items;
  });
}

rsmReadSettings();