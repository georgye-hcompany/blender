<script>
  import TitleBar from './components/TitleBar.svelte';
  import StatusBar from './components/StatusBar.svelte';
  import AssetBrowser from './components/AssetBrowser.svelte';
  import Viewport3D from './components/Viewport3D.svelte';
  import Outliner from './components/Outliner.svelte';
  import Properties from './components/Properties.svelte';
  import BottomAssetBrowser from './components/BottomAssetBrowser.svelte';
  import ImageEditor from './components/ImageEditor.svelte';
</script>

<div class="h-full flex flex-col bg-[#1c1c1c] text-[#e6e6e6] overflow-hidden" alt-id="Blender application window, Blender 3D editor interface">
  <TitleBar />
  
  <div class="flex-1 grid grid-cols-[880px_1fr_280px] grid-rows-[1fr_500px] overflow-hidden bg-[#151515] gap-[1px]" alt-id="Main workspace area">
    <!-- Top Left -->
    <div class="col-start-1 row-start-1 overflow-hidden flex flex-col">
      <AssetBrowser />
    </div>
    
    <!-- Top Center -->
    <div class="col-start-2 row-start-1 overflow-hidden flex flex-col">
      <Viewport3D />
    </div>
    
    <!-- Right Column spans Top & Bottom -->
    <div class="col-start-3 row-start-1 row-end-3 overflow-hidden flex flex-col gap-[1px]">
      <div class="h-[35%] overflow-hidden flex flex-col">
        <Outliner />
      </div>
      <div class="flex-1 overflow-hidden flex flex-col">
        <Properties />
      </div>
      <div class="h-[200px] overflow-hidden flex flex-col">
        <ImageEditor />
      </div>
    </div>
    
    <!-- Bottom Left & Center -->
    <div class="col-start-1 col-end-3 row-start-2 overflow-hidden flex flex-col">
      <BottomAssetBrowser />
    </div>
  </div>
  
  <StatusBar />
</div>

<style>
  :global(body) {
    background-color: #151515;
  }
</style>
