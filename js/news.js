$(function(){

  $(document).ready(function() {

    var grid = new freewall("#grid");

    grid.reset({
      selector: '.item',
      animate: false,
      cellW: 350,
      cellH: 450,
      onResize: function() {
        grid.refresh();
        grid.fitWidth();
      },
      gutterY: 20,
      gutterX: 20,
    });

    grid.fitWidth();

    //grid.refresh();
    n2o();


    function n2o(){
      $.getJSON('https://www.poisonmushroom.cc/news.json', function(data) {

        var items = data.news;

        $('#grid').html('');
        grid.refresh();
        //grid.fitWidth();

        for(var i=0;i<items.length;i++){
          var str = '';
          str +='<div class="item" data-nested=".level-1" data-gutterX=0 data-gutterY=0 data-cellW=0.5 data-cellH=0.1>';
          str +='<div class="level-1 size8"><div class="new"><img src="'+items[i].img+'"/></div></div>';
          str +='<div class="level-1 size2">';
          str +='<p>'+items[i].des_en+'<br/>';
          str +=items[i].des_cn+'</p>';
          str +='<p class="timestamp">'+items[i].date+'</p>';
          str +='</div></div>';
          grid.appendBlock(str);
        }
      });
    }



  });

});
