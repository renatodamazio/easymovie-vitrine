/**
 *
 * @author ak-code <alaunalkauniyyah3@gmail.com>
 * @copyright 2020 A.kauniyyah | Front-end Web developer
 *
 * ________________________________________________________________________________
 *
 * site.config.js
 *
 * The site configuration file.
 *
 */

const makeId = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

const DATA = {
    "base": {
        "static": "static/",
        "revid": makeId(8),
        "title": "EasyMovie | Plataforma de contratação e produção de vídeo",
        "metaDesc": "Receba propostas em poucas horas para a criação do seu vídeo e contrate o produtor ideal. Encontre produtoras e profissionais de produção de vídeo."
    }
};

module.exports = {
    data: DATA
};
