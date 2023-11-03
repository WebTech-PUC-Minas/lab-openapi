'use strict';


/**
 * Alterar uma pessoa específica por meio do ID
 *
 * idPessoa Integer 
 * no response value expected for this operation
 **/
exports.alteraPessoa = function(idPessoa) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Cadastrar uma pessoa
 *
 * body Pessoa Pessoa a ser inserida (optional)
 * no response value expected for this operation
 **/
exports.inserePessoa = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Obter uma pessoa específica por meio do ID
 *
 * idPessoa Integer 
 * returns Pessoa
 **/
exports.listaPessoaPorId = function(idPessoa) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 5,
  "nome" : "Francis Ford Copolla",
  "email" : "copolla@hollywood.com",
  "telefone" : "001-124-2111",
  "tags" : [ "cinema", "trabalho" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Listar pessoas cadastradas
 * Retorna um array de pessoas 
 *
 * search String Texto a ser procurado no nome das pessoas (optional)
 * order String Critério de ordenação dos resultados (ascendente | descedente) (optional)
 * tags List Tags a serem procuradas nas pessoas cadastradas (optional)
 * returns List
 **/
exports.listaPessoas = function(search,order,tags) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 5,
  "nome" : "Francis Ford Copolla",
  "email" : "copolla@hollywood.com",
  "telefone" : "001-124-2111",
  "tags" : [ "cinema", "trabalho" ]
}, {
  "id" : 5,
  "nome" : "Francis Ford Copolla",
  "email" : "copolla@hollywood.com",
  "telefone" : "001-124-2111",
  "tags" : [ "cinema", "trabalho" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Listar pessoas cadastradas
 *
 * tag String 
 * returns List
 **/
exports.listaPessoasPorTag = function(tag) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 5,
  "nome" : "Francis Ford Copolla",
  "email" : "copolla@hollywood.com",
  "telefone" : "001-124-2111",
  "tags" : [ "cinema", "trabalho" ]
}, {
  "id" : 5,
  "nome" : "Francis Ford Copolla",
  "email" : "copolla@hollywood.com",
  "telefone" : "001-124-2111",
  "tags" : [ "cinema", "trabalho" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Alterar uma pessoa específica por meio do ID
 *
 * idPessoa Integer 
 * no response value expected for this operation
 **/
exports.pessoasIdPessoaDELETE = function(idPessoa) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

