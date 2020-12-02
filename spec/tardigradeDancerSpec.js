describe('tartigradeDancer', function() {
  it('should have an attribute of legs', function () {
    var tardigrade = new TardigradeDancer(10, 20, 100);
    expect(tardigrade.legs).to.equal(6);
  });
  it('should have a move property of shift', function () {
    var tardigrade = new TardigradeDancer(10, 20, 100);
    expect(tardigrade.move).to.equal('shift');
  });

});