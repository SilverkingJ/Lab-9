var start = new Date();
stopTime()
{
  var setDate = new Date();
  var absolute = (setDate.getTime() - start.getTime());
  document.write("the user has been on this website for" + absolute + "seconds");
}
