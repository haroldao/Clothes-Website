$(".show-filters").on("click", function(){

    if($(".filters-list").is(":visible")){
        $(".filters-list").slideUp()
        $(".show-filters").text("Show Filters")
    } 
    else{
        $(".filters-list").slideDown();
        $(".show-filters").text("Hide Filters")
    }
    //this will block the default behavior of the href jumping to the top of the page
    return false
});

$(".filters-list a").on("click", function(){
    var filter = $(this).attr("data-filter")

    
    // console.log(filter)

    $(".product").hide()
    $(filter).show()

    //Change underline & bold text on click
    $(".filters-list a").removeClass("selected")
    $(this).addClass("selected");

    //This Block the link following the href
    return false
});