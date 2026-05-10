<script>
  import { onMount } from 'svelte';
  import EditorSelector from './EditorSelector.svelte';
  export let currentEditor = 'compositor';
  export let windowId = '';

  let activeSidebarTab = 'node';
  let isGroupPanelExpanded = true;
  let isGroupSocketsPanelExpanded = true;
  let isGroupAnimationPanelExpanded = true;

  let isNodePanelExpanded = true;
  let isPropertiesPanelExpanded = true;
  let isCustomPropertiesPanelExpanded = true;
  let isHighlightsSubsectionExpanded = false;
  let isAdjustSubsectionExpanded = true;
  let isGlarePropsSubsectionExpanded = true;
  let isGlareCollapsed = false;
  let isToolDropdownOpen = false;
  let isBackdropPanelExpanded = true;
  let isAnnotationsPanelExpanded = true;
  let isPerformancePanelExpanded = true;
  let isAnnotateDropdownOpen = false;
  let isFilterTypeDropdownOpen = false;
  let isColorPickerOpen = false;
  let hasCustomProperty = false;
  let isEditPropertyOpen = false;
  let isNodeContextMenuOpen = false;
  let isNodeContextMenuAddOpen = false;
  let isNodeContextMenuInputOpen = false;
  let isNodeContextMenuColorOpen = false;
  let isNodeContextMenuAdjustOpen = false;
  let isNodeContextMenuOutputOpen = false;
  let isNodeContextMenuKeyingOpen = false;
  let isNodeContextMenuTransformOpen = false;
  let isSceneSelectDropdownOpen = false;
  let contextMenuX = 0;
  let contextMenuY = 0;

  function handleContextMenu(e) {
    e.preventDefault();
    contextMenuX = e.clientX;
    contextMenuY = e.clientY;
    isNodeContextMenuOpen = true;
    updateOpenParam();
  }

  onMount(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const openParam = urlParams.get('open') || '';
      if (openParam.includes('compositor-tab-group')) {
        activeSidebarTab = 'group';
      }
      if (openParam.includes('compositor-tab-tool')) {
        activeSidebarTab = 'tool';
      }
      if (openParam.includes('compositor-tab-view')) {
        activeSidebarTab = 'view';
      }
      if (openParam.includes('compositor-tab-options')) {
        activeSidebarTab = 'options';
      }
      if (openParam.includes('backdrop-panel-collapsed')) {
        isBackdropPanelExpanded = false;
      }
      if (openParam.includes('annotations-panel-collapsed')) {
        isAnnotationsPanelExpanded = false;
      }
      if (openParam.includes('performance-panel-collapsed')) {
        isPerformancePanelExpanded = false;
      }
      if (openParam.includes('group-panel-collapsed')) {
        isGroupPanelExpanded = false;
      }
      if (openParam.includes('group-sockets-collapsed')) {
        isGroupSocketsPanelExpanded = false;
      }
      if (openParam.includes('group-animation-collapsed')) {
        isGroupAnimationPanelExpanded = false;
      }
      if (openParam.includes('node-panel-collapsed')) {
        isNodePanelExpanded = false;
      }
      if (openParam.includes('properties-panel-collapsed')) {
        isPropertiesPanelExpanded = false;
      }
      if (openParam.includes('custom-properties-panel-collapsed')) {
        isCustomPropertiesPanelExpanded = false;
      }
      if (openParam.includes('custom-properties-panel-expanded')) {
        isCustomPropertiesPanelExpanded = true;
      }
      if (openParam.includes('compositor-highlights-expanded')) {
        isHighlightsSubsectionExpanded = true;
      }
      if (openParam.includes('compositor-adjust-collapsed')) {
        isAdjustSubsectionExpanded = false;
      }
      if (openParam.includes('compositor-glare-props-collapsed')) {
        isGlarePropsSubsectionExpanded = false;
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
      if (openParam.includes('compositor-edit-property')) {
        isEditPropertyOpen = true;
      }
      if (openParam.includes('compositor-custom-property-added')) {
        hasCustomProperty = true;
      }
      if (openParam.includes('compositor-node-context-menu')) {
        isNodeContextMenuOpen = true;
        // Mock coordinates if opened via URL without actual click
        contextMenuX = 400;
        contextMenuY = 300;
      }
      if (openParam.includes('compositor-node-context-menu-add')) {
        isNodeContextMenuAddOpen = true;
      }
      if (openParam.includes('compositor-node-context-menu-input')) {
        isNodeContextMenuInputOpen = true;
      }
      if (openParam.includes('compositor-node-context-menu-color')) {
        isNodeContextMenuColorOpen = true;
      }
      if (openParam.includes('compositor-node-context-menu-adjust')) {
        isNodeContextMenuAdjustOpen = true;
      }
      if (openParam.includes('compositor-node-context-menu-output')) {
        isNodeContextMenuOutputOpen = true;
      }
      if (openParam.includes('compositor-node-context-menu-keying')) {
        isNodeContextMenuKeyingOpen = true;
      }
      if (openParam.includes('compositor-node-context-menu-transform')) {
        isNodeContextMenuTransformOpen = true;
      }
      if (openParam.includes('compositor-scene-select-dropdown')) {
        isSceneSelectDropdownOpen = true;
      }
    }
  });

  function updateOpenParam() {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const openStates = [];
      if (activeSidebarTab === 'group') openStates.push('compositor-tab-group');
      if (activeSidebarTab === 'tool') openStates.push('compositor-tab-tool');
      if (activeSidebarTab === 'view') openStates.push('compositor-tab-view');
      if (activeSidebarTab === 'options') openStates.push('compositor-tab-options');
      if (!isBackdropPanelExpanded) openStates.push('backdrop-panel-collapsed');
      if (!isAnnotationsPanelExpanded) openStates.push('annotations-panel-collapsed');
      if (!isPerformancePanelExpanded) openStates.push('performance-panel-collapsed');
      if (!isGroupPanelExpanded) openStates.push('group-panel-collapsed');
      if (!isGroupSocketsPanelExpanded) openStates.push('group-sockets-collapsed');
      if (!isGroupAnimationPanelExpanded) openStates.push('group-animation-collapsed');
      if (!isNodePanelExpanded) openStates.push('node-panel-collapsed');
      if (!isPropertiesPanelExpanded) openStates.push('properties-panel-collapsed');
      if (!isCustomPropertiesPanelExpanded) openStates.push('custom-properties-panel-collapsed');
      if (isHighlightsSubsectionExpanded) openStates.push('compositor-highlights-expanded');
      if (!isAdjustSubsectionExpanded) openStates.push('compositor-adjust-collapsed');
      if (!isGlarePropsSubsectionExpanded) openStates.push('compositor-glare-props-collapsed');
      if (isGlareCollapsed) openStates.push('glare-node-collapsed');
      if (isToolDropdownOpen) openStates.push('compositor-tool-dropdown');
      if (isAnnotateDropdownOpen) openStates.push('compositor-annotate-dropdown');
      if (isFilterTypeDropdownOpen) openStates.push('compositor-filter-type-dropdown');
      if (isColorPickerOpen) openStates.push('compositor-color-picker');
      if (isEditPropertyOpen) openStates.push('compositor-edit-property');
      if (hasCustomProperty) openStates.push('compositor-custom-property-added');
      if (isNodeContextMenuOpen) openStates.push('compositor-node-context-menu');
      if (isNodeContextMenuAddOpen) openStates.push('compositor-node-context-menu-add');
      if (isNodeContextMenuInputOpen) openStates.push('compositor-node-context-menu-input');
      if (isNodeContextMenuColorOpen) openStates.push('compositor-node-context-menu-color');
      if (isNodeContextMenuAdjustOpen) openStates.push('compositor-node-context-menu-adjust');
      if (isNodeContextMenuOutputOpen) openStates.push('compositor-node-context-menu-output');
      if (isNodeContextMenuKeyingOpen) openStates.push('compositor-node-context-menu-keying');
      if (isNodeContextMenuTransformOpen) openStates.push('compositor-node-context-menu-transform');
      if (isSceneSelectDropdownOpen) openStates.push('compositor-scene-select-dropdown');
      
      if (openStates.length > 0) {
        url.searchParams.set('open', openStates.join(','));
      } else {
        url.searchParams.delete('open');
      }
      const search = url.searchParams.toString().replace(/%2C/g, ',');
      window.history.replaceState({}, '', `${url.pathname}?${search}`);
    }
  }

  function toggleGroupPanel() {
    isGroupPanelExpanded = !isGroupPanelExpanded;
    updateOpenParam();
  }

  function toggleGroupSocketsPanel() {
    isGroupSocketsPanelExpanded = !isGroupSocketsPanelExpanded;
    updateOpenParam();
  }

  function toggleGroupAnimationPanel() {
    isGroupAnimationPanelExpanded = !isGroupAnimationPanelExpanded;
    updateOpenParam();
  }

  function toggleBackdropPanel() {
    isBackdropPanelExpanded = !isBackdropPanelExpanded;
    updateOpenParam();
  }

  function toggleAnnotationsPanel() {
    isAnnotationsPanelExpanded = !isAnnotationsPanelExpanded;
    updateOpenParam();
  }

  function togglePerformancePanel() {
    isPerformancePanelExpanded = !isPerformancePanelExpanded;
    updateOpenParam();
  }

  function setActiveSidebarTab(tab) {
    activeSidebarTab = tab;
    updateOpenParam();
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

  function toggleHighlightsSubsection() {
    isHighlightsSubsectionExpanded = !isHighlightsSubsectionExpanded;
    updateOpenParam();
  }

  function toggleAdjustSubsection() {
    isAdjustSubsectionExpanded = !isAdjustSubsectionExpanded;
    updateOpenParam();
  }

  function toggleGlarePropsSubsection() {
    isGlarePropsSubsectionExpanded = !isGlarePropsSubsectionExpanded;
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

  function toggleEditProperty() {
    isEditPropertyOpen = !isEditPropertyOpen;
    updateOpenParam();
  }

  function toggleCustomProperty() {
    hasCustomProperty = !hasCustomProperty;
    updateOpenParam();
  }
  function toggleSceneSelectDropdown() {
    isSceneSelectDropdownOpen = !isSceneSelectDropdownOpen;
    updateOpenParam();
  }
</script>

<div class="h-full flex flex-col bg-[#1c1c1c] text-[#e6e6e6]" alt-id="Compositor editor panel">
  {#if isToolDropdownOpen}
    <div class="fixed inset-0 z-40 bg-transparent" on:click={toggleToolDropdown} ></div>
  {/if}
  {#if isAnnotateDropdownOpen}
    <div class="fixed inset-0 z-40 bg-transparent" on:click={toggleAnnotateDropdown} ></div>
  {/if}
  {#if isFilterTypeDropdownOpen}
    <div class="fixed inset-0 z-40 bg-transparent" on:click={toggleFilterTypeDropdown} ></div>
  {/if}
  {#if isColorPickerOpen}
    <div class="fixed inset-0 z-40 bg-transparent" on:click={toggleColorPicker} ></div>
  {/if}
  <!-- Header -->
  <div class="h-10 bg-[#282828] border-b border-[#1f1f1f] flex items-center px-2 justify-between text-[13px]" alt-id="Compositor header">
    <!-- Left side -->
    <div class="flex items-center gap-2">
      <EditorSelector bind:editor={currentEditor} windowId={windowId} />
      
      <!-- Scene Dropdown -->
      <div class="relative">
        <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1 text-[#ccc] gap-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] cursor-pointer hover:text-white ml-1 {isSceneSelectDropdownOpen ? 'bg-[#4772b3] text-white shadow-none border-transparent' : ''}" on:click={toggleSceneSelectDropdown} alt-id="Scene selection dropdown">
          <i class="fa-solid fa-shapes text-[12px] opacity-80 pointer-events-none"></i>
          <span class="text-[13px] pointer-events-none">Scene</span>
          <i class="fa-solid fa-chevron-down text-[10px] opacity-60 ml-1 pointer-events-none"></i>
        </div>
        {#if isSceneSelectDropdownOpen}
          <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => {
            isSceneSelectDropdownOpen = false;
            updateOpenParam();
          }}></div>
          <div class="absolute left-1 top-full mt-1 bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-50 w-[200px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Scene selection dropdown menu">
            <div class="px-3 py-1 text-[#a0a0a0] mb-1">Node Tree Sub-Type</div>
            <div class="border-t border-[#333] mx-1 mb-1"></div>
            
            <div class="px-3 py-1 flex items-center bg-[#4772b3] text-white cursor-pointer rounded-[2px] mx-1" alt-id="Scene option">
              <i class="fa-solid fa-shapes text-[12px] opacity-80 mr-2 w-4 text-center"></i>
              <span><u>S</u>cene</span>
            </div>
            <div class="px-3 py-1 flex items-center hover:bg-[#4772b3] hover:text-white cursor-pointer rounded-[2px] mx-1 mt-0.5" alt-id="Sequencer option">
              <i class="fa-solid fa-clapperboard text-[12px] opacity-80 mr-2 w-4 text-center"></i>
              <span>S<u>e</u>quencer</span>
            </div>
          </div>
        {/if}
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
    <div class="absolute inset-0 z-10 flex items-center justify-start pl-[56px] pr-[300px] pointer-events-none">
      <div class="relative w-[1200px] max-w-[calc(100%-2rem)] h-[min(720px,calc(100%-1.5rem))] min-h-[520px] pointer-events-auto -translate-y-[20px]">
        <!-- Node Splines (SVG overlay) -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none z-0">
          <!-- Render Layers -> Filter -->
          <path d="M 220 224 C 260 224, 260 244, 300 244" fill="none" stroke="#ccaa33" stroke-width="2" />
          
          {#if isGlareCollapsed}
          <!-- Filter -> Glare -->
          <path d="M 460 244 C 490 244, 490 214, 520 214" fill="none" stroke="#ccaa33" stroke-width="2" />
          <!-- Glare -> Viewer -->
          <path d="M 660 214 C 710 214, 710 174, 760 174" fill="none" stroke="#ccaa33" stroke-width="2" />
          <!-- Glare -> Group Output -->
          <path d="M 660 214 C 710 214, 710 354, 760 354" fill="none" stroke="#ccaa33" stroke-width="2" />
          {:else}
          <!-- Filter -> Glare -->
          <path d="M 460 244 C 490 244, 490 244, 520 244" fill="none" stroke="#ccaa33" stroke-width="2" />
          <!-- Glare -> Viewer -->
          <path d="M 680 244 C 720 244, 720 174, 760 174" fill="none" stroke="#ccaa33" stroke-width="2" />
          <!-- Glare -> Group Output -->
          <path d="M 680 244 C 720 244, 720 354, 760 354" fill="none" stroke="#ccaa33" stroke-width="2" />
          {/if}
        </svg>

        <!-- Node Editor Workspace -->
        <div class="absolute inset-0 z-10 w-full h-full" alt-id="Compositor main node area" on:contextmenu={handleContextMenu} on:click={() => { if (isNodeContextMenuOpen || isNodeContextMenuAddOpen || isNodeContextMenuInputOpen || isNodeContextMenuColorOpen || isNodeContextMenuAdjustOpen || isNodeContextMenuOutputOpen || isNodeContextMenuKeyingOpen || isNodeContextMenuTransformOpen) { isNodeContextMenuOpen = false; isNodeContextMenuAddOpen = false; isNodeContextMenuInputOpen = false; isNodeContextMenuColorOpen = false; isNodeContextMenuAdjustOpen = false; isNodeContextMenuOutputOpen = false; isNodeContextMenuKeyingOpen = false; isNodeContextMenuTransformOpen = false; updateOpenParam(); } }}>
      <!-- Render Layers Node -->
      <div class="absolute top-[180px] left-[60px] w-[160px] bg-[#282828] bg-opacity-90 rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#111] flex flex-col text-[12px]" alt-id="Render Layers node">
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
      <div class="absolute top-[200px] left-[300px] w-[160px] bg-[#282828] bg-opacity-90 rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#111] flex flex-col text-[12px]" alt-id="Filter node">
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
      <div class="absolute top-[200px] left-[520px] w-[140px] bg-[#3a2845] rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#ccc] flex flex-col text-[13px] text-white" alt-id="Glare node, collapsed">
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
      <div class="absolute top-[200px] left-[520px] w-[160px] bg-[#282828] bg-opacity-90 rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#111] flex flex-col text-[12px]" alt-id="Glare node">
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
              <span class="text-[#aaa] mr-2 pointer-events-none">Saturation</span>
              <span class="flex-1 text-right text-white pointer-events-none">1.000</span>
            </div>
          </div>
          <div class="flex items-center px-2 py-[2px] relative group mt-[2px]">
            <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare input socket: Tint"></div>
            <div class="flex items-center gap-2 w-full ml-3 relative">
              <span class="text-[#aaa] pointer-events-none">Tint</span>
              <div class="flex-1 h-5 rounded-[3px] border border-[#111] bg-white cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" on:click={toggleColorPicker} alt-id="Glare tint color picker button on graph node; opens shared color picker popover"></div>
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
      <div class="absolute top-[130px] left-[760px] w-[140px] bg-[#282828] bg-opacity-90 rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#111] flex flex-col text-[12px]" alt-id="Viewer node">
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
      <div class="absolute top-[310px] left-[760px] w-[140px] bg-[#282828] bg-opacity-90 rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#111] flex flex-col text-[12px]" alt-id="Group Output node">
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
      <div class="relative w-[260px] bg-[#282828] bg-opacity-95 backdrop-blur-sm flex flex-col text-[13px] rounded-bl-sm" alt-id="Compositor properties right sidebar">
        <!-- Header / Breadcrumb -->
        <div class="bg-[#1f1f1f] text-[#ccc] py-1.5 px-3 flex items-center justify-between border-b border-[#111]">
          <span class="capitalize">{activeSidebarTab}</span>
          <i class="fa-solid fa-xmark text-[12px] opacity-60 hover:opacity-100 cursor-pointer" alt-id="Close sidebar button"></i>
        </div>

        <div class="flex-1 overflow-y-auto overflow-x-hidden">
          {#if activeSidebarTab === 'node'}
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
                <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Name input field for selected node; value Glare; Glare node name field in Node panel">
                  <span class="text-[13px] text-white pointer-events-none">Glare</span>
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
                  <div class="w-3.5 h-3.5 border border-[#111] bg-[#222] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-pointer" alt-id="Node color override checkbox; currently unchecked; gray empty checkbox next to node color swatch"></div>
                  <div class="flex-1 h-6 bg-[#7a7a7a] rounded-[3px] border border-[#111] cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.25)]" alt-id="Node header color swatch; medium gray when color override is off"></div>
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
            <div class="p-2 flex flex-col gap-1.5 text-[#ccc] pb-3">
              <div class="flex items-center gap-1">
                <span class="w-[72px] shrink-0 text-right pr-2 text-[12px] text-[#aaa] pointer-events-none">Main Type</span>
                <div class="flex-1 min-w-0 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center justify-between shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-[#222] text-[#e6e6e6]" alt-id="Glare Main Type dropdown; selected Fog Glow; compositor Glare node glare type">
                  <span class="text-[12px] pointer-events-none truncate">Fog Glow</span>
                  <i class="fa-solid fa-chevron-down text-[9px] opacity-60 pointer-events-none shrink-0"></i>
                </div>
              </div>
              <div class="flex items-center gap-1">
                <span class="w-[72px] shrink-0 text-right pr-2 text-[12px] text-[#aaa] pointer-events-none">Quality</span>
                <div class="flex-1 min-w-0 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center justify-between shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-[#222] text-[#e6e6e6]" alt-id="Glare Quality dropdown; selected Medium; Fog Glow quality setting">
                  <span class="text-[12px] pointer-events-none truncate">Medium</span>
                  <i class="fa-solid fa-chevron-down text-[9px] opacity-60 pointer-events-none shrink-0"></i>
                </div>
              </div>

              <div class="flex items-center gap-1.5 px-0.5 py-0.5 cursor-pointer text-[#ccc] hover:text-white select-none" on:click={toggleHighlightsSubsection} alt-id="Highlights subsection header; first collapsible under Glare properties; currently collapsed">
                {#if isHighlightsSubsectionExpanded}
                  <i class="fa-solid fa-chevron-down text-[9px] w-3 text-center pointer-events-none"></i>
                {:else}
                  <i class="fa-solid fa-chevron-right text-[9px] w-3 text-center pointer-events-none"></i>
                {/if}
                <span class="text-[12px] font-medium pointer-events-none">Highlights</span>
              </div>
              <div class="flex items-center gap-1.5 px-0.5 py-0.5 cursor-pointer text-[#ccc] hover:text-white select-none" on:click={toggleAdjustSubsection} alt-id="Adjust subsection header; expanded; Strength and Saturation inside">
                {#if isAdjustSubsectionExpanded}
                  <i class="fa-solid fa-chevron-down text-[9px] w-3 text-center pointer-events-none"></i>
                {:else}
                  <i class="fa-solid fa-chevron-right text-[9px] w-3 text-center pointer-events-none"></i>
                {/if}
                <span class="text-[12px] font-medium pointer-events-none">Adjust</span>
              </div>
              {#if isAdjustSubsectionExpanded}
                <div class="flex flex-col gap-2 pl-1">
                  <div class="flex items-center gap-2">
                    <span class="w-[64px] shrink-0 text-right text-[12px] text-[#aaa] pointer-events-none">Strength</span>
                    <div class="flex-1 min-w-0 flex items-center gap-2 cursor-ew-resize" alt-id="Glare Strength slider; value 0.500; half filled blue value bar in Properties panel">
                      <div class="flex-1 h-[13px] bg-[#2a2a2a] rounded-[2px] border border-[#111] overflow-hidden relative shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]">
                        <div class="absolute left-0 top-0 bottom-0 bg-[#4772b3] pointer-events-none" style="width: 50%;"></div>
                      </div>
                      <span class="text-[12px] text-[#ddd] w-11 text-right tabular-nums pointer-events-none shrink-0">0.500</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-[64px] shrink-0 text-right text-[12px] text-[#aaa] pointer-events-none">Saturation</span>
                    <div class="flex-1 min-w-0 flex items-center gap-2 cursor-ew-resize" alt-id="Glare Saturation slider; value 1.000; full blue value bar">
                      <div class="flex-1 h-[13px] bg-[#2a2a2a] rounded-[2px] border border-[#111] overflow-hidden relative shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]">
                        <div class="absolute left-0 top-0 bottom-0 bg-[#4772b3] pointer-events-none" style="width: 100%;"></div>
                      </div>
                      <span class="text-[12px] text-[#ddd] w-11 text-right tabular-nums pointer-events-none shrink-0">1.000</span>
                    </div>
                  </div>
                </div>
              {/if}

              <div class="flex items-center gap-2 pt-0.5">
                <span class="w-[72px] shrink-0 text-right pr-2 text-[12px] text-[#aaa] pointer-events-none">Tint</span>
                <div class="flex-1 h-6 rounded-[3px] border border-[#111] bg-white cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.15)]" on:click={toggleColorPicker} alt-id="Glare Tint color swatch; solid white; opens color picker when clicked"></div>
              </div>

              <div class="flex items-center gap-1.5 px-0.5 py-0.5 cursor-pointer text-[#ccc] hover:text-white select-none mt-0.5" on:click={toggleGlarePropsSubsection} alt-id="Glare subsection header under Tint; streaks and glow size options; expanded">
                {#if isGlarePropsSubsectionExpanded}
                  <i class="fa-solid fa-chevron-down text-[9px] w-3 text-center pointer-events-none"></i>
                {:else}
                  <i class="fa-solid fa-chevron-right text-[9px] w-3 text-center pointer-events-none"></i>
                {/if}
                <span class="text-[12px] font-medium pointer-events-none">Glare</span>
              </div>
              {#if isGlarePropsSubsectionExpanded}
                <div class="flex flex-col gap-2 pl-1">
                  <div class="flex items-center gap-2">
                    <span class="w-[64px] shrink-0 text-right text-[12px] text-[#aaa] pointer-events-none">Size</span>
                    <div class="flex-1 min-w-0 flex items-center gap-2 cursor-ew-resize" alt-id="Glare Size slider for Fog Glow; active control; value 0.125">
                      <div class="flex-1 h-[13px] bg-[#2a2a2a] rounded-[2px] border border-[#111] overflow-hidden relative shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]">
                        <div class="absolute left-0 top-0 bottom-0 bg-[#4772b3] pointer-events-none" style="width: 12.5%;"></div>
                      </div>
                      <span class="text-[12px] text-[#ddd] w-11 text-right tabular-nums pointer-events-none shrink-0">0.125</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 opacity-[0.45]">
                    <span class="w-[64px] shrink-0 text-right text-[12px] text-[#888] pointer-events-none">Streaks</span>
                    <div class="flex-1 min-w-0 flex items-center gap-2" alt-id="Streaks field; grayed out for Fog Glow type; value 4">
                      <div class="flex-1 h-[13px] bg-[#252525] rounded-[2px] border border-[#1a1a1a] overflow-hidden relative">
                        <div class="absolute left-0 top-0 bottom-0 bg-[#3d3d3d] pointer-events-none" style="width: 40%;"></div>
                      </div>
                      <span class="text-[12px] text-[#777] w-11 text-right tabular-nums pointer-events-none shrink-0">4</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 opacity-[0.45]">
                    <span class="w-[64px] shrink-0 text-right text-[12px] text-[#888] pointer-events-none">Streaks Angle</span>
                    <div class="flex-1 min-w-0 flex items-center gap-2" alt-id="Streaks Angle; disabled for Fog Glow; 0 degrees">
                      <div class="flex-1 h-[13px] bg-[#252525] rounded-[2px] border border-[#1a1a1a] overflow-hidden relative">
                        <div class="absolute left-0 top-0 bottom-0 bg-[#3d3d3d] pointer-events-none w-0"></div>
                      </div>
                      <span class="text-[12px] text-[#777] w-11 text-right tabular-nums pointer-events-none shrink-0">0°</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 opacity-[0.45]">
                    <span class="w-[64px] shrink-0 text-right text-[12px] text-[#888] pointer-events-none">Iterations</span>
                    <div class="flex-1 min-w-0 flex items-center gap-2" alt-id="Iterations; grayed; value 3">
                      <div class="flex-1 h-[13px] bg-[#252525] rounded-[2px] border border-[#1a1a1a] overflow-hidden relative">
                        <div class="absolute left-0 top-0 bottom-0 bg-[#3d3d3d] pointer-events-none" style="width: 30%;"></div>
                      </div>
                      <span class="text-[12px] text-[#777] w-11 text-right tabular-nums pointer-events-none shrink-0">3</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 opacity-[0.45]">
                    <span class="w-[64px] shrink-0 text-right text-[12px] text-[#888] pointer-events-none">Fade</span>
                    <div class="flex-1 min-w-0 flex items-center gap-2" alt-id="Fade; grayed; value 0.908">
                      <div class="flex-1 h-[13px] bg-[#252525] rounded-[2px] border border-[#1a1a1a] overflow-hidden relative">
                        <div class="absolute left-0 top-0 bottom-0 bg-[#3d3d3d] pointer-events-none" style="width: 90.8%;"></div>
                      </div>
                      <span class="text-[12px] text-[#777] w-11 text-right tabular-nums pointer-events-none shrink-0">0.908</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 opacity-[0.45]">
                    <span class="w-[64px] shrink-0 text-right text-[12px] text-[#888] pointer-events-none">Color Modulation</span>
                    <div class="flex-1 min-w-0 flex items-center gap-2" alt-id="Color Modulation; grayed; value 0.250">
                      <div class="flex-1 h-[13px] bg-[#252525] rounded-[2px] border border-[#1a1a1a] overflow-hidden relative">
                        <div class="absolute left-0 top-0 bottom-0 bg-[#3d3d3d] pointer-events-none" style="width: 25%;"></div>
                      </div>
                      <span class="text-[12px] text-[#777] w-11 text-right tabular-nums pointer-events-none shrink-0">0.250</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 opacity-[0.45] pl-[64px]">
                    <div class="flex items-center gap-2 cursor-default" alt-id="Diagonal checkbox; checked but disabled for Fog Glow">
                      <div class="w-3.5 h-3.5 bg-[#3d3d3d] border border-[#1a1a1a] rounded-sm flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] pointer-events-none">
                        <i class="fa-solid fa-check text-[9px] text-[#999] pointer-events-none"></i>
                      </div>
                      <span class="text-[12px] text-[#888] pointer-events-none">Diagonal</span>
                    </div>
                  </div>
                </div>
              {/if}

              <div class="pt-1 border-t border-[#2a2a2a] mt-1 opacity-[0.45]">
                <div class="text-[11px] text-[#888] uppercase tracking-wide px-0.5 mb-1.5 pointer-events-none">Sun Position</div>
                <div class="flex flex-col gap-2 pl-1">
                  <div class="flex items-center gap-2">
                    <span class="w-[64px] shrink-0 text-right text-[12px] text-[#888] pointer-events-none">X</span>
                    <div class="flex-1 min-w-0 flex items-center gap-2" alt-id="Sun Position X; grayed; 0.500">
                      <div class="flex-1 h-[13px] bg-[#252525] rounded-[2px] border border-[#1a1a1a] overflow-hidden relative">
                        <div class="absolute left-0 top-0 bottom-0 bg-[#3d3d3d] pointer-events-none" style="width: 50%;"></div>
                      </div>
                      <span class="text-[12px] text-[#777] w-11 text-right tabular-nums pointer-events-none shrink-0">0.500</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-[64px] shrink-0 text-right text-[12px] text-[#888] pointer-events-none">Y</span>
                    <div class="flex-1 min-w-0 flex items-center gap-2" alt-id="Sun Position Y; grayed; 0.500">
                      <div class="flex-1 h-[13px] bg-[#252525] rounded-[2px] border border-[#1a1a1a] overflow-hidden relative">
                        <div class="absolute left-0 top-0 bottom-0 bg-[#3d3d3d] pointer-events-none" style="width: 50%;"></div>
                      </div>
                      <span class="text-[12px] text-[#777] w-11 text-right tabular-nums pointer-events-none shrink-0">0.500</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-2 opacity-[0.45] pt-1">
                <span class="w-[72px] shrink-0 text-right pr-2 text-[12px] text-[#888] pointer-events-none">Jitter</span>
                <div class="flex-1 min-w-0 flex items-center gap-2" alt-id="Jitter; grayed; 0.000">
                  <div class="flex-1 h-[13px] bg-[#252525] rounded-[2px] border border-[#1a1a1a] overflow-hidden relative">
                    <div class="absolute left-0 top-0 bottom-0 bg-[#3d3d3d] pointer-events-none w-0"></div>
                  </div>
                  <span class="text-[12px] text-[#777] w-11 text-right tabular-nums pointer-events-none shrink-0">0.000</span>
                </div>
              </div>

              <div class="flex items-center gap-1 opacity-[0.45] pb-0.5">
                <span class="w-[72px] shrink-0 text-right pr-2 text-[12px] text-[#888] pointer-events-none">Data Type</span>
                <div class="flex-1 min-w-0 bg-[#252525] border border-[#1a1a1a] rounded-[3px] px-2 h-6 flex items-center justify-between cursor-default" alt-id="Data Type dropdown; Float; grayed out">
                  <span class="text-[12px] text-[#777] pointer-events-none truncate">Float</span>
                  <i class="fa-solid fa-chevron-down text-[9px] opacity-40 pointer-events-none shrink-0"></i>
                </div>
              </div>
            </div>
            {/if}
          </div>
          
          <!-- Custom Properties Panel -->
          <div class="border-b border-[#1f1f1f]">
            <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" on:click={toggleCustomPropertiesPanel} alt-id="Custom Properties panel header">
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
                  <div class="w-[20px] h-6 flex items-center justify-center cursor-pointer opacity-80 hover:opacity-100" on:click={toggleEditProperty} alt-id="Custom property settings button">
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
          {/if}

          {#if activeSidebarTab === 'group'}
          <!-- Group Panel -->
          <div class="border-b border-[#1f1f1f]">
            <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" on:click={toggleGroupPanel} alt-id="Group panel header">
              <div class="flex items-center gap-2 pointer-events-none">
                {#if isGroupPanelExpanded}
                  <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center pointer-events-none"></i>
                {:else}
                  <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center pointer-events-none"></i>
                {/if}
                <span class="font-medium text-[14px] pointer-events-none">Group</span>
              </div>
              <div class="flex gap-[2px] opacity-40 cursor-grab" alt-id="Group panel drag handle">
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
            
            {#if isGroupPanelExpanded}
            <div class="p-3 flex flex-col gap-2.5 text-[#ccc]">
              <div class="flex items-center gap-2">
                <span class="w-[72px] shrink-0 text-right text-[12px] pointer-events-none">Name</span>
                <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Group name input field; value Compositing Nodetree">
                  <span class="text-[13px] text-white pointer-events-none">Compositing Nodetr...</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-[72px] shrink-0 text-right text-[12px] pointer-events-none">Description</span>
                <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Group description input field; value Description; grayed out">
                  <span class="text-[13px] text-[#666] pointer-events-none">Description</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-[72px] shrink-0 text-right text-[12px] pointer-events-none">Color Tag</span>
                <div class="flex-1 bg-[#252525] border border-[#1a1a1a] rounded-[3px] px-2 h-6 flex items-center justify-between cursor-pointer text-[#e6e6e6] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] hover:bg-[#333]" alt-id="Color Tag dropdown; value None">
                  <span class="text-[13px] pointer-events-none truncate">None</span>
                  <i class="fa-solid fa-chevron-down text-[10px] opacity-60 pointer-events-none shrink-0"></i>
                </div>
              </div>
              <div class="flex items-center gap-2 opacity-[0.45]">
                <span class="w-[72px] shrink-0 text-right text-[12px] text-[#888] pointer-events-none">Node Width</span>
                <div class="flex-1 min-w-0 flex items-center gap-2" alt-id="Node Width slider; grayed out; 140">
                  <div class="flex-1 h-6 bg-[#333] rounded-[3px] border border-[#111] flex items-center justify-center cursor-default shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
                    <span class="text-[13px] text-[#eee] pointer-events-none">140</span>
                  </div>
                  <div class="w-6 h-6 bg-[#2a2a2a] border border-[#111] rounded-[3px] flex items-center justify-center cursor-default opacity-50" alt-id="Reset to default node width button; grayed out">
                    <div class="w-2.5 h-[1px] bg-[#ccc] pointer-events-none relative"><div class="w-1.5 h-1.5 border-[1px] border-[#ccc] rounded-[1px] absolute top-[-3px] left-[1px]"></div></div>
                  </div>
                </div>
              </div>
            </div>
            {/if}
          </div>

          <!-- Group Sockets Panel -->
          <div class="border-b border-[#1f1f1f]">
            <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" on:click={toggleGroupSocketsPanel} alt-id="Group Sockets panel header">
              <div class="flex items-center gap-2 pointer-events-none">
                {#if isGroupSocketsPanelExpanded}
                  <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center pointer-events-none"></i>
                {:else}
                  <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center pointer-events-none"></i>
                {/if}
                <span class="font-medium text-[14px] pointer-events-none">Group Sockets</span>
              </div>
              <div class="flex gap-[2px] opacity-40 cursor-grab" alt-id="Group Sockets panel drag handle">
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
            
            {#if isGroupSocketsPanelExpanded}
            <div class="p-3 flex flex-col gap-2.5 text-[#ccc]">
              <div class="flex gap-1.5 h-[160px]" alt-id="Group sockets list">
                <div class="flex-1 bg-[#282828] border border-[#111] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex flex-col relative overflow-hidden" alt-id="Sockets list box">
                  <div class="bg-[#4772b3] text-white flex items-center px-2 py-[2px] cursor-pointer" alt-id="Selected socket: Image (yellow circle)">
                    <div class="flex-1 text-center pr-4 text-[13px] pointer-events-none">Image</div>
                    <div class="w-2.5 h-2.5 rounded-full bg-[#cccc33] border border-[#111] shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] shrink-0" alt-id="Color socket type indicator"></div>
                  </div>
                  <div class="text-[#ccc] flex items-center gap-2 px-2 py-[2px] cursor-pointer hover:bg-[#333]" alt-id="Unselected socket: Image (yellow circle)">
                    <div class="w-2.5 h-2.5 rounded-full bg-[#cccc33] border border-[#111] shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] shrink-0" alt-id="Color socket type indicator"></div>
                    <span class="text-[13px] pointer-events-none">Image</span>
                  </div>
                  
                  <div class="absolute bottom-1 left-1 right-1 flex justify-between items-center text-[#666]">
                    <i class="fa-solid fa-play text-[8px] pointer-events-none"></i>
                    <div class="grid grid-cols-2 gap-[2px] cursor-ns-resize" alt-id="Resize handle for sockets list box">
                      <div class="w-[2px] h-[2px] rounded-full bg-[#888] pointer-events-none"></div>
                      <div class="w-[2px] h-[2px] rounded-full bg-[#888] pointer-events-none"></div>
                      <div class="w-[2px] h-[2px] rounded-full bg-[#888] pointer-events-none"></div>
                      <div class="w-[2px] h-[2px] rounded-full bg-[#888] pointer-events-none"></div>
                    </div>
                    <div></div>
                  </div>
                </div>
                
                <div class="w-6 flex flex-col gap-[2px]">
                  <div class="w-6 h-6 bg-[#3d3d3d] border border-[#1f1f1f] rounded-[3px] flex items-center justify-center cursor-pointer hover:bg-[#4d4d4d] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" alt-id="Add socket button">
                    <i class="fa-solid fa-plus text-[12px] pointer-events-none"></i>
                  </div>
                  <div class="w-6 h-6 bg-[#3d3d3d] border border-[#1f1f1f] rounded-[3px] flex items-center justify-center cursor-pointer hover:bg-[#4d4d4d] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" alt-id="Remove socket button">
                    <i class="fa-solid fa-minus text-[12px] pointer-events-none"></i>
                  </div>
                  <div class="w-6 h-6 bg-[#252525] border border-[#1a1a1a] rounded-[3px] flex items-center justify-center mt-1 text-[#666]" alt-id="Move socket down button; grayed out">
                    <i class="fa-solid fa-chevron-down text-[12px] pointer-events-none"></i>
                  </div>
                </div>
              </div>
              
              <div class="flex items-center gap-2 mt-1">
                <span class="w-[72px] shrink-0 text-right text-[12px] text-[#aaa] pointer-events-none">Type</span>
                <div class="flex-1 bg-[#252525] border border-[#1a1a1a] rounded-[3px] px-2 h-6 flex items-center justify-between cursor-pointer text-[#e6e6e6] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] hover:bg-[#333]" alt-id="Socket Type dropdown; value Color">
                  <div class="flex items-center gap-2">
                    <div class="w-2.5 h-2.5 rounded-full bg-[#cccc33] border border-[#111] shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] shrink-0" alt-id="Color socket type indicator"></div>
                    <span class="text-[13px] pointer-events-none">Color</span>
                  </div>
                  <i class="fa-solid fa-chevron-down text-[10px] opacity-60 pointer-events-none shrink-0"></i>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-[72px] shrink-0 text-right text-[12px] text-[#aaa] pointer-events-none">Description</span>
                <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Socket description input field; value The image with the ...">
                  <span class="text-[13px] text-white pointer-events-none">The image with the ...</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-[72px] shrink-0 text-right text-[12px] text-[#aaa] pointer-events-none">Default</span>
                <div class="flex-1 h-5 rounded-[3px] border border-[#111] cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] flex overflow-hidden" alt-id="Socket default color picker field">
                  <div class="flex-1 bg-black pointer-events-none"></div>
                  <div class="w-[45%] pointer-events-none relative">
                    <div class="absolute inset-0" style="background-image: linear-gradient(45deg, #808080 25%, transparent 25%), linear-gradient(-45deg, #808080 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #808080 75%), linear-gradient(-45deg, transparent 75%, #808080 75%); background-size: 8px 8px; background-position: 0 0, 0 4px, 4px -4px, -4px 0px;"></div>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-[72px]"></div>
                <div class="flex items-center gap-2 cursor-pointer text-[#ccc] hover:text-white" alt-id="Hide Value checkbox; unchecked">
                  <div class="w-3.5 h-3.5 border border-[#111] bg-[#333] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] pointer-events-none"></div>
                  <span class="text-[13px] pointer-events-none">Hide Value</span>
                </div>
              </div>
            </div>
            {/if}
          </div>

          <!-- Group Animation Panel -->
          <div class="border-b border-[#1f1f1f]">
            <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" on:click={toggleGroupAnimationPanel} alt-id="Group Animation panel header">
              <div class="flex items-center gap-2 pointer-events-none">
                {#if isGroupAnimationPanelExpanded}
                  <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center pointer-events-none"></i>
                {:else}
                  <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center pointer-events-none"></i>
                {/if}
                <span class="font-medium text-[14px] pointer-events-none">Animation</span>
              </div>
              <div class="flex gap-[2px] opacity-40 cursor-grab" alt-id="Group Animation panel drag handle">
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
            
            {#if isGroupAnimationPanelExpanded}
            <div class="p-3 flex gap-2 text-[#ccc]">
              <div class="bg-[#2a2a2a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] h-6 w-9 flex items-center justify-between px-1 cursor-pointer text-[#e6e6e6] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] hover:bg-[#333]" alt-id="Action dropdown button">
                <i class="fa-solid fa-diagram-project text-[12px] opacity-80 pointer-events-none"></i>
                <i class="fa-solid fa-chevron-down text-[8px] opacity-60 pointer-events-none"></i>
              </div>
              <div class="flex-1 bg-[#3d3d3d] border border-[#1f1f1f] rounded-[3px] h-6 flex items-center justify-center gap-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] cursor-pointer hover:bg-[#4d4d4d]" alt-id="New Action button">
                <i class="fa-solid fa-plus text-[12px] text-[#ccc] pointer-events-none"></i>
                <span class="text-[13px] text-[#eee] pointer-events-none pr-1">New</span>
              </div>
            </div>
            {/if}
          </div>
          {/if}

        {#if isColorPickerOpen}
        <div class="absolute left-1.5 top-[118px] z-[60] w-[236px] bg-[#1d1d1d] border border-[#333] rounded-[5px] shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex flex-col p-2 text-[12px] text-[#ccc] gap-2" alt-id="Color picker popover menu; opened from Glare Tint in compositor sidebar or graph node">
          <div class="flex gap-2">
            <div class="w-[180px] h-[180px] rounded-full relative cursor-crosshair shrink-0" alt-id="Color wheel area">
              <div class="absolute inset-0 rounded-full border-[10px] border-transparent" style="background: conic-gradient(red, magenta, blue, cyan, lime, yellow, red); border-radius: 50%;"></div>
              <div class="absolute inset-0 rounded-full" style="background: radial-gradient(circle closest-side, white 0%, transparent 100%);"></div>
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full border border-[#111] bg-white shadow-[0_0_2px_rgba(0,0,0,0.5)] pointer-events-none"></div>
            </div>
            <div class="flex-1 min-w-[28px] rounded-[3px] border border-[#111] relative cursor-row-resize min-h-[180px]" alt-id="Color brightness slider">
              <div class="absolute inset-0 rounded-[2px]" style="background: linear-gradient(to bottom, white, black);"></div>
              <div class="absolute top-0 left-[-2px] right-[-2px] h-[6px] bg-white border border-[#111] rounded-[1px] pointer-events-none"></div>
            </div>
          </div>
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
          <div class="flex flex-col border border-[#111] rounded-[3px] overflow-hidden bg-[#2a2a2a]" alt-id="Color components inputs">
            <div class="flex items-center px-2 py-[2px] border-b border-[#111] cursor-ew-resize hover:bg-[#333]" alt-id="Hue input slider: 0.000">
              <span class="text-[#aaa] pointer-events-none">Hue</span>
              <span class="flex-1 text-right text-white pointer-events-none">0.000</span>
            </div>
            <div class="flex items-center px-2 py-[2px] border-b border-[#111] cursor-ew-resize hover:bg-[#333]" alt-id="Saturation input slider: 0.000">
              <span class="text-[#aaa] pointer-events-none">Saturation</span>
              <span class="flex-1 text-right text-white pointer-events-none">0.000</span>
            </div>
            <div class="flex items-center px-2 py-[2px] border-b border-[#111] cursor-ew-resize bg-[#4772b3] text-white relative" alt-id="Value input slider: 1.000, active">
              <div class="absolute top-0 bottom-0 left-0 bg-[#5985cc] pointer-events-none" style="width: 100%;"></div>
              <span class="relative z-10 pointer-events-none">Value</span>
              <span class="flex-1 text-right text-white relative z-10 pointer-events-none">1.000</span>
            </div>
            <div class="flex items-center px-2 py-[2px] cursor-ew-resize bg-[#4772b3] text-white relative" alt-id="Alpha input slider: 1.000, active">
              <div class="absolute top-0 bottom-0 left-0 bg-[#5985cc] pointer-events-none" style="width: 100%;"></div>
              <span class="relative z-10 pointer-events-none">Alpha</span>
              <span class="flex-1 text-right text-white relative z-10 pointer-events-none">1.000</span>
            </div>
          </div>
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

        {#if isEditPropertyOpen}
        <div class="fixed inset-0 z-40 bg-transparent" on:click={toggleEditProperty} ></div>
        <div class="absolute right-[270px] top-[400px] w-[320px] bg-[#1d1d1d] border border-[#333] rounded-[5px] shadow-[0_10px_30px_rgba(0,0,0,0.8)] z-[60] flex flex-col text-[13px] text-[#ccc]" alt-id="Edit Property popover">
          <!-- Header -->
          <div class="px-3 py-2 border-b border-[#2a2a2a] flex items-center text-white font-medium" alt-id="Edit Property popover header">
            <span class="pointer-events-none">Edit Property</span>
          </div>
          <!-- Body -->
          <div class="p-3 flex flex-col gap-2">
            <!-- Type -->
            <div class="flex items-center gap-2">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Type</span>
              <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between cursor-pointer shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" alt-id="Edit Property Type dropdown; value Float">
                <span class="text-[13px] text-[#eee] pointer-events-none"><u class="underline-offset-2 decoration-1 text-[#eee] pointer-events-none">F</u>loat</span>
                <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
              </div>
            </div>
            <!-- Property Name -->
            <div class="flex items-center gap-2">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Property Name</span>
              <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Edit Property Name input; value prop">
                <span class="text-[13px] text-white pointer-events-none">prop</span>
              </div>
            </div>
            <!-- Default Value -->
            <div class="flex items-center gap-2">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Default Value</span>
              <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Edit Property Default Value slider; value 1.00">
                <span class="text-[13px] text-[#eee] pointer-events-none">1.00</span>
              </div>
            </div>
            <!-- Min -->
            <div class="flex items-center gap-2">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Min</span>
              <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] rounded-b-[1px] border-b-0 h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Edit Property Min slider; value 0.00">
                <span class="text-[13px] text-[#eee] pointer-events-none">0.00</span>
              </div>
            </div>
            <!-- Max -->
            <div class="flex items-center gap-2 -mt-2">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Max</span>
              <div class="flex-1 bg-[#4d4d4d] border border-[#222] border-t-0 rounded-[3px] rounded-t-[1px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Edit Property Max slider; value 1.00">
                <span class="text-[13px] text-[#eee] pointer-events-none">1.00</span>
              </div>
            </div>
            <!-- Soft Limits -->
            <div class="flex items-center gap-2 mt-1">
              <span class="w-[100px]"></span>
              <div class="flex items-center gap-2 cursor-pointer" alt-id="Soft Limits checkbox; unchecked">
                <div class="w-3.5 h-3.5 border border-[#111] bg-[#444] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] pointer-events-none"></div>
                <span class="text-[13px] text-[#aaa] pointer-events-none">Soft Limits</span>
              </div>
            </div>
            <!-- Soft Min -->
            <div class="flex items-center gap-2 opacity-50 mt-1">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Soft Min</span>
              <div class="flex-1 bg-[#252525] border border-[#1a1a1a] rounded-[3px] rounded-b-[1px] border-b-0 h-[22px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Edit Property Soft Min slider; value 0.00; disabled">
                <span class="text-[13px] text-[#888] pointer-events-none">0.00</span>
              </div>
            </div>
            <!-- Soft Max -->
            <div class="flex items-center gap-2 -mt-2 opacity-50">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Max</span>
              <div class="flex-1 bg-[#252525] border border-[#1a1a1a] border-t-0 rounded-[3px] rounded-t-[1px] h-[22px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Edit Property Soft Max slider; value 1.00; disabled">
                <span class="text-[13px] text-[#888] pointer-events-none">1.00</span>
              </div>
            </div>
            <!-- Step -->
            <div class="flex items-center gap-2 mt-1">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Step</span>
              <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Edit Property Step slider; value 0.10">
                <span class="text-[13px] text-[#eee] pointer-events-none">0.10</span>
              </div>
            </div>
            <!-- Precision -->
            <div class="flex items-center gap-2">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Precision</span>
              <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Edit Property Precision slider; value 3">
                <span class="text-[13px] text-[#eee] pointer-events-none">3</span>
              </div>
            </div>
            <!-- Subtype -->
            <div class="flex items-center gap-2">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Subtype</span>
              <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between cursor-pointer shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" alt-id="Edit Property Subtype dropdown; value Plain Data">
                <span class="text-[13px] text-[#eee] pointer-events-none"><u class="underline-offset-2 decoration-1 text-[#eee] pointer-events-none">P</u>lain Data</span>
                <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
              </div>
            </div>
            <!-- Description -->
            <div class="flex items-center gap-2">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Description</span>
              <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Edit Property Description input; empty">
                <span class="text-[13px] text-[#888] pointer-events-none">&nbsp;</span>
              </div>
            </div>
            <!-- Library Overridable -->
            <div class="flex items-center gap-2 mt-1">
              <span class="w-[100px]"></span>
              <div class="flex items-center gap-2 cursor-pointer" alt-id="Library Overridable checkbox; unchecked">
                <div class="w-3.5 h-3.5 border border-[#111] bg-[#444] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] pointer-events-none"></div>
                <span class="text-[13px] text-[#aaa] pointer-events-none">Library Overridable</span>
              </div>
            </div>
          </div>
          
          <!-- Footer Buttons -->
          <div class="px-3 pb-3 flex items-center gap-2 pt-1 mt-1">
            <div class="flex-1 bg-[#444] hover:bg-[#555] rounded-[3px] border border-[#222] py-1 text-center cursor-pointer text-[#eee] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" on:click={toggleEditProperty} alt-id="Cancel Edit Property button"><u class="underline-offset-2 decoration-1 text-[#eee] pointer-events-none">C</u>ancel</div>
            <div class="flex-1 bg-[#4772b3] hover:bg-[#5985cc] rounded-[3px] border border-[#222] py-1 text-center cursor-pointer text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" on:click={toggleEditProperty} alt-id="OK Edit Property button"><u class="underline-offset-2 decoration-1 text-white pointer-events-none">O</u>K</div>
          </div>
        </div>
        {/if}
      
      {#if activeSidebarTab === 'tool'}
      <!-- Tool Panel -->
      <div class="border-b border-[#1f1f1f]">
        <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" alt-id="Active Tool panel header">
          <div class="flex items-center gap-2 pointer-events-none">
            <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center pointer-events-none"></i>
            <span class="font-medium text-[14px] pointer-events-none">Active Tool</span>
          </div>
          <div class="flex gap-[2px] opacity-40 cursor-grab" alt-id="Active Tool panel drag handle">
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
        
        <div class="p-3 flex flex-col gap-2.5 text-[#ccc]">
          <div class="flex items-center gap-3 px-2 py-1 cursor-pointer" alt-id="Select Box tool button">
            <div class="w-6 h-6 border border-dashed border-[#e68a00] flex items-center justify-center pointer-events-none">
              <i class="fa-solid fa-arrow-pointer text-[12px] text-[#ccc] pointer-events-none"></i>
            </div>
            <span class="text-[13px] pointer-events-none">Select Box</span>
          </div>
          
          <div class="flex gap-[1px] px-2" alt-id="Selection modes">
            <div class="w-6 h-6 bg-[#4772b3] rounded-l-[3px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]" alt-id="New selection mode; active">
              <div class="w-3.5 h-3.5 border border-dashed border-white pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 bg-[#282828] flex items-center justify-center cursor-pointer hover:bg-[#333] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] relative" alt-id="Add to selection mode">
              <div class="w-2.5 h-2.5 bg-[#ccc] absolute top-1 left-1 pointer-events-none"></div>
              <div class="w-2.5 h-2.5 bg-[#999] absolute bottom-1 right-1 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 bg-[#282828] rounded-r-[3px] flex items-center justify-center cursor-pointer hover:bg-[#333] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] relative" alt-id="Subtract from selection mode">
              <div class="w-2.5 h-2.5 bg-[#ccc] absolute top-1 left-1 pointer-events-none"></div>
              <div class="w-2.5 h-2.5 border border-dashed border-[#999] absolute bottom-1 right-1 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
      {/if}
      
      {#if activeSidebarTab === 'view'}
      <!-- View Panel -->
        <!-- Backdrop Panel -->
        <div class="border-b border-[#1f1f1f]">
          <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" on:click={toggleBackdropPanel} alt-id="Backdrop panel header">
            <div class="flex items-center gap-2 pointer-events-none">
              {#if isBackdropPanelExpanded}
                <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center pointer-events-none"></i>
              {:else}
                <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center pointer-events-none"></i>
              {/if}
              <div class="w-3.5 h-3.5 border border-[#111] bg-[#444] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] pointer-events-none"></div>
              <span class="font-medium text-[14px] pointer-events-none">Backdrop</span>
            </div>
            <div class="flex gap-[2px] opacity-40 cursor-grab" alt-id="Backdrop panel drag handle">
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
          {#if isBackdropPanelExpanded}
          <div class="p-3 flex flex-col gap-1.5 text-[#ccc]">
            <!-- Channels -->
            <div class="flex items-center gap-2">
              <span class="w-[72px] shrink-0 text-right text-[12px] pointer-events-none">Channels</span>
              <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Backdrop Channels dropdown; value Color & Alpha">
                <div class="flex items-center gap-1.5 pointer-events-none">
                  <i class="fa-solid fa-image text-[10px] text-[#aaa]"></i>
                  <span class="text-[13px] text-[#eee]">Color & Alpha</span>
                </div>
                <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
              </div>
            </div>
            <!-- Zoom -->
            <div class="flex items-center gap-2 mt-1">
              <span class="w-[72px] shrink-0 text-right text-[12px] pointer-events-none">Zoom</span>
              <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-6 flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Backdrop Zoom slider; value 1.00">
                <span class="text-[13px] text-[#eee] pointer-events-none">1.00</span>
              </div>
            </div>
            <!-- Offset X -->
            <div class="flex items-center gap-2 mt-1">
              <span class="w-[72px] shrink-0 text-right text-[12px] pointer-events-none">Offset X</span>
              <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] rounded-b-[1px] border-b-0 h-6 flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Backdrop Offset X slider; value 0.000">
                <span class="text-[13px] text-[#eee] pointer-events-none">0.000</span>
              </div>
            </div>
            <!-- Offset Y -->
            <div class="flex items-center gap-2 -mt-[2px]">
              <span class="w-[72px] shrink-0 text-right text-[12px] pointer-events-none">Y</span>
              <div class="flex-1 bg-[#4d4d4d] border border-[#222] border-t-0 rounded-[3px] rounded-t-[1px] h-6 flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Backdrop Offset Y slider; value 0.000">
                <span class="text-[13px] text-[#eee] pointer-events-none">0.000</span>
              </div>
            </div>
            <!-- Move Button -->
            <div class="flex mt-1">
              <div class="w-[72px] shrink-0"></div>
              <div class="flex-1 bg-[#444] hover:bg-[#555] rounded-[3px] border border-[#222] py-1 text-center cursor-pointer text-[#eee] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] text-[13px]" alt-id="Backdrop Move button">Move</div>
            </div>
            <!-- Fit Button -->
            <div class="flex mt-0.5">
              <div class="w-[72px] shrink-0"></div>
              <div class="flex-1 bg-[#444] hover:bg-[#555] rounded-[3px] border border-[#222] py-1 text-center cursor-pointer text-[#eee] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] text-[13px]" alt-id="Backdrop Fit button">Fit</div>
            </div>
          </div>
          {/if}
        </div>

        <!-- Annotations Panel -->
        <div class="border-b border-[#1f1f1f]">
          <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" on:click={toggleAnnotationsPanel} alt-id="Annotations panel header">
            <div class="flex items-center gap-2 pointer-events-none">
              {#if isAnnotationsPanelExpanded}
                <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center pointer-events-none"></i>
              {:else}
                <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center pointer-events-none"></i>
              {/if}
              <span class="font-medium text-[14px] pointer-events-none">Annotations</span>
            </div>
            <div class="flex gap-[2px] opacity-40 cursor-grab" alt-id="Annotations panel drag handle">
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
          {#if isAnnotationsPanelExpanded}
          <div class="p-3 flex flex-col gap-2 text-[#ccc]">
            <div class="flex items-center gap-1">
              <div class="bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Annotations tool dropdown">
                <i class="fa-solid fa-pen-nib text-[12px] text-[#eee] mr-1 pointer-events-none"></i>
                <i class="fa-solid fa-chevron-down text-[9px] text-[#a0a0a0] pointer-events-none"></i>
              </div>
              <div class="flex-1 bg-[#444] hover:bg-[#555] rounded-[3px] border border-[#222] h-6 flex items-center justify-center cursor-pointer text-[#eee] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] text-[13px]" alt-id="New Annotation button">
                <i class="fa-solid fa-plus text-[10px] mr-2 pointer-events-none"></i>
                <span class="pointer-events-none">New</span>
              </div>
            </div>
          </div>
          {/if}
        </div>
      {/if}
      
      {#if activeSidebarTab === 'options'}
      <!-- Options Panel -->
      <div class="flex-1 overflow-y-auto">
        <!-- Performance Panel -->
        <div class="border-b border-[#1f1f1f]">
          <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" on:click={togglePerformancePanel} alt-id="Performance panel header">
            <div class="flex items-center gap-2 pointer-events-none">
              {#if isPerformancePanelExpanded}
                <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center pointer-events-none"></i>
              {:else}
                <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center pointer-events-none"></i>
              {/if}
              <span class="font-medium text-[14px] pointer-events-none">Performance</span>
            </div>
            <div class="flex gap-[2px] opacity-40 cursor-grab" alt-id="Performance panel drag handle">
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
          {#if isPerformancePanelExpanded}
          <div class="p-3 flex flex-col gap-1.5 text-[#ccc]">
            <!-- Device -->
            <div class="flex items-center gap-2">
              <span class="w-[72px] shrink-0 text-right text-[12px] pointer-events-none">Device</span>
              <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Performance Device dropdown; value CPU">
                <span class="text-[13px] text-[#eee] pointer-events-none">CPU</span>
                <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
              </div>
            </div>
          </div>
          {/if}
        </div>
      </div>
      {/if}
      
      </div>
      </div>
      
      <!-- Vertical Sidebar Tabs -->
      <div class="w-[34px] bg-[#1a1a1a] flex flex-col text-[#ccc] border-l border-[#1f1f1f] text-[13px]">
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide {activeSidebarTab === 'group' ? 'text-white bg-[#3d3d3d]' : 'hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333]'}" on:click={() => setActiveSidebarTab('group')} alt-id="Group tab, first element in the compositor sidebar tabs" style="writing-mode: vertical-rl;"><span class="pointer-events-none">Group</span></div>
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide mt-0.5 {activeSidebarTab === 'node' ? 'text-white bg-[#3d3d3d]' : 'hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333]'}" on:click={() => setActiveSidebarTab('node')} alt-id="Node tab, currently selected, second element in the compositor sidebar tabs" style="writing-mode: vertical-rl;"><span class="pointer-events-none">Node</span></div>
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide mt-0.5 {activeSidebarTab === 'tool' ? 'text-white bg-[#3d3d3d]' : 'hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333]'}" on:click={() => setActiveSidebarTab('tool')} alt-id="Tool tab, third element in the compositor sidebar tabs" style="writing-mode: vertical-rl;"><span class="pointer-events-none">Tool</span></div>
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333] rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide mt-0.5 {activeSidebarTab === 'view' ? 'text-white bg-[#3d3d3d]' : 'hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333]'}" on:click={() => setActiveSidebarTab('view')} alt-id="View tab, fourth element in the compositor sidebar tabs" style="writing-mode: vertical-rl;"><span class="pointer-events-none">View</span></div>
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333] rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide mt-0.5 {activeSidebarTab === 'options' ? 'text-white bg-[#3d3d3d]' : 'hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333]'}" on:click={() => setActiveSidebarTab('options')} alt-id="Options tab, fifth element in the compositor sidebar tabs" style="writing-mode: vertical-rl;"><span class="pointer-events-none">Options</span></div>
      </div>
    </div>
  </div>

  <!-- Node Context Menu -->
  {#if isNodeContextMenuOpen}
    <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => { 
        isNodeContextMenuOpen = false;
        isNodeContextMenuAddOpen = false;
        isNodeContextMenuInputOpen = false;
        isNodeContextMenuColorOpen = false;
        isNodeContextMenuAdjustOpen = false;
        isNodeContextMenuOutputOpen = false;
        isNodeContextMenuKeyingOpen = false;
        isNodeContextMenuTransformOpen = false;
        updateOpenParam();
    }} on:contextmenu|preventDefault={() => {
        isNodeContextMenuOpen = false;
        isNodeContextMenuAddOpen = false;
        isNodeContextMenuInputOpen = false;
        isNodeContextMenuColorOpen = false;
        isNodeContextMenuAdjustOpen = false;
        isNodeContextMenuOutputOpen = false;
        isNodeContextMenuKeyingOpen = false;
        isNodeContextMenuTransformOpen = false;
        updateOpenParam();
    }}></div>
    <div class="fixed bg-[#1d1d1d] border border-[#2a2a2a] rounded shadow-[0_4px_12px_rgba(0,0,0,0.8)] z-[100] py-1 w-[260px] text-[#cccccc] text-[13px] flex flex-col"
         style="left: {contextMenuX}px; top: {contextMenuY}px;"
         alt-id="Node context menu">
      
      <div class="px-3 py-1 text-[#aaa] border-b border-[#333] mb-1 flex items-center" alt-id="Context menu header: Node">
        <span class="pointer-events-none">Node</span>
      </div>

      <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group bg-[#4d4d4d] text-white" on:mouseenter={() => { isNodeContextMenuAddOpen = true; updateOpenParam(); }} alt-id="Context menu item: Add">
        <div class="flex items-center gap-2 pointer-events-none">
          <i class="fa-solid fa-plus text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
          <span><u class="underline-offset-2 decoration-1">A</u>dd</span>
        </div>
        <div class="flex items-center gap-1 pointer-events-none">
          <span class="text-[11px] text-[#aaa] group-hover:text-[#eee]">⇧ A</span>
          <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee]"></i>
        </div>
        
        {#if isNodeContextMenuAddOpen}
          <!-- Add Nested Menu -->
          <div class="absolute left-[calc(100%-4px)] top-[24px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[240px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Add nested menu">
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group bg-[#4d4d4d] text-white" on:mouseenter={() => { isNodeContextMenuInputOpen = true; updateOpenParam(); }} alt-id="Add menu item: Input">
              <span class="pointer-events-none ml-5">Input</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isNodeContextMenuInputOpen}
                <!-- Input Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[102] w-[220px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Input nested menu">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Input menu item: Constant">
                    <span class="pointer-events-none ml-5">Constant</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Input menu item: Bokeh Image">
                    <span class="pointer-events-none ml-5">Bokeh Image</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Input menu item: Group Input">
                    <span class="pointer-events-none ml-5">Group Input</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Input menu item: Image">
                    <span class="pointer-events-none ml-5">Image</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Input menu item: Image Info">
                    <span class="pointer-events-none ml-5">Image Info</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Input menu item: Image Coordinates">
                    <span class="pointer-events-none ml-5">Image Coordinates</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Input menu item: Mask">
                    <span class="pointer-events-none ml-5">Mask</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Input menu item: Movie Clip">
                    <span class="pointer-events-none ml-5">Movie Clip</span>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Input menu item: Scene">
                    <span class="pointer-events-none ml-5">Scene</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
                  </div>
                  
                </div>
              {/if}
            </div>
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group bg-[#4d4d4d] text-white" on:mouseenter={() => { isNodeContextMenuOutputOpen = true; updateOpenParam(); }} alt-id="Add menu item: Output">
              <span class="pointer-events-none ml-5">Output</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isNodeContextMenuOutputOpen}
                <!-- Output Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[20px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[220px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Output nested menu">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Output menu item: Enable Output">
                    <span class="pointer-events-none ml-5">Enable Output</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Output menu item: Group Output">
                    <span class="pointer-events-none ml-5">Group Output</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Output menu item: Viewer">
                    <span class="pointer-events-none ml-5">Viewer</span>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Output menu item: File Output">
                    <span class="pointer-events-none ml-5">File Output</span>
                  </div>
                  
                </div>
              {/if}
            </div>

            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group bg-[#4d4d4d] text-white" on:mouseenter={() => { isNodeContextMenuColorOpen = true; updateOpenParam(); }} alt-id="Add menu item: Color">
              <span class="pointer-events-none ml-5">Color</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isNodeContextMenuColorOpen}
                <!-- Color Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[40px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[220px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Color nested menu">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group bg-[#4d4d4d] text-white" on:mouseenter={() => { isNodeContextMenuAdjustOpen = true; updateOpenParam(); }} alt-id="Color menu item: Adjust">
                    <span class="pointer-events-none ml-5">Adjust</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
                    
                    {#if isNodeContextMenuAdjustOpen}
                      <!-- Adjust Nested Menu -->
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[104] w-[240px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Adjust nested menu">
                        
                        <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Adjust menu item: Brightness/Contrast">
                          <span class="pointer-events-none ml-5">Brightness/Contrast</span>
                        </div>
                        <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Adjust menu item: Color Balance">
                          <span class="pointer-events-none ml-5">Color Balance</span>
                        </div>
                        <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Adjust menu item: Color Correction">
                          <span class="pointer-events-none ml-5">Color Correction</span>
                        </div>
                        <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Adjust menu item: Exposure">
                          <span class="pointer-events-none ml-5">Exposure</span>
                        </div>
                        <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Adjust menu item: Gamma">
                          <span class="pointer-events-none ml-5">Gamma</span>
                        </div>
                        <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Adjust menu item: Hue Correct">
                          <span class="pointer-events-none ml-5">Hue Correct</span>
                        </div>
                        <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Adjust menu item: Hue/Saturation/Value">
                          <span class="pointer-events-none ml-5">Hue/Saturation/Value</span>
                        </div>
                        <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Adjust menu item: RGB Curves">
                          <span class="pointer-events-none ml-5">RGB Curves</span>
                        </div>
                        <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Adjust menu item: Tonemap">
                          <span class="pointer-events-none ml-5">Tonemap</span>
                        </div>
                        
                      </div>
                    {/if}
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Color menu item: Alpha Convert">
                    <span class="pointer-events-none ml-5">Alpha Convert</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Color menu item: Alpha Over">
                    <span class="pointer-events-none ml-5">Alpha Over</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Color menu item: Set Alpha">
                    <span class="pointer-events-none ml-5">Set Alpha</span>
                  </div>

                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Color menu item: Combine Color">
                    <span class="pointer-events-none ml-5">Combine Color</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Color menu item: Separate Color">
                    <span class="pointer-events-none ml-5">Separate Color</span>
                  </div>

                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Color menu item: Depth Combine">
                    <span class="pointer-events-none ml-5">Depth Combine</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Color menu item: Mix Color">
                    <span class="pointer-events-none ml-5">Mix Color</span>
                  </div>
                  
                </div>
              {/if}
            </div>
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Add menu item: Creative">
              <span class="pointer-events-none ml-5">Creative</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
            </div>
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Add menu item: Filter">
              <span class="pointer-events-none ml-5">Filter</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
            </div>

            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group bg-[#4d4d4d] text-white" on:mouseenter={() => { isNodeContextMenuKeyingOpen = true; updateOpenParam(); }} alt-id="Add menu item: Keying">
              <span class="pointer-events-none ml-5">Keying</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isNodeContextMenuKeyingOpen}
                <!-- Keying Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[148px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[220px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Keying nested menu">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Keying menu item: Channel Key">
                    <span class="pointer-events-none ml-5">Channel Key</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Keying menu item: Chroma Key">
                    <span class="pointer-events-none ml-5">Chroma Key</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Keying menu item: Color Key">
                    <span class="pointer-events-none ml-5">Color Key</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Keying menu item: Color Spill">
                    <span class="pointer-events-none ml-5">Color Spill</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Keying menu item: Difference Key">
                    <span class="pointer-events-none ml-5">Difference Key</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Keying menu item: Distance Key">
                    <span class="pointer-events-none ml-5">Distance Key</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Keying menu item: Keying">
                    <span class="pointer-events-none ml-5">Keying</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Keying menu item: Keying Screen">
                    <span class="pointer-events-none ml-5">Keying Screen</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Keying menu item: Luminance Key">
                    <span class="pointer-events-none ml-5">Luminance Key</span>
                  </div>
                  
                </div>
              {/if}
            </div>
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Add menu item: Mask">
              <span class="pointer-events-none ml-5">Mask</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
            </div>

            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Add menu item: Tracking">
              <span class="pointer-events-none ml-5">Tracking</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
            </div>

            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Add menu item: Texture">
              <span class="pointer-events-none ml-5">Texture</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
            </div>
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group bg-[#4d4d4d] text-white" on:mouseenter={() => { isNodeContextMenuTransformOpen = true; updateOpenParam(); }} alt-id="Add menu item: Transform">
              <span class="pointer-events-none ml-5">Transform</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isNodeContextMenuTransformOpen}
                <!-- Transform Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[230px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[220px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Transform nested menu">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Rotate">
                    <span class="pointer-events-none ml-5">Rotate</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Scale">
                    <span class="pointer-events-none ml-5">Scale</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Transform">
                    <span class="pointer-events-none ml-5">Transform</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Translate">
                    <span class="pointer-events-none ml-5">Translate</span>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Corner Pin">
                    <span class="pointer-events-none ml-5">Corner Pin</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Crop">
                    <span class="pointer-events-none ml-5">Crop</span>
                  </div>

                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Displace">
                    <span class="pointer-events-none ml-5">Displace</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Flip">
                    <span class="pointer-events-none ml-5">Flip</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Map UV">
                    <span class="pointer-events-none ml-5">Map UV</span>
                  </div>

                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Lens Distortion">
                    <span class="pointer-events-none ml-5">Lens Distortion</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Movie Distortion">
                    <span class="pointer-events-none ml-5">Movie Distortion</span>
                  </div>
                  
                </div>
              {/if}
            </div>
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Add menu item: Utilities">
              <span class="pointer-events-none ml-5">Utilities</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
            </div>

            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Add menu item: Camera & Lens Effects">
              <span class="pointer-events-none ml-5">Camera & Lens Effects</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
            </div>

            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Add menu item: Group">
              <span class="pointer-events-none ml-5">Group</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
            </div>
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Add menu item: Layout">
              <span class="pointer-events-none ml-5">Layout</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
            </div>

          </div>
        {/if}
      </div>

      <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Context menu item: Paste">
        <div class="flex items-center gap-2 pointer-events-none">
          <i class="fa-solid fa-paste text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
          <span><u class="underline-offset-2 decoration-1">P</u>aste</span>
        </div>
        <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ V</span>
      </div>

      <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

      <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Context menu item: Find...">
        <div class="flex items-center gap-2 pointer-events-none">
          <i class="fa-solid fa-magnifying-glass text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
          <span><u class="underline-offset-2 decoration-1">F</u>ind...</span>
        </div>
        <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ F</span>
      </div>

      <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

      <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Context menu item: Cut Links">
        <div class="flex items-center gap-2 pointer-events-none">
          <div class="w-4 text-center"></div>
          <span><u class="underline-offset-2 decoration-1">C</u>ut Links</span>
        </div>
        <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ drag-Right Mouse</span>
      </div>

      <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Context menu item: Mute Links">
        <div class="flex items-center gap-2 pointer-events-none">
          <div class="w-4 text-center"></div>
          <span><u class="underline-offset-2 decoration-1">M</u>ute Links</span>
        </div>
        <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌥ ⌘ drag-Right Mouse</span>
      </div>
      
    </div>
  {/if}
</div>