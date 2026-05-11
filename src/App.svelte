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

<div class="h-full flex flex-col bg-[#1c1c1c] text-[#e6e6e6] overflow-hidden" alt-id="Blender application window, Blender 3D editor interface" appearance-id="dark-themed full-screen application container" location-id="outermost container of the entire Blender application" functionality-id="root wrapper that holds all Blender UI panels and windows" intent-id="provide the overall Blender working environment">
  <!-- macOS Title Bar -->
  <div class="h-[40px] bg-[#1e1e1e] flex items-center relative w-full border-b border-[#000] select-none px-5" alt-id="macOS window title bar" appearance-id="dark 40px tall horizontal bar with macOS-style traffic lights and file name" location-id="top of the Blender application window, above the main menu bar" functionality-id="macOS native window chrome with traffic light controls and file title" intent-id="manage the operating system window state for Blender">
    <!-- Traffic Lights & Title -->
    <div class="flex items-center gap-5" alt-id="Window controls and title" appearance-id="horizontal group containing traffic light buttons and file title text" location-id="left side of the macOS title bar" functionality-id="groups the window control buttons and file name label together" intent-id="give quick access to window management and current file identification">
      <div class="flex gap-[10px] items-center" alt-id="Window controls" appearance-id="three small colored circles arranged horizontally: red, yellow, green" location-id="leftmost section of the macOS title bar" functionality-id="contains the close, minimize, and zoom buttons for the application window" intent-id="control the macOS window state">
        <div class="w-[14px] h-[14px] rounded-full bg-[#ff5f56] border border-[#e0443e] flex items-center justify-center group" alt-id="Close window button" appearance-id="small red circular button with an X icon on hover" location-id="leftmost of the three macOS traffic light buttons in the title bar" functionality-id="closes the Blender application window" intent-id="exit Blender or close this window">
          <i class="fa-solid fa-xmark text-[8px] text-[#4d0000] opacity-0 group-hover:opacity-100 pointer-events-none"></i>
        </div>
        <div class="w-[14px] h-[14px] rounded-full bg-[#ffbd2e] border border-[#dea123] flex items-center justify-center group" alt-id="Minimize window button" appearance-id="small yellow circular button with a minus icon on hover" location-id="middle of the three macOS traffic light buttons in the title bar" functionality-id="minimizes the Blender application window to the dock" intent-id="hide the Blender window temporarily without closing it">
          <i class="fa-solid fa-minus text-[8px] text-[#5a3e00] opacity-0 group-hover:opacity-100 pointer-events-none"></i>
        </div>
        <div class="w-[14px] h-[14px] rounded-full bg-[#27c93f] border border-[#1aab29] flex items-center justify-center group" alt-id="Zoom window button" appearance-id="small green circular button with an expand icon on hover" location-id="rightmost of the three macOS traffic light buttons in the title bar" functionality-id="zooms or enters full-screen mode for the Blender window" intent-id="maximize screen space for working in Blender">
          <i class="fa-solid fa-expand text-[7px] text-[#004d09] opacity-0 group-hover:opacity-100 pointer-events-none"></i>
        </div>
      </div>

      <div class="flex items-center gap-2 text-[#999] text-[14px] cursor-pointer" alt-id="Window title and current file path dropdown" appearance-id="file icon with eye overlay next to bold white filename text" location-id="center area of the macOS title bar, right of the traffic lights" functionality-id="displays the current Blender file name and version; clickable to open file path options" intent-id="identify which blend file is currently open and navigate to it">
        <div class="relative w-[14px] h-[18px] flex items-center justify-center">
          <i class="fa-solid fa-file text-[#666] text-[16px] pointer-events-none absolute"></i>
          <i class="fa-solid fa-eye text-[#1a1a1a] text-[8px] pointer-events-none absolute z-10"></i>
        </div>
        <span class="ml-1 text-[#ccc] font-bold pointer-events-none">* cube_diorama.blend - Blender 5.1.1</span>
      </div>
    </div>
  </div>

  <TitleBar />
  
  <div class="flex-1 grid grid-cols-[880px_1fr_800px] grid-rows-[1fr_880px] overflow-hidden bg-[#151515] gap-[1px]" alt-id="Main workspace area" appearance-id="dark three-column two-row grid layout containing all editor panels" location-id="below the top menu bar and above the status bar" functionality-id="organizes the six editor windows in the default Blender layout" intent-id="provide a multi-panel workspace for 3D editing tasks">
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
