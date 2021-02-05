(function(){
var existing_container = document.getElementById('linked_images');
if ( existing_container ) {
  if ( existing_container.style.display !== 'none' ) {
    existing_container.style.display = 'none';
  } else {
    existing_container.style.display = 'block';
  }
} else {
  var links = document.getElementsByTagName('a');
  var container = document.createElement('div');
  container.id = 'linked_images';
  container.className = 'link_to_mage';
  container.width = '500px';
  let count=0;
  for ( var link_i = 0; link_i < links.length; link_i++ ) {
    (function (){
      var link = links[ link_i ];
      var href = link.href;
      if (href === 'https://www.getyourrefund.org/en/hub/clients') return;
      var link_txt = link.innerText;
      var sub_container = document.createElement('div');
      sub_container.style.display = 'inline-block';
      sub_container.style.width ='40%';
      sub_container.style.padding = '3px';

      var img = document.createElement('img');
      img.style.width ='100%';
      img.src = link.href;
      sub_container.appendChild( img );

      var label = document.createElement('a');
      label.innerHTML = link.href;
      label.href = link.href;
      sub_container.appendChild( label );
      count+=1;

      img.onerror=function(){
       count-=1;
       sub_container.parentNode.removeChild(sub_container);
      };

      container.appendChild( sub_container );
    })();
  }
  setTimeout(()=>{
    var insert_in = document.getElementsByClassName('client-navigation ')[0];
    insert_in.appendChild( container );
    if (!container.firstChild) {
      container.innerHTML = '<h3 style="color:red;">Sorry, no JPG images to show</h3>';
    }
  }, 1500)
}
}());
