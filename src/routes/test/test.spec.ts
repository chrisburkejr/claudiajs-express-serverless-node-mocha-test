import { describe, it } from "mocha";
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');
const should = chai.should();

chai.use(chaiHttp);

describe('Test', () => {
    describe('/GET test', () => {
        it('it should GET test endpoint', (done) => {
            chai.request(server)
                .get('/test')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.be.a('string');
                    res.text.should.be.eql('Hello');
                    done();
                });
        });
    });
});