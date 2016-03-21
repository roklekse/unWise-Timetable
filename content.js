if (typeof(once) !== 'undefined'){
  $("#program").val("1");
  $("#year").append("<option value='2'>2</option>");
  $("#branch").append("<option value='3'>Splošna</option>");
  $("#group").append("<option value='84' selected>M2-20</option>");

  $("input[value='Prikaži tedenski urnik']").click();
  once=true;
}
