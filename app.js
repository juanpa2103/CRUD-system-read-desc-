$(document).ready(function(){
    
    let obj_edit = false;
    $(document).on('click','.obj_name', function(e){
        
        obj_edit = true;
        e.preventDefault();
    });
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
                            <td><a href="#" class="obj_name">${objs_pack.name}</a></td>
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
    if(obj_edit = false){
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
    };
    if(obj_edit){
        var $text = "Editar";
        $('#btn_Add').val($text)
    };
    $(document).on('click','.delete', function(){
        $('#obj-form').trigger('reset');
    });
});