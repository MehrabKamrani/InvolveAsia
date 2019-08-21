var newRuleParameter =
'<div class="input-group col-10 mb-1 animated fadeIn faster">'+
    '<input required type="text" class="form-control form-control-sm pr-0" placeholder="insert parameter">'+
    '<div class="input-group-append">'+
        '<button class="btn btn-sm rule-addon-btn remove" type="button"><i class="fa fa-remove"></button>'+
    '</div>'+
'</div>';

var newRuleField =
'<div class="parameter-section py-3 px-3 animated fadeIn faster">'+
    '<h6 class="rule-number-header"></h6>'+
    '<div class="form-row">'+
        '<div class="col-sm-2 py-1 py-sm-0">'+
            '<select class="form-control form-control-sm" required>'+
                '<option value="aff_sub" selected>aff_sub</option>'+
                '<option value="option2">Option 2</option>'+
                '<option value="option3">Option 3</option>'+
                '<option value="option4">Option 4</option>'+
            '</select>'+
        '</div>'+
        '<div class="col-sm-2 py-1 py-sm-0">'+
            '<select class="form-control form-control-sm" required>'+
                '<option value="is" selected>is</option>'+
                '<option value="option2">Option 2</option>'+
                '<option value="option3">Option 3</option>'+
                '<option value="option4">Option 4</option>'+
            '</select>'+
        '</div>'+
        '<div class="col-sm-8 py-1 py-sm-0 pr-0 form-row">'+
            '<div class="input-group col-10">'+
                '<input required type="text" class="form-control form-control-sm pr-0" placeholder="insert parameter">'+
                '<div class="input-group-append">'+
                    '<button class="btn btn-sm rule-addon-btn add" type="button"><i class="fa fa-plus"></i></button>'+
                '</div>'+
            '</div>'+
            '<div class="col-2 text-right px-0">'+
                '<a href="javascript:void(0);" class="remove-rule-field-btn btn btn-sm btn-outline-danger"><i class="fa fa-remove"></i></a>'+
            '</div>'+
        '</div>'+
    '</div>'+
'</div>';


$(document).ready(function() {

    function updateRuleHeader() {
        $(".rule-number-header").each(function (index) {
            $(this).text("Rule "+ (index+1))
        });
        if ($(".rule-number-header").length === 1) {
            $(".rule-number-header").css("display", "none");
        } else {
            $(".rule-number-header").css("display", "block");
        }
    }

    $(document).on("click", ".rule-addon-btn.add" , function() {
        $(this).parents(".input-group").before(newRuleParameter);
    });

    $(document).on("click", ".rule-addon-btn.remove" , function() {
        var triggeredBtn = $(this);
        triggeredBtn.parents(".input-group").addClass("animated fadeOut");
        setTimeout(function(){
            triggeredBtn.parents(".input-group").remove();
        }, 200);
    });

    $(".add-rule-field-btn").click(function() {
        $(this).parents(".parameter-section").before(newRuleField);
        updateRuleHeader();
    });

    $(document).on("click", ".remove-rule-field-btn" , function() {
        var triggeredBtn = $(this);
        triggeredBtn.parents(".parameter-section").addClass("animated fadeOut");
        setTimeout(function(){
            triggeredBtn.parents(".parameter-section").remove();
            updateRuleHeader();
        }, 200);
    });

    $("#revenueForm").submit(function(e) {
        e.preventDefault();
        document.getElementById("revenueForm").reset();
        $('#addRevenue').modal('hide');
        $('.add-revenue-btn').css("display", "none");
        Swal.fire({
          type: 'success',
          title: 'Form has been submitted successfully!',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(function(){
            $('.add-revenue-btn').css("display", "block");
        }, 1700);

    });
});
