import * as THREE from "three";

const Cube3d = () => {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.z = 5;

    const scene = new THREE.Scene();
 
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
 
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
 
    const cube = new THREE.Mesh( geometry, material );
 
    scene.add( cube );
    let animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
    return null;
  };

  export default Cube3d;