var btn_edit = document.getElementById('btn_add');
var btn_name = document.getElementById('obj_name');
$(document).ready(function(){
    
    getObjs();
    //Función para obtener la lista de objetos de la base de datos
    function getObjs(){
        $.ajax({
            url: 'obj_get.php',
            type: 'GET',
            success: function(response){
                const objs_pack = JSON.parse(response);
                let template = ' ';
                objs_pack.forEach(objs_pack =>{
                    template += `
                        <tr objId="${objs_pack.id}">
                            <td>${objs_pack.id}</td>
                            <td><a class="btn_name" id="btn_name" type="button">${objs_pack.name}</a></td>
                            <td>${objs_pack.desc}</td>
                            <td>${objs_pack.cant}</td>
                            <td>${objs_pack.date}</td>
                        </tr>
                    `
                });
                $('#objs_body').html(template);

            }
        });
    }

    //Función para subir objetos a la base de datos
    $('#obj-form').submit(function (e) {
        const postData = {
            name : $('#name').val(),
            desc : $('#desc').val(),
            cant : $('#cant').val(),
            date : $('#date').val()
        };
        $.post('obj_submit.php', postData, function(response){
            console.log(response);
            getObjs();
            
        });
        e.preventDefault();
        $('#obj-form').trigger('reset');
        
    });
    //Para editar un registro :3
    $(document).on('click','.btn_name',(e) =>{
        const element = $(this)[0].activeElement.parentElement.parentElement;
        console.log(element)
        const id = $(element).attr('objId');
        $.post('obj_row.php', {id}, (response) =>{
            const row = JSON.parse(response);
            $('#name').val(row.name);
            $('#desc').val(row.desc);
            $('#cant').val(row.cant);
            $('#date').val(row.date);
        });
        btn_edit.innerHTML = 'Editar';
        btn_edit.classList.add("btn-primary");
        btn_edit.classList.remove("btn-success");
        e.preventDefault();
    });
    $(document).on('click','.delete', function(){
        $('#obj-form').trigger('reset');
    });
});