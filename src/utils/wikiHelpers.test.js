import wikiHelpers from '../utils/wikiHelpers';

  it('simple search', function() {
    // body...
    console.log('stating to test');
    // console.log(wikiHelpers);
    wikiHelpers.searchWikis('ynet')
      .then(function(res) {
        console.log(res);
        expect(res).to.equal(1);
      })
      .catch(function(err) {
        console.log(err);
      })
    console.log('end');
  });
