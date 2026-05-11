<script>
  import { onMount } from 'svelte';
  import EditorSelector from './EditorSelector.svelte';
  export let currentEditor = 'shader_editor';
  export let windowId = '';

  let activeSidebarTab = 'tool';
  let isToolExpanded = true;
  let isNodeExpanded = true;
  
  // URL params logic
  onMount(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const openParam = urlParams.get('open') || '';
      if (openParam.includes(`${windowId}-shader-editor-tool`)) {
        activeSidebarTab = 'tool';
      }
      if (openParam.includes(`${windowId}-shader-editor-node`)) {
        activeSidebarTab = 'node';
      }
      if (openParam.includes(`${windowId}-shader-editor-view`)) {
        activeSidebarTab = 'view';
      }
      if (openParam.includes(`${windowId}-shader-editor-options`)) {
        activeSidebarTab = 'options';
      }
    }
  });

  function updateOpenParam() {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const openStates = [];
      if (activeSidebarTab === 'tool') openStates.push(`${windowId}-shader-editor-tool`);
      if (activeSidebarTab === 'node') openStates.push(`${windowId}-shader-editor-node`);
      if (activeSidebarTab === 'view') openStates.push(`${windowId}-shader-editor-view`);
      if (activeSidebarTab === 'options') openStates.push(`${windowId}-shader-editor-options`);
      
      if (openStates.length > 0) {
        url.searchParams.set('open', openStates.join(','));
      } else {
        url.searchParams.delete('open');
      }
      const search = url.searchParams.toString().replace(/%2C/g, ',');
      window.history.replaceState({}, '', `${url.pathname}?${search}`);
    }
  }

  function setSidebarTab(tab) {
    activeSidebarTab = tab;
    updateOpenParam();
  }

</script>

