window.resizeTo(500, 500);

const $ = x => document.querySelector(x);
const pings = [];

document.body.innerHTML = `
  <div>
    <h1 id="ping"></h1>
    <small>MILLISECOND PING</small>
  </div>
  <ul id="pings"></ul>
`;

glu('ping google.com', ([ping]) => {
  const time = ping.match(/time=(\d+)/) || [];
  if (time[1]) {
    pings.push(time[1]);
    $('#ping').innerText = time[1];
    $('#pings').innerHTML = pings
      .slice(-10)
      .map(x => `<li style="height:${x}px"></li>`)
      .join('');
  }
});
