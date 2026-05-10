<script>
  import TitleBar from './components/TitleBar.svelte';
  import StatusBar from './components/StatusBar.svelte';
  import EditorContainer from './components/EditorContainer.svelte';

  let window1 = 'asset_browser';
  let window2 = 'viewport_3d';
  let window3 = 'viewport_3d';
  let window4 = 'properties';
  let window5 = 'image_editor';
  let window6 = 'compositor';

  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    let needsRedirect = false;
    
    if (!urlParams.has('window1')) { urlParams.set('window1', window1); needsRedirect = true; }
    else { window1 = urlParams.get('window1'); }
    
    if (!urlParams.has('window2')) { urlParams.set('window2', window2); needsRedirect = true; }
    else { window2 = urlParams.get('window2'); }
    
    if (!urlParams.has('window3')) { urlParams.set('window3', window3); needsRedirect = true; }
    else { window3 = urlParams.get('window3'); }
    
    if (!urlParams.has('window4')) { urlParams.set('window4', window4); needsRedirect = true; }
    else { window4 = urlParams.get('window4'); }
    
    if (!urlParams.has('window5')) { urlParams.set('window5', window5); needsRedirect = true; }
    else { window5 = urlParams.get('window5'); }
    
    if (!urlParams.has('window6')) { urlParams.set('window6', window6); needsRedirect = true; }
    else { window6 = urlParams.get('window6'); }

    if (needsRedirect) {
      const search = urlParams.toString().replace(/%2C/g, ',');
      window.history.replaceState({}, '', `${window.location.pathname}?${search}`);
    }
  }
</script>

<div class="h-full flex flex-col bg-[#1c1c1c] text-[#e6e6e6] overflow-hidden" alt-id="Blender application window, Blender 3D editor interface">
  <!-- macOS Title Bar -->
  <div class="h-[40px] bg-[#1e1e1e] flex items-center relative w-full border-b border-[#000] select-none px-5" alt-id="macOS window title bar">
    <!-- Traffic Lights & Title -->
    <div class="flex items-center gap-5" alt-id="Window controls and title">
      <div class="flex gap-[10px] items-center" alt-id="Window controls">
        <div class="w-[14px] h-[14px] rounded-full bg-[#ff5f56] border border-[#e0443e] flex items-center justify-center group" alt-id="Close window button">
          <i class="fa-solid fa-xmark text-[8px] text-[#4d0000] opacity-0 group-hover:opacity-100 pointer-events-none"></i>
        </div>
        <div class="w-[14px] h-[14px] rounded-full bg-[#ffbd2e] border border-[#dea123] flex items-center justify-center group" alt-id="Minimize window button">
          <i class="fa-solid fa-minus text-[8px] text-[#5a3e00] opacity-0 group-hover:opacity-100 pointer-events-none"></i>
        </div>
        <div class="w-[14px] h-[14px] rounded-full bg-[#27c93f] border border-[#1aab29] flex items-center justify-center group" alt-id="Zoom window button">
          <i class="fa-solid fa-expand text-[7px] text-[#004d09] opacity-0 group-hover:opacity-100 pointer-events-none"></i>
        </div>
      </div>
      
      <div class="flex items-center gap-2 text-[#999] text-[14px] cursor-pointer" alt-id="Window title and current file path dropdown">
        <div class="relative w-[14px] h-[18px] flex items-center justify-center">
          <i class="fa-solid fa-file text-[#666] text-[16px] pointer-events-none absolute"></i>
          <i class="fa-solid fa-eye text-[#1a1a1a] text-[8px] pointer-events-none absolute z-10"></i>
        </div>
        <span class="ml-1 text-[#ccc] font-bold pointer-events-none">* cube_diorama.blend - Blender 5.1.1</span>
      </div>
    </div>
  </div>

  <TitleBar />
  
  <div class="flex-1 grid grid-cols-[880px_1fr_800px] grid-rows-[1fr_880px] overflow-hidden bg-[#151515] gap-[1px]" alt-id="Main workspace area">
    <!-- Top Left -->
    <div class="col-start-1 row-start-1 overflow-hidden flex flex-col">
      <EditorContainer initialEditor={window1} windowId="window1" />
    </div>
    
    <!-- Top Center -->
    <div class="col-start-2 row-start-1 overflow-hidden flex flex-col">
      <EditorContainer initialEditor={window2} isMainViewport={true} windowId="window2" />
    </div>
    
    <!-- Right Column spans Top & Bottom -->
    <div class="col-start-3 row-start-1 row-end-3 overflow-hidden flex flex-col gap-[1px]">
      <div class="flex-1 overflow-hidden flex flex-col">
        <EditorContainer initialEditor={window3} windowId="window3" />
      </div>
      <div class="flex-1 overflow-hidden flex flex-col">
        <EditorContainer initialEditor={window4} windowId="window4" />
      </div>
      <div class="flex-1 overflow-hidden flex flex-col">
        <EditorContainer initialEditor={window5} windowId="window5" />
      </div>
    </div>
    
    <!-- Bottom Left & Center -->
    <div class="col-start-1 col-end-3 row-start-2 overflow-hidden flex flex-col">
      <EditorContainer initialEditor={window6} windowId="window6" />
    </div>
  </div>
  
  <StatusBar />
</div>

<style>
  :global(body) {
    background-color: #151515;
  }
</style>
