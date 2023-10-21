function fflateCallback2() {
  const p5Code = fflate.strFromU8(fflate.gunzipSync(new Uint8Array(Array.from(atob(d3)).map((char) => char.charCodeAt(0)))));

  const newScript = document.createElement('script');
  newScript.innerHTML = [p5Code].join(";\n");
  document.body.appendChild(newScript);
  const p5Sound = fflate.strFromU8(fflate.gunzipSync(new Uint8Array(Array.from(atob(d4)).map((char) => char.charCodeAt(0)))));
  const anotherScript = document.createElement('script');
  anotherScript.innerHTML = [p5Sound].join(";\n");
  document.body.appendChild(anotherScript);
}
