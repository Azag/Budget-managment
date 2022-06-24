const envelopeDb = require('../DB/db.js');
const {
    getAll,
    getEnvelopeById,
    createEnvelope,
    deleteEnvelope,
    updateEnvelope
} = require('../Controllers/handle.js')
const express = require('express');
const router = express.Router();


router.get('/envelopes', getAll);
router.get('/envelopes/:id', getEnvelopeById);
router.post('/envelopes', createEnvelope);
router.delete('/envelopes/:id', deleteEnvelope);
router.put('/envelopes/:id', updateEnvelope);



module.exports = router;