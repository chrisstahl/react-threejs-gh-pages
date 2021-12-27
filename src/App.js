import './App.css';
import * as THREE from "three";



function App() {
  const Cube3d = () => {
    // var scene = new THREE.Scene();
    // var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    // var renderer = new THREE.WebGLRenderer();
    // renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );
    // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // var cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );
    // camera.position.z = 5;
    // var animate = function () {
    //   requestAnimationFrame( animate );
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;
    //   renderer.render( scene, camera );
    // };
    // animate();
    return null;
  };

  const DrawLine = () => {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1,500);
    camera.position.set(0,0,100);
    camera.lookAt(0,0,0);

    const scene = new THREE.Scene();

    const material = new THREE.LineBasicMaterial({ color: 0xaaaaff });

    const points = [];
    points.push( new THREE.Vector3(-10,0,0));
    points.push( new THREE.Vector3(0,10,0));
    points.push( new THREE.Vector3(10,0,0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const line = new THREE.Line(geometry, material);

    scene.add(line);
    var animate = function () {
        requestAnimationFrame( animate );
        line.rotation.x += 0.01;
        line.rotation.y += 0.1;
        renderer.render( scene, camera );
      };
      animate();
    return null;
  }

  return (
    <>
      <Cube3d/>
      <DrawLine/>
    </>
  );
}

export default App;
