// exemple function ajaxfunction delete_account($id,$status){    $.ajax({        url:'ajax/delete_account.php',        type:'post',        data:{id:$id,status:$status},        dataType:'html',        success:function (data) {            location.reload();        }});}