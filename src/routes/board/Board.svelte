<script lang="ts">
  import { T } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'
</script>

<T.PerspectiveCamera
  makeDefault
  position={[5, 5, 5]}
  oncreate={(ref) => {
    ref.lookAt(0, 1, 0)
  }}
>
<OrbitControls />
</T.PerspectiveCamera>

<T.Mesh position.y={1}>
  <T.BoxGeometry args={[1, 2, 1]} />
  <T.MeshBasicMaterial color="red" />
</T.Mesh>
