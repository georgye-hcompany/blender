<script>
  import { onMount } from 'svelte';
  import EditorSelector from './EditorSelector.svelte';
  export let currentEditor = 'compositor';
  export let windowId = '';

  let isNodePanelExpanded = true;
  let isPropertiesPanelExpanded = true;
  let isCustomPropertiesPanelExpanded = false;
  let isGlareCollapsed = false;
  let isToolDropdownOpen = false;
  let isAnnotateDropdownOpen = false;
  let isFilterTypeDropdownOpen = false;
  let isColorPickerOpen = false;
  let hasCustomProperty = false;

  onMount(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const openParam = urlParams.get('open') || '';
      if (openParam.includes('node-panel-collapsed')) {
        isNodePanelExpanded = false;
      }
      if (openParam.includes('properties-panel-collapsed')) {
        isPropertiesPanelExpanded = false;
      }
      if (openParam.includes('custom-properties-panel-expanded')) {
        isCustomPropertiesPanelExpanded = true;
      }
      if (openParam.includes('glare-node-collapsed')) {
        isGlareCollapsed = true;
      }
      if (openParam.includes('compositor-tool-dropdown')) {
        isToolDropdownOpen = true;
      }
      if (openParam.includes('compositor-annotate-dropdown')) {
        isAnnotateDropdownOpen = true;
      }
      if (openParam.includes('compositor-filter-type-dropdown')) {
        isFilterTypeDropdownOpen = true;
      }
      if (openParam.includes('compositor-color-picker')) {
        isColorPickerOpen = true;
      }
      if (openParam.includes('compositor-custom-property-added')) {
        hasCustomProperty = true;
      }
    }
  });

  function updateOpenParam() {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const openStates = [];
      if (!isNodePanelExpanded) openStates.push('node-panel-collapsed');
      if (!isPropertiesPanelExpanded) openStates.push('properties-panel-collapsed');
      if (isCustomPropertiesPanelExpanded) openStates.push('custom-properties-panel-expanded');
      if (isGlareCollapsed) openStates.push('glare-node-collapsed');
      if (isToolDropdownOpen) openStates.push('compositor-tool-dropdown');
      if (isAnnotateDropdownOpen) openStates.push('compositor-annotate-dropdown');
      if (isFilterTypeDropdownOpen) openStates.push('compositor-filter-type-dropdown');
      if (isColorPickerOpen) openStates.push('compositor-color-picker');
      if (hasCustomProperty) openStates.push('compositor-custom-property-added');
      
      if (openStates.length > 0) {
        url.searchParams.set('open', openStates.join(','));
      } else {
        url.searchParams.delete('open');
      }
      const search = url.searchParams.toString().replace(/%2C/g, ',');
      window.history.replaceState({}, '', `${url.pathname}?${search}`);
    }
  }

  function toggleNodePanel() {
    isNodePanelExpanded = !isNodePanelExpanded;
    updateOpenParam();
  }

  function togglePropertiesPanel() {
    isPropertiesPanelExpanded = !isPropertiesPanelExpanded;
    updateOpenParam();
  }

  function toggleCustomPropertiesPanel() {
    isCustomPropertiesPanelExpanded = !isCustomPropertiesPanelExpanded;
    updateOpenParam();
  }

  function toggleGlareNode() {
    isGlareCollapsed = !isGlareCollapsed;
    updateOpenParam();
  }

  function toggleToolDropdown() {
    isToolDropdownOpen = !isToolDropdownOpen;
    updateOpenParam();
  }

  function toggleAnnotateDropdown() {
    isAnnotateDropdownOpen = !isAnnotateDropdownOpen;
    updateOpenParam();
  }

  function toggleFilterTypeDropdown() {
    isFilterTypeDropdownOpen = !isFilterTypeDropdownOpen;
    updateOpenParam();
  }

  function toggleColorPicker() {
    isColorPickerOpen = !isColorPickerOpen;
    updateOpenParam();
  }

  function toggleCustomProperty() {
    hasCustomProperty = !hasCustomProperty;
    updateOpenParam();
  }
</script>

