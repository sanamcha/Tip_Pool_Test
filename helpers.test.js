describe("Utilities test with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
    });
  
    it('should sum total tip amount of all payments', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(20);
      billAmtInput.value = 400;
      tipAmtInput.value = 45;
      submitPaymentInfo();
      expect(sumPaymentTotal('tipAmt')).toEqual(65);
    });
  
    it('should sum total bill amount of all payments ', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(100);
      billAmtInput.value = 250;
      tipAmtInput.value = 40;
      submitPaymentInfo();
      expect(sumPaymentTotal('billAmt')).toEqual(350);
    });
  
    it('should sum total tip percent on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(20);
      billAmtInput.value = 200;
      tipAmtInput.value = 25;
      submitPaymentInfo();
      expect(sumPaymentTotal('tipPercent')).toEqual(33);
    });
  
    it('should sum tip percent of a single tip on calculateTipPercent()', function () {
      expect(calculateTipPercent(100, 20)).toEqual(20);
      expect(calculateTipPercent(150, 15)).toEqual(10);
    });
  
    it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
      let newTr = document.createElement('tr');
      appendTd(newTr, 'test');
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('test');
    });
  
    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
      let newTr = document.createElement('tr');
      appendDeleteBtn(newTr);
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('X');
    });
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
  });