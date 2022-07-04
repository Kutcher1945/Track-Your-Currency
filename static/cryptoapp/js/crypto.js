$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    /*$("#btn_uncheck").click(function(){
        $("#checklist").prop("checked", false);
        console.log("hi");
    });*/
});

function main_to_wl(){

    const watchlist=[];
    var t1 = document.getElementById("myTable"), t2 = document.getElementById("myWL"), checkboxes = document.getElementsByName("check-t1");
        for (var i=0; i<checkboxes.length;i++){
            if (checkboxes[i].checked){

                var newrow = myWL.insertRow(myWL.length),c0=newrow.insertCell(0),c1=newrow.insertCell(1),c2=newrow.insertCell(2),c3=newrow.insertCell(3),c4=newrow.insertCell(4),c5=newrow.insertCell(5);

                c0.innerHTML = myTable.rows[i].cells[0].innerHTML;
                c1.innerHTML = myTable.rows[i].cells[1].innerHTML;
                c2.innerHTML = myTable.rows[i].cells[2].innerHTML;
                c3.innerHTML = myTable.rows[i].cells[3].innerHTML;
                c4.innerHTML = myTable.rows[i].cells[4].innerHTML;
                c5.innerHTML = "<button class= 'button-82-pushable' onclick='remove_from_wl();' role='button'>  <span class='button-82-shadow'></span><span class='button-82-edge'></span><span class='button-82-front text'>Delete</span></button>";
                
                watchlist.push(i);
                console.log(watchlist);
                
            }
        }

        uncheckAll();
        
}
/*var checkboxes = document.querySelectorAll("input[type='checkbox']");*/
function uncheckAll(){
    let checkedboxes = document.getElementsByName("check-t1");
    for (var x=0;x<checkedboxes.length;x++){
        checkedboxes[x].checked=false;
    }
}


function remove_from_wl(){
var index,  table = document.getElementById('myWL');
for (var i=0;i<table.rows.length;i++){
    table.rows[i].cells[5].onclick = function(){
        index = this.parentElement.rowIndex-1;
        table.deleteRow(index);
        console.log(index);
    };
}
}

/*$(function(){
    console.log("hi");
$('#myTable tbody tr td input.checkbox:not(:checked)').on('change', function (e) {
    var row = $(this).closest('tr').html();
    $('#myWL tbody').append('<tr>'+row+'</tr>');
});

}); */



/*$(function(){
    $(document).on("click",".transferrows",function(){
        var getselectedvalues=$(".maintainable input:checked").parents("tr").clone().appendTo($("myWL tbody").add(getselectedvalues));
    })
})*/