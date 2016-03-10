/**
 * Created by Luke on 3/9/2016.
 */

var mongoose = require('mongoose');
var mongooseRandom = require('mongoose-simple-random');

var SubjectSchema = new mongoose.Schema({

    /**
     * The subject's actual text. Be it lyrics, a quote, or
     * oddly formatted text.
     */
    content: String,

    /**
     * A short sentence describing where this subject came from
     */
    origin: String
});
SubjectSchema.plugin(mongooseRandom);

var Subject = mongoose.model('Subject', SubjectSchema);

module.exports = Subject;