function updateOutput(){
		
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + 
    "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
    
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
}

$(".toggleButton").hover(function() {

    $(this).addClass("hilightedButton");

}, function() {
    
    $(this).removeClass("hilightedButton");

});

$(".toggleButton").click(function() {

    $(this).toggleClass("active");
    
    $(this).removeClass("hilightedButton");
    
    var panelId = $(this).attr("id") + "Panel";
    
    $("#" + panelId).toggleClass("hidden");
    
    var numberOfActivePanels = 4 - $(".hidden").length;
    
    $(".panel").width(($(window).width() / numberOfActivePanels) - 10);

});

$(".panel").height($(window).height() - $("#headOfPageContainer").height()- 23);

$(".panel").width(($(window).width() / 2) - 10);

updateOutput();

$("textarea").on('change keyup paste', function() {

    updateOutput();
});	