<div class="w-full h-full flex flex-col bg-[#1c1c1c] text-[#e6e6e6] overflow-hidden" alt-id="Shader Editor Window" appearance-id="dark panel with a node graph area showing interconnected shader nodes with a sidebar" location-id="within the Shader Editor container panel in the Blender workspace" functionality-id="provides a node-based visual editor for creating and editing material shaders" intent-id="design complex materials by connecting shader nodes in a visual graph">
  <!-- Header Bar -->
  <div class="h-[28px] bg-[#1a1a1a] flex items-center px-2 py-1 justify-between select-none shrink-0 z-20">
    <div class="flex items-center gap-2 overflow-x-auto overflow-y-hidden hide-scrollbar">
      <EditorSelector bind:editor={currentEditor} windowId={windowId} />
      
      <div class="flex items-center bg-[#282828] border border-[#3c3c3c] rounded px-2 py-[2px] cursor-pointer hover:bg-[#333] text-[13px] gap-1.5" alt-id="Shader Type" appearance-id="dropdown button showing the current shader type such as Object" location-id="leftmost item in the Shader Editor header" functionality-id="switches the shader editor between Object, World, and Line Art shader types" intent-id="choose which type of shader to view and edit in the node graph">
        <i class="fa-solid fa-cube text-[12px] text-[#ffb366] pointer-events-none"></i>
        <span class="text-[#ccc] pointer-events-none">Object</span>
        <i class="fa-solid fa-chevron-down text-[9px] text-[#a0a0a0] pointer-events-none"></i>
      </div>

      <div class="flex items-center text-[13px] text-[#ccc] gap-3 px-2 whitespace-nowrap">
        <span class="cursor-pointer hover:text-white" alt-id="View menu" appearance-id="underlined text menu item labeled View" location-id="Shader Editor header menu bar, first menu item" functionality-id="opens the View menu with options for framing nodes and navigating the graph" intent-id="access view navigation and display settings for the shader node editor"><u>V</u>iew</span>
        <span class="cursor-pointer hover:text-white" alt-id="Select menu" appearance-id="underlined text menu item labeled Select" location-id="Shader Editor header menu bar, second menu item" functionality-id="opens the Select menu with options for selecting nodes in the graph" intent-id="access node selection tools for working with multiple nodes simultaneously"><u>S</u>elect</span>
        <span class="cursor-pointer hover:text-white" alt-id="Add menu" appearance-id="underlined text menu item labeled Add" location-id="Shader Editor header menu bar, third menu item" functionality-id="opens the Add menu with all available shader node categories" intent-id="insert new shader nodes into the material node graph"><u>A</u>dd</span>
        <span class="cursor-pointer hover:text-white" alt-id="Node menu" appearance-id="underlined text menu item labeled Node" location-id="Shader Editor header menu bar, fourth menu item" functionality-id="opens the Node menu with operations for the selected nodes" intent-id="access node operations like muting, hiding, and joining for the selected shader nodes"><u>N</u>ode</span>
      </div>

      <div class="w-[1px] h-4 bg-[#3c3c3c] mx-1"></div>

      <div class="flex items-center gap-1">
        <div class="flex items-center bg-[#282828] border border-[#3c3c3c] rounded px-2 py-[2px] cursor-pointer hover:bg-[#333] text-[13px] gap-1.5" alt-id="Material Slot" appearance-id="dropdown button group showing the material slot number and navigation controls" location-id="right side of the Shader Editor header, before the material name controls" functionality-id="allows navigating and selecting the material slot for the active object" intent-id="switch between multiple material slots on the active object">
          <span class="text-[#ccc] pointer-events-none">Slot 1</span>
          <i class="fa-solid fa-chevron-down text-[9px] text-[#a0a0a0] pointer-events-none"></i>
        </div>

        <div class="flex items-center bg-[#282828] border border-[#3c3c3c] rounded h-[24px] overflow-hidden ml-1">
          <div class="flex items-center gap-1.5 px-2 hover:bg-[#333] cursor-pointer h-full" alt-id="Material Select" appearance-id="button with a material sphere icon for opening the material browser" location-id="first section of the material slot controls in the Shader Editor header" functionality-id="opens the material data browser for selecting and assigning materials" intent-id="browse and choose a material from the scene to assign to the active slot">
            <i class="fa-solid fa-circle text-[13px] text-[#ff6666] pointer-events-none"></i>
            <i class="fa-solid fa-chevron-down text-[9px] text-[#a0a0a0] pointer-events-none"></i>
          </div>
          <div class="flex items-center px-2 border-l border-[#3c3c3c] hover:bg-[#333] cursor-pointer h-full" alt-id="Active Material Name" appearance-id="text field showing the name of the active material" location-id="second section of the material slot controls in the Shader Editor header" functionality-id="displays the name of the currently active material and allows renaming it" intent-id="identify and rename the currently active material for the selected object">
            <span class="text-[13px] text-[#eee] pointer-events-none min-w-[80px]">Boards - Basketweave</span>
          </div>
          <div class="flex items-center justify-center w-6 border-l border-[#3c3c3c] hover:bg-[#333] cursor-pointer h-full bg-[#282828]" alt-id="Users" appearance-id="small button showing the number of users of this material data-block" location-id="third section of the material slot controls in the Shader Editor header" functionality-id="displays and manages the user count of the material data-block" intent-id="see how many objects share this material and make it single-user if needed">
            <span class="text-[12px] text-[#eee] pointer-events-none">2</span>
          </div>
          <div class="flex items-center justify-center w-6 border-l border-[#3c3c3c] hover:bg-[#333] cursor-pointer h-full" alt-id="Fake User" appearance-id="small button with a shield icon for protecting the material data-block" location-id="fourth section of the material slot controls in the Shader Editor header" functionality-id="toggles a fake user on the material to prevent it from being deleted on file save" intent-id="protect an unused material from being automatically purged from the file">
            <i class="fa-solid fa-shield text-[12px] text-[#ccc] pointer-events-none"></i>
          </div>
          <div class="flex items-center justify-center w-6 border-l border-[#3c3c3c] hover:bg-[#333] cursor-pointer h-full" alt-id="New Material" appearance-id="small button with a plus icon for creating a new material" location-id="fifth section of the material slot controls in the Shader Editor header" functionality-id="creates a new empty material and assigns it to the active material slot" intent-id="add a fresh material to start designing from scratch in the shader editor">
            <i class="fa-regular fa-copy text-[12px] text-[#ccc] pointer-events-none"></i>
          </div>
          <div class="flex items-center justify-center w-6 border-l border-[#3c3c3c] hover:bg-[#333] cursor-pointer h-full" alt-id="Unlink Material" appearance-id="small button with an X icon for removing the material from the slot" location-id="sixth section of the material slot controls in the Shader Editor header" functionality-id="removes the material assignment from the active material slot" intent-id="detach the current material from the object without deleting the material data">
            <i class="fa-solid fa-xmark text-[12px] text-[#ccc] pointer-events-none"></i>
          </div>
        </div>
      </div>
      
      <div class="flex-1"></div> <!-- Spacer to push the next items to the right -->

      <!-- Right side icons -->
      <div class="flex items-center gap-1.5 pr-2">
        <div class="flex items-center cursor-pointer hover:text-white text-[#ccc] gap-1" alt-id="Snap" appearance-id="magnet icon button with label Snap" location-id="Shader Editor header, right side controls" functionality-id="enables or disables node snapping to the grid in the node graph" intent-id="constrain node movement to the grid for cleaner node layouts">
          <i class="fa-solid fa-magnet text-[13px] pointer-events-none"></i>
        </div>
        <i class="fa-solid fa-chevron-down text-[9px] text-[#888] cursor-pointer hover:text-white" alt-id="Snap Settings" appearance-id="small chevron-down button to the right of the Snap button" location-id="Shader Editor header, right side controls, next to Snap button" functionality-id="opens the snap settings for configuring snap behavior in the node editor" intent-id="customize how nodes snap when being moved in the graph"></i>
        
        <div class="w-[1px] h-4 bg-[#3c3c3c] mx-0.5"></div>
        
        <div class="flex items-center cursor-pointer hover:text-white text-[#ccc] gap-1" alt-id="Toggle Overlays" appearance-id="overlapping circles icon button with label Toggle Overlays" location-id="Shader Editor header, right side controls, after Snap" functionality-id="enables or disables visual overlays such as node wires and minimap" intent-id="show or hide helper overlays in the node editor for a cleaner view">
          <div class="w-[14px] h-[14px] border-[1.5px] border-current rounded-full flex items-center justify-center pointer-events-none relative">
             <div class="w-1 h-1 bg-current rounded-full pointer-events-none absolute right-[-2px] bottom-[-2px]"></div>
          </div>
        </div>
        <i class="fa-solid fa-chevron-down text-[9px] text-[#888] cursor-pointer hover:text-white" alt-id="Overlays Settings" appearance-id="small chevron-down button to the right of the Toggle Overlays button" location-id="Shader Editor header, right side controls, next to Toggle Overlays button" functionality-id="opens the overlays panel for configuring which overlays are shown in the node editor" intent-id="customize which visual overlays are displayed in the shader node graph"></i>
      </div>
    </div>
  </div>

  <div class="flex-1 relative overflow-hidden bg-[#1f1f1f] text-[#e6e6e6]" alt-id="Node graph area" appearance-id="large dark canvas area showing interconnected shader nodes on a grid background" location-id="center area of the Shader Editor panel, below the header" functionality-id="the interactive canvas for viewing, connecting, and editing shader nodes" intent-id="provide the primary workspace for building material shaders through visual node connections">
    <!-- Grid Background -->
    <div class="absolute inset-0 z-0 pointer-events-none" style="background-image: linear-gradient(to right, #242424 1px, transparent 1px), linear-gradient(to bottom, #242424 1px, transparent 1px); background-size: 24px 24px;"></div>

    <!-- Top Left Breadcrumbs -->
    <div class="absolute top-3 left-4 flex items-center gap-1.5 text-[13px] font-medium z-20 text-[#ccc]" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.8);" alt-id="Shader Editor breadcrumbs" appearance-id="breadcrumb path with clickable names separated by right arrows, showing the object and material name" location-id="top-left corner of the Shader Editor node graph area" functionality-id="shows the navigation path to the current material and allows navigating back to parent levels" intent-id="indicate which object and material shader is currently being edited in the node graph">
      <i class="fa-solid fa-cube text-[11px] text-[#ffb366] pointer-events-none"></i>
      <span class="hover:text-white cursor-pointer" alt-id="Breadcrumb: Floor" appearance-id="clickable breadcrumb text showing the parent collection or scene name" location-id="first segment in the Shader Editor breadcrumb path" functionality-id="navigates up to the Floor scene level in the breadcrumb hierarchy" intent-id="return to a higher level in the material data hierarchy">Floor</span>
      <i class="fa-solid fa-chevron-right text-[9px] text-[#888] mx-0.5 pointer-events-none"></i>
      <i class="fa-solid fa-cube text-[11px] text-[#ffb366] pointer-events-none"></i>
      <span class="hover:text-white cursor-pointer" alt-id="Breadcrumb: Plane.005" appearance-id="clickable breadcrumb text showing the object name" location-id="second segment in the Shader Editor breadcrumb path" functionality-id="navigates to the Plane.005 object in the breadcrumb hierarchy" intent-id="select the parent object of the currently edited material">Plane.005</span>
      <i class="fa-solid fa-chevron-right text-[9px] text-[#888] mx-0.5 pointer-events-none"></i>
      <i class="fa-solid fa-circle text-[11px] text-[#ff6666] pointer-events-none"></i>
      <span class="text-white" alt-id="Breadcrumb: Boards - Basketweave" appearance-id="white text showing the current material name as the final active breadcrumb" location-id="last segment in the Shader Editor breadcrumb path, not clickable" functionality-id="shows the name of the currently active material being edited" intent-id="identify the current material whose nodes are displayed in the graph">Boards - Basketweave</span>
      
      <div class="ml-2 w-5 h-5 flex items-center justify-center hover:bg-[#333] rounded cursor-pointer border border-transparent hover:border-[#444]" alt-id="Pin Material" appearance-id="small rounded button with a pin icon" location-id="Shader Editor breadcrumb area, to the right of the material name" functionality-id="pins the current material to keep it displayed when the object selection changes" intent-id="lock the shader editor view to the current material for focused editing">
        <i class="fa-solid fa-thumbtack text-[11px] text-[#ccc] pointer-events-none"></i>
      </div>
    </div>

    <!-- Node Editor Workspace Wrapper -->
    <div class="absolute inset-0 z-10 flex items-center justify-start pl-[56px] pr-[300px] pointer-events-none">
      <div class="relative w-[1200px] max-w-[calc(100%-2rem)] h-[min(720px,calc(100%-1.5rem))] min-h-[520px] pointer-events-auto -translate-y-[20px]">
        <!-- Node Splines (SVG overlay) -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none z-0">
          <!-- SH-Boards.Basketweave BSDF -> Material Output Surface -->
          <path d="M 460 364 C 490 364, 490 404, 520 404" fill="none" stroke="#66cc99" stroke-width="2" />
        </svg>

        <!-- Node Editor Workspace -->
        <div class="absolute inset-0 z-10 w-full h-full">
          <!-- SH-Boards.Basketweave Node -->
          <div class="absolute top-[300px] left-[260px] w-[200px] bg-[#282828] bg-opacity-90 rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#111] flex flex-col text-[12px]" alt-id="Node: SH-Boards.Basketweave" appearance-id="dark rounded node panel with a green header showing the node name, input color and contrast sockets, and an output BSDF socket" location-id="left side of the Shader Editor node graph area" functionality-id="a custom shader group node that takes color and contrast inputs and outputs a BSDF shader" intent-id="represent a reusable shader group for the Boards Basketweave material">
            <div class="bg-[#4a6b4a] text-white px-2 py-1.5 rounded-t-[3px] flex items-center justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
              <div class="flex items-center gap-1.5">
                <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
                <span class="font-medium pointer-events-none">SH-Boards.Basket...</span>
              </div>
            </div>
            <div class="flex flex-col py-1.5">
              <div class="flex justify-end items-center px-2 py-0.5 relative group mt-1">
                <span class="text-[#eee] mr-3 pointer-events-none">BSDF</span>
                <div class="w-3 h-3 rounded-full bg-[#66cc99] border border-[#111] absolute right-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Output socket: BSDF" appearance-id="small green circle on the right edge of the shader node representing the BSDF output" location-id="right side of the SH-Boards.Basketweave node" functionality-id="output connection point for the BSDF shader value from this node" intent-id="connect this shader output to the Surface input of the Material Output node"></div>
              </div>
              <div class="px-2 pt-2 pb-1 flex flex-col gap-1.5 mt-2">
                <div class="bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1 flex items-center justify-between text-[#ccc] cursor-pointer" alt-id="Boards Basketweave select" appearance-id="dropdown button showing the node group name and a chevron for browsing group presets" location-id="inside the SH-Boards.Basketweave shader node" functionality-id="opens a browser for selecting different shader group node presets" intent-id="choose or switch the shader group node to a different preset">
                  <div class="flex items-center gap-1.5 pointer-events-none">
                    <i class="fa-solid fa-circle-half-stroke text-[10px] pointer-events-none"></i>
                    <i class="fa-solid fa-chevron-down text-[8px] opacity-60 pointer-events-none"></i>
                    <span class="text-[12px] pointer-events-none truncate max-w-[80px]">SH-Boar...</span>
                  </div>
                  <i class="fa-solid fa-shield text-[10px] opacity-60 pointer-events-none"></i>
                </div>
              </div>
              <div class="flex items-center px-2 py-0.5 relative group mt-1">
                <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Input socket: Color" appearance-id="small yellow-orange circle on the left edge of the shader node representing the Color input" location-id="left side of the SH-Boards.Basketweave node, first input socket" functionality-id="input connection point that accepts a Color value for the shader" intent-id="connect a color value or texture to control the board material color"></div>
                <span class="text-[#ccc] ml-3 flex-1 pointer-events-none">Color</span>
                <div class="w-[60px] h-[18px] bg-[#996633] border border-[#222] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] cursor-pointer hover:bg-[#a57340]" alt-id="Node Color Picker" appearance-id="small rectangular color swatch showing the current color value in warm brown" location-id="inside the SH-Boards.Basketweave node, next to the Color input socket" functionality-id="displays and allows changing the input color value by clicking to open a color picker" intent-id="set the base color for the Boards Basketweave material"></div>
              </div>
              <div class="flex items-center px-2 py-0.5 relative group mt-1">
                <div class="w-3 h-3 rounded-full bg-[#a0a0a0] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Input socket: Contrast" appearance-id="small gray circle on the left edge of the shader node representing the Contrast input" location-id="left side of the SH-Boards.Basketweave node, second input socket" functionality-id="input connection point that accepts a numeric value for the contrast" intent-id="connect a value to control the contrast level of the board material shader"></div>
                <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[18px] flex items-center justify-between px-2 ml-3 cursor-ew-resize hover:bg-[#5a5a5a]" alt-id="Node Contrast slider" appearance-id="dark horizontal slider showing a numeric contrast value with drag handles" location-id="inside the SH-Boards.Basketweave node, next to the Contrast input socket" functionality-id="allows dragging to adjust the contrast value for the shader" intent-id="fine-tune the contrast of the Boards Basketweave material using a numeric slider">
                   <span class="text-[11px] text-[#ccc] pointer-events-none">Contrast</span>
                   <span class="text-[11px] text-[#eee] pointer-events-none">1.000</span>
                </div>
              </div>
            </div>
            <!-- Stack shadow lines -->
            <div class="absolute w-[180px] h-[4px] bg-[#282828] border border-[#111] rounded-b-[4px] bottom-[-4px] left-[10px] z-[-1]"></div>
            <div class="absolute w-[160px] h-[4px] bg-[#282828] border border-[#111] rounded-b-[4px] bottom-[-8px] left-[20px] z-[-2]"></div>
          </div>

          <!-- Material Output Node -->
          <div class="absolute top-[320px] left-[520px] w-[200px] bg-[#282828] bg-opacity-90 rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#111] flex flex-col text-[12px]" alt-id="Node: Material Output" appearance-id="dark rounded node panel with a green header labeled Material Output with Surface, Volume, Displacement, and Thickness input sockets" location-id="right side of the Shader Editor node graph area, to the right of the SH-Boards.Basketweave node" functionality-id="the final output node that connects shader results to be rendered by the render engine" intent-id="receive the final shader from connected nodes and output to the Blender render engine">
            <div class="bg-[#8c4040] text-white px-2 py-1.5 rounded-t-[3px] flex items-center justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
              <div class="flex items-center gap-1.5">
                <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
                <span class="font-medium pointer-events-none">Material Output</span>
              </div>
            </div>
            <div class="flex flex-col py-1.5">
              <div class="px-2 pt-1 pb-1 flex flex-col gap-1.5">
                <div class="bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1 flex items-center justify-between text-[#ccc] cursor-pointer" alt-id="Material Output Target" appearance-id="dropdown button showing the render engine target such as All" location-id="inside the Material Output node" functionality-id="selects which render engine target this material output applies to" intent-id="configure whether the material output applies to Eevee, Cycles, or all render engines">
                  <span class="text-[12px] pointer-events-none">All</span>
                  <i class="fa-solid fa-chevron-down text-[10px] opacity-60 pointer-events-none"></i>
                </div>
              </div>
              <div class="flex items-center px-2 py-0.5 relative group mt-1">
                <div class="w-3 h-3 rounded-full bg-[#66cc99] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Input socket: Surface" appearance-id="small green circle on the left edge of the Material Output node representing the Surface input" location-id="first input socket of the Material Output node" functionality-id="input connection point for the main surface shader (BSDF) to be rendered" intent-id="connect the primary material shader to determine the object surface appearance"></div>
                <span class="text-[#eee] ml-3 pointer-events-none">Surface</span>
              </div>
              <div class="flex items-center px-2 py-0.5 relative group mt-1">
                <div class="w-3 h-3 rounded-full bg-[#66cc99] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Input socket: Volume" appearance-id="small green circle on the left edge of the Material Output node representing the Volume input" location-id="second input socket of the Material Output node" functionality-id="input connection point for a volume shader to be rendered inside the object" intent-id="connect a volumetric shader for participating media like smoke and fog effects"></div>
                <span class="text-[#ccc] ml-3 pointer-events-none">Volume</span>
              </div>
              <div class="flex items-center px-2 py-0.5 relative group mt-1">
                <div class="w-3 h-3 rounded-full bg-[#8c66ff] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Input socket: Displacement" appearance-id="small purple circle on the left edge of the Material Output node representing the Displacement input" location-id="third input socket of the Material Output node" functionality-id="input connection point for a displacement shader to offset the surface geometry" intent-id="connect a displacement value to add surface detail through mesh displacement"></div>
                <span class="text-[#ccc] ml-3 pointer-events-none">Displacement</span>
              </div>
              <div class="flex items-center px-2 py-0.5 relative group mt-1">
                <div class="w-3 h-3 rounded-full bg-[#a0a0a0] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Input socket: Thickness" appearance-id="small gray circle on the left edge of the Material Output node representing the Thickness input" location-id="fourth input socket of the Material Output node" functionality-id="input connection point for a thickness value used by subsurface scattering" intent-id="connect a thickness map to improve subsurface scattering approximation"></div>
                <span class="text-[#ccc] ml-3 pointer-events-none">Thickness</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Sidebar (N-panel) -->
    <div class="absolute right-0 top-0 bottom-0 flex">
      <!-- Content Area -->
      <div class="w-[240px] bg-[#282828] border-l border-[#1f1f1f] flex flex-col z-20">
        {#if activeSidebarTab === 'tool'}
          <div class="flex-1 overflow-y-auto hide-scrollbar" alt-id="Sidebar Tool tab content" appearance-id="sidebar panel showing the Tool tab content with collapsible accordion sections" location-id="right sidebar of the Shader Editor, visible when Tool tab is active" functionality-id="displays tool-specific settings for the active node editor tool" intent-id="access tool options and settings for the currently active node tool">
            <div class="flex flex-col">
              <!-- Active Tool -->
              <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] m-[5px]">
                <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={() => isToolExpanded = !isToolExpanded} alt-id="Active Tool accordion" appearance-id="collapsible panel header labeled Active Tool with an expand/collapse arrow" location-id="inside the Shader Editor right sidebar Tool tab" functionality-id="expands or collapses the Active Tool settings section" intent-id="access settings specific to the currently active tool in the shader editor">
                  <div class="flex items-center gap-2">
                    {#if isToolExpanded}
                      <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                    {:else}
                      <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                    {/if}
                    <span class="text-[#eee] text-[13px] font-medium">Active Tool</span>
                  </div>
                  <div class="flex items-center gap-[2.5px] opacity-40">
                    <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                    <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                    <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                    <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  </div>
                </div>
                
                {#if isToolExpanded}
                  <div class="flex flex-col gap-1.5 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                    <div class="flex items-center gap-2 bg-[#1a1a1a] border border-[#111] rounded-[3px] p-2">
                       <i class="fa-solid fa-square-dashed text-[12px] text-[#ccc]"></i>
                       <span class="text-[13px] text-[#eee]">Select Box</span>
                    </div>
                  </div>
                {/if}
              </div>
            </div>
          </div>
        {:else}
          <div class="flex-1 overflow-y-auto hide-scrollbar" alt-id="Sidebar {activeSidebarTab} tab content" appearance-id="sidebar panel showing the content of the currently active tab" location-id="right sidebar of the Shader Editor, visible when a non-Tool tab is active" functionality-id="displays the content for the active sidebar tab such as Node, View, or Options" intent-id="access the settings and information relevant to the currently selected sidebar tab"></div>
        {/if}
      </div>
      
      <!-- Tabs -->
      <div class="w-[30px] bg-[#1a1a1a] border-l border-[#1f1f1f] flex flex-col z-20">
        <div class="flex-1 flex flex-col justify-start w-full">
          <div class="w-[80px] h-[30px] origin-top-left rotate-90 translate-x-[30px] flex items-center justify-center cursor-pointer text-[12px] font-medium {activeSidebarTab === 'node' ? 'text-white' : 'text-[#888] hover:text-[#ccc]'}" on:click={() => setSidebarTab('node')} alt-id="Node tab" appearance-id="vertical rotated tab label reading Node" location-id="first tab in the Shader Editor right sidebar tab strip" functionality-id="switches the sidebar to show Node-specific properties and settings" intent-id="access node-level properties like label, color, and custom properties">
            Node
          </div>
          <div class="w-[80px] h-[30px] origin-top-left rotate-90 translate-x-[30px] translate-y-[80px] flex items-center justify-center cursor-pointer text-[12px] font-medium {activeSidebarTab === 'tool' ? 'text-white' : 'text-[#888] hover:text-[#ccc]'}" on:click={() => setSidebarTab('tool')} alt-id="Tool tab" appearance-id="vertical rotated tab label reading Tool" location-id="second tab in the Shader Editor right sidebar tab strip" functionality-id="switches the sidebar to show active tool settings" intent-id="access settings for the currently selected node editing tool">
            Tool
          </div>
          <div class="w-[80px] h-[30px] origin-top-left rotate-90 translate-x-[30px] translate-y-[160px] flex items-center justify-center cursor-pointer text-[12px] font-medium {activeSidebarTab === 'view' ? 'text-white' : 'text-[#888] hover:text-[#ccc]'}" on:click={() => setSidebarTab('view')} alt-id="View tab" appearance-id="vertical rotated tab label reading View" location-id="third tab in the Shader Editor right sidebar tab strip" functionality-id="switches the sidebar to show view settings such as minimap and annotations" intent-id="configure the display settings and annotations for the shader editor view">
            View
          </div>
          <div class="w-[80px] h-[30px] origin-top-left rotate-90 translate-x-[30px] translate-y-[240px] flex items-center justify-center cursor-pointer text-[12px] font-medium {activeSidebarTab === 'options' ? 'text-white' : 'text-[#888] hover:text-[#ccc]'}" on:click={() => setSidebarTab('options')} alt-id="Options tab" appearance-id="vertical rotated tab label reading Options" location-id="fourth tab in the Shader Editor right sidebar tab strip" functionality-id="switches the sidebar to show general options for the shader editor" intent-id="configure overall shader editor behavior and preferences">
            Options
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
