'use strict';

var utils = require('../utils/writer.js');
var Pessoas = require('../service/PessoasService');

module.exports.alteraPessoa = function alteraPessoa (req, res, next, idPessoa) {
  Pessoas.alteraPessoa(idPessoa)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.inserePessoa = function inserePessoa (req, res, next, body) {
  Pessoas.inserePessoa(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listaPessoaPorId = function listaPessoaPorId (req, res, next, idPessoa) {
  Pessoas.listaPessoaPorId(idPessoa)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listaPessoas = function listaPessoas (req, res, next, search, order, tags) {
  Pessoas.listaPessoas(search, order, tags)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listaPessoasPorTag = function listaPessoasPorTag (req, res, next, tag) {
  Pessoas.listaPessoasPorTag(tag)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pessoasIdPessoaDELETE = function pessoasIdPessoaDELETE (req, res, next, idPessoa) {
  Pessoas.pessoasIdPessoaDELETE(idPessoa)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
