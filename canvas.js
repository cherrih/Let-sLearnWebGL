function main() {
  const canvas = document.querySelector('#glCanvas');
  // Initialize the GL context
  const gl = canvas.getContext('webgl');
  console.log(gl);
  // only continue if WebGL is available and working
  if (gl === null) {
    alert('Oops, we can\'t initialize WebGL. Your browser or machine may not support it.');
    return;
  }

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
}

main();
