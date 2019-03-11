function allowDrop(ev){
   ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData("text/plain",ev.target.id);
}

function drop(ev){
    ev.preventDefault();
    var id = ev.dataTransfer.getData("text"); //获取被放置的元素id
    var folder = document.getElementById(id);
    document.getElementById("container").removeChild(folder);
}