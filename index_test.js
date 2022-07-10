const { should } = require("chai");

var expect = chai.expect;

describe('Adding points', function() {
    describe('#Player.addPoint', function(){
        it('should add a point to player.point', function() {
            var x = Player.addPoint();
            expect(x).to.equal(1);
        });
        
    });
});