<div class="h-full flex flex-col bg-[#1c1c1c] text-[#e6e6e6]" alt-id="Compositor editor panel">
  {#if isToolDropdownOpen}
    <div class="fixed inset-0 z-40 bg-transparent" on:click={toggleToolDropdown} alt-id="compositor tool dropdown overlay"></div>
  {/if}
  {#if isAnnotateDropdownOpen}
    <div class="fixed inset-0 z-40 bg-transparent" on:click={toggleAnnotateDropdown} alt-id="compositor annotate dropdown overlay"></div>
  {/if}
  {#if isFilterTypeDropdownOpen}
    <div class="fixed inset-0 z-40 bg-transparent" on:click={toggleFilterTypeDropdown} alt-id="compositor filter type dropdown overlay"></div>
  {/if}
  {#if isColorPickerOpen}
    <div class="fixed inset-0 z-40 bg-black/10" on:click={toggleColorPicker} alt-id="compositor color picker overlay"></div>
  {/if}
  <!-- Header -->
  <div class="h-10 bg-[#282828] border-b border-[#1f1f1f] flex items-center px-2 justify-between text-[13px]" alt-id="Compositor header">
    <!-- Left side -->
    <div class="flex items-center gap-2">
      <EditorSelector bind:editor={currentEditor} windowId={windowId} />
      
      <!-- Scene Dropdown -->
      <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1 text-[#ccc] gap-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] cursor-pointer hover:text-white ml-1" alt-id="Scene selection dropdown">
        <i class="fa-solid fa-shapes text-[12px] opacity-80 pointer-events-none"></i>
        <span class="text-[13px] pointer-events-none">Scene</span>
        <i class="fa-solid fa-chevron-down text-[10px] opacity-60 ml-1 pointer-events-none"></i>
      </div>
    </div>
    
    <!-- Right side -->
    <div class="flex items-center gap-3">
      <!-- Middle tools -->
      <div class="flex items-center gap-1">
        <!-- Backdrop dropdown -->
        <div class="flex items-center bg-[#3d3d3d] border border-[#1f1f1f] rounded-[3px] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mr-1">
          <div class="hover:bg-[#4d4d4d] text-[#ccc] hover:text-white px-3 py-[3px] rounded-l-[3px] cursor-pointer text-[13px] flex items-center" alt-id="Backdrop toggle">
            Backdrop
          </div>
          <div class="border-l border-[#1f1f1f] hover:bg-[#4d4d4d] px-1 py-[3px] rounded-r-[3px] cursor-pointer" alt-id="Backdrop options dropdown">
            <i class="fa-solid fa-image-polaroid text-[14px] text-[#ccc] opacity-70 pointer-events-none"></i>
            <i class="fa-solid fa-chevron-down text-[9px] text-[#a0a0a0] ml-0.5 pointer-events-none"></i>
          </div>
        </div>

        <!-- Transform options -->
        <div class="flex items-center text-[#a0a0a0]">
          <div class="flex items-center gap-1 cursor-pointer text-white bg-[#4772b3] border border-[#4772b3] px-2 py-[3px] rounded-l" alt-id="Transform tool options">
            <i class="fa-solid fa-location-arrow text-[13px] transform -rotate-45 -translate-y-[1px] pointer-events-none"></i>
          </div>
          <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-1 py-[3px] rounded-r border-l-0 mr-1" alt-id="Transform tool dropdown">
            <i class="fa-solid fa-chevron-down text-[9px] pointer-events-none"></i>
          </div>
        </div>

        <!-- Snapping -->
        <div class="flex items-center text-[#a0a0a0]">
          <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[3px] rounded" alt-id="Snapping toggle">
            <i class="fa-solid fa-magnet text-[13px] transform -scale-x-100 pointer-events-none"></i>
          </div>
        </div>

        <!-- Overlays -->
        <div class="flex items-center text-[#a0a0a0] ml-1">
          <div class="flex items-center gap-1 cursor-pointer text-white bg-[#4772b3] border border-[#4772b3] px-2 py-[3px] rounded-l" alt-id="Overlays toggle">
            <div class="relative pointer-events-none">
              <i class="fa-solid fa-circle text-[14px] opacity-20 pointer-events-none"></i>
              <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div class="w-1.5 h-1.5 rounded-full border-[1.5px] border-white relative left-[-2px]"></div>
                <div class="w-1.5 h-1.5 rounded-full border-[1.5px] border-white relative right-[-2px]"></div>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-1 py-[3px] rounded-r border-l-0 mr-1" alt-id="Overlays dropdown">
            <i class="fa-solid fa-chevron-down text-[9px] pointer-events-none"></i>
          </div>
        </div>
      </div>

      <!-- Expand Toolbar -->
      <div class="flex items-center text-[#ccc] hover:text-white cursor-pointer ml-2" alt-id="Expand toolbar">
        <i class="fa-solid fa-chevron-down text-[12px] pointer-events-none"></i>
      </div>
    </div>
  </div>

  <!-- Main View -->
  <div class="flex-1 relative overflow-hidden flex" alt-id="Compositor main view">
    <!-- Grid approximation -->
    <div class="absolute inset-0 opacity-20 pointer-events-none" style="background-image: radial-gradient(#aaa 1px, transparent 1px); background-size: 20px 20px;"></div>

    <!-- Left Toolbar -->
    <div class="absolute left-0 top-2 flex flex-col gap-[6px] z-20 pl-[4px] w-[50px]" alt-id="Compositor left toolbar">
      
      <!-- Group 1: Select Box -->
      <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] overflow-visible relative z-30">
        <!-- The button itself (now Select Lasso) -->
        <div class="w-full h-[50px] bg-[#4772b3] flex items-center justify-center text-white cursor-pointer relative rounded-[4px] z-50" on:click={toggleToolDropdown} alt-id="Select Lasso tool, currently active, opens selection tools dropdown">
          <!-- Lasso Icon -->
          <div class="relative w-6 h-6 flex items-center justify-center pointer-events-none">
            <svg viewBox="0 0 24 24" class="w-5 h-5 absolute pointer-events-none" fill="none" stroke="#ffcc00" stroke-width="1.5" stroke-dasharray="3 3">
              <path d="M7 6 C 2 8, 4 18, 10 20 C 16 22, 22 14, 18 8 C 14 2, 10 5, 7 6 Z"/>
            </svg>
            <i class="fa-solid fa-arrow-pointer text-[12px] text-white shadow-sm transform -translate-x-1 translate-y-1 pointer-events-none absolute"></i>
          </div>
          <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-b-[6px] border-b-white/80 pointer-events-none"></div>
        </div>

        {#if isToolDropdownOpen}
          <!-- Dropdown Menu -->
          <div class="absolute left-full top-0 ml-1 w-[200px] bg-[#1d1d1d] border border-[#2a2a2a] rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.8)] z-50 flex flex-col p-1 text-[13px] text-[#ccc]" alt-id="Selection tools dropdown menu">
            <!-- Tweak -->
            <div class="flex items-center gap-3 px-3 py-2 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleToolDropdown} alt-id="Tweak selection tool, first element in selection tools dropdown">
              <div class="relative w-5 h-5 flex items-center justify-center pointer-events-none">
                <i class="fa-solid fa-arrow-pointer text-[14px] transform -translate-x-1 -translate-y-1 pointer-events-none"></i>
                <i class="fa-solid fa-arrows-up-down-left-right text-[10px] absolute bottom-0 right-0 pointer-events-none"></i>
              </div>
              <span class="pointer-events-none">Tweak</span>
            </div>
            
            <!-- Select Box -->
            <div class="flex items-center gap-3 px-3 py-2 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleToolDropdown} alt-id="Select Box selection tool, second element in selection tools dropdown">
              <div class="relative w-5 h-5 flex items-center justify-center border border-dashed border-[#ffcc00] pointer-events-none">
                <i class="fa-solid fa-arrow-pointer text-[12px] transform -translate-x-0.5 pointer-events-none"></i>
              </div>
              <span class="pointer-events-none">Select Box</span>
            </div>
            
            <!-- Select Lasso (Active) -->
            <div class="flex items-center gap-3 px-3 py-2 bg-[#4772b3] text-white rounded-[3px] cursor-pointer" on:click={toggleToolDropdown} alt-id="Select Lasso selection tool, active, third element in selection tools dropdown">
              <div class="relative w-5 h-5 flex items-center justify-center pointer-events-none">
                <svg viewBox="0 0 24 24" class="w-[22px] h-[22px] absolute pointer-events-none" fill="none" stroke="#ffcc00" stroke-width="1.5" stroke-dasharray="3 3">
                  <path d="M7 6 C 2 8, 4 18, 10 20 C 16 22, 22 14, 18 8 C 14 2, 10 5, 7 6 Z"/>
                </svg>
                <i class="fa-solid fa-arrow-pointer text-[12px] transform -translate-x-1 translate-y-1 pointer-events-none absolute"></i>
              </div>
              <span class="pointer-events-none">Select Lasso</span>
            </div>
            
            <!-- Select Circle -->
            <div class="flex items-center gap-3 px-3 py-2 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleToolDropdown} alt-id="Select Circle selection tool, fourth element in selection tools dropdown">
              <div class="relative w-5 h-5 flex items-center justify-center pointer-events-none">
                <div class="w-full h-full rounded-full border border-dashed border-[#ffcc00] absolute pointer-events-none"></div>
                <i class="fa-solid fa-arrow-pointer text-[12px] transform -translate-x-0.5 pointer-events-none"></i>
              </div>
              <span class="pointer-events-none">Select Circle</span>
            </div>
          </div>
        {/if}
      </div>

      <!-- Group 2: Annotate -->
      <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] overflow-visible relative z-30">
        <div class="w-full h-[50px] bg-[#4772b3] flex items-center justify-center text-white cursor-pointer relative rounded-[4px]" on:click={toggleAnnotateDropdown} alt-id="Annotate tool, currently active, opens annotate tools dropdown">
          <div class="relative flex flex-col items-center pointer-events-none">
            <i class="fa-solid fa-pen text-[16px] transform rotate-45 -translate-y-0.5 pointer-events-none"></i>
            <svg width="24" height="6" viewBox="0 0 24 6" fill="none" stroke="#66cc99" stroke-width="2" class="mt-0.5 pointer-events-none">
              <path d="M 2 4 Q 7 0, 12 3 T 22 2" stroke-linecap="round" />
            </svg>
          </div>
          <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-b-[6px] border-b-white/80 pointer-events-none"></div>
        </div>

        {#if isAnnotateDropdownOpen}
          <!-- Dropdown Menu -->
          <div class="absolute left-full top-0 ml-1 w-[200px] bg-[#1d1d1d] border border-[#2a2a2a] rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.8)] z-50 flex flex-col p-1 text-[13px] text-[#ccc]" alt-id="Annotate tools dropdown menu">
            
            <!-- Annotate (Active) -->
            <div class="flex items-center gap-3 px-3 py-2 bg-[#4772b3] text-white rounded-[3px] cursor-pointer" on:click={toggleAnnotateDropdown} alt-id="Annotate tool, active, first element in annotate tools dropdown">
              <div class="relative w-5 h-5 flex flex-col items-center justify-center pointer-events-none">
                <i class="fa-solid fa-pen text-[14px] transform rotate-45 -translate-y-1 pointer-events-none"></i>
                <svg width="20" height="5" viewBox="0 0 24 6" fill="none" stroke="#66cc99" stroke-width="2.5" class="mt-0.5 pointer-events-none">
                  <path d="M 2 4 Q 7 0, 12 3 T 22 2" stroke-linecap="round" />
                </svg>
              </div>
              <span class="pointer-events-none font-medium"><u class="pointer-events-none underline-offset-2 decoration-1 text-white">A</u>nnotate</span>
            </div>
            
            <!-- Annotate Line -->
            <div class="flex items-center gap-3 px-3 py-2 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleAnnotateDropdown} alt-id="Annotate Line tool, second element in annotate tools dropdown">
              <div class="relative w-5 h-5 flex flex-col items-center justify-center pointer-events-none">
                <i class="fa-solid fa-pen text-[14px] transform rotate-45 -translate-y-1 pointer-events-none text-[#ccc]"></i>
                <div class="w-[20px] h-[2px] bg-[#66cc99] rounded-full mt-1 pointer-events-none"></div>
              </div>
              <span class="pointer-events-none font-medium">Annotate <u class="pointer-events-none underline-offset-2 decoration-1 text-[#ccc]">L</u>ine</span>
            </div>
            
            <!-- Annotate Polygon -->
            <div class="flex items-center gap-3 px-3 py-2 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleAnnotateDropdown} alt-id="Annotate Polygon tool, third element in annotate tools dropdown">
              <div class="relative w-5 h-5 flex flex-col items-center justify-center pointer-events-none">
                <i class="fa-solid fa-pen text-[14px] transform rotate-45 -translate-y-1 pointer-events-none text-[#ccc]"></i>
                <svg width="20" height="6" viewBox="0 0 24 8" fill="none" stroke="#66cc99" stroke-width="2.5" class="mt-0.5 pointer-events-none">
                  <path d="M 2 6 L 8 2 L 14 6 L 22 2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <span class="pointer-events-none font-medium">Annotate <u class="pointer-events-none underline-offset-2 decoration-1 text-[#ccc]">P</u>olygon</span>
            </div>
            
            <!-- Annotate Eraser -->
            <div class="flex items-center gap-3 px-3 py-2 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleAnnotateDropdown} alt-id="Annotate Eraser tool, fourth element in annotate tools dropdown">
              <div class="relative w-5 h-5 flex flex-col items-center justify-center pointer-events-none">
                <i class="fa-solid fa-pen text-[14px] transform rotate-45 -translate-y-1 pointer-events-none text-[#ccc]"></i>
                <svg width="20" height="5" viewBox="0 0 24 6" fill="none" stroke="#d97373" stroke-width="2.5" class="mt-0.5 pointer-events-none">
                  <path d="M 2 4 Q 7 0, 12 3 T 22 2" stroke-linecap="round" />
                </svg>
              </div>
              <span class="pointer-events-none font-medium">Annotate <u class="pointer-events-none underline-offset-2 decoration-1 text-[#ccc]">E</u>raser</span>
            </div>
          </div>
        {/if}
      </div>

      <!-- Group 3: Node Links -->
      <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] overflow-hidden">
        <!-- Cut Links -->
        <div class="w-full h-[50px] border-b border-[#1f1f1f] hover:bg-[#444] flex items-center justify-center text-[#ccc] cursor-pointer relative" alt-id="Links Cut tool">
          <div class="relative flex items-center justify-center w-full h-full pointer-events-none">
            <div class="absolute w-[24px] h-[2px] bg-[#d97373] z-0 pointer-events-none"></div>
            <i class="fa-solid fa-scissors text-[16px] text-[#eee] transform rotate-90 z-10 pointer-events-none" style="text-shadow: 0 0 4px #282828, 0 0 4px #282828;"></i>
          </div>
        </div>
        <!-- Mute Links -->
        <div class="w-full h-[50px] border-b border-[#1f1f1f] hover:bg-[#444] flex items-center justify-center text-[#ccc] cursor-pointer relative" alt-id="Mute Links tool">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#eee" stroke-width="1.5" class="pointer-events-none">
            <path d="M 2 18 Q 12 18, 12 12 T 22 6" stroke-dasharray="3 3" />
            <line x1="10" y1="7" x2="14" y2="17" stroke="#d97373" stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>
        <!-- Reroute Links -->
        <div class="w-full h-[50px] hover:bg-[#444] flex items-center justify-center text-[#ccc] cursor-pointer relative" alt-id="Add Reroute tool">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#eee" stroke-width="1.5" class="pointer-events-none">
            <path d="M 2 18 Q 12 18, 12 12 T 22 6" />
            <circle cx="12" cy="12" r="2.5" stroke="#66cc99" fill="#282828" stroke-width="1.5" />
            <path d="M 7 4 L 7 10 M 4 7 L 10 7" stroke="#66cc99" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Top Left Breadcrumbs -->
    <div class="absolute top-3 left-[90px] flex items-center gap-1.5 text-[14px] font-medium z-10 text-[#ccc]" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.8);" alt-id="Compositor breadcrumbs">
      <i class="fa-solid fa-cube text-[12px] text-[#a0a0a0]"></i>
      <span class="hover:text-white cursor-pointer" alt-id="Cube Domain breadcrumb">Cube Domain</span>
      <i class="fa-solid fa-chevron-right text-[10px] text-[#888] mx-0.5"></i>
      <span class="text-white">Compositing Nodetree</span>
    </div>

    <!-- Node Editor Workspace Wrapper -->
    <div class="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
      <div class="relative w-[1200px] h-[600px] pointer-events-auto transform -translate-x-[20px] -translate-y-[20px]">
        <!-- Node Splines (SVG overlay) -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none z-0">
          <!-- Render Layers -> Filter -->
          <path d="M 440 224 C 480 224, 480 244, 520 244" fill="none" stroke="#ccaa33" stroke-width="2" />
          
          {#if isGlareCollapsed}
          <!-- Filter -> Glare -->
          <path d="M 680 244 C 710 244, 710 214, 740 214" fill="none" stroke="#ccaa33" stroke-width="2" />
          <!-- Glare -> Viewer -->
          <path d="M 880 214 C 930 214, 930 174, 980 174" fill="none" stroke="#ccaa33" stroke-width="2" />
          <!-- Glare -> Group Output -->
          <path d="M 880 214 C 930 214, 930 354, 980 354" fill="none" stroke="#ccaa33" stroke-width="2" />
          {:else}
          <!-- Filter -> Glare -->
          <path d="M 680 244 C 710 244, 710 244, 740 244" fill="none" stroke="#ccaa33" stroke-width="2" />
          <!-- Glare -> Viewer -->
          <path d="M 900 244 C 940 244, 940 174, 980 174" fill="none" stroke="#ccaa33" stroke-width="2" />
          <!-- Glare -> Group Output -->
          <path d="M 900 244 C 940 244, 940 354, 980 354" fill="none" stroke="#ccaa33" stroke-width="2" />
          {/if}
        </svg>

        <!-- Node Editor Workspace -->
        <div class="absolute inset-0 z-10 w-full h-full">
      <!-- Render Layers Node -->
      <div class="absolute top-[180px] left-[280px] w-[160px] bg-[#282828] bg-opacity-90 rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#111] flex flex-col text-[12px]" alt-id="Render Layers node">
        <div class="bg-[#a64040] text-white px-2 py-1.5 rounded-t-[3px] flex items-center gap-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
          <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
          <span class="font-medium flex-1 pointer-events-none">Render Layers</span>
          <i class="fa-solid fa-camera text-[12px] opacity-80 pointer-events-none"></i>
        </div>
        <div class="flex flex-col py-1.5">
          <div class="flex justify-end items-center px-2 py-0.5 relative group">
            <span class="text-[#ccc] mr-3 pointer-events-none">Image</span>
            <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute right-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Render Layers output socket: Image"></div>
          </div>
          <div class="flex justify-end items-center px-2 py-0.5 relative group">
            <span class="text-[#ccc] mr-3 pointer-events-none">Alpha</span>
            <div class="w-3 h-3 rounded-full bg-[#aaaaaa] border border-[#111] absolute right-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Render Layers output socket: Alpha"></div>
          </div>
          <div class="flex justify-end items-center px-2 py-0.5 relative group">
            <span class="text-[#ccc] mr-3 pointer-events-none">Noisy Image</span>
            <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute right-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Render Layers output socket: Noisy Image"></div>
          </div>
          <div class="px-2 pt-2 pb-1 flex flex-col gap-1.5">
            <div class="bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1 flex items-center justify-between text-[#ccc] cursor-pointer" alt-id="Render Layers view layer selection: Cube Domain">
              <div class="flex items-center gap-1.5 pointer-events-none">
                <i class="fa-solid fa-cube text-[10px] text-[#4772b3] pointer-events-none"></i>
                <span class="text-[12px] pointer-events-none">Cube Domain</span>
              </div>
              <i class="fa-solid fa-xmark text-[10px] opacity-60 pointer-events-none"></i>
            </div>
            <div class="bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1 flex items-center justify-between text-[#ccc] cursor-pointer" alt-id="Render Layers scene selection: Studio">
              <span class="text-[12px] pointer-events-none">Studio</span>
              <i class="fa-solid fa-chevron-down text-[10px] opacity-60 pointer-events-none"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Filter Node -->
      <div class="absolute top-[200px] left-[520px] w-[160px] bg-[#282828] bg-opacity-90 rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#111] flex flex-col text-[12px]" alt-id="Filter node">
        <div class="bg-[#6c4080] text-white px-2 py-1.5 rounded-t-[3px] flex items-center gap-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
          <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
          <span class="font-medium flex-1 pointer-events-none">Filter</span>
        </div>
        <div class="flex flex-col py-1.5">
          <div class="flex justify-between items-center px-2 py-0.5 relative group">
            <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Filter input socket: Image"></div>
            <span class="text-[#ccc] ml-3 pointer-events-none">Image</span>
            <span class="text-[#ccc] mr-3 pointer-events-none">Image</span>
            <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute right-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Filter output socket: Image"></div>
          </div>
          <div class="flex items-center px-2 py-1 relative group mt-1">
            <div class="w-3 h-3 rounded-full bg-[#aaaaaa] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Filter input socket: Factor"></div>
            <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1 w-full ml-3 cursor-text" alt-id="Filter factor input: 0.100">
              <span class="text-[#aaa] mr-2 pointer-events-none">Factor</span>
              <span class="flex-1 text-right text-white pointer-events-none">0.100</span>
            </div>
          </div>
          <div class="px-2 pt-1 pb-1 relative">
            <div class="{isFilterTypeDropdownOpen ? 'bg-[#4772b3] text-white' : 'bg-[#1a1a1a] text-[#ccc]'} border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1 flex items-center justify-between cursor-pointer" on:click={toggleFilterTypeDropdown} alt-id="Filter type selection: Soften">
              <span class="text-[12px] pointer-events-none">Soften</span>
              <i class="fa-solid fa-chevron-down text-[10px] {isFilterTypeDropdownOpen ? 'opacity-100' : 'opacity-60'} pointer-events-none"></i>
            </div>
            
            {#if isFilterTypeDropdownOpen}
              <!-- Dropdown Menu -->
              <div class="absolute left-2 top-[32px] w-[200px] bg-[#1d1d1d] border border-[#2a2a2a] rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.8)] z-50 flex flex-col p-1 text-[13px] text-[#ccc]" alt-id="Filter type dropdown menu">
                <div class="px-3 py-1.5 text-[#aaa] border-b border-[#333] mb-1" alt-id="Filter type dropdown header: Type">
                  <span class="pointer-events-none">Type</span>
                </div>
                
                <div class="flex items-center px-3 py-1 bg-[#4772b3] text-white rounded-[3px] cursor-pointer" on:click={toggleFilterTypeDropdown} alt-id="Filter type option: Soften, active">
                  <span class="pointer-events-none"><u class="pointer-events-none underline-offset-2 decoration-1 text-white">S</u>often</span>
                </div>
                
                <div class="flex items-center px-3 py-1 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleFilterTypeDropdown} alt-id="Filter type option: Box Sharpen">
                  <span class="pointer-events-none"><u class="pointer-events-none underline-offset-2 decoration-1 text-[#ccc]">B</u>ox Sharpen</span>
                </div>
                
                <div class="flex items-center px-3 py-1 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleFilterTypeDropdown} alt-id="Filter type option: Diamond Sharpen">
                  <span class="pointer-events-none"><u class="pointer-events-none underline-offset-2 decoration-1 text-[#ccc]">D</u>iamond Sharpen</span>
                </div>
                
                <div class="flex items-center px-3 py-1 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleFilterTypeDropdown} alt-id="Filter type option: Laplace">
                  <span class="pointer-events-none"><u class="pointer-events-none underline-offset-2 decoration-1 text-[#ccc]">L</u>aplace</span>
                </div>
                
                <div class="flex items-center px-3 py-1 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleFilterTypeDropdown} alt-id="Filter type option: Sobel">
                  <span class="pointer-events-none">S<u class="pointer-events-none underline-offset-2 decoration-1 text-[#ccc]">o</u>bel</span>
                </div>
                
                <div class="flex items-center px-3 py-1 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleFilterTypeDropdown} alt-id="Filter type option: Prewitt">
                  <span class="pointer-events-none"><u class="pointer-events-none underline-offset-2 decoration-1 text-[#ccc]">P</u>rewitt</span>
                </div>
                
                <div class="flex items-center px-3 py-1 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleFilterTypeDropdown} alt-id="Filter type option: Kirsch">
                  <span class="pointer-events-none"><u class="pointer-events-none underline-offset-2 decoration-1 text-[#ccc]">K</u>irsch</span>
                </div>
                
                <div class="flex items-center px-3 py-1 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleFilterTypeDropdown} alt-id="Filter type option: Shadow">
                  <span class="pointer-events-none">S<u class="pointer-events-none underline-offset-2 decoration-1 text-[#ccc]">h</u>adow</span>
                </div>
              </div>
            {/if}
          </div>
        </div>
      </div>

      <!-- Glare Node -->
      {#if isGlareCollapsed}
      <div class="absolute top-[200px] left-[740px] w-[140px] bg-[#3a2845] rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#ccc] flex flex-col text-[13px] text-white" alt-id="Glare node, collapsed">
        <div class="px-2 py-1.5 flex items-center gap-1.5 cursor-pointer" on:click={toggleGlareNode} alt-id="Expand Glare node button">
          <i class="fa-solid fa-chevron-right text-[10px] pointer-events-none opacity-80"></i>
          <span class="font-[400] flex-1 pointer-events-none tracking-wide text-[#eee]">Glare</span>
        </div>
        <!-- Collapsed inputs strip -->
        <div class="absolute left-[-6px] top-0 bottom-0 flex flex-col items-center justify-center">
          <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare input socket: Image"></div>
          <div class="w-[7px] h-[7px] bg-[#888] border-x border-b border-[#111] cursor-pointer" alt-id="Glare input socket"></div>
          <div class="w-[7px] h-[7px] bg-[#888] border-x border-b border-[#111] cursor-pointer" alt-id="Glare input socket"></div>
          <div class="w-[7px] h-[7px] bg-[#cba6d9] border-x border-b border-[#111] cursor-pointer" alt-id="Glare input socket"></div>
          <div class="w-[7px] h-[7px] bg-[#888] border-x border-b border-[#111] cursor-pointer" alt-id="Glare input socket"></div>
          <div class="w-[7px] h-[7px] bg-[#888] border-x border-b border-[#111] cursor-pointer" alt-id="Glare input socket"></div>
          <div class="w-[7px] h-[7px] bg-[#888] border-x border-b border-[#111] cursor-pointer" alt-id="Glare input socket"></div>
          <div class="w-[7px] h-[7px] bg-[#ccaa33] border-x border-b border-[#111] cursor-pointer" alt-id="Glare input socket"></div>
          <div class="w-[7px] h-[7px] bg-[#888] border-x border-b border-[#111] rounded-b-[1px] cursor-pointer" alt-id="Glare input socket"></div>
        </div>
        <!-- Collapsed outputs -->
        <div class="absolute right-[-6px] top-1/2 transform -translate-y-1/2 flex flex-col gap-0.5">
          <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare output socket"></div>
          <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare output socket"></div>
          <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare output socket"></div>
        </div>
      </div>
      {:else}
      <div class="absolute top-[200px] left-[740px] w-[160px] bg-[#282828] bg-opacity-90 rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#111] flex flex-col text-[12px]" alt-id="Glare node">
        <div class="bg-[#6c4080] text-white px-2 py-1.5 rounded-t-[3px] flex items-center gap-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] cursor-pointer" on:click={toggleGlareNode} alt-id="Collapse Glare node button">
          <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
          <span class="font-medium flex-1 pointer-events-none">Glare</span>
        </div>
        <div class="flex flex-col py-1.5">
          <div class="flex justify-between items-center px-2 py-0.5 relative group">
            <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare input socket: Image"></div>
            <span class="text-[#ccc] ml-3 pointer-events-none">Image</span>
            <span class="text-[#ccc] mr-3 pointer-events-none">Glare</span>
            <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute right-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare output socket: Glare"></div>
          </div>
          <div class="flex justify-end items-center px-2 py-0.5 relative group">
            <span class="text-[#ccc] mr-3 pointer-events-none">Highlights</span>
            <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute right-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare output socket: Highlights"></div>
          </div>
          <div class="px-2 py-1 flex flex-col gap-1">
            <div class="bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1 flex items-center justify-between text-[#ccc] cursor-pointer" alt-id="Glare type selection: Fog Glow">
              <span class="text-[12px] pointer-events-none">Fog Glow</span>
              <i class="fa-solid fa-chevron-down text-[10px] opacity-60 pointer-events-none"></i>
            </div>
            <div class="bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1 flex items-center justify-between text-[#ccc] cursor-pointer" alt-id="Glare quality selection: Medium">
              <span class="text-[12px] pointer-events-none">Medium</span>
              <i class="fa-solid fa-chevron-down text-[10px] opacity-60 pointer-events-none"></i>
            </div>
            <div class="flex items-center text-[#ccc] gap-1 px-1 py-0.5 cursor-pointer" alt-id="Expand Highlights section toggle">
              <i class="fa-solid fa-chevron-right text-[8px] pointer-events-none"></i>
              <span class="text-[12px] pointer-events-none">Highlights</span>
            </div>
            <div class="flex items-center text-[#ccc] gap-1 px-1 py-0.5 cursor-pointer" alt-id="Collapse Adjust section toggle">
              <i class="fa-solid fa-chevron-down text-[8px] pointer-events-none"></i>
              <span class="text-[12px] pointer-events-none">Adjust</span>
            </div>
          </div>
          <div class="flex items-center px-2 py-[2px] relative group">
            <div class="w-3 h-3 rounded-full bg-[#aaaaaa] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare input socket: Strength"></div>
            <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-[2px] w-full ml-3 shadow-[inset_0_0_10px_rgba(71,114,179,0.3)] cursor-text" alt-id="Glare strength input: 0.500">
              <span class="text-[#aaa] mr-2 pointer-events-none">Strength</span>
              <span class="flex-1 text-right text-white pointer-events-none">0.500</span>
            </div>
          </div>
          <div class="flex items-center px-2 py-[2px] relative group mt-[2px]">
            <div class="w-3 h-3 rounded-full bg-[#aaaaaa] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare input socket: Saturation"></div>
            <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-[2px] w-full ml-3 shadow-[inset_0_0_10px_rgba(71,114,179,0.3)] cursor-text" alt-id="Glare saturation input: 1.000">
              <span class="text-[#aaa] mr-2 pointer-events-none">Saturatio</span>
              <span class="flex-1 text-right text-white pointer-events-none">1.000</span>
            </div>
          </div>
          <div class="flex items-center px-2 py-[2px] relative group mt-[2px]">
            <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare input socket: Tint"></div>
            <div class="flex items-center gap-2 w-full ml-3 relative">
              <span class="text-[#aaa] pointer-events-none">Tint</span>
              <div class="flex-1 h-5 rounded-[3px] border border-[#111] bg-white cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" on:click={toggleColorPicker} alt-id="Glare tint color picker button"></div>
              
              {#if isColorPickerOpen}
                <!-- Color Picker Popover -->
                <div class="absolute bottom-[24px] left-[10px] w-[240px] bg-[#1d1d1d] border border-[#333] rounded-[5px] shadow-[0_10px_30px_rgba(0,0,0,0.8)] z-50 flex flex-col p-2 text-[12px] text-[#ccc] gap-2" alt-id="Color picker popover menu">
                  
                  <!-- Top Area: Wheel and Vertical Slider -->
                  <div class="flex gap-2">
                    <!-- Color Wheel -->
                    <div class="w-[180px] h-[180px] rounded-full relative cursor-crosshair" alt-id="Color wheel area">
                      <div class="absolute inset-0 rounded-full border-[10px] border-transparent" style="background: conic-gradient(red, magenta, blue, cyan, lime, yellow, red); border-radius: 50%;"></div>
                      <div class="absolute inset-0 rounded-full" style="background: radial-gradient(circle closest-side, white 0%, transparent 100%);"></div>
                      <!-- Center reticle -->
                      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full border border-[#111] bg-white shadow-[0_0_2px_rgba(0,0,0,0.5)] pointer-events-none" alt-id="Color wheel selection handle"></div>
                    </div>
                    
                    <!-- Vertical Grayscale Slider -->
                    <div class="flex-1 rounded-[3px] border border-[#111] relative cursor-row-resize" alt-id="Color brightness slider">
                      <div class="absolute inset-0 rounded-[2px]" style="background: linear-gradient(to bottom, white, black);"></div>
                      <!-- Handle -->
                      <div class="absolute top-0 left-[-2px] right-[-2px] h-[6px] bg-white border border-[#111] rounded-[1px] pointer-events-none" alt-id="Brightness slider handle"></div>
                    </div>
                  </div>
                  
                  <!-- Toggle Groups -->
                  <div class="flex flex-col gap-1">
                    <div class="flex bg-[#2a2a2a] border border-[#111] rounded-[3px] overflow-hidden" alt-id="Color space toggle: Linear or Perceptual">
                      <div class="flex-1 py-[3px] text-center cursor-pointer hover:bg-[#333] border-r border-[#111]" alt-id="Linear color space button">Linear</div>
                      <div class="flex-1 py-[3px] text-center cursor-pointer bg-[#4772b3] text-white" alt-id="Perceptual color space button, active">Perceptual</div>
                    </div>
                    
                    <div class="flex bg-[#2a2a2a] border border-[#111] rounded-[3px] overflow-hidden" alt-id="Color model toggle: RGB or HSV">
                      <div class="flex-1 py-[3px] text-center cursor-pointer hover:bg-[#333] border-r border-[#111]" alt-id="RGB color model button">RGB</div>
                      <div class="flex-1 py-[3px] text-center cursor-pointer bg-[#4772b3] text-white" alt-id="HSV color model button, active">HSV</div>
                    </div>
                  </div>
                  
                  <!-- Sliders / Inputs -->
                  <div class="flex flex-col border border-[#111] rounded-[3px] overflow-hidden bg-[#2a2a2a]" alt-id="Color components inputs">
                    <!-- Hue -->
                    <div class="flex items-center px-2 py-[2px] border-b border-[#111] cursor-ew-resize hover:bg-[#333]" alt-id="Hue input slider: 0.000">
                      <span class="text-[#aaa] pointer-events-none">Hue</span>
                      <span class="flex-1 text-right text-white pointer-events-none">0.000</span>
                    </div>
                    <!-- Saturation -->
                    <div class="flex items-center px-2 py-[2px] border-b border-[#111] cursor-ew-resize hover:bg-[#333]" alt-id="Saturation input slider: 0.000">
                      <span class="text-[#aaa] pointer-events-none">Saturation</span>
                      <span class="flex-1 text-right text-white pointer-events-none">0.000</span>
                    </div>
                    <!-- Value -->
                    <div class="flex items-center px-2 py-[2px] border-b border-[#111] cursor-ew-resize bg-[#4772b3] text-white relative" alt-id="Value input slider: 1.000, active">
                      <div class="absolute top-0 bottom-0 left-0 bg-[#5985cc] pointer-events-none" style="width: 100%;"></div>
                      <span class="relative z-10 pointer-events-none">Value</span>
                      <span class="flex-1 text-right text-white relative z-10 pointer-events-none">1.000</span>
                    </div>
                    <!-- Alpha -->
                    <div class="flex items-center px-2 py-[2px] cursor-ew-resize bg-[#4772b3] text-white relative" alt-id="Alpha input slider: 1.000, active">
                      <div class="absolute top-0 bottom-0 left-0 bg-[#5985cc] pointer-events-none" style="width: 100%;"></div>
                      <span class="relative z-10 pointer-events-none">Alpha</span>
                      <span class="flex-1 text-right text-white relative z-10 pointer-events-none">1.000</span>
                    </div>
                  </div>
                  
                  <!-- Hex Input -->
                  <div class="flex items-center justify-between gap-2 mt-1">
                    <span class="text-[#aaa]" alt-id="Hex label">Hex</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Hex color input: #FFFFFFFF">
                      <span class="text-[12px] text-white tracking-widest font-mono pointer-events-none">#FFFFFFFF</span>
                    </div>
                    <div class="w-6 h-6 flex items-center justify-center bg-[#2a2a2a] border border-[#111] rounded-[3px] cursor-pointer hover:bg-[#333]" alt-id="Eyedropper color picker tool">
                      <i class="fa-solid fa-eye-dropper text-[12px] pointer-events-none"></i>
                    </div>
                  </div>
                  
                </div>
              {/if}
            </div>
          </div>
          <div class="flex items-center px-2 py-[2px] relative group mt-[2px]">
            <div class="w-3 h-3 rounded-full bg-[#aaaaaa] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare input socket: Size"></div>
            <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-[2px] w-full ml-3 shadow-[inset_0_0_10px_rgba(71,114,179,0.3)] cursor-text" alt-id="Glare size input: 0.125">
              <span class="text-[#aaa] mr-2 pointer-events-none">Size</span>
              <span class="flex-1 text-right text-white pointer-events-none">0.125</span>
            </div>
          </div>
        </div>
      </div>
      {/if}

      <!-- Viewer Node -->
      <div class="absolute top-[130px] left-[980px] w-[140px] bg-[#282828] bg-opacity-90 rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#111] flex flex-col text-[12px]" alt-id="Viewer node">
        <div class="bg-[#804040] text-white px-2 py-1.5 rounded-t-[3px] flex items-center gap-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
          <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
          <span class="font-medium flex-1 pointer-events-none">Viewer</span>
          <i class="fa-solid fa-image text-[12px] opacity-80 pointer-events-none"></i>
        </div>
        <div class="flex flex-col py-1.5">
          <div class="flex items-center px-2 py-0.5 relative group">
            <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Viewer input socket: Image"></div>
            <span class="text-[#ccc] ml-3 pointer-events-none">Image</span>
          </div>
        </div>
      </div>

      <!-- Group Output Node -->
      <div class="absolute top-[310px] left-[980px] w-[140px] bg-[#282828] bg-opacity-90 rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#111] flex flex-col text-[12px]" alt-id="Group Output node">
        <div class="bg-[#404040] text-white px-2 py-1.5 rounded-t-[3px] flex items-center gap-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
          <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
          <span class="font-medium flex-1 pointer-events-none">Group Output</span>
        </div>
        <div class="flex flex-col py-1.5">
          <div class="flex items-center px-2 py-0.5 relative group">
            <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Group Output input socket: Image"></div>
            <span class="text-[#ccc] ml-3 pointer-events-none">Image</span>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>

    <!-- Right Sidebar (N-Panel) -->
    <div class="absolute right-0 top-0 flex z-20 shadow-[-5px_0_15px_rgba(0,0,0,0.3)] max-h-full">
      <!-- Main Content Area -->
      <div class="w-[260px] bg-[#282828] bg-opacity-95 backdrop-blur-sm flex flex-col text-[13px] rounded-bl-sm" alt-id="Compositor properties right sidebar">
        <!-- Header / Breadcrumb -->
        <div class="bg-[#1f1f1f] text-[#ccc] py-1.5 px-3 flex items-center justify-between border-b border-[#111]">
          <span>Node</span>
          <i class="fa-solid fa-xmark text-[12px] opacity-60 hover:opacity-100 cursor-pointer" alt-id="Close sidebar button"></i>
        </div>

        <div class="flex-1 overflow-y-auto overflow-x-hidden">
          <!-- Node Panel -->
          <div class="border-b border-[#1f1f1f]">
            <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" on:click={toggleNodePanel} alt-id="Node panel header">
              <div class="flex items-center gap-2 pointer-events-none">
                {#if isNodePanelExpanded}
                  <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center pointer-events-none"></i>
                {:else}
                  <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center pointer-events-none"></i>
                {/if}
                <span class="font-medium text-[14px] pointer-events-none">Node</span>
              </div>
              <div class="flex gap-[2px] opacity-40 cursor-grab">
                <div class="flex flex-col gap-[2px] pointer-events-none">
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                </div>
                <div class="flex flex-col gap-[2px] pointer-events-none">
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                </div>
              </div>
            </div>
            
            {#if isNodePanelExpanded}
            <div class="p-3 flex flex-col gap-2.5 text-[#ccc]">
              <div class="flex items-center">
                <span class="w-[60px] text-right pr-3 text-[12px]">Name</span>
                <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Name input field; value Group Output">
                  <span class="text-[13px] text-white pointer-events-none">Group Output</span>
                </div>
              </div>
              <div class="flex items-center">
                <span class="w-[60px] text-right pr-3 text-[12px]">Label</span>
                <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Label input field; value Custom Label">
                  <span class="text-[13px] text-[#666] pointer-events-none">Custom Label</span>
                </div>
              </div>
              <div class="flex items-center">
                <span class="w-[60px] text-right pr-3 text-[12px]">Color</span>
                <div class="flex-1 flex items-center gap-1.5">
                  <div class="w-3.5 h-3.5 border border-[#111] bg-[#222] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-pointer" alt-id="Color toggle checkbox"></div>
                  <div class="flex-1 h-6 bg-[#606060] rounded-[3px] border border-[#111] cursor-pointer" alt-id="Color picker selector"></div>
                  <div class="flex items-center justify-center cursor-pointer text-[#a0a0a0] hover:text-white px-1 h-6" alt-id="Color options dropdown button">
                    <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
                  </div>
                  <div class="flex items-center justify-center cursor-pointer text-[#a0a0a0] hover:text-white px-1 h-6" alt-id="Color settings slider button">
                    <i class="fa-solid fa-sliders text-[12px] pointer-events-none"></i>
                  </div>
                </div>
              </div>
              <div class="flex items-center mt-1">
                <div class="w-[60px]"></div>
                <div class="flex items-center gap-2 cursor-pointer text-white hover:text-[#ccc]" alt-id="Show Options toggle checkbox; currently checked">
                  <div class="w-3.5 h-3.5 bg-[#4772b3] border border-[#222] rounded-sm flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] pointer-events-none">
                    <i class="fa-solid fa-check text-[10px] text-white pointer-events-none"></i>
                  </div>
                  <span class="text-[13px] pointer-events-none">Show Options</span>
                </div>
              </div>
              <div class="flex items-center mt-1">
                <div class="w-[60px]"></div>
                <div class="flex items-center gap-2 cursor-pointer text-[#ccc] hover:text-white" alt-id="Mute toggle checkbox; currently unchecked">
                  <div class="w-3.5 h-3.5 border border-[#111] bg-[#222] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] pointer-events-none"></div>
                  <span class="text-[13px] pointer-events-none">Mute</span>
                </div>
              </div>
            </div>
            {/if}
          </div>

          <!-- Properties Panel -->
          <div class="border-b border-[#1f1f1f]">
            <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" on:click={togglePropertiesPanel} alt-id="Properties panel header">
              <div class="flex items-center gap-2 pointer-events-none">
                {#if isPropertiesPanelExpanded}
                  <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center pointer-events-none"></i>
                {:else}
                  <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center pointer-events-none"></i>
                {/if}
                <span class="font-medium text-[14px] pointer-events-none">Properties</span>
              </div>
              <div class="flex gap-[2px] opacity-40 cursor-grab" alt-id="Properties panel drag handle">
                <div class="flex flex-col gap-[2px] pointer-events-none">
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                </div>
                <div class="flex flex-col gap-[2px] pointer-events-none">
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                </div>
              </div>
            </div>
            
            {#if isPropertiesPanelExpanded}
            <div class="p-2 flex flex-col gap-2 text-[#ccc]">
              <!-- Sockets list box -->
              <div class="bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] h-[120px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex relative" alt-id="Properties sockets list box">
                <div class="flex-1 flex flex-col p-1">
                  <!-- Selected socket -->
                  <div class="bg-[#4772b3] text-white px-2 py-1 rounded-[2px] flex items-center justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] cursor-pointer" alt-id="Selected socket item: Image, first element in the sockets list">
                    <span class="text-[13px] w-full text-center pr-3 pointer-events-none">Image</span>
                    <div class="w-2.5 h-2.5 rounded-full bg-[#ccaa33] border border-[#111] pointer-events-none"></div>
                  </div>
                  <!-- Other socket -->
                  <div class="text-[#ccc] hover:bg-[#333] px-2 py-1 rounded-[2px] flex items-center justify-between cursor-pointer mt-0.5" alt-id="Socket item: Image, second element in the sockets list">
                    <div class="w-2.5 h-2.5 rounded-full bg-[#ccaa33] border border-[#111] pointer-events-none"></div>
                    <span class="text-[13px] pl-2 w-full text-left pointer-events-none">Image</span>
                  </div>
                </div>
                <!-- Sockets right toolbar -->
                <div class="w-6 border-l border-[#111] flex flex-col p-0.5 gap-0.5 relative z-10">
                  <div class="w-full h-5 flex items-center justify-center hover:bg-[#333] rounded-[2px] cursor-pointer" alt-id="Add socket button, first element in the sockets toolbar"><i class="fa-solid fa-plus text-[10px] pointer-events-none"></i></div>
                  <div class="w-full h-5 flex items-center justify-center hover:bg-[#333] rounded-[2px] cursor-pointer" alt-id="Remove socket button, second element in the sockets toolbar"><i class="fa-solid fa-minus text-[10px] pointer-events-none"></i></div>
                  <div class="flex-1"></div>
                  <div class="w-full h-5 flex items-center justify-center hover:bg-[#333] rounded-[2px] cursor-pointer mb-1" alt-id="Move socket down button, third element in the sockets toolbar"><i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i></div>
                </div>
                <!-- Listbox bottom tools -->
                <div class="absolute bottom-1 left-2 cursor-pointer" alt-id="Play animation button for sockets">
                  <i class="fa-solid fa-play text-[10px] opacity-60 pointer-events-none"></i>
                </div>
                <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 cursor-grab" alt-id="Resize drag handle for sockets list box">
                  <div class="flex gap-[2px] opacity-40 pointer-events-none">
                    <div class="flex flex-col gap-[2px] pointer-events-none">
                      <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                      <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                    </div>
                    <div class="flex flex-col gap-[2px] pointer-events-none">
                      <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                      <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                    </div>
                    <div class="flex flex-col gap-[2px] pointer-events-none">
                      <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                      <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                    </div>
                    <div class="flex flex-col gap-[2px] pointer-events-none">
                      <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                      <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="flex items-center mt-2">
                <span class="w-[70px] text-right pr-2 text-[12px]">Type</span>
                <div class="flex-1 bg-[#282828] border border-[#111] rounded-[3px] px-2 h-6 flex items-center gap-1.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer hover:bg-[#333]" alt-id="Type dropdown; selected value Color">
                  <div class="w-2.5 h-2.5 rounded-full bg-[#ccaa33] border border-[#111] pointer-events-none"></div>
                  <span class="text-[13px] flex-1 text-[#ccc] pointer-events-none">Color</span>
                  <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                </div>
              </div>
              <div class="flex items-center mt-1">
                <span class="w-[70px] text-right pr-2 text-[12px]">Description</span>
                <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center justify-between shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Description input field; empty">
                  <span class="text-[13px] text-[#888] pointer-events-none">&nbsp;</span>
                </div>
              </div>
              <div class="flex items-center mt-1">
                <span class="w-[70px] text-right pr-2 text-[12px]">Default</span>
                <div class="flex-1 bg-black border border-[#111] rounded-[3px] flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] h-6 cursor-text" alt-id="Default color value input field"></div>
              </div>
              <div class="flex items-center mt-2 mb-2">
                <div class="w-[70px]"></div>
                <div class="flex items-center gap-2 cursor-pointer text-[#ccc] hover:text-white" alt-id="Hide Value toggle checkbox; currently unchecked">
                  <div class="w-3.5 h-3.5 border border-[#111] bg-[#222] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] pointer-events-none"></div>
                  <span class="text-[13px] pointer-events-none">Hide Value</span>
                </div>
              </div>
            </div>
            {/if}
          </div>
          
          <!-- Custom Properties Panel -->
          <div class="border-b border-[#1f1f1f]">
            <div class="flex items-center justify-between p-2 bg-[#2d2d2d] cursor-pointer text-[#ccc] hover:text-white" on:click={toggleCustomPropertiesPanel} alt-id="Custom Properties panel header">
              <div class="flex items-center gap-2 pointer-events-none">
                {#if isCustomPropertiesPanelExpanded}
                  <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center pointer-events-none"></i>
                {:else}
                  <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center pointer-events-none"></i>
                {/if}
                <span class="font-[400] text-[13px] pointer-events-none">Custom Properties</span>
              </div>
              <div class="flex gap-[2px] opacity-40 cursor-grab" alt-id="Custom Properties panel drag handle">
                <div class="flex flex-col gap-[2px] pointer-events-none">
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                </div>
                <div class="flex flex-col gap-[2px] pointer-events-none">
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc] pointer-events-none"></div>
                </div>
              </div>
            </div>
            {#if isCustomPropertiesPanelExpanded}
            <div class="p-2 pb-4 bg-[#282828] flex flex-col gap-2">
              <div class="w-full bg-[#4a4a4a] hover:bg-[#555] border border-[#222] rounded-[3px] h-6 flex items-center cursor-pointer shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] px-2 relative" on:click={toggleCustomProperty} alt-id="Add new custom property button">
                <i class="fa-solid fa-plus text-[12px] text-[#ccc] pointer-events-none"></i>
                <span class="text-[13px] text-[#eee] pointer-events-none absolute inset-0 flex items-center justify-center">New</span>
              </div>
              
              {#if hasCustomProperty}
                <div class="flex items-center gap-1.5 mt-1" alt-id="Custom property row: prop">
                  <span class="text-[#ccc] text-[13px] w-[50px] text-right pointer-events-none">prop</span>
                  <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Custom property value input: 1.000">
                    <span class="text-[13px] text-white flex-1 text-center pointer-events-none">1.000</span>
                  </div>
                  <div class="w-[20px] h-6 flex items-center justify-center cursor-pointer opacity-80 hover:opacity-100" alt-id="Custom property settings button">
                    <i class="fa-solid fa-gear text-[13px] text-[#eee] pointer-events-none"></i>
                  </div>
                  <div class="w-[20px] h-6 flex items-center justify-center cursor-pointer opacity-60 hover:opacity-100" on:click={toggleCustomProperty} alt-id="Remove custom property button">
                    <i class="fa-solid fa-xmark text-[13px] text-[#eee] pointer-events-none"></i>
                  </div>
                </div>
              {/if}
            </div>
            {/if}
          </div>
        </div>
      </div>
      
      <!-- Vertical Sidebar Tabs -->
      <div class="w-[34px] bg-[#1a1a1a] flex flex-col text-[#ccc] border-l border-[#1f1f1f] text-[13px]">
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333] rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide" alt-id="Group tab, first element in the compositor sidebar tabs" style="writing-mode: vertical-rl;"><span class="pointer-events-none">Group</span></div>
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer text-white bg-[#3d3d3d] rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide mt-0.5" alt-id="Node tab, currently selected, second element in the compositor sidebar tabs" style="writing-mode: vertical-rl;"><span class="pointer-events-none">Node</span></div>
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333] rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide mt-0.5" alt-id="Tool tab, third element in the compositor sidebar tabs" style="writing-mode: vertical-rl;"><span class="pointer-events-none">Tool</span></div>
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333] rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide mt-0.5" alt-id="View tab, fourth element in the compositor sidebar tabs" style="writing-mode: vertical-rl;"><span class="pointer-events-none">View</span></div>
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333] rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide mt-0.5" alt-id="Options tab, fifth element in the compositor sidebar tabs" style="writing-mode: vertical-rl;"><span class="pointer-events-none">Options</span></div>
      </div>
    </div>
  </div>
</div>