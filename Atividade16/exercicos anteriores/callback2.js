function exibeMsgOrdem(mensagem, callback){
    console.log(mensagem);
    callback();
}

exibeMsgOrdem('Primeira msg exibida na ordem', function(){
    console.log('Segunda msg exibida na ordem')
});