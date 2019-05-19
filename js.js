function submit_func() {

  var obj = {
    table: []
  };


  var x = document.getElementById("r1");
  if(x.checked == true) {
    obj.table.push({id: sexe, value:x.value});
  }







  var json = JSON.stringify(obj);
  var fs = require('fs');
  fs.writeFile('myjsonfile.json', json, 'utf8', callback);
}
