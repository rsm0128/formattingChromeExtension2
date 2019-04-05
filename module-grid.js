//////// GRID FUNCTIONS ///////////////////////////////
function rsmApplyGrid(flag) {
  if ( $('.dashboardLayout').length == 0 ) return;

  if (!$('#rsm-grid-style').length) {
    $('body').append("<style id='rsm-grid-style'>.dashboardLayout {background: linear-gradient(-90deg, #ccc 1px, transparent 1px), linear-gradient(#ccc 1px, transparent 1px); background-size: 20px 20px, 20px 20px; } .dashboardWidget {background:#fff;}</style>");
  }
  document.getElementById("rsm-grid-style").disabled = !flag;
}
