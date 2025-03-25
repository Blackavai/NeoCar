import imports from './threeJS_imports.json';

console.log(imports);

import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';
import { GLTFLoader } from 'GLTFLoader';
import { RectAreaLightHelper } from 'RectAreaLightHelper'
import { RectAreaLightUniformsLib } from 'RectAreaLightUniformsLib';

function init() {
    let container = document.querySelector('.container');

    //Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color("#000000");

    //Camera
    const camera = new THREE.PerspectiveCamera(770, container.offsetWidth / container.offsetHeight, 0.1, 10000);
    camera.position.set(2, 2, 2)

    //render
    const renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setSize(container.offsetWidth, container.offsetHeight)
    container.appendChild(renderer.domElement)



    let plain;
    {
        plain = new THREE.Mesh(
            new THREE.PlaneGeometry(100, 100),
            new THREE.MeshBasicMaterial()
        )
        plain.reciveShadow = true;
        plain.position.set(0, 0, 0)
        plain.rotateX(-Math.PI / 2);
        scene.add(plain)
    }

    // Model
    {
        const loader = new GLTFLoader();
        loader.load('threeJS/model/test/1.gltf', gltf => {
        scene.add(gltf.scene);
        }, 
            function (error) {
                console.log('Error: ' + error)
            }
        )
    }
    
    {
        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(20, 20, 10)
        light.lookAt(0, -1, 0)
        scene.add(light)

        // Helper
        // const helper = new THREE.DirectionalLightHelper(light, 5)
        // scene.add(helper)
    }

    {
        const light = new THREE.DirectionalLight(0xffffff, 0.5)
        light.position.set(2, 0, 5)
        light.lookAt(0, 1, 0)
        scene.add(light)

        // Helper
        // const helper = new THREE.DirectionalLightHelper(light, 5)
        // scene.add(helper)
    }

    RectAreaLightUniformsLib.init();
    {
        const rectLight = new THREE.RectAreaLight(0xffffff, 0.5, 100, 100);
        rectLight.position.set(-10,0,0)
        rectLight.rotation.y = Math.PI + Math.PI/4;
        scene.add(rectLight)
    }

    {
        const rectLight = new THREE.RectAreaLight(0xffffff, 0.5, 100, 100);
        rectLight.position.set(10,0,0)
        rectLight.rotation.y = Math.PI - Math.PI/4;
        scene.add(rectLight)
    }
    
    //OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    // controls.autoRotate = true;
    // controls.autoRotateSpeed = 5;
    controls.enableDamping = true;

    //Resize
    window.addEventListener('resize', onWindowResize, false)
    
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight)
    }

    // Animate
    function animate() {
        requestAnimationFrame(animate)
        controls.update();
        renderer.render(scene, camera)
    }
    animate()
}
init()