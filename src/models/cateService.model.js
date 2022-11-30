import mongoose from 'mongoose';
const cateServiceSchema = mongoose.Schema({
    name: {
        type: String,
    },
});

export default mongoose.model('cateService', cateServiceSchema);
// module.exports = cateService;
