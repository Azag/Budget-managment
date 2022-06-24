const envelopeDb = require('../DB/db.js');
const {findIndexById} = require('./helpers.js')


exports.getAll = (req, res, next) => {
    try {
      res.status(200).send(envelopeDb);
    } catch (err) {
        res.status(400).send(err);
    }
  }

exports.getEnvelopeById = (req, res) => {
  try {
    const {id} = req.params;
    const EnvelopeById = envelopeDb.find((el) => {
      return el.id === Number(id);
    });

    if (EnvelopeById) {
        res.status(200).send(EnvelopeById)
    } else {
        res.status(404).send('ID not found');
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

exports.createEnvelope = (req, res) => {
  try {
    const {title, budget} = req.body;
    const id = envelopeDb[envelopeDb.length - 1].id + 1;
    envelopeDb.push({id, title, budget});
    res.status(201).send(envelopeDb[envelopeDb.length - 1]);
  } catch (err) {
    res.status(500).send(err);
  }
}

exports.deleteEnvelope = (req, res) => {
    try {
      const {id} = req.params;
      const index = findIndexById(envelopeDb, id);
      envelopeDb.splice(index, 1);
      res.status(200).send(envelopeDb);
    } catch (err) {
      res.status(500).send(err);
    }
  }

exports.updateEnvelope = (req, res) => {
    try {
      const{id} = req.params;
      const {budget} = req.body;
      const index = findIndexById(envelopeDb, id);
      envelopeDb[index].budget = budget;
      res.status(201).send(envelopeDb[index]);
    } catch (err) {
        res.status(500).send(err);
    }
}