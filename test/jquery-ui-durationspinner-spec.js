describe('jquery-ui-durationspinner', function() {
  beforeEach(function() {
    document.body.innerHTML = __html__['test/index.html'];
  });

  describe('hm', function() {
    it('mouse updown', function() {
      var $hm = $('input.hm');
      $hm.durationspinner();

      $hm.siblings('a.ui-spinner-up').mousedown().mouseup();
      expect($hm.val()).toEqual('00:01');

      $hm.siblings('a.ui-spinner-down').mousedown().mouseup();
      expect($hm.val()).toEqual('00:00');      
    });
  });

  describe('dhms', function() {
    it('mouse updown', function() {
      var $dhms = $('input.dhms');
      $dhms.durationspinner({ format: 'd [days] hh:mm:ss', step: 1, page: 60 });

      $dhms.siblings('a.ui-spinner-up').mousedown().mouseup();
      expect($dhms.val()).toEqual('0 days 00:00:01');

      $dhms.siblings('a.ui-spinner-down').mousedown().mouseup();
      expect($dhms.val()).toEqual('0 days 00:00:00');      
    });
  });
});
