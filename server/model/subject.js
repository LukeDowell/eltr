/**
 * Created by Luke on 3/9/2016.
 */

var mongoose = require('mongoose');

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

///////////////
// STATICS ////
///////////////

/**
 * counts number of documents in the collection and then returns one document after skipping a random amount
 *
 * GIST : https://gist.github.com/3453567
 * @param callback
 */
SubjectSchema.statics.random = function(callback) {
    this.count(function(err, count) {
        if (err) {
            return callback(err);
        }
        var rand = Math.floor(Math.random() * count);
        this.findOne().skip(rand).exec(callback);
    }.bind(this));
};

var Subject = mongoose.model('Subject', SubjectSchema);

module.exports = Subject;