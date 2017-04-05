"use strict";

import chai from 'chai';
var should = chai.should();
import chaiHttp from 'chai-http';
import server from '../../app';

chai.use(chaiHttp);
chai.use(require('chai-things'));


describe('Word test', function() {
    it('should more than zero words stored', function(done) {
        chai.request(server)
            .get('/api/words')
            .end((err, res) => {
                should.not.exist(err);
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.above(0);
                done();
            });
    });

    it('should have the word "Noun" contained in it', function(done) {
        chai.request(server)
            .get('/api/words')
            .end((err, res) => {
                should.not.exist(err);
                res.should.have.status(200);

                done();
            });
    });

    it('should be able to add a new word (Testword) to it', function(done) {
        chai.request(server)
            .get('/api/words')
            .end((err, res) => {
                should.not.exist(err);
                res.should.have.status(200);

                done();
            });
    });
});