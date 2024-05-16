const mongoose = require('mongoose');

const contratoSchema = new mongoose.Schema({
    _id: Number,
    nAnuncio: String,
    tipoprocedimento: String,
    objectoContrato: String,
    dataPublicacao: String,
    dataCelebracaoContrato: String,
    precoContratual: String,
    prazoExecucao: Number,
    NIPC_entidade_comunicante: Number,
    entidade_comunicante: String,
    fundamentacao: String
}, { collection: 'contratos', versionKey: false});

module.exports = mongoose.model('contrato', contratoSchema);