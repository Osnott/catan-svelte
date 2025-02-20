<script lang="ts">
  import { T } from '@threlte/core'
  import { Edges, Grid, OrbitControls } from '@threlte/extras'
</script>

<T.PerspectiveCamera
  makeDefault
  position={[0, 5, 0]}
  oncreate={(ref) => {
    ref.lookAt(0, 0, 0)
  }}
>
<OrbitControls 
  enableDamping
  dampingFactor={0.075}
  maxPolarAngle={(Math.PI / 2) - 0.2}
/>
</T.PerspectiveCamera>

<T.Mesh position.y={0}>
  <T.CylinderGeometry args={[1, 1, 0.2, 6]} />
  <T.MeshBasicMaterial color="blue" />
  <Edges color="black" width={10}>
    <T.LineBasicMaterial color="black" linewidth={2.5}/>
  </Edges>
</T.Mesh>

<Grid
  gridSize={[10,10]}
  cellColor={"#46536b"}
  selectionThickness={0}
/>
