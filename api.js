const aplication = document.querySelector('.prueba')

const url = ' https://dog.ceo/api/breeds/image/random'
var image;

fetch(url)
.then(res => res.json())
.then(data => { 
    console.log(data) 
    //image = data,message;
    $('#prueba').append('<img class="d-none d-md-block" width="100%" height="100%" src="'+data.message+'">'); 
})
.catch(err => console.log(err))


//const aplication = document.querySelector('.prueba1')

const url2 = 'https://apis.digital.gob.cl/dpa/regiones '
//var image;

fetch(url2)
.then(res => res.json())
.then(data => { 
    data.forEach(element => {
        //console.log(element.nombre);
        $('#region').append('<option class="d-none d-md-block"  value="'+element.nombre+'">'+element.nombre+'</option>');
    });
    //image = data,message;
    //$('#prueba').append('<opt class="d-none d-md-block"  src="'+data.message+'">'); 
     
})
.catch(err => console.log(err))
