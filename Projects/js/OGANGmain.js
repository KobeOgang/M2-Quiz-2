const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 6;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//BoxGeometry
const boxGeometry = new THREE.BoxGeometry(1,1,1);
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xF9E9EC});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.set(-4, 0, 0);
scene.add(box);

//ConeGeometry
const coneGeometry = new THREE.ConeGeometry(1, 2, 10);
const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x0CCA4A});
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.set(4, 0, 0);
scene.add(cone);

//CylinderGeometry
const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 1, 32);
const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0x9BC53D });
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.position.set(0, 3, 0);
scene.add(cylinder);

//SphereGeometry
const sphereGeometry = new THREE.SphereGeometry(1, 32, 16);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xC3423F });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(0, -3, 0);
scene.add(sphere);

//TorusGeometry
const torusGeometry = new THREE.TorusGeometry();
const torusMaterial = new THREE.MeshBasicMaterial({ color: 0x5BC0EB });
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
torus.position.set(0, 0, 2);
scene.add(torus);



function animate() {
    requestAnimationFrame(animate);

    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;

    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;

    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();