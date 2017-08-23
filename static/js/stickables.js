$(document).ready(function(){

});
var fs_client = filestack.init('AT80wpG08QQyB8vaz8FPez');

function showPicker()
{
  fs_client.pick({
    accept: 'image/*',
    maxFiles: 12,
    imageMax: [1024, 1024],
    fromSources: ['local_file_system','instagram','facebook']
    }).then(function(result) {
      console.log(result);

      var files_uploaded = result.filesUploaded;

      var tile_index = 0;
      for (file of files_uploaded) {
        var tile = $('.upload-tile:eq(' + tile_index + ')');
        tile.html('');
        tile.html('<img class="tile-image" src="' + file.url + '"/>');
        tile_index++;
      }

      $(".tilesheet").show();
    });
}