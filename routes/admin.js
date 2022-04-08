module.exports = (app) =>{

    //importar a config do database
    var conexao = require('../config/database')

    //executar o modelo mygrid
    conexao()

    //importar o modelo mygrid
    var mygrid = require('../models/mygrid')

    //abrir forms
    app.get('/mygrid',async(req,res)=>{
        var resultado = await mygrid.find()
        res.render('mygrid.ejs',{dados:resultado})
        console.log(resultado)
    })

    //gravar as infos do forms no banco de dados
    app.post('/mygrid',(req,res)=>{
        var documento = new mygrid({
            titulo:req.body.titulo,
            texto:req.body.texto
        }).save()
        .then(()=>{res.redirect('/mygrid')})
        .catch(()=>{res.sen('Não foi possivel gravar')})
    })


}