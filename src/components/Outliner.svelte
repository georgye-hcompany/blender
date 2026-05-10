<script>
  import EditorSelector from './EditorSelector.svelte';
  export let currentEditor = 'outliner';
  export let windowId = '';
</script>

<div class="h-full flex flex-col bg-[#282828] relative" alt-id="Top right Outliner editor panel">
  <!-- Header -->
  <div class="h-8 bg-[#282828] border-b border-[#1f1f1f] flex items-center px-2 justify-between text-[13px] shrink-0" alt-id="Outliner header">
    <!-- Left side -->
    <div class="flex items-center gap-2">
      <EditorSelector bind:editor={currentEditor} windowId={windowId} />
      <div class="flex items-center gap-1.5 px-2 py-0.5 bg-[#282828] border border-[#3c3c3c] rounded cursor-pointer hover:bg-[#333]" alt-id="Outliner Display Mode">
        <i class="fa-solid fa-layer-group text-[12px] text-[#ccc] pointer-events-none"></i>
        <span class="text-[#ccc] pointer-events-none">View Layer</span>
        <i class="fa-solid fa-chevron-down text-[9px] text-[#a0a0a0] pointer-events-none"></i>
      </div>
    </div>
    
    <!-- Middle -->
    <div class="flex-1 flex justify-center px-2">
      <div class="flex items-center bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] px-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] w-[180px] max-w-full justify-between" alt-id="Outliner Search Bar">
        <div class="flex items-center gap-2 text-[#888]">
          <i class="fa-solid fa-magnifying-glass text-[10px] pointer-events-none"></i>
          <span class="text-[12px] pointer-events-none">Search</span>
        </div>
      </div>
    </div>
    
    <!-- Right side tools -->
    <div class="flex items-center gap-2">
      <div class="cursor-pointer hover:text-white text-[#a0a0a0] px-1" alt-id="Filter">
        <i class="fa-solid fa-filter text-[12px] pointer-events-none"></i>
      </div>
      <div class="cursor-pointer hover:text-white text-[#a0a0a0] px-1" alt-id="New Collection">
        <i class="fa-solid fa-folder-plus text-[14px] pointer-events-none"></i>
      </div>
      <div class="w-[1px] h-4 bg-[#3c3c3c] mx-1"></div>
      
      <!-- Column Headers -->
      <div class="flex items-center text-[#ccc] opacity-70" style="gap: 12px; margin-right: 6px;">
        <i class="fa-solid fa-square-check text-[12px]" alt-id="Header: Enable Collection"></i>
        <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg]" alt-id="Header: Selectable"></i>
        <i class="fa-solid fa-eye text-[12px]" alt-id="Header: Hide in Viewport"></i>
        <i class="fa-solid fa-desktop text-[12px]" alt-id="Header: Disable in Viewports"></i>
        <i class="fa-solid fa-camera text-[12px]" alt-id="Header: Disable in Renders"></i>
      </div>
    </div>
  </div>
  
  <!-- Tree List -->
  <div class="flex-1 overflow-y-auto bg-[#232323] text-[#eee] text-[13px] hide-scrollbar" alt-id="Outliner tree list">
    <div class="flex flex-col py-1">
      
      <!-- Row 1: Scene Collection -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer" alt-id="Outliner row: Scene Collection">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 4px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-down text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-box text-[13px] text-[#eee] mr-1.5 opacity-80"></i>
            <span class="truncate">Scene Collection</span>
          </div>
        </div>
      </div>
      
      <!-- Row 2: Common -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Common">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 20px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-down text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-box-archive text-[13px] text-white mr-1.5 opacity-90"></i>
            <span class="truncate font-medium">Common</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-square-check text-[12px] text-white" alt-id="Common: Checkbox checked"></i>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-white" alt-id="Common: Selectable solid"></i>
          <i class="fa-solid fa-eye text-[12px] text-white" alt-id="Common: Visible solid"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Common: Monitor solid"></i>
          <i class="fa-solid fa-camera text-[12px] text-white" alt-id="Common: Camera solid"></i>
        </div>
      </div>

      <!-- Row 3: Reference Images -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Reference Images">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-[#aaa]" style="padding-left: 36px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-down text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-box-archive text-[13px] text-[#aaa] mr-1.5"></i>
            <span class="truncate">Reference Images</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <div class="w-[12px] h-[12px] border border-white rounded-[2px]" alt-id="Reference Images: Checkbox unchecked"></div>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#aaa]" alt-id="Reference Images: Selectable solid grey"></i>
          <i class="fa-solid fa-eye-slash text-[12px] text-[#aaa] opacity-50" alt-id="Reference Images: Visible closed grey"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Reference Images: Monitor white"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#aaa] opacity-50" alt-id="Reference Images: Camera outline grey"></i>
        </div>
      </div>

      <!-- Row 4: Atelier Image -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Atelier Image">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-[#aaa]" style="padding-left: 60px;">
            <i class="fa-solid fa-image text-[13px] text-[#ffb366] mr-1.5"></i>
            <span class="truncate">Atelier Image</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-square-check text-[12px] text-white" alt-id="Atelier Image: Checkbox checked"></i>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#aaa]" alt-id="Atelier Image: Selectable solid grey"></i>
          <i class="fa-solid fa-eye-slash text-[12px] text-[#aaa] opacity-50" alt-id="Atelier Image: Visible closed grey"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Atelier Image: Monitor white"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#aaa] opacity-50" alt-id="Atelier Image: Camera grey"></i>
        </div>
      </div>

      <!-- Row 5: Villa Image -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Villa Image">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-[#aaa]" style="padding-left: 60px;">
            <i class="fa-solid fa-image text-[13px] text-[#ffb366] mr-1.5"></i>
            <span class="truncate">Villa Image</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <div class="w-[12px] h-[12px] border border-white rounded-[2px]" alt-id="Villa Image: Checkbox unchecked"></div>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#aaa]" alt-id="Villa Image: Selectable solid grey"></i>
          <i class="fa-solid fa-eye-slash text-[12px] text-[#aaa] opacity-50" alt-id="Villa Image: Visible closed grey"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Villa Image: Monitor white"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#aaa] opacity-50" alt-id="Villa Image: Camera grey"></i>
        </div>
      </div>

      <!-- Row 6: Bed Bunker Image -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Bed Bunker Image">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-[#aaa]" style="padding-left: 60px;">
            <i class="fa-solid fa-image text-[13px] text-[#ffb366] mr-1.5"></i>
            <span class="truncate">Bed Bunker Image</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <div class="w-[12px] h-[12px] border border-white rounded-[2px]" alt-id="Bed Bunker Image: Checkbox unchecked"></div>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#aaa]" alt-id="Bed Bunker Image: Selectable solid grey"></i>
          <i class="fa-solid fa-eye-slash text-[12px] text-[#aaa] opacity-50" alt-id="Bed Bunker Image: Visible closed grey"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Bed Bunker Image: Monitor white"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#aaa] opacity-50" alt-id="Bed Bunker Image: Camera grey"></i>
        </div>
      </div>

      <!-- Row 7: Camera -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Camera">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 20px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-right text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-video text-[13px] text-[#ffb366] mr-1.5"></i>
            <span class="truncate text-white">Camera</span>
            <i class="fa-solid fa-video text-[12px] text-[#66cc99] ml-2" alt-id="Camera object data"></i>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-white outline-none" alt-id="Camera: Selectable grey outline (no fill)"></i>
          <i class="fa-solid fa-eye text-[12px] text-white" alt-id="Camera: Visible solid"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Camera: Monitor solid"></i>
          <i class="fa-solid fa-camera text-[12px] text-white" alt-id="Camera: Camera solid"></i>
        </div>
      </div>

      <!-- Row 8: Studio -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Studio">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 20px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-down text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-box-archive text-[13px] text-white mr-1.5 opacity-90"></i>
            <span class="truncate font-medium">Studio</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-square-check text-[12px] text-white" alt-id="Studio: Checkbox checked"></i>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-white" alt-id="Studio: Selectable solid"></i>
          <i class="fa-solid fa-eye text-[12px] text-white" alt-id="Studio: Visible solid"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Studio: Monitor solid"></i>
          <i class="fa-solid fa-camera text-[12px] text-white" alt-id="Studio: Camera solid"></i>
        </div>
      </div>

      <!-- Row 9: Window -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Window">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 36px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-down text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-box-archive text-[13px] text-white mr-1.5 opacity-90"></i>
            <span class="truncate font-medium">Window</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-square-check text-[12px] text-white" alt-id="Window: Checkbox checked"></i>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-white" alt-id="Window: Selectable solid"></i>
          <i class="fa-solid fa-eye text-[12px] text-white" alt-id="Window: Visible solid"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Window: Monitor solid"></i>
          <i class="fa-solid fa-camera text-[12px] text-white" alt-id="Window: Camera solid"></i>
        </div>
      </div>

      <!-- Row 10: Empty -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Empty">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-[#ccc]" style="padding-left: 52px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-right text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-arrows-up-down-left-right text-[13px] text-[#ffb366] mr-1.5" style="transform: rotate(45deg);"></i>
            <span class="truncate">Empty</span>
            <i class="fa-solid fa-draw-polygon text-[12px] text-[#ffb366] ml-2 opacity-80" alt-id="Empty object data"></i>
            <span class="text-[10px] ml-[1px]">7</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#ccc]" alt-id="Empty: Selectable solid grey"></i>
          <i class="fa-solid fa-eye text-[12px] text-[#ccc]" alt-id="Empty: Visible solid grey"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Empty: Monitor white"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#ccc]" alt-id="Empty: Camera grey"></i>
        </div>
      </div>

      <!-- Row 11: Window Board -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Window Board">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-[#ccc]" style="padding-left: 52px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-right text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-caret-down text-[14px] text-[#ffb366] mr-1.5" style="transform: scaleX(0.8) scaleY(1.2);"></i>
            <span class="truncate">Window Board</span>
            <i class="fa-solid fa-wrench text-[12px] text-[#4772b3] ml-2" alt-id="Window Board Modifier"></i>
            <i class="fa-solid fa-circle-nodes text-[12px] text-[#66cc99] ml-1" alt-id="Window Board Geometry Nodes"></i>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#ccc]" alt-id="Window Board: Selectable solid grey"></i>
          <i class="fa-solid fa-eye text-[12px] text-[#ccc]" alt-id="Window Board: Visible solid grey"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Window Board: Monitor white"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#ccc]" alt-id="Window Board: Camera grey"></i>
        </div>
      </div>

      <!-- Row 12: Structure -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Structure">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 36px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-down text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-box-archive text-[13px] text-white mr-1.5 opacity-90"></i>
            <span class="truncate font-medium">Structure</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-square-check text-[12px] text-white" alt-id="Structure: Checkbox checked"></i>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-white" alt-id="Structure: Selectable solid"></i>
          <i class="fa-solid fa-eye text-[12px] text-white" alt-id="Structure: Visible solid"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Structure: Monitor solid"></i>
          <i class="fa-solid fa-camera text-[12px] text-white" alt-id="Structure: Camera solid"></i>
        </div>
      </div>

      <!-- Row 13-19: Beams and Cubes -->
      {#each ['Beam2', 'Beam2.001', 'Beam3', 'Beam4', 'Beam5', 'Cube', 'Cube.002'] as name}
        <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: {name}">
          <div class="flex-1 flex items-center h-full min-w-0">
            <div class="flex items-center w-full text-[#ccc]" style="padding-left: 52px;">
              <div class="w-3 flex justify-center items-center mr-1">
                <i class="fa-solid fa-chevron-right text-[9px] text-[#ccc]"></i>
              </div>
              <i class="fa-solid fa-caret-down text-[14px] text-[#ffb366] mr-1.5" style="transform: scaleX(0.8) scaleY(1.2);"></i>
              <span class="truncate">{name}</span>
              <i class="fa-solid fa-wrench text-[12px] text-[#4772b3] ml-2" alt-id="{name} Modifier"></i>
              <i class="fa-solid fa-circle-nodes text-[12px] text-[#66cc99] ml-1" alt-id="{name} Geometry Nodes"></i>
            </div>
          </div>
          <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
            <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#ccc]" alt-id="{name}: Selectable solid grey"></i>
            <i class="fa-solid fa-eye text-[12px] text-[#ccc]" alt-id="{name}: Visible solid grey"></i>
            <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="{name}: Monitor white"></i>
            <i class="fa-solid fa-camera text-[12px] text-[#ccc]" alt-id="{name}: Camera grey"></i>
          </div>
        </div>
      {/each}

      <!-- Row 20: Lighting -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Lighting">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 36px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-down text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-box-archive text-[13px] text-white mr-1.5 opacity-90"></i>
            <span class="truncate font-medium">Lighting</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-square-check text-[12px] text-white" alt-id="Lighting: Checkbox checked"></i>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#555] outline-none" alt-id="Lighting: Selectable grey outline (no fill)"></i>
          <i class="fa-solid fa-eye text-[12px] text-[#ccc]" alt-id="Lighting: Visible solid grey"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Lighting: Monitor white"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#ccc]" alt-id="Lighting: Camera grey"></i>
        </div>
      </div>

      <!-- Row 21-23: Bounce/Fill Lights -->
      {#each ['Bounce Light', 'Fill Light', 'Fill Light.001'] as name}
        <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: {name}">
          <div class="flex-1 flex items-center h-full min-w-0">
            <div class="flex items-center w-full text-[#ccc]" style="padding-left: 52px;">
              <div class="w-3 flex justify-center items-center mr-1">
                <i class="fa-solid fa-chevron-right text-[9px] text-[#ccc]"></i>
              </div>
              <i class="fa-solid fa-lightbulb text-[13px] text-[#ffb366] mr-1.5"></i>
              <span class="truncate">{name}</span>
              <i class="fa-solid fa-lightbulb text-[12px] text-[#66cc99] ml-2" style="transform: rotate(180deg);" alt-id="{name} Light Data"></i>
            </div>
          </div>
          <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
            <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#555] outline-none" alt-id="{name}: Selectable grey outline"></i>
            <i class="fa-solid fa-eye text-[12px] text-[#ccc]" alt-id="{name}: Visible solid grey"></i>
            <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="{name}: Monitor white"></i>
            <i class="fa-solid fa-camera text-[12px] text-[#ccc]" alt-id="{name}: Camera grey"></i>
          </div>
        </div>
      {/each}

      <!-- Row 24: IrradianceVolume -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: IrradianceVolume">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-[#ccc]" style="padding-left: 52px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-right text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-braille text-[13px] text-[#ffb366] mr-1.5" style="transform: rotate(45deg);"></i>
            <span class="truncate">IrradianceVolume</span>
            <i class="fa-solid fa-braille text-[12px] text-[#66cc99] ml-2" alt-id="IrradianceVolume Data"></i>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#555] outline-none" alt-id="IrradianceVolume: Selectable grey outline"></i>
          <i class="fa-solid fa-eye text-[12px] text-[#ccc]" alt-id="IrradianceVolume: Visible solid grey"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="IrradianceVolume: Monitor white"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#ccc]" alt-id="IrradianceVolume: Camera grey"></i>
        </div>
      </div>

      <!-- Row 25: Spot_Outside -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Spot_Outside">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-[#ccc]" style="padding-left: 52px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-right text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-lightbulb text-[13px] text-[#ffb366] mr-1.5"></i>
            <span class="truncate">Spot_Outside</span>
            <i class="fa-solid fa-lightbulb text-[12px] text-[#66cc99] ml-2" style="transform: rotate(180deg);" alt-id="Spot_Outside Light Data"></i>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#555] outline-none" alt-id="Spot_Outside: Selectable grey outline"></i>
          <i class="fa-solid fa-eye text-[12px] text-[#ccc]" alt-id="Spot_Outside: Visible solid grey"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Spot_Outside: Monitor white"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#ccc]" alt-id="Spot_Outside: Camera grey"></i>
        </div>
      </div>

      <!-- Row 26: Volume -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Volume">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-[#ccc]" style="padding-left: 52px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-right text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-caret-down text-[14px] text-[#ffb366] mr-1.5" style="transform: scaleX(0.8) scaleY(1.2);"></i>
            <span class="truncate">Volume</span>
            <i class="fa-solid fa-circle-nodes text-[12px] text-[#66cc99] ml-2" alt-id="Volume Geometry Nodes"></i>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#ccc]" alt-id="Volume: Selectable solid grey"></i>
          <i class="fa-solid fa-chevron-down text-[12px] text-[#ccc]" alt-id="Volume: Eye half open grey"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Volume: Monitor white"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#ccc]" alt-id="Volume: Camera grey"></i>
        </div>
      </div>

      <!-- Row 27: Walls -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Walls">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 36px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-down text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-box-archive text-[13px] text-white mr-1.5 opacity-90"></i>
            <span class="truncate font-medium">Walls</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-square-check text-[12px] text-white" alt-id="Walls: Checkbox checked"></i>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-white" alt-id="Walls: Selectable solid"></i>
          <i class="fa-solid fa-eye text-[12px] text-white" alt-id="Walls: Visible solid"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Walls: Monitor solid"></i>
          <i class="fa-solid fa-camera text-[12px] text-white" alt-id="Walls: Camera solid"></i>
        </div>
      </div>

      <!-- Row 28-29: Wall1, Wall2 -->
      {#each ['Wall1', 'Wall2'] as name}
        <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: {name}">
          <div class="flex-1 flex items-center h-full min-w-0">
            <div class="flex items-center w-full text-[#ccc]" style="padding-left: 52px;">
              <div class="w-3 flex justify-center items-center mr-1">
                <i class="fa-solid fa-chevron-right text-[9px] text-[#ccc]"></i>
              </div>
              <i class="fa-solid fa-caret-down text-[14px] text-[#ffb366] mr-1.5" style="transform: scaleX(0.8) scaleY(1.2);"></i>
              <span class="truncate">{name}</span>
              <i class="fa-solid fa-circle-nodes text-[12px] text-[#66cc99] ml-2" alt-id="{name} Geometry Nodes"></i>
            </div>
          </div>
          <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
            <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#ccc]" alt-id="{name}: Selectable solid grey"></i>
            <i class="fa-solid fa-eye text-[12px] text-[#ccc]" alt-id="{name}: Visible solid grey"></i>
            <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="{name}: Monitor white"></i>
            <i class="fa-solid fa-camera text-[12px] text-[#ccc]" alt-id="{name}: Camera grey"></i>
          </div>
        </div>
      {/each}

      <!-- Row 30: Floor Collection -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Floor Collection">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 36px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-down text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-box-archive text-[13px] text-white mr-1.5 opacity-90"></i>
            <span class="truncate font-medium">Floor</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-square-check text-[12px] text-white" alt-id="Floor Collection: Checkbox checked"></i>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-white" alt-id="Floor Collection: Selectable solid"></i>
          <i class="fa-solid fa-eye text-[12px] text-white" alt-id="Floor Collection: Visible solid"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Floor Collection: Monitor solid"></i>
          <i class="fa-solid fa-camera text-[12px] text-white" alt-id="Floor Collection: Camera solid"></i>
        </div>
      </div>

      <!-- Row 31: Floor Object (Selected) -->
      <div class="flex items-center h-[22px] bg-[#4772b3] cursor-pointer group" alt-id="Outliner row: Floor Object">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-white" style="padding-left: 52px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-right text-[9px] text-white"></i>
            </div>
            <div class="w-3.5 h-3.5 border border-[#ffb366] bg-[#282828] rounded-sm flex items-center justify-center mr-1.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
              <i class="fa-solid fa-caret-down text-[14px] text-[#ffb366]" style="transform: scaleX(0.8) scaleY(1.2);"></i>
            </div>
            <span class="truncate">Floor</span>
            <i class="fa-solid fa-wrench text-[12px] text-[#99b3e6] ml-2" alt-id="Floor Object Modifier"></i>
            <i class="fa-solid fa-circle-nodes text-[12px] text-[#66cc99] ml-1" alt-id="Floor Object Geometry Nodes"></i>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-white" alt-id="Floor Object: Selectable solid white"></i>
          <i class="fa-solid fa-eye text-[12px] text-white" alt-id="Floor Object: Visible solid white"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Floor Object: Monitor white"></i>
          <i class="fa-solid fa-camera text-[12px] text-white" alt-id="Floor Object: Camera white"></i>
        </div>
      </div>

      <!-- Row 32: Ground Plate -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Ground Plate">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-[#ccc]" style="padding-left: 52px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-right text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-caret-down text-[14px] text-[#ffb366] mr-1.5" style="transform: scaleX(0.8) scaleY(1.2);"></i>
            <span class="truncate">Ground Plate</span>
            <i class="fa-solid fa-circle-nodes text-[12px] text-[#66cc99] ml-2" alt-id="Ground Plate Geometry Nodes"></i>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#ccc]" alt-id="Ground Plate: Selectable solid grey"></i>
          <i class="fa-solid fa-eye text-[12px] text-[#ccc]" alt-id="Ground Plate: Visible solid grey"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Ground Plate: Monitor white"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#ccc]" alt-id="Ground Plate: Camera grey"></i>
        </div>
      </div>

      <!-- Row 33: Studio Assets -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Studio Assets">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 20px;">
            <i class="fa-solid fa-box-archive text-[13px] text-white mr-1.5 opacity-90"></i>
            <span class="truncate font-medium text-white">Studio Assets</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-square-check text-[12px] text-white" alt-id="Studio Assets: Checkbox checked"></i>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-white" alt-id="Studio Assets: Selectable solid"></i>
          <i class="fa-solid fa-eye text-[12px] text-white" alt-id="Studio Assets: Visible solid"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Studio Assets: Monitor solid"></i>
          <i class="fa-solid fa-camera text-[12px] text-white" alt-id="Studio Assets: Camera solid"></i>
        </div>
      </div>

      <!-- Row 34: Demo Assets -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Demo Assets">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 20px;">
            <i class="fa-solid fa-box-archive text-[13px] text-[#aaa] mr-1.5"></i>
            <span class="truncate font-medium text-[#aaa]">Demo Assets</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <div class="w-[12px] h-[12px] border border-white rounded-[2px]" alt-id="Demo Assets: Checkbox unchecked"></div>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#aaa]" alt-id="Demo Assets: Selectable solid grey"></i>
          <i class="fa-solid fa-eye-slash text-[12px] text-[#aaa] opacity-50" alt-id="Demo Assets: Visible closed grey"></i>
          <i class="fa-solid fa-desktop text-[12px] text-[#aaa] opacity-50" alt-id="Demo Assets: Monitor outline grey"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#aaa] opacity-50" alt-id="Demo Assets: Camera outline grey"></i>
        </div>
      </div>

    </div>
  </div>
</div>
