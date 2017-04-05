import chai from 'chai';
var should = chai.should();
import chaiHttp from 'chai-http';
import server from '../../app';

chai.use(chaiHttp);
chai.use(require('chai-things'));


describe('Language Endpoints Integration test', function() {

    it('should have at least one language, with English being one', function(done) {
        chai.request(server)
            .get('/api/languages')
            .end((err, res) => {
                should.not.exist(err);
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.above(0);
                res.body.should.include.something.with.property('englishName', 'English');
                done();
            });
    });

});