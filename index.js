// let yogaPose = $(".pose-description").text();
// alert(yogaPose);

let yogaPose = "";

$(".mountain-img").on('click', function(){
    yogaPose = $("#Mountain").attr("id");
    localStorage.setItem('SelectedPose', yogaPose);
});

$(".tree-img").on('click', function(){
    yogaPose = $("#Tree").attr("id");
    localStorage.setItem('SelectedPose', yogaPose);
});

$(".goddess-img").on('click', function(){
    yogaPose = $("#Goddess").attr("id");
    localStorage.setItem('SelectedPose', yogaPose);
});

$(".warrior2-img").on('click', function(){
    yogaPose = $("#Warrior-2").attr("id");
    localStorage.setItem('SelectedPose', yogaPose);
});

$(".triangle-img").on('click', function(){
    yogaPose = $("#Triangle").attr("id");
    localStorage.setItem('SelectedPose', yogaPose);
});
$(".reverse-warrior-img").on('click', function(){
    yogaPose = $("#Reverse-Warrior").attr("id");
    localStorage.setItem('SelectedPose', yogaPose);
});
$(".seated-twist-img").on('click', function(){
    yogaPose = $("#Seated-Twist").attr("id");
    localStorage.setItem('SelectedPose', yogaPose);
});
$(".side-plank-img").on('click', function(){
    yogaPose = $("#Side-Plank").attr("id");
    localStorage.setItem('SelectedPose', yogaPose);
});
$(".standing-core-img ").on('click', function(){
    yogaPose = $("#Standing-Core").attr("id");
    localStorage.setItem('SelectedPose', yogaPose);
});
$(".low-lunge-revolved-img").on('click', function(){
    yogaPose = $("#Low-Lunge-Revolved").attr("id");
    localStorage.setItem('SelectedPose', yogaPose);
});