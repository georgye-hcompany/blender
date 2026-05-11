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

<div class="h-full flex flex-col bg-[#1c1c1c] text-[#e6e6e6]" alt-id="Compositor editor panel" appearance-id="dark full-height Compositor node editor panel" location-id="in the bottom-spanning window area of the Blender layout" functionality-id="contains the compositor node graph and sidebar" intent-id="build post-processing effects using compositor nodes">
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
  <div class="h-10 bg-[#282828] border-b border-[#1f1f1f] flex items-center px-2 justify-between text-[13px]" alt-id="Compositor header" appearance-id="dark horizontal bar at the top of the Compositor editor" location-id="top of the Compositor editor panel" functionality-id="contains editor selector, menus, and viewport controls for the compositor" intent-id="access compositor tools and settings">
    <!-- Left side -->
    <div class="flex items-center gap-2">
      <EditorSelector bind:editor={currentEditor} windowId={windowId} />
      
      <!-- Scene Dropdown -->
      <div class="relative">
        <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1 text-[#ccc] gap-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] cursor-pointer hover:text-white ml-1 {isSceneSelectDropdownOpen ? 'bg-[#4772b3] text-white shadow-none border-transparent' : ''}" on:click={toggleSceneSelectDropdown} alt-id="Scene selection dropdown" appearance-id="dropdown for selecting the scene in the compositor settings" location-id="inside the Compositor sidebar or node properties" functionality-id="selects which scene to use for the compositor" intent-id="choose the scene for compositor processing">
          <i class="fa-solid fa-shapes text-[12px] opacity-80 pointer-events-none"></i>
          <span class="text-[13px] pointer-events-none">Scene</span>
          <i class="fa-solid fa-chevron-down text-[10px] opacity-60 ml-1 pointer-events-none"></i>
        </div>
        {#if isSceneSelectDropdownOpen}
          <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => {
            isSceneSelectDropdownOpen = false;
            updateOpenParam();
          }}></div>
          <div class="absolute left-1 top-full mt-1 bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-50 w-[200px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Scene selection dropdown menu" appearance-id="floating dropdown menu listing available scenes" location-id="overlaying the scene selection dropdown when open" functionality-id="shows available scene options for compositor use" intent-id="select a specific scene">
            <div class="px-3 py-1 text-[#a0a0a0] mb-1">Node Tree Sub-Type</div>
            <div class="border-t border-[#333] mx-1 mb-1"></div>
            
            <div class="px-3 py-1 flex items-center bg-[#4772b3] text-white cursor-pointer rounded-[2px] mx-1" alt-id="Scene option" appearance-id="menu item for a scene in the scene selection dropdown" location-id="inside the Scene selection dropdown menu" functionality-id="selects a specific scene for compositor use" intent-id="use this scene in the compositor">
              <i class="fa-solid fa-shapes text-[12px] opacity-80 mr-2 w-4 text-center"></i>
              <span><u>S</u>cene</span>
            </div>
            <div class="px-3 py-1 flex items-center hover:bg-[#4772b3] hover:text-white cursor-pointer rounded-[2px] mx-1 mt-0.5" alt-id="Sequencer option" appearance-id="option for Sequencer in the compositor output dropdown" location-id="inside a compositor output dropdown menu" functionality-id="selects the Sequencer as the compositor output target" intent-id="route compositor output through the Video Sequencer">
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
          <div class="hover:bg-[#4d4d4d] text-[#ccc] hover:text-white px-3 py-[3px] rounded-l-[3px] cursor-pointer text-[13px] flex items-center" alt-id="Backdrop toggle" appearance-id="toggle button for showing or hiding the compositor backdrop" location-id="left side of the Compositor header, in the backdrop controls group" functionality-id="toggles the backdrop preview image in the node canvas" intent-id="show or hide the rendered backdrop image">
            Backdrop
          </div>
          <div class="border-l border-[#1f1f1f] hover:bg-[#4d4d4d] px-1 py-[3px] rounded-r-[3px] cursor-pointer" alt-id="Backdrop options dropdown" appearance-id="dropdown for backdrop display options" location-id="in the Compositor header, beside the Backdrop toggle" functionality-id="opens options for backdrop display settings" intent-id="configure how the backdrop preview is displayed">
            <i class="fa-solid fa-image-polaroid text-[14px] text-[#ccc] opacity-70 pointer-events-none"></i>
            <i class="fa-solid fa-chevron-down text-[9px] text-[#a0a0a0] ml-0.5 pointer-events-none"></i>
          </div>
        </div>

        <!-- Transform options -->
        <div class="flex items-center text-[#a0a0a0]">
          <div class="flex items-center gap-1 cursor-pointer text-white bg-[#4772b3] border border-[#4772b3] px-2 py-[3px] rounded-l" alt-id="Transform tool options" appearance-id="options panel for the Transform tool in the compositor" location-id="top of the Compositor left toolbar, transform tool controls" functionality-id="shows available transform tool options" intent-id="configure the active transform tool behavior">
            <i class="fa-solid fa-location-arrow text-[13px] transform -rotate-45 -translate-y-[1px] pointer-events-none"></i>
          </div>
          <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-1 py-[3px] rounded-r border-l-0 mr-1" alt-id="Transform tool dropdown" appearance-id="dropdown button for the transform tool in the compositor toolbar" location-id="top of the Compositor left toolbar, beside the transform tool options" functionality-id="opens the transform tool options for nodes" intent-id="access transform operations for nodes">
            <i class="fa-solid fa-chevron-down text-[9px] pointer-events-none"></i>
          </div>
        </div>

        <!-- Snapping -->
        <div class="flex items-center text-[#a0a0a0]">
          <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[3px] rounded" alt-id="Snapping toggle" appearance-id="magnet icon toggle for node snapping" location-id="in the Compositor header toolbar" functionality-id="toggles grid/object snapping for node placement" intent-id="snap nodes to a grid for aligned layouts">
            <i class="fa-solid fa-magnet text-[13px] transform -scale-x-100 pointer-events-none"></i>
          </div>
        </div>

        <!-- Overlays -->
        <div class="flex items-center text-[#a0a0a0] ml-1">
          <div class="flex items-center gap-1 cursor-pointer text-white bg-[#4772b3] border border-[#4772b3] px-2 py-[3px] rounded-l" alt-id="Overlays toggle" appearance-id="button to toggle compositor overlays" location-id="right side of the Compositor header, in the overlays controls group" functionality-id="toggles visibility of overlay elements in the compositor" intent-id="show or hide compositor overlay elements">
            <div class="relative pointer-events-none">
              <i class="fa-solid fa-circle text-[14px] opacity-20 pointer-events-none"></i>
              <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div class="w-1.5 h-1.5 rounded-full border-[1.5px] border-white relative left-[-2px]"></div>
                <div class="w-1.5 h-1.5 rounded-full border-[1.5px] border-white relative right-[-2px]"></div>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-1 py-[3px] rounded-r border-l-0 mr-1" alt-id="Overlays dropdown" appearance-id="dropdown for compositor overlay options" location-id="in the Compositor header, beside the Overlays toggle" functionality-id="opens options for compositor display overlays" intent-id="configure which overlays are shown">
            <i class="fa-solid fa-chevron-down text-[9px] pointer-events-none"></i>
          </div>
        </div>
      </div>

      <!-- Expand Toolbar -->
      <div class="flex items-center text-[#ccc] hover:text-white cursor-pointer ml-2" alt-id="Expand toolbar" appearance-id="small arrow/expand button on the left edge of the compositor" location-id="left edge of the Compositor main area" functionality-id="expands the left toolbar to show tool labels" intent-id="expand the toolbar for better visibility">
        <i class="fa-solid fa-chevron-down text-[12px] pointer-events-none"></i>
      </div>
    </div>
  </div>

  <!-- Main View -->
  <div class="flex-1 relative overflow-hidden flex" alt-id="Compositor main view" appearance-id="dark node graph workspace area" location-id="main body of the Compositor editor" functionality-id="shows all compositor nodes and their wire connections" intent-id="build the visual compositing pipeline">
    <!-- Grid approximation -->
    <div class="absolute inset-0 opacity-20 pointer-events-none" style="background-image: radial-gradient(#aaa 1px, transparent 1px); background-size: 20px 20px;"></div>

    <!-- Left Toolbar -->
    <div class="absolute left-0 top-2 flex flex-col gap-[6px] z-20 pl-[4px] w-[50px]" alt-id="Compositor left toolbar" appearance-id="narrow vertical toolbar on the left side of the compositor" location-id="left edge of the Compositor main node area" functionality-id="provides tool buttons for the compositor workspace" intent-id="access compositor tools like selection and annotation">
      
      <!-- Group 1: Select Box -->
      <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] overflow-visible relative z-30">
        <!-- The button itself (now Select Lasso) -->
        <div class="w-full h-[50px] bg-[#4772b3] flex items-center justify-center text-white cursor-pointer relative rounded-[4px] z-50" on:click={toggleToolDropdown} alt-id="Select Lasso tool, currently active, opens selection tools dropdown" appearance-id="Lasso select tool button with dropdown arrow, currently active" location-id="upper area of the Compositor left toolbar, selection tools group" functionality-id="opens the selection tools dropdown; Lasso tool is currently active" intent-id="choose between Lasso, Box, and Circle selection tools">
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
          <div class="absolute left-full top-0 ml-1 w-[200px] bg-[#1d1d1d] border border-[#2a2a2a] rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.8)] z-50 flex flex-col p-1 text-[13px] text-[#ccc]" alt-id="Selection tools dropdown menu" appearance-id="floating dropdown showing selection tool options" location-id="overlaying the selection tool button in the toolbar" functionality-id="shows available selection tool options" intent-id="choose a different selection mode tool">
            <!-- Tweak -->
            <div class="flex items-center gap-3 px-3 py-2 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleToolDropdown} alt-id="Tweak selection tool, first element in selection tools dropdown" appearance-id="first item in the selection tools dropdown: Tweak" location-id="inside the Selection tools dropdown menu" functionality-id="selects the Tweak (click to select) tool" intent-id="use click-to-select behavior in the compositor">
              <div class="relative w-5 h-5 flex items-center justify-center pointer-events-none">
                <i class="fa-solid fa-arrow-pointer text-[14px] transform -translate-x-1 -translate-y-1 pointer-events-none"></i>
                <i class="fa-solid fa-arrows-up-down-left-right text-[10px] absolute bottom-0 right-0 pointer-events-none"></i>
              </div>
              <span class="pointer-events-none">Tweak</span>
            </div>
            
            <!-- Select Box -->
            <div class="flex items-center gap-3 px-3 py-2 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleToolDropdown} alt-id="Select Box selection tool, second element in selection tools dropdown" appearance-id="second item in the selection tools dropdown: Box Select" location-id="inside the Selection tools dropdown menu" functionality-id="selects the Box Select tool" intent-id="switch to box selection in the compositor">
              <div class="relative w-5 h-5 flex items-center justify-center border border-dashed border-[#ffcc00] pointer-events-none">
                <i class="fa-solid fa-arrow-pointer text-[12px] transform -translate-x-0.5 pointer-events-none"></i>
              </div>
              <span class="pointer-events-none">Select Box</span>
            </div>
            
            <!-- Select Lasso (Active) -->
            <div class="flex items-center gap-3 px-3 py-2 bg-[#4772b3] text-white rounded-[3px] cursor-pointer" on:click={toggleToolDropdown} alt-id="Select Lasso selection tool, active, third element in selection tools dropdown" appearance-id="third item in the selection tools dropdown: Lasso Select (active)" location-id="inside the Selection tools dropdown menu" functionality-id="selects the Lasso Select tool" intent-id="switch to lasso selection in the compositor">
              <div class="relative w-5 h-5 flex items-center justify-center pointer-events-none">
                <svg viewBox="0 0 24 24" class="w-[22px] h-[22px] absolute pointer-events-none" fill="none" stroke="#ffcc00" stroke-width="1.5" stroke-dasharray="3 3">
                  <path d="M7 6 C 2 8, 4 18, 10 20 C 16 22, 22 14, 18 8 C 14 2, 10 5, 7 6 Z"/>
                </svg>
                <i class="fa-solid fa-arrow-pointer text-[12px] transform -translate-x-1 translate-y-1 pointer-events-none absolute"></i>
              </div>
              <span class="pointer-events-none">Select Lasso</span>
            </div>
            
            <!-- Select Circle -->
            <div class="flex items-center gap-3 px-3 py-2 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleToolDropdown} alt-id="Select Circle selection tool, fourth element in selection tools dropdown" appearance-id="fourth item in the selection tools dropdown: Circle Select" location-id="inside the Selection tools dropdown menu" functionality-id="selects the Circle Select tool" intent-id="switch to circle selection in the compositor">
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
        <div class="w-full h-[50px] bg-[#4772b3] flex items-center justify-center text-white cursor-pointer relative rounded-[4px]" on:click={toggleAnnotateDropdown} alt-id="Annotate tool, currently active, opens annotate tools dropdown" appearance-id="Annotate tool button, currently active, with dropdown arrow" location-id="middle area of the Compositor left toolbar, annotation tools group" functionality-id="opens the annotation tools dropdown; Annotate is active" intent-id="choose between Annotate, Line, Polygon, and Eraser tools">
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
          <div class="absolute left-full top-0 ml-1 w-[200px] bg-[#1d1d1d] border border-[#2a2a2a] rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.8)] z-50 flex flex-col p-1 text-[13px] text-[#ccc]" alt-id="Annotate tools dropdown menu" appearance-id="floating dropdown showing annotation tool options" location-id="overlaying the Annotate tool button in the toolbar" functionality-id="shows available annotation tool variants" intent-id="select a specific annotation tool">
            
            <!-- Annotate (Active) -->
            <div class="flex items-center gap-3 px-3 py-2 bg-[#4772b3] text-white rounded-[3px] cursor-pointer" on:click={toggleAnnotateDropdown} alt-id="Annotate tool, active, first element in annotate tools dropdown" appearance-id="first item in the annotate tools dropdown: Annotate (active)" location-id="inside the Annotate tools dropdown menu" functionality-id="selects the Annotate freehand drawing tool" intent-id="use freehand annotation drawing">
              <div class="relative w-5 h-5 flex flex-col items-center justify-center pointer-events-none">
                <i class="fa-solid fa-pen text-[14px] transform rotate-45 -translate-y-1 pointer-events-none"></i>
                <svg width="20" height="5" viewBox="0 0 24 6" fill="none" stroke="#66cc99" stroke-width="2.5" class="mt-0.5 pointer-events-none">
                  <path d="M 2 4 Q 7 0, 12 3 T 22 2" stroke-linecap="round" />
                </svg>
              </div>
              <span class="pointer-events-none font-medium"><u class="pointer-events-none underline-offset-2 decoration-1 text-white">A</u>nnotate</span>
            </div>
            
            <!-- Annotate Line -->
            <div class="flex items-center gap-3 px-3 py-2 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleAnnotateDropdown} alt-id="Annotate Line tool, second element in annotate tools dropdown" appearance-id="second item in the annotate tools dropdown: Annotate Line" location-id="inside the Annotate tools dropdown menu" functionality-id="selects the Annotate Line tool for straight lines" intent-id="draw straight annotation lines">
              <div class="relative w-5 h-5 flex flex-col items-center justify-center pointer-events-none">
                <i class="fa-solid fa-pen text-[14px] transform rotate-45 -translate-y-1 pointer-events-none text-[#ccc]"></i>
                <div class="w-[20px] h-[2px] bg-[#66cc99] rounded-full mt-1 pointer-events-none"></div>
              </div>
              <span class="pointer-events-none font-medium">Annotate <u class="pointer-events-none underline-offset-2 decoration-1 text-[#ccc]">L</u>ine</span>
            </div>
            
            <!-- Annotate Polygon -->
            <div class="flex items-center gap-3 px-3 py-2 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleAnnotateDropdown} alt-id="Annotate Polygon tool, third element in annotate tools dropdown" appearance-id="third item in the annotate tools dropdown: Annotate Polygon" location-id="inside the Annotate tools dropdown menu" functionality-id="selects the Annotate Polygon tool for polygon shapes" intent-id="draw polygon annotation shapes">
              <div class="relative w-5 h-5 flex flex-col items-center justify-center pointer-events-none">
                <i class="fa-solid fa-pen text-[14px] transform rotate-45 -translate-y-1 pointer-events-none text-[#ccc]"></i>
                <svg width="20" height="6" viewBox="0 0 24 8" fill="none" stroke="#66cc99" stroke-width="2.5" class="mt-0.5 pointer-events-none">
                  <path d="M 2 6 L 8 2 L 14 6 L 22 2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <span class="pointer-events-none font-medium">Annotate <u class="pointer-events-none underline-offset-2 decoration-1 text-[#ccc]">P</u>olygon</span>
            </div>
            
            <!-- Annotate Eraser -->
            <div class="flex items-center gap-3 px-3 py-2 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleAnnotateDropdown} alt-id="Annotate Eraser tool, fourth element in annotate tools dropdown" appearance-id="fourth item in the annotate tools dropdown: Annotate Eraser" location-id="inside the Annotate tools dropdown menu" functionality-id="selects the Annotate Eraser tool" intent-id="erase annotation marks">
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
        <div class="w-full h-[50px] border-b border-[#1f1f1f] hover:bg-[#444] flex items-center justify-center text-[#ccc] cursor-pointer relative" alt-id="Links Cut tool" appearance-id="tool button for cutting node links" location-id="lower area of the Compositor left toolbar, node link tools group, first tool" functionality-id="activates the link-cutting tool to remove connections" intent-id="drag across node connections to cut/remove them">
          <div class="relative flex items-center justify-center w-full h-full pointer-events-none">
            <div class="absolute w-[24px] h-[2px] bg-[#d97373] z-0 pointer-events-none"></div>
            <i class="fa-solid fa-scissors text-[16px] text-[#eee] transform rotate-90 z-10 pointer-events-none" style="text-shadow: 0 0 4px #282828, 0 0 4px #282828;"></i>
          </div>
        </div>
        <!-- Mute Links -->
        <div class="w-full h-[50px] border-b border-[#1f1f1f] hover:bg-[#444] flex items-center justify-center text-[#ccc] cursor-pointer relative" alt-id="Mute Links tool" appearance-id="tool button for muting node links" location-id="lower area of the Compositor left toolbar, node link tools group, second tool" functionality-id="activates the mute links tool" intent-id="mute connections without deleting them">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#eee" stroke-width="1.5" class="pointer-events-none">
            <path d="M 2 18 Q 12 18, 12 12 T 22 6" stroke-dasharray="3 3" />
            <line x1="10" y1="7" x2="14" y2="17" stroke="#d97373" stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>
        <!-- Reroute Links -->
        <div class="w-full h-[50px] hover:bg-[#444] flex items-center justify-center text-[#ccc] cursor-pointer relative" alt-id="Add Reroute tool" appearance-id="tool button for adding reroute nodes" location-id="lower area of the Compositor left toolbar, node link tools group, third tool" functionality-id="activates the Reroute node addition tool" intent-id="click on existing connections to add reroute points">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#eee" stroke-width="1.5" class="pointer-events-none">
            <path d="M 2 18 Q 12 18, 12 12 T 22 6" />
            <circle cx="12" cy="12" r="2.5" stroke="#66cc99" fill="#282828" stroke-width="1.5" />
            <path d="M 7 4 L 7 10 M 4 7 L 10 7" stroke="#66cc99" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Top Left Breadcrumbs -->
    <div class="absolute top-3 left-[90px] flex items-center gap-1.5 text-[14px] font-medium z-10 text-[#ccc]" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.8);" alt-id="Compositor breadcrumbs" appearance-id="breadcrumb path showing the current node tree context" location-id="left area of the Compositor header" functionality-id="displays the node tree hierarchy and current path" intent-id="navigate the compositor node tree hierarchy">
      <i class="fa-solid fa-cube text-[12px] text-[#a0a0a0]"></i>
      <span class="hover:text-white cursor-pointer" alt-id="Cube Domain breadcrumb" appearance-id="text label showing Cube Domain in the Compositor breadcrumbs" location-id="in the Compositor header breadcrumb area" functionality-id="shows the current view layer or context name in the compositor" intent-id="identify the current compositor context">Cube Domain</span>
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
        <div class="absolute inset-0 z-10 w-full h-full" alt-id="Compositor main node area" appearance-id="large dark canvas area containing compositor nodes and connections" location-id="center of the Compositor editor panel" functionality-id="provides the interactive canvas for building node graphs" intent-id="arrange and connect compositor nodes" on:contextmenu={handleContextMenu} on:click={() => { if (isNodeContextMenuOpen || isNodeContextMenuAddOpen || isNodeContextMenuInputOpen || isNodeContextMenuColorOpen || isNodeContextMenuAdjustOpen || isNodeContextMenuOutputOpen || isNodeContextMenuKeyingOpen || isNodeContextMenuTransformOpen) { isNodeContextMenuOpen = false; isNodeContextMenuAddOpen = false; isNodeContextMenuInputOpen = false; isNodeContextMenuColorOpen = false; isNodeContextMenuAdjustOpen = false; isNodeContextMenuOutputOpen = false; isNodeContextMenuKeyingOpen = false; isNodeContextMenuTransformOpen = false; updateOpenParam(); } }}>
      <!-- Render Layers Node -->
      <div class="absolute top-[180px] left-[60px] w-[160px] bg-[#282828] bg-opacity-90 rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#111] flex flex-col text-[12px]" alt-id="Render Layers node" appearance-id="dark node card labeled Render Layers with a scene header" location-id="in the Compositor main canvas area, left portion" functionality-id="provides rendered passes from the scene as outputs" intent-id="use scene render passes as input in the compositor">
        <div class="bg-[#a64040] text-white px-2 py-1.5 rounded-t-[3px] flex items-center gap-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
          <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
          <span class="font-medium flex-1 pointer-events-none">Render Layers</span>
          <i class="fa-solid fa-camera text-[12px] opacity-80 pointer-events-none"></i>
        </div>
        <div class="flex flex-col py-1.5">
          <div class="flex justify-end items-center px-2 py-0.5 relative group">
            <span class="text-[#ccc] mr-3 pointer-events-none">Image</span>
            <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute right-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Render Layers output socket: Image" appearance-id="yellow circular output socket labeled Image on the Render Layers node" location-id="right side of the Render Layers node, top socket" functionality-id="provides the combined rendered image as output" intent-id="connect the render result to downstream nodes"></div>
          </div>
          <div class="flex justify-end items-center px-2 py-0.5 relative group">
            <span class="text-[#ccc] mr-3 pointer-events-none">Alpha</span>
            <div class="w-3 h-3 rounded-full bg-[#aaaaaa] border border-[#111] absolute right-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Render Layers output socket: Alpha" appearance-id="gray circular output socket labeled Alpha on the Render Layers node" location-id="right side of the Render Layers node, second output socket" functionality-id="provides the alpha channel as output" intent-id="use the transparency data from the render"></div>
          </div>
          <div class="flex justify-end items-center px-2 py-0.5 relative group">
            <span class="text-[#ccc] mr-3 pointer-events-none">Noisy Image</span>
            <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute right-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Render Layers output socket: Noisy Image" appearance-id="yellow circular output socket labeled Noisy Image on the Render Layers node" location-id="right side of the Render Layers node, third output socket" functionality-id="provides the undenoised rendered image as output" intent-id="use the raw noisy render result"></div>
          </div>
          <div class="px-2 pt-2 pb-1 flex flex-col gap-1.5">
            <div class="bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1 flex items-center justify-between text-[#ccc] cursor-pointer" alt-id="Render Layers view layer selection: Cube Domain" appearance-id="view layer selector showing Cube Domain in the Render Layers node" location-id="inside the Render Layers node, below the scene selector" functionality-id="selects which view layer to render; currently Cube Domain" intent-id="choose the view layer to use as input">
              <div class="flex items-center gap-1.5 pointer-events-none">
                <i class="fa-solid fa-cube text-[10px] text-[#4772b3] pointer-events-none"></i>
                <span class="text-[12px] pointer-events-none">Cube Domain</span>
              </div>
              <i class="fa-solid fa-xmark text-[10px] opacity-60 pointer-events-none"></i>
            </div>
            <div class="bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1 flex items-center justify-between text-[#ccc] cursor-pointer" alt-id="Render Layers scene selection: Studio" appearance-id="scene selector showing Studio in the Render Layers node" location-id="inside the Render Layers node header area" functionality-id="selects which scene to render layers from; currently Studio" intent-id="choose the source scene for rendered passes">
              <span class="text-[12px] pointer-events-none">Studio</span>
              <i class="fa-solid fa-chevron-down text-[10px] opacity-60 pointer-events-none"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Filter Node -->
      <div class="absolute top-[200px] left-[300px] w-[160px] bg-[#282828] bg-opacity-90 rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#111] flex flex-col text-[12px]" alt-id="Filter node" appearance-id="dark node card labeled Filter with a purple header and input/output sockets" location-id="in the Compositor main canvas area, center portion" functionality-id="represents the Filter compositor node for applying convolution effects" intent-id="apply image sharpening or edge detection filters to the composited image">
        <div class="bg-[#6c4080] text-white px-2 py-1.5 rounded-t-[3px] flex items-center gap-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
          <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
          <span class="font-medium flex-1 pointer-events-none">Filter</span>
        </div>
        <div class="flex flex-col py-1.5">
          <div class="flex justify-between items-center px-2 py-0.5 relative group">
            <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Filter input socket: Image" appearance-id="yellow circular input socket labeled Image on the Filter node" location-id="left side of the Filter node, second socket" functionality-id="connects an image to the Filter node" intent-id="wire the source image into the filter"></div>
            <span class="text-[#ccc] ml-3 pointer-events-none">Image</span>
            <span class="text-[#ccc] mr-3 pointer-events-none">Image</span>
            <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute right-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Filter output socket: Image" appearance-id="yellow circular output socket labeled Image on the Filter node" location-id="right side of the Filter node" functionality-id="provides the filtered image as output" intent-id="connect the filtered result to downstream nodes"></div>
          </div>
          <div class="flex items-center px-2 py-1 relative group mt-1">
            <div class="w-3 h-3 rounded-full bg-[#aaaaaa] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Filter input socket: Factor" appearance-id="gray circular input socket labeled Factor on the Filter node" location-id="left side of the Filter node, first socket" functionality-id="connects a value to the Filter node's Factor input" intent-id="control the filter blend factor via a node connection"></div>
            <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1 w-full ml-3 cursor-text" alt-id="Filter factor input: 0.100" appearance-id="input field or slider showing value 0.100 for Filter Factor" location-id="inside the Filter node, inline with the Factor socket" functionality-id="shows and edits the Factor value for the filter blend" intent-id="set how strongly the filter effect is applied">
              <span class="text-[#aaa] mr-2 pointer-events-none">Factor</span>
              <span class="flex-1 text-right text-white pointer-events-none">0.100</span>
            </div>
          </div>
          <div class="px-2 pt-1 pb-1 relative">
            <div class="{isFilterTypeDropdownOpen ? 'bg-[#4772b3] text-white' : 'bg-[#1a1a1a] text-[#ccc]'} border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1 flex items-center justify-between cursor-pointer" on:click={toggleFilterTypeDropdown} alt-id="Filter type selection: Soften" appearance-id="dropdown showing Soften as the active Filter node type" location-id="inside a Filter node in the compositor canvas" functionality-id="selects the filter operation type; currently Soften" intent-id="choose the convolution filter type">
              <span class="text-[12px] pointer-events-none">Soften</span>
              <i class="fa-solid fa-chevron-down text-[10px] {isFilterTypeDropdownOpen ? 'opacity-100' : 'opacity-60'} pointer-events-none"></i>
            </div>
            
            {#if isFilterTypeDropdownOpen}
              <!-- Dropdown Menu -->
              <div class="absolute left-2 top-[32px] w-[200px] bg-[#1d1d1d] border border-[#2a2a2a] rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.8)] z-50 flex flex-col p-1 text-[13px] text-[#ccc]" alt-id="Filter type dropdown menu" appearance-id="floating dropdown menu listing available Filter node types" location-id="overlaying the filter type dropdown when open" functionality-id="shows all available convolution filter types" intent-id="select a specific filter algorithm">
                <div class="px-3 py-1.5 text-[#aaa] border-b border-[#333] mb-1" alt-id="Filter type dropdown header: Type" appearance-id="header row labeled Type for the filter type dropdown" location-id="inside the Filter type dropdown in the compositor" functionality-id="labels the filter type selection dropdown" intent-id="identify the filter type control">
                  <span class="pointer-events-none">Type</span>
                </div>
                
                <div class="flex items-center px-3 py-1 bg-[#4772b3] text-white rounded-[3px] cursor-pointer" on:click={toggleFilterTypeDropdown} alt-id="Filter type option: Soften, active" appearance-id="active menu item labeled Soften in the Filter type dropdown" location-id="inside the Filter type dropdown menu, currently selected" functionality-id="selects Soften as the filter operation" intent-id="apply a softening convolution">
                  <span class="pointer-events-none"><u class="pointer-events-none underline-offset-2 decoration-1 text-white">S</u>often</span>
                </div>
                
                <div class="flex items-center px-3 py-1 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleFilterTypeDropdown} alt-id="Filter type option: Box Sharpen" appearance-id="menu item labeled Box Sharpen in the Filter type dropdown" location-id="inside the Filter type dropdown menu" functionality-id="selects Box Sharpen as the filter operation" intent-id="use a box sharpen convolution">
                  <span class="pointer-events-none"><u class="pointer-events-none underline-offset-2 decoration-1 text-[#ccc]">B</u>ox Sharpen</span>
                </div>
                
                <div class="flex items-center px-3 py-1 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleFilterTypeDropdown} alt-id="Filter type option: Diamond Sharpen" appearance-id="menu item labeled Diamond Sharpen in the Filter type dropdown" location-id="inside the Filter type dropdown menu" functionality-id="selects Diamond Sharpen as the filter operation" intent-id="use a diamond sharpen convolution">
                  <span class="pointer-events-none"><u class="pointer-events-none underline-offset-2 decoration-1 text-[#ccc]">D</u>iamond Sharpen</span>
                </div>
                
                <div class="flex items-center px-3 py-1 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleFilterTypeDropdown} alt-id="Filter type option: Laplace" appearance-id="menu item labeled Laplace in the Filter type dropdown" location-id="inside the Filter type dropdown menu" functionality-id="selects Laplace edge detection as the filter" intent-id="detect edges using the Laplacian operator">
                  <span class="pointer-events-none"><u class="pointer-events-none underline-offset-2 decoration-1 text-[#ccc]">L</u>aplace</span>
                </div>
                
                <div class="flex items-center px-3 py-1 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleFilterTypeDropdown} alt-id="Filter type option: Sobel" appearance-id="menu item labeled Sobel in the Filter type dropdown" location-id="inside the Filter type dropdown menu" functionality-id="selects Sobel edge detection as the filter" intent-id="detect edges using the Sobel operator">
                  <span class="pointer-events-none">S<u class="pointer-events-none underline-offset-2 decoration-1 text-[#ccc]">o</u>bel</span>
                </div>
                
                <div class="flex items-center px-3 py-1 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleFilterTypeDropdown} alt-id="Filter type option: Prewitt" appearance-id="menu item labeled Prewitt in the Filter type dropdown" location-id="inside the Filter type dropdown menu" functionality-id="selects Prewitt edge detection as the filter" intent-id="detect edges using the Prewitt operator">
                  <span class="pointer-events-none"><u class="pointer-events-none underline-offset-2 decoration-1 text-[#ccc]">P</u>rewitt</span>
                </div>
                
                <div class="flex items-center px-3 py-1 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleFilterTypeDropdown} alt-id="Filter type option: Kirsch" appearance-id="menu item labeled Kirsch in the Filter type dropdown" location-id="inside the Filter type dropdown menu" functionality-id="selects Kirsch edge detection as the filter" intent-id="detect edges using the Kirsch operator">
                  <span class="pointer-events-none"><u class="pointer-events-none underline-offset-2 decoration-1 text-[#ccc]">K</u>irsch</span>
                </div>
                
                <div class="flex items-center px-3 py-1 hover:bg-[#333] hover:text-white rounded-[3px] cursor-pointer" on:click={toggleFilterTypeDropdown} alt-id="Filter type option: Shadow" appearance-id="menu item labeled Shadow in the Filter type dropdown" location-id="inside the Filter type dropdown menu" functionality-id="selects Shadow as the filter operation" intent-id="apply a shadow convolution effect">
                  <span class="pointer-events-none">S<u class="pointer-events-none underline-offset-2 decoration-1 text-[#ccc]">h</u>adow</span>
                </div>
              </div>
            {/if}
          </div>
        </div>
      </div>

      <!-- Glare Node -->
      {#if isGlareCollapsed}
      <div class="absolute top-[200px] left-[520px] w-[140px] bg-[#3a2845] rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#ccc] flex flex-col text-[13px] text-white" alt-id="Glare node, collapsed" appearance-id="collapsed purple node card labeled Glare with an expand button" location-id="in the Compositor main canvas area, toward the center" functionality-id="represents the Glare compositor node in its collapsed state" intent-id="show the Glare node with minimal space usage">
        <div class="px-2 py-1.5 flex items-center gap-1.5 cursor-pointer" on:click={toggleGlareNode} alt-id="Expand Glare node button" appearance-id="chevron-right button in the collapsed Glare node header" location-id="inside the collapsed Glare node card" functionality-id="expands the Glare node to show all its properties" intent-id="open the Glare node to see its parameters">
          <i class="fa-solid fa-chevron-right text-[10px] pointer-events-none opacity-80"></i>
          <span class="font-[400] flex-1 pointer-events-none tracking-wide text-[#eee]">Glare</span>
        </div>
        <!-- Collapsed inputs strip -->
        <div class="absolute left-[-6px] top-0 bottom-0 flex flex-col items-center justify-center">
          <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare input socket: Image" appearance-id="yellow circular input socket labeled Image on the Glare node" location-id="left side of the Glare node, first socket" functionality-id="connects an image to the Glare node's Image input" intent-id="wire the source image into the Glare effect"></div>
          <div class="w-[7px] h-[7px] bg-[#888] border-x border-b border-[#111] cursor-pointer" alt-id="Glare input socket: Strength" appearance-id="small gray square input socket for Strength on the collapsed Glare node" location-id="left strip of the collapsed Glare node" functionality-id="connects a value to the Glare node's Strength input" intent-id="wire a strength value into the collapsed Glare node"></div>
          <div class="w-[7px] h-[7px] bg-[#888] border-x border-b border-[#111] cursor-pointer" alt-id="Glare input socket: Saturation" appearance-id="small gray square input socket for Saturation on the collapsed Glare node" location-id="left strip of the collapsed Glare node, below Strength" functionality-id="connects a value to the Glare node's Saturation input" intent-id="wire a saturation value into the collapsed Glare node"></div>
          <div class="w-[7px] h-[7px] bg-[#cba6d9] border-x border-b border-[#111] cursor-pointer" alt-id="Glare input socket: Color2" appearance-id="small purple square input socket for Color2 on the collapsed Glare node" location-id="left strip of the collapsed Glare node, third socket" functionality-id="connects a color to the Glare node's Color2 input" intent-id="wire a secondary color value into the collapsed Glare node"></div>
          <div class="w-[7px] h-[7px] bg-[#888] border-x border-b border-[#111] cursor-pointer" alt-id="Glare input socket: Size" appearance-id="small gray square input socket for Size on the collapsed Glare node" location-id="left strip of the collapsed Glare node, fourth socket" functionality-id="connects a value to the Glare node's Size input" intent-id="wire a size value into the collapsed Glare node"></div>
          <div class="w-[7px] h-[7px] bg-[#888] border-x border-b border-[#111] cursor-pointer" alt-id="Glare input socket: Angle" appearance-id="small gray square input socket for Angle on the collapsed Glare node" location-id="left strip of the collapsed Glare node, fifth socket" functionality-id="connects a value to the Glare node's Angle input" intent-id="wire an angle value into the collapsed Glare node"></div>
          <div class="w-[7px] h-[7px] bg-[#888] border-x border-b border-[#111] cursor-pointer" alt-id="Glare input socket: Streaks" appearance-id="small gray square input socket for Streaks on the collapsed Glare node" location-id="left strip of the collapsed Glare node, sixth socket" functionality-id="connects a value to the Glare node's Streaks input" intent-id="wire a streaks count value into the collapsed Glare node"></div>
          <div class="w-[7px] h-[7px] bg-[#ccaa33] border-x border-b border-[#111] cursor-pointer" alt-id="Glare input socket: Tint" appearance-id="small yellow square input socket for Tint on the collapsed Glare node" location-id="left strip of the collapsed Glare node, seventh socket" functionality-id="connects a color to the Glare node's Tint input" intent-id="wire a tint color into the collapsed Glare node"></div>
          <div class="w-[7px] h-[7px] bg-[#888] border-x border-b border-[#111] rounded-b-[1px] cursor-pointer" alt-id="Glare input socket: Mix" appearance-id="small gray square input socket for Mix on the collapsed Glare node" location-id="left strip of the collapsed Glare node, last socket" functionality-id="connects a value to the Glare node's Mix input" intent-id="wire a mix factor into the collapsed Glare node"></div>
        </div>
        <!-- Collapsed outputs -->
        <div class="absolute right-[-6px] top-1/2 transform -translate-y-1/2 flex flex-col gap-0.5">
          <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare output socket: Glare (collapsed)" appearance-id="first small yellow output socket on the collapsed Glare node" location-id="right side of the collapsed Glare node, first socket" functionality-id="represents the Glare output from the collapsed node" intent-id="connect the Glare output to another node"></div>
          <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare output socket: Highlights (collapsed)" appearance-id="second small yellow output socket on the collapsed Glare node" location-id="right side of the collapsed Glare node, second socket" functionality-id="represents the Highlights output from the collapsed node" intent-id="connect the Highlights output to another node"></div>
          <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare output socket: Image (collapsed)" appearance-id="third small yellow output socket on the collapsed Glare node" location-id="right side of the collapsed Glare node, last socket" functionality-id="represents the Image output from the collapsed node" intent-id="connect the Image output to another node"></div>
        </div>
      </div>
      {:else}
      <div class="absolute top-[200px] left-[520px] w-[160px] bg-[#282828] bg-opacity-90 rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#111] flex flex-col text-[12px]" alt-id="Glare node" appearance-id="expanded dark node card labeled Glare with purple header and input/output sockets" location-id="in the Compositor main canvas area" functionality-id="represents the expanded Glare compositor node with all parameters" intent-id="configure the Glare effect node for lens flares and glows">
        <div class="bg-[#6c4080] text-white px-2 py-1.5 rounded-t-[3px] flex items-center gap-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] cursor-pointer" on:click={toggleGlareNode} alt-id="Collapse Glare node button" appearance-id="chevron-down button in the expanded Glare node header" location-id="inside the expanded Glare node header row" functionality-id="collapses the Glare node to save canvas space" intent-id="minimize the Glare node to a compact view">
          <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
          <span class="font-medium flex-1 pointer-events-none">Glare</span>
        </div>
        <div class="flex flex-col py-1.5">
          <div class="flex justify-between items-center px-2 py-0.5 relative group">
            <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare input socket: Image" appearance-id="yellow circular input socket labeled Image on the Glare node" location-id="left side of the Glare node, first socket" functionality-id="connects an image to the Glare node's Image input" intent-id="wire the source image into the Glare effect"></div>
            <span class="text-[#ccc] ml-3 pointer-events-none">Image</span>
            <span class="text-[#ccc] mr-3 pointer-events-none">Glare</span>
            <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute right-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare output socket: Glare" appearance-id="yellow circular output socket labeled Glare on the expanded node" location-id="right side of the expanded Glare node, first output" functionality-id="provides the glare-affected image as output" intent-id="wire the glare output to subsequent nodes"></div>
          </div>
          <div class="flex justify-end items-center px-2 py-0.5 relative group">
            <span class="text-[#ccc] mr-3 pointer-events-none">Highlights</span>
            <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute right-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare output socket: Highlights" appearance-id="yellow circular output socket labeled Highlights on the expanded node" location-id="right side of the expanded Glare node, second output" functionality-id="provides the highlights mask as output" intent-id="wire the highlights mask to subsequent nodes"></div>
          </div>
          <div class="px-2 py-1 flex flex-col gap-1">
            <div class="bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1 flex items-center justify-between text-[#ccc] cursor-pointer" alt-id="Glare type selection: Fog Glow" appearance-id="small dropdown button labeled Fog Glow for glare type" location-id="inside the Glare node, first dropdown control" functionality-id="selects the glare effect type; currently Fog Glow" intent-id="choose the style of glare effect">
              <span class="text-[12px] pointer-events-none">Fog Glow</span>
              <i class="fa-solid fa-chevron-down text-[10px] opacity-60 pointer-events-none"></i>
            </div>
            <div class="bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1 flex items-center justify-between text-[#ccc] cursor-pointer" alt-id="Glare quality selection: Medium" appearance-id="small dropdown button labeled Medium for glare quality" location-id="inside the Glare node, second dropdown control" functionality-id="selects the glare quality level; currently Medium" intent-id="balance quality vs. performance for the glare effect">
              <span class="text-[12px] pointer-events-none">Medium</span>
              <i class="fa-solid fa-chevron-down text-[10px] opacity-60 pointer-events-none"></i>
            </div>
            <div class="flex items-center text-[#ccc] gap-1 px-1 py-0.5 cursor-pointer" alt-id="Expand Highlights section toggle" appearance-id="toggle row labeled Highlights with chevron-right" location-id="inside the Glare node, in the properties list" functionality-id="expands the Highlights sub-section of the Glare node" intent-id="show highlights-specific parameters">
              <i class="fa-solid fa-chevron-right text-[8px] pointer-events-none"></i>
              <span class="text-[12px] pointer-events-none">Highlights</span>
            </div>
            <div class="flex items-center text-[#ccc] gap-1 px-1 py-0.5 cursor-pointer" alt-id="Collapse Adjust section toggle" appearance-id="toggle row labeled Adjust with chevron-down, currently expanded" location-id="inside the Glare node, below Highlights" functionality-id="collapses the Adjust sub-section of the Glare node" intent-id="hide adjustment parameters to save space">
              <i class="fa-solid fa-chevron-down text-[8px] pointer-events-none"></i>
              <span class="text-[12px] pointer-events-none">Adjust</span>
            </div>
          </div>
          <div class="flex items-center px-2 py-[2px] relative group">
            <div class="w-3 h-3 rounded-full bg-[#aaaaaa] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare input socket: Strength" appearance-id="small gray square input socket for Strength on the collapsed Glare node" location-id="left strip of the collapsed Glare node" functionality-id="connects a value to the Glare node's Strength input" intent-id="wire a strength value into the collapsed Glare node"></div>
            <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-[2px] w-full ml-3 shadow-[inset_0_0_10px_rgba(71,114,179,0.3)] cursor-text" alt-id="Glare strength input: 0.500" appearance-id="input field showing value 0.500 for Glare Strength" location-id="inside the Glare node, Adjust section, first input row" functionality-id="shows and edits the Strength value for the glare effect" intent-id="set the intensity of the glare effect">
              <span class="text-[#aaa] mr-2 pointer-events-none">Strength</span>
              <span class="flex-1 text-right text-white pointer-events-none">0.500</span>
            </div>
          </div>
          <div class="flex items-center px-2 py-[2px] relative group mt-[2px]">
            <div class="w-3 h-3 rounded-full bg-[#aaaaaa] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare input socket: Saturation" appearance-id="small gray square input socket for Saturation on the collapsed Glare node" location-id="left strip of the collapsed Glare node, below Strength" functionality-id="connects a value to the Glare node's Saturation input" intent-id="wire a saturation value into the collapsed Glare node"></div>
            <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-[2px] w-full ml-3 shadow-[inset_0_0_10px_rgba(71,114,179,0.3)] cursor-text" alt-id="Glare saturation input: 1.000" appearance-id="input field showing value 1.000 for Glare Saturation" location-id="inside the Glare node, Adjust section, second input row" functionality-id="shows and edits the Saturation value for the glare" intent-id="set how saturated the glare colors appear">
              <span class="text-[#aaa] mr-2 pointer-events-none">Saturation</span>
              <span class="flex-1 text-right text-white pointer-events-none">1.000</span>
            </div>
          </div>
          <div class="flex items-center px-2 py-[2px] relative group mt-[2px]">
            <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare input socket: Tint" appearance-id="small yellow square input socket for Tint on the collapsed Glare node" location-id="left strip of the collapsed Glare node, seventh socket" functionality-id="connects a color to the Glare node's Tint input" intent-id="wire a tint color into the collapsed Glare node"></div>
            <div class="flex items-center gap-2 w-full ml-3 relative">
              <span class="text-[#aaa] pointer-events-none">Tint</span>
              <div class="flex-1 h-5 rounded-[3px] border border-[#111] bg-white cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" on:click={toggleColorPicker} alt-id="Glare tint color picker button on graph node; opens shared color picker popover" appearance-id="small white color swatch button labeled Tint in the Glare node" location-id="inside the Glare node, Adjust section, tint color row" functionality-id="opens the color picker popover for the Glare tint color" intent-id="choose the tint color applied to the glare effect"></div>
            </div>
          </div>
          <div class="flex items-center px-2 py-[2px] relative group mt-[2px]">
            <div class="w-3 h-3 rounded-full bg-[#aaaaaa] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Glare input socket: Size" appearance-id="small gray square input socket for Size on the collapsed Glare node" location-id="left strip of the collapsed Glare node, fourth socket" functionality-id="connects a value to the Glare node's Size input" intent-id="wire a size value into the collapsed Glare node"></div>
            <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-[2px] w-full ml-3 shadow-[inset_0_0_10px_rgba(71,114,179,0.3)] cursor-text" alt-id="Glare size input: 0.125" appearance-id="input field showing value 0.125 for Glare Size" location-id="inside the Glare node, Adjust section, fourth input row" functionality-id="shows and edits the Size value for the glare effect" intent-id="set the size or spread of the glare">
              <span class="text-[#aaa] mr-2 pointer-events-none">Size</span>
              <span class="flex-1 text-right text-white pointer-events-none">0.125</span>
            </div>
          </div>
        </div>
      </div>
      {/if}

      <!-- Viewer Node -->
      <div class="absolute top-[130px] left-[760px] w-[140px] bg-[#282828] bg-opacity-90 rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#111] flex flex-col text-[12px]" alt-id="Viewer node" appearance-id="dark node card labeled Viewer with red header" location-id="in the Compositor main canvas area, right portion" functionality-id="outputs the compositing result for preview in the backdrop" intent-id="connect nodes here to preview the result in the editor">
        <div class="bg-[#804040] text-white px-2 py-1.5 rounded-t-[3px] flex items-center gap-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
          <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
          <span class="font-medium flex-1 pointer-events-none">Viewer</span>
          <i class="fa-solid fa-image text-[12px] opacity-80 pointer-events-none"></i>
        </div>
        <div class="flex flex-col py-1.5">
          <div class="flex items-center px-2 py-0.5 relative group">
            <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Viewer input socket: Image" appearance-id="yellow circular input socket labeled Image on the Viewer node" location-id="left side of the Viewer node" functionality-id="connects an image to the Viewer node for preview" intent-id="wire the compositor output to the Viewer node"></div>
            <span class="text-[#ccc] ml-3 pointer-events-none">Image</span>
          </div>
        </div>
      </div>

      <!-- Group Output Node -->
      <div class="absolute top-[310px] left-[760px] w-[140px] bg-[#282828] bg-opacity-90 rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#111] flex flex-col text-[12px]" alt-id="Group Output node" appearance-id="dark node card labeled Group Output" location-id="in the Compositor main canvas area, right side" functionality-id="receives compositor results and passes them to the group output" intent-id="define the outputs of a compositor node group">
        <div class="bg-[#404040] text-white px-2 py-1.5 rounded-t-[3px] flex items-center gap-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
          <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
          <span class="font-medium flex-1 pointer-events-none">Group Output</span>
        </div>
        <div class="flex flex-col py-1.5">
          <div class="flex items-center px-2 py-0.5 relative group">
            <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Group Output input socket: Image" appearance-id="yellow circular input socket labeled Image on the Group Output node" location-id="left side of the Group Output node" functionality-id="connects the final composited image to the group output" intent-id="wire the result to the group output"></div>
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
      <div class="relative w-[260px] bg-[#282828] bg-opacity-95 backdrop-blur-sm flex flex-col text-[13px] rounded-bl-sm" alt-id="Compositor properties right sidebar" appearance-id="vertical sidebar panel on the right side of the compositor" location-id="right edge of the Compositor editor panel" functionality-id="contains tabs for node properties, tool settings, and annotations" intent-id="configure selected nodes and compositor options">
        <!-- Header / Breadcrumb -->
        <div class="bg-[#1f1f1f] text-[#ccc] py-1.5 px-3 flex items-center justify-between border-b border-[#111]">
          <span class="capitalize">{activeSidebarTab}</span>
          <i class="fa-solid fa-xmark text-[12px] opacity-60 hover:opacity-100 cursor-pointer" alt-id="Close sidebar button" appearance-id="small arrow or close button for the compositor right sidebar" location-id="at the edge of the Compositor right sidebar" functionality-id="closes or collapses the right sidebar panel" intent-id="hide the sidebar to give more space to the node canvas"></i>
        </div>

        <div class="flex-1 overflow-y-auto overflow-x-hidden">
          {#if activeSidebarTab === 'node'}
          <!-- Node Panel -->
          <div class="border-b border-[#1f1f1f]">
            <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" on:click={toggleNodePanel} alt-id="Node panel header" appearance-id="panel header labeled Node in the right sidebar" location-id="top of the Node panel in the Compositor right sidebar" functionality-id="identifies the Node settings panel" intent-id="view and edit the selected node's properties">
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
                <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Name input field for selected node; value Glare; Glare node name field in Node panel" appearance-id="text input showing Glare for the selected node's name" location-id="inside the Node panel in the Compositor right sidebar, first text input row" functionality-id="allows renaming the selected compositor node" intent-id="change the name of the selected node">
                  <span class="text-[13px] text-white pointer-events-none">Glare</span>
                </div>
              </div>
              <div class="flex items-center">
                <span class="w-[60px] text-right pr-3 text-[12px]">Label</span>
                <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Label input field; value Custom Label" appearance-id="text input showing Custom Label for the node label" location-id="inside the Node panel in the Compositor right sidebar, second text input row" functionality-id="sets a custom display label for the selected node" intent-id="give the node a descriptive label">
                  <span class="text-[13px] text-[#666] pointer-events-none">Custom Label</span>
                </div>
              </div>
              <div class="flex items-center">
                <span class="w-[60px] text-right pr-3 text-[12px]">Color</span>
                <div class="flex-1 flex items-center gap-1.5">
                  <div class="w-3.5 h-3.5 border border-[#111] bg-[#222] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-pointer" alt-id="Node color override checkbox; currently unchecked; gray empty checkbox next to node color swatch" appearance-id="unchecked checkbox for node color override" location-id="inside the Node panel, left of the color swatch" functionality-id="when checked, enables a custom color for the node header" intent-id="override the default node color with a custom one"></div>
                  <div class="flex-1 h-6 bg-[#7a7a7a] rounded-[3px] border border-[#111] cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.25)]" alt-id="Node header color swatch; medium gray when color override is off" appearance-id="small gray color swatch in the Node panel header row" location-id="inside the Node panel, next to the color override checkbox" functionality-id="displays the current node header color" intent-id="see the current color category of the node"></div>
                </div>
              </div>
              <div class="flex items-center mt-1">
                <div class="w-[60px]"></div>
                <div class="flex items-center gap-2 cursor-pointer text-white hover:text-[#ccc]" alt-id="Show Options toggle checkbox; currently checked" appearance-id="checked checkbox labeled Show Options in the Node panel" location-id="inside the Node panel, Show Options checkbox row" functionality-id="when checked, shows the node's option controls in the canvas" intent-id="toggle display of inline node options">
                  <div class="w-3.5 h-3.5 bg-[#4772b3] border border-[#222] rounded-sm flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] pointer-events-none">
                    <i class="fa-solid fa-check text-[10px] text-white pointer-events-none"></i>
                  </div>
                  <span class="text-[13px] pointer-events-none">Show Options</span>
                </div>
              </div>
              <div class="flex items-center mt-1">
                <div class="w-[60px]"></div>
                <div class="flex items-center gap-2 cursor-pointer text-[#ccc] hover:text-white" alt-id="Mute toggle checkbox; currently unchecked" appearance-id="unchecked checkbox labeled Mute in the Node panel" location-id="inside the Node panel, Mute checkbox row" functionality-id="when checked, bypasses the selected node" intent-id="disable the node without removing it">
                  <div class="w-3.5 h-3.5 border border-[#111] bg-[#222] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] pointer-events-none"></div>
                  <span class="text-[13px] pointer-events-none">Mute</span>
                </div>
              </div>
            </div>
            {/if}
          </div>

          <!-- Properties Panel -->
          <div class="border-b border-[#1f1f1f]">
            <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" on:click={togglePropertiesPanel} alt-id="Properties panel header" appearance-id="panel header labeled Properties in the Compositor right sidebar" location-id="top of the Properties panel in the Compositor sidebar" functionality-id="identifies the Properties settings panel" intent-id="access node or compositor properties">
              <div class="flex items-center gap-2 pointer-events-none">
                {#if isPropertiesPanelExpanded}
                  <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center pointer-events-none"></i>
                {:else}
                  <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center pointer-events-none"></i>
                {/if}
                <span class="font-medium text-[14px] pointer-events-none">Properties</span>
              </div>
              <div class="flex gap-[2px] opacity-40 cursor-grab" alt-id="Properties panel drag handle" appearance-id="drag handle for the Properties panel" location-id="at the edge of the Properties panel header" functionality-id="allows dragging to resize the Properties panel" intent-id="resize the Properties panel">
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
                <div class="flex-1 min-w-0 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center justify-between shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-[#222] text-[#e6e6e6]" alt-id="Glare Main Type dropdown; selected Fog Glow; compositor Glare node glare type" appearance-id="dropdown showing Fog Glow as the current Glare type in the properties panel" location-id="inside the Compositor right sidebar Glare node properties, Type dropdown row" functionality-id="selects the glare effect type from the sidebar" intent-id="choose the Glare effect type in the properties panel">
                  <span class="text-[12px] pointer-events-none truncate">Fog Glow</span>
                  <i class="fa-solid fa-chevron-down text-[9px] opacity-60 pointer-events-none shrink-0"></i>
                </div>
              </div>
              <div class="flex items-center gap-1">
                <span class="w-[72px] shrink-0 text-right pr-2 text-[12px] text-[#aaa] pointer-events-none">Quality</span>
                <div class="flex-1 min-w-0 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center justify-between shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-[#222] text-[#e6e6e6]" alt-id="Glare Quality dropdown; selected Medium; Fog Glow quality setting" appearance-id="dropdown showing Medium as the Glare quality in the properties panel" location-id="inside the Compositor right sidebar Glare node properties, Quality dropdown row" functionality-id="selects the glare quality level from the sidebar" intent-id="set render quality for the Glare effect">
                  <span class="text-[12px] pointer-events-none truncate">Medium</span>
                  <i class="fa-solid fa-chevron-down text-[9px] opacity-60 pointer-events-none shrink-0"></i>
                </div>
              </div>

              <div class="flex items-center gap-1.5 px-0.5 py-0.5 cursor-pointer text-[#ccc] hover:text-white select-none" on:click={toggleHighlightsSubsection} alt-id="Highlights subsection header; first collapsible under Glare properties; currently collapsed" appearance-id="collapsed sub-section header labeled Highlights in the Glare node" location-id="inside the Glare node, first collapsible section" functionality-id="toggles the Highlights sub-section settings" intent-id="expand Highlights-specific glare controls">
                {#if isHighlightsSubsectionExpanded}
                  <i class="fa-solid fa-chevron-down text-[9px] w-3 text-center pointer-events-none"></i>
                {:else}
                  <i class="fa-solid fa-chevron-right text-[9px] w-3 text-center pointer-events-none"></i>
                {/if}
                <span class="text-[12px] font-medium pointer-events-none">Highlights</span>
              </div>
              <div class="flex items-center gap-1.5 px-0.5 py-0.5 cursor-pointer text-[#ccc] hover:text-white select-none" on:click={toggleAdjustSubsection} alt-id="Adjust subsection header; expanded; Strength and Saturation inside" appearance-id="expanded sub-section header labeled Adjust in the Glare node" location-id="inside the Glare node, second collapsible section" functionality-id="toggles the Adjust sub-section showing Strength and Saturation" intent-id="expand or collapse basic glare adjustment controls">
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
                    <div class="flex-1 min-w-0 flex items-center gap-2 cursor-ew-resize" alt-id="Glare Strength slider; value 0.500; half filled blue value bar in Properties panel" appearance-id="slider showing value 0.500 with a half-filled blue bar for Glare Strength" location-id="inside the Compositor right sidebar Glare node properties, Strength slider row" functionality-id="adjusts the Strength of the Glare effect from the sidebar" intent-id="tune the glare intensity">
                      <div class="flex-1 h-[13px] bg-[#2a2a2a] rounded-[2px] border border-[#111] overflow-hidden relative shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]">
                        <div class="absolute left-0 top-0 bottom-0 bg-[#4772b3] pointer-events-none" style="width: 50%;"></div>
                      </div>
                      <span class="text-[12px] text-[#ddd] w-11 text-right tabular-nums pointer-events-none shrink-0">0.500</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-[64px] shrink-0 text-right text-[12px] text-[#aaa] pointer-events-none">Saturation</span>
                    <div class="flex-1 min-w-0 flex items-center gap-2 cursor-ew-resize" alt-id="Glare Saturation slider; value 1.000; full blue value bar" appearance-id="slider showing value 1.000 with a full blue bar for Glare Saturation" location-id="inside the Compositor right sidebar Glare node properties, Saturation slider row" functionality-id="adjusts the Saturation of the Glare effect from the sidebar" intent-id="set how colorful the glare appears">
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
                <div class="flex-1 h-6 rounded-[3px] border border-[#111] bg-white cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.15)]" on:click={toggleColorPicker} alt-id="Glare Tint color swatch; solid white; opens color picker when clicked" appearance-id="small white color swatch for Glare Tint in the properties panel" location-id="inside the Compositor right sidebar Glare node properties, Tint color row" functionality-id="opens a color picker to set the glare tint color" intent-id="choose the tint color for the glare effect"></div>
              </div>

              <div class="flex items-center gap-1.5 px-0.5 py-0.5 cursor-pointer text-[#ccc] hover:text-white select-none mt-0.5" on:click={toggleGlarePropsSubsection} alt-id="Glare subsection header under Tint; streaks and glow size options; expanded" appearance-id="expanded sub-section header below the Tint in the Glare node" location-id="inside the Glare node, below the Tint input" functionality-id="toggles a sub-section showing streaks and glow size settings" intent-id="access additional glare shape parameters">
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
                    <div class="flex-1 min-w-0 flex items-center gap-2 cursor-ew-resize" alt-id="Glare Size slider for Fog Glow; active control; value 0.125" appearance-id="slider showing value 0.125 for Glare Size, active in the sidebar" location-id="inside the Compositor right sidebar Glare node properties, Size slider row" functionality-id="adjusts the Size of the Fog Glow glare from the sidebar" intent-id="control the spread of the fog glow">
                      <div class="flex-1 h-[13px] bg-[#2a2a2a] rounded-[2px] border border-[#111] overflow-hidden relative shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]">
                        <div class="absolute left-0 top-0 bottom-0 bg-[#4772b3] pointer-events-none" style="width: 12.5%;"></div>
                      </div>
                      <span class="text-[12px] text-[#ddd] w-11 text-right tabular-nums pointer-events-none shrink-0">0.125</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 opacity-[0.45]">
                    <span class="w-[64px] shrink-0 text-right text-[12px] text-[#888] pointer-events-none">Streaks</span>
                    <div class="flex-1 min-w-0 flex items-center gap-2" alt-id="Streaks field; grayed out for Fog Glow type; value 4" appearance-id="grayed-out input showing value 4 for Streaks count" location-id="inside the Compositor right sidebar Glare node properties, Streaks count row" functionality-id="sets the number of star-burst streaks (disabled for Fog Glow)" intent-id="set the number of directional streaks">
                      <div class="flex-1 h-[13px] bg-[#252525] rounded-[2px] border border-[#1a1a1a] overflow-hidden relative">
                        <div class="absolute left-0 top-0 bottom-0 bg-[#3d3d3d] pointer-events-none" style="width: 40%;"></div>
                      </div>
                      <span class="text-[12px] text-[#777] w-11 text-right tabular-nums pointer-events-none shrink-0">4</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 opacity-[0.45]">
                    <span class="w-[64px] shrink-0 text-right text-[12px] text-[#888] pointer-events-none">Streaks Angle</span>
                    <div class="flex-1 min-w-0 flex items-center gap-2" alt-id="Streaks Angle; disabled for Fog Glow; 0 degrees" appearance-id="grayed-out field showing 0 degrees for Streaks Angle" location-id="inside the Compositor right sidebar Glare node properties, Streaks Angle row" functionality-id="sets the rotation angle of streaks (disabled for Fog Glow)" intent-id="rotate the star-burst streak pattern">
                      <div class="flex-1 h-[13px] bg-[#252525] rounded-[2px] border border-[#1a1a1a] overflow-hidden relative">
                        <div class="absolute left-0 top-0 bottom-0 bg-[#3d3d3d] pointer-events-none w-0"></div>
                      </div>
                      <span class="text-[12px] text-[#777] w-11 text-right tabular-nums pointer-events-none shrink-0">0°</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 opacity-[0.45]">
                    <span class="w-[64px] shrink-0 text-right text-[12px] text-[#888] pointer-events-none">Iterations</span>
                    <div class="flex-1 min-w-0 flex items-center gap-2" alt-id="Iterations; grayed; value 3" appearance-id="grayed-out field showing value 3 for Iterations" location-id="inside the Compositor right sidebar Glare node properties, Iterations row" functionality-id="sets the number of glare iterations (grayed out for this mode)" intent-id="control the number of processing passes">
                      <div class="flex-1 h-[13px] bg-[#252525] rounded-[2px] border border-[#1a1a1a] overflow-hidden relative">
                        <div class="absolute left-0 top-0 bottom-0 bg-[#3d3d3d] pointer-events-none" style="width: 30%;"></div>
                      </div>
                      <span class="text-[12px] text-[#777] w-11 text-right tabular-nums pointer-events-none shrink-0">3</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 opacity-[0.45]">
                    <span class="w-[64px] shrink-0 text-right text-[12px] text-[#888] pointer-events-none">Fade</span>
                    <div class="flex-1 min-w-0 flex items-center gap-2" alt-id="Fade; grayed; value 0.908" appearance-id="grayed-out slider showing value 0.908 for Fade" location-id="inside the Compositor right sidebar Glare node properties, Fade row" functionality-id="sets how quickly glare streaks fade (grayed out for this mode)" intent-id="control streak fade distance">
                      <div class="flex-1 h-[13px] bg-[#252525] rounded-[2px] border border-[#1a1a1a] overflow-hidden relative">
                        <div class="absolute left-0 top-0 bottom-0 bg-[#3d3d3d] pointer-events-none" style="width: 90.8%;"></div>
                      </div>
                      <span class="text-[12px] text-[#777] w-11 text-right tabular-nums pointer-events-none shrink-0">0.908</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 opacity-[0.45]">
                    <span class="w-[64px] shrink-0 text-right text-[12px] text-[#888] pointer-events-none">Color Modulation</span>
                    <div class="flex-1 min-w-0 flex items-center gap-2" alt-id="Color Modulation; grayed; value 0.250" appearance-id="grayed-out slider showing value 0.250 for Color Modulation" location-id="inside the Compositor right sidebar Glare node properties, Color Modulation row" functionality-id="sets the color variation along streaks (grayed out for this mode)" intent-id="add color variation to streak gradients">
                      <div class="flex-1 h-[13px] bg-[#252525] rounded-[2px] border border-[#1a1a1a] overflow-hidden relative">
                        <div class="absolute left-0 top-0 bottom-0 bg-[#3d3d3d] pointer-events-none" style="width: 25%;"></div>
                      </div>
                      <span class="text-[12px] text-[#777] w-11 text-right tabular-nums pointer-events-none shrink-0">0.250</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 opacity-[0.45] pl-[64px]">
                    <div class="flex items-center gap-2 cursor-default" alt-id="Diagonal checkbox; checked but disabled for Fog Glow" appearance-id="checked but disabled checkbox labeled Diagonal in Glare properties" location-id="inside the Compositor right sidebar Glare node properties, Diagonal checkbox row" functionality-id="when enabled, rotates the streaks diagonally (disabled for Fog Glow)" intent-id="orient glare streaks diagonally">
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
                    <div class="flex-1 min-w-0 flex items-center gap-2" alt-id="Sun Position X; grayed; 0.500" appearance-id="grayed-out slider showing value 0.500 for Sun Position X" location-id="inside the Compositor right sidebar Glare node properties, Sun Position X row" functionality-id="sets the X position of the virtual sun (grayed out for this mode)" intent-id="position the sun for sun flare effects">
                      <div class="flex-1 h-[13px] bg-[#252525] rounded-[2px] border border-[#1a1a1a] overflow-hidden relative">
                        <div class="absolute left-0 top-0 bottom-0 bg-[#3d3d3d] pointer-events-none" style="width: 50%;"></div>
                      </div>
                      <span class="text-[12px] text-[#777] w-11 text-right tabular-nums pointer-events-none shrink-0">0.500</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-[64px] shrink-0 text-right text-[12px] text-[#888] pointer-events-none">Y</span>
                    <div class="flex-1 min-w-0 flex items-center gap-2" alt-id="Sun Position Y; grayed; 0.500" appearance-id="grayed-out slider showing value 0.500 for Sun Position Y" location-id="inside the Compositor right sidebar Glare node properties, Sun Position Y row" functionality-id="sets the Y position of the virtual sun (grayed out for this mode)" intent-id="position the sun vertically for sun flare effects">
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
                <div class="flex-1 min-w-0 flex items-center gap-2" alt-id="Jitter; grayed; 0.000" appearance-id="grayed-out field showing 0.000 for Jitter" location-id="inside the Compositor right sidebar Glare node properties, Jitter row" functionality-id="sets the random jitter amount (grayed out for this mode)" intent-id="add randomness to the glare pattern">
                  <div class="flex-1 h-[13px] bg-[#252525] rounded-[2px] border border-[#1a1a1a] overflow-hidden relative">
                    <div class="absolute left-0 top-0 bottom-0 bg-[#3d3d3d] pointer-events-none w-0"></div>
                  </div>
                  <span class="text-[12px] text-[#777] w-11 text-right tabular-nums pointer-events-none shrink-0">0.000</span>
                </div>
              </div>

              <div class="flex items-center gap-1 opacity-[0.45] pb-0.5">
                <span class="w-[72px] shrink-0 text-right pr-2 text-[12px] text-[#888] pointer-events-none">Data Type</span>
                <div class="flex-1 min-w-0 bg-[#252525] border border-[#1a1a1a] rounded-[3px] px-2 h-6 flex items-center justify-between cursor-default" alt-id="Data Type dropdown; Float; grayed out" appearance-id="grayed-out dropdown showing Float for the data type" location-id="inside the Group Sockets panel" functionality-id="shows the data type of the socket (grayed out)" intent-id="view the underlying data type of the socket">
                  <span class="text-[12px] text-[#777] pointer-events-none truncate">Float</span>
                  <i class="fa-solid fa-chevron-down text-[9px] opacity-40 pointer-events-none shrink-0"></i>
                </div>
              </div>
            </div>
            {/if}
          </div>
          
          <!-- Custom Properties Panel -->
          <div class="border-b border-[#1f1f1f]">
            <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" on:click={toggleCustomPropertiesPanel} alt-id="Custom Properties panel header" appearance-id="panel header labeled Custom Properties in the Compositor sidebar" location-id="top of the Custom Properties panel" functionality-id="identifies the Custom Properties panel" intent-id="manage custom properties for the node tree">
              <div class="flex items-center gap-2 pointer-events-none">
                {#if isCustomPropertiesPanelExpanded}
                  <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center pointer-events-none"></i>
                {:else}
                  <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center pointer-events-none"></i>
                {/if}
                <span class="font-[400] text-[13px] pointer-events-none">Custom Properties</span>
              </div>
              <div class="flex gap-[2px] opacity-40 cursor-grab" alt-id="Custom Properties panel drag handle" appearance-id="drag handle for the Custom Properties panel" location-id="at the edge of the Custom Properties panel header" functionality-id="allows dragging to resize the Custom Properties panel" intent-id="resize the Custom Properties panel">
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
              <div class="w-full bg-[#4a4a4a] hover:bg-[#555] border border-[#222] rounded-[3px] h-6 flex items-center cursor-pointer shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] px-2 relative" on:click={toggleCustomProperty} alt-id="Add new custom property button" appearance-id="plus button for adding a new custom property" location-id="inside the Custom Properties panel" functionality-id="adds a new custom property to the compositor node tree" intent-id="create a new user-defined property">
                <i class="fa-solid fa-plus text-[12px] text-[#ccc] pointer-events-none"></i>
                <span class="text-[13px] text-[#eee] pointer-events-none absolute inset-0 flex items-center justify-center">New</span>
              </div>
              
              {#if hasCustomProperty}
                <div class="flex items-center gap-1.5 mt-1" alt-id="Custom property row: prop" appearance-id="row in the Custom Properties panel showing the 'prop' property" location-id="inside the Custom Properties panel, in the property list" functionality-id="displays the custom property named prop and its value" intent-id="view and interact with the prop custom property">
                  <span class="text-[#ccc] text-[13px] w-[50px] text-right pointer-events-none">prop</span>
                  <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Custom property value input: 1.000" appearance-id="numeric input showing value 1.000 for a custom property" location-id="inside the Custom Properties panel, in the prop row" functionality-id="shows and edits the current value of the custom property" intent-id="change the value of this custom property">
                    <span class="text-[13px] text-white flex-1 text-center pointer-events-none">1.000</span>
                  </div>
                  <div class="w-[20px] h-6 flex items-center justify-center cursor-pointer opacity-80 hover:opacity-100" on:click={toggleEditProperty} alt-id="Custom property settings button" appearance-id="gear icon button for custom property settings" location-id="inside the Custom Properties panel, next to the property row" functionality-id="opens the property settings editor for the custom property" intent-id="configure the name, type, and range of this custom property">
                    <i class="fa-solid fa-gear text-[13px] text-[#eee] pointer-events-none"></i>
                  </div>
                  <div class="w-[20px] h-6 flex items-center justify-center cursor-pointer opacity-60 hover:opacity-100" on:click={toggleCustomProperty} alt-id="Remove custom property button" appearance-id="minus button for removing a custom property" location-id="inside the Custom Properties panel, next to the property row" functionality-id="removes the selected custom property" intent-id="delete an unwanted custom property">
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
            <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" on:click={toggleGroupPanel} alt-id="Group panel header" appearance-id="panel header labeled Group in the right sidebar" location-id="top of the Group panel in the Compositor right sidebar" functionality-id="identifies the Group settings panel" intent-id="configure group node settings">
              <div class="flex items-center gap-2 pointer-events-none">
                {#if isGroupPanelExpanded}
                  <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center pointer-events-none"></i>
                {:else}
                  <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center pointer-events-none"></i>
                {/if}
                <span class="font-medium text-[14px] pointer-events-none">Group</span>
              </div>
              <div class="flex gap-[2px] opacity-40 cursor-grab" alt-id="Group panel drag handle" appearance-id="drag handle for the Group panel" location-id="at the edge of the Group panel header" functionality-id="allows dragging to resize the Group panel" intent-id="resize the Group settings panel">
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
                <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Group name input field; value Compositing Nodetree" appearance-id="text input showing Compositing Nodetree for the group name" location-id="inside the Group panel, Name input row" functionality-id="allows renaming the compositor node tree" intent-id="change the name of the compositor node group">
                  <span class="text-[13px] text-white pointer-events-none">Compositing Nodetr...</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-[72px] shrink-0 text-right text-[12px] pointer-events-none">Description</span>
                <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Group description input field; value Description; grayed out" appearance-id="grayed-out text input showing Description for the group description" location-id="inside the Group panel, Description input row" functionality-id="allows entering a description for the node group" intent-id="document the purpose of this compositor group">
                  <span class="text-[13px] text-[#666] pointer-events-none">Description</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-[72px] shrink-0 text-right text-[12px] pointer-events-none">Color Tag</span>
                <div class="flex-1 bg-[#252525] border border-[#1a1a1a] rounded-[3px] px-2 h-6 flex items-center justify-between cursor-pointer text-[#e6e6e6] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] hover:bg-[#333]" alt-id="Color Tag dropdown; value None" appearance-id="dropdown showing None for the node color tag" location-id="inside the Node panel, Color Tag dropdown row" functionality-id="selects a color category for the node" intent-id="color-code the node for organization">
                  <span class="text-[13px] pointer-events-none truncate">None</span>
                  <i class="fa-solid fa-chevron-down text-[10px] opacity-60 pointer-events-none shrink-0"></i>
                </div>
              </div>
              <div class="flex items-center gap-2 opacity-[0.45]">
                <span class="w-[72px] shrink-0 text-right text-[12px] text-[#888] pointer-events-none">Node Width</span>
                <div class="flex-1 min-w-0 flex items-center gap-2" alt-id="Node Width slider; grayed out; 140" appearance-id="grayed-out slider showing value 140 for node width" location-id="inside the Node panel, Width slider row" functionality-id="sets the pixel width of the selected node (disabled)" intent-id="manually set the node width">
                  <div class="flex-1 h-6 bg-[#333] rounded-[3px] border border-[#111] flex items-center justify-center cursor-default shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
                    <span class="text-[13px] text-[#eee] pointer-events-none">140</span>
                  </div>
                  <div class="w-6 h-6 bg-[#2a2a2a] border border-[#111] rounded-[3px] flex items-center justify-center cursor-default opacity-50" alt-id="Reset to default node width button; grayed out" appearance-id="grayed-out button to reset node width to default" location-id="inside the Node panel, next to the width slider" functionality-id="resets the node width to its default value (disabled)" intent-id="restore the node's default width">
                    <div class="w-2.5 h-[1px] bg-[#ccc] pointer-events-none relative"><div class="w-1.5 h-1.5 border-[1px] border-[#ccc] rounded-[1px] absolute top-[-3px] left-[1px]"></div></div>
                  </div>
                </div>
              </div>
            </div>
            {/if}
          </div>

          <!-- Group Sockets Panel -->
          <div class="border-b border-[#1f1f1f]">
            <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" on:click={toggleGroupSocketsPanel} alt-id="Group Sockets panel header" appearance-id="panel header labeled Group Sockets in the right sidebar" location-id="top of the Group Sockets panel in the Compositor right sidebar" functionality-id="identifies the Group Sockets settings panel" intent-id="manage group socket definitions">
              <div class="flex items-center gap-2 pointer-events-none">
                {#if isGroupSocketsPanelExpanded}
                  <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center pointer-events-none"></i>
                {:else}
                  <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center pointer-events-none"></i>
                {/if}
                <span class="font-medium text-[14px] pointer-events-none">Group Sockets</span>
              </div>
              <div class="flex gap-[2px] opacity-40 cursor-grab" alt-id="Group Sockets panel drag handle" appearance-id="drag handle for the Group Sockets panel" location-id="at the edge of the Group Sockets panel header" functionality-id="allows dragging to resize the Group Sockets panel" intent-id="resize the Group Sockets panel">
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
              <div class="flex gap-1.5 h-[160px]" alt-id="Group sockets list" appearance-id="side-by-side panel showing input and output socket lists for the group" location-id="inside the Group panel, sockets area" functionality-id="displays all input and output sockets of the node group" intent-id="manage the interface of the compositor node group">
                <div class="flex-1 bg-[#282828] border border-[#111] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex flex-col relative overflow-hidden" alt-id="Sockets list box" appearance-id="dark bordered list box showing socket items" location-id="inside the Group Sockets panel, main list area" functionality-id="lists all sockets of one type (input or output) for the group" intent-id="select and edit individual sockets">
                  <div class="bg-[#4772b3] text-white flex items-center px-2 py-[2px] cursor-pointer" alt-id="Selected socket: Image (yellow circle)" appearance-id="highlighted list item showing Image socket with yellow dot, currently selected" location-id="first item in the Sockets list box in the Group panel" functionality-id="represents the selected Image socket in the list" intent-id="select this socket to edit its properties">
                    <div class="flex-1 text-center pr-4 text-[13px] pointer-events-none">Image</div>
                    <div class="w-2.5 h-2.5 rounded-full bg-[#cccc33] border border-[#111] shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] shrink-0" alt-id="Color socket type indicator: selected socket" appearance-id="small yellow dot indicator for Color socket type in the selected list item" location-id="inside the Selected socket item in the Sockets list box" functionality-id="visually indicates this socket carries Color data (selected)" intent-id="identify the data type of the selected socket"></div>
                  </div>
                  <div class="text-[#ccc] flex items-center gap-2 px-2 py-[2px] cursor-pointer hover:bg-[#333]" alt-id="Unselected socket: Image (yellow circle)" appearance-id="list item showing Image socket with yellow dot, not selected" location-id="second item in the Sockets list box in the Group panel" functionality-id="represents an unselected Image socket in the list" intent-id="select this socket to configure it">
                    <div class="w-2.5 h-2.5 rounded-full bg-[#cccc33] border border-[#111] shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] shrink-0" alt-id="Color socket type indicator: unselected socket" appearance-id="small yellow dot indicator for Color socket type in the unselected list item" location-id="inside the Unselected socket item in the Sockets list box" functionality-id="visually indicates this socket carries Color data (unselected)" intent-id="identify the data type of the unselected socket"></div>
                    <span class="text-[13px] pointer-events-none">Image</span>
                  </div>
                  
                  <div class="absolute bottom-1 left-1 right-1 flex justify-between items-center text-[#666]">
                    <i class="fa-solid fa-play text-[8px] pointer-events-none"></i>
                    <div class="grid grid-cols-2 gap-[2px] cursor-ns-resize" alt-id="Resize handle for sockets list box" appearance-id="four-dot drag handle for resizing the sockets list" location-id="inside the Sockets list box, bottom-right corner" functionality-id="allows resizing the socket list height" intent-id="adjust the visible area of the socket list">
                      <div class="w-[2px] h-[2px] rounded-full bg-[#888] pointer-events-none"></div>
                      <div class="w-[2px] h-[2px] rounded-full bg-[#888] pointer-events-none"></div>
                      <div class="w-[2px] h-[2px] rounded-full bg-[#888] pointer-events-none"></div>
                      <div class="w-[2px] h-[2px] rounded-full bg-[#888] pointer-events-none"></div>
                    </div>
                    <div></div>
                  </div>
                </div>
                
                <div class="w-6 flex flex-col gap-[2px]">
                  <div class="w-6 h-6 bg-[#3d3d3d] border border-[#1f1f1f] rounded-[3px] flex items-center justify-center cursor-pointer hover:bg-[#4d4d4d] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" alt-id="Add socket button" appearance-id="plus button for adding a new socket to the group" location-id="inside the Group Sockets panel, top-right Add button" functionality-id="adds a new socket to the node group" intent-id="create a new input or output socket">
                    <i class="fa-solid fa-plus text-[12px] pointer-events-none"></i>
                  </div>
                  <div class="w-6 h-6 bg-[#3d3d3d] border border-[#1f1f1f] rounded-[3px] flex items-center justify-center cursor-pointer hover:bg-[#4d4d4d] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" alt-id="Remove socket button" appearance-id="minus button for removing a socket from the group" location-id="inside the Group Sockets panel, second-row Remove button" functionality-id="removes the selected socket from the node group" intent-id="delete an unwanted socket">
                    <i class="fa-solid fa-minus text-[12px] pointer-events-none"></i>
                  </div>
                  <div class="w-6 h-6 bg-[#252525] border border-[#1a1a1a] rounded-[3px] flex items-center justify-center mt-1 text-[#666]" alt-id="Move socket down button; grayed out" appearance-id="grayed-out chevron-down button for moving socket down" location-id="inside the Group Sockets panel, third-row Move Down button" functionality-id="moves the selected socket down in the order (disabled)" intent-id="reorder sockets within the group interface">
                    <i class="fa-solid fa-chevron-down text-[12px] pointer-events-none"></i>
                  </div>
                </div>
              </div>
              
              <div class="flex items-center gap-2 mt-1">
                <span class="w-[72px] shrink-0 text-right text-[12px] text-[#aaa] pointer-events-none">Type</span>
                <div class="flex-1 bg-[#252525] border border-[#1a1a1a] rounded-[3px] px-2 h-6 flex items-center justify-between cursor-pointer text-[#e6e6e6] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] hover:bg-[#333]" alt-id="Socket Type dropdown; value Color" appearance-id="dropdown showing Color for the socket type" location-id="inside the Group Sockets panel, below the socket list" functionality-id="selects the data type for the selected socket" intent-id="choose what data type this socket carries">
                  <div class="flex items-center gap-2">
                    <div class="w-2.5 h-2.5 rounded-full bg-[#cccc33] border border-[#111] shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] shrink-0" alt-id="Color socket type indicator: type dropdown" appearance-id="small yellow dot indicator shown inside the Socket Type dropdown" location-id="inside the Socket Type dropdown, beside the Color label" functionality-id="visually indicates that Color is the selected socket type" intent-id="identify the current socket data type"></div>
                    <span class="text-[13px] pointer-events-none">Color</span>
                  </div>
                  <i class="fa-solid fa-chevron-down text-[10px] opacity-60 pointer-events-none shrink-0"></i>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-[72px] shrink-0 text-right text-[12px] text-[#aaa] pointer-events-none">Description</span>
                <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Socket description input field; value The image with the ..." appearance-id="text input showing The image with the... for socket description" location-id="inside the Group Sockets panel, below the Socket Type dropdown" functionality-id="allows entering a description for the selected socket" intent-id="document the purpose of this socket">
                  <span class="text-[13px] text-white pointer-events-none">The image with the ...</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-[72px] shrink-0 text-right text-[12px] text-[#aaa] pointer-events-none">Default</span>
                <div class="flex-1 h-5 rounded-[3px] border border-[#111] cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] flex overflow-hidden" alt-id="Socket default color picker field" appearance-id="color swatch field for the socket's default color value" location-id="inside the Group Sockets panel, Default color row" functionality-id="sets the default color value for this Color-type socket" intent-id="define the default input value when no connection is made">
                  <div class="flex-1 bg-black pointer-events-none"></div>
                  <div class="w-[45%] pointer-events-none relative">
                    <div class="absolute inset-0" style="background-image: linear-gradient(45deg, #808080 25%, transparent 25%), linear-gradient(-45deg, #808080 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #808080 75%), linear-gradient(-45deg, transparent 75%, #808080 75%); background-size: 8px 8px; background-position: 0 0, 0 4px, 4px -4px, -4px 0px;"></div>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-[72px]"></div>
                <div class="flex items-center gap-2 cursor-pointer text-[#ccc] hover:text-white" alt-id="Hide Value checkbox; unchecked" appearance-id="unchecked checkbox labeled Hide Value" location-id="inside the Group Sockets panel, Hide Value checkbox row" functionality-id="when checked, hides the value display in the socket row" intent-id="hide the default value from the node interface">
                  <div class="w-3.5 h-3.5 border border-[#111] bg-[#333] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] pointer-events-none"></div>
                  <span class="text-[13px] pointer-events-none">Hide Value</span>
                </div>
              </div>
            </div>
            {/if}
          </div>

          <!-- Group Animation Panel -->
          <div class="border-b border-[#1f1f1f]">
            <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" on:click={toggleGroupAnimationPanel} alt-id="Group Animation panel header" appearance-id="panel header labeled Animation in the Group section of the right sidebar" location-id="top of the Group Animation panel" functionality-id="identifies the Group Animation panel" intent-id="configure animation for the compositor node group">
              <div class="flex items-center gap-2 pointer-events-none">
                {#if isGroupAnimationPanelExpanded}
                  <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center pointer-events-none"></i>
                {:else}
                  <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center pointer-events-none"></i>
                {/if}
                <span class="font-medium text-[14px] pointer-events-none">Animation</span>
              </div>
              <div class="flex gap-[2px] opacity-40 cursor-grab" alt-id="Group Animation panel drag handle" appearance-id="drag handle for the Group Animation panel" location-id="at the edge of the Group Animation panel header" functionality-id="allows dragging to resize the Group Animation panel" intent-id="resize the Animation panel">
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
              <div class="bg-[#2a2a2a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] h-6 w-9 flex items-center justify-between px-1 cursor-pointer text-[#e6e6e6] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] hover:bg-[#333]" alt-id="Action dropdown button" appearance-id="dropdown button in the compositor header for actions" location-id="in the Compositor header toolbar area" functionality-id="opens a menu of compositor actions" intent-id="access compositor-level operations">
                <i class="fa-solid fa-diagram-project text-[12px] opacity-80 pointer-events-none"></i>
                <i class="fa-solid fa-chevron-down text-[8px] opacity-60 pointer-events-none"></i>
              </div>
              <div class="flex-1 bg-[#3d3d3d] border border-[#1f1f1f] rounded-[3px] h-6 flex items-center justify-center gap-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] cursor-pointer hover:bg-[#4d4d4d]" alt-id="New Action button" appearance-id="button labeled New Action in the Node panel" location-id="inside the Node panel, New Action row at the bottom" functionality-id="creates a new action for the node" intent-id="add animation keyframes to node properties">
                <i class="fa-solid fa-plus text-[12px] text-[#ccc] pointer-events-none"></i>
                <span class="text-[13px] text-[#eee] pointer-events-none pr-1">New</span>
              </div>
            </div>
            {/if}
          </div>
          {/if}

        {#if isColorPickerOpen}
        <div class="absolute left-1.5 top-[118px] z-[60] w-[236px] bg-[#1d1d1d] border border-[#333] rounded-[5px] shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex flex-col p-2 text-[12px] text-[#ccc] gap-2" alt-id="Color picker popover menu; opened from Glare Tint in compositor sidebar or graph node" appearance-id="floating color picker panel with wheel, hex input, and channel sliders" location-id="overlaying the compositor when the Tint color swatch is clicked" functionality-id="provides a full-featured color picker for the Glare Tint color" intent-id="choose the exact tint color for the glare effect">
          <div class="flex gap-2">
            <div class="w-[180px] h-[180px] rounded-full relative cursor-crosshair shrink-0" alt-id="Color wheel area" appearance-id="large round color wheel showing hue and saturation" location-id="inside the Color picker popover" functionality-id="allows selecting a hue and saturation by clicking the color wheel" intent-id="visually pick a hue and saturation">
              <div class="absolute inset-0 rounded-full border-[10px] border-transparent" style="background: conic-gradient(red, magenta, blue, cyan, lime, yellow, red); border-radius: 50%;"></div>
              <div class="absolute inset-0 rounded-full" style="background: radial-gradient(circle closest-side, white 0%, transparent 100%);"></div>
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full border border-[#111] bg-white shadow-[0_0_2px_rgba(0,0,0,0.5)] pointer-events-none"></div>
            </div>
            <div class="flex-1 min-w-[28px] rounded-[3px] border border-[#111] relative cursor-row-resize min-h-[180px]" alt-id="Color brightness slider" appearance-id="vertical or horizontal brightness slider in the color picker" location-id="inside the Color picker popover, beside the color wheel" functionality-id="adjusts the lightness/value of the selected color" intent-id="set the brightness of the chosen color">
              <div class="absolute inset-0 rounded-[2px]" style="background: linear-gradient(to bottom, white, black);"></div>
              <div class="absolute top-0 left-[-2px] right-[-2px] h-[6px] bg-white border border-[#111] rounded-[1px] pointer-events-none"></div>
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <div class="flex bg-[#2a2a2a] border border-[#111] rounded-[3px] overflow-hidden" alt-id="Color space toggle: Linear or Perceptual" appearance-id="toggle control to switch between linear and perceptual color space" location-id="inside the Color picker popover" functionality-id="toggles between linear and perceptual color space views" intent-id="choose the display color space for the color picker">
              <div class="flex-1 py-[3px] text-center cursor-pointer hover:bg-[#333] border-r border-[#111]" alt-id="Linear color space button" appearance-id="button for linear color space in the color picker" location-id="inside the Color picker popover" functionality-id="sets the color picker to display in linear color space" intent-id="work in linear color space">Linear</div>
              <div class="flex-1 py-[3px] text-center cursor-pointer bg-[#4772b3] text-white" alt-id="Perceptual color space button, active" appearance-id="active button for perceptual color space in the color picker" location-id="inside the Color picker popover, currently active" functionality-id="sets the color picker to display in perceptual/sRGB space" intent-id="work in perceptual sRGB color space">Perceptual</div>
            </div>
            <div class="flex bg-[#2a2a2a] border border-[#111] rounded-[3px] overflow-hidden" alt-id="Color model toggle: RGB or HSV" appearance-id="toggle control to switch between RGB and HSV color models" location-id="inside the Color picker popover" functionality-id="toggles between RGB and HSV input representations" intent-id="choose the color input model">
              <div class="flex-1 py-[3px] text-center cursor-pointer hover:bg-[#333] border-r border-[#111]" alt-id="RGB color model button" appearance-id="toggle button for the RGB color model" location-id="inside the Color picker popover, in the color model selection row" functionality-id="switches the color picker to RGB mode" intent-id="use red, green, blue color model">RGB</div>
              <div class="flex-1 py-[3px] text-center cursor-pointer bg-[#4772b3] text-white" alt-id="HSV color model button, active" appearance-id="active toggle button for the HSV color model" location-id="inside the Color picker popover, in the color model selection row" functionality-id="switches the color picker to HSV mode; currently active" intent-id="use hue, saturation, value color model">HSV</div>
            </div>
          </div>
          <div class="flex flex-col border border-[#111] rounded-[3px] overflow-hidden bg-[#2a2a2a]" alt-id="Color components inputs" appearance-id="group of numeric inputs for color channel values" location-id="inside the Color picker popover, below the color wheel" functionality-id="displays and allows editing of individual RGBA or HSV channel values" intent-id="enter precise color component values">
            <div class="flex items-center px-2 py-[2px] border-b border-[#111] cursor-ew-resize hover:bg-[#333]" alt-id="Hue input slider: 0.000" appearance-id="numeric slider showing value 0.000 for the hue channel" location-id="inside the Color picker popover, in the color components area" functionality-id="sets the hue of the selected color" intent-id="specify the hue value numerically">
              <span class="text-[#aaa] pointer-events-none">Hue</span>
              <span class="flex-1 text-right text-white pointer-events-none">0.000</span>
            </div>
            <div class="flex items-center px-2 py-[2px] border-b border-[#111] cursor-ew-resize hover:bg-[#333]" alt-id="Saturation input slider: 0.000" appearance-id="numeric slider showing value 0.000 for the saturation channel" location-id="inside the Color picker popover, in the color components area" functionality-id="sets the saturation of the selected color" intent-id="specify the saturation value numerically">
              <span class="text-[#aaa] pointer-events-none">Saturation</span>
              <span class="flex-1 text-right text-white pointer-events-none">0.000</span>
            </div>
            <div class="flex items-center px-2 py-[2px] border-b border-[#111] cursor-ew-resize bg-[#4772b3] text-white relative" alt-id="Value input slider: 1.000, active" appearance-id="active numeric slider showing value 1.000 for the value/brightness channel" location-id="inside the Color picker popover, in the color components area" functionality-id="sets the value/brightness of the selected color" intent-id="specify the brightness value numerically">
              <div class="absolute top-0 bottom-0 left-0 bg-[#5985cc] pointer-events-none" style="width: 100%;"></div>
              <span class="relative z-10 pointer-events-none">Value</span>
              <span class="flex-1 text-right text-white relative z-10 pointer-events-none">1.000</span>
            </div>
            <div class="flex items-center px-2 py-[2px] cursor-ew-resize bg-[#4772b3] text-white relative" alt-id="Alpha input slider: 1.000, active" appearance-id="active numeric slider showing value 1.000 for the alpha channel" location-id="inside the Color picker popover, in the color components area" functionality-id="sets the alpha/opacity of the selected color" intent-id="specify the transparency value numerically">
              <div class="absolute top-0 bottom-0 left-0 bg-[#5985cc] pointer-events-none" style="width: 100%;"></div>
              <span class="relative z-10 pointer-events-none">Alpha</span>
              <span class="flex-1 text-right text-white relative z-10 pointer-events-none">1.000</span>
            </div>
          </div>
          <div class="flex items-center justify-between gap-2 mt-1">
            <span class="text-[#aaa]" alt-id="Hex label" appearance-id="small label reading Hex beside the hex input field" location-id="inside the Color picker popover, next to the hex input" functionality-id="labels the hexadecimal color input field" intent-id="identify the hex color input">Hex</span>
            <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Hex color input: #FFFFFFFF" appearance-id="text input showing hex value #FFFFFFFF for the color" location-id="inside the Color picker popover, below the sliders" functionality-id="allows entering a color as a hexadecimal value" intent-id="specify a color using its hex code">
              <span class="text-[12px] text-white tracking-widest font-mono pointer-events-none">#FFFFFFFF</span>
            </div>
            <div class="w-6 h-6 flex items-center justify-center bg-[#2a2a2a] border border-[#111] rounded-[3px] cursor-pointer hover:bg-[#333]" alt-id="Eyedropper color picker tool" appearance-id="eyedropper tool button in the compositor toolbar" location-id="in the Compositor left toolbar" functionality-id="activates the eyedropper to sample colors from the compositor" intent-id="sample a color from the backdrop or node">
              <i class="fa-solid fa-eye-dropper text-[12px] pointer-events-none"></i>
            </div>
          </div>
        </div>
        {/if}

        {#if isEditPropertyOpen}
        <div class="fixed inset-0 z-40 bg-transparent" on:click={toggleEditProperty} ></div>
        <div class="absolute right-[270px] top-[400px] w-[320px] bg-[#1d1d1d] border border-[#333] rounded-[5px] shadow-[0_10px_30px_rgba(0,0,0,0.8)] z-[60] flex flex-col text-[13px] text-[#ccc]" alt-id="Edit Property popover" appearance-id="floating panel for editing custom property settings" location-id="overlaying the compositor when a custom property settings button is clicked" functionality-id="provides fields to configure a custom property's name, type, and range" intent-id="fully configure a custom property">
          <!-- Header -->
          <div class="px-3 py-2 border-b border-[#2a2a2a] flex items-center text-white font-medium" alt-id="Edit Property popover header" appearance-id="header of the Edit Property popover" location-id="top of the Edit Property popover panel" functionality-id="labels the popover as Edit Property" intent-id="identify this as the property editing interface">
            <span class="pointer-events-none">Edit Property</span>
          </div>
          <!-- Body -->
          <div class="p-3 flex flex-col gap-2">
            <!-- Type -->
            <div class="flex items-center gap-2">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Type</span>
              <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between cursor-pointer shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" alt-id="Edit Property Type dropdown; value Float" appearance-id="dropdown showing Float for the property type" location-id="inside the Edit Property popover, Type dropdown row" functionality-id="selects the data type of the custom property" intent-id="choose between Float, Integer, Boolean, etc.">
                <span class="text-[13px] text-[#eee] pointer-events-none"><u class="underline-offset-2 decoration-1 text-[#eee] pointer-events-none">F</u>loat</span>
                <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
              </div>
            </div>
            <!-- Property Name -->
            <div class="flex items-center gap-2">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Property Name</span>
              <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Edit Property Name input; value prop" appearance-id="text input showing prop for the property name" location-id="inside the Edit Property popover, Name input row" functionality-id="allows renaming the custom property" intent-id="change the property identifier">
                <span class="text-[13px] text-white pointer-events-none">prop</span>
              </div>
            </div>
            <!-- Default Value -->
            <div class="flex items-center gap-2">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Default Value</span>
              <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Edit Property Default Value slider; value 1.00" appearance-id="slider showing value 1.00 for the property default" location-id="inside the Edit Property popover, Default Value slider row" functionality-id="sets the default value when the property is created or reset" intent-id="define the starting/default value">
                <span class="text-[13px] text-[#eee] pointer-events-none">1.00</span>
              </div>
            </div>
            <!-- Min -->
            <div class="flex items-center gap-2">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Min</span>
              <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] rounded-b-[1px] border-b-0 h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Edit Property Min slider; value 0.00" appearance-id="slider showing value 0.00 for the minimum value" location-id="inside the Edit Property popover, Min slider row" functionality-id="sets the minimum allowed value for the property" intent-id="define the lower bound of the property range">
                <span class="text-[13px] text-[#eee] pointer-events-none">0.00</span>
              </div>
            </div>
            <!-- Max -->
            <div class="flex items-center gap-2 -mt-2">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Max</span>
              <div class="flex-1 bg-[#4d4d4d] border border-[#222] border-t-0 rounded-[3px] rounded-t-[1px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Edit Property Max slider; value 1.00" appearance-id="slider showing value 1.00 for the maximum value" location-id="inside the Edit Property popover, Max slider row" functionality-id="sets the maximum allowed value for the property" intent-id="define the upper bound of the property range">
                <span class="text-[13px] text-[#eee] pointer-events-none">1.00</span>
              </div>
            </div>
            <!-- Soft Limits -->
            <div class="flex items-center gap-2 mt-1">
              <span class="w-[100px]"></span>
              <div class="flex items-center gap-2 cursor-pointer" alt-id="Soft Limits checkbox; unchecked" appearance-id="unchecked checkbox labeled Soft Limits" location-id="inside the Edit Property popover, Soft Limits checkbox row" functionality-id="when checked, enables soft min/max limits on the socket value" intent-id="add soft clamping to the socket value range">
                <div class="w-3.5 h-3.5 border border-[#111] bg-[#444] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] pointer-events-none"></div>
                <span class="text-[13px] text-[#aaa] pointer-events-none">Soft Limits</span>
              </div>
            </div>
            <!-- Soft Min -->
            <div class="flex items-center gap-2 opacity-50 mt-1">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Soft Min</span>
              <div class="flex-1 bg-[#252525] border border-[#1a1a1a] rounded-[3px] rounded-b-[1px] border-b-0 h-[22px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Edit Property Soft Min slider; value 0.00; disabled" appearance-id="disabled slider for soft minimum value" location-id="inside the Edit Property popover, Soft Min slider row" functionality-id="sets the soft minimum (drag limit) for the property (disabled)" intent-id="define a soft lower limit for UI drag controls">
                <span class="text-[13px] text-[#888] pointer-events-none">0.00</span>
              </div>
            </div>
            <!-- Soft Max -->
            <div class="flex items-center gap-2 -mt-2 opacity-50">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Max</span>
              <div class="flex-1 bg-[#252525] border border-[#1a1a1a] border-t-0 rounded-[3px] rounded-t-[1px] h-[22px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Edit Property Soft Max slider; value 1.00; disabled" appearance-id="disabled slider for soft maximum value" location-id="inside the Edit Property popover, Soft Max slider row" functionality-id="sets the soft maximum (drag limit) for the property (disabled)" intent-id="define a soft upper limit for UI drag controls">
                <span class="text-[13px] text-[#888] pointer-events-none">1.00</span>
              </div>
            </div>
            <!-- Step -->
            <div class="flex items-center gap-2 mt-1">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Step</span>
              <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Edit Property Step slider; value 0.10" appearance-id="slider showing value 0.10 for the value step increment" location-id="inside the Edit Property popover, Step slider row" functionality-id="sets the increment step for the property value" intent-id="control how much the value changes per drag unit">
                <span class="text-[13px] text-[#eee] pointer-events-none">0.10</span>
              </div>
            </div>
            <!-- Precision -->
            <div class="flex items-center gap-2">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Precision</span>
              <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Edit Property Precision slider; value 3" appearance-id="slider showing value 3 for the display precision" location-id="inside the Edit Property popover, Precision slider row" functionality-id="sets the number of decimal places shown for this property" intent-id="control display precision of the property value">
                <span class="text-[13px] text-[#eee] pointer-events-none">3</span>
              </div>
            </div>
            <!-- Subtype -->
            <div class="flex items-center gap-2">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Subtype</span>
              <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between cursor-pointer shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" alt-id="Edit Property Subtype dropdown; value Plain Data" appearance-id="dropdown showing Plain Data for the property subtype" location-id="inside the Edit Property popover, Subtype dropdown row" functionality-id="selects the subtype for display and units" intent-id="specify how this property value should be interpreted">
                <span class="text-[13px] text-[#eee] pointer-events-none"><u class="underline-offset-2 decoration-1 text-[#eee] pointer-events-none">P</u>lain Data</span>
                <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
              </div>
            </div>
            <!-- Description -->
            <div class="flex items-center gap-2">
              <span class="w-[100px] text-right text-[#aaa] pointer-events-none">Description</span>
              <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Edit Property Description input; empty" appearance-id="empty text input for the property description" location-id="inside the Edit Property popover, Description input row" functionality-id="allows entering a description for the custom property" intent-id="document what this custom property represents">
                <span class="text-[13px] text-[#888] pointer-events-none">&nbsp;</span>
              </div>
            </div>
            <!-- Library Overridable -->
            <div class="flex items-center gap-2 mt-1">
              <span class="w-[100px]"></span>
              <div class="flex items-center gap-2 cursor-pointer" alt-id="Library Overridable checkbox; unchecked" appearance-id="unchecked checkbox labeled Library Overridable" location-id="inside the Edit Property popover, Library Overridable checkbox row" functionality-id="when checked, allows this socket to be overridden by library links" intent-id="enable library override capability for this socket">
                <div class="w-3.5 h-3.5 border border-[#111] bg-[#444] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] pointer-events-none"></div>
                <span class="text-[13px] text-[#aaa] pointer-events-none">Library Overridable</span>
              </div>
            </div>
          </div>
          
          <!-- Footer Buttons -->
          <div class="px-3 pb-3 flex items-center gap-2 pt-1 mt-1">
            <div class="flex-1 bg-[#444] hover:bg-[#555] rounded-[3px] border border-[#222] py-1 text-center cursor-pointer text-[#eee] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" on:click={toggleEditProperty} alt-id="Cancel Edit Property button" appearance-id="Cancel button in the Edit Property popover" location-id="at the bottom-left of the Edit Property popover" functionality-id="cancels the property editing and closes the popover" intent-id="discard changes to the custom property settings"><u class="underline-offset-2 decoration-1 text-[#eee] pointer-events-none">C</u>ancel</div>
            <div class="flex-1 bg-[#4772b3] hover:bg-[#5985cc] rounded-[3px] border border-[#222] py-1 text-center cursor-pointer text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" on:click={toggleEditProperty} alt-id="OK Edit Property button" appearance-id="OK confirmation button in the Edit Property popover" location-id="at the bottom-right of the Edit Property popover" functionality-id="confirms and applies the property configuration changes" intent-id="save the custom property settings"><u class="underline-offset-2 decoration-1 text-white pointer-events-none">O</u>K</div>
          </div>
        </div>
        {/if}
      
      {#if activeSidebarTab === 'tool'}
      <!-- Tool Panel -->
      <div class="border-b border-[#1f1f1f]">
        <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" alt-id="Active Tool panel header" appearance-id="panel header labeled Active Tool in the Compositor right sidebar" location-id="top of the Active Tool panel" functionality-id="identifies the Active Tool properties panel" intent-id="view properties for the currently active tool">
          <div class="flex items-center gap-2 pointer-events-none">
            <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center pointer-events-none"></i>
            <span class="font-medium text-[14px] pointer-events-none">Active Tool</span>
          </div>
          <div class="flex gap-[2px] opacity-40 cursor-grab" alt-id="Active Tool panel drag handle" appearance-id="drag handle for the Active Tool panel" location-id="at the edge of the Active Tool panel header" functionality-id="allows dragging to resize the Active Tool panel" intent-id="resize the Active Tool settings panel">
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
          <div class="flex items-center gap-3 px-2 py-1 cursor-pointer" alt-id="Select Box tool button" appearance-id="tool button for Box Select in the compositor toolbar" location-id="in the Compositor left toolbar" functionality-id="activates the Box Select tool for selecting nodes" intent-id="select compositor nodes with a drawn rectangle">
            <div class="w-6 h-6 border border-dashed border-[#e68a00] flex items-center justify-center pointer-events-none">
              <i class="fa-solid fa-arrow-pointer text-[12px] text-[#ccc] pointer-events-none"></i>
            </div>
            <span class="text-[13px] pointer-events-none">Select Box</span>
          </div>
          
          <div class="flex gap-[1px] px-2" alt-id="Selection modes" appearance-id="group of selection mode toggle buttons" location-id="in the Compositor header, left of the node canvas controls" functionality-id="provides buttons to choose between selection behavior modes" intent-id="switch how selection interactions work">
            <div class="w-6 h-6 bg-[#4772b3] rounded-l-[3px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]" alt-id="New selection mode; active" appearance-id="active toggle button for New selection mode (replace current selection)" location-id="first button in the Selection modes group in the Compositor header" functionality-id="sets selection to replace the current selection" intent-id="select items replacing any existing selection">
              <div class="w-3.5 h-3.5 border border-dashed border-white pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 bg-[#282828] flex items-center justify-center cursor-pointer hover:bg-[#333] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] relative" alt-id="Add to selection mode" appearance-id="toggle button for Add selection mode" location-id="second button in the Selection modes group in the Compositor header" functionality-id="sets selection to add to the current selection" intent-id="add items to the existing selection">
              <div class="w-2.5 h-2.5 bg-[#ccc] absolute top-1 left-1 pointer-events-none"></div>
              <div class="w-2.5 h-2.5 bg-[#999] absolute bottom-1 right-1 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 bg-[#282828] rounded-r-[3px] flex items-center justify-center cursor-pointer hover:bg-[#333] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] relative" alt-id="Subtract from selection mode" appearance-id="toggle button for Subtract selection mode" location-id="third button in the Selection modes group in the Compositor header" functionality-id="sets selection to remove from the current selection" intent-id="remove items from the existing selection">
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
          <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" on:click={toggleBackdropPanel} alt-id="Backdrop panel header" appearance-id="panel header labeled Backdrop in the right sidebar" location-id="top of the Backdrop panel in the Compositor right sidebar" functionality-id="toggles or identifies the Backdrop settings panel" intent-id="access backdrop display settings">
            <div class="flex items-center gap-2 pointer-events-none">
              {#if isBackdropPanelExpanded}
                <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center pointer-events-none"></i>
              {:else}
                <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center pointer-events-none"></i>
              {/if}
              <div class="w-3.5 h-3.5 border border-[#111] bg-[#444] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] pointer-events-none"></div>
              <span class="font-medium text-[14px] pointer-events-none">Backdrop</span>
            </div>
            <div class="flex gap-[2px] opacity-40 cursor-grab" alt-id="Backdrop panel drag handle" appearance-id="drag handle for the Backdrop panel" location-id="at the bottom of the Backdrop panel header" functionality-id="allows dragging to resize the Backdrop panel" intent-id="resize the Backdrop settings panel">
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
              <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Backdrop Channels dropdown; value Color & Alpha" appearance-id="dropdown showing Color & Alpha for backdrop display channels" location-id="inside the Backdrop panel, Channels dropdown row" functionality-id="selects which channels to display in the backdrop" intent-id="choose which color channels are visible in the backdrop">
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
              <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-6 flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Backdrop Zoom slider; value 1.00" appearance-id="numeric slider showing value 1.00 for backdrop zoom" location-id="inside the Backdrop panel, Zoom slider row" functionality-id="sets the zoom level of the backdrop image" intent-id="scale the backdrop image in the canvas">
                <span class="text-[13px] text-[#eee] pointer-events-none">1.00</span>
              </div>
            </div>
            <!-- Offset X -->
            <div class="flex items-center gap-2 mt-1">
              <span class="w-[72px] shrink-0 text-right text-[12px] pointer-events-none">Offset X</span>
              <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] rounded-b-[1px] border-b-0 h-6 flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Backdrop Offset X slider; value 0.000" appearance-id="numeric slider showing value 0.000 for backdrop X offset" location-id="inside the Backdrop panel, Offset X slider row" functionality-id="sets the horizontal offset of the backdrop image" intent-id="move the backdrop image horizontally">
                <span class="text-[13px] text-[#eee] pointer-events-none">0.000</span>
              </div>
            </div>
            <!-- Offset Y -->
            <div class="flex items-center gap-2 -mt-[2px]">
              <span class="w-[72px] shrink-0 text-right text-[12px] pointer-events-none">Y</span>
              <div class="flex-1 bg-[#4d4d4d] border border-[#222] border-t-0 rounded-[3px] rounded-t-[1px] h-6 flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Backdrop Offset Y slider; value 0.000" appearance-id="numeric slider showing value 0.000 for backdrop Y offset" location-id="inside the Backdrop panel, Offset Y slider row" functionality-id="sets the vertical offset of the backdrop image" intent-id="move the backdrop image vertically">
                <span class="text-[13px] text-[#eee] pointer-events-none">0.000</span>
              </div>
            </div>
            <!-- Move Button -->
            <div class="flex mt-1">
              <div class="w-[72px] shrink-0"></div>
              <div class="flex-1 bg-[#444] hover:bg-[#555] rounded-[3px] border border-[#222] py-1 text-center cursor-pointer text-[#eee] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] text-[13px]" alt-id="Backdrop Move button" appearance-id="button labeled Move for backdrop positioning" location-id="inside the Backdrop panel, Move button row" functionality-id="enables interactive backdrop positioning" intent-id="click and drag to reposition the backdrop">Move</div>
            </div>
            <!-- Fit Button -->
            <div class="flex mt-0.5">
              <div class="w-[72px] shrink-0"></div>
              <div class="flex-1 bg-[#444] hover:bg-[#555] rounded-[3px] border border-[#222] py-1 text-center cursor-pointer text-[#eee] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] text-[13px]" alt-id="Backdrop Fit button" appearance-id="button labeled Fit for backdrop scaling" location-id="inside the Backdrop panel, Fit button row" functionality-id="scales the backdrop to fit the compositor view" intent-id="fit the backdrop image to the canvas">Fit</div>
            </div>
          </div>
          {/if}
        </div>

        <!-- Annotations Panel -->
        <div class="border-b border-[#1f1f1f]">
          <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" on:click={toggleAnnotationsPanel} alt-id="Annotations panel header" appearance-id="panel header labeled Annotations in the right sidebar" location-id="top of the Annotations panel in the Compositor right sidebar" functionality-id="identifies the Annotations panel" intent-id="manage annotation layers in the compositor">
            <div class="flex items-center gap-2 pointer-events-none">
              {#if isAnnotationsPanelExpanded}
                <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center pointer-events-none"></i>
              {:else}
                <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center pointer-events-none"></i>
              {/if}
              <span class="font-medium text-[14px] pointer-events-none">Annotations</span>
            </div>
            <div class="flex gap-[2px] opacity-40 cursor-grab" alt-id="Annotations panel drag handle" appearance-id="drag handle for the Annotations panel" location-id="at the edge of the Annotations panel header" functionality-id="allows dragging to resize the Annotations panel" intent-id="resize the Annotations panel">
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
              <div class="bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Annotations tool dropdown" appearance-id="dropdown button for annotation tools in the compositor toolbar" location-id="in the Compositor left toolbar" functionality-id="opens the annotation tools selection" intent-id="choose between annotation tool variants">
                <i class="fa-solid fa-pen-nib text-[12px] text-[#eee] mr-1 pointer-events-none"></i>
                <i class="fa-solid fa-chevron-down text-[9px] text-[#a0a0a0] pointer-events-none"></i>
              </div>
              <div class="flex-1 bg-[#444] hover:bg-[#555] rounded-[3px] border border-[#222] h-6 flex items-center justify-center cursor-pointer text-[#eee] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] text-[13px]" alt-id="New Annotation button" appearance-id="button labeled New Annotation in the Annotations panel" location-id="inside the Annotations panel in the Compositor right sidebar" functionality-id="creates a new annotation layer" intent-id="add annotation marks to the compositor canvas">
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
          <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" on:click={togglePerformancePanel} alt-id="Performance panel header" appearance-id="panel header labeled Performance in the Compositor sidebar" location-id="top of the Performance panel" functionality-id="identifies the Performance settings panel" intent-id="configure compositor performance options">
            <div class="flex items-center gap-2 pointer-events-none">
              {#if isPerformancePanelExpanded}
                <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center pointer-events-none"></i>
              {:else}
                <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center pointer-events-none"></i>
              {/if}
              <span class="font-medium text-[14px] pointer-events-none">Performance</span>
            </div>
            <div class="flex gap-[2px] opacity-40 cursor-grab" alt-id="Performance panel drag handle" appearance-id="drag handle for the Performance panel" location-id="at the edge of the Performance panel header" functionality-id="allows dragging to resize the Performance panel" intent-id="resize the Performance panel">
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
              <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Performance Device dropdown; value CPU" appearance-id="dropdown showing CPU for compositor performance device" location-id="inside the Performance panel" functionality-id="selects the compute device for compositor processing" intent-id="choose CPU or GPU for compositor calculations">
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
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide {activeSidebarTab === 'group' ? 'text-white bg-[#3d3d3d]' : 'hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333]'}" on:click={() => setActiveSidebarTab('group')} alt-id="Group tab, first element in the compositor sidebar tabs" appearance-id="first tab in the Compositor right sidebar labeled Group" location-id="leftmost tab in the Compositor right sidebar tab row" functionality-id="switches the right sidebar to the Group properties panel" intent-id="view and configure node group settings" style="writing-mode: vertical-rl;"><span class="pointer-events-none">Group</span></div>
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide mt-0.5 {activeSidebarTab === 'node' ? 'text-white bg-[#3d3d3d]' : 'hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333]'}" on:click={() => setActiveSidebarTab('node')} alt-id="Node tab, currently selected, second element in the compositor sidebar tabs" appearance-id="second tab in the Compositor right sidebar labeled Node, currently active" location-id="second tab in the Compositor right sidebar tab row" functionality-id="switches the right sidebar to the Node properties panel; currently selected" intent-id="view and configure the selected node's properties" style="writing-mode: vertical-rl;"><span class="pointer-events-none">Node</span></div>
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide mt-0.5 {activeSidebarTab === 'tool' ? 'text-white bg-[#3d3d3d]' : 'hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333]'}" on:click={() => setActiveSidebarTab('tool')} alt-id="Tool tab, third element in the compositor sidebar tabs" appearance-id="third tab in the Compositor right sidebar labeled Tool" location-id="third tab in the Compositor right sidebar tab row" functionality-id="switches the right sidebar to the Tool properties panel" intent-id="view active tool settings and options" style="writing-mode: vertical-rl;"><span class="pointer-events-none">Tool</span></div>
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333] rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide mt-0.5 {activeSidebarTab === 'view' ? 'text-white bg-[#3d3d3d]' : 'hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333]'}" on:click={() => setActiveSidebarTab('view')} alt-id="View tab, fourth element in the compositor sidebar tabs" appearance-id="fourth tab in the Compositor right sidebar labeled View" location-id="fourth tab in the Compositor right sidebar tab row" functionality-id="switches the right sidebar to the View settings panel" intent-id="configure viewport display settings" style="writing-mode: vertical-rl;"><span class="pointer-events-none">View</span></div>
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333] rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide mt-0.5 {activeSidebarTab === 'options' ? 'text-white bg-[#3d3d3d]' : 'hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333]'}" on:click={() => setActiveSidebarTab('options')} alt-id="Options tab, fifth element in the compositor sidebar tabs" appearance-id="fifth tab in the Compositor right sidebar labeled Options" location-id="fifth tab in the Compositor right sidebar tab row" functionality-id="switches the right sidebar to the Options panel" intent-id="configure compositor options and performance settings" style="writing-mode: vertical-rl;"><span class="pointer-events-none">Options</span></div>
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
         alt-id="Node context menu" appearance-id="dark floating context menu for node operations" location-id="overlaying the compositor canvas when right-clicking a node" functionality-id="provides options for the selected node" intent-id="access node-specific operations">
      
      <div class="px-3 py-1 text-[#aaa] border-b border-[#333] mb-1 flex items-center" alt-id="Context menu header: Node" appearance-id="header labeled Node at the top of the node context menu" location-id="top of the Node context menu" functionality-id="identifies this as a node context menu" intent-id="confirm this menu applies to a node">
        <span class="pointer-events-none">Node</span>
      </div>

      <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group bg-[#4d4d4d] text-white" on:mouseenter={() => { isNodeContextMenuAddOpen = true; updateOpenParam(); }} alt-id="Context menu item: Add" appearance-id="menu item labeled Add in the node context menu" location-id="inside the Node context menu" functionality-id="adds a new node via the context menu" intent-id="add a node at the right-clicked location">
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
          <div class="absolute left-[calc(100%-4px)] top-[24px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[240px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Add nested menu" appearance-id="Add menu item in the Compositor header menu bar" location-id="in the Compositor header menu bar" functionality-id="opens the Add menu for adding new compositor nodes" intent-id="add new nodes to the compositor graph">
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group bg-[#4d4d4d] text-white" on:mouseenter={() => { isNodeContextMenuInputOpen = true; updateOpenParam(); }} alt-id="Add menu item: Input" appearance-id="menu item labeled Input in the Add menu" location-id="inside the Add menu dropdown" functionality-id="opens the Input submenu for input nodes" intent-id="add an input node like Image, Scene, or Mask">
              <span class="pointer-events-none ml-5">Input</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isNodeContextMenuInputOpen}
                <!-- Input Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[102] w-[220px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Input nested menu" appearance-id="Input submenu in the Add menu" location-id="inside the Add menu dropdown" functionality-id="opens the Input nodes submenu" intent-id="add input source nodes">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Input menu item: Constant" appearance-id="menu item labeled Constant in the Input submenu" location-id="inside the Add > Input submenu" functionality-id="adds a Constant value node" intent-id="add a constant value input">
                    <span class="pointer-events-none ml-5">Constant</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Input menu item: Bokeh Image" appearance-id="menu item labeled Bokeh Image in the Input submenu" location-id="inside the Add > Input submenu" functionality-id="adds a Bokeh Image input node" intent-id="generate bokeh shape textures">
                    <span class="pointer-events-none ml-5">Bokeh Image</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Input menu item: Group Input" appearance-id="menu item labeled Group Input in the Input submenu" location-id="inside the Add > Input submenu" functionality-id="adds a Group Input node for node group inputs" intent-id="expose inputs for node groups">
                    <span class="pointer-events-none ml-5">Group Input</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Input menu item: Image" appearance-id="menu item labeled Image in the Input submenu" location-id="inside the Add > Input submenu" functionality-id="adds an Image input node" intent-id="use an image file as input">
                    <span class="pointer-events-none ml-5">Image</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Input menu item: Image Info" appearance-id="menu item labeled Image Info in the Input submenu" location-id="inside the Add > Input submenu" functionality-id="adds an Image Info node" intent-id="get metadata about the input image">
                    <span class="pointer-events-none ml-5">Image Info</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Input menu item: Image Coordinates" appearance-id="menu item labeled Image Coordinates in the Input submenu" location-id="inside the Add > Input submenu" functionality-id="adds an Image Coordinates node" intent-id="get UV coordinates for image mapping">
                    <span class="pointer-events-none ml-5">Image Coordinates</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Input menu item: Mask" appearance-id="menu item labeled Mask in the Input submenu" location-id="inside the Add > Input submenu" functionality-id="adds a Mask input node" intent-id="use a mask shape as input">
                    <span class="pointer-events-none ml-5">Mask</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Input menu item: Movie Clip" appearance-id="menu item labeled Movie Clip in the Input submenu" location-id="inside the Add > Input submenu" functionality-id="adds a Movie Clip input node" intent-id="use a video file or tracking clip as input">
                    <span class="pointer-events-none ml-5">Movie Clip</span>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Input menu item: Scene" appearance-id="menu item labeled Scene in the Input submenu" location-id="inside the Add > Input submenu" functionality-id="adds a Scene input node" intent-id="use a rendered scene as input">
                    <span class="pointer-events-none ml-5">Scene</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
                  </div>
                  
                </div>
              {/if}
            </div>
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group bg-[#4d4d4d] text-white" on:mouseenter={() => { isNodeContextMenuOutputOpen = true; updateOpenParam(); }} alt-id="Add menu item: Output" appearance-id="menu item labeled Output in the Add menu" location-id="inside the Add menu dropdown" functionality-id="opens the Output submenu for output nodes" intent-id="add an output node like Viewer or File Output">
              <span class="pointer-events-none ml-5">Output</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isNodeContextMenuOutputOpen}
                <!-- Output Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[20px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[220px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Output nested menu" appearance-id="Output submenu in the Add menu" location-id="inside the Add menu dropdown" functionality-id="opens the Output nodes submenu" intent-id="add output destination nodes">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Output menu item: Enable Output" appearance-id="menu item labeled Enable Output" location-id="inside the Add > Output submenu" functionality-id="adds or enables an output node" intent-id="enable a render output destination">
                    <span class="pointer-events-none ml-5">Enable Output</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Output menu item: Group Output" appearance-id="menu item labeled Group Output" location-id="inside the Add > Output submenu" functionality-id="adds a Group Output node" intent-id="expose outputs from a node group">
                    <span class="pointer-events-none ml-5">Group Output</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Output menu item: Viewer" appearance-id="menu item labeled Viewer" location-id="inside the Add > Output submenu" functionality-id="adds a Viewer node to preview compositor output" intent-id="preview the compositing result">
                    <span class="pointer-events-none ml-5">Viewer</span>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Output menu item: File Output" appearance-id="menu item labeled File Output" location-id="inside the Add > Output submenu" functionality-id="adds a File Output node" intent-id="save compositor results to files">
                    <span class="pointer-events-none ml-5">File Output</span>
                  </div>
                  
                </div>
              {/if}
            </div>

            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group bg-[#4d4d4d] text-white" on:mouseenter={() => { isNodeContextMenuColorOpen = true; updateOpenParam(); }} alt-id="Add menu item: Color" appearance-id="menu item labeled Color in the Add menu" location-id="inside the Add menu dropdown" functionality-id="opens the Color submenu for color nodes" intent-id="add a color manipulation node">
              <span class="pointer-events-none ml-5">Color</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isNodeContextMenuColorOpen}
                <!-- Color Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[40px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[220px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Color nested menu" appearance-id="Color submenu in the Add menu" location-id="inside the Add menu dropdown" functionality-id="opens the Color nodes submenu" intent-id="add color manipulation nodes">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group bg-[#4d4d4d] text-white" on:mouseenter={() => { isNodeContextMenuAdjustOpen = true; updateOpenParam(); }} alt-id="Color menu item: Adjust" appearance-id="menu item labeled Adjust in the Color submenu" location-id="inside the Add > Color submenu" functionality-id="opens the Adjust sub-submenu" intent-id="access color adjustment nodes">
                    <span class="pointer-events-none ml-5">Adjust</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
                    
                    {#if isNodeContextMenuAdjustOpen}
                      <!-- Adjust Nested Menu -->
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[104] w-[240px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Adjust nested menu" appearance-id="Adjust submenu item in the Add menu" location-id="inside the Add > Color submenu" functionality-id="opens the Adjust submenu for color adjustment nodes" intent-id="add color correction and adjustment nodes">
                        
                        <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Adjust menu item: Brightness/Contrast" appearance-id="menu item labeled Brightness/Contrast" location-id="inside the Adjust submenu" functionality-id="adds a Brightness/Contrast node to the compositor" intent-id="adjust image brightness and contrast">
                          <span class="pointer-events-none ml-5">Brightness/Contrast</span>
                        </div>
                        <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Adjust menu item: Color Balance" appearance-id="menu item labeled Color Balance" location-id="inside the Adjust submenu" functionality-id="adds a Color Balance node" intent-id="adjust color balance using lift, gamma, gain">
                          <span class="pointer-events-none ml-5">Color Balance</span>
                        </div>
                        <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Adjust menu item: Color Correction" appearance-id="menu item labeled Color Correction" location-id="inside the Adjust submenu" functionality-id="adds a Color Correction node" intent-id="apply master/shadows/midtones/highlights corrections">
                          <span class="pointer-events-none ml-5">Color Correction</span>
                        </div>
                        <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Adjust menu item: Exposure" appearance-id="menu item labeled Exposure" location-id="inside the Adjust submenu" functionality-id="adds an Exposure node" intent-id="adjust the exposure of the composited image">
                          <span class="pointer-events-none ml-5">Exposure</span>
                        </div>
                        <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Adjust menu item: Gamma" appearance-id="menu item labeled Gamma" location-id="inside the Adjust submenu" functionality-id="adds a Gamma node" intent-id="apply gamma correction">
                          <span class="pointer-events-none ml-5">Gamma</span>
                        </div>
                        <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Adjust menu item: Hue Correct" appearance-id="menu item labeled Hue Correct" location-id="inside the Adjust submenu" functionality-id="adds a Hue Correct node using a curve" intent-id="correct hue with a curve graph">
                          <span class="pointer-events-none ml-5">Hue Correct</span>
                        </div>
                        <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Adjust menu item: Hue/Saturation/Value" appearance-id="menu item labeled Hue/Saturation/Value" location-id="inside the Adjust submenu" functionality-id="adds a Hue/Saturation/Value node" intent-id="adjust HSV color properties">
                          <span class="pointer-events-none ml-5">Hue/Saturation/Value</span>
                        </div>
                        <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Adjust menu item: RGB Curves" appearance-id="menu item labeled RGB Curves" location-id="inside the Adjust submenu" functionality-id="adds an RGB Curves node" intent-id="apply per-channel curve color correction">
                          <span class="pointer-events-none ml-5">RGB Curves</span>
                        </div>
                        <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Adjust menu item: Tonemap" appearance-id="menu item labeled Tonemap" location-id="inside the Adjust submenu" functionality-id="adds a Tonemap node for HDR to LDR conversion" intent-id="apply tone mapping to the composited image">
                          <span class="pointer-events-none ml-5">Tonemap</span>
                        </div>
                        
                      </div>
                    {/if}
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Color menu item: Alpha Convert" appearance-id="menu item labeled Alpha Convert in the Color submenu" location-id="inside the Add > Color submenu" functionality-id="adds an Alpha Convert node" intent-id="convert straight to premultiplied alpha or vice versa">
                    <span class="pointer-events-none ml-5">Alpha Convert</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Color menu item: Alpha Over" appearance-id="menu item labeled Alpha Over in the Color submenu" location-id="inside the Add > Color submenu" functionality-id="adds an Alpha Over node for compositing with alpha" intent-id="composite one image over another using alpha">
                    <span class="pointer-events-none ml-5">Alpha Over</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Color menu item: Set Alpha" appearance-id="menu item labeled Set Alpha in the Color submenu" location-id="inside the Add > Color submenu" functionality-id="adds a Set Alpha node" intent-id="set the alpha channel of an image">
                    <span class="pointer-events-none ml-5">Set Alpha</span>
                  </div>

                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Color menu item: Combine Color" appearance-id="menu item labeled Combine Color in the Color submenu" location-id="inside the Add > Color submenu" functionality-id="adds a Combine Color node" intent-id="combine separate channels into a color">
                    <span class="pointer-events-none ml-5">Combine Color</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Color menu item: Separate Color" appearance-id="menu item labeled Separate Color in the Color submenu" location-id="inside the Add > Color submenu" functionality-id="adds a Separate Color node" intent-id="split a color into separate channels">
                    <span class="pointer-events-none ml-5">Separate Color</span>
                  </div>

                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Color menu item: Depth Combine" appearance-id="menu item labeled Depth Combine in the Color submenu" location-id="inside the Add > Color submenu" functionality-id="adds a Depth Combine node" intent-id="combine images based on depth data">
                    <span class="pointer-events-none ml-5">Depth Combine</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Color menu item: Mix Color" appearance-id="menu item labeled Mix Color in the Color submenu" location-id="inside the Add > Color submenu" functionality-id="adds a Mix Color node" intent-id="blend two images or colors">
                    <span class="pointer-events-none ml-5">Mix Color</span>
                  </div>
                  
                </div>
              {/if}
            </div>
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Add menu item: Creative" appearance-id="menu item labeled Creative in the Add menu" location-id="inside the Add menu dropdown" functionality-id="opens the Creative effects submenu" intent-id="add creative visual effects nodes">
              <span class="pointer-events-none ml-5">Creative</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
            </div>
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Add menu item: Filter" appearance-id="menu item labeled Filter in the Add menu" location-id="inside the Add menu dropdown" functionality-id="opens the Filter submenu for filter/effect nodes" intent-id="add a filter effect node">
              <span class="pointer-events-none ml-5">Filter</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
            </div>

            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group bg-[#4d4d4d] text-white" on:mouseenter={() => { isNodeContextMenuKeyingOpen = true; updateOpenParam(); }} alt-id="Add menu item: Keying" appearance-id="menu item labeled Keying in the Add menu" location-id="inside the Add menu dropdown" functionality-id="opens the Keying submenu for chroma key nodes" intent-id="add a keying node for green screen removal">
              <span class="pointer-events-none ml-5">Keying</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isNodeContextMenuKeyingOpen}
                <!-- Keying Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[148px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[220px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Keying nested menu" appearance-id="Keying submenu in the Add menu" location-id="inside the Add menu dropdown" functionality-id="opens the Keying nodes submenu" intent-id="add chroma key nodes for background removal">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Keying menu item: Channel Key" appearance-id="menu item labeled Channel Key" location-id="inside the Add > Keying submenu" functionality-id="adds a Channel Key node" intent-id="key out a specific color channel">
                    <span class="pointer-events-none ml-5">Channel Key</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Keying menu item: Chroma Key" appearance-id="menu item labeled Chroma Key" location-id="inside the Add > Keying submenu" functionality-id="adds a Chroma Key node" intent-id="remove a chroma background from footage">
                    <span class="pointer-events-none ml-5">Chroma Key</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Keying menu item: Color Key" appearance-id="menu item labeled Color Key" location-id="inside the Add > Keying submenu" functionality-id="adds a Color Key node" intent-id="key out a specific color">
                    <span class="pointer-events-none ml-5">Color Key</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Keying menu item: Color Spill" appearance-id="menu item labeled Color Spill" location-id="inside the Add > Keying submenu" functionality-id="adds a Color Spill node" intent-id="remove color spill from keyed footage">
                    <span class="pointer-events-none ml-5">Color Spill</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Keying menu item: Difference Key" appearance-id="menu item labeled Difference Key" location-id="inside the Add > Keying submenu" functionality-id="adds a Difference Key node" intent-id="key based on frame difference">
                    <span class="pointer-events-none ml-5">Difference Key</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Keying menu item: Distance Key" appearance-id="menu item labeled Distance Key" location-id="inside the Add > Keying submenu" functionality-id="adds a Distance Key node" intent-id="key based on color distance">
                    <span class="pointer-events-none ml-5">Distance Key</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Keying menu item: Keying" appearance-id="menu item labeled Keying" location-id="inside the Add > Keying submenu" functionality-id="adds a Keying node for advanced chroma keying" intent-id="use the advanced keying node">
                    <span class="pointer-events-none ml-5">Keying</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Keying menu item: Keying Screen" appearance-id="menu item labeled Keying Screen" location-id="inside the Add > Keying submenu" functionality-id="adds a Keying Screen node" intent-id="correct uneven green screen lighting">
                    <span class="pointer-events-none ml-5">Keying Screen</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Keying menu item: Luminance Key" appearance-id="menu item labeled Luminance Key" location-id="inside the Add > Keying submenu" functionality-id="adds a Luminance Key node" intent-id="key based on brightness">
                    <span class="pointer-events-none ml-5">Luminance Key</span>
                  </div>
                  
                </div>
              {/if}
            </div>
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Add menu item: Mask" appearance-id="menu item labeled Mask in the Add menu" location-id="inside the Add menu dropdown" functionality-id="opens the Mask submenu for masking nodes" intent-id="add a mask-related node">
              <span class="pointer-events-none ml-5">Mask</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
            </div>

            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Add menu item: Tracking" appearance-id="menu item labeled Tracking in the Add menu" location-id="inside the Add menu dropdown" functionality-id="opens the Tracking submenu for motion tracking nodes" intent-id="add a motion tracking node">
              <span class="pointer-events-none ml-5">Tracking</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
            </div>

            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Add menu item: Texture" appearance-id="menu item labeled Texture in the Add menu" location-id="inside the Add menu dropdown" functionality-id="opens the Texture submenu for texture-based nodes" intent-id="add a texture input node">
              <span class="pointer-events-none ml-5">Texture</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
            </div>
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group bg-[#4d4d4d] text-white" on:mouseenter={() => { isNodeContextMenuTransformOpen = true; updateOpenParam(); }} alt-id="Add menu item: Transform" appearance-id="menu item labeled Transform in the Add menu" location-id="inside the Add menu dropdown" functionality-id="opens the Transform submenu for spatial transform nodes" intent-id="add a transform node like Scale or Rotate">
              <span class="pointer-events-none ml-5">Transform</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isNodeContextMenuTransformOpen}
                <!-- Transform Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[230px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[220px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Transform nested menu" appearance-id="Transform submenu in the Add menu" location-id="inside the Add menu dropdown" functionality-id="opens the Transform nodes submenu" intent-id="add spatial transform nodes">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Rotate" appearance-id="menu item labeled Rotate" location-id="inside the Add > Transform submenu" functionality-id="adds a Rotate node" intent-id="rotate an image by a specified angle">
                    <span class="pointer-events-none ml-5">Rotate</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Scale" appearance-id="menu item labeled Scale" location-id="inside the Add > Transform submenu" functionality-id="adds a Scale node" intent-id="scale an image up or down">
                    <span class="pointer-events-none ml-5">Scale</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Transform" appearance-id="menu item labeled Transform" location-id="inside the Add > Transform submenu" functionality-id="adds a Transform node for combined scale, rotation, and translation" intent-id="apply multiple transforms in a single node">
                    <span class="pointer-events-none ml-5">Transform</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Translate" appearance-id="menu item labeled Translate" location-id="inside the Add > Transform submenu" functionality-id="adds a Translate node" intent-id="move an image by X and Y offset">
                    <span class="pointer-events-none ml-5">Translate</span>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Corner Pin" appearance-id="menu item labeled Corner Pin" location-id="inside the Add > Transform submenu" functionality-id="adds a Corner Pin node" intent-id="warp an image using four corner points">
                    <span class="pointer-events-none ml-5">Corner Pin</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Crop" appearance-id="menu item labeled Crop" location-id="inside the Add > Transform submenu" functionality-id="adds a Crop node" intent-id="crop an image to a region">
                    <span class="pointer-events-none ml-5">Crop</span>
                  </div>

                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Displace" appearance-id="menu item labeled Displace" location-id="inside the Add > Transform submenu" functionality-id="adds a Displace node" intent-id="offset pixels based on a displacement map">
                    <span class="pointer-events-none ml-5">Displace</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Flip" appearance-id="menu item labeled Flip" location-id="inside the Add > Transform submenu" functionality-id="adds a Flip node" intent-id="mirror an image horizontally or vertically">
                    <span class="pointer-events-none ml-5">Flip</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Map UV" appearance-id="menu item labeled Map UV" location-id="inside the Add > Transform submenu" functionality-id="adds a Map UV node" intent-id="project a texture onto 3D objects using UV data">
                    <span class="pointer-events-none ml-5">Map UV</span>
                  </div>

                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Lens Distortion" appearance-id="menu item labeled Lens Distortion" location-id="inside the Add > Transform submenu" functionality-id="adds a Lens Distortion node" intent-id="simulate lens barrel or pincushion distortion">
                    <span class="pointer-events-none ml-5">Lens Distortion</span>
                  </div>
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Transform menu item: Movie Distortion" appearance-id="menu item labeled Movie Distortion" location-id="inside the Add > Transform submenu" functionality-id="adds a Movie Distortion node" intent-id="apply or remove camera lens distortion from footage">
                    <span class="pointer-events-none ml-5">Movie Distortion</span>
                  </div>
                  
                </div>
              {/if}
            </div>
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Add menu item: Utilities" appearance-id="menu item labeled Utilities in the Add menu" location-id="inside the Add menu dropdown" functionality-id="opens the Utilities submenu for utility nodes" intent-id="add a utility node like Switch or Math">
              <span class="pointer-events-none ml-5">Utilities</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
            </div>

            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Add menu item: Camera & Lens Effects" appearance-id="menu item labeled Camera & Lens Effects in the Add menu" location-id="inside the Add menu dropdown" functionality-id="opens the Camera & Lens Effects submenu" intent-id="add cinematic lens effects like glare or bokeh">
              <span class="pointer-events-none ml-5">Camera & Lens Effects</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
            </div>

            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Add menu item: Group" appearance-id="menu item labeled Group in the Add menu" location-id="inside the Add menu dropdown" functionality-id="opens the Group submenu for node groups" intent-id="add or manage node groups">
              <span class="pointer-events-none ml-5">Group</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
            </div>
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Add menu item: Layout" appearance-id="menu item labeled Layout in the Add menu" location-id="inside the Add menu dropdown" functionality-id="opens the Layout submenu for layout nodes like Frame" intent-id="add layout nodes to organize the node graph">
              <span class="pointer-events-none ml-5">Layout</span>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
            </div>

          </div>
        {/if}
      </div>

      <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Context menu item: Paste" appearance-id="menu item labeled Paste in the node context menu" location-id="inside the Node context menu" functionality-id="pastes previously copied nodes at this location" intent-id="paste nodes from the clipboard">
        <div class="flex items-center gap-2 pointer-events-none">
          <i class="fa-solid fa-paste text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
          <span><u class="underline-offset-2 decoration-1">P</u>aste</span>
        </div>
        <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ V</span>
      </div>

      <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

      <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Context menu item: Find..." appearance-id="menu item labeled Find... in the node context menu" location-id="inside the Node context menu" functionality-id="opens a search to find nodes by name" intent-id="search for a specific node in the graph">
        <div class="flex items-center gap-2 pointer-events-none">
          <i class="fa-solid fa-magnifying-glass text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
          <span><u class="underline-offset-2 decoration-1">F</u>ind...</span>
        </div>
        <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ F</span>
      </div>

      <div class="h-[1px] bg-[#333] my-1 mx-1"></div>

      <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Context menu item: Cut Links" appearance-id="menu item labeled Cut Links in the node context menu" location-id="inside the Node context menu" functionality-id="cuts all links connected to the selected node" intent-id="disconnect all wires from this node">
        <div class="flex items-center gap-2 pointer-events-none">
          <div class="w-4 text-center"></div>
          <span><u class="underline-offset-2 decoration-1">C</u>ut Links</span>
        </div>
        <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ drag-Right Mouse</span>
      </div>

      <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Context menu item: Mute Links" appearance-id="menu item labeled Mute Links in the node context menu" location-id="inside the Node context menu" functionality-id="mutes all links connected to the selected node" intent-id="temporarily bypass all connections to this node">
        <div class="flex items-center gap-2 pointer-events-none">
          <div class="w-4 text-center"></div>
          <span><u class="underline-offset-2 decoration-1">M</u>ute Links</span>
        </div>
        <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌥ ⌘ drag-Right Mouse</span>
      </div>
      
    </div>
  {/if}
</div>