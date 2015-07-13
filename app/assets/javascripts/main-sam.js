$(document).ready(
    function() {
        $(document).foundation();

        var draggedElement;

        $(document).on("dragstart", ".recipe", function(e) {
            if ($(this).parents('#week').length > 0) {
                e.originalEvent.dataTransfer.setData('remove', true);
            }
            draggedElement = this;
        });

        $(".weekdays").on("dragenter", function(e) {
            $(this).addClass("dragenter");
            e.preventDefault();
        });

        $(".weekdays").on("dragover", function(e) {
            e.preventDefault();
        });


        $(".weekdays").on("dragleave", function() {
            $(this).removeClass("dragenter");
        });
        $(".weekdays").on("drop", function(e) {
            var remove = e.originalEvent.dataTransfer.getData('remove');
            console.log(remove);
            console.log(draggedElement);
            $(this).removeClass("dragenter");
            $(this).append(draggedElement.outerHTML);
            if (remove)
                $(draggedElement).remove();
                $(this).removeClass("dragenter");

            e.preventDefault();

        });
    });
