var Contrato = require("../models/contrato")

module.exports.list = (query) => {
    let filter = {};
    if (query.hasOwnProperty('entidade')) { // se tiver, filtrar só por isso
        filter.entidade_comunicante = query.entidade;
    }
    if (query.hasOwnProperty('tipo')) {
        filter.tipoprocedimento = query.tipo;
    }
    return Contrato
        .find(filter)
        .exec()
}

module.exports.findById = id => {
    return Contrato
        .findOne({_id: id})
        .exec()
}

module.exports.findEntidades = () => {
    return Contrato
        .distinct("entidade_comunicante")
        .sort()
        .exec()
}

module.exports.findTipos = () => {
    return Contrato
        .distinct("tipoprocedimento")
        .sort()
        .exec()
}

module.exports.findTotalContratosByEntidade = (entidade_comunicante) => {
    return Contrato.aggregate([
        {
            $match: { entidade_comunicante: entidade_comunicante }
        },
        {
            $group: {
                _id: "$entidade_comunicante",
                totalContratos: {
                    $sum: {
                        $cond: [
                            { $eq: [{ $type: "$precoContratual" }, "string"] },
                            { $toDouble: { $replaceOne: { input: { $trim: { input: "$precoContratual", chars: "," } }, find: ",", replacement: "." } } },
                            { $toDouble: "$precoContratual" }
                        ]
                    }
                }
            }
        }
    ]);
};

module.exports.insert = contrato => {
    return Contrato.create(contrato)
}

module.exports.updateContrato = (contrato_id, contrato) => {
    return Contrato.findOneAndUpdate({_id: contrato_id}, contrato, {new: true})
}

module.exports.deleteContratoById = id => {
    return Contrato.findOneAndDelete({
        _id: id
    });
}