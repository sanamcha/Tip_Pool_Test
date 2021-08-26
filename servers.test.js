describe("Servers test setup and tear-down)", function() {
  beforeEach(function () {
   
    serverNameInput.value = 'Sanam';
  });

  it('should add a new server on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Sanam');
  });

  it('should not add new server with empty input', function(){
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update servertable', function () {
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(curTdList.length).toEqual(3);
    expect(curTdList[0].innerText).toEqual('Sanam');
    expect(curTdList[1].innerText).toEqual('$0.00');
    expect(curTdList[2].innerText).toEqual('X');
  });


  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = " ";
    allServers = {};
  });
});
