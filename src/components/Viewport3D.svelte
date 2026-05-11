<script>
  import { onMount } from 'svelte';
  import EditorSelector from './EditorSelector.svelte';
  export let currentEditor = 'viewport_3d';
  export let isMainViewport = false;
  export let windowId = '';
  let isLeftToolbarCollapsed = false;
  let isLeftToolbarExpanded = false;
  let isInteractionModeDropdownOpen = false;
  let interactionMode = 'object';
  let activeSculptTool = 'Brush';
  let activeTooltip = '';
  let isObjectContextMenuOpen = false;
  let isObjectContextMenuConvertToOpen = false;
  let isObjectContextMenuSetOriginOpen = false;
  let isObjectContextMenuMirrorOpen = false;
  let isObjectContextMenuSnapOpen = false;
  let isObjectContextMenuParentOpen = false;
  let isObjectContextMenuMoveToCollectionOpen = false;
  let isObjectContextMenuMoveToCollectionCommonOpen = false;
  let isViewportOptionsDropdownOpen = false;
  let isViewportOptionsViewOpen = false;
  let isViewportOptionsSelectOpen = false;
  let isViewportOptionsAddOpen = false;
  let isViewportOptionsAddMeshOpen = false;
  let isViewportOptionsAddCurveOpen = false;
  let isViewportOptionsAddSurfaceOpen = false;
  let isViewportOptionsAddMetaballOpen = false;
  let isViewportOptionsAddVolumeOpen = false;
  let isViewportOptionsAddLightProbeOpen = false;
  let isViewportOptionsAddForceFieldOpen = false;
  let isViewportOptionsObjectOpen = false;
  let isViewportOptionsObjectTransformOpen = false;
  let isViewportOptionsObjectSetOriginOpen = false;
  let isViewportOptionsObjectModifiersOpen = false;
  let isViewportOptionsObjectModifiersAddOpen = false;
  let isViewportOptionsObjectAnimationOpen = false;
  let contextMenuX = 200;
  let contextMenuY = 150;

  onMount(() => {
    if (typeof window !== 'undefined' && windowId) {
      const urlParams = new URLSearchParams(window.location.search);
      const val = urlParams.get(windowId) || '';
      if (val.includes('collapsed-left-toolbar')) {
        isLeftToolbarCollapsed = true;
      }
      if (val.includes('expanded-left-toolbar')) {
        isLeftToolbarExpanded = true;
      }
      
      const openParam = urlParams.get('open') || '';
      if (openParam.includes(`${windowId}-interaction-mode-dropdown`)) {
        isInteractionModeDropdownOpen = true;
      }
      
      if (openParam.includes(`${windowId}-object-context-menu`)) {
        isObjectContextMenuOpen = true;
      }
      
      if (openParam.includes(`${windowId}-object-context-menu-convert-to`)) {
        isObjectContextMenuConvertToOpen = true;
      }
      
      if (openParam.includes(`${windowId}-object-context-menu-set-origin`)) {
        isObjectContextMenuSetOriginOpen = true;
      }
      
      if (openParam.includes(`${windowId}-object-context-menu-mirror`)) {
        isObjectContextMenuMirrorOpen = true;
      }
      
      if (openParam.includes(`${windowId}-object-context-menu-snap`)) {
        isObjectContextMenuSnapOpen = true;
      }
      
      if (openParam.includes(`${windowId}-object-context-menu-parent`)) {
        isObjectContextMenuParentOpen = true;
      }
      
      if (openParam.includes(`${windowId}-object-context-menu-move-to-collection`)) {
        isObjectContextMenuMoveToCollectionOpen = true;
      }
      
      if (openParam.includes(`${windowId}-object-context-menu-move-to-collection-common`)) {
        isObjectContextMenuMoveToCollectionCommonOpen = true;
      }
      
      if (openParam.includes(`${windowId}-viewport-options-dropdown`)) {
        isViewportOptionsDropdownOpen = true;
      }
      
      if (openParam.includes(`${windowId}-viewport-options-view`)) {
        isViewportOptionsViewOpen = true;
      }
      
      if (openParam.includes(`${windowId}-viewport-options-select`)) {
        isViewportOptionsSelectOpen = true;
      }
      
      if (openParam.includes(`${windowId}-viewport-options-add`)) {
        isViewportOptionsAddOpen = true;
      }
      
      if (openParam.includes(`${windowId}-viewport-options-add-mesh`)) {
        isViewportOptionsAddMeshOpen = true;
      }
      
      if (openParam.includes(`${windowId}-viewport-options-add-curve`)) {
        isViewportOptionsAddCurveOpen = true;
      }
      
      if (openParam.includes(`${windowId}-viewport-options-add-surface`)) {
        isViewportOptionsAddSurfaceOpen = true;
      }
      
      if (openParam.includes(`${windowId}-viewport-options-add-metaball`)) {
        isViewportOptionsAddMetaballOpen = true;
      }
      
      if (openParam.includes(`${windowId}-viewport-options-add-volume`)) {
        isViewportOptionsAddVolumeOpen = true;
      }
      
      if (openParam.includes(`${windowId}-viewport-options-add-lightprobe`)) {
        isViewportOptionsAddLightProbeOpen = true;
      }
      
      if (openParam.includes(`${windowId}-viewport-options-add-forcefield`)) {
        isViewportOptionsAddForceFieldOpen = true;
      }
      
      if (openParam.includes(`${windowId}-viewport-options-object`)) {
        isViewportOptionsObjectOpen = true;
      }
      
      if (openParam.includes(`${windowId}-viewport-options-object-transform`)) {
        isViewportOptionsObjectTransformOpen = true;
      }
      
      if (openParam.includes(`${windowId}-viewport-options-object-set-origin`)) {
        isViewportOptionsObjectSetOriginOpen = true;
      }
      
      if (openParam.includes(`${windowId}-viewport-options-object-modifiers`)) {
        isViewportOptionsObjectModifiersOpen = true;
      }
      
      if (openParam.includes(`${windowId}-viewport-options-object-modifiers-add`)) {
        isViewportOptionsObjectModifiersAddOpen = true;
      }
      
      if (openParam.includes(`${windowId}-viewport-options-object-animation`)) {
        isViewportOptionsObjectAnimationOpen = true;
      }
      
      // check if any sculpt tool tooltip is in the open params
      const openStates = openParam ? openParam.split(',').filter(Boolean) : [];
      const tooltipPrefix = `${windowId}-sculpt-tool-`;
      for (const state of openStates) {
        if (state.startsWith(tooltipPrefix) && state.endsWith('-tooltip')) {
          const toolSlug = state.substring(tooltipPrefix.length, state.length - '-tooltip'.length);
          // Try to restore the original name (spaces to hyphens originally)
          // Since we might not know exactly, we just store the slug and we'll match it below
          activeTooltip = toolSlug;
          break;
        }
      }
    }
  });

  function getTooltipSlug(toolName) {
    return `${windowId}-sculpt-tool-${toolName.toLowerCase().replace(/ /g, '-')}-tooltip`;
  }

  function updateOpenParam() {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      let openParam = url.searchParams.get('open') || '';
      let openStates = openParam ? openParam.split(',').filter(Boolean) : [];
      
      const interactionSlug = `${windowId}-interaction-mode-dropdown`;
      
      if (isInteractionModeDropdownOpen) {
        if (!openStates.includes(interactionSlug)) openStates.push(interactionSlug);
      } else {
        openStates = openStates.filter(s => s !== interactionSlug);
      }
      
      const contextMenuSlug = `${windowId}-object-context-menu`;
      if (isObjectContextMenuOpen) {
        if (!openStates.includes(contextMenuSlug)) openStates.push(contextMenuSlug);
      } else {
        openStates = openStates.filter(s => s !== contextMenuSlug);
      }
      
      const convertToMenuSlug = `${windowId}-object-context-menu-convert-to`;
      if (isObjectContextMenuConvertToOpen) {
        if (!openStates.includes(convertToMenuSlug)) openStates.push(convertToMenuSlug);
      } else {
        openStates = openStates.filter(s => s !== convertToMenuSlug);
      }
      
      const setOriginMenuSlug = `${windowId}-object-context-menu-set-origin`;
      if (isObjectContextMenuSetOriginOpen) {
        if (!openStates.includes(setOriginMenuSlug)) openStates.push(setOriginMenuSlug);
      } else {
        openStates = openStates.filter(s => s !== setOriginMenuSlug);
      }
      
      const mirrorMenuSlug = `${windowId}-object-context-menu-mirror`;
      if (isObjectContextMenuMirrorOpen) {
        if (!openStates.includes(mirrorMenuSlug)) openStates.push(mirrorMenuSlug);
      } else {
        openStates = openStates.filter(s => s !== mirrorMenuSlug);
      }
      
      const snapMenuSlug = `${windowId}-object-context-menu-snap`;
      if (isObjectContextMenuSnapOpen) {
        if (!openStates.includes(snapMenuSlug)) openStates.push(snapMenuSlug);
      } else {
        openStates = openStates.filter(s => s !== snapMenuSlug);
      }
      
      const parentMenuSlug = `${windowId}-object-context-menu-parent`;
      if (isObjectContextMenuParentOpen) {
        if (!openStates.includes(parentMenuSlug)) openStates.push(parentMenuSlug);
      } else {
        openStates = openStates.filter(s => s !== parentMenuSlug);
      }
      
      const moveToCollectionMenuSlug = `${windowId}-object-context-menu-move-to-collection`;
      if (isObjectContextMenuMoveToCollectionOpen) {
        if (!openStates.includes(moveToCollectionMenuSlug)) openStates.push(moveToCollectionMenuSlug);
      } else {
        openStates = openStates.filter(s => s !== moveToCollectionMenuSlug);
      }
      
      const moveToCollectionCommonMenuSlug = `${windowId}-object-context-menu-move-to-collection-common`;
      if (isObjectContextMenuMoveToCollectionCommonOpen) {
        if (!openStates.includes(moveToCollectionCommonMenuSlug)) openStates.push(moveToCollectionCommonMenuSlug);
      } else {
        openStates = openStates.filter(s => s !== moveToCollectionCommonMenuSlug);
      }
      
      const viewportOptionsSlug = `${windowId}-viewport-options-dropdown`;
      if (isViewportOptionsDropdownOpen) {
        if (!openStates.includes(viewportOptionsSlug)) openStates.push(viewportOptionsSlug);
      } else {
        openStates = openStates.filter(s => s !== viewportOptionsSlug);
      }
      
      const viewportOptionsViewSlug = `${windowId}-viewport-options-view`;
      if (isViewportOptionsViewOpen) {
        if (!openStates.includes(viewportOptionsViewSlug)) openStates.push(viewportOptionsViewSlug);
      } else {
        openStates = openStates.filter(s => s !== viewportOptionsViewSlug);
      }
      
      const viewportOptionsSelectSlug = `${windowId}-viewport-options-select`;
      if (isViewportOptionsSelectOpen) {
        if (!openStates.includes(viewportOptionsSelectSlug)) openStates.push(viewportOptionsSelectSlug);
      } else {
        openStates = openStates.filter(s => s !== viewportOptionsSelectSlug);
      }
      
      const viewportOptionsAddSlug = `${windowId}-viewport-options-add`;
      if (isViewportOptionsAddOpen) {
        if (!openStates.includes(viewportOptionsAddSlug)) openStates.push(viewportOptionsAddSlug);
      } else {
        openStates = openStates.filter(s => s !== viewportOptionsAddSlug);
      }
      
      const viewportOptionsAddMeshSlug = `${windowId}-viewport-options-add-mesh`;
      if (isViewportOptionsAddMeshOpen) {
        if (!openStates.includes(viewportOptionsAddMeshSlug)) openStates.push(viewportOptionsAddMeshSlug);
      } else {
        openStates = openStates.filter(s => s !== viewportOptionsAddMeshSlug);
      }
      
      const viewportOptionsAddCurveSlug = `${windowId}-viewport-options-add-curve`;
      if (isViewportOptionsAddCurveOpen) {
        if (!openStates.includes(viewportOptionsAddCurveSlug)) openStates.push(viewportOptionsAddCurveSlug);
      } else {
        openStates = openStates.filter(s => s !== viewportOptionsAddCurveSlug);
      }
      
      const viewportOptionsAddSurfaceSlug = `${windowId}-viewport-options-add-surface`;
      if (isViewportOptionsAddSurfaceOpen) {
        if (!openStates.includes(viewportOptionsAddSurfaceSlug)) openStates.push(viewportOptionsAddSurfaceSlug);
      } else {
        openStates = openStates.filter(s => s !== viewportOptionsAddSurfaceSlug);
      }
      
      const viewportOptionsAddMetaballSlug = `${windowId}-viewport-options-add-metaball`;
      if (isViewportOptionsAddMetaballOpen) {
        if (!openStates.includes(viewportOptionsAddMetaballSlug)) openStates.push(viewportOptionsAddMetaballSlug);
      } else {
        openStates = openStates.filter(s => s !== viewportOptionsAddMetaballSlug);
      }
      
      const viewportOptionsAddVolumeSlug = `${windowId}-viewport-options-add-volume`;
      if (isViewportOptionsAddVolumeOpen) {
        if (!openStates.includes(viewportOptionsAddVolumeSlug)) openStates.push(viewportOptionsAddVolumeSlug);
      } else {
        openStates = openStates.filter(s => s !== viewportOptionsAddVolumeSlug);
      }
      
      const viewportOptionsAddLightProbeSlug = `${windowId}-viewport-options-add-lightprobe`;
      if (isViewportOptionsAddLightProbeOpen) {
        if (!openStates.includes(viewportOptionsAddLightProbeSlug)) openStates.push(viewportOptionsAddLightProbeSlug);
      } else {
        openStates = openStates.filter(s => s !== viewportOptionsAddLightProbeSlug);
      }
      
      const viewportOptionsAddForceFieldSlug = `${windowId}-viewport-options-add-forcefield`;
      if (isViewportOptionsAddForceFieldOpen) {
        if (!openStates.includes(viewportOptionsAddForceFieldSlug)) openStates.push(viewportOptionsAddForceFieldSlug);
      } else {
        openStates = openStates.filter(s => s !== viewportOptionsAddForceFieldSlug);
      }
      
      const viewportOptionsObjectSlug = `${windowId}-viewport-options-object`;
      if (isViewportOptionsObjectOpen) {
        if (!openStates.includes(viewportOptionsObjectSlug)) openStates.push(viewportOptionsObjectSlug);
      } else {
        openStates = openStates.filter(s => s !== viewportOptionsObjectSlug);
      }
      
      const viewportOptionsObjectTransformSlug = `${windowId}-viewport-options-object-transform`;
      if (isViewportOptionsObjectTransformOpen) {
        if (!openStates.includes(viewportOptionsObjectTransformSlug)) openStates.push(viewportOptionsObjectTransformSlug);
      } else {
        openStates = openStates.filter(s => s !== viewportOptionsObjectTransformSlug);
      }
      
      const viewportOptionsObjectSetOriginSlug = `${windowId}-viewport-options-object-set-origin`;
      if (isViewportOptionsObjectSetOriginOpen) {
        if (!openStates.includes(viewportOptionsObjectSetOriginSlug)) openStates.push(viewportOptionsObjectSetOriginSlug);
      } else {
        openStates = openStates.filter(s => s !== viewportOptionsObjectSetOriginSlug);
      }
      
      const viewportOptionsObjectModifiersSlug = `${windowId}-viewport-options-object-modifiers`;
      if (isViewportOptionsObjectModifiersOpen) {
        if (!openStates.includes(viewportOptionsObjectModifiersSlug)) openStates.push(viewportOptionsObjectModifiersSlug);
      } else {
        openStates = openStates.filter(s => s !== viewportOptionsObjectModifiersSlug);
      }
      
      const viewportOptionsObjectModifiersAddSlug = `${windowId}-viewport-options-object-modifiers-add`;
      if (isViewportOptionsObjectModifiersAddOpen) {
        if (!openStates.includes(viewportOptionsObjectModifiersAddSlug)) openStates.push(viewportOptionsObjectModifiersAddSlug);
      } else {
        openStates = openStates.filter(s => s !== viewportOptionsObjectModifiersAddSlug);
      }
      
      const viewportOptionsObjectAnimationSlug = `${windowId}-viewport-options-object-animation`;
      if (isViewportOptionsObjectAnimationOpen) {
        if (!openStates.includes(viewportOptionsObjectAnimationSlug)) openStates.push(viewportOptionsObjectAnimationSlug);
      } else {
        openStates = openStates.filter(s => s !== viewportOptionsObjectAnimationSlug);
      }
      
      // Remove any existing sculpt tool tooltips from the array
      openStates = openStates.filter(s => !(s.startsWith(`${windowId}-sculpt-tool-`) && s.endsWith('-tooltip')));
      
      // Add the active tooltip if there is one
      if (activeTooltip) {
        openStates.push(`${windowId}-sculpt-tool-${activeTooltip}-tooltip`);
      }
      
      if (openStates.length > 0) {
        url.searchParams.set('open', openStates.join(','));
      } else {
        url.searchParams.delete('open');
      }
      
      const search = url.searchParams.toString().replace(/%2C/g, ',');
      window.history.replaceState({}, '', `${url.pathname}?${search}`);
    }
  }

  function handleViewportContextMenu(e) {
    e.preventDefault();
    isObjectContextMenuOpen = true;
    isObjectContextMenuConvertToOpen = false;
    isObjectContextMenuSetOriginOpen = false;
    isObjectContextMenuMirrorOpen = false;
    isObjectContextMenuSnapOpen = false;
    isObjectContextMenuParentOpen = false;
    isObjectContextMenuMoveToCollectionOpen = false;
    isObjectContextMenuMoveToCollectionCommonOpen = false;
    
    // Set position based on click coordinates, with boundary checking
    if (e.clientX && e.clientY) {
      // Get the bounding rect of the viewport to calculate relative position
      const target = e.currentTarget;
      if (target) {
        const rect = target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        
        // Simple bounds check assuming menu is ~240px wide and ~400px tall
        if (x + 240 > rect.width) x = rect.width - 240;
        if (y + 400 > rect.height) y = rect.height - 400;
        
        contextMenuX = Math.max(0, x);
        contextMenuY = Math.max(0, y);
      }
    }
    
    updateOpenParam();
  }

  function toggleInteractionModeDropdown(e) {
    if (e) e.stopPropagation();
    isInteractionModeDropdownOpen = !isInteractionModeDropdownOpen;
    updateOpenParam();
  }

  function handleSculptToolClick(toolName) {
    activeSculptTool = toolName;
    const slug = toolName.toLowerCase().replace(/ /g, '-');
    if (activeTooltip === slug) {
      // Toggle off if already open
      activeTooltip = '';
    } else {
      activeTooltip = slug;
    }
    updateOpenParam();
  }

  $: {
    if (typeof window !== 'undefined' && windowId) {
      const url = new URL(window.location.href);
      let changed = false;
      const currentVal = url.searchParams.get(windowId) || currentEditor;
      let baseEditor = currentVal.split(',')[0];
      
      // If baseEditor is empty, it defaults to currentEditor
      if (!baseEditor) baseEditor = currentEditor;
      
      let newState = '';
      if (isLeftToolbarCollapsed) newState = 'collapsed-left-toolbar';
      else if (isLeftToolbarExpanded) newState = 'expanded-left-toolbar';
      
      let newVal = baseEditor;
      if (newState) newVal += ',' + newState;
      
      if (currentVal !== newVal) {
        url.searchParams.set(windowId, newVal);
        changed = true;
      }
      
      if (changed) {
        const search = url.searchParams.toString().replace(/%2C/g, ',');
        window.history.replaceState({}, '', `${url.pathname}?${search}`);
      }
    }
  }
</script>

<div class="h-full flex flex-col bg-[#282828] relative" alt-id="3D Viewport editor panel" appearance-id="dark 3D viewport panel with header, toolbar, viewport area, and navigation controls (in {windowId})" location-id="one of the six editor panels in the main workspace (in {windowId})" functionality-id="displays the 3D scene and provides tools for 3D editing (in {windowId})" intent-id="work in 3D space to create and modify objects (in {windowId})">
  <!-- Header -->
  <div class="h-8 bg-[#282828] border-b border-[#1f1f1f] flex items-center px-2 justify-between text-[11px]" alt-id="3D Viewport header" appearance-id="32px dark horizontal bar at the top of the 3D viewport (in {windowId})" location-id="top of the 3D Viewport editor panel (in {windowId})" functionality-id="contains mode selector, viewport menu, and display options (in {windowId})" intent-id="control how the 3D viewport displays and operates (in {windowId})">
    <!-- Left side -->
    <div class="flex items-center gap-2">
      <EditorSelector bind:editor={currentEditor} windowId={windowId} />
      <div class="relative">
        <div class="flex items-center gap-1 px-1.5 py-[2px] {isInteractionModeDropdownOpen ? 'bg-[#4772b3] text-white' : 'bg-[#4772b3] text-white hover:bg-[#5885c7]'} border border-[#3c3c3c] rounded cursor-pointer" on:click={toggleInteractionModeDropdown} alt-id="Interaction mode selector: {interactionMode}, second element in the 3D Viewport header" appearance-id="blue button showing the current interaction mode with a dropdown chevron (in {windowId})" location-id="second element from the left in the 3D Viewport header, after the editor selector (in {windowId})" functionality-id="opens the interaction mode dropdown to change the editing mode (in {windowId})" intent-id="switch between Object Mode, Edit Mode, Sculpt Mode, and other modes (in {windowId})">
          <i class="fa-solid {interactionMode === 'object' ? 'fa-vector-square' : interactionMode === 'edit' ? 'fa-draw-polygon' : interactionMode === 'sculpt' ? 'fa-paintbrush' : interactionMode === 'vertex_paint' ? 'fa-paint-roller' : interactionMode === 'weight_paint' ? 'fa-dumbbell' : 'fa-chess-board'} text-[10px] text-white pointer-events-none"></i>
          <span class="text-white px-0.5 pointer-events-none">{interactionMode === 'object' ? 'Object Mode' : interactionMode === 'edit' ? 'Edit Mode' : interactionMode === 'sculpt' ? 'Sculpt Mode' : interactionMode === 'vertex_paint' ? 'Vertex Paint' : interactionMode === 'weight_paint' ? 'Weight Paint' : 'Texture Paint'}</span>
          <i class="fa-solid fa-chevron-down text-[8px] text-[#ccc] pointer-events-none"></i>
      </div>

        {#if isInteractionModeDropdownOpen}
          <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => { isInteractionModeDropdownOpen = false; updateOpenParam(); }}></div>
          <div class="absolute left-0 top-[24px] bg-[#1a1a1a] border border-[#2a2a2a] rounded shadow-[0_4px_12px_rgba(0,0,0,0.8)] z-50 py-1 w-[160px]" alt-id="Interaction mode dropdown menu" appearance-id="dark floating dropdown listing available interaction modes (in {windowId})" location-id="below the interaction mode selector button in the 3D Viewport header (in {windowId})" functionality-id="lists all available interaction modes for the 3D viewport (in {windowId})" intent-id="select the desired editing or painting mode (in {windowId})">
            <div class="flex items-center gap-2 px-3 py-[3px] {interactionMode === 'object' ? 'bg-[#4772b3] text-white' : 'hover:bg-[#4772b3] hover:text-white text-[#ccc]'} cursor-pointer" alt-id="Interaction Mode: Object Mode" appearance-id="menu row with a cube icon and the text Object Mode (in {windowId})" location-id="first item in the interaction mode dropdown (in {windowId})" functionality-id="switches the 3D viewport to Object Mode for selecting and transforming objects (in {windowId})" intent-id="work with objects as whole units for selection and transformation (in {windowId})" on:click={() => { interactionMode = 'object'; isInteractionModeDropdownOpen = false; updateOpenParam(); }}>
              <i class="fa-solid fa-vector-square text-[11px] pointer-events-none"></i>
              <span class="text-[13px] pointer-events-none"><u>O</u>bject Mode</span>
            </div>
            <div class="flex items-center gap-2 px-3 py-[3px] {interactionMode === 'edit' ? 'bg-[#4772b3] text-white' : 'hover:bg-[#4772b3] hover:text-white text-[#ccc]'} cursor-pointer" alt-id="Interaction Mode: Edit Mode" appearance-id="menu row with an edit icon and the text Edit Mode (in {windowId})" location-id="second item in the interaction mode dropdown (in {windowId})" functionality-id="switches the 3D viewport to Edit Mode for vertex, edge, and face editing (in {windowId})" intent-id="modify the geometry of the selected object at the mesh level (in {windowId})" on:click={() => { interactionMode = 'edit'; isInteractionModeDropdownOpen = false; updateOpenParam(); }}>
              <i class="fa-solid fa-draw-polygon text-[11px] pointer-events-none"></i>
              <span class="text-[13px] pointer-events-none"><u>E</u>dit Mode</span>
            </div>
            <div class="flex items-center gap-2 px-3 py-[3px] {interactionMode === 'sculpt' ? 'bg-[#4772b3] text-white' : 'hover:bg-[#4772b3] hover:text-white text-[#ccc]'} cursor-pointer" alt-id="Interaction Mode: Sculpt Mode" appearance-id="menu row with a sculpt icon and the text Sculpt Mode (in {windowId})" location-id="third item in the interaction mode dropdown (in {windowId})" functionality-id="switches the 3D viewport to Sculpt Mode for organic mesh sculpting (in {windowId})" intent-id="sculpt and shape the mesh using brush-based tools (in {windowId})" on:click={() => { interactionMode = 'sculpt'; isInteractionModeDropdownOpen = false; updateOpenParam(); }}>
              <i class="fa-solid fa-paintbrush text-[11px] pointer-events-none"></i>
              <span class="text-[13px] pointer-events-none"><u>S</u>culpt Mode</span>
            </div>
            <div class="flex items-center gap-2 px-3 py-[3px] {interactionMode === 'vertex_paint' ? 'bg-[#4772b3] text-white' : 'hover:bg-[#4772b3] hover:text-white text-[#ccc]'} cursor-pointer" alt-id="Interaction Mode: Vertex Paint" appearance-id="menu row with a paint icon and the text Vertex Paint (in {windowId})" location-id="fourth item in the interaction mode dropdown (in {windowId})" functionality-id="switches the 3D viewport to Vertex Paint mode for painting vertex colors (in {windowId})" intent-id="paint colors directly onto the vertices of the mesh (in {windowId})" on:click={() => { interactionMode = 'vertex_paint'; isInteractionModeDropdownOpen = false; updateOpenParam(); }}>
              <i class="fa-solid fa-paint-roller text-[11px] pointer-events-none"></i>
              <span class="text-[13px] pointer-events-none"><u>V</u>ertex Paint</span>
            </div>
            <div class="flex items-center gap-2 px-3 py-[3px] {interactionMode === 'weight_paint' ? 'bg-[#4772b3] text-white' : 'hover:bg-[#4772b3] hover:text-white text-[#ccc]'} cursor-pointer" alt-id="Interaction Mode: Weight Paint" appearance-id="menu row with a weight icon and the text Weight Paint (in {windowId})" location-id="fifth item in the interaction mode dropdown (in {windowId})" functionality-id="switches the 3D viewport to Weight Paint mode for painting vertex weights (in {windowId})" intent-id="paint influence weights for armature deformation (in {windowId})" on:click={() => { interactionMode = 'weight_paint'; isInteractionModeDropdownOpen = false; updateOpenParam(); }}>
              <i class="fa-solid fa-dumbbell text-[11px] pointer-events-none"></i>
              <span class="text-[13px] pointer-events-none"><u>W</u>eight Paint</span>
            </div>
            <div class="flex items-center gap-2 px-3 py-[3px] {interactionMode === 'texture_paint' ? 'bg-[#4772b3] text-white' : 'hover:bg-[#4772b3] hover:text-white text-[#ccc]'} cursor-pointer" alt-id="Interaction Mode: Texture Paint" appearance-id="menu row with a texture icon and the text Texture Paint (in {windowId})" location-id="sixth item in the interaction mode dropdown (in {windowId})" functionality-id="switches the 3D viewport to Texture Paint mode for painting on textures (in {windowId})" intent-id="paint directly onto the object's texture using 3D brushes (in {windowId})" on:click={() => { interactionMode = 'texture_paint'; isInteractionModeDropdownOpen = false; updateOpenParam(); }}>
              <i class="fa-solid fa-chess-board text-[11px] pointer-events-none"></i>
              <span class="text-[13px] pointer-events-none"><u>T</u>exture Paint</span>
            </div>
          </div>
        {/if}
      </div>
      <div class="relative">
        <div class="cursor-pointer hover:text-white {isViewportOptionsDropdownOpen ? 'text-white bg-[#444]' : 'text-[#a0a0a0]'} px-1 ml-1" alt-id="Viewport menu, third element in the 3D Viewport header" appearance-id="hamburger menu icon button in the 3D Viewport header (in {windowId})" location-id="third element from the left in the 3D Viewport header (in {windowId})" functionality-id="opens the Viewport options dropdown menu with View, Select, Add, and Object submenus (in {windowId})" intent-id="access viewport display options and scene manipulation commands (in {windowId})" on:click|stopPropagation={() => { isViewportOptionsDropdownOpen = !isViewportOptionsDropdownOpen; updateOpenParam(); }}>
          <i class="fa-solid fa-bars text-[12px] pointer-events-none"></i>
        </div>
        
        {#if isViewportOptionsDropdownOpen}
          <!-- Base Overlay -->
          <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => { 
            isViewportOptionsDropdownOpen = false;
            isViewportOptionsViewOpen = false;
            isViewportOptionsSelectOpen = false;
            isViewportOptionsAddOpen = false;
            isViewportOptionsAddMeshOpen = false;
            isViewportOptionsAddCurveOpen = false;
            isViewportOptionsAddSurfaceOpen = false;
            isViewportOptionsAddMetaballOpen = false;
            isViewportOptionsAddVolumeOpen = false;
            isViewportOptionsAddLightProbeOpen = false;
            isViewportOptionsAddForceFieldOpen = false;
            isViewportOptionsObjectOpen = false;
            isViewportOptionsObjectTransformOpen = false;
            isViewportOptionsObjectSetOriginOpen = false;
            isViewportOptionsObjectModifiersOpen = false;
            isViewportOptionsObjectModifiersAddOpen = false;
            isViewportOptionsObjectAnimationOpen = false;
            updateOpenParam();
          }}></div>
          
          <div class="absolute left-1 top-[24px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Viewport options nested menu" appearance-id="dark floating dropdown with View, Select, Add, and Object menu items (in {windowId})" location-id="below the viewport menu button in the 3D Viewport header (in {windowId})" functionality-id="provides top-level viewport operation categories (in {windowId})" intent-id="navigate to viewport display, selection, addition, or object operation options (in {windowId})">
            <div class="px-5 py-[3px] {isViewportOptionsViewOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group relative" alt-id="View" appearance-id="menu row labeled View with a right arrow (in {windowId})" location-id="first item in the Viewport options nested menu (in {windowId})" functionality-id="opens the View submenu for viewport display and navigation commands (in {windowId})" intent-id="access viewport display and navigation options (in {windowId})" on:click|stopPropagation={() => { isViewportOptionsViewOpen = !isViewportOptionsViewOpen; updateOpenParam(); }}>
              <span><span class="underline">V</span>iew</span>
              <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsViewOpen ? 'text-white' : 'text-[#888] group-hover:text-white'} pointer-events-none"></i>
              
              {#if isViewportOptionsViewOpen}
                <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[102] w-[260px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="View nested menu" appearance-id="dark floating submenu listing viewport View options (in {windowId})" location-id="to the right of the View item in the viewport options menu (in {windowId})" functionality-id="provides commands for controlling the viewport view and display (in {windowId})" intent-id="adjust how the viewport displays the scene (in {windowId})">
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/toolbar" alt-id="Toolbar" appearance-id="menu row labeled Toolbar with a T shortcut (in {windowId})" location-id="first item in the View nested menu (in {windowId})" functionality-id="toggles the visibility of the left toolbar in the 3D viewport (in {windowId})" intent-id="show or hide the tool sidebar for quick tool access (in {windowId})">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-square-check text-white text-[12px] group-hover/toolbar:text-white"></i>
                      <span><span class="underline">T</span>oolbar</span>
                    </div>
                    <span class="text-[#888] text-[11px] font-mono group-hover/toolbar:text-white">T</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/sidebar" alt-id="Sidebar" appearance-id="menu row labeled Sidebar with an N shortcut (in {windowId})" location-id="second item in the View nested menu (in {windowId})" functionality-id="toggles the visibility of the right properties sidebar in the 3D viewport (in {windowId})" intent-id="show or hide the properties panel for object details (in {windowId})">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-square-check text-white text-[12px] group-hover/sidebar:text-white"></i>
                      <span><span class="underline">S</span>idebar</span>
                    </div>
                    <span class="text-[#888] text-[11px] font-mono group-hover/sidebar:text-white">N</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ts" alt-id="Tool Settings" appearance-id="menu row labeled Tool Settings (in {windowId})" location-id="third item in the View nested menu (in {windowId})" functionality-id="toggles the visibility of the tool settings panel (in {windowId})" intent-id="show or hide the active tool configuration panel (in {windowId})">
                    <div class="w-[12px] h-[12px] border border-white rounded-[2px]"></div>
                    <span>Tool <span class="underline">S</span>ettings</span>
                  </div>
                  <div class="px-5 py-[3px] text-[#888] cursor-default flex items-center gap-[10px] group/as" alt-id="Asset Shelf" appearance-id="grayed-out menu row labeled Asset Shelf (in {windowId})" location-id="fourth item in the View nested menu, currently unavailable (in {windowId})" functionality-id="would toggle the asset shelf panel (currently disabled) (in {windowId})" intent-id="access the asset shelf when available for quick asset access (in {windowId})">
                    <div class="w-[12px] h-[12px] border border-[#888] rounded-[2px] opacity-50"></div>
                    <span>Asset Sh<span class="underline">e</span>lf</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/alo" alt-id="Adjust Last Operation" appearance-id="menu row labeled Adjust Last Operation with an F9 shortcut (in {windowId})" location-id="fifth item in the View nested menu (in {windowId})" functionality-id="opens the operator panel to adjust the last operation's parameters (in {windowId})" intent-id="fine-tune the settings of the most recent operation (in {windowId})">
                    <i class="fa-solid fa-square-check text-white text-[12px] group-hover/alo:text-white"></i>
                    <span><span class="underline">A</span>djust Last Operation</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/fs" alt-id="Frame Selected" appearance-id="menu row labeled Frame Selected with a numpad period shortcut (in {windowId})" location-id="in the View nested menu, below a separator (in {windowId})" functionality-id="centers the viewport view on the currently selected objects (in {windowId})" intent-id="quickly navigate to see the selected objects (in {windowId})">
                    <span><span class="underline">F</span>rame Selected</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/fs:text-white">Numpad .</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/fa" alt-id="Frame All" appearance-id="menu row labeled Frame All with a Home shortcut (in {windowId})" location-id="in the View nested menu, Frame All (in {windowId})" functionality-id="zooms and pans the viewport to show all objects in the scene (in {windowId})" intent-id="get a full overview of all scene objects (in {windowId})">
                    <span>Frame <span class="underline">A</span>ll</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/fa:text-white">Home</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/po" alt-id="Perspective/Orthographic" appearance-id="menu row labeled Perspective/Orthographic with a numpad 5 shortcut (in {windowId})" location-id="in the View nested menu, Perspective/Orthographic (in {windowId})" functionality-id="toggles between perspective and orthographic projection (in {windowId})" intent-id="switch the viewport projection type for different modeling needs (in {windowId})">
                    <span><span class="underline">P</span>erspective/Orthographic</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/po:text-white">Numpad 5</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/lv" alt-id="Local View" appearance-id="menu row labeled Local View with a numpad slash shortcut (in {windowId})" location-id="in the View nested menu, Local View (in {windowId})" functionality-id="toggles local view to isolate selected objects in the viewport (in {windowId})" intent-id="focus on selected objects by hiding everything else (in {windowId})">
                    <span><span class="underline">L</span>ocal View</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/lv:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/vn" alt-id="Viewer Node" appearance-id="menu row labeled Viewer Node (in {windowId})" location-id="in the View nested menu, Viewer Node (in {windowId})" functionality-id="links the viewport to display the output of a Viewer node from Geometry Nodes (in {windowId})" intent-id="preview Geometry Nodes output directly in the 3D viewport (in {windowId})">
                    <i class="fa-solid fa-square-check text-white text-[12px] group-hover/vn:text-white"></i>
                    <span>Vi<span class="underline">e</span>wer Node</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/cameras" alt-id="Cameras" appearance-id="menu row labeled Cameras with a right arrow (in {windowId})" location-id="in the View nested menu, Cameras (in {windowId})" functionality-id="opens a submenu for switching between cameras in the scene (in {windowId})" intent-id="select which camera to view through in the scene (in {windowId})">
                    <span><span class="underline">C</span>ameras</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/cameras:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/vp" alt-id="Viewpoint" appearance-id="menu row labeled Viewpoint with a right arrow (in {windowId})" location-id="in the View nested menu, Viewpoint (in {windowId})" functionality-id="opens a submenu for quick viewpoint presets like top, front, side (in {windowId})" intent-id="switch to a standard orthographic viewpoint quickly (in {windowId})">
                    <span><span class="underline">V</span>iewpoint</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/vp:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/nav" alt-id="Navigation" appearance-id="menu row labeled Navigation with a right arrow (in {windowId})" location-id="in the View nested menu, Navigation (in {windowId})" functionality-id="opens a submenu for viewport navigation commands (in {windowId})" intent-id="access orbit, pan, zoom, and fly navigation modes (in {windowId})">
                    <span><span class="underline">N</span>avigation</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/nav:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/av" alt-id="Align View" appearance-id="menu row labeled Align View with a right arrow (in {windowId})" location-id="in the View nested menu, Align View (in {windowId})" functionality-id="opens a submenu for aligning the view to objects or axes (in {windowId})" intent-id="align the viewport to a specific direction or selected object (in {windowId})">
                    <span>Ali<span class="underline">g</span>n View</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/av:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/vr" alt-id="View Regions" appearance-id="menu row labeled View Regions with a right arrow (in {windowId})" location-id="in the View nested menu, View Regions (in {windowId})" functionality-id="opens a submenu for toggling viewport region overlays (in {windowId})" intent-id="toggle visibility of viewport overlays like render region (in {windowId})">
                    <span>View <span class="underline">R</span>egions</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/vr:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/pa" alt-id="Play Animation" appearance-id="menu row labeled Play Animation with a Space shortcut (in {windowId})" location-id="in the View nested menu, Play Animation (in {windowId})" functionality-id="plays or pauses the scene animation in the viewport (in {windowId})" intent-id="preview the animation directly in the 3D viewport (in {windowId})">
                    <span><span class="underline">P</span>lay Animation</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/pa:text-white">Space Bar</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/rvp" alt-id="Render Viewport Preview" appearance-id="menu row labeled Render Viewport Preview (in {windowId})" location-id="in the View nested menu, Render Viewport Preview (in {windowId})" functionality-id="renders a preview of the current viewport frame (in {windowId})" intent-id="get a quick render preview of the current view (in {windowId})">
                    <i class="fa-solid fa-film text-[#888] text-[12px] group-hover/rvp:text-white pointer-events-none"></i>
                    <span>Render Vie<span class="underline">w</span>port Preview</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/rp" alt-id="Render Playblast" appearance-id="menu row labeled Render Playblast (in {windowId})" location-id="in the View nested menu, Render Playblast (in {windowId})" functionality-id="renders a playblast of the animation for preview (in {windowId})" intent-id="create a quick preview animation render (in {windowId})">
                    <i class="fa-solid fa-compact-disc text-[#888] text-[12px] group-hover/rp:text-white pointer-events-none"></i>
                    <span>Render Play<span class="underline">b</span>last</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/rpk" alt-id="Render Playblast on Keyframes" appearance-id="menu row labeled Render Playblast on Keyframes (in {windowId})" location-id="in the View nested menu, Render Playblast on Keyframes (in {windowId})" functionality-id="renders a playblast only on keyframe frames (in {windowId})" intent-id="create a keyframe-only preview render (in {windowId})">
                    <i class="fa-solid fa-compact-disc text-[#888] text-[12px] group-hover/rpk:text-white pointer-events-none"></i>
                    <span>Render Playblast <span class="underline">o</span>n Keyframes</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/area" alt-id="Area" appearance-id="menu row labeled Area with a right arrow (in {windowId})" location-id="last item in the View nested menu (in {windowId})" functionality-id="opens a submenu for area management like splitting and joining (in {windowId})" intent-id="split, join, or toggle editor areas in the workspace (in {windowId})">
                    <span><span class="underline">A</span>rea</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/area:text-white"></i>
                  </div>
                </div>
              {/if}
            </div>
            <div class="px-5 py-[3px] {isViewportOptionsSelectOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group relative" alt-id="Select" appearance-id="menu row labeled Select with a right arrow (in {windowId})" location-id="second item in the Viewport options nested menu (in {windowId})" functionality-id="opens the Select submenu for selection operations (in {windowId})" intent-id="access commands for selecting objects in the viewport (in {windowId})" on:click|stopPropagation={() => { isViewportOptionsSelectOpen = !isViewportOptionsSelectOpen; updateOpenParam(); }}>
              <span><span class="underline">S</span>elect</span>
              <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsSelectOpen ? 'text-white' : 'text-[#888] group-hover:text-white'} pointer-events-none"></i>
              
              {#if isViewportOptionsSelectOpen}
                <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[102] w-[260px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Select nested menu" appearance-id="dark floating submenu listing selection commands (in {windowId})" location-id="to the right of the Select item in the viewport options menu (in {windowId})" functionality-id="provides commands for selecting, deselecting, and inverting selections (in {windowId})" intent-id="perform selection operations on scene objects (in {windowId})">
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/all" alt-id="All" appearance-id="menu row labeled All with an A shortcut (in {windowId})" location-id="first item in the Select nested menu (in {windowId})" functionality-id="selects all objects in the current context (in {windowId})" intent-id="select everything in the scene or mode (in {windowId})">
                    <span><span class="underline">A</span>ll</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/all:text-white">A</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/none" alt-id="None" appearance-id="menu row labeled None with an Alt+A shortcut (in {windowId})" location-id="second item in the Select nested menu (in {windowId})" functionality-id="deselects all objects (in {windowId})" intent-id="clear the selection (in {windowId})">
                    <span><span class="underline">N</span>one</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/none:text-white">⌥ A</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/invert" alt-id="Invert" appearance-id="menu row labeled Invert with a Ctrl+I shortcut (in {windowId})" location-id="third item in the Select nested menu (in {windowId})" functionality-id="inverts the current selection (in {windowId})" intent-id="select what was not selected and deselect what was (in {windowId})">
                    <span><span class="underline">I</span>nvert</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/invert:text-white">⌘ I</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/box" alt-id="Box Select" appearance-id="menu row labeled Box Select with a B shortcut (in {windowId})" location-id="in the Select nested menu, Box Select (in {windowId})" functionality-id="activates box selection mode for drawing a selection rectangle (in {windowId})" intent-id="select multiple objects with a rectangular drag (in {windowId})">
                    <span><span class="underline">B</span>ox Select</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/box:text-white">drag-Left Mouse</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/circle" alt-id="Circle Select" appearance-id="menu row labeled Circle Select with a C shortcut (in {windowId})" location-id="in the Select nested menu, Circle Select (in {windowId})" functionality-id="activates circle selection mode for painting a selection area (in {windowId})" intent-id="select objects within a circular brush stroke (in {windowId})">
                    <span><span class="underline">C</span>ircle Select</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/circle:text-white">C</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/lasso" alt-id="Lasso Select" appearance-id="menu row labeled Lasso Select with a Ctrl+Right Click shortcut (in {windowId})" location-id="in the Select nested menu, Lasso Select (in {windowId})" functionality-id="activates lasso selection for freehand selection drawing (in {windowId})" intent-id="draw an irregular selection boundary around objects (in {windowId})">
                    <span><span class="underline">L</span>asso Select</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/lasso:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/ac" alt-id="Select Active Camera" appearance-id="menu row labeled Select Active Camera (in {windowId})" location-id="in the Select nested menu, Select Active Camera (in {windowId})" functionality-id="selects the active camera object in the scene (in {windowId})" intent-id="quickly find and select the render camera (in {windowId})">
                    <span><span class="underline">S</span>elect Active Camera</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/mirror" alt-id="Select Mirror" appearance-id="menu row labeled Select Mirror with Shift+Ctrl+M shortcut (in {windowId})" location-id="in the Select nested menu, Select Mirror (in {windowId})" functionality-id="selects the mirrored counterpart of selected objects (in {windowId})" intent-id="select symmetrically opposite objects (in {windowId})">
                    <span>Select <span class="underline">M</span>irror</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/random" alt-id="Select Random" appearance-id="menu row labeled Select Random (in {windowId})" location-id="in the Select nested menu, Select Random (in {windowId})" functionality-id="randomly selects a subset of objects from the scene (in {windowId})" intent-id="create a random selection for varied effects (in {windowId})">
                    <span>Select <span class="underline">R</span>andom</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/moreless" alt-id="More/Less" appearance-id="menu row labeled More/Less with a right arrow (in {windowId})" location-id="in the Select nested menu, More/Less (in {windowId})" functionality-id="opens a submenu to grow or shrink the selection (in {windowId})" intent-id="expand or contract the current selection set (in {windowId})">
                    <span>M<span class="underline">o</span>re/Less</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/moreless:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/type" alt-id="Select All by Type" appearance-id="menu row labeled Select All by Type with a right arrow (in {windowId})" location-id="in the Select nested menu, Select All by Type (in {windowId})" functionality-id="opens a submenu to select all objects of a specific type (in {windowId})" intent-id="select all cameras, lights, meshes, or other object types (in {windowId})">
                    <span>Select All by <span class="underline">T</span>ype</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/type:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/grouped" alt-id="Select Grouped" appearance-id="menu row labeled Select Grouped with Shift+G shortcut (in {windowId})" location-id="in the Select nested menu, Select Grouped (in {windowId})" functionality-id="opens a submenu to select objects that share a property with the active one (in {windowId})" intent-id="select objects that share a common attribute (in {windowId})">
                    <span>Select <span class="underline">G</span>rouped</span>
                    <div class="flex items-center gap-2">
                      <span class="text-[#888] text-[11px] font-mono group-hover/grouped:text-white">⇧ G</span>
                      <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/grouped:text-white"></i>
                    </div>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/linked" alt-id="Select Linked" appearance-id="menu row labeled Select Linked with a right arrow (in {windowId})" location-id="in the Select nested menu, Select Linked (in {windowId})" functionality-id="opens a submenu to select linked objects (in {windowId})" intent-id="select objects that are linked to the selected object (in {windowId})">
                    <span>Select <span class="underline">L</span>inked</span>
                    <div class="flex items-center gap-2">
                      <span class="text-[#888] text-[11px] font-mono group-hover/linked:text-white">⇧ L</span>
                      <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/linked:text-white"></i>
                    </div>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/pattern" alt-id="Select Pattern..." appearance-id="menu row labeled Select Pattern... (in {windowId})" location-id="last item in the Select nested menu (in {windowId})" functionality-id="opens a dialog to select objects matching a name pattern (in {windowId})" intent-id="select multiple objects by searching their names (in {windowId})">
                    <span>Select <span class="underline">P</span>attern...</span>
                  </div>
                </div>
              {/if}
            </div>
            <div class="px-5 py-[3px] {isViewportOptionsAddOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group relative" alt-id="Add" appearance-id="menu row labeled Add with a right arrow (in {windowId})" location-id="third item in the Viewport options nested menu (in {windowId})" functionality-id="opens the Add submenu for adding new objects to the scene (in {windowId})" intent-id="insert a new object into the 3D scene (in {windowId})" on:click|stopPropagation={() => { isViewportOptionsAddOpen = !isViewportOptionsAddOpen; updateOpenParam(); }}>
              <span><span class="underline">A</span>dd</span>
              <div class="flex items-center gap-2">
                <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⇧ A</span>
                <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsAddOpen ? 'text-white' : 'text-[#888] group-hover:text-white'} pointer-events-none"></i>
              </div>
              
              {#if isViewportOptionsAddOpen}
                <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[102] w-[220px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Add nested menu" appearance-id="dark floating submenu listing all addable object categories (in {windowId})" location-id="to the right of the Add item in the viewport options menu (in {windowId})" functionality-id="lists all categories of objects that can be added to the scene (in {windowId})" intent-id="choose a type of object to add to the scene (in {windowId})">
                  <div class="px-5 py-[3px] {isViewportOptionsAddMeshOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/mesh relative" alt-id="Mesh" appearance-id="menu row labeled Mesh with a right arrow (in {windowId})" location-id="first item in the Add nested menu (in {windowId})" functionality-id="opens the Mesh submenu to add a mesh primitive (in {windowId})" intent-id="add a polygon mesh object to the scene (in {windowId})" on:click|stopPropagation={() => { isViewportOptionsAddMeshOpen = !isViewportOptionsAddMeshOpen; updateOpenParam(); }}>
                    <div class="flex items-center gap-[10px]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 {isViewportOptionsAddMeshOpen ? 'text-white' : 'group-hover/mesh:text-white'}">
                        <path d="M1 1 L11 1 L6 9.5 Z" />
                      </svg>
                      <span><span class="underline">M</span>esh</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsAddMeshOpen ? 'text-white' : 'text-[#888] group-hover/mesh:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsAddMeshOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Mesh nested menu" appearance-id="dark floating submenu listing mesh primitive types (in {windowId})" location-id="to the right of the Mesh item in the Add nested menu (in {windowId})" functionality-id="lists all mesh primitives that can be added (in {windowId})" intent-id="choose a specific mesh shape to add (in {windowId})">
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/plane" alt-id="Plane" appearance-id="menu row labeled Plane for Plane (in {windowId})" location-id="first item in the Mesh nested menu, Plane (in {windowId})" functionality-id="adds a flat square plane mesh to the scene for Plane (in {windowId})" intent-id="create a ground plane or flat surface for Plane (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/plane:text-white">
                            <rect x="2" y="2" width="8" height="8" />
                          </svg>
                          <span><span class="underline">P</span>lane</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/cube" alt-id="Cube" appearance-id="menu row labeled Cube for Cube (in {windowId})" location-id="second item in the Mesh nested menu, Cube (in {windowId})" functionality-id="adds a cube mesh to the scene for Cube (in {windowId})" intent-id="create a rectangular or box-shaped mesh for Cube (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/cube:text-white">
                            <path d="M2 4 L6 2 L10 4 L10 8 L6 10 L2 8 Z" />
                            <path d="M2 4 L6 6 L10 4" />
                            <path d="M6 6 L6 10" />
                          </svg>
                          <span><span class="underline">C</span>ube</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/circle" alt-id="Circle" appearance-id="menu row labeled Circle for Circle (in {windowId})" location-id="third item in the Mesh nested menu, Circle (in {windowId})" functionality-id="adds a circular ring mesh (circle outline) to the scene for Circle (in {windowId})" intent-id="create a circular polygon ring for Circle (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/circle:text-white">
                            <circle cx="6" cy="6" r="4.5" />
                          </svg>
                          <span>C<span class="underline">i</span>rcle</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/uvsphere" alt-id="UV Sphere" appearance-id="menu row labeled UV Sphere (in {windowId})" location-id="fourth item in the Mesh nested menu (in {windowId})" functionality-id="adds a UV-mapped sphere mesh to the scene (in {windowId})" intent-id="create a spherical mesh with UV-mapped topology (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/uvsphere:text-white">
                            <circle cx="6" cy="6" r="4.5" />
                            <path d="M6 1.5 L6 10.5 M2.5 4 L9.5 4 M2.5 8 L9.5 8 M4 2.5 L4 9.5 M8 2.5 L8 9.5" stroke-width="0.5" />
                          </svg>
                          <span><span class="underline">U</span>V Sphere</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/icosphere" alt-id="Ico Sphere" appearance-id="menu row labeled Ico Sphere (in {windowId})" location-id="fifth item in the Mesh nested menu (in {windowId})" functionality-id="adds an icosphere mesh with triangular faces to the scene (in {windowId})" intent-id="create a sphere with uniform triangular topology (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/icosphere:text-white">
                            <path d="M6 1 L11 4 L6 11 L1 4 Z" />
                            <path d="M6 1 L6 6 L11 4" />
                            <path d="M6 6 L6 11" />
                            <path d="M6 6 L1 4" />
                          </svg>
                          <span>I<span class="underline">c</span>o Sphere</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/cylinder" alt-id="Cylinder" appearance-id="menu row labeled Cylinder (in {windowId})" location-id="sixth item in the Mesh nested menu (in {windowId})" functionality-id="adds a cylinder mesh to the scene (in {windowId})" intent-id="create a cylindrical shape (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/cylinder:text-white">
                            <ellipse cx="6" cy="3" rx="3.5" ry="1.5" />
                            <path d="M2.5 3 L2.5 9 M9.5 3 L9.5 9" />
                            <path d="M2.5 9 A 3.5 1.5 0 0 0 9.5 9" />
                          </svg>
                          <span>C<span class="underline">y</span>linder</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/cone" alt-id="Cone" appearance-id="menu row labeled Cone (in {windowId})" location-id="seventh item in the Mesh nested menu (in {windowId})" functionality-id="adds a cone mesh to the scene (in {windowId})" intent-id="create a cone-shaped mesh (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/cone:text-white">
                            <path d="M6 2 L2 9 M6 2 L10 9" />
                            <path d="M2 9 A 4 1.5 0 0 0 10 9" />
                          </svg>
                          <span>C<span class="underline">o</span>ne</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/torus" alt-id="Torus" appearance-id="menu row labeled Torus (in {windowId})" location-id="eighth item in the Mesh nested menu (in {windowId})" functionality-id="adds a torus mesh to the scene (in {windowId})" intent-id="create a donut or ring-shaped mesh (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/torus:text-white">
                            <ellipse cx="6" cy="6" rx="4.5" ry="2" />
                            <ellipse cx="6" cy="6" rx="2.5" ry="0.8" />
                          </svg>
                          <span>T<span class="underline">o</span>rus</span>
                        </div>
                        
                        <div class="my-1 border-t border-[#333]"></div>
                        
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/grid" alt-id="Grid" appearance-id="menu row labeled Grid (in {windowId})" location-id="ninth item in the Mesh nested menu (in {windowId})" functionality-id="adds a grid mesh plane to the scene (in {windowId})" intent-id="create a subdivided flat plane mesh (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/grid:text-white">
                            <rect x="2" y="2" width="8" height="8" />
                            <line x1="5" y1="2" x2="5" y2="10" />
                            <line x1="7" y1="2" x2="7" y2="10" />
                            <line x1="2" y1="5" x2="10" y2="5" />
                            <line x1="2" y1="7" x2="10" y2="7" />
                          </svg>
                          <span><span class="underline">G</span>rid</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/monkey" alt-id="Monkey" appearance-id="menu row labeled Monkey with a monkey-face icon (in {windowId})" location-id="last item in the Mesh nested menu (in {windowId})" functionality-id="adds the Suzanne monkey head test mesh to the scene (in {windowId})" intent-id="add the iconic Blender mascot mesh for testing (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/monkey:text-white">
                            <path d="M4 3 Q 6 1 8 3 M2 5 Q 1 6 2 7 Q 3 8 4 7 M10 5 Q 11 6 10 7 Q 9 8 8 7 M4 7 Q 6 10 8 7 M3 4 L4 3 M9 4 L8 3 M5 5 L5 6 M7 5 L7 6 M5 8 L7 8" stroke-width="1" />
                          </svg>
                          <span>M<span class="underline">o</span>nkey</span>
                        </div>
                      </div>
                    {/if}
                  </div>
                  <div class="px-5 py-[3px] {isViewportOptionsAddCurveOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/curve relative" alt-id="Curve" appearance-id="menu row labeled Curve with a right arrow (in {windowId})" location-id="second item in the Add nested menu (in {windowId})" functionality-id="opens the Curve submenu to add a curve object (in {windowId})" intent-id="add a curve object for path or outline creation (in {windowId})" on:click|stopPropagation={() => { isViewportOptionsAddCurveOpen = !isViewportOptionsAddCurveOpen; updateOpenParam(); }}>
                    <div class="flex items-center gap-[10px]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 {isViewportOptionsAddCurveOpen ? 'text-white' : 'group-hover/curve:text-white'}">
                        <path d="M9 1 C5 1 3 5 3 9" />
                      </svg>
                      <span><span class="underline">C</span>urve</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsAddCurveOpen ? 'text-white' : 'text-[#888] group-hover/curve:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsAddCurveOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Curve nested menu" appearance-id="dark floating submenu listing curve types (in {windowId})" location-id="to the right of the Curve item in the Add nested menu (in {windowId})" functionality-id="lists curve types that can be added to the scene (in {windowId})" intent-id="choose a specific curve type to add (in {windowId})">
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/bezier" alt-id="Bézier" appearance-id="menu row labeled Bézier (in {windowId})" location-id="first item in the Curve nested menu (in {windowId})" functionality-id="adds a Bézier curve to the scene (in {windowId})" intent-id="create a smooth editable spline curve (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/bezier:text-white">
                            <path d="M 3 9 C 3 3, 9 3, 9 9" />
                            <circle cx="3" cy="9" r="1.5" fill="currentColor" stroke="none" />
                            <circle cx="9" cy="9" r="1.5" fill="currentColor" stroke="none" />
                            <path d="M 3 9 L 2 10 M 3 9 L 4 8 M 9 9 L 8 10 M 9 9 L 10 8" stroke-width="0.5" />
                          </svg>
                          <span><span class="underline">B</span>ézier</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/curvecircle" alt-id="Circle" appearance-id="menu row labeled Circle for Circle (in {windowId})" location-id="third item in the Mesh nested menu, Circle (in {windowId})" functionality-id="adds a circular ring mesh (circle outline) to the scene for Circle (in {windowId})" intent-id="create a circular polygon ring for Circle (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/curvecircle:text-white">
                            <circle cx="6" cy="6" r="4" />
                            <circle cx="6" cy="2" r="1.5" fill="currentColor" stroke="none" />
                            <circle cx="6" cy="10" r="1.5" fill="currentColor" stroke="none" />
                            <path d="M 5 2 L 7 2 M 5 10 L 7 10" stroke-width="0.5" />
                          </svg>
                          <span><span class="underline">C</span>ircle</span>
                        </div>
                        
                        <div class="my-1 border-t border-[#333]"></div>
                        
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/nurbscurve" alt-id="Nurbs Curve" appearance-id="menu row labeled Nurbs Curve for Nurbs Curve (in {windowId})" location-id="third item in the Curve nested menu, Nurbs Curve (in {windowId})" functionality-id="adds a NURBS curve to the scene for Nurbs Curve (in {windowId})" intent-id="create a NURBS-based smooth curve for Nurbs Curve (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/nurbscurve:text-white">
                            <path d="M 3 10 Q 6 3, 9 10" />
                            <path d="M 3 10 L 3 3 L 9 3 L 9 10" stroke-width="0.5" stroke-dasharray="1 1" />
                            <circle cx="3" cy="3" r="1" fill="currentColor" stroke="none" />
                            <circle cx="9" cy="3" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>N<span class="underline">u</span>rbs Curve</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/nurbscircle" alt-id="Nurbs Circle" appearance-id="menu row labeled Nurbs Circle for Nurbs Circle (in {windowId})" location-id="fourth item in the Curve nested menu, Nurbs Circle (in {windowId})" functionality-id="adds a NURBS circle curve to the scene for Nurbs Circle (in {windowId})" intent-id="create a circular NURBS curve for Nurbs Circle (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/nurbscircle:text-white">
                            <circle cx="6" cy="6" r="3" />
                            <rect x="2" y="2" width="8" height="8" stroke-width="0.5" stroke-dasharray="1 1" />
                            <circle cx="2" cy="2" r="1" fill="currentColor" stroke="none" />
                            <circle cx="10" cy="2" r="1" fill="currentColor" stroke="none" />
                            <circle cx="2" cy="10" r="1" fill="currentColor" stroke="none" />
                            <circle cx="10" cy="10" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Nurbs C<span class="underline">i</span>rcle</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/path" alt-id="Path" appearance-id="menu row labeled Path (in {windowId})" location-id="fifth item in the Curve nested menu (in {windowId})" functionality-id="adds a NURBS path curve to the scene (in {windowId})" intent-id="create a path for animation or extrusion (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/path:text-white">
                            <path d="M 2 10 L 9 3 M 9 3 L 6 3 M 9 3 L 9 6" />
                            <path d="M 2 10 L 4 8 L 6 6 L 8 4" stroke-width="0.5" stroke-dasharray="1 1" />
                            <circle cx="4" cy="8" r="1" fill="currentColor" stroke="none" />
                            <circle cx="6" cy="6" r="1" fill="currentColor" stroke="none" />
                            <circle cx="8" cy="4" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span><span class="underline">P</span>ath</span>
                        </div>
                        
                        <div class="my-1 border-t border-[#333]"></div>
                        
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/emptyhair" alt-id="Empty Hair" appearance-id="menu row labeled Empty Hair (in {windowId})" location-id="sixth item in the Curve nested menu (in {windowId})" functionality-id="adds an empty hair particle system to the scene (in {windowId})" intent-id="start creating hair or fur simulation (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/emptyhair:text-white">
                            <path d="M 3 10 Q 5 5, 2 2" />
                            <path d="M 6 10 Q 8 5, 5 2" />
                            <path d="M 9 10 Q 11 5, 8 2" />
                          </svg>
                          <span><span class="underline">E</span>mpty Hair</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/fur" alt-id="Fur" appearance-id="menu row labeled Fur (in {windowId})" location-id="seventh item in the Curve nested menu (in {windowId})" functionality-id="adds a fur particle system to the scene (in {windowId})" intent-id="create a fur effect on an object (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/fur:text-white">
                            <path d="M 3 10 Q 5 5, 2 2" />
                            <path d="M 6 10 Q 8 5, 5 2" />
                            <path d="M 9 10 Q 11 5, 8 2" />
                          </svg>
                          <span><span class="underline">F</span>ur</span>
                        </div>
                      </div>
                    {/if}
                  </div>
                  <div class="px-5 py-[3px] {isViewportOptionsAddSurfaceOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/surface relative" alt-id="Surface" appearance-id="menu row labeled Surface with a right arrow (in {windowId})" location-id="third item in the Add nested menu (in {windowId})" functionality-id="opens the Surface submenu to add a NURBS surface object (in {windowId})" intent-id="add a NURBS surface for smooth surface modeling (in {windowId})" on:click|stopPropagation={() => { isViewportOptionsAddSurfaceOpen = !isViewportOptionsAddSurfaceOpen; updateOpenParam(); }}>
                    <div class="flex items-center gap-[10px]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 {isViewportOptionsAddSurfaceOpen ? 'text-white' : 'group-hover/surface:text-white'}">
                        <path d="M2 1 L10 1 L9 11 L3 11 L1 6 Z" />
                      </svg>
                      <span><span class="underline">S</span>urface</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsAddSurfaceOpen ? 'text-white' : 'text-[#888] group-hover/surface:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsAddSurfaceOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Surface nested menu" appearance-id="dark floating submenu listing NURBS surface types (in {windowId})" location-id="to the right of the Surface item in the Add nested menu (in {windowId})" functionality-id="lists NURBS surface primitives that can be added (in {windowId})" intent-id="choose a specific NURBS surface shape to add (in {windowId})">
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/nurbscurvesurf" alt-id="Nurbs Curve" appearance-id="menu row labeled Nurbs Curve for Nurbs Curve (in {windowId})" location-id="third item in the Curve nested menu, Nurbs Curve (in {windowId})" functionality-id="adds a NURBS curve to the scene for Nurbs Curve (in {windowId})" intent-id="create a NURBS-based smooth curve for Nurbs Curve (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/nurbscurvesurf:text-white">
                            <path d="M 3 10 Q 6 3, 9 10" />
                            <path d="M 3 10 L 3 3 L 9 3 L 9 10" stroke-width="0.5" stroke-dasharray="1 1" />
                            <circle cx="3" cy="3" r="1" fill="currentColor" stroke="none" />
                            <circle cx="9" cy="3" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Nurbs C<span class="underline">u</span>rve</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/nurbscirclesurf" alt-id="Nurbs Circle" appearance-id="menu row labeled Nurbs Circle for Nurbs Circle (in {windowId})" location-id="fourth item in the Curve nested menu, Nurbs Circle (in {windowId})" functionality-id="adds a NURBS circle curve to the scene for Nurbs Circle (in {windowId})" intent-id="create a circular NURBS curve for Nurbs Circle (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/nurbscirclesurf:text-white">
                            <circle cx="6" cy="6" r="3" />
                            <rect x="2" y="2" width="8" height="8" stroke-width="0.5" stroke-dasharray="1 1" />
                            <circle cx="2" cy="2" r="1" fill="currentColor" stroke="none" />
                            <circle cx="10" cy="2" r="1" fill="currentColor" stroke="none" />
                            <circle cx="2" cy="10" r="1" fill="currentColor" stroke="none" />
                            <circle cx="10" cy="10" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Nurbs C<span class="underline">i</span>rcle</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/nurbssurface" alt-id="Nurbs Surface" appearance-id="menu row labeled Nurbs Surface (in {windowId})" location-id="third item in the Surface nested menu (in {windowId})" functionality-id="adds a flat NURBS surface patch to the scene (in {windowId})" intent-id="create a flat smooth surface (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/nurbssurface:text-white">
                            <path d="M 2 4 Q 6 1, 10 4 L 10 10 Q 6 7, 2 10 Z" stroke-linejoin="round" />
                            <circle cx="2" cy="4" r="1" fill="currentColor" stroke="none" />
                            <circle cx="10" cy="4" r="1" fill="currentColor" stroke="none" />
                            <circle cx="10" cy="10" r="1" fill="currentColor" stroke="none" />
                            <circle cx="2" cy="10" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Nurbs S<span class="underline">u</span>rface</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/nurbscylinder" alt-id="Nurbs Cylinder" appearance-id="menu row labeled Nurbs Cylinder (in {windowId})" location-id="fourth item in the Surface nested menu (in {windowId})" functionality-id="adds a NURBS cylinder surface to the scene (in {windowId})" intent-id="create a smooth cylindrical surface (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/nurbscylinder:text-white">
                            <ellipse cx="6" cy="3" rx="3.5" ry="1.5" />
                            <path d="M2.5 3 L2.5 9 M9.5 3 L9.5 9" />
                            <path d="M2.5 9 A 3.5 1.5 0 0 0 9.5 9" />
                            <rect x="1" y="1.5" width="10" height="9" stroke-width="0.5" stroke-dasharray="1 1" />
                            <circle cx="1" cy="1.5" r="1" fill="currentColor" stroke="none" />
                            <circle cx="11" cy="1.5" r="1" fill="currentColor" stroke="none" />
                            <circle cx="1" cy="10.5" r="1" fill="currentColor" stroke="none" />
                            <circle cx="11" cy="10.5" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Nurbs Cy<span class="underline">l</span>inder</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/nurbssphere" alt-id="Nurbs Sphere" appearance-id="menu row labeled Nurbs Sphere (in {windowId})" location-id="fifth item in the Surface nested menu (in {windowId})" functionality-id="adds a NURBS sphere surface to the scene (in {windowId})" intent-id="create a smooth spherical surface (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/nurbssphere:text-white">
                            <circle cx="6" cy="6" r="3.5" />
                            <path d="M2.5 6 Q 6 9, 9.5 6 M2.5 6 Q 6 3, 9.5 6" stroke-width="0.5" />
                            <rect x="1.5" y="1.5" width="9" height="9" stroke-width="0.5" stroke-dasharray="1 1" />
                            <circle cx="1.5" cy="1.5" r="1" fill="currentColor" stroke="none" />
                            <circle cx="10.5" cy="1.5" r="1" fill="currentColor" stroke="none" />
                            <circle cx="1.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
                            <circle cx="10.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Nurbs S<span class="underline">p</span>here</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/nurbstorus" alt-id="Nurbs Torus" appearance-id="menu row labeled Nurbs Torus (in {windowId})" location-id="sixth item in the Surface nested menu (in {windowId})" functionality-id="adds a NURBS torus surface to the scene (in {windowId})" intent-id="create a smooth donut-shaped surface (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/nurbstorus:text-white">
                            <ellipse cx="6" cy="6" rx="4" ry="2" />
                            <ellipse cx="6" cy="6" rx="2" ry="0.8" />
                            <rect x="1" y="3" width="10" height="6" stroke-width="0.5" stroke-dasharray="1 1" />
                            <circle cx="1" cy="3" r="1" fill="currentColor" stroke="none" />
                            <circle cx="11" cy="3" r="1" fill="currentColor" stroke="none" />
                            <circle cx="1" cy="9" r="1" fill="currentColor" stroke="none" />
                            <circle cx="11" cy="9" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Nurbs T<span class="underline">o</span>rus</span>
                        </div>
                      </div>
                    {/if}
                  </div>
                  <div class="px-5 py-[3px] {isViewportOptionsAddMetaballOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/metaball relative" alt-id="Metaball" appearance-id="menu row labeled Metaball with a right arrow (in {windowId})" location-id="fourth item in the Add nested menu (in {windowId})" functionality-id="opens the Metaball submenu to add a metaball object (in {windowId})" intent-id="add an organic blob object that merges with other metaballs (in {windowId})" on:click|stopPropagation={() => { isViewportOptionsAddMetaballOpen = !isViewportOptionsAddMetaballOpen; updateOpenParam(); }}>
                    <div class="flex items-center gap-[10px]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 {isViewportOptionsAddMetaballOpen ? 'text-white' : 'group-hover/metaball:text-white'}">
                        <circle cx="5" cy="6" r="3.5" />
                        <circle cx="8" cy="4" r="2" />
                      </svg>
                      <span>M<span class="underline">e</span>taball</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsAddMetaballOpen ? 'text-white' : 'text-[#888] group-hover/metaball:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsAddMetaballOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Metaball nested menu" appearance-id="dark floating submenu listing metaball primitive types (in {windowId})" location-id="to the right of the Metaball item in the Add nested menu (in {windowId})" functionality-id="lists metaball shapes that can be added (in {windowId})" intent-id="choose a specific metaball primitive (in {windowId})">
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ball" alt-id="Ball" appearance-id="menu row labeled Ball (in {windowId})" location-id="first item in the Metaball nested menu (in {windowId})" functionality-id="adds a spherical metaball object to the scene (in {windowId})" intent-id="create a blob sphere that merges with other metaballs (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ball:text-white">
                            <circle cx="6" cy="6" r="4.5" />
                            <path d="M 6 1.5 A 2.5 4.5 0 0 0 6 10.5" />
                          </svg>
                          <span><span class="underline">B</span>all</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/capsule" alt-id="Capsule" appearance-id="menu row labeled Capsule (in {windowId})" location-id="second item in the Metaball nested menu (in {windowId})" functionality-id="adds a capsule-shaped metaball to the scene (in {windowId})" intent-id="create a pill-shaped metaball (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/capsule:text-white">
                            <rect x="2" y="4" width="8" height="4" rx="2" transform="rotate(-45 6 6)" />
                            <path d="M 4 4 L 8 8" stroke-width="0.5" />
                          </svg>
                          <span><span class="underline">C</span>apsule</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/metaplane" alt-id="Plane" appearance-id="menu row labeled Plane for Plane (in {windowId})" location-id="first item in the Mesh nested menu, Plane (in {windowId})" functionality-id="adds a flat square plane mesh to the scene for Plane (in {windowId})" intent-id="create a ground plane or flat surface for Plane (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/metaplane:text-white">
                            <rect x="2" y="2" width="8" height="8" rx="2" />
                          </svg>
                          <span><span class="underline">P</span>lane</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ellipsoid" alt-id="Ellipsoid" appearance-id="menu row labeled Ellipsoid (in {windowId})" location-id="fourth item in the Metaball nested menu (in {windowId})" functionality-id="adds an ellipsoid-shaped metaball to the scene (in {windowId})" intent-id="create an elongated oval metaball (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ellipsoid:text-white">
                            <ellipse cx="6" cy="6" rx="4.5" ry="2.5" transform="rotate(-45 6 6)" />
                            <path d="M 2.8 9.2 L 9.2 2.8" stroke-width="0.5" />
                          </svg>
                          <span><span class="underline">E</span>llipsoid</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/metacube" alt-id="Cube" appearance-id="menu row labeled Cube for Cube (in {windowId})" location-id="second item in the Mesh nested menu, Cube (in {windowId})" functionality-id="adds a cube mesh to the scene for Cube (in {windowId})" intent-id="create a rectangular or box-shaped mesh for Cube (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/metacube:text-white">
                            <path d="M3 4 L6 2.5 L9 4 L9 8 L6 9.5 L3 8 Z" stroke-linejoin="round" />
                            <path d="M3 4 L6 5.5 L9 4" stroke-linejoin="round" />
                            <path d="M6 5.5 L6 9.5" stroke-linejoin="round" />
                          </svg>
                          <span>C<span class="underline">u</span>be</span>
                        </div>
                      </div>
                    {/if}
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/text" alt-id="Text" appearance-id="menu row labeled Text (in {windowId})" location-id="fifth item in the Add nested menu (in {windowId})" functionality-id="adds a text object to the scene (in {windowId})" intent-id="create editable 3D text (in {windowId})">
                    <i class="fa-solid fa-font text-[#888] text-[12px] group-hover/text:text-white"></i>
                    <span>Te<span class="underline">x</span>t</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/pointcloud" alt-id="Point Cloud" appearance-id="menu row labeled Point Cloud (in {windowId})" location-id="sixth item in the Add nested menu (in {windowId})" functionality-id="adds a point cloud object to the scene (in {windowId})" intent-id="work with point cloud data (in {windowId})">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="text-[#888] group-hover/pointcloud:text-white pointer-events-none">
                      <circle cx="3" cy="3" r="1.5" />
                      <circle cx="9" cy="4" r="1.5" />
                      <circle cx="5" cy="8" r="1.5" />
                      <circle cx="10" cy="9" r="1.5" />
                    </svg>
                    <span>P<span class="underline">o</span>int Cloud</span>
                  </div>
                  <div class="px-5 py-[3px] {isViewportOptionsAddVolumeOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/volume relative" alt-id="Volume" appearance-id="menu row labeled Volume with a right arrow for Volume (in {windowId})" location-id="seventh item in the Add nested menu, Volume (in {windowId})" functionality-id="opens the Volume submenu for adding volume objects for Volume (in {windowId})" intent-id="add a volumetric object to the scene for Volume (in {windowId})" on:click|stopPropagation={() => { isViewportOptionsAddVolumeOpen = !isViewportOptionsAddVolumeOpen; updateOpenParam(); }}>
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-cloud text-[12px] pointer-events-none opacity-80 {isViewportOptionsAddVolumeOpen ? 'text-white' : 'group-hover/volume:text-white'}"></i>
                      <span><span class="underline">V</span>olume</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsAddVolumeOpen ? 'text-white' : 'text-[#888] group-hover/volume:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsAddVolumeOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Volume nested menu" appearance-id="dark floating submenu listing volume object options (in {windowId})" location-id="to the right of the Volume item in the Add nested menu (in {windowId})" functionality-id="lists options for adding volume objects to the scene (in {windowId})" intent-id="choose to import a VDB or add an empty volume (in {windowId})">
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/importvdb" alt-id="Import OpenVDB..." appearance-id="menu row labeled Import OpenVDB... (in {windowId})" location-id="first item in the Volume nested menu (in {windowId})" functionality-id="opens a file browser to import an OpenVDB volume file (in {windowId})" intent-id="bring in volumetric data from an OpenVDB file (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/importvdb:text-white">
                            <path d="M3.5 8.5 L8.5 8.5 C10 8.5 10 6 8.5 6 C8.5 4.5 6.5 4 5.5 5.5 C4.5 4.5 3 5 3.5 6.5 C2 6.5 2 8.5 3.5 8.5 Z" />
                          </svg>
                          <span>Import OpenVDB...</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/vol-empty" alt-id="Empty" appearance-id="menu row labeled Empty volume object in the Volume submenu (in {windowId})" location-id="second item in the Volume nested menu (in {windowId})" functionality-id="adds an empty volume object placeholder to the scene (in {windowId})" intent-id="create an empty volume object for later use via the Volume submenu (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/vol-empty:text-white">
                            <path d="M3.5 8.5 L8.5 8.5 C10 8.5 10 6 8.5 6 C8.5 4.5 6.5 4 5.5 5.5 C4.5 4.5 3 5 3.5 6.5 C2 6.5 2 8.5 3.5 8.5 Z" />
                          </svg>
                          <span>Empty</span>
                        </div>
                      </div>
                    {/if}
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/gp" alt-id="Grease Pencil" appearance-id="menu row labeled Grease Pencil with a right arrow (in {windowId})" location-id="eighth item in the Add nested menu (in {windowId})" functionality-id="opens the Grease Pencil submenu for 2D drawing objects (in {windowId})" intent-id="add a Grease Pencil drawing object to the scene (in {windowId})">
                    <div class="flex items-center gap-[10px]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/gp:text-white">
                        <path d="M2 10 Q 2 2 6 2 T 10 10" />
                        <path d="M6 2 Q 6 10 10 10" />
                      </svg>
                      <span><span class="underline">G</span>rease Pencil</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/gp:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/armature" alt-id="Armature" appearance-id="menu row labeled Armature (in {windowId})" location-id="ninth item in the Add nested menu (in {windowId})" functionality-id="adds a single-bone armature to the scene (in {windowId})" intent-id="create a skeleton for rigging and animation (in {windowId})">
                    <i class="fa-solid fa-child-reaching text-[#888] text-[12px] group-hover/armature:text-white"></i>
                    <span><span class="underline">A</span>rmature</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/lattice" alt-id="Lattice" appearance-id="menu row labeled Lattice with a right arrow (in {windowId})" location-id="tenth item in the Add nested menu (in {windowId})" functionality-id="opens a submenu to add a lattice deformer (in {windowId})" intent-id="add a lattice cage for deforming other objects (in {windowId})">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-border-all text-[#888] text-[12px] group-hover/lattice:text-white"></i>
                      <span><span class="underline">L</span>attice</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/lattice:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/empty" alt-id="Empty" appearance-id="menu row labeled Empty object in the main Add menu (in {windowId})" location-id="in the Add nested menu, below the Lattice section (in {windowId})" functionality-id="opens the Empty submenu for adding empty object types (in {windowId})" intent-id="add an empty object such as plain axes or image reference (in {windowId})">
                    <div class="flex items-center gap-[10px]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/empty:text-white">
                        <path d="M6 1 L6 11 M1 6 L11 6 M3 3 L9 9 M3 9 L9 3" />
                      </svg>
                      <span><span class="underline">E</span>mpty</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/empty:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/image" alt-id="Image" appearance-id="menu row labeled Image with a right arrow (in {windowId})" location-id="in the Add nested menu, Image (in {windowId})" functionality-id="opens the Image submenu for adding image reference objects (in {windowId})" intent-id="place a 2D image as a reference or background in 3D space (in {windowId})">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-regular fa-image text-[#888] text-[12px] group-hover/image:text-white"></i>
                      <span><span class="underline">I</span>mage</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/image:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/light" alt-id="Light" appearance-id="menu row labeled Light with a right arrow (in {windowId})" location-id="in the Add nested menu, Light (in {windowId})" functionality-id="opens the Light submenu for adding light objects (in {windowId})" intent-id="add a light source to illuminate the scene (in {windowId})">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-regular fa-lightbulb text-[#888] text-[12px] group-hover/light:text-white"></i>
                      <span>Ligh<span class="underline">t</span></span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/light:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] {isViewportOptionsAddLightProbeOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/lightprobe relative" alt-id="Light Probe" appearance-id="menu row labeled Light Probe with a right arrow (in {windowId})" location-id="in the Add nested menu, Light Probe (in {windowId})" functionality-id="opens the Light Probe submenu for adding light probe objects (in {windowId})" intent-id="add a light probe for indirect lighting or reflections (in {windowId})" on:click|stopPropagation={() => { isViewportOptionsAddLightProbeOpen = !isViewportOptionsAddLightProbeOpen; updateOpenParam(); }}>
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-burst text-[12px] pointer-events-none opacity-80 {isViewportOptionsAddLightProbeOpen ? 'text-white' : 'group-hover/lightprobe:text-white'}"></i>
                      <span>Light <span class="underline">P</span>robe</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsAddLightProbeOpen ? 'text-white' : 'text-[#888] group-hover/lightprobe:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsAddLightProbeOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Light Probe nested menu" appearance-id="dark floating submenu listing light probe types (in {windowId})" location-id="to the right of the Light Probe item in the Add nested menu (in {windowId})" functionality-id="lists available light probe types (in {windowId})" intent-id="choose a light probe type for capturing lighting data (in {windowId})">
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/probe-sphere" alt-id="Sphere" appearance-id="menu row labeled Sphere (in {windowId})" location-id="first item in the Light Probe nested menu (in {windowId})" functionality-id="adds a sphere light probe for capturing omnidirectional reflections (in {windowId})" intent-id="capture reflections from all directions (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/probe-sphere:text-white">
                            <path d="M1.5 3.5 L8.5 3.5 L8.5 10.5 L1.5 10.5 Z" />
                            <path d="M1.5 3.5 L4.5 0.5 L10.5 0.5 L10.5 7.5 L8.5 10.5" />
                            <path d="M8.5 3.5 L10.5 0.5" />
                            <circle cx="5" cy="7" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Sphere</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/probe-plane" alt-id="Plane" appearance-id="menu row labeled Plane for Plane (in {windowId})" location-id="first item in the Mesh nested menu, Plane (in {windowId})" functionality-id="adds a flat square plane mesh to the scene for Plane (in {windowId})" intent-id="create a ground plane or flat surface for Plane (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/probe-plane:text-white">
                            <path d="M6 1 L11 6 L6 11 L1 6 Z" />
                            <circle cx="6" cy="6" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Plane</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/probe-volume" alt-id="Volume" appearance-id="menu row labeled Volume with a right arrow for Volume (in {windowId})" location-id="seventh item in the Add nested menu, Volume (in {windowId})" functionality-id="opens the Volume submenu for adding volume objects for Volume (in {windowId})" intent-id="add a volumetric object to the scene for Volume (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/probe-volume:text-white">
                            <circle cx="2.5" cy="2.5" r="1" />
                            <circle cx="6" cy="2.5" r="1" />
                            <circle cx="9.5" cy="2.5" r="1" />
                            <circle cx="2.5" cy="6" r="1" />
                            <circle cx="6" cy="6" r="1" />
                            <circle cx="9.5" cy="6" r="1" />
                            <circle cx="2.5" cy="9.5" r="1" />
                            <circle cx="6" cy="9.5" r="1" />
                            <circle cx="9.5" cy="9.5" r="1" />
                          </svg>
                          <span>Volume</span>
                        </div>
                      </div>
                    {/if}
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/camera" alt-id="Camera" appearance-id="menu row labeled Camera (in {windowId})" location-id="in the Add nested menu, Camera (in {windowId})" functionality-id="adds a camera object to the scene (in {windowId})" intent-id="create a new camera for rendering or viewing the scene (in {windowId})">
                    <i class="fa-solid fa-video text-[#888] text-[12px] group-hover/camera:text-white"></i>
                    <span>C<span class="underline">a</span>mera</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/speaker" alt-id="Speaker" appearance-id="menu row labeled Speaker (in {windowId})" location-id="in the Add nested menu, Speaker (in {windowId})" functionality-id="adds a speaker object to the scene for 3D audio (in {windowId})" intent-id="place a 3D audio source in the scene (in {windowId})">
                    <i class="fa-solid fa-volume-high text-[#888] text-[12px] group-hover/speaker:text-white"></i>
                    <span>Spea<span class="underline">k</span>er</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] {isViewportOptionsAddForceFieldOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/forcefield relative" alt-id="Force Field" appearance-id="menu row labeled Force Field with a right arrow (in {windowId})" location-id="in the Add nested menu, Force Field (in {windowId})" functionality-id="opens the Force Field submenu for adding physics force objects (in {windowId})" intent-id="add a force field to influence physics simulations (in {windowId})" on:click|stopPropagation={() => { isViewportOptionsAddForceFieldOpen = !isViewportOptionsAddForceFieldOpen; updateOpenParam(); }}>
                    <div class="flex items-center gap-[10px]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 {isViewportOptionsAddForceFieldOpen ? 'text-white' : 'group-hover/forcefield:text-white'}">
                        <path d="M2.5 1 L1.5 3 L3.5 6 L1.5 9 L2.5 11 M6 1 L5 3 L7 6 L5 9 L6 11 M9.5 1 L8.5 3 L10.5 6 L8.5 9 L9.5 11" />
                      </svg>
                      <span><span class="underline">F</span>orce Field</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsAddForceFieldOpen ? 'text-white' : 'text-[#888] group-hover/forcefield:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsAddForceFieldOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Force Field nested menu" appearance-id="dark floating submenu listing force field types (in {windowId})" location-id="to the right of the Force Field item in the Add nested menu (in {windowId})" functionality-id="lists all types of force fields that can be added (in {windowId})" intent-id="choose a type of physics force to apply to the scene (in {windowId})">
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-force" alt-id="Force" appearance-id="menu row labeled Force (in {windowId})" location-id="first item in the Force Field nested menu (in {windowId})" functionality-id="adds a generic force field to the scene (in {windowId})" intent-id="create a radial force that pushes or pulls particles (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-force:text-white">
                            <path d="M2.5 1 L1.5 3 L3.5 6 L1.5 9 L2.5 11 M6 1 L5 3 L7 6 L5 9 L6 11 M9.5 1 L8.5 3 L10.5 6 L8.5 9 L9.5 11" />
                          </svg>
                          <span>Force</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-wind" alt-id="Wind" appearance-id="menu row labeled Wind (in {windowId})" location-id="second item in the Force Field nested menu (in {windowId})" functionality-id="adds a directional wind force field to the scene (in {windowId})" intent-id="simulate wind effects on particles and cloth (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-wind:text-white">
                            <path d="M1 3 L8 3 C9.5 3 10.5 4 10.5 5.5 C10.5 7 9.5 8 8 8 L7 8" />
                            <path d="M2 6 L6 6" />
                            <path d="M1 9 L7 9 C8.5 9 9.5 10 9.5 11" />
                          </svg>
                          <span>Wind</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-vortex" alt-id="Vortex" appearance-id="menu row labeled Vortex (in {windowId})" location-id="third item in the Force Field nested menu (in {windowId})" functionality-id="adds a vortex force field to the scene (in {windowId})" intent-id="create a spinning force effect (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-vortex:text-white">
                            <path d="M6 5.5 C6.5 5.5 7 6 7 6.5 C7 7.5 5 7.5 5 6 C5 4 8 4 8 6.5 C8 9 4 9 4 6 C4 2.5 9 2.5 9 6 C9 10 3 10 3 6 C3 1.5 10.5 1.5 10.5 6" />
                          </svg>
                          <span>Vortex</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-magnetic" alt-id="Magnetic" appearance-id="menu row labeled Magnetic (in {windowId})" location-id="fourth item in the Force Field nested menu (in {windowId})" functionality-id="adds a magnetic force field to the scene (in {windowId})" intent-id="create a magnetic-like attraction or repulsion force (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-magnetic:text-white">
                            <path d="M6 1 L6 11" />
                            <path d="M4 6 C4 4, 8 4, 8 6 C8 8, 4 8, 4 6" />
                            <path d="M2 6 C2 2, 10 2, 10 6 C10 10, 2 10, 2 6" />
                            <path d="M5.5 5 L6.5 6 L5.5 7" />
                          </svg>
                          <span>Magnetic</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-harmonic" alt-id="Harmonic" appearance-id="menu row labeled Harmonic (in {windowId})" location-id="fifth item in the Force Field nested menu (in {windowId})" functionality-id="adds a harmonic oscillating force field to the scene (in {windowId})" intent-id="create an oscillating force for spring-like effects (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-harmonic:text-white">
                            <path d="M1 6 Q 3 1 6 6 T 11 6" />
                          </svg>
                          <span>Harmonic</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-charge" alt-id="Charge" appearance-id="menu row labeled Charge (in {windowId})" location-id="sixth item in the Force Field nested menu (in {windowId})" functionality-id="adds a charge force field to the scene (in {windowId})" intent-id="simulate electrical charge attraction or repulsion (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-charge:text-white">
                            <circle cx="4" cy="8" r="2.5" />
                            <path d="M3 8 L5 8 M4 7 L4 9" />
                            <circle cx="8" cy="4" r="2.5" />
                            <path d="M7 4 L9 4" />
                          </svg>
                          <span>Charge</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-lennard" alt-id="Lennard-Jones" appearance-id="menu row labeled Lennard-Jones (in {windowId})" location-id="seventh item in the Force Field nested menu (in {windowId})" functionality-id="adds a Lennard-Jones atomic force field to the scene (in {windowId})" intent-id="simulate molecular-scale force interactions (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-lennard:text-white">
                            <circle cx="3.5" cy="4.5" r="1.5" />
                            <circle cx="3.5" cy="9.5" r="1.5" />
                            <circle cx="8.5" cy="7" r="1.5" />
                            <path d="M4.5 5.5 L7.5 6.5 M4.5 8.5 L7.5 7.5 M3.5 6 L3.5 8" stroke-dasharray="1 1" />
                          </svg>
                          <span>Lennard-Jones</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-texture" alt-id="Texture" appearance-id="menu row labeled Texture (in {windowId})" location-id="eighth item in the Force Field nested menu (in {windowId})" functionality-id="adds a texture-based force field driven by a texture map (in {windowId})" intent-id="use a texture to define complex force field patterns (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-texture:text-white">
                            <path d="M4 2 L10 2 L10 8 L4 8 Z" fill="none" />
                            <rect x="4" y="2" width="2" height="2" fill="currentColor" />
                            <rect x="8" y="2" width="2" height="2" fill="currentColor" />
                            <rect x="6" y="4" width="2" height="2" fill="currentColor" />
                            <rect x="4" y="6" width="2" height="2" fill="currentColor" />
                            <rect x="8" y="6" width="2" height="2" fill="currentColor" />
                            <circle cx="2.5" cy="9.5" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Texture</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-curveguide" alt-id="Curve Guide" appearance-id="menu row labeled Curve Guide (in {windowId})" location-id="ninth item in the Force Field nested menu (in {windowId})" functionality-id="adds a curve guide force field for guiding particles along a curve (in {windowId})" intent-id="direct particle paths along a curve shape (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-curveguide:text-white">
                            <path d="M4 9 C 8 9, 8 3, 4 3" />
                            <circle cx="2.5" cy="9.5" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Curve Guide</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-boid" alt-id="Boid" appearance-id="menu row labeled Boid (in {windowId})" location-id="tenth item in the Force Field nested menu (in {windowId})" functionality-id="adds a boid force field for flocking simulation (in {windowId})" intent-id="influence boid particle flocking behavior (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-boid:text-white">
                            <path d="M3 4 L5 4 L4 6 Z M6 2 L8 2 L7 4 Z M8 5 L10 5 L9 7 Z" fill="none" />
                            <circle cx="2.5" cy="9.5" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Boid</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-turbulence" alt-id="Turbulence" appearance-id="menu row labeled Turbulence (in {windowId})" location-id="eleventh item in the Force Field nested menu (in {windowId})" functionality-id="adds a turbulence force field with chaotic random forces (in {windowId})" intent-id="add random chaotic forces to particles or cloth (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-turbulence:text-white">
                            <path d="M4 2 L3 4 L5 6 L3 8 L4 10 M7 2 L6 4 L8 6 L6 8 L7 10 M10 2 L9 4 L11 6 L9 8 L10 10" />
                            <circle cx="2.5" cy="9.5" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Turbulence</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-drag" alt-id="Drag" appearance-id="menu row labeled Drag (in {windowId})" location-id="twelfth item in the Force Field nested menu (in {windowId})" functionality-id="adds a drag force field that resists particle motion (in {windowId})" intent-id="simulate air resistance or friction on particles (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-drag:text-white">
                            <path d="M7 2 C4 2 3 5 4 7 C5 9 9 9 10 7 C11 5 10 2 7 2 Z" />
                            <path d="M5 4 L9 4" />
                            <circle cx="2.5" cy="9.5" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Drag</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-fluidflow" alt-id="Fluid Flow" appearance-id="menu row labeled Fluid Flow (in {windowId})" location-id="thirteenth item in the Force Field nested menu (in {windowId})" functionality-id="adds a fluid flow force field for fluid-driven particle motion (in {windowId})" intent-id="drive particles using fluid simulation velocity (in {windowId})">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-fluidflow:text-white">
                            <path d="M6.5 8.5 L9.5 8.5 C10.5 8.5 10.5 6 9.5 6 C9.5 4.5 7.5 4 6.5 5.5 C5.5 4.5 4 5 4.5 6.5 C3.5 6.5 3.5 8.5 4.5 8.5 L6.5 8.5" />
                            <circle cx="2.5" cy="9.5" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Fluid Flow</span>
                        </div>
                      </div>
                    {/if}
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/collinst" alt-id="Collection Instance..." appearance-id="menu row labeled Collection Instance... (in {windowId})" location-id="last item in the Add nested menu (in {windowId})" functionality-id="opens a dialog to add an instance of a collection (in {windowId})" intent-id="place a linked instance of a collection of objects (in {windowId})">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-layer-group text-[#888] text-[12px] group-hover/collinst:text-white"></i>
                      <span>C<span class="underline">o</span>llection Instance...</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>
            <div class="px-5 py-[3px] {isViewportOptionsObjectOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group relative" alt-id="Object Viewport Options" appearance-id="menu row labeled Object with a right arrow (in {windowId})" location-id="fourth item in the Viewport options nested menu (in {windowId})" functionality-id="opens the Object submenu for object-level operations (in {windowId})" intent-id="access object transformation, mirroring, and constraint commands (in {windowId})" on:click|stopPropagation={() => { isViewportOptionsObjectOpen = !isViewportOptionsObjectOpen; updateOpenParam(); }}>
              <span><span class="underline">O</span>bject</span>
              <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsObjectOpen ? 'text-white' : 'text-[#888] group-hover:text-white'} pointer-events-none"></i>
              
              {#if isViewportOptionsObjectOpen}
                <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[102] w-[260px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Object nested menu" appearance-id="dark floating submenu listing object operation categories (in {windowId})" location-id="to the right of the Object item in the viewport options menu (in {windowId})" functionality-id="lists object operation categories like Transform, Set Origin, Mirror (in {windowId})" intent-id="perform operations on the selected object (in {windowId})">
                  <div class="px-5 py-[3px] {isViewportOptionsObjectTransformOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/transform relative" alt-id="Transform" appearance-id="menu row labeled Transform with a right arrow (in {windowId})" location-id="first item in the Object nested menu (in {windowId})" functionality-id="opens the Transform submenu for object transformation commands (in {windowId})" intent-id="move, rotate, scale, or otherwise transform selected objects (in {windowId})" on:click|stopPropagation={() => { isViewportOptionsObjectTransformOpen = !isViewportOptionsObjectTransformOpen; updateOpenParam(); }}>
                    <span><span class="underline">T</span>ransform</span>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsObjectTransformOpen ? 'text-white' : 'text-[#888] group-hover/transform:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsObjectTransformOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[260px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Transform nested menu" appearance-id="dark floating submenu listing transformation operations (in {windowId})" location-id="to the right of the Transform item in the Object menu (in {windowId})" functionality-id="lists transformation commands available for the selected object (in {windowId})" intent-id="choose a specific transformation to apply (in {windowId})">
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/move" alt-id="Move" appearance-id="menu row labeled Move with a G shortcut (in {windowId})" location-id="first item in the Transform nested menu (in {windowId})" functionality-id="activates the move/grab transform operator for the selected object (in {windowId})" intent-id="move the selected object to a new position (in {windowId})">
                          <span><span class="underline">M</span>ove</span>
                          <span class="text-[#888] text-[11px] font-mono group-hover/move:text-white">G</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/rotate" alt-id="Rotate" appearance-id="menu row labeled Rotate with an R shortcut (in {windowId})" location-id="second item in the Transform nested menu (in {windowId})" functionality-id="activates the rotate transform operator for the selected object (in {windowId})" intent-id="rotate the selected object (in {windowId})">
                          <span><span class="underline">R</span>otate</span>
                          <span class="text-[#888] text-[11px] font-mono group-hover/rotate:text-white">R</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/scale" alt-id="Scale" appearance-id="menu row labeled Scale with an S shortcut (in {windowId})" location-id="third item in the Transform nested menu (in {windowId})" functionality-id="activates the scale transform operator for the selected object (in {windowId})" intent-id="scale the selected object (in {windowId})">
                          <span><span class="underline">S</span>cale</span>
                          <span class="text-[#888] text-[11px] font-mono group-hover/scale:text-white">S</span>
                        </div>
                        
                        <div class="my-1 border-t border-[#333]"></div>
                        
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/tosphere" alt-id="To Sphere" appearance-id="menu row labeled To Sphere with a Shift+Alt+S shortcut (in {windowId})" location-id="fourth item in the Transform nested menu (in {windowId})" functionality-id="applies the Sphere transform to project mesh towards a sphere (in {windowId})" intent-id="blend the mesh shape towards a perfect sphere (in {windowId})">
                          <span><span class="underline">T</span>o Sphere</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/shear" alt-id="Shear" appearance-id="menu row labeled Shear with a Shift+Ctrl+Alt+S shortcut (in {windowId})" location-id="fifth item in the Transform nested menu (in {windowId})" functionality-id="applies a shear transformation (in {windowId})" intent-id="skew the object along an axis (in {windowId})">
                          <span>Sh<span class="underline">e</span>ar</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/bend" alt-id="Bend" appearance-id="menu row labeled Bend with a Shift+W shortcut (in {windowId})" location-id="sixth item in the Transform nested menu (in {windowId})" functionality-id="applies a bend transformation (in {windowId})" intent-id="bend or curve the selected geometry (in {windowId})">
                          <span><span class="underline">B</span>end</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/pushpull" alt-id="Push/Pull" appearance-id="menu row labeled Push/Pull (in {windowId})" location-id="seventh item in the Transform nested menu (in {windowId})" functionality-id="applies a push or pull transformation along vertex normals (in {windowId})" intent-id="inflate or deflate the mesh (in {windowId})">
                          <span><span class="underline">P</span>ush/Pull</span>
                        </div>
                        
                        <div class="my-1 border-t border-[#333]"></div>
                        
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/movetex" alt-id="Move Texture Space" appearance-id="menu row labeled Move Texture Space (in {windowId})" location-id="eighth item in the Transform nested menu (in {windowId})" functionality-id="moves the texture space of the selected object (in {windowId})" intent-id="offset the texture mapping on the object (in {windowId})">
                          <span>Mo<span class="underline">v</span>e Texture Space</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/scaletex" alt-id="Scale Texture Space" appearance-id="menu row labeled Scale Texture Space (in {windowId})" location-id="ninth item in the Transform nested menu (in {windowId})" functionality-id="scales the texture space of the selected object (in {windowId})" intent-id="adjust the texture mapping scale on the object (in {windowId})">
                          <span>S<span class="underline">c</span>ale Texture Space</span>
                        </div>
                        
                        <div class="my-1 border-t border-[#333]"></div>
                        
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/align" alt-id="Align to Transform Orientation" appearance-id="menu row labeled Align to Transform Orientation (in {windowId})" location-id="tenth item in the Transform nested menu (in {windowId})" functionality-id="aligns the selected objects to the current transform orientation (in {windowId})" intent-id="snap objects to align with the active transform axes (in {windowId})">
                          <span><span class="underline">A</span>lign to Transform Orientation</span>
                        </div>
                        
                        <div class="my-1 border-t border-[#333]"></div>
                        
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/randomize" alt-id="Randomize Transform" appearance-id="menu row labeled Randomize Transform (in {windowId})" location-id="in the Transform nested menu, Randomize Transform (in {windowId})" functionality-id="applies a random transformation to the selected objects (in {windowId})" intent-id="add random variation to object positions and rotations (in {windowId})">
                          <span>Ra<span class="underline">n</span>domize Transform</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/alignobj" alt-id="Align Objects" appearance-id="menu row labeled Align Objects (in {windowId})" location-id="in the Transform nested menu, Align Objects (in {windowId})" functionality-id="aligns the selected objects to a specified axis or target (in {windowId})" intent-id="line up multiple objects along a common axis (in {windowId})">
                          <span>Align <span class="underline">O</span>bjects</span>
                        </div>
                      </div>
                    {/if}
                  </div>
                  <div class="px-5 py-[3px] {isViewportOptionsObjectSetOriginOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/setorigin relative" alt-id="Set Origin" appearance-id="menu item with a right-pointing caret arrow, highlighted when submenu is open for Set Origin (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Transform section (in {windowId})" functionality-id="opens the Set Origin submenu for repositioning the object's origin point (in {windowId})" intent-id="adjust where the object's pivot point is located in the scene (in {windowId})" on:click|stopPropagation={() => { isViewportOptionsObjectSetOriginOpen = !isViewportOptionsObjectSetOriginOpen; updateOpenParam(); }}>
                    <span><span class="underline">S</span>et Origin</span>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsObjectSetOriginOpen ? 'text-white' : 'text-[#888] group-hover/setorigin:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsObjectSetOriginOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[260px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Set Origin nested menu" appearance-id="dark dropdown panel listing origin placement options for Set Origin nested menu (in {windowId})" location-id="to the right of Set Origin item in the Viewport Options Object submenu (in {windowId})" functionality-id="contains options for repositioning the object origin relative to geometry or cursor for Set Origin nested menu (in {windowId})" intent-id="provide precise control over the object's origin/pivot point position (in {windowId})">
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/geoorig" alt-id="Geometry to Origin" appearance-id="menu item text: Geometry to Origin for Geometry to Origin (in {windowId})" location-id="first item in the Set Origin nested menu (Viewport Options > Object) (in {windowId})" functionality-id="moves the object origin to the center of the mesh geometry (in {windowId})" intent-id="center the pivot point within the object's geometry boundaries (in {windowId})">
                          <span><span class="underline">G</span>eometry to Origin</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/origgeo" alt-id="Origin to Geometry" appearance-id="menu item text: Origin to Geometry for Origin to Geometry (in {windowId})" location-id="second item in the Set Origin nested menu (Viewport Options > Object) (in {windowId})" functionality-id="moves the object to align its origin to the geometry bounding center (in {windowId})" intent-id="reposition the object so the geometry center matches the origin (in {windowId})">
                          <span><span class="underline">O</span>rigin to Geometry</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/orig3d" alt-id="Origin to 3D Cursor" appearance-id="menu item text: Origin to 3D Cursor for Origin to 3D Cursor (in {windowId})" location-id="third item in the Set Origin nested menu (Viewport Options > Object) (in {windowId})" functionality-id="moves the object origin to the current 3D cursor location (in {windowId})" intent-id="precisely place the object pivot at the 3D cursor position (in {windowId})">
                          <span>Origin to 3D <span class="underline">C</span>ursor</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/origcom" alt-id="Origin to Center of Mass (Surface)" appearance-id="menu item text: Origin to Center of Mass (Surface) for Origin to Center of Mass (Surface) (in {windowId})" location-id="fourth item in the Set Origin nested menu (Viewport Options > Object) (in {windowId})" functionality-id="moves the origin to the calculated surface center of mass (in {windowId})" intent-id="balance the pivot point based on mesh surface distribution (in {windowId})">
                          <span>Origin to <span class="underline">C</span>enter of Mass (Surface)</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/origcov" alt-id="Origin to Center of Mass (Volume)" appearance-id="menu item text: Origin to Center of Mass (Volume) for Origin to Center of Mass (Volume) (in {windowId})" location-id="fifth item in the Set Origin nested menu (Viewport Options > Object) (in {windowId})" functionality-id="moves the origin to the calculated volumetric center of mass (in {windowId})" intent-id="balance the pivot point based on mesh volume distribution (in {windowId})">
                          <span>Origin to Center of <span class="underline">M</span>ass (Volume)</span>
                        </div>
                      </div>
                    {/if}
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/mirror" alt-id="Mirror" appearance-id="menu item with a right-pointing caret arrow for Mirror (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Set Origin item (in {windowId})" functionality-id="opens the Mirror submenu for flipping the object along an axis for Mirror (in {windowId})" intent-id="create a mirrored copy or flip the object geometry (in {windowId})">
                    <span><span class="underline">M</span>irror</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/mirror:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/clear" alt-id="Clear" appearance-id="menu item with a right-pointing caret arrow for Clear (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Mirror item (in {windowId})" functionality-id="opens the Clear submenu for resetting object transforms (in {windowId})" intent-id="reset object location, rotation, or scale to defaults (in {windowId})">
                    <span><span class="underline">C</span>lear</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/clear:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/apply" alt-id="Apply" appearance-id="menu item with keyboard shortcut Cmd A and a right-pointing caret arrow (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Clear item (in {windowId})" functionality-id="opens the Apply submenu for applying transforms to the object data (in {windowId})" intent-id="bake current transforms into the object's data permanently (in {windowId})">
                    <span><span class="underline">A</span>pply</span>
                    <div class="flex items-center gap-2">
                      <span class="text-[#888] text-[11px] font-mono group-hover/apply:text-white">⌘ A</span>
                      <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/apply:text-white"></i>
                    </div>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/snap" alt-id="Snap" appearance-id="menu item with a right-pointing caret arrow for Snap (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Apply item (in {windowId})" functionality-id="opens the Snap submenu for snapping objects to grid, cursor, or other elements (in {windowId})" intent-id="precisely align the object to scene elements using snap targets (in {windowId})">
                    <span>S<span class="underline">n</span>ap</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/snap:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/dupobj" alt-id="Duplicate Objects" appearance-id="menu item with keyboard shortcut Shift D (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Snap item (in {windowId})" functionality-id="creates an independent duplicate of the selected object (in {windowId})" intent-id="make a new copy of the object that can be edited separately for Duplicate Objects (in {windowId})">
                    <span><span class="underline">D</span>uplicate Objects</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/dupobj:text-white">⇧ D</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/duplink" alt-id="Duplicate Linked" appearance-id="menu item with keyboard shortcut Alt D for Duplicate Linked (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Duplicate Objects item (in {windowId})" functionality-id="creates a linked duplicate sharing the same mesh data as the original for Duplicate Linked (in {windowId})" intent-id="create an instance that updates when the original mesh changes for Duplicate Linked (in {windowId})">
                    <span>Duplicate <span class="underline">L</span>inked</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/duplink:text-white">⌥ D</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/join" alt-id="Join" appearance-id="menu item with keyboard shortcut Cmd J (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Duplicate Linked item (in {windowId})" functionality-id="merges selected objects into a single object (in {windowId})" intent-id="combine multiple objects into one for unified editing (in {windowId})">
                    <span><span class="underline">J</span>oin</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/join:text-white">⌘ J</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/copy" alt-id="Copy Objects" appearance-id="menu item with a copy icon and keyboard shortcut Cmd C for Copy Objects (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Join item (in {windowId})" functionality-id="copies the selected objects to the clipboard (in {windowId})" intent-id="prepare selected objects for pasting in the same or another scene (in {windowId})">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-regular fa-copy text-[#888] text-[12px] group-hover/copy:text-white"></i>
                      <span>C<span class="underline">o</span>py Objects</span>
                    </div>
                    <span class="text-[#888] text-[11px] font-mono group-hover/copy:text-white">⌘ C</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/paste" alt-id="Paste Objects" appearance-id="menu item with a clipboard icon and keyboard shortcut Cmd V (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Copy Objects item (in {windowId})" functionality-id="pastes previously copied objects into the scene for Paste Objects (in {windowId})" intent-id="place clipboard objects into the current scene (in {windowId})">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-clipboard-list text-[#888] text-[12px] group-hover/paste:text-white"></i>
                      <span><span class="underline">P</span>aste Objects</span>
                    </div>
                    <span class="text-[#888] text-[11px] font-mono group-hover/paste:text-white">⌘ V</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/asset" alt-id="Asset" appearance-id="menu item with a book icon and a right-pointing caret arrow (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Paste Objects item (in {windowId})" functionality-id="opens the Asset submenu for marking or managing asset properties (in {windowId})" intent-id="register the selected object as an asset for reuse across projects (in {windowId})">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-book text-[#888] text-[12px] group-hover/asset:text-white"></i>
                      <span>Ass<span class="underline">e</span>t</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/asset:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/coll" alt-id="Collection" appearance-id="menu item with a right-pointing caret arrow for Collection (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Asset item (in {windowId})" functionality-id="opens the Collection submenu for managing which collections the object belongs to (in {windowId})" intent-id="organize objects into collections for scene management (in {windowId})">
                    <div class="flex items-center gap-[10px]">
                      <div class="w-[12px]"></div> <!-- spacer -->
                      <span>C<span class="underline">o</span>llection</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/coll:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/libor" alt-id="Library Override" appearance-id="menu item with a right-pointing caret arrow for Library Override (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Collection item (in {windowId})" functionality-id="opens the Library Override submenu for creating editable overrides of linked library objects (in {windowId})" intent-id="allow local modifications to objects from external library files (in {windowId})">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-link-slash text-[#888] text-[12px] group-hover/libor:text-white"></i>
                      <span>Librar<span class="underline">y</span> Override</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/libor:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/rels" alt-id="Relations" appearance-id="menu item with a right-pointing caret arrow for Relations (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Library Override item (in {windowId})" functionality-id="opens the Relations submenu for managing object parent-child and data relationships (in {windowId})" intent-id="control how objects are linked and parented in the scene hierarchy (in {windowId})">
                    <div class="flex items-center gap-[10px]">
                      <div class="w-[12px]"></div> <!-- spacer -->
                      <span><span class="underline">R</span>elations</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/rels:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/parent" alt-id="Parent" appearance-id="menu item with a right-pointing caret arrow for Parent (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Relations item (in {windowId})" functionality-id="opens the Parent submenu for setting or clearing parent-child object relationships (in {windowId})" intent-id="create hierarchical relationships between objects for linked transformations (in {windowId})">
                    <div class="flex items-center gap-[10px]">
                      <div class="w-[12px]"></div> <!-- spacer -->
                      <span>P<span class="underline">a</span>rent</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/parent:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] {isViewportOptionsObjectModifiersOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/mods relative" alt-id="Modifiers" appearance-id="menu item with a right-pointing caret arrow, highlighted when submenu is open for Modifiers (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Parent item (in {windowId})" functionality-id="opens the Modifiers submenu for adding and managing non-destructive modifiers (in {windowId})" intent-id="apply procedural modifications to object geometry without altering original data (in {windowId})" on:click|stopPropagation={() => { isViewportOptionsObjectModifiersOpen = !isViewportOptionsObjectModifiersOpen; updateOpenParam(); }}>
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-wrench text-[#888] text-[12px] {isViewportOptionsObjectModifiersOpen ? 'text-white' : 'group-hover/mods:text-white'}"></i>
                      <span><span class="underline">M</span>odifiers</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsObjectModifiersOpen ? 'text-white' : 'text-[#888] group-hover/mods:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsObjectModifiersOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[260px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Modifiers nested menu" appearance-id="dark dropdown panel with modifier management options (in {windowId})" location-id="to the right of Modifiers item in the Viewport Options Object submenu (in {windowId})" functionality-id="contains options for adding modifiers or managing existing ones (in {windowId})" intent-id="provide quick access to modifier operations from the viewport (in {windowId})">
                        <div class="px-5 py-[3px] {isViewportOptionsObjectModifiersAddOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/addmod relative" alt-id="Add Modifier" appearance-id="menu item with a right-pointing caret arrow, highlighted when submenu is open for Add Modifier (in {windowId})" location-id="first item in the Modifiers nested menu (Viewport Options > Object) (in {windowId})" functionality-id="opens the Add Modifier submenu listing all available modifier categories (in {windowId})" intent-id="select and attach a new modifier to the active object (in {windowId})" on:click|stopPropagation={() => { isViewportOptionsObjectModifiersAddOpen = !isViewportOptionsObjectModifiersAddOpen; updateOpenParam(); }}>
                          <span><span class="underline">A</span>dd Modifier</span>
                          <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsObjectModifiersAddOpen ? 'text-white' : 'text-[#888] group-hover/addmod:text-white'} pointer-events-none"></i>
                          
                          {#if isViewportOptionsObjectModifiersAddOpen}
                            <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[104] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Add Modifier nested menu" appearance-id="dark dropdown panel listing modifier categories (in {windowId})" location-id="to the right of Add Modifier item in the Modifiers nested menu (in {windowId})" functionality-id="displays categories of modifiers available to add to the object (in {windowId})" intent-id="organize modifier selection by type for easy browsing (in {windowId})">
                              <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/editmod" alt-id="Edit" appearance-id="menu item text: Edit with a right-pointing caret (in {windowId})" location-id="first item in the Add Modifier nested menu (Viewport Options > Object > Modifiers) (in {windowId})" functionality-id="lists edit-mode modifier types such as Data Transfer and Weighted Normal (in {windowId})" intent-id="access modifiers that refine mesh topology and data (in {windowId})">
                                <span>Edit</span>
                                <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/editmod:text-white"></i>
                              </div>
                              <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/genmod" alt-id="Generate" appearance-id="menu item text: Generate with a right-pointing caret (in {windowId})" location-id="second item in the Add Modifier nested menu (Viewport Options > Object > Modifiers) (in {windowId})" functionality-id="lists generate modifier types such as Array, Bevel, and Subdivision Surface (in {windowId})" intent-id="access modifiers that add or multiply geometry (in {windowId})">
                                <span>Generate</span>
                                <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/genmod:text-white"></i>
                              </div>
                              <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/defmod" alt-id="Deform" appearance-id="menu item text: Deform with a right-pointing caret (in {windowId})" location-id="third item in the Add Modifier nested menu (Viewport Options > Object > Modifiers) (in {windowId})" functionality-id="lists deform modifier types such as Armature, Cast, and Lattice (in {windowId})" intent-id="access modifiers that reshape geometry without adding new vertices (in {windowId})">
                                <span>Deform</span>
                                <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/defmod:text-white"></i>
                              </div>
                              <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/normmod" alt-id="Normals" appearance-id="menu item text: Normals with a right-pointing caret (in {windowId})" location-id="fourth item in the Add Modifier nested menu (Viewport Options > Object > Modifiers) (in {windowId})" functionality-id="lists normal modifier types for shading control such as Normal Edit (in {windowId})" intent-id="access modifiers that adjust surface normal directions for shading effects (in {windowId})">
                                <span>Normals</span>
                                <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/normmod:text-white"></i>
                              </div>
                              <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/physmod" alt-id="Physics" appearance-id="menu item text: Physics with a right-pointing caret (in {windowId})" location-id="fifth item in the Add Modifier nested menu (Viewport Options > Object > Modifiers) (in {windowId})" functionality-id="lists physics-based modifier types such as Cloth and Soft Body (in {windowId})" intent-id="access modifiers that simulate physical behaviors on the mesh (in {windowId})">
                                <span>Physics</span>
                                <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/physmod:text-white"></i>
                              </div>
                              
                              <div class="my-1 border-t border-[#333]"></div>
                              
                              <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/geomod" alt-id="Geometry" appearance-id="menu item text: Geometry with a right-pointing caret (in {windowId})" location-id="sixth item in the Add Modifier nested menu (Viewport Options > Object > Modifiers) (in {windowId})" functionality-id="lists geometry modifier types for procedural geometry generation (in {windowId})" intent-id="access modifiers for advanced procedural geometry workflows (in {windowId})">
                                <span>Geometry</span>
                                <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/geomod:text-white"></i>
                              </div>
                              <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/hairmod" alt-id="Hair" appearance-id="menu item text: Hair with a right-pointing caret (in {windowId})" location-id="seventh item in the Add Modifier nested menu (Viewport Options > Object > Modifiers) (in {windowId})" functionality-id="lists hair-related modifier types for particle hair editing (in {windowId})" intent-id="access modifiers that work with particle-based hair systems (in {windowId})">
                                <span>Hair</span>
                                <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/hairmod:text-white"></i>
                              </div>
                              <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/instmod" alt-id="Instances" appearance-id="menu item text: Instances with a right-pointing caret (in {windowId})" location-id="eighth item in the Add Modifier nested menu (Viewport Options > Object > Modifiers) (in {windowId})" functionality-id="lists instance modifier types for object instancing and realization (in {windowId})" intent-id="access modifiers that scatter and instance objects procedurally (in {windowId})">
                                <span>Instances</span>
                                <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/instmod:text-white"></i>
                              </div>
                              
                              <div class="my-1 border-t border-[#333]"></div>
                              
                              <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/unassigned" alt-id="Unassigned" appearance-id="menu item text: Unassigned with a dotted file icon and a right-pointing caret (in {windowId})" location-id="ninth item in the Add Modifier nested menu (Viewport Options > Object > Modifiers) (in {windowId})" functionality-id="lists modifier types not assigned to any category (in {windowId})" intent-id="access miscellaneous or uncategorized modifiers (in {windowId})">
                                <div class="flex items-center gap-[10px]">
                                  <i class="fa-regular fa-file text-[#888] text-[12px] group-hover/unassigned:text-white pointer-events-none" style="border-style: dotted; border-width: 1px; border-color: transparent;"></i>
                                  <span>Unassigned</span>
                                </div>
                                <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/unassigned:text-white"></i>
                              </div>
                              <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/geonodes" alt-id="Geometry Nodes" appearance-id="menu item text: Geometry Nodes with a node graph icon and a right-pointing caret (in {windowId})" location-id="tenth item in the Add Modifier nested menu (Viewport Options > Object > Modifiers) (in {windowId})" functionality-id="adds a Geometry Nodes modifier enabling node-based procedural geometry (in {windowId})" intent-id="access the node-based geometry system for complex procedural shapes (in {windowId})">
                                <div class="flex items-center gap-[10px]">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="text-[#888] group-hover/geonodes:text-white pointer-events-none">
                                    <circle cx="3" cy="9" r="2" />
                                    <circle cx="6" cy="3" r="2" />
                                    <circle cx="9" cy="9" r="2" />
                                    <path d="M4 8 L5 5" stroke="currentColor" stroke-width="1.5" />
                                    <path d="M8 8 L7 5" stroke="currentColor" stroke-width="1.5" />
                                  </svg>
                                  <span>Geometry Nodes</span>
                                </div>
                                <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/geonodes:text-white"></i>
                              </div>
                            </div>
                          {/if}
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/copymods" alt-id="Copy Modifiers to Selected Objects" appearance-id="menu item text: Copy Modifiers to Selected Objects (in {windowId})" location-id="second item in the Modifiers nested menu (Viewport Options > Object) (in {windowId})" functionality-id="copies all modifiers from the active object to all selected objects (in {windowId})" intent-id="quickly apply the same modifier stack to multiple objects at once (in {windowId})">
                          <span><span class="underline">C</span>opy Modifiers to Selected Objects</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/clearmods" alt-id="Clear Object Modifiers" appearance-id="menu item text: Clear Object Modifiers (in {windowId})" location-id="third item in the Modifiers nested menu (Viewport Options > Object) (in {windowId})" functionality-id="removes all modifiers from the selected objects (in {windowId})" intent-id="strip the modifier stack from objects to return to base geometry (in {windowId})">
                          <span>Clear <span class="underline">O</span>bject Modifiers</span>
                        </div>
                      </div>
                    {/if}
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/consts" alt-id="Constraints" appearance-id="menu item with a right-pointing caret arrow for Constraints (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Modifiers item (in {windowId})" functionality-id="opens the Constraints submenu for adding and managing object constraints (in {windowId})" intent-id="control object behavior through constraints like tracking or following paths (in {windowId})">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-link text-[#888] text-[12px] group-hover/consts:text-white"></i>
                      <span>C<span class="underline">o</span>nstraints</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/consts:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/track" alt-id="Track" appearance-id="menu item with a right-pointing caret arrow for Track (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Constraints item (in {windowId})" functionality-id="opens the Track submenu for setting up tracking constraints between objects (in {windowId})" intent-id="make one object automatically point toward or follow another object (in {windowId})">
                    <div class="flex items-center gap-[10px]">
                      <div class="w-[12px]"></div> <!-- spacer -->
                      <span>Trac<span class="underline">k</span></span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/track:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/linktrans" alt-id="Link/Transfer Data" appearance-id="menu item with a right-pointing caret arrow for Link/Transfer Data (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Track item (in {windowId})" functionality-id="opens the Link/Transfer Data submenu for sharing data between objects (in {windowId})" intent-id="reuse materials, meshes, or other data from one object on another (in {windowId})">
                    <div class="flex items-center gap-[10px]">
                      <div class="w-[12px]"></div> <!-- spacer -->
                      <span><span class="underline">L</span>ink/Transfer Data</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-[#888] text-[11px] font-mono group-hover/linktrans:text-white">⌘ L</span>
                      <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/linktrans:text-white"></i>
                    </div>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/shades" alt-id="Shade Smooth" appearance-id="menu item text: Shade Smooth for Shade Smooth (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Link/Transfer Data item (in {windowId})" functionality-id="applies smooth shading to the selected objects by interpolating face normals (in {windowId})" intent-id="make the object surface appear smooth without subdividing the geometry for Shade Smooth (in {windowId})">
                    <span><span class="underline">S</span>hade Smooth</span>
                  </div>
                  <div class="px-5 py-[3px] text-[#888] cursor-default flex items-center justify-between group/shadea" alt-id="Shade Auto Smooth" appearance-id="grayed out menu item text: Shade Auto Smooth (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Shade Smooth item (in {windowId})" functionality-id="automatically applies smooth shading based on edge angle threshold (currently unavailable) (in {windowId})" intent-id="blend smooth and flat shading based on geometry angle automatically for Shade Auto Smooth (in {windowId})">
                    <span>Shade Auto Smooth</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/shadef" alt-id="Shade Flat" appearance-id="menu item text: Shade Flat for Shade Flat (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Shade Auto Smooth item (in {windowId})" functionality-id="applies flat shading to the selected objects showing individual facets (in {windowId})" intent-id="make the object surface appear faceted for stylized or low-poly rendering for Shade Flat (in {windowId})">
                    <span>Shade <span class="underline">F</span>lat</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] {isViewportOptionsObjectAnimationOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/anim relative" alt-id="Animation" appearance-id="menu item with a right-pointing caret arrow, highlighted when submenu is open for Animation (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Shade Flat item (in {windowId})" functionality-id="opens the Animation submenu for keyframing and animation operations (in {windowId})" intent-id="access tools for animating object transforms and properties (in {windowId})" on:click|stopPropagation={() => { isViewportOptionsObjectAnimationOpen = !isViewportOptionsObjectAnimationOpen; updateOpenParam(); }}>
                    <span><span class="underline">A</span>nimation</span>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsObjectAnimationOpen ? 'text-white' : 'text-[#888] group-hover/anim:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsObjectAnimationOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[300px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Animation nested menu" appearance-id="dark dropdown panel listing animation operations (in {windowId})" location-id="to the right of the Animation item in the Viewport Options Object submenu (in {windowId})" functionality-id="contains keyframe insertion, deletion, and action baking operations (in {windowId})" intent-id="provide quick access to animation workflow tools from the viewport (in {windowId})">
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/inskey" alt-id="Insert Keyframe" appearance-id="menu item text: Insert Keyframe with keyboard shortcut I (in {windowId})" location-id="first item in the Animation nested menu (Viewport Options > Object) (in {windowId})" functionality-id="inserts a keyframe for the selected property at the current frame (in {windowId})" intent-id="record the current state of the object for animation playback (in {windowId})">
                          <span><span class="underline">I</span>nsert Keyframe</span>
                          <span class="text-[#888] text-[11px] font-mono group-hover/inskey:text-white">I</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/inskeyset" alt-id="Insert Keyframe with Keying Set..." appearance-id="menu item text: Insert Keyframe with Keying Set... with keyboard shortcut K for Insert Keyframe with Keying Set... (in {windowId})" location-id="second item in the Animation nested menu (Viewport Options > Object) (in {windowId})" functionality-id="inserts a keyframe using the active keying set for batch property recording (in {windowId})" intent-id="record multiple object properties simultaneously using a predefined keying set (in {windowId})">
                          <span>Insert <span class="underline">K</span>eyframe with Keying Set...</span>
                          <span class="text-[#888] text-[11px] font-mono group-hover/inskeyset:text-white">K</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/delkey" alt-id="Delete Keyframes..." appearance-id="menu item text: Delete Keyframes... (in {windowId})" location-id="third item in the Animation nested menu (Viewport Options > Object) (in {windowId})" functionality-id="removes keyframes from the selected objects at the current frame (in {windowId})" intent-id="clear recorded animation states at a specific point in time (in {windowId})">
                          <span><span class="underline">D</span>elete Keyframes...</span>
                          <span class="text-[#888] text-[11px] font-mono group-hover/delkey:text-white">⌥ I</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/clearkey" alt-id="Clear Keyframes..." appearance-id="menu item text: Clear Keyframes... (in {windowId})" location-id="fourth item in the Animation nested menu (Viewport Options > Object) (in {windowId})" functionality-id="removes all keyframes from the selected objects for the selected property (in {windowId})" intent-id="completely erase animation data from the object's properties (in {windowId})">
                          <span><span class="underline">C</span>lear Keyframes...</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/changekeyset" alt-id="Change Keying Set..." appearance-id="menu item text: Change Keying Set... with keyboard shortcut Shift K (in {windowId})" location-id="fifth item in the Animation nested menu (Viewport Options > Object) (in {windowId})" functionality-id="opens the keying set selector for changing which properties get keyframed (in {windowId})" intent-id="customize which object properties are recorded when inserting keyframes (in {windowId})">
                          <span>Change Keying <span class="underline">S</span>et...</span>
                          <span class="text-[#888] text-[11px] font-mono group-hover/changekeyset:text-white">⇧ K</span>
                        </div>
                        
                        <div class="my-1 border-t border-[#333]"></div>
                        
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/bakeaction" alt-id="Bake Action..." appearance-id="menu item text: Bake Action... (in {windowId})" location-id="sixth item in the Animation nested menu (Viewport Options > Object) (in {windowId})" functionality-id="bakes the current animation to a dense keyframe action (in {windowId})" intent-id="convert procedural or constraint-based animation into explicit keyframes (in {windowId})">
                          <span><span class="underline">B</span>ake Action...</span>
                        </div>
                        <div class="px-5 py-[3px] text-[#888] cursor-default flex items-center justify-between group/bakeobj" alt-id="Bake Object Transform to Grease Pencil..." appearance-id="grayed out menu item text: Bake Object Transform to Grease Pencil... (in {windowId})" location-id="seventh item in the Animation nested menu (Viewport Options > Object) (in {windowId})" functionality-id="bakes object transforms to Grease Pencil strokes (currently unavailable) (in {windowId})" intent-id="convert 3D object animation into Grease Pencil 2D animation data (in {windowId})">
                          <span>Bake <span class="underline">O</span>bject Transform to Grease Pencil...</span>
                        </div>
                        <div class="px-5 py-[3px] text-[#888] cursor-default flex items-center justify-between group/replaction" alt-id="Replace Action" appearance-id="grayed out menu item text: Replace Action (in {windowId})" location-id="eighth item in the Animation nested menu (Viewport Options > Object) (in {windowId})" functionality-id="replaces the current action with a different one (currently unavailable) (in {windowId})" intent-id="swap the animation action on the object (in {windowId})">
                          <span><span class="underline">R</span>eplace Action</span>
                        </div>
                        <div class="px-5 py-[3px] text-[#888] cursor-default flex items-center justify-between group/replnewaction" alt-id="Replace with new Action" appearance-id="grayed out menu item text: Replace with new Action (in {windowId})" location-id="ninth item in the Animation nested menu (Viewport Options > Object) (in {windowId})" functionality-id="creates a new empty action and assigns it to the object (currently unavailable) (in {windowId})" intent-id="start a fresh animation action on the object (in {windowId})">
                          <span>Replace <span class="underline">w</span>ith new Action</span>
                        </div>
                      </div>
                    {/if}
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/rigid" alt-id="Rigid Body" appearance-id="menu item with a right-pointing caret arrow for Rigid Body (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Animation item (in {windowId})" functionality-id="opens the Rigid Body submenu for adding or removing rigid body physics simulation (in {windowId})" intent-id="enable physics-based collision and dynamics for the selected object (in {windowId})">
                    <span>Rigid <span class="underline">B</span>ody</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/rigid:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/quick" alt-id="Quick Effects" appearance-id="menu item with a right-pointing caret arrow for Quick Effects (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Rigid Body item (in {windowId})" functionality-id="opens the Quick Effects submenu with one-click particle and physics setups (in {windowId})" intent-id="rapidly apply smoke, fire, or other effect presets to the object (in {windowId})">
                    <span><span class="underline">Q</span>uick Effects</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/quick:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/conv" alt-id="Convert" appearance-id="menu item with a right-pointing caret arrow for Convert (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Quick Effects item (in {windowId})" functionality-id="opens the Convert submenu for converting the object to a different data type (in {windowId})" intent-id="change the object type such as converting a curve to a mesh (in {windowId})">
                    <span>Conv<span class="underline">e</span>rt</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/conv:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/showhide" alt-id="Show/Hide" appearance-id="menu item with a right-pointing caret arrow for Show/Hide (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Convert item (in {windowId})" functionality-id="opens the Show/Hide submenu for toggling object visibility in the viewport (in {windowId})" intent-id="control which objects are visible during the current editing session (in {windowId})">
                    <span>Show/<span class="underline">H</span>ide</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/showhide:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/cleanup" alt-id="Clean Up" appearance-id="menu item with a right-pointing caret arrow for Clean Up (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Show/Hide item (in {windowId})" functionality-id="opens the Clean Up submenu for removing unused object data (in {windowId})" intent-id="remove orphaned data-blocks and clean up the scene's data (in {windowId})">
                    <span>Clean <span class="underline">U</span>p</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/cleanup:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/del" alt-id="Delete" appearance-id="menu item text: Delete with keyboard shortcut X for Delete (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Clean Up item (in {windowId})" functionality-id="deletes the selected objects from the scene (in {windowId})" intent-id="permanently remove objects from the current Blender scene (in {windowId})">
                    <span><span class="underline">D</span>elete</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/del:text-white">X</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/delglob" alt-id="Delete Global" appearance-id="menu item text: Delete Global with keyboard shortcut (in {windowId})" location-id="Object submenu in the Viewport Options menu, below the Delete item (in {windowId})" functionality-id="deletes the selected objects globally including from all scenes (in {windowId})" intent-id="remove objects from every scene they appear in, not just the current one (in {windowId})">
                    <span>Delete <span class="underline">G</span>lobal</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/delglob:text-white">⇧ X</span>
                  </div>
                </div>
              {/if}
            </div>
          </div>
        {/if}
      </div>
    </div>
    
    <!-- Middle tools -->
    <div class="flex flex-1 items-center justify-center gap-2">
      <div class="flex items-center gap-0.5 text-[#a0a0a0]">
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-l" alt-id="Transform Orientation: Global" appearance-id="small button showing compass icon and the text Global, part of a button pair (in {windowId})" location-id="left side of the 3D Viewport header, after the interaction mode selector (in {windowId})" functionality-id="sets and displays the active transformation orientation space (in {windowId})" intent-id="control whether transformations are applied in global, local, or custom space (in {windowId})">
          <i class="fa-light fa-arrows-up-down-left-right text-[12px]"></i>
          <span class="text-[#ccc]">Global</span>
          <i class="fa-solid fa-chevron-down text-[8px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-r border-l-0" alt-id="Transform Pivot Point" appearance-id="small button showing a dot-in-circle icon indicating the current pivot, part of a button pair (in {windowId})" location-id="3D Viewport header, right of the Transform Orientation button (in {windowId})" functionality-id="sets and displays the pivot point used when rotating or scaling objects (in {windowId})" intent-id="control the center point around which transformations are applied (in {windowId})">
          <i class="fa-solid fa-link text-[12px]"></i>
          <i class="fa-solid fa-chevron-down text-[8px]"></i>
        </div>
      </div>
      
      <div class="flex items-center gap-0.5 text-[#a0a0a0]">
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-l" alt-id="Snap toggle" appearance-id="small button with a magnet icon, part of a button pair, active state indicated by blue highlight (in {windowId})" location-id="3D Viewport header, right of the Transform Pivot Point button (in {windowId})" functionality-id="enables or disables snapping when moving, rotating, or scaling objects (in {windowId})" intent-id="constrain object movement to snap targets for precise placement (in {windowId})">
          <i class="fa-solid fa-magnet text-[#ccc] text-[12px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-r border-l-0" alt-id="Snap options dropdown" appearance-id="small chevron-down button to the right of the Snap toggle button (in {windowId})" location-id="3D Viewport header, right of the Snap toggle (in {windowId})" functionality-id="opens the snap options panel for configuring snap targets and settings (in {windowId})" intent-id="customize snap behavior including target type and alignment options (in {windowId})">
          <i class="fa-solid fa-square-dashed text-[12px]"></i>
          <i class="fa-solid fa-chevron-down text-[8px]"></i>
        </div>
      </div>
      
      <div class="flex items-center gap-0.5 text-[#a0a0a0]">
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-l" alt-id="Proportional Editing toggle" appearance-id="small button with a circle-with-dot icon, part of a button pair (in {windowId})" location-id="3D Viewport header, right of the Snap buttons (in {windowId})" functionality-id="enables or disables proportional editing for smooth falloff transformations (in {windowId})" intent-id="influence nearby unselected vertices with a falloff radius during editing (in {windowId})">
          <i class="fa-solid fa-bullseye text-[#ccc] text-[12px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-r border-l-0" alt-id="Proportional Editing options dropdown" appearance-id="small chevron-down button to the right of the Proportional Editing toggle (in {windowId})" location-id="3D Viewport header, right of the Proportional Editing toggle (in {windowId})" functionality-id="opens options for configuring proportional editing falloff type and mode (in {windowId})" intent-id="customize how proportional editing influences surrounding vertices (in {windowId})">
          <i class="fa-regular fa-bell text-[12px]"></i>
          <i class="fa-solid fa-chevron-down text-[8px]"></i>
        </div>
      </div>
    </div>
    
    <!-- Right side tools -->
    <div class="flex items-center gap-2 text-[#a0a0a0]">
      <!-- Object Types Visibility -->
      <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded" alt-id="Object Types Visibility settings" appearance-id="small button with a filter icon (in {windowId})" location-id="3D Viewport header, right side before the overlay and gizmo buttons (in {windowId})" functionality-id="opens a panel for filtering which object types are visible in the viewport (in {windowId})" intent-id="control the visibility of meshes, lights, cameras, and other object types (in {windowId})">
        <i class="fa-solid fa-eye text-[12px]"></i>
        <i class="fa-solid fa-chevron-down text-[8px]"></i>
      </div>

      <!-- Viewport Gizmos and Overlays -->
      <div class="flex items-center gap-0.5">
        <div class="flex items-center gap-1 cursor-pointer text-white bg-[#4772b3] border border-[#4772b3] px-2 py-[2px] rounded-l" alt-id="Viewport Gizmos toggle" appearance-id="small blue highlighted button with a direction arrows icon, part of a button pair, currently active (in {windowId})" location-id="3D Viewport header, right side, left of the Viewport Overlays button (in {windowId})" functionality-id="enables or disables the display of viewport gizmos like the navigation axes (in {windowId})" intent-id="show or hide interactive gizmo overlays in the 3D viewport (in {windowId})">
          <i class="fa-solid fa-bow-arrow text-[12px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-1 py-[2px] border-l-0" alt-id="Viewport Gizmos dropdown" appearance-id="small chevron-down button to the right of the Viewport Gizmos toggle (in {windowId})" location-id="3D Viewport header, right side, between the Viewport Gizmos toggle and Viewport Overlays toggle (in {windowId})" functionality-id="opens the Viewport Gizmos panel for configuring which gizmos are shown (in {windowId})" intent-id="customize the visibility of individual gizmo types in the viewport (in {windowId})">
          <i class="fa-solid fa-chevron-down text-[8px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer text-white bg-[#4772b3] border border-[#4772b3] px-2 py-[2px] border-l-0" alt-id="Viewport Overlays toggle" appearance-id="small blue highlighted button with overlapping circles icon, part of a button pair, currently active (in {windowId})" location-id="3D Viewport header, right side, right of the Viewport Gizmos dropdown (in {windowId})" functionality-id="enables or disables all viewport overlays like grid, axes, and object outlines (in {windowId})" intent-id="toggle informational overlay displays in the 3D viewport (in {windowId})">
          <i class="fa-solid fa-layer-group text-[12px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-1 py-[2px] rounded-r border-l-0" alt-id="Viewport Overlays dropdown" appearance-id="small chevron-down button to the right of the Viewport Overlays toggle (in {windowId})" location-id="3D Viewport header, rightmost button group, right of the Viewport Overlays toggle (in {windowId})" functionality-id="opens the Viewport Overlays panel for configuring which overlays are displayed (in {windowId})" intent-id="customize which overlay types and annotations are visible in the viewport (in {windowId})">
          <i class="fa-solid fa-chevron-down text-[8px]"></i>
        </div>
      </div>
      
      <!-- Toggle X-Ray -->
      <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded" alt-id="Toggle X-Ray" appearance-id="small button with an overlapping squares icon (in {windowId})" location-id="3D Viewport header, right side, between the Viewport Overlays button and the shading mode buttons (in {windowId})" functionality-id="toggles X-Ray mode to see through objects and select hidden geometry (in {windowId})" intent-id="enable see-through rendering for selecting occluded vertices and faces (in {windowId})">
        <i class="fa-solid fa-clone text-[12px]"></i>
      </div>

      <!-- Shading Modes -->
      <div class="flex items-center gap-0.5">
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-l" alt-id="Wireframe shading mode" appearance-id="small button with a wireframe cube icon, part of the four-button shading mode group (in {windowId})" location-id="3D Viewport header, rightmost area, first of the four shading mode buttons (in {windowId})" functionality-id="switches the viewport to wireframe display mode showing only mesh edges (in {windowId})" intent-id="view object structure without surfaces for topology analysis and selection through geometry (in {windowId})">
          <i class="fa-light fa-globe text-[12px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] border-l-0" alt-id="Solid shading mode" appearance-id="small button with a filled sphere icon, part of the four-button shading mode group (in {windowId})" location-id="3D Viewport header, rightmost area, second of the four shading mode buttons (in {windowId})" functionality-id="switches the viewport to solid shading mode with basic MatCap lighting (in {windowId})" intent-id="view objects with opaque surfaces for modeling and general editing work (in {windowId})">
          <i class="fa-solid fa-circle text-[12px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer text-white bg-[#4772b3] border border-[#4772b3] px-2 py-[2px] border-l-0" alt-id="Material Preview shading mode, currently active" appearance-id="small blue highlighted button with a half-sphere icon, part of the four-button shading mode group, currently active (in {windowId})" location-id="3D Viewport header, rightmost area, third of the four shading mode buttons (in {windowId})" functionality-id="switches the viewport to material preview mode using the world HDRI for lighting (in {windowId})" intent-id="evaluate material appearance and shading before final rendering (in {windowId})">
          <i class="fa-solid fa-circle-half-stroke text-[12px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-r border-l-0" alt-id="Rendered shading mode" appearance-id="small button with a camera-shutter-like icon, part of the four-button shading mode group (in {windowId})" location-id="3D Viewport header, rightmost area, fourth of the four shading mode buttons (in {windowId})" functionality-id="switches the viewport to rendered mode showing the full render engine output (in {windowId})" intent-id="preview the final render result with lights, shadows, and materials in real time (in {windowId})">
          <i class="fa-regular fa-circle text-[12px]"></i>
        </div>
      </div>
      
      <!-- Shading dropdown -->
      <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-1 py-[2px] rounded" alt-id="Shading dropdown" appearance-id="small chevron-down button to the right of the shading mode buttons (in {windowId})" location-id="3D Viewport header, far right end, after the shading mode buttons (in {windowId})" functionality-id="opens the shading options panel for configuring viewport rendering settings (in {windowId})" intent-id="customize viewport lighting, color, and background display options (in {windowId})">
        <i class="fa-solid fa-chevron-down text-[8px]"></i>
      </div>
    </div>
  </div>
  
  <!-- Viewport Content -->
  <div class="flex-1 relative overflow-hidden flex items-center justify-center {isMainViewport ? 'bg-[#1c1c1c]' : 'bg-[#333333]'}" alt-id="3D Viewport main area" appearance-id="large dark area filling most of the viewport panel, showing a 3D scene with grid floor (in {windowId})" location-id="center area of the 3D Viewport panel, below the header and above any asset shelves (in {windowId})" functionality-id="displays the 3D scene and accepts mouse interaction for navigation and object manipulation (in {windowId})" intent-id="provide the primary workspace for viewing, selecting, and editing 3D objects (in {windowId})" on:contextmenu={handleViewportContextMenu} on:click={() => { if (isObjectContextMenuOpen || isViewportOptionsDropdownOpen || isViewportOptionsViewOpen || isViewportOptionsSelectOpen || isViewportOptionsAddOpen || isViewportOptionsAddMeshOpen || isViewportOptionsAddCurveOpen || isViewportOptionsAddSurfaceOpen || isViewportOptionsAddMetaballOpen || isViewportOptionsAddVolumeOpen || isViewportOptionsAddLightProbeOpen || isViewportOptionsAddForceFieldOpen || isViewportOptionsObjectOpen || isViewportOptionsObjectTransformOpen || isViewportOptionsObjectSetOriginOpen || isViewportOptionsObjectModifiersOpen || isViewportOptionsObjectModifiersAddOpen || isViewportOptionsObjectAnimationOpen) { isObjectContextMenuOpen = false; isObjectContextMenuConvertToOpen = false; isObjectContextMenuSetOriginOpen = false; isObjectContextMenuMirrorOpen = false; isObjectContextMenuSnapOpen = false; isObjectContextMenuParentOpen = false; isObjectContextMenuMoveToCollectionOpen = false; isObjectContextMenuMoveToCollectionCommonOpen = false; isViewportOptionsDropdownOpen = false; isViewportOptionsViewOpen = false; isViewportOptionsSelectOpen = false; isViewportOptionsAddOpen = false; isViewportOptionsAddMeshOpen = false; isViewportOptionsAddCurveOpen = false; isViewportOptionsAddSurfaceOpen = false; isViewportOptionsAddMetaballOpen = false; isViewportOptionsAddVolumeOpen = false; isViewportOptionsAddLightProbeOpen = false; isViewportOptionsAddForceFieldOpen = false; isViewportOptionsObjectOpen = false; isViewportOptionsObjectTransformOpen = false; isViewportOptionsObjectSetOriginOpen = false; isViewportOptionsObjectModifiersOpen = false; isViewportOptionsObjectModifiersAddOpen = false; isViewportOptionsObjectAnimationOpen = false; updateOpenParam(); } }}>
    
    <!-- Left Toolbar (T-Panel) -->
    {#if isLeftToolbarCollapsed}
      <div class="absolute left-0 top-4 z-20" alt-id="Collapsed left toolbar handle" appearance-id="narrow vertical tab on the left edge of the viewport when the toolbar is collapsed (in {windowId})" location-id="left edge of the 3D Viewport main area, visible only when toolbar is collapsed, Collapsed left toolbar handle (in {windowId})" functionality-id="indicates the toolbar is collapsed and provides a target area for expanding it (in {windowId})" intent-id="show the user that the left toolbar is hidden and can be expanded (in {windowId})">
        <div class="w-[18px] h-[28px] bg-[#282828] bg-opacity-95 rounded-r flex items-center justify-center cursor-pointer hover:bg-[#333] border border-[#1f1f1f] border-l-0 shadow-md" on:click={() => isLeftToolbarCollapsed = false} alt-id="Expand left toolbar button" appearance-id="small rectangular button on the left edge with a right-pointing chevron icon (in {windowId})" location-id="left edge of the 3D Viewport main area, visible only when toolbar is collapsed, Expand left toolbar button (in {windowId})" functionality-id="expands the left toolbar to show the tool buttons (in {windowId})" intent-id="restore access to the viewport tools panel after it has been collapsed (in {windowId})">
          <i class="fa-solid fa-chevron-right text-[10px] text-[#a0a0a0]"></i>
        </div>
      </div>
    {:else}
      <div class="absolute left-0 top-2 flex flex-col gap-[6px] z-20 pl-[4px] {isLeftToolbarExpanded ? 'w-[120px]' : 'w-[50px]'} transition-[width] duration-150 group/toolbar" alt-id="Viewport left toolbar" appearance-id="vertical panel on the left side of the viewport containing tool buttons organized in groups (in {windowId})" location-id="left side of the 3D Viewport main area, overlaid on the viewport content (in {windowId})" functionality-id="houses the tool buttons for the current interaction mode such as Select, Move, Rotate, and Scale (in {windowId})" intent-id="provide quick access to the active tools for the current editing mode (in {windowId})">
        
        <!-- Invisible Resize Handle on the right edge -->
        <div class="absolute right-[-6px] top-0 w-[12px] h-full cursor-ew-resize z-30" on:mousedown={(e) => {
          if (isLeftToolbarExpanded) {
            const startX = e.clientX;
            const onMouseMove = (moveEvent) => {
              if (startX - moveEvent.clientX > 20) {
                isLeftToolbarExpanded = false;
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
              }
            };
            const onMouseUp = () => {
              document.removeEventListener('mousemove', onMouseMove);
              document.removeEventListener('mouseup', onMouseUp);
            };
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
          } else {
            const startX = e.clientX;
            const onMouseMove = (moveEvent) => {
              if (moveEvent.clientX - startX > 20) {
                isLeftToolbarExpanded = true;
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
              } else if (startX - moveEvent.clientX > 20) {
                isLeftToolbarCollapsed = true;
                isLeftToolbarExpanded = false;
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
              }
            };
            const onMouseUp = () => {
              document.removeEventListener('mousemove', onMouseMove);
              document.removeEventListener('mouseup', onMouseUp);
            };
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
          }
        }} alt-id="Invisible resize left toolbar handle" appearance-id="invisible drag handle on the right edge of the toolbar for resizing (in {windowId})" location-id="right edge of the left toolbar panel in the 3D Viewport (in {windowId})" functionality-id="allows the user to drag and resize the width of the left toolbar (in {windowId})" intent-id="let the user customize the toolbar width to show more or fewer tool labels (in {windowId})"></div>

      <!-- Toolbar Content Container -->
      <div class="flex flex-col gap-[6px] h-full overflow-y-auto overflow-x-hidden" style="scrollbar-width: none; -ms-overflow-style: none;">
        <style>
          .flex-col::-webkit-scrollbar {
            display: none;
          }
        </style>
        
        {#if interactionMode === 'sculpt'}
          <!-- Sculpt Mode Toolbar -->
          <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-full pb-1 mb-4" alt-id="Sculpt Mode Tools" appearance-id="vertical panel containing tool buttons for sculpt mode, grouped by category with section headers (in {windowId})" location-id="left toolbar area of the 3D Viewport, visible only in Sculpt Mode (in {windowId})" functionality-id="displays all sculpt brushes and tools organized by category such as Draw, Smooth, and Pinch (in {windowId})" intent-id="provide access to sculpting tools for shaping and detailing the mesh surface (in {windowId})">
            
            <!-- Brush Tools -->
            <div class="flex flex-col">
              {#each [
                { name: 'Brush', icon: 'fa-paintbrush', shortcut: '⇧ Space Bar, 1' },
                { name: 'Paint', icon: 'fa-paint-roller', shortcut: '' },
                { name: 'Mask', icon: 'fa-mask', shortcut: 'M' },
                { name: 'Draw Face Sets', icon: 'fa-shapes', shortcut: '' }
              ] as tool}
                <div class="w-full h-[36px] {activeSculptTool === tool.name ? 'bg-[#4772b3] text-white' : 'text-[#ccc] hover:bg-[#333] hover:text-white'} flex items-center cursor-pointer relative" on:click={() => handleSculptToolClick(tool.name)} alt-id="{tool.name} button" appearance-id="tool button showing the tool icon, highlighted in blue when active for {tool.name} button (in {windowId})" location-id="sculpt mode left toolbar in the 3D Viewport, {tool.name} button (in {windowId})" functionality-id="activates the named sculpt brush tool when clicked for {tool.name} button (in {windowId})" intent-id="select the sculpt tool to use when painting on the mesh surface for {tool.name} button (in {windowId})">
                  <div class="w-[50px] h-[36px] flex items-center justify-center shrink-0">
                    <i class="fa-solid {tool.icon} text-[14px] pointer-events-none"></i>
                  </div>
                  {#if isLeftToolbarExpanded}
                    <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">{tool.name}</span>
                  {/if}
                  {#if activeTooltip === tool.name.toLowerCase().replace(/ /g, '-') && !isLeftToolbarExpanded}
                    <div class="absolute left-[54px] top-1/2 -translate-y-1/2 bg-[#1a1a1a] text-white px-3 py-2 rounded shadow-[0_2px_8px_rgba(0,0,0,0.5)] border border-[#2a2a2a] z-50 whitespace-nowrap flex flex-col gap-1" alt-id="{tool.name} tool tooltip" appearance-id="floating tooltip panel showing the tool name and keyboard shortcut for {tool.name} tool tooltip (in {windowId})" location-id="to the right of the tool button in the sculpt mode left toolbar, visible on hover, {tool.name} tool tooltip (in {windowId})" functionality-id="displays the name and shortcut of the hovered sculpt tool when toolbar is collapsed for {tool.name} tool tooltip (in {windowId})" intent-id="provide shortcut information for sculpt tools without needing to expand the toolbar for {tool.name} tool tooltip (in {windowId})">
                       <div class="text-[13px] pointer-events-none">{tool.name}</div>
                       {#if tool.shortcut}
                         <div class="text-[11px] text-[#a0a0a0]">Shortcut: {tool.shortcut}</div>
                       {/if}
                    </div>
                  {/if}
                </div>
              {/each}
            </div>

            <!-- Divider -->
            <div class="w-10/12 h-[1px] bg-[#1f1f1f] mx-auto my-2"></div>

            <!-- Box Tools -->
            <div class="flex flex-col">
              {#each [
                { name: 'Box Mask', icon: 'fa-vector-square', shortcut: 'B' },
                { name: 'Box Hide', icon: 'fa-eye-slash', shortcut: 'H' },
                { name: 'Box Face Set', icon: 'fa-square', shortcut: '' },
                { name: 'Box Trim', icon: 'fa-crop-simple', shortcut: '' },
                { name: 'Line Project', icon: 'fa-slash', shortcut: '' }
              ] as tool}
                <div class="w-full h-[36px] flex items-center {activeSculptTool === tool.name ? 'bg-[#4772b3] text-white' : 'text-[#ccc] hover:bg-[#333] hover:text-white'} cursor-pointer relative" on:click={() => handleSculptToolClick(tool.name)} alt-id="{tool.name} button" appearance-id="tool button showing the tool icon, highlighted in blue when active for {tool.name} button (in {windowId})" location-id="sculpt mode left toolbar in the 3D Viewport, {tool.name} button (in {windowId})" functionality-id="activates the named sculpt brush tool when clicked for {tool.name} button (in {windowId})" intent-id="select the sculpt tool to use when painting on the mesh surface for {tool.name} button (in {windowId})">
                  <div class="w-[50px] h-[36px] flex items-center justify-center shrink-0">
                    <i class="fa-solid {tool.icon} text-[14px] pointer-events-none"></i>
                  </div>
                  {#if isLeftToolbarExpanded}
                    <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">{tool.name}</span>
                  {/if}
                  {#if activeTooltip === tool.name.toLowerCase().replace(/ /g, '-') && !isLeftToolbarExpanded}
                    <div class="absolute left-[54px] top-1/2 -translate-y-1/2 bg-[#1a1a1a] text-white px-3 py-2 rounded shadow-[0_2px_8px_rgba(0,0,0,0.5)] border border-[#2a2a2a] z-50 whitespace-nowrap flex flex-col gap-1" alt-id="{tool.name} tool tooltip" appearance-id="floating tooltip panel showing the tool name and keyboard shortcut for {tool.name} tool tooltip (in {windowId})" location-id="to the right of the tool button in the sculpt mode left toolbar, visible on hover, {tool.name} tool tooltip (in {windowId})" functionality-id="displays the name and shortcut of the hovered sculpt tool when toolbar is collapsed for {tool.name} tool tooltip (in {windowId})" intent-id="provide shortcut information for sculpt tools without needing to expand the toolbar for {tool.name} tool tooltip (in {windowId})">
                       <div class="text-[13px] pointer-events-none">{tool.name}</div>
                       {#if tool.shortcut}
                         <div class="text-[11px] text-[#a0a0a0]">Shortcut: {tool.shortcut}</div>
                       {/if}
                    </div>
                  {/if}
                </div>
              {/each}
            </div>

            <!-- Divider -->
            <div class="w-10/12 h-[1px] bg-[#1f1f1f] mx-auto my-2"></div>

            <!-- Filters -->
            <div class="flex flex-col">
              {#each [
                { name: 'Mesh Filter', icon: 'fa-filter', shortcut: '' },
                { name: 'Cloth Filter', icon: 'fa-shirt', shortcut: '' },
                { name: 'Color Filter', icon: 'fa-palette', shortcut: '' }
              ] as tool}
                <div class="w-full h-[36px] flex items-center {activeSculptTool === tool.name ? 'bg-[#4772b3] text-white' : 'text-[#ccc] hover:bg-[#333] hover:text-white'} cursor-pointer relative" on:click={() => handleSculptToolClick(tool.name)} alt-id="{tool.name} button" appearance-id="tool button showing the tool icon, highlighted in blue when active for {tool.name} button (in {windowId})" location-id="sculpt mode left toolbar in the 3D Viewport, {tool.name} button (in {windowId})" functionality-id="activates the named sculpt brush tool when clicked for {tool.name} button (in {windowId})" intent-id="select the sculpt tool to use when painting on the mesh surface for {tool.name} button (in {windowId})">
                  <div class="w-[50px] h-[36px] flex items-center justify-center shrink-0">
                    <i class="fa-solid {tool.icon} text-[14px] pointer-events-none"></i>
                  </div>
                  {#if isLeftToolbarExpanded}
                    <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">{tool.name}</span>
                  {/if}
                  {#if activeTooltip === tool.name.toLowerCase().replace(/ /g, '-') && !isLeftToolbarExpanded}
                    <div class="absolute left-[54px] top-1/2 -translate-y-1/2 bg-[#1a1a1a] text-white px-3 py-2 rounded shadow-[0_2px_8px_rgba(0,0,0,0.5)] border border-[#2a2a2a] z-50 whitespace-nowrap flex flex-col gap-1" alt-id="{tool.name} tool tooltip" appearance-id="floating tooltip panel showing the tool name and keyboard shortcut for {tool.name} tool tooltip (in {windowId})" location-id="to the right of the tool button in the sculpt mode left toolbar, visible on hover, {tool.name} tool tooltip (in {windowId})" functionality-id="displays the name and shortcut of the hovered sculpt tool when toolbar is collapsed for {tool.name} tool tooltip (in {windowId})" intent-id="provide shortcut information for sculpt tools without needing to expand the toolbar for {tool.name} tool tooltip (in {windowId})">
                       <div class="text-[13px] pointer-events-none">{tool.name}</div>
                       {#if tool.shortcut}
                         <div class="text-[11px] text-[#a0a0a0]">Shortcut: {tool.shortcut}</div>
                       {/if}
                    </div>
                  {/if}
                </div>
              {/each}
            </div>

            <!-- Divider -->
            <div class="w-10/12 h-[1px] bg-[#1f1f1f] mx-auto my-2"></div>

            <!-- Sets -->
            <div class="flex flex-col">
              {#each [
                { name: 'Edit Face Set', icon: 'fa-pen-to-square', shortcut: '' },
                { name: 'Mask by Color', icon: 'fa-eye-dropper', shortcut: '' }
              ] as tool}
                <div class="w-full h-[36px] flex items-center {activeSculptTool === tool.name ? 'bg-[#4772b3] text-white' : 'text-[#ccc] hover:bg-[#333] hover:text-white'} cursor-pointer relative" on:click={() => handleSculptToolClick(tool.name)} alt-id="{tool.name} button" appearance-id="tool button showing the tool icon, highlighted in blue when active for {tool.name} button (in {windowId})" location-id="sculpt mode left toolbar in the 3D Viewport, {tool.name} button (in {windowId})" functionality-id="activates the named sculpt brush tool when clicked for {tool.name} button (in {windowId})" intent-id="select the sculpt tool to use when painting on the mesh surface for {tool.name} button (in {windowId})">
                  <div class="w-[50px] h-[36px] flex items-center justify-center shrink-0">
                    <i class="fa-solid {tool.icon} text-[14px] pointer-events-none"></i>
                  </div>
                  {#if isLeftToolbarExpanded}
                    <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">{tool.name}</span>
                  {/if}
                  {#if activeTooltip === tool.name.toLowerCase().replace(/ /g, '-') && !isLeftToolbarExpanded}
                    <div class="absolute left-[54px] top-1/2 -translate-y-1/2 bg-[#1a1a1a] text-white px-3 py-2 rounded shadow-[0_2px_8px_rgba(0,0,0,0.5)] border border-[#2a2a2a] z-50 whitespace-nowrap flex flex-col gap-1" alt-id="{tool.name} tool tooltip" appearance-id="floating tooltip panel showing the tool name and keyboard shortcut for {tool.name} tool tooltip (in {windowId})" location-id="to the right of the tool button in the sculpt mode left toolbar, visible on hover, {tool.name} tool tooltip (in {windowId})" functionality-id="displays the name and shortcut of the hovered sculpt tool when toolbar is collapsed for {tool.name} tool tooltip (in {windowId})" intent-id="provide shortcut information for sculpt tools without needing to expand the toolbar for {tool.name} tool tooltip (in {windowId})">
                       <div class="text-[13px] pointer-events-none">{tool.name}</div>
                       {#if tool.shortcut}
                         <div class="text-[11px] text-[#a0a0a0]">Shortcut: {tool.shortcut}</div>
                       {/if}
                    </div>
                  {/if}
                </div>
              {/each}
            </div>

            <!-- Divider -->
            <div class="w-10/12 h-[1px] bg-[#1f1f1f] mx-auto my-2"></div>

            <!-- Transform Tools -->
            <div class="flex flex-col">
              {#each [
                { name: 'Move', icon: 'fa-arrows-up-down-left-right', shortcut: 'G' },
                { name: 'Rotate', icon: 'fa-rotate-right', shortcut: 'R' },
                { name: 'Scale', icon: 'fa-expand', shortcut: 'S' },
                { name: 'Transform', icon: 'fa-arrows-up-down-left-right', shortcut: '' }
              ] as tool}
                <div class="w-full h-[36px] flex items-center {activeSculptTool === tool.name ? 'bg-[#4772b3] text-white' : 'text-[#ccc] hover:bg-[#333] hover:text-white'} cursor-pointer relative" on:click={() => handleSculptToolClick(tool.name)} alt-id="{tool.name} button" appearance-id="tool button showing the tool icon, highlighted in blue when active for {tool.name} button (in {windowId})" location-id="sculpt mode left toolbar in the 3D Viewport, {tool.name} button (in {windowId})" functionality-id="activates the named sculpt brush tool when clicked for {tool.name} button (in {windowId})" intent-id="select the sculpt tool to use when painting on the mesh surface for {tool.name} button (in {windowId})">
                  <div class="w-[50px] h-[36px] flex items-center justify-center shrink-0">
                    <i class="fa-solid {tool.icon} text-[14px] pointer-events-none"></i>
                  </div>
                  {#if isLeftToolbarExpanded}
                    <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">{tool.name}</span>
                  {/if}
                  {#if activeTooltip === tool.name.toLowerCase().replace(/ /g, '-') && !isLeftToolbarExpanded}
                    <div class="absolute left-[54px] top-1/2 -translate-y-1/2 bg-[#1a1a1a] text-white px-3 py-2 rounded shadow-[0_2px_8px_rgba(0,0,0,0.5)] border border-[#2a2a2a] z-50 whitespace-nowrap flex flex-col gap-1" alt-id="{tool.name} tool tooltip" appearance-id="floating tooltip panel showing the tool name and keyboard shortcut for {tool.name} tool tooltip (in {windowId})" location-id="to the right of the tool button in the sculpt mode left toolbar, visible on hover, {tool.name} tool tooltip (in {windowId})" functionality-id="displays the name and shortcut of the hovered sculpt tool when toolbar is collapsed for {tool.name} tool tooltip (in {windowId})" intent-id="provide shortcut information for sculpt tools without needing to expand the toolbar for {tool.name} tool tooltip (in {windowId})">
                       <div class="text-[13px] pointer-events-none">{tool.name}</div>
                       {#if tool.shortcut}
                         <div class="text-[11px] text-[#a0a0a0]">Shortcut: {tool.shortcut}</div>
                       {/if}
                    </div>
                  {/if}
                </div>
              {/each}
            </div>

            <!-- Divider -->
            <div class="w-10/12 h-[1px] bg-[#1f1f1f] mx-auto my-2"></div>

            <!-- General Tools -->
            <div class="flex flex-col">
              {#each [
                { name: 'Annotate', icon: 'fa-pen', shortcut: '' }
              ] as tool}
                <div class="w-full h-[36px] flex items-center {activeSculptTool === tool.name ? 'bg-[#4772b3] text-white' : 'text-[#ccc] hover:bg-[#333] hover:text-white'} cursor-pointer relative" on:click={() => handleSculptToolClick(tool.name)} alt-id="{tool.name} button" appearance-id="tool button showing the tool icon, highlighted in blue when active for {tool.name} button (in {windowId})" location-id="sculpt mode left toolbar in the 3D Viewport, {tool.name} button (in {windowId})" functionality-id="activates the named sculpt brush tool when clicked for {tool.name} button (in {windowId})" intent-id="select the sculpt tool to use when painting on the mesh surface for {tool.name} button (in {windowId})">
                  <div class="w-[50px] h-[36px] flex items-center justify-center shrink-0">
                    <i class="fa-solid {tool.icon} text-[14px] pointer-events-none"></i>
                  </div>
                  {#if isLeftToolbarExpanded}
                    <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">{tool.name}</span>
                  {/if}
                  {#if activeTooltip === tool.name.toLowerCase().replace(/ /g, '-') && !isLeftToolbarExpanded}
                    <div class="absolute left-[54px] top-1/2 -translate-y-1/2 bg-[#1a1a1a] text-white px-3 py-2 rounded shadow-[0_2px_8px_rgba(0,0,0,0.5)] border border-[#2a2a2a] z-50 whitespace-nowrap flex flex-col gap-1" alt-id="{tool.name} tool tooltip" appearance-id="floating tooltip panel showing the tool name and keyboard shortcut for {tool.name} tool tooltip (in {windowId})" location-id="to the right of the tool button in the sculpt mode left toolbar, visible on hover, {tool.name} tool tooltip (in {windowId})" functionality-id="displays the name and shortcut of the hovered sculpt tool when toolbar is collapsed for {tool.name} tool tooltip (in {windowId})" intent-id="provide shortcut information for sculpt tools without needing to expand the toolbar for {tool.name} tool tooltip (in {windowId})">
                       <div class="text-[13px] pointer-events-none">{tool.name}</div>
                       {#if tool.shortcut}
                         <div class="text-[11px] text-[#a0a0a0]">Shortcut: {tool.shortcut}</div>
                       {/if}
                    </div>
                  {/if}
                </div>
              {/each}
            </div>
          </div>




        {:else if interactionMode === 'texture_paint'}
          <!-- Texture Paint Mode Toolbar -->
          <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-full pb-1 mb-4" alt-id="Texture Paint Mode Tools" appearance-id="vertical panel containing tool buttons for texture paint mode (in {windowId})" location-id="left toolbar area of the 3D Viewport, visible only in Texture Paint Mode (in {windowId})" functionality-id="displays all texture painting tools such as Draw, Soften, Smear, and Fill (in {windowId})" intent-id="provide access to painting tools for applying color directly to the object texture (in {windowId})">
            <div class="flex flex-col mb-2">
              {#each [
                { name: 'Brush', icon: 'fa-paintbrush', active: true, hasTriangle: false, extraHTML: '<div class="w-4 h-[2px] bg-[#888] rounded-full mt-0.5 pointer-events-none transform -rotate-12 opacity-80"></div>' },
                { name: 'Blur', icon: 'fa-droplet', active: false, hasTriangle: false, extraHTML: '<div class="w-4 h-[2px] bg-[#888] rounded-full mt-0.5 pointer-events-none transform -rotate-12 opacity-80"></div>' },
                { name: 'Smear', icon: 'fa-hand-pointer', active: false, hasTriangle: false, extraHTML: '<div class="w-4 h-[2px] bg-[#888] rounded-full mt-0.5 pointer-events-none transform -rotate-12 opacity-80"></div>' },
                { name: 'Clone', icon: 'fa-stamp', active: false, hasTriangle: false, extraHTML: '<div class="w-4 h-[2px] bg-[#888] rounded-full mt-0.5 pointer-events-none transform -rotate-12 opacity-80"></div>' },
                { name: 'Fill', icon: 'fa-fill-drip', active: false, hasTriangle: false, extraHTML: '' },
                { name: 'Mask', icon: 'fa-clone', active: false, hasTriangle: false, extraHTML: '<div class="absolute bottom-1 right-1 w-2 h-2 bg-white rounded-tl-[1px] transform -rotate-45 pointer-events-none"></div>' }
              ] as tool}
                <div class="w-full h-[36px] {tool.active ? 'bg-[#4772b3] text-white' : 'text-[#ccc] hover:bg-[#333] hover:text-white'} flex items-center cursor-pointer relative" alt-id="{tool.name} tool" appearance-id="tool button showing the tool icon and name, highlighted when active for {tool.name} tool (in {windowId})" location-id="left toolbar of the 3D Viewport, visible in the current interaction mode, {tool.name} tool (in {windowId})" functionality-id="activates the named paint or edit tool when clicked for {tool.name} tool (in {windowId})" intent-id="select the active tool for the current editing mode for {tool.name} tool (in {windowId})">
                  <div class="w-[50px] h-[36px] flex flex-col items-center justify-center shrink-0 relative">
                    {#if tool.icon}
                      <i class="fa-solid {tool.icon} text-[16px] pointer-events-none"></i>
                    {/if}
                    {#if tool.extraHTML}{@html tool.extraHTML}{/if}
                  </div>
                  {#if isLeftToolbarExpanded}
                    <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">{tool.name}</span>
                  {/if}
                  {#if tool.hasTriangle}
                    <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[4px] border-l-transparent border-b-[4px] border-b-[#888] pointer-events-none"></div>
                  {/if}
                </div>
              {/each}
            </div>

            <div class="w-10/12 h-[1px] bg-[#1f1f1f] mx-auto my-1"></div>

            <div class="flex flex-col mb-2">
              <div class="w-full h-[36px] text-[#ccc] hover:bg-[#333] hover:text-white flex items-center cursor-pointer relative" alt-id="Annotate tool" appearance-id="tool button with a pencil icon for Annotate tool (in {windowId})" location-id="bottom of the left toolbar in the current paint mode in the 3D Viewport, Annotate tool (in {windowId})" functionality-id="activates the Annotate tool for drawing freehand annotations in the viewport for Annotate tool (in {windowId})" intent-id="add non-destructive sketch notes and reference marks directly in the 3D space for Annotate tool (in {windowId})">
                <div class="w-[50px] h-[36px] flex items-center justify-center shrink-0">
                  <div class="relative flex flex-col items-center">
                    <i class="fa-solid fa-pen text-[12px] transform rotate-45 -translate-y-0.5 pointer-events-none"></i>
                    <div class="w-4 h-[2px] bg-[#66cc99] rounded-full mt-0.5 pointer-events-none"></div>
                  </div>
                </div>
                {#if isLeftToolbarExpanded}
                  <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">Annotate</span>
                {/if}
                <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[4px] border-l-transparent border-b-[4px] border-b-[#888] pointer-events-none"></div>
              </div>
            </div>
          </div>

        {:else if interactionMode === 'weight_paint'}
          <!-- Weight Paint Mode Toolbar -->
          <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-full pb-1 mb-4" alt-id="Weight Paint Mode Tools" appearance-id="vertical panel containing tool buttons for weight paint mode (in {windowId})" location-id="left toolbar area of the 3D Viewport, visible only in Weight Paint Mode (in {windowId})" functionality-id="displays all weight painting tools such as Draw, Blur, Average, and Smear (in {windowId})" intent-id="provide access to tools for painting vertex group weights for armature deformation (in {windowId})">
            <div class="flex flex-col mb-2">
              {#each [
                { name: 'Brush', icon: 'fa-paintbrush', active: true, hasTriangle: false, extraHTML: '<div class="w-4 h-[2px] bg-[#888] rounded-full mt-0.5 pointer-events-none transform -rotate-12 opacity-80"></div>' },
                { name: 'Blur', icon: 'fa-droplet', active: false, hasTriangle: false, extraHTML: '<div class="w-4 h-[2px] bg-[#888] rounded-full mt-0.5 pointer-events-none transform -rotate-12 opacity-80"></div>' },
                { name: 'Average', icon: 'fa-sun', active: false, hasTriangle: false, extraHTML: '' },
                { name: 'Smear', icon: 'fa-hand-pointer', active: false, hasTriangle: false, extraHTML: '<div class="w-4 h-[2px] bg-[#888] rounded-full mt-0.5 pointer-events-none transform -rotate-12 opacity-80"></div>' },
                { name: 'Gradient', icon: '', active: false, hasTriangle: false, extraHTML: '<div class="w-4 h-1 bg-gradient-to-r from-[#ccc] to-transparent transform -rotate-45 pointer-events-none border border-[#888] rounded-full relative mt-1"><div class="absolute -left-[3px] -bottom-[3px] w-1.5 h-1.5 rounded-full bg-[#ccc]"></div><div class="absolute -right-[3px] -top-[3px] w-1.5 h-1.5 rounded-full bg-[#ccc]"></div></div>' },
                { name: 'Sample Weight', icon: 'fa-eye-dropper', active: false, hasTriangle: true, extraHTML: '<div class="w-4 h-[2px] bg-[#888] rounded-full mt-0.5 pointer-events-none transform -rotate-12 opacity-80"></div>' }
              ] as tool}
                <div class="w-full h-[36px] {tool.active ? 'bg-[#4772b3] text-white' : 'text-[#ccc] hover:bg-[#333] hover:text-white'} flex items-center cursor-pointer relative" alt-id="{tool.name} tool" appearance-id="tool button showing the tool icon and name, highlighted when active for {tool.name} tool (in {windowId})" location-id="left toolbar of the 3D Viewport, visible in the current interaction mode, {tool.name} tool (in {windowId})" functionality-id="activates the named paint or edit tool when clicked for {tool.name} tool (in {windowId})" intent-id="select the active tool for the current editing mode for {tool.name} tool (in {windowId})">
                  <div class="w-[50px] h-[36px] flex flex-col items-center justify-center shrink-0">
                    {#if tool.icon}
                      <i class="fa-solid {tool.icon} text-[16px] pointer-events-none"></i>
                    {/if}
                    {#if tool.extraHTML}{@html tool.extraHTML}{/if}
                  </div>
                  {#if isLeftToolbarExpanded}
                    <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">{tool.name}</span>
                  {/if}
                  {#if tool.hasTriangle}
                    <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[4px] border-l-transparent border-b-[4px] border-b-[#888] pointer-events-none"></div>
                  {/if}
                </div>
              {/each}
            </div>

            <div class="w-10/12 h-[1px] bg-[#1f1f1f] mx-auto my-1"></div>

            <div class="flex flex-col mb-2">
              <div class="w-full h-[36px] text-[#ccc] hover:bg-[#333] hover:text-white flex items-center cursor-pointer relative" alt-id="Annotate tool" appearance-id="tool button with a pencil icon for Annotate tool (in {windowId})" location-id="bottom of the left toolbar in the current paint mode in the 3D Viewport, Annotate tool (in {windowId})" functionality-id="activates the Annotate tool for drawing freehand annotations in the viewport for Annotate tool (in {windowId})" intent-id="add non-destructive sketch notes and reference marks directly in the 3D space for Annotate tool (in {windowId})">
                <div class="w-[50px] h-[36px] flex items-center justify-center shrink-0">
                  <div class="relative flex flex-col items-center">
                    <i class="fa-solid fa-pen text-[12px] transform rotate-45 -translate-y-0.5 pointer-events-none"></i>
                    <div class="w-4 h-[2px] bg-[#66cc99] rounded-full mt-0.5 pointer-events-none"></div>
                  </div>
                </div>
                {#if isLeftToolbarExpanded}
                  <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">Annotate</span>
                {/if}
                <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[4px] border-l-transparent border-b-[4px] border-b-[#888] pointer-events-none"></div>
              </div>
            </div>
          </div>

        {:else if interactionMode === 'vertex_paint'}
          <!-- Vertex Paint Mode Toolbar -->
          <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-full pb-1 mb-4" alt-id="Vertex Paint Mode Tools" appearance-id="vertical panel containing tool buttons for vertex paint mode (in {windowId})" location-id="left toolbar area of the 3D Viewport, visible only in Vertex Paint Mode (in {windowId})" functionality-id="displays all vertex painting tools such as Draw, Blur, Average, and Smear (in {windowId})" intent-id="provide access to tools for painting colors directly onto mesh vertices (in {windowId})">
            <div class="flex flex-col mb-2">
              {#each [
                { name: 'Brush', icon: 'fa-paintbrush', active: true, hasTriangle: false, extraHTML: '<div class="w-4 h-[2px] bg-[#888] rounded-full mt-0.5 pointer-events-none transform -rotate-12 opacity-80"></div>' },
                { name: 'Blur', icon: 'fa-droplet', active: false, hasTriangle: false, extraHTML: '' },
                { name: 'Average', icon: 'fa-sun', active: false, hasTriangle: false, extraHTML: '' },
                { name: 'Smear', icon: 'fa-hand-pointer', active: false, hasTriangle: false, extraHTML: '<div class="w-4 h-[2px] bg-[#888] rounded-full mt-0.5 pointer-events-none transform -rotate-12 opacity-80"></div>' }
              ] as tool}
                <div class="w-full h-[36px] {tool.active ? 'bg-[#4772b3] text-white' : 'text-[#ccc] hover:bg-[#333] hover:text-white'} flex items-center cursor-pointer relative" alt-id="{tool.name} tool" appearance-id="tool button showing the tool icon and name, highlighted when active for {tool.name} tool (in {windowId})" location-id="left toolbar of the 3D Viewport, visible in the current interaction mode, {tool.name} tool (in {windowId})" functionality-id="activates the named paint or edit tool when clicked for {tool.name} tool (in {windowId})" intent-id="select the active tool for the current editing mode for {tool.name} tool (in {windowId})">
                  <div class="w-[50px] h-[36px] flex flex-col items-center justify-center shrink-0">
                    <i class="fa-solid {tool.icon} text-[16px] pointer-events-none"></i>
                    {#if tool.extraHTML}{@html tool.extraHTML}{/if}
                  </div>
                  {#if isLeftToolbarExpanded}
                    <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">{tool.name}</span>
                  {/if}
                  {#if tool.hasTriangle}
                    <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[4px] border-l-transparent border-b-[4px] border-b-[#888] pointer-events-none"></div>
                  {/if}
                </div>
              {/each}
            </div>

            <div class="w-10/12 h-[1px] bg-[#1f1f1f] mx-auto my-1"></div>

            <div class="flex flex-col mb-2">
              <div class="w-full h-[36px] text-[#ccc] hover:bg-[#333] hover:text-white flex items-center cursor-pointer relative" alt-id="Annotate tool" appearance-id="tool button with a pencil icon for Annotate tool (in {windowId})" location-id="bottom of the left toolbar in the current paint mode in the 3D Viewport, Annotate tool (in {windowId})" functionality-id="activates the Annotate tool for drawing freehand annotations in the viewport for Annotate tool (in {windowId})" intent-id="add non-destructive sketch notes and reference marks directly in the 3D space for Annotate tool (in {windowId})">
                <div class="w-[50px] h-[36px] flex items-center justify-center shrink-0">
                  <div class="relative flex flex-col items-center">
                    <i class="fa-solid fa-pen text-[12px] transform rotate-45 -translate-y-0.5 pointer-events-none"></i>
                    <div class="w-4 h-[2px] bg-[#66cc99] rounded-full mt-0.5 pointer-events-none"></div>
                  </div>
                </div>
                {#if isLeftToolbarExpanded}
                  <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">Annotate</span>
                {/if}
                <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[4px] border-l-transparent border-b-[4px] border-b-[#888] pointer-events-none"></div>
              </div>
            </div>
          </div>

        {:else if interactionMode === 'edit'}
          <!-- Edit Mode Toolbar -->
          <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-full pb-1 mb-4" alt-id="Edit Mode Tools" appearance-id="vertical panel containing tool buttons for edit mode (in {windowId})" location-id="left toolbar area of the 3D Viewport, visible only in Edit Mode (in {windowId})" functionality-id="displays all edit mode tools organized by category including selection, transform, and mesh editing tools (in {windowId})" intent-id="provide access to tools for modifying mesh topology and geometry (in {windowId})">
            
            <div class="flex flex-col mb-2">
              {#each [
                { name: 'Select Box', icon: 'fa-arrow-pointer', borderStyle: 'border-dashed border-[#ffcc00]', extraHTML: '' },
                { name: 'Cursor', icon: 'fa-crosshairs', extraHTML: '' }
              ] as tool}
                <div class="w-full h-[36px] {tool.name === 'Select Box' ? 'bg-[#4772b3] text-white' : 'text-[#ccc] hover:bg-[#333] hover:text-white'} flex items-center cursor-pointer relative" alt-id="{tool.name} tool" appearance-id="tool button showing the tool icon and name, highlighted when active for {tool.name} tool (in {windowId})" location-id="left toolbar of the 3D Viewport, visible in the current interaction mode, {tool.name} tool (in {windowId})" functionality-id="activates the named paint or edit tool when clicked for {tool.name} tool (in {windowId})" intent-id="select the active tool for the current editing mode for {tool.name} tool (in {windowId})">
                  <div class="w-[50px] h-[36px] flex items-center justify-center shrink-0">
                    {#if tool.borderStyle}
                      <div class="relative w-5 h-5 flex items-center justify-center border-[1.5px] {tool.borderStyle} opacity-90">
                        <i class="fa-solid {tool.icon} text-[10px] text-white shadow-sm transform -translate-x-0.5"></i>
                      </div>
                    {:else}
                      <i class="fa-solid {tool.icon} text-[16px]"></i>
                    {/if}
                  </div>
                  {#if isLeftToolbarExpanded}
                    <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">{tool.name}</span>
                  {/if}
                  {#if tool.name === 'Select Box'}
                    <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[4px] border-l-transparent border-b-[4px] border-b-white/80 pointer-events-none"></div>
                  {/if}
                </div>
              {/each}
            </div>

            <div class="w-10/12 h-[1px] bg-[#1f1f1f] mx-auto my-1"></div>

            <div class="flex flex-col mb-2">
              {#each [
                { name: 'Move', icon: 'fa-arrows-up-down-left-right' },
                { name: 'Rotate', icon: 'fa-rotate' },
                { name: 'Scale', icon: 'fa-square', extraHTML: '<i class="fa-solid fa-arrow-up-right text-[8px] absolute top-[-3px] right-[-5px]"></i>' },
                { name: 'Transform', icon: 'fa-arrows-up-down-left-right', extraHTML: '<div class="absolute w-2 h-2 bg-[#ccc] rounded-full border-[1.5px] border-[#282828]"></div>' }
              ] as tool}
                <div class="w-full h-[36px] text-[#ccc] hover:bg-[#333] hover:text-white flex items-center cursor-pointer relative" alt-id="{tool.name} tool" appearance-id="tool button showing the tool icon and name, highlighted when active for {tool.name} tool (in {windowId})" location-id="left toolbar of the 3D Viewport, visible in the current interaction mode, {tool.name} tool (in {windowId})" functionality-id="activates the named paint or edit tool when clicked for {tool.name} tool (in {windowId})" intent-id="select the active tool for the current editing mode for {tool.name} tool (in {windowId})">
                  <div class="w-[50px] h-[36px] flex items-center justify-center shrink-0">
                    <div class="relative flex items-center justify-center">
                      <i class="fa-solid {tool.icon} text-[16px] {tool.name === 'Transform' ? 'opacity-70' : ''}"></i>
                      {#if tool.extraHTML}{@html tool.extraHTML}{/if}
                    </div>
                  </div>
                  {#if isLeftToolbarExpanded}
                    <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">{tool.name}</span>
                  {/if}
                  {#if tool.name === 'Scale' || tool.name === 'Transform'}
                    <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[4px] border-l-transparent border-b-[4px] border-b-[#888] pointer-events-none"></div>
                  {/if}
                </div>
              {/each}
            </div>

            <div class="w-10/12 h-[1px] bg-[#1f1f1f] mx-auto my-1"></div>

            <div class="flex flex-col mb-2">
              {#each [
                { name: 'Annotate', icon: 'fa-pen', extraHTML: '<div class="w-4 h-[2px] bg-[#66cc99] rounded-full mt-0.5"></div>' },
                { name: 'Measure', icon: 'fa-ruler-vertical', extraHTML: '<i class="fa-solid fa-ruler-horizontal text-[14px]"></i>' }
              ] as tool}
                <div class="w-full h-[36px] text-[#ccc] hover:bg-[#333] hover:text-white flex items-center cursor-pointer relative" alt-id="{tool.name} tool" appearance-id="tool button showing the tool icon and name, highlighted when active for {tool.name} tool (in {windowId})" location-id="left toolbar of the 3D Viewport, visible in the current interaction mode, {tool.name} tool (in {windowId})" functionality-id="activates the named paint or edit tool when clicked for {tool.name} tool (in {windowId})" intent-id="select the active tool for the current editing mode for {tool.name} tool (in {windowId})">
                  <div class="w-[50px] h-[36px] flex items-center justify-center shrink-0">
                    {#if tool.name === 'Annotate'}
                      <div class="relative flex flex-col items-center">
                        <i class="fa-solid {tool.icon} text-[12px] transform rotate-45 -translate-y-0.5"></i>
                        {@html tool.extraHTML}
                      </div>
                    {:else}
                      <div class="flex items-end">
                        <i class="fa-solid {tool.icon} text-[14px]"></i>
                        {@html tool.extraHTML}
                      </div>
                    {/if}
                  </div>
                  {#if isLeftToolbarExpanded}
                    <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">{tool.name}</span>
                  {/if}
                  {#if tool.name === 'Annotate'}
                    <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[4px] border-l-transparent border-b-[4px] border-b-[#888] pointer-events-none"></div>
                  {/if}
                </div>
              {/each}
            </div>

            <div class="w-10/12 h-[1px] bg-[#1f1f1f] mx-auto my-1"></div>

            <div class="flex flex-col mb-2">
              {#each [
                { name: 'Add Cube', icon: 'fa-cube', extraHTML: '<div class="absolute top-[5px] left-[5px] text-[#66cc99] font-bold text-[10px] leading-none">+</div>' }
              ] as tool}
                <div class="w-full h-[36px] text-[#ccc] hover:bg-[#333] hover:text-white flex items-center cursor-pointer relative" alt-id="{tool.name} tool" appearance-id="tool button showing the tool icon and name, highlighted when active for {tool.name} tool (in {windowId})" location-id="left toolbar of the 3D Viewport, visible in the current interaction mode, {tool.name} tool (in {windowId})" functionality-id="activates the named paint or edit tool when clicked for {tool.name} tool (in {windowId})" intent-id="select the active tool for the current editing mode for {tool.name} tool (in {windowId})">
                  <div class="w-[50px] h-[36px] flex items-center justify-center shrink-0 relative">
                    <i class="fa-regular {tool.icon} text-[16px]"></i>
                    {@html tool.extraHTML}
                  </div>
                  {#if isLeftToolbarExpanded}
                    <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">{tool.name}</span>
                  {/if}
                  <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[4px] border-l-transparent border-b-[4px] border-b-[#888] pointer-events-none"></div>
                </div>
              {/each}
            </div>

            <div class="w-10/12 h-[1px] bg-[#1f1f1f] mx-auto my-1"></div>

            <!-- Edit Mode Specific Tools -->
            <div class="flex flex-col">
              {#each [
                { name: 'Extrude Region', icon: 'fa-layer-group', color: '#66cc99' },
                { name: 'Inset Faces', icon: 'fa-square-minus', color: '#66cc99' },
                { name: 'Bevel', icon: 'fa-cube', color: '#66cc99' },
                { name: 'Loop Cut', icon: 'fa-cube', color: '#66cc99' },
                { name: 'Knife', icon: 'fa-pen-nib', color: '#66cc99' },
                { name: 'Poly Build', icon: 'fa-cubes', color: '#66cc99' },
                { name: 'Spin', icon: 'fa-chart-pie', color: '#66cc99' },
                { name: 'Smooth', icon: 'fa-circle-notch', color: '#cc99cc' },
                { name: 'Edge Slide', icon: 'fa-arrows-up-down-left-right', color: '#cc99cc' },
                { name: 'Shrink/Flatten', icon: 'fa-compress', color: '#cc99cc' },
                { name: 'Shear', icon: 'fa-cube', color: '#cc99cc' },
                { name: 'Rip Region', icon: 'fa-scissors', color: '#cc99cc' }
              ] as tool}
                <div class="w-full h-[36px] text-[#ccc] hover:bg-[#333] hover:text-white flex items-center cursor-pointer relative" alt-id="{tool.name} tool" appearance-id="tool button showing the tool icon and name, highlighted when active for {tool.name} tool (in {windowId})" location-id="left toolbar of the 3D Viewport, visible in the current interaction mode, {tool.name} tool (in {windowId})" functionality-id="activates the named paint or edit tool when clicked for {tool.name} tool (in {windowId})" intent-id="select the active tool for the current editing mode for {tool.name} tool (in {windowId})">
                  <div class="w-[50px] h-[36px] flex items-center justify-center shrink-0">
                    <i class="fa-solid {tool.icon} text-[16px]" style="color: {tool.color}; opacity: 0.8;"></i>
                  </div>
                  {#if isLeftToolbarExpanded}
                    <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">{tool.name}</span>
                  {/if}
                  {#if tool.name !== 'Smooth' && tool.name !== 'Poly Build'}
                    <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[4px] border-l-transparent border-b-[4px] border-b-[#888] pointer-events-none"></div>
                  {/if}
                </div>
              {/each}
            </div>
            
          </div>
        {:else}
          <!-- Old Toolbar Group 1 -->
      <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-full overflow-hidden">
        <div class="w-full h-[50px] rounded-t-[3px] bg-[#4772b3] flex items-center text-white cursor-pointer relative border-b border-[#1f1f1f]" alt-id="Select Box tool, currently active, first element in the viewport toolbar" appearance-id="tall button with a dashed rectangle icon and the label Select Box, highlighted in blue as active (in {windowId})" location-id="first item in the default 3D Viewport left toolbar, Object Mode (in {windowId})" functionality-id="activates the Select Box tool for rectangular region selection of objects (in {windowId})" intent-id="select multiple objects by drawing a rectangular selection box (in {windowId})">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <div class="relative w-6 h-6 flex items-center justify-center border-[1.5px] border-dashed border-[#ffcc00] opacity-90">
              <i class="fa-solid fa-arrow-pointer text-[12px] text-white shadow-sm transform -translate-x-0.5"></i>
            </div>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Select Box</span>
          <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-b-[6px] border-b-white/80"></div>
        </div>
        <div class="w-full h-[50px] rounded-b-[3px] hover:bg-[#444] flex items-center text-[#ccc] cursor-pointer relative" alt-id="Cursor tool, second element in the viewport toolbar" appearance-id="tall button with a crosshair-with-dot icon and the label Cursor (in {windowId})" location-id="second item in the default 3D Viewport left toolbar, Object Mode (in {windowId})" functionality-id="activates the 3D Cursor placement tool for positioning the 3D cursor in the scene (in {windowId})" intent-id="precisely place the 3D cursor by clicking in the viewport (in {windowId})">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <i class="fa-regular fa-crosshairs text-[20px]"></i>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Cursor</span>
        </div>
      </div>
      
      <!-- Group 2 -->
      <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-full overflow-hidden">
        <div class="w-full h-[50px] hover:bg-[#444] rounded-t-[3px] flex items-center text-[#ccc] cursor-pointer border-b border-[#1f1f1f]" alt-id="Move tool, third element in the viewport toolbar" appearance-id="tall button with a four-way arrow icon and the label Move (in {windowId})" location-id="third item in the default 3D Viewport left toolbar, Object Mode (in {windowId})" functionality-id="activates the Move tool showing the grab/translate gizmo for selected objects (in {windowId})" intent-id="interactively drag objects along specific axes using the move gizmo (in {windowId})">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <i class="fa-solid fa-arrows-up-down-left-right text-[18px]"></i>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Move</span>
        </div>
        <div class="w-full h-[50px] hover:bg-[#444] flex items-center text-[#ccc] cursor-pointer border-b border-[#1f1f1f]" alt-id="Rotate tool, fourth element in the viewport toolbar" appearance-id="tall button with a circular arrow icon and the label Rotate (in {windowId})" location-id="fourth item in the default 3D Viewport left toolbar, Object Mode (in {windowId})" functionality-id="activates the Rotate tool showing the rotation gizmo for selected objects (in {windowId})" intent-id="interactively rotate objects around specific axes using the rotate gizmo (in {windowId})">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <i class="fa-solid fa-rotate text-[18px]"></i>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Rotate</span>
        </div>
        <div class="w-full h-[50px] hover:bg-[#444] flex items-center text-[#ccc] cursor-pointer relative border-b border-[#1f1f1f]" alt-id="Scale tool, fifth element in the viewport toolbar" appearance-id="tall button with an arrows-pointing-outward icon and the label Scale (in {windowId})" location-id="fifth item in the default 3D Viewport left toolbar, Object Mode (in {windowId})" functionality-id="activates the Scale tool showing the scale gizmo for selected objects (in {windowId})" intent-id="interactively resize objects along specific axes using the scale gizmo (in {windowId})">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <div class="relative flex items-center justify-center">
              <i class="fa-regular fa-square text-[18px]"></i>
              <i class="fa-solid fa-arrow-up-right text-[10px] absolute top-[-3px] right-[-5px]"></i>
            </div>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Scale</span>
          <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-b-[6px] border-b-[#888]"></div>
        </div>
        <div class="w-full h-[50px] hover:bg-[#444] rounded-b-[3px] flex items-center text-[#ccc] cursor-pointer relative" alt-id="Transform tool, sixth element in the viewport toolbar" appearance-id="tall button with a combined transform gizmo icon and the label Transform (in {windowId})" location-id="sixth item in the default 3D Viewport left toolbar, Object Mode (in {windowId})" functionality-id="activates the Transform tool showing a combined move, rotate, and scale gizmo (in {windowId})" intent-id="interactively apply multiple transforms simultaneously using a single combined gizmo (in {windowId})">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <div class="relative flex items-center justify-center">
              <i class="fa-solid fa-arrows-up-down-left-right text-[18px] opacity-70"></i>
              <div class="absolute w-3 h-3 bg-[#ccc] rounded-full border-[2px] border-[#282828]"></div>
            </div>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Transform</span>
          <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-b-[6px] border-b-[#888]"></div>
        </div>
      </div>
      
      <!-- Group 3 -->
      <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-full overflow-hidden">
        <div class="w-full h-[50px] hover:bg-[#444] rounded-t-[3px] flex items-center text-[#ccc] cursor-pointer relative border-b border-[#1f1f1f]" alt-id="Annotate tool, seventh element in the viewport toolbar" appearance-id="tall button with a pencil icon and the label Annotate (in {windowId})" location-id="seventh item in the default 3D Viewport left toolbar, Object Mode (in {windowId})" functionality-id="activates the Annotate tool for drawing freehand annotations in the viewport for Annotate tool (in {windowId})" intent-id="add non-destructive sketch notes and reference marks directly in the 3D space for Annotate tool (in {windowId})">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <div class="relative flex flex-col items-center">
              <i class="fa-solid fa-pen text-[14px] transform rotate-45 -translate-y-0.5"></i>
              <div class="w-5 h-[2px] bg-[#66cc99] rounded-full mt-0.5"></div>
            </div>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Annotate</span>
          <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-b-[6px] border-b-[#888]"></div>
        </div>
        <div class="w-full h-[50px] hover:bg-[#444] rounded-b-[3px] flex items-center text-[#ccc] cursor-pointer relative" alt-id="Measure tool, eighth element in the viewport toolbar" appearance-id="tall button with a ruler icon and the label Measure (in {windowId})" location-id="eighth item in the default 3D Viewport left toolbar, Object Mode (in {windowId})" functionality-id="activates the Measure tool for measuring distances and angles in the viewport (in {windowId})" intent-id="take precise measurements between points in the 3D scene (in {windowId})">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <div class="flex items-end text-[#ccc]">
              <i class="fa-solid fa-ruler-vertical text-[16px]"></i>
              <i class="fa-solid fa-ruler-horizontal text-[16px]"></i>
            </div>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Measure</span>
        </div>
      </div>

      <!-- Group 4 -->
      <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-full overflow-hidden">
        <div class="w-full h-[50px] hover:bg-[#444] rounded-[3px] flex items-center text-[#ccc] cursor-pointer relative" alt-id="Add Cube tool, ninth element in the viewport toolbar" appearance-id="tall button with a cube icon and the label Add Cube (in {windowId})" location-id="ninth item in the default 3D Viewport left toolbar, Object Mode (in {windowId})" functionality-id="activates the Add Cube tool for interactively placing a new cube mesh in the scene (in {windowId})" intent-id="quickly add a primitive cube mesh to the scene by clicking and dragging (in {windowId})">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0 relative">
            <i class="fa-regular fa-cube text-[18px]"></i>
            <div class="absolute top-[8px] left-[7px] text-[#66cc99] font-bold text-[12px] leading-none">+</div>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Add Cube</span>
          <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-b-[6px] border-b-[#888]"></div>
        </div>
          </div>
        {/if}
      </div>
    </div>
    {/if}
    
    <!-- Right Sidebar (N-Panel) -->
    <div class="absolute right-0 top-0 flex z-20 shadow-[-5px_0_15px_rgba(0,0,0,0.3)] max-h-full">
      <!-- Main Content Area -->
      <div class="w-[280px] bg-[#282828] bg-opacity-95 backdrop-blur-sm flex flex-col text-[13px] rounded-bl-sm" alt-id="Viewport properties right sidebar" appearance-id="narrow panel on the right side of the viewport showing transform properties with a dark background (in {windowId})" location-id="right side of the 3D Viewport main area, overlaid on the viewport content (in {windowId})" functionality-id="displays and allows editing of the selected object's transform properties (in {windowId})" intent-id="provide quick access to precise numeric input for object position, rotation, and scale (in {windowId})">
        <!-- Content wrappers -->
        <div class="flex-1 overflow-y-auto overflow-x-hidden">
          <div class="border-b border-[#1f1f1f]">
            <!-- Transform Header -->
            <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" alt-id="Transform panel header, expanded" appearance-id="panel header row with the label Transform and a downward chevron indicating expanded state (in {windowId})" location-id="top of the Viewport properties right sidebar (in {windowId})" functionality-id="collapses or expands the Transform panel in the right sidebar (in {windowId})" intent-id="toggle the visibility of transform input fields in the properties sidebar (in {windowId})">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center"></i>
                <span class="font-medium text-[14px]">Transform</span>
              </div>
              <!-- Drag grip -->
              <div class="flex gap-[2px] opacity-40 cursor-grab" alt-id="Panel drag handle" appearance-id="small grid of dots indicating a draggable handle for reordering panels (in {windowId})" location-id="right side of the Transform panel header in the viewport properties sidebar (in {windowId})" functionality-id="drag handle for repositioning the Transform panel within the sidebar (in {windowId})" intent-id="allow users to rearrange the order of panels in the sidebar (in {windowId})">
                <div class="flex flex-col gap-[2px]">
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc]"></div>
                </div>
                <div class="flex flex-col gap-[2px]">
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
            </div>
            <!-- Transform Content -->
            <div class="p-3 flex flex-col gap-4 text-[#a0a0a0]">
              
              <!-- Location -->
              <div class="flex flex-col gap-1">
                <div class="text-[#ccc] text-[12px] mb-[2px]">Location:</div>
                <div class="flex flex-col gap-[1px]">
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-t-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Location X input field" appearance-id="dark text input field with X label and a value, showing the X position, part of a vertically stacked group of three (in {windowId})" location-id="first row of Location inputs in the Transform panel of the viewport right sidebar (in {windowId})" functionality-id="displays and accepts numeric input for the selected object's X-axis world position (in {windowId})" intent-id="precisely set the horizontal position of the object in world space (in {windowId})">
                    <span class="w-5 text-[#ff3333] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">X</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">-0.023445 m</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Location X button" appearance-id="small open lock icon to the right of the Location X input field (in {windowId})" location-id="right side of the Location X input row in the Transform panel (in {windowId})" functionality-id="locks the Location X property to prevent accidental changes (in {windowId})" intent-id="protect the object's X position from being modified during editing (in {windowId})"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] px-[8px] py-[4px] relative group cursor-text" alt-id="Location Y input field" appearance-id="dark text input field with Y label and a value, showing the Y position, part of a vertically stacked group of three (in {windowId})" location-id="second row of Location inputs in the Transform panel of the viewport right sidebar (in {windowId})" functionality-id="displays and accepts numeric input for the selected object's Y-axis world position (in {windowId})" intent-id="precisely set the depth position of the object in world space (in {windowId})">
                    <span class="w-5 text-[#88ff33] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Y</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">1.0303 m</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Location Y button" appearance-id="small open lock icon to the right of the Location Y input field (in {windowId})" location-id="right side of the Location Y input row in the Transform panel (in {windowId})" functionality-id="locks the Location Y property to prevent accidental changes (in {windowId})" intent-id="protect the object's Y position from being modified during editing (in {windowId})"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-b-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Location Z input field" appearance-id="dark text input field with Z label and a value, showing the Z position, part of a vertically stacked group of three (in {windowId})" location-id="third row of Location inputs in the Transform panel of the viewport right sidebar (in {windowId})" functionality-id="displays and accepts numeric input for the selected object's Z-axis world position (in {windowId})" intent-id="precisely set the vertical position of the object in world space (in {windowId})">
                    <span class="w-5 text-[#3388ff] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Z</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">-0.28996 m</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Location Z button" appearance-id="small open lock icon to the right of the Location Z input field (in {windowId})" location-id="right side of the Location Z input row in the Transform panel (in {windowId})" functionality-id="locks the Location Z property to prevent accidental changes (in {windowId})" intent-id="protect the object's Z position from being modified during editing (in {windowId})"></i>
                  </div>
                </div>
              </div>
              
              <!-- Rotation -->
              <div class="flex flex-col gap-1">
                <div class="text-[#ccc] text-[12px] mb-[2px]">Rotation:</div>
                <div class="flex flex-col gap-[1px]">
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-t-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Rotation X input field" appearance-id="dark text input field with X label and a degree value, showing the X rotation, part of a vertically stacked group (in {windowId})" location-id="first row of Rotation inputs in the Transform panel of the viewport right sidebar (in {windowId})" functionality-id="displays and accepts numeric input for the selected object's X-axis rotation angle (in {windowId})" intent-id="precisely set the pitch rotation of the object (in {windowId})">
                    <span class="w-5 text-[#ff3333] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">X</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">0°</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Rotation X button" appearance-id="small open lock icon to the right of the Rotation X input field (in {windowId})" location-id="right side of the Rotation X input row in the Transform panel (in {windowId})" functionality-id="locks the Rotation X property to prevent accidental changes (in {windowId})" intent-id="protect the object's X rotation from being modified during editing (in {windowId})"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] px-[8px] py-[4px] relative group cursor-text" alt-id="Rotation Y input field" appearance-id="dark text input field with Y label and a degree value, showing the Y rotation, part of a vertically stacked group (in {windowId})" location-id="second row of Rotation inputs in the Transform panel of the viewport right sidebar (in {windowId})" functionality-id="displays and accepts numeric input for the selected object's Y-axis rotation angle (in {windowId})" intent-id="precisely set the roll rotation of the object (in {windowId})">
                    <span class="w-5 text-[#88ff33] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Y</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">0°</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Rotation Y button" appearance-id="small open lock icon to the right of the Rotation Y input field (in {windowId})" location-id="right side of the Rotation Y input row in the Transform panel (in {windowId})" functionality-id="locks the Rotation Y property to prevent accidental changes (in {windowId})" intent-id="protect the object's Y rotation from being modified during editing (in {windowId})"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-b-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Rotation Z input field" appearance-id="dark text input field with Z label and a degree value, showing the Z rotation, part of a vertically stacked group (in {windowId})" location-id="third row of Rotation inputs in the Transform panel of the viewport right sidebar (in {windowId})" functionality-id="displays and accepts numeric input for the selected object's Z-axis rotation angle (in {windowId})" intent-id="precisely set the yaw rotation of the object (in {windowId})">
                    <span class="w-5 text-[#3388ff] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Z</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">0°</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Rotation Z button" appearance-id="small open lock icon to the right of the Rotation Z input field (in {windowId})" location-id="right side of the Rotation Z input row in the Transform panel (in {windowId})" functionality-id="locks the Rotation Z property to prevent accidental changes (in {windowId})" intent-id="protect the object's Z rotation from being modified during editing (in {windowId})"></i>
                  </div>
                </div>
                <div class="bg-[#2a2a2a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1.5 text-[#ccc] flex justify-between items-center cursor-pointer hover:bg-[#333] mt-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" alt-id="Rotation mode dropdown" appearance-id="dropdown button showing the current rotation mode such as XYZ Euler, with a chevron (in {windowId})" location-id="below the Rotation inputs in the Transform panel of the viewport right sidebar (in {windowId})" functionality-id="selects the rotation representation mode such as Euler, Quaternion, or Axis-Angle (in {windowId})" intent-id="choose how rotation values are stored and edited for the selected object (in {windowId})">
                  <span class="text-[13px] pointer-events-none">XYZ Euler</span><i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                </div>
              </div>
              
              <!-- Scale -->
              <div class="flex flex-col gap-1">
                <div class="text-[#ccc] text-[12px] mb-[2px]">Scale:</div>
                <div class="flex flex-col gap-[1px]">
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-t-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Scale X input field" appearance-id="dark text input field with X label and a scale value, part of a vertically stacked group of three (in {windowId})" location-id="first row of Scale inputs in the Transform panel of the viewport right sidebar (in {windowId})" functionality-id="displays and accepts numeric input for the selected object's X-axis scale factor (in {windowId})" intent-id="precisely set the horizontal scale of the object (in {windowId})">
                    <span class="w-5 text-[#ff3333] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">X</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">1.000</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Scale X button" appearance-id="small open lock icon to the right of the Scale X input field (in {windowId})" location-id="right side of the Scale X input row in the Transform panel (in {windowId})" functionality-id="locks the Scale X property to prevent accidental changes (in {windowId})" intent-id="protect the object's X scale from being modified during editing (in {windowId})"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] px-[8px] py-[4px] relative group cursor-text" alt-id="Scale Y input field" appearance-id="dark text input field with Y label and a scale value, part of a vertically stacked group of three (in {windowId})" location-id="second row of Scale inputs in the Transform panel of the viewport right sidebar (in {windowId})" functionality-id="displays and accepts numeric input for the selected object's Y-axis scale factor (in {windowId})" intent-id="precisely set the depth scale of the object (in {windowId})">
                    <span class="w-5 text-[#88ff33] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Y</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">1.000</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Scale Y button" appearance-id="small open lock icon to the right of the Scale Y input field (in {windowId})" location-id="right side of the Scale Y input row in the Transform panel (in {windowId})" functionality-id="locks the Scale Y property to prevent accidental changes (in {windowId})" intent-id="protect the object's Y scale from being modified during editing (in {windowId})"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-b-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Scale Z input field" appearance-id="dark text input field with Z label and a scale value, part of a vertically stacked group of three (in {windowId})" location-id="third row of Scale inputs in the Transform panel of the viewport right sidebar (in {windowId})" functionality-id="displays and accepts numeric input for the selected object's Z-axis scale factor (in {windowId})" intent-id="precisely set the vertical scale of the object (in {windowId})">
                    <span class="w-5 text-[#3388ff] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Z</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">1.000</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Scale Z button" appearance-id="small open lock icon to the right of the Scale Z input field (in {windowId})" location-id="right side of the Scale Z input row in the Transform panel (in {windowId})" functionality-id="locks the Scale Z property to prevent accidental changes (in {windowId})" intent-id="protect the object's Z scale from being modified during editing (in {windowId})"></i>
                  </div>
                </div>
              </div>
              
              <!-- Dimensions -->
              <div class="flex flex-col gap-1 pb-2">
                <div class="text-[#ccc] text-[12px] mb-[2px]">Dimensions:</div>
                <div class="flex flex-col gap-[1px]">
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-t-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Dimension X input field" appearance-id="dark text input field with X label and a unit value, part of a vertically stacked group of three (in {windowId})" location-id="first row of Dimension inputs in the Transform panel of the viewport right sidebar (in {windowId})" functionality-id="displays and accepts numeric input for the object's X-axis bounding box size in scene units (in {windowId})" intent-id="view and set the actual physical width of the object in scene units (in {windowId})">
                    <span class="w-5 text-[#ff3333] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">X</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">1.18 m</span>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] px-[8px] py-[4px] relative group cursor-text" alt-id="Dimension Y input field" appearance-id="dark text input field with Y label and a unit value, part of a vertically stacked group of three (in {windowId})" location-id="second row of Dimension inputs in the Transform panel of the viewport right sidebar (in {windowId})" functionality-id="displays and accepts numeric input for the object's Y-axis bounding box size in scene units (in {windowId})" intent-id="view and set the actual physical depth of the object in scene units (in {windowId})">
                    <span class="w-5 text-[#88ff33] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Y</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">0.23 m</span>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-b-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Dimension Z input field" appearance-id="dark text input field with Z label and a unit value, part of a vertically stacked group of three (in {windowId})" location-id="third row of Dimension inputs in the Transform panel of the viewport right sidebar (in {windowId})" functionality-id="displays and accepts numeric input for the object's Z-axis bounding box size in scene units (in {windowId})" intent-id="view and set the actual physical height of the object in scene units (in {windowId})">
                    <span class="w-5 text-[#3388ff] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Z</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">0.0542 m</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      <!-- Vertical Tabs -->
      <div class="flex flex-col mt-[35px] ml-[2px] gap-[2px] z-10 w-[34px]" alt-id="Viewport properties sidebar tabs" appearance-id="vertical column of rotated text tabs along the right edge of the sidebar (in {windowId})" location-id="right edge of the Viewport properties right sidebar panel (in {windowId})" functionality-id="switches between different sidebar panel categories: Item, Tool, View, and Animation (in {windowId})" intent-id="navigate to different context-specific property panels in the sidebar (in {windowId})">
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer text-white bg-[#3d3d3d] rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide" alt-id="Item tab, currently selected, first element in the viewport sidebar tabs" appearance-id="vertical tab button with rotated text reading Item, highlighted in lighter gray as currently selected (in {windowId})" location-id="first tab in the viewport properties sidebar tabs column (in {windowId})" functionality-id="shows the Item panel with object transform properties like location, rotation, and scale (in {windowId})" intent-id="access the selected object's numeric transform properties for precise editing (in {windowId})" style="writing-mode: vertical-rl;">Item</div>
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333] rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide" alt-id="Tool tab, second element in the viewport sidebar tabs" appearance-id="vertical tab button with rotated text reading Tool, dark background (in {windowId})" location-id="second tab in the viewport properties sidebar tabs column (in {windowId})" functionality-id="switches to the Tool panel with active tool options and workspace tool settings (in {windowId})" intent-id="access settings and options for the currently active viewport tool (in {windowId})" style="writing-mode: vertical-rl;">Tool</div>
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333] rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide" alt-id="View tab, third element in the viewport sidebar tabs" appearance-id="vertical tab button with rotated text reading View, dark background (in {windowId})" location-id="third tab in the viewport properties sidebar tabs column (in {windowId})" functionality-id="switches to the View panel with camera lock and clip distance settings (in {windowId})" intent-id="control viewport camera settings and display configuration (in {windowId})" style="writing-mode: vertical-rl;">View</div>
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333] rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide" alt-id="Animation tab, fourth element in the viewport sidebar tabs" appearance-id="vertical tab button with rotated text reading Animation, dark background (in {windowId})" location-id="fourth tab in the viewport properties sidebar tabs column (in {windowId})" functionality-id="switches to the Animation panel with motion path and keyframe display settings (in {windowId})" intent-id="access animation visualization and playback settings for the viewport (in {windowId})" style="writing-mode: vertical-rl;">Animation</div>
      </div>
    </div>

    {#if isMainViewport}
      <!-- Grid approximation -->
      <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(#aaa 1px, transparent 1px), linear-gradient(90deg, #aaa 1px, transparent 1px); background-size: 40px 40px; transform: perspective(500px) rotateX(60deg) scale(2); transform-origin: top;"></div>

      <!-- The isometric room image placeholder -->
      <div class="relative w-80 h-80 z-10" alt-id="3D scene containing an isometric room" appearance-id="rendered 3D scene showing an isometric-style room with furniture, walls, and objects in a diagonal perspective (in {windowId})" location-id="center of the 3D Viewport main area when in material preview mode (main viewport) (in {windowId})" functionality-id="displays the rendered 3D scene content with materials and HDRI lighting applied (in {windowId})" intent-id="show the user the current 3D model with shading for evaluation and editing (in {windowId})">
         <div class="absolute inset-0 bg-[#2d1b11] transform rotate-45 scale-y-50 shadow-2xl border-4 border-[#22120a]"></div>
         <div class="absolute bottom-0 left-0 w-1/2 h-full bg-[#e6dbce] origin-bottom-right transform skew-y-[-45deg] border-l-4 border-t-4 border-[#a69b8e] flex items-center justify-center shadow-[inset_-10px_-10px_30px_rgba(0,0,0,0.2)]"></div>
         <div class="absolute bottom-0 right-0 w-1/2 h-full bg-[#1b6b5d] origin-bottom-left transform skew-y-[45deg] border-r-4 border-t-4 border-[#0b4b3d] shadow-[inset_10px_-10px_30px_rgba(0,0,0,0.4)]"></div>
         <!-- Window -->
         <div class="absolute top-[25%] right-[10%] w-[30%] h-[30%] bg-[#a0d2eb] border-[6px] border-[#5c3a21] origin-bottom-left transform skew-y-[45deg] grid grid-cols-2 grid-rows-2">
           <div class="border border-[#5c3a21] bg-white/20"></div>
           <div class="border border-[#5c3a21] bg-white/20"></div>
           <div class="border border-[#5c3a21] bg-white/20"></div>
           <div class="border border-[#5c3a21] bg-white/20"></div>
         </div>
      </div>
      
      <!-- Top Left Overlay Text -->
      <div class="absolute top-3 flex flex-col gap-0.5 text-[14px] font-medium z-10 {isLeftToolbarCollapsed ? 'left-8' : (isLeftToolbarExpanded ? 'left-[140px]' : 'left-[60px]')}" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
        <div class="text-[#eee]">(1) Collection | cube_01</div>
      </div>
    {:else}
      <!-- Grid approximation -->
      <div class="absolute inset-0 opacity-[0.15]" style="background-image: linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px); background-size: 80px 80px; background-position: center center;"></div>

      <!-- Center Axes -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/2 left-0 w-full h-[1px] bg-[#cc3333] opacity-60 z-0"></div> <!-- X Axis -->
        <div class="absolute top-0 left-1/2 w-[1px] h-full bg-[#8cc43c] opacity-80 z-0"></div> <!-- Y Axis -->
      </div>

      <!-- The Scene -->
      <div class="relative w-[400px] h-[400px] z-10" alt-id="3D scene Top Orthographic view" appearance-id="rendered 3D scene from a top-down orthographic perspective showing objects from above with a grid overlay (in {windowId})" location-id="center of the 3D Viewport main area when in Top Orthographic camera mode (in {windowId})" functionality-id="displays the 3D scene from a top-down orthographic projection for precise layout work (in {windowId})" intent-id="allow precise placement and alignment of objects when viewed from above (in {windowId})">
         <!-- Large Circle (Left Bottom) -->
         <div class="absolute bottom-0 left-[-40px] w-[200px] h-[200px] rounded-full border border-black opacity-50"></div>
         <div class="absolute bottom-[-10px] left-[-50px] w-[220px] h-[220px] rounded-full border border-black opacity-30"></div>

         <!-- The Window Board (Center Object) -->
         <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[80px] bg-[#8b6540] border-[2px] border-black shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center outline outline-[1.5px] outline-[#ff8800] z-20">
           <div class="w-[60px] h-[50px] border border-[#553311] relative">
             <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] border border-black rounded-full"></div>
             <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] border border-[#ff8800] rounded-full"></div>
             <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-[#ff8800] rounded-full"></div>
           </div>
         </div>

         <!-- Selection Box (Wireframe around object) -->
         <div class="absolute top-1/2 left-1/2 transform -translate-x-[45px] -translate-y-[55px] w-[120px] h-[100px] border border-black opacity-50 z-10 transform skew-x-12"></div>

         <!-- Camera (Top Right) -->
         <div class="absolute top-[40px] right-[100px] w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[80px] border-b-black opacity-90 transform -rotate-[25deg] z-10"></div>
         
         <!-- Camera Pivot Point -->
         <div class="absolute top-[30px] right-[120px] w-[16px] h-[16px] border border-black border-dashed rounded-full flex items-center justify-center">
           <div class="w-[4px] h-[4px] bg-black rounded-full"></div>
         </div>
      </div>
      
      <!-- Top Left Overlay Text -->
      <div class="absolute top-3 flex flex-col gap-0.5 text-[12px] font-medium z-20 {isLeftToolbarCollapsed ? 'left-8' : (isLeftToolbarExpanded ? 'left-[140px]' : 'left-[60px]')}" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
        <div class="text-[#eee]">fps: 24</div>
        <div class="text-[#eee]">(7148) Studio Assets | Window Board</div>
      </div>
    {/if}
    
    <!-- Top right overlay gizmos (Moved to left of the sidebar) -->
    <div class="absolute top-6 right-[310px] flex flex-col items-center gap-3 z-10">
      <!-- Axis gizmo -->
      <div class="w-[84px] h-[84px] rounded-full hover:bg-[#3a3a3a]/30 relative mb-2 cursor-pointer transition-colors flex items-center justify-center" alt-id="3D navigation axis gizmo" appearance-id="circular widget with colored axis spheres: blue Z on top, green Y upper-right, red X lower-right, and dimmed negative axes opposite (in {windowId})" location-id="bottom-right area of the 3D Viewport main area, above the navigation buttons (in {windowId})" functionality-id="displays the current viewport orientation and allows clicking axis spheres to snap to orthographic views (in {windowId})" intent-id="navigate quickly to standard orthographic views by clicking the axis indicators (in {windowId})">
        <!-- Axes container -->
        <div class="absolute top-1/2 left-1/2 w-0 h-0">
          <!-- Lines -->
          <div class="absolute w-[2px] h-[30px] bg-[#3388ff] origin-bottom left-[-1px] bottom-0" style="transform: rotate(0deg);"></div>
          <div class="absolute w-[2px] h-[30px] bg-[#8cc43c] origin-bottom left-[-1px] bottom-0" style="transform: rotate(65deg);"></div>
          <div class="absolute w-[2px] h-[30px] bg-[#f34555] origin-bottom left-[-1px] bottom-0" style="transform: rotate(135deg);"></div>
          
          <!-- Positive Dots -->
          <div class="absolute w-[22px] h-[22px] bg-[#3388ff] rounded-full flex items-center justify-center text-[12px] text-white font-bold shadow-sm" style="transform: rotate(0deg) translateY(-30px) rotate(0deg); top: 0; left: 0; margin-left: -11px; margin-top: -11px;" alt-id="Positive Z axis button, top element in the 3D navigation axis gizmo" appearance-id="small blue filled circle with the letter Z, positioned at the top of the axis gizmo (in {windowId})" location-id="top position in the 3D navigation axis gizmo, bottom-right of the viewport (in {windowId})" functionality-id="clicking snaps the viewport to the Top Orthographic view (looking down the negative Z axis) (in {windowId})" intent-id="quickly align the viewport to look straight down from above (in {windowId})">Z</div>
          <div class="absolute w-[22px] h-[22px] bg-[#8cc43c] rounded-full flex items-center justify-center text-[12px] text-[#111] font-bold shadow-sm" style="transform: rotate(65deg) translateY(-30px) rotate(-65deg); top: 0; left: 0; margin-left: -11px; margin-top: -11px;" alt-id="Positive Y axis button, top right element in the 3D navigation axis gizmo" appearance-id="small green filled circle with the letter Y, positioned upper-right in the axis gizmo (in {windowId})" location-id="upper-right position in the 3D navigation axis gizmo, bottom-right of the viewport (in {windowId})" functionality-id="clicking snaps the viewport to the Front Orthographic view (looking down the negative Y axis) (in {windowId})" intent-id="quickly align the viewport to look straight forward from the front (in {windowId})">Y</div>
          <div class="absolute w-[22px] h-[22px] bg-[#f34555] rounded-full flex items-center justify-center text-[12px] text-white font-bold shadow-sm" style="transform: rotate(135deg) translateY(-30px) rotate(-135deg); top: 0; left: 0; margin-left: -11px; margin-top: -11px;" alt-id="Positive X axis button, bottom right element in the 3D navigation axis gizmo" appearance-id="small red filled circle with the letter X, positioned lower-right in the axis gizmo (in {windowId})" location-id="lower-right position in the 3D navigation axis gizmo, bottom-right of the viewport (in {windowId})" functionality-id="clicking snaps the viewport to the Right Side Orthographic view (looking down the negative X axis) (in {windowId})" intent-id="quickly align the viewport to look from the right side (in {windowId})">X</div>

          <!-- Negative Dots -->
          <div class="absolute w-[18px] h-[18px] rounded-full border-[3px] border-[#3388ff] bg-[#333] bg-opacity-90" style="transform: rotate(180deg) translateY(-30px); top: 0; left: 0; margin-left: -9px; margin-top: -9px;" alt-id="Negative Z axis button, bottom element in the 3D navigation axis gizmo" appearance-id="small dark circle with a blue border, positioned at the bottom of the axis gizmo (in {windowId})" location-id="bottom position in the 3D navigation axis gizmo, bottom-right of the viewport (in {windowId})" functionality-id="clicking snaps the viewport to the Bottom Orthographic view (looking up the positive Z axis) (in {windowId})" intent-id="quickly align the viewport to look straight up from below (in {windowId})"></div>
          <div class="absolute w-[18px] h-[18px] rounded-full border-[3px] border-[#8cc43c] bg-[#333] bg-opacity-90" style="transform: rotate(245deg) translateY(-30px); top: 0; left: 0; margin-left: -9px; margin-top: -9px;" alt-id="Negative Y axis button, bottom left element in the 3D navigation axis gizmo" appearance-id="small dark circle with a green border, positioned lower-left in the axis gizmo (in {windowId})" location-id="lower-left position in the 3D navigation axis gizmo, bottom-right of the viewport (in {windowId})" functionality-id="clicking snaps the viewport to the Back Orthographic view (looking down the positive Y axis) (in {windowId})" intent-id="quickly align the viewport to look from the back of the scene (in {windowId})"></div>
          <div class="absolute w-[18px] h-[18px] rounded-full border-[3px] border-[#f34555] bg-[#333] bg-opacity-90" style="transform: rotate(315deg) translateY(-30px); top: 0; left: 0; margin-left: -9px; margin-top: -9px;" alt-id="Negative X axis button, top left element in the 3D navigation axis gizmo" appearance-id="small dark circle with a red border, positioned upper-left in the axis gizmo (in {windowId})" location-id="upper-left position in the 3D navigation axis gizmo, bottom-right of the viewport (in {windowId})" functionality-id="clicking snaps the viewport to the Left Side Orthographic view (looking down the positive X axis) (in {windowId})" intent-id="quickly align the viewport to look from the left side of the scene (in {windowId})"></div>
        </div>
      </div>
      
      <!-- Navigation Buttons -->
      <div class="flex flex-col gap-2">
        <div class="w-[38px] h-[38px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Zoom viewport button, first element in the viewport navigation controls" appearance-id="circular button with a magnifying glass plus icon (in {windowId})" location-id="first button in the navigation controls column, bottom-right of the viewport below the axis gizmo (in {windowId})" functionality-id="zooms the viewport in toward the scene center or selected object (in {windowId})" intent-id="get a closer view of the scene content (in {windowId})"><i class="fa-solid fa-magnifying-glass-plus text-[16px]"></i></div>
        <div class="w-[38px] h-[38px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Pan viewport button, second element in the viewport navigation controls" appearance-id="circular button with an open hand icon (in {windowId})" location-id="second button in the navigation controls column, bottom-right of the viewport (in {windowId})" functionality-id="pans the viewport by dragging to offset the view horizontally and vertically (in {windowId})" intent-id="scroll the viewport view to see different parts of the scene (in {windowId})"><i class="fa-solid fa-hand text-[16px]"></i></div>
        <div class="w-[38px] h-[38px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Toggle camera view button, third element in the viewport navigation controls" appearance-id="circular button with a video camera icon (in {windowId})" location-id="third button in the navigation controls column, bottom-right of the viewport (in {windowId})" functionality-id="toggles between the current user perspective view and the active camera view (in {windowId})" intent-id="preview how the scene will look when rendered from the active camera (in {windowId})"><i class="fa-solid fa-video text-[15px]"></i></div>
        <div class="w-[38px] h-[38px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Toggle perspective/orthographic button, fourth element in the viewport navigation controls" appearance-id="circular button with a grid cells icon (in {windowId})" location-id="fourth button in the navigation controls column, bottom-right of the viewport (in {windowId})" functionality-id="toggles the viewport projection between perspective and orthographic modes (in {windowId})" intent-id="switch between realistic depth perspective and flat orthographic projection for modeling (in {windowId})"><i class="fa-solid fa-table-cells text-[17px]"></i></div>
      </div>
    </div>
    



    <!-- Asset Shelf (Bottom Bar for Texture Paint Mode) -->
    {#if interactionMode === 'texture_paint'}
      <div class="absolute bottom-0 left-[36px] right-0 bg-[#1d1d1d] border-t border-[#333] flex flex-col z-20" style="margin-right: 0px;" alt-id="Texture Paint Mode Asset Shelf" appearance-id="horizontal shelf panel at the bottom of the viewport with brush icons and tabs, visible in Texture Paint Mode (in {windowId})" location-id="bottom edge of the 3D Viewport main area, above the status bar, visible in Texture Paint Mode (in {windowId})" functionality-id="displays brush and texture asset thumbnails organized by category for quick selection (in {windowId})" intent-id="provide fast access to paint brushes from the asset library during texture painting (in {windowId})">
        <!-- Header -->
        <div class="flex items-center justify-between h-[28px] px-2 border-b border-[#333]">
          <!-- Left Header Tabs -->
          <div class="flex items-center h-full gap-[1px]">
            <div class="h-full flex items-center justify-center px-2 cursor-pointer hover:bg-[#333] text-[#aaa] hover:text-[#ccc]" alt-id="Asset Shelf Menu Toggle" appearance-id="small button with a hamburger menu icon for Asset Shelf Menu Toggle (in {windowId})" location-id="leftmost item in the asset shelf header tabs, Asset Shelf Menu Toggle (in {windowId})" functionality-id="opens the asset shelf configuration menu for managing shelf settings for Asset Shelf Menu Toggle (in {windowId})" intent-id="access options for configuring the asset shelf display and content for Asset Shelf Menu Toggle (in {windowId})">
              <i class="fa-solid fa-bars text-[12px] pointer-events-none"></i>
            </div>
            <div class="h-full flex items-center justify-center px-3 cursor-pointer bg-[#333] text-[#ccc]" alt-id="Asset Shelf Tab: All" appearance-id="tab button labeled All, currently selected, shown with lighter background for Asset Shelf Tab: All (in {windowId})" location-id="second item in the asset shelf header tabs, first category tab, Asset Shelf Tab: All (in {windowId})" functionality-id="filters the asset shelf to show all available brushes and assets for Asset Shelf Tab: All (in {windowId})" intent-id="view the complete unfiltered set of available assets in the shelf for Asset Shelf Tab: All (in {windowId})">
              <span class="text-[12px] pointer-events-none">All</span>
            </div>
            <div class="h-full flex items-center justify-center px-3 cursor-pointer hover:bg-[#333] text-[#aaa] hover:text-[#ccc]" alt-id="Asset Shelf Tab: Basic" appearance-id="tab button labeled Basic (in {windowId})" location-id="third item in the Texture Paint asset shelf header tabs (in {windowId})" functionality-id="filters the asset shelf to show only basic brush presets (in {windowId})" intent-id="quickly access the foundational set of texture paint brushes (in {windowId})">
              <span class="text-[12px] pointer-events-none">Basic</span>
            </div>
            <div class="h-full flex items-center justify-center px-3 cursor-pointer hover:bg-[#333] text-[#aaa] hover:text-[#ccc]" alt-id="Asset Shelf Tab: Erase" appearance-id="tab button labeled Erase (in {windowId})" location-id="fourth item in the Texture Paint asset shelf header tabs (in {windowId})" functionality-id="filters the asset shelf to show only eraser brush presets (in {windowId})" intent-id="access brushes designed for erasing painted texture areas (in {windowId})">
              <span class="text-[12px] pointer-events-none">Erase</span>
            </div>
            <div class="h-full flex items-center justify-center px-3 cursor-pointer hover:bg-[#333] text-[#aaa] hover:text-[#ccc]" alt-id="Asset Shelf Tab: Pixel Art" appearance-id="tab button labeled Pixel Art (in {windowId})" location-id="fifth item in the Texture Paint asset shelf header tabs (in {windowId})" functionality-id="filters the asset shelf to show only pixel art brush presets (in {windowId})" intent-id="access brushes optimized for pixel-level texture painting (in {windowId})">
              <span class="text-[12px] pointer-events-none">Pixel Art</span>
            </div>
            <div class="h-full flex items-center justify-center px-3 cursor-pointer hover:bg-[#333] text-[#aaa] hover:text-[#ccc]" alt-id="Asset Shelf Tab: Utilities" appearance-id="tab button labeled Utilities (in {windowId})" location-id="sixth item in the Texture Paint asset shelf header tabs (in {windowId})" functionality-id="filters the asset shelf to show only utility brush presets (in {windowId})" intent-id="access specialized brushes for texture utility operations (in {windowId})">
              <span class="text-[12px] pointer-events-none">Utilities</span>
            </div>
          </div>
        </div>
        <!-- Brush Items Row -->
        <div class="flex items-center overflow-x-auto h-[48px] bg-[#222]">
          {#each [
            { name: 'Airbrush', icon: 'fa-spray-can', active: false },
            { name: 'Blur', icon: 'fa-droplet', active: false },
            { name: 'Paint Hard', icon: 'fa-paintbrush', active: true },
            { name: 'Paint Hard Pressure', icon: 'fa-pen-nib', active: false },
            { name: 'Paint Soft', icon: 'fa-paint-roller', active: false },
            { name: 'Paint Soft Pressure', icon: 'fa-marker', active: false },
            { name: 'Smear', icon: 'fa-hand-pointer', active: false },
            { name: 'Erase Hard', icon: 'fa-eraser', active: false, color: '#f34555' },
            { name: 'Erase Hard Pressure', icon: 'fa-eraser', active: false, color: '#f34555' },
            { name: 'Erase Soft', icon: 'fa-eraser', active: false, color: '#f34555' },
            { name: 'Erase Pixel Art', icon: 'fa-eraser', active: false, color: '#f34555' },
            { name: 'Paint Pixel Art', icon: 'fa-chess-board', active: false },
            { name: 'Clone', icon: 'fa-stamp', active: false },
            { name: 'Fill', icon: 'fa-fill-drip', active: false },
            { name: 'Mask', icon: 'fa-clone', active: false }
          ] as brush}
            <div class="h-full flex-shrink-0 w-[48px] flex flex-col items-center justify-center cursor-pointer border-r border-[#333] hover:bg-[#333] {brush.active ? 'bg-[#4772b3] shadow-[inset_0_0_0_1px_#8fb8ff]' : ''}" alt-id="Texture Paint Brush: {brush.name}" appearance-id="thumbnail button showing a sphere preview of the brush with an icon inside for Texture Paint Brush: {brush.name} (in {windowId})" location-id="brush items row of the Texture Paint Mode asset shelf at the bottom of the viewport (in {windowId})" functionality-id="selects the named brush preset for texture painting (in {windowId})" intent-id="switch to this brush preset to paint with its settings in Texture Paint mode (in {windowId})">
              <div class="w-[32px] h-[32px] rounded-full flex items-center justify-center pointer-events-none shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.8),inset_2px_2px_4px_rgba(255,255,255,0.2)] border border-[#111]" style="background: radial-gradient(circle at 35% 35%, #777 0%, #333 70%, #111 100%);">
                <i class="fa-solid {brush.icon} text-[16px] {brush.active ? 'text-white drop-shadow-md' : 'text-[#eee] drop-shadow-md'} pointer-events-none" style="{brush.color ? `color: ${brush.color};` : ''}"></i>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Asset Shelf (Bottom Bar for Vertex Paint Mode) -->
    {#if interactionMode === 'vertex_paint'}
      <div class="absolute bottom-0 left-[36px] right-0 bg-[#1d1d1d] border-t border-[#333] flex flex-col z-20" style="margin-right: 0px;" alt-id="Vertex Paint Mode Asset Shelf" appearance-id="horizontal shelf panel at the bottom of the viewport with brush icons and an All tab, visible in Vertex Paint Mode (in {windowId})" location-id="bottom edge of the 3D Viewport main area, above the status bar, visible in Vertex Paint Mode (in {windowId})" functionality-id="displays vertex paint brush asset thumbnails for quick selection (in {windowId})" intent-id="provide fast access to vertex paint brushes from the asset library during vertex painting (in {windowId})">
        <!-- Header -->
        <div class="flex items-center justify-between h-[28px] px-2 border-b border-[#333]">
          <!-- Left Header Tabs -->
          <div class="flex items-center h-full gap-[1px]">
            <div class="h-full flex items-center justify-center px-2 cursor-pointer hover:bg-[#333] text-[#aaa] hover:text-[#ccc]" alt-id="Asset Shelf Menu Toggle" appearance-id="small button with a hamburger menu icon for Asset Shelf Menu Toggle (in {windowId})" location-id="leftmost item in the asset shelf header tabs, Asset Shelf Menu Toggle (in {windowId})" functionality-id="opens the asset shelf configuration menu for managing shelf settings for Asset Shelf Menu Toggle (in {windowId})" intent-id="access options for configuring the asset shelf display and content for Asset Shelf Menu Toggle (in {windowId})">
              <i class="fa-solid fa-bars text-[12px] pointer-events-none"></i>
            </div>
            <div class="h-full flex items-center justify-center px-3 cursor-pointer bg-[#333] text-[#ccc]" alt-id="Asset Shelf Tab: All" appearance-id="tab button labeled All, currently selected, shown with lighter background for Asset Shelf Tab: All (in {windowId})" location-id="second item in the asset shelf header tabs, first category tab, Asset Shelf Tab: All (in {windowId})" functionality-id="filters the asset shelf to show all available brushes and assets for Asset Shelf Tab: All (in {windowId})" intent-id="view the complete unfiltered set of available assets in the shelf for Asset Shelf Tab: All (in {windowId})">
              <span class="text-[12px] pointer-events-none">All</span>
            </div>
          </div>
        </div>
        <!-- Brush Items Row -->
        <div class="flex items-center overflow-x-auto h-[48px] bg-[#222]">
          {#each [
            { name: 'Airbrush', icon: 'fa-spray-can', active: false },
            { name: 'Average', icon: 'fa-circle-half-stroke', active: false },
            { name: 'Blur', icon: 'fa-droplet', active: false },
            { name: 'Paint Hard', icon: 'fa-paintbrush', active: true },
            { name: 'Paint Hard Pressure', icon: 'fa-pen-nib', active: false },
            { name: 'Paint Soft', icon: 'fa-paint-roller', active: false },
            { name: 'Paint Soft Pressure', icon: 'fa-marker', active: false },
            { name: 'Smear', icon: 'fa-hand-pointer', active: false }
          ] as brush}
            <div class="h-full flex-shrink-0 w-[48px] flex flex-col items-center justify-center cursor-pointer border-r border-[#333] hover:bg-[#333] {brush.active ? 'bg-[#4772b3] shadow-[inset_0_0_0_1px_#8fb8ff]' : ''}" alt-id="Vertex Paint Brush: {brush.name}" appearance-id="thumbnail button showing a sphere preview of the brush with an icon inside for Vertex Paint Brush: {brush.name} (in {windowId})" location-id="brush items row of the Vertex Paint Mode asset shelf at the bottom of the viewport (in {windowId})" functionality-id="selects the named brush preset for vertex painting (in {windowId})" intent-id="switch to this brush preset to paint vertex colors with its settings (in {windowId})">
              <div class="w-[32px] h-[32px] rounded-full flex items-center justify-center pointer-events-none shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.8),inset_2px_2px_4px_rgba(255,255,255,0.2)] border border-[#111]" style="background: radial-gradient(circle at 35% 35%, #777 0%, #333 70%, #111 100%);">
                <i class="fa-solid {brush.icon} text-[16px] {brush.active ? 'text-white drop-shadow-md' : 'text-[#eee] drop-shadow-md'} pointer-events-none"></i>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Asset Shelf (Bottom Bar for Sculpt Mode) -->
    {#if interactionMode === 'sculpt'}
      <div class="absolute bottom-0 left-[36px] right-0 bg-[#1d1d1d] border-t border-[#333] flex flex-col z-20" style="margin-right: 0px;" alt-id="Sculpt Mode Asset Shelf" appearance-id="horizontal shelf panel at the bottom of the viewport with brush icons, category tabs, and search controls, visible in Sculpt Mode (in {windowId})" location-id="bottom edge of the 3D Viewport main area, above the status bar, visible in Sculpt Mode (in {windowId})" functionality-id="displays sculpt brush asset thumbnails organized by category with search functionality (in {windowId})" intent-id="provide fast access to sculpt brushes from the asset library during sculpting (in {windowId})">
        <!-- Header -->
        <div class="flex items-center justify-between h-[28px] px-2 border-b border-[#333]">
          <!-- Left Header Tabs -->
          <div class="flex items-center h-full gap-[1px]">
            <div class="h-full flex items-center justify-center px-2 cursor-pointer hover:bg-[#333] text-[#aaa] hover:text-[#ccc]" alt-id="Asset Shelf Menu Toggle" appearance-id="small button with a hamburger menu icon for Asset Shelf Menu Toggle (in {windowId})" location-id="leftmost item in the asset shelf header tabs, Asset Shelf Menu Toggle (in {windowId})" functionality-id="opens the asset shelf configuration menu for managing shelf settings for Asset Shelf Menu Toggle (in {windowId})" intent-id="access options for configuring the asset shelf display and content for Asset Shelf Menu Toggle (in {windowId})">
              <i class="fa-solid fa-bars text-[12px] pointer-events-none"></i>
            </div>
            <div class="h-full flex items-center justify-center px-3 cursor-pointer bg-[#333] text-[#ccc]" alt-id="Asset Shelf Tab: All" appearance-id="tab button labeled All, currently selected, shown with lighter background for Asset Shelf Tab: All (in {windowId})" location-id="second item in the asset shelf header tabs, first category tab, Asset Shelf Tab: All (in {windowId})" functionality-id="filters the asset shelf to show all available brushes and assets for Asset Shelf Tab: All (in {windowId})" intent-id="view the complete unfiltered set of available assets in the shelf for Asset Shelf Tab: All (in {windowId})">
              <span class="text-[12px] pointer-events-none">All</span>
            </div>
            <div class="h-full flex items-center justify-center px-3 cursor-pointer hover:bg-[#333] text-[#aaa] hover:text-[#ccc]" alt-id="Asset Shelf Tab: General" appearance-id="tab button labeled General (in {windowId})" location-id="third item in the Sculpt Mode asset shelf header tabs (in {windowId})" functionality-id="filters the asset shelf to show only general sculpt brush presets (in {windowId})" intent-id="access the broad-purpose sculpt brushes for general mesh shaping (in {windowId})">
              <span class="text-[12px] pointer-events-none">General</span>
            </div>
            <div class="h-full flex items-center justify-center px-3 cursor-pointer hover:bg-[#333] text-[#aaa] hover:text-[#ccc]" alt-id="Asset Shelf Tab: Paint" appearance-id="tab button labeled Paint (in {windowId})" location-id="fourth item in the Sculpt Mode asset shelf header tabs (in {windowId})" functionality-id="filters the asset shelf to show only sculpt paint brush presets (in {windowId})" intent-id="access brushes that paint vertex colors while sculpting (in {windowId})">
              <span class="text-[12px] pointer-events-none">Paint</span>
            </div>
            <div class="h-full flex items-center justify-center px-3 cursor-pointer hover:bg-[#333] text-[#aaa] hover:text-[#ccc]" alt-id="Asset Shelf Tab: Simulation" appearance-id="tab button labeled Simulation (in {windowId})" location-id="fifth item in the Sculpt Mode asset shelf header tabs (in {windowId})" functionality-id="filters the asset shelf to show only simulation-type sculpt brushes (in {windowId})" intent-id="access cloth and physics simulation brush types for dynamic sculpting (in {windowId})">
              <span class="text-[12px] pointer-events-none">Simulation</span>
            </div>
          </div>
          <!-- Right Header Controls -->
          <div class="flex items-center h-full gap-2 py-1">
            <div class="flex items-center bg-[#282828] border border-[#111] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] px-1.5 py-0.5 cursor-pointer hover:bg-[#333]" alt-id="Display type dropdown" appearance-id="small button with a grid icon and a chevron, showing the current display mode (in {windowId})" location-id="right side of the Sculpt Mode asset shelf header, first of two controls (in {windowId})" functionality-id="opens a dropdown to change how brush assets are displayed in the shelf (in {windowId})" intent-id="switch between grid and list view modes for the asset shelf brush thumbnails (in {windowId})">
              <i class="fa-solid fa-grip text-[12px] text-[#ccc] pointer-events-none"></i>
              <i class="fa-solid fa-chevron-down text-[9px] text-[#aaa] ml-1 pointer-events-none"></i>
            </div>
            <div class="flex items-center bg-[#282828] border border-[#111] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] px-2 py-0.5 w-[140px]" alt-id="Search assets input container" appearance-id="small search input field with a magnifying glass icon, 140px wide (in {windowId})" location-id="right side of the Sculpt Mode asset shelf header, second of two controls (in {windowId})" functionality-id="container for the text search input to filter brush assets (in {windowId})" intent-id="provide a visual container for the asset shelf search functionality (in {windowId})">
              <i class="fa-solid fa-magnifying-glass text-[12px] text-[#888] pointer-events-none"></i>
              <input type="text" class="bg-transparent border-none outline-none text-[#ccc] text-[12px] ml-2 w-full placeholder-[#888]" placeholder="Search" alt-id="Search assets input field" appearance-id="text input field with placeholder text Search (in {windowId})" location-id="inside the search assets input container in the Sculpt Mode asset shelf header (in {windowId})" functionality-id="accepts text input to filter the visible brush assets by name (in {windowId})" intent-id="find specific brushes quickly by typing their name in the search field (in {windowId})">
            </div>
          </div>
        </div>
        <!-- Brush Items Row -->
        <div class="flex items-center overflow-x-auto h-[48px] bg-[#222]">
          {#each [
            { name: 'Blob', icon: 'fa-droplet', active: true },
            { name: 'Clay', icon: 'fa-cube', active: false },
            { name: 'Clay Strips', icon: 'fa-bars-staggered', active: false },
            { name: 'Clay Thumb', icon: 'fa-hand-pointer', active: false },
            { name: 'Crease Polish', icon: 'fa-wand-magic-sparkles', active: false },
            { name: 'Crease Sharp', icon: 'fa-bolt', active: false },
            { name: 'Draw', icon: 'fa-pen', active: false },
            { name: 'Draw Sharp', icon: 'fa-pen-nib', active: false },
            { name: 'Inflate/Deflate', icon: 'fa-arrows-to-circle', active: false },
            { name: 'Layer', icon: 'fa-layer-group', active: false },
            { name: 'Fill/Deepen', icon: 'fa-fill-drip', active: false },
            { name: 'Flatten/Contrast', icon: 'fa-compress', active: false },
            { name: 'Plateau', icon: 'fa-chart-area', active: false },
            { name: 'Scrape Multiplane', icon: 'fa-layer-group', active: false },
            { name: 'Scrape/Fill', icon: 'fa-broom', active: false }
          ] as brush, i}
            <div class="h-full flex-shrink-0 w-[48px] flex flex-col items-center justify-center cursor-pointer border-r border-[#333] hover:bg-[#333] {brush.active ? 'bg-[#4772b3] shadow-[inset_0_0_0_1px_#8fb8ff]' : ''}" alt-id="Sculpt Brush: {brush.name}" appearance-id="thumbnail button showing a sphere preview of the sculpt brush with an icon inside, highlighted in blue when active (in {windowId})" location-id="brush items row of the Sculpt Mode asset shelf at the bottom of the viewport (in {windowId})" functionality-id="selects the named sculpt brush preset as the active brush (in {windowId})" intent-id="switch to this sculpt brush to apply its specific behavior when sculpting (in {windowId})">
              <div class="w-[32px] h-[32px] rounded-full flex items-center justify-center pointer-events-none shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.8),inset_2px_2px_4px_rgba(255,255,255,0.2)] border border-[#111]" style="background: radial-gradient(circle at 35% 35%, #777 0%, #333 70%, #111 100%);">
                <i class="fa-solid {brush.icon} text-[16px] {brush.active ? 'text-white drop-shadow-md' : 'text-[#eee] drop-shadow-md'} pointer-events-none"></i>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    {#if isObjectContextMenuOpen}
      <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => { 
        isObjectContextMenuOpen = false; 
        isObjectContextMenuConvertToOpen = false; 
        isObjectContextMenuSetOriginOpen = false; 
        isObjectContextMenuMirrorOpen = false; 
        isObjectContextMenuSnapOpen = false; 
        isObjectContextMenuParentOpen = false; 
        isObjectContextMenuMoveToCollectionOpen = false; 
        isObjectContextMenuMoveToCollectionCommonOpen = false; 
        updateOpenParam(); 
      }}></div>
      <div class="absolute bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[100] w-[250px] rounded-sm flex flex-col"
           style="left: {contextMenuX}px; top: {contextMenuY}px;"
           on:click|stopPropagation
           alt-id="Object context menu" appearance-id="dark dropdown context menu with the title Object and multiple grouped items (in {windowId})" location-id="floating at the mouse cursor position in the 3D Viewport, visible on right-click (in {windowId})" functionality-id="provides quick access to common object operations without opening the menu bar (in {windowId})" intent-id="perform frequently used operations on the selected object via right-click context menu (in {windowId})">
        <div class="px-5 pb-1.5 pt-0.5 text-[#999] text-[12px] border-b border-[#333] mb-1 pointer-events-none">Object</div>
        
        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Shade Smooth" appearance-id="menu item text: Shade Smooth for Shade Smooth (in {windowId})" location-id="first item in the Object context menu (in {windowId})" functionality-id="applies smooth shading to the right-clicked object by interpolating face normals (in {windowId})" intent-id="make the object surface appear smooth without subdividing the geometry for Shade Smooth (in {windowId})">
           <span><span class="underline">S</span>hade Smooth</span>
        </div>
        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Shade Auto Smooth" appearance-id="menu item text: Shade Auto Smooth (in {windowId})" location-id="second item in the Object context menu (in {windowId})" functionality-id="automatically applies smooth shading based on edge angle threshold (in {windowId})" intent-id="blend smooth and flat shading based on geometry angle automatically for Shade Auto Smooth (in {windowId})">
           <span>Shade <span class="underline">A</span>uto Smooth</span>
        </div>
        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Shade Flat" appearance-id="menu item text: Shade Flat for Shade Flat (in {windowId})" location-id="third item in the Object context menu (in {windowId})" functionality-id="applies flat shading to the right-clicked object showing individual facets (in {windowId})" intent-id="make the object surface appear faceted for stylized or low-poly rendering for Shade Flat (in {windowId})">
           <span>Shade <span class="underline">F</span>lat</span>
        </div>
        
        <div class="my-1 border-t border-[#333]"></div>
        
        <div class="px-5 py-[3px] {isObjectContextMenuConvertToOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group relative" alt-id="Convert To" appearance-id="menu item with a right-pointing caret arrow, highlighted when submenu is open for Convert To (in {windowId})" location-id="Object context menu, below the Shade section (in {windowId})" functionality-id="opens the Convert To submenu for converting the object to a different data type (in {windowId})" intent-id="change the object type such as converting a curve to a mesh via the context menu (in {windowId})" on:click|stopPropagation={() => { isObjectContextMenuConvertToOpen = !isObjectContextMenuConvertToOpen; updateOpenParam(); }}>
           <span><span class="underline">C</span>onvert To</span>
           <i class="fa-solid fa-caret-right text-[10px] {isObjectContextMenuConvertToOpen ? 'text-white' : 'text-[#888]'} pointer-events-none group-hover:text-white"></i>
           
           {#if isObjectContextMenuConvertToOpen}
             <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Convert To nested menu" appearance-id="dark dropdown panel listing data type conversion options with icons (in {windowId})" location-id="to the right of Convert To item in the Object context menu (in {windowId})" functionality-id="contains options for converting the object to Mesh, Curve, Curves, Point Cloud, or Grease Pencil (in {windowId})" intent-id="choose the target data type when converting an object from the context menu (in {windowId})">
               <div class="px-5 py-[5px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-3" alt-id="Convert To Mesh" appearance-id="menu item with a triangle mesh icon and the text Mesh (in {windowId})" location-id="first item in the Convert To nested menu (Object context menu) (in {windowId})" functionality-id="converts the selected object data to a mesh type (in {windowId})" intent-id="turn curves, metaballs, or other objects into an editable polygon mesh (in {windowId})">
                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80">
                   <path d="M1 1 L11 1 L6 9.5 Z" />
                 </svg>
                 <span><span class="underline">M</span>esh</span>
               </div>
               <div class="px-5 py-[5px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-3" alt-id="Convert To Curve" appearance-id="menu item with a curve arc icon and the text Curve (in {windowId})" location-id="second item in the Convert To nested menu (Object context menu) (in {windowId})" functionality-id="converts the selected mesh or other object to a bezier curve (in {windowId})" intent-id="transform the object into a spline-based curve for curve editing (in {windowId})">
                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80">
                   <path d="M8 2 A 5 5 0 0 0 4 10" stroke-linecap="round" />
                 </svg>
                 <span><span class="underline">C</span>urve</span>
               </div>
               <div class="px-5 py-[5px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-3" alt-id="Convert To Curves" appearance-id="menu item with a multi-strand curves icon and the text Curves (in {windowId})" location-id="third item in the Convert To nested menu (Object context menu) (in {windowId})" functionality-id="converts the selected object to a hair curves data type (in {windowId})" intent-id="transform the object into a curves object for hair and strand editing (in {windowId})">
                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80">
                   <path d="M3 11 C 4 7, 7 3, 9 3" stroke-linecap="round" />
                   <path d="M6 11 C 7 7, 10 3, 12 3" stroke-linecap="round" />
                   <path d="M9 11 C 10 8, 12 5, 13 5" stroke-linecap="round" />
                 </svg>
                 <span><span class="underline">C</span>urves</span>
               </div>
               <div class="px-5 py-[5px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[14px]" alt-id="Convert To Point Cloud" appearance-id="menu item with a point cluster icon and the text Point Cloud (in {windowId})" location-id="fourth item in the Convert To nested menu (Object context menu) (in {windowId})" functionality-id="converts the selected object to a point cloud data type (in {windowId})" intent-id="transform the object into scattered points for point cloud editing (in {windowId})">
                 <div class="w-[12px] h-[12px] flex flex-col items-center justify-center pointer-events-none relative -left-[1px] opacity-80">
                   <div class="w-[4px] h-[4px] bg-current rounded-full mb-[1px]"></div>
                   <div class="flex gap-[2px]">
                     <div class="w-[4px] h-[4px] bg-current rounded-full"></div>
                     <div class="w-[4px] h-[4px] bg-current rounded-full"></div>
                   </div>
                 </div>
                 <span><span class="underline">P</span>oint Cloud</span>
               </div>
               <div class="px-5 py-[5px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-3" alt-id="Convert To Grease Pencil" appearance-id="menu item with a Grease Pencil stroke icon and the text Grease Pencil (in {windowId})" location-id="fifth item in the Convert To nested menu (Object context menu) (in {windowId})" functionality-id="converts the selected object to a Grease Pencil object (in {windowId})" intent-id="transform the object into a 2D Grease Pencil stroke object for 2D animation (in {windowId})">
                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80">
                   <path d="M2 12 Q 4 1, 8 2 T 12 8 T 8 12 T 2 12" stroke-linecap="round" stroke-linejoin="round" />
                 </svg>
                 <span><span class="underline">G</span>rease Pencil</span>
               </div>
             </div>
           {/if}
        </div>
        <div class="px-5 py-[3px] {isObjectContextMenuSetOriginOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group relative" alt-id="Set Origin" appearance-id="menu item with a right-pointing caret arrow, highlighted when submenu is open for Set Origin (in {windowId})" location-id="Object context menu, below the Convert To item (in {windowId})" functionality-id="opens the Set Origin submenu for repositioning the object origin (in {windowId})" intent-id="adjust where the object pivot point is located using the context menu (in {windowId})" on:click|stopPropagation={() => { isObjectContextMenuSetOriginOpen = !isObjectContextMenuSetOriginOpen; updateOpenParam(); }}>
           <span>Set <span class="underline">O</span>rigin</span>
           <i class="fa-solid fa-caret-right text-[10px] {isObjectContextMenuSetOriginOpen ? 'text-white' : 'text-[#888]'} pointer-events-none group-hover:text-white"></i>
           
           {#if isObjectContextMenuSetOriginOpen}
             <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[260px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Set Origin nested menu" appearance-id="dark dropdown panel listing origin placement options for Set Origin nested menu (in {windowId})" location-id="to the right of Set Origin item in the Object context menu (in {windowId})" functionality-id="contains options for repositioning the object origin relative to geometry or cursor for Set Origin nested menu (in {windowId})" intent-id="provide precise control over the object pivot point position from the context menu (in {windowId})">
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Geometry to Origin" appearance-id="menu item text: Geometry to Origin for Geometry to Origin (in {windowId})" location-id="first item in the Set Origin nested menu (Object context menu) (in {windowId})" functionality-id="moves the object origin to the center of the mesh geometry (in {windowId})" intent-id="center the pivot point within the object geometry boundaries (in {windowId})">
                 <span><span class="underline">G</span>eometry to Origin</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Origin to Geometry" appearance-id="menu item text: Origin to Geometry for Origin to Geometry (in {windowId})" location-id="second item in the Set Origin nested menu (Object context menu) (in {windowId})" functionality-id="moves the object to align its origin to the geometry bounding center (in {windowId})" intent-id="reposition the object so the geometry center matches the origin (in {windowId})">
                 <span><span class="underline">O</span>rigin to Geometry</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Origin to 3D Cursor" appearance-id="menu item text: Origin to 3D Cursor for Origin to 3D Cursor (in {windowId})" location-id="third item in the Set Origin nested menu (Object context menu) (in {windowId})" functionality-id="moves the object origin to the current 3D cursor location (in {windowId})" intent-id="precisely place the object pivot at the 3D cursor position (in {windowId})">
                 <span>Origin <span class="underline">t</span>o 3D Cursor</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Origin to Center of Mass (Surface)" appearance-id="menu item text: Origin to Center of Mass (Surface) for Origin to Center of Mass (Surface) (in {windowId})" location-id="fourth item in the Set Origin nested menu (Object context menu) (in {windowId})" functionality-id="moves the origin to the calculated surface center of mass (in {windowId})" intent-id="balance the pivot point based on mesh surface distribution (in {windowId})">
                 <span>Origin to <span class="underline">C</span>enter of Mass (Surface)</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Origin to Center of Mass (Volume)" appearance-id="menu item text: Origin to Center of Mass (Volume) for Origin to Center of Mass (Volume) (in {windowId})" location-id="fifth item in the Set Origin nested menu (Object context menu) (in {windowId})" functionality-id="moves the origin to the calculated volumetric center of mass (in {windowId})" intent-id="balance the pivot point based on mesh volume distribution (in {windowId})">
                 <span>Origin to Center of <span class="underline">M</span>ass (Volume)</span>
               </div>
             </div>
           {/if}
        </div>
        
        <div class="my-1 border-t border-[#333]"></div>
        
        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group" alt-id="Copy Objects" appearance-id="menu item with a copy icon and keyboard shortcut Cmd C for Copy Objects (in {windowId})" location-id="Object context menu, below the Set Origin item (in {windowId})" functionality-id="copies the right-clicked object to the clipboard (in {windowId})" intent-id="prepare the object for pasting in the same or another scene (in {windowId})">
           <div class="flex items-center gap-[6px] relative -left-4"><i class="fa-regular fa-copy text-[12px] text-[#aaa] group-hover:text-white w-3 text-center"></i> <span>Cop<span class="underline">y</span> Objects</span></div>
           <span class="text-[#888] text-[11px] group-hover:text-white font-mono">⌘ C</span>
        </div>
        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group" alt-id="Paste Objects" appearance-id="menu item with a paste icon and keyboard shortcut Cmd V (in {windowId})" location-id="Object context menu, below the Copy Objects item (in {windowId})" functionality-id="pastes previously copied objects into the scene for Paste Objects (in {windowId})" intent-id="place clipboard objects into the current scene via the context menu (in {windowId})">
           <div class="flex items-center gap-[6px] relative -left-4"><i class="fa-solid fa-arrow-right-to-bracket text-[12px] text-[#aaa] group-hover:text-white w-3 text-center transform -scale-y-100 rotate-90"></i> <span><span class="underline">P</span>aste Objects</span></div>
           <span class="text-[#888] text-[11px] group-hover:text-white font-mono">⌘ V</span>
        </div>
        
        <div class="my-1 border-t border-[#333]"></div>
        
        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group" alt-id="Duplicate Objects" appearance-id="menu item with a clone icon and keyboard shortcut Shift D (in {windowId})" location-id="Object context menu, below the Paste Objects item (in {windowId})" functionality-id="creates an independent duplicate of the right-clicked object (in {windowId})" intent-id="make a new copy of the object that can be edited separately for Duplicate Objects (in {windowId})">
           <div class="flex items-center gap-[6px] relative -left-4"><i class="fa-regular fa-clone text-[12px] text-[#aaa] group-hover:text-white w-3 text-center"></i> <span><span class="underline">D</span>uplicate Objects</span></div>
           <span class="text-[#888] text-[11px] group-hover:text-white font-mono">⇧ D</span>
        </div>
        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group" alt-id="Duplicate Linked" appearance-id="menu item with keyboard shortcut Alt D for Duplicate Linked (in {windowId})" location-id="Object context menu, below the Duplicate Objects item (in {windowId})" functionality-id="creates a linked duplicate sharing the same mesh data as the original for Duplicate Linked (in {windowId})" intent-id="create an instance that updates when the original mesh changes for Duplicate Linked (in {windowId})">
           <div class="flex items-center gap-[6px] relative -left-4"><span class="w-3"></span> <span>Duplicate <span class="underline">L</span>inked</span></div>
           <span class="text-[#888] text-[11px] group-hover:text-white font-mono">⌥ D</span>
        </div>
        
        <div class="my-1 border-t border-[#333]"></div>
        
        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group" alt-id="Rename Active Object" appearance-id="menu item text: Rename Active Object... with keyboard shortcut F2 (in {windowId})" location-id="Object context menu, below the Duplicate Linked item (in {windowId})" functionality-id="opens an inline text field to rename the currently active object (in {windowId})" intent-id="quickly assign a new name to the selected object (in {windowId})">
           <span><span class="underline">R</span>ename Active Object...</span>
           <span class="text-[#888] text-[11px] group-hover:text-white font-mono">F2</span>
        </div>
        
        <div class="my-1 border-t border-[#333]"></div>
        
        <div class="px-5 py-[3px] {isObjectContextMenuMirrorOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group relative" alt-id="Mirror" appearance-id="menu item with a right-pointing caret arrow, highlighted when submenu is open for Mirror (in {windowId})" location-id="Object context menu, below the Rename Active Object item (in {windowId})" functionality-id="opens the Mirror submenu for flipping the object along an axis for Mirror (in {windowId})" intent-id="create a mirrored version of the object along a chosen axis (in {windowId})" on:click|stopPropagation={() => { isObjectContextMenuMirrorOpen = !isObjectContextMenuMirrorOpen; updateOpenParam(); }}>
           <span><span class="underline">M</span>irror</span>
           <i class="fa-solid fa-caret-right text-[10px] {isObjectContextMenuMirrorOpen ? 'text-white' : 'text-[#888]'} pointer-events-none group-hover:text-white"></i>
           
           {#if isObjectContextMenuMirrorOpen}
             <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Mirror nested menu" appearance-id="dark dropdown panel listing mirror axis options grouped into Interactive, Global, and Local sections (in {windowId})" location-id="to the right of Mirror item in the Object context menu (in {windowId})" functionality-id="contains options for mirroring the object along X, Y, or Z global or local axes (in {windowId})" intent-id="choose the mirror axis to flip the object in the desired direction (in {windowId})">
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Interactive Mirror" appearance-id="menu item text: Interactive Mirror with keyboard shortcut Ctrl M (in {windowId})" location-id="first item in the Mirror nested menu (Object context menu) (in {windowId})" functionality-id="activates interactive mirror mode allowing the user to choose the axis by pressing X, Y, or Z (in {windowId})" intent-id="interactively select the mirror axis by pressing a key after entering mirror mode (in {windowId})">
                 <span><span class="underline">I</span>nteractive Mirror</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">^ M</span>
               </div>
               
               <div class="my-1 border-t border-[#333]"></div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="X Global" appearance-id="menu item text: X Global (in {windowId})" location-id="first item in the Global axis section of the Mirror nested menu (Object context menu) (in {windowId})" functionality-id="mirrors the selected object along the global X axis (in {windowId})" intent-id="flip the object horizontally in world space (in {windowId})">
                 <span><span class="underline">X</span> Global</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Y Global" appearance-id="menu item text: Y Global (in {windowId})" location-id="second item in the Global axis section of the Mirror nested menu (Object context menu) (in {windowId})" functionality-id="mirrors the selected object along the global Y axis (in {windowId})" intent-id="flip the object along the depth axis in world space (in {windowId})">
                 <span><span class="underline">Y</span> Global</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Z Global" appearance-id="menu item text: Z Global (in {windowId})" location-id="third item in the Global axis section of the Mirror nested menu (Object context menu) (in {windowId})" functionality-id="mirrors the selected object along the global Z axis (in {windowId})" intent-id="flip the object vertically in world space (in {windowId})">
                 <span><span class="underline">Z</span> Global</span>
               </div>
               
               <div class="my-1 border-t border-[#333]"></div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="X Local" appearance-id="menu item text: X Local (in {windowId})" location-id="first item in the Local axis section of the Mirror nested menu (Object context menu) (in {windowId})" functionality-id="mirrors the selected object along its own local X axis (in {windowId})" intent-id="flip the object along its own horizontal axis regardless of world rotation (in {windowId})">
                 <span>X <span class="underline">L</span>ocal</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Y Local" appearance-id="menu item text: Y Local (in {windowId})" location-id="second item in the Local axis section of the Mirror nested menu (Object context menu) (in {windowId})" functionality-id="mirrors the selected object along its own local Y axis (in {windowId})" intent-id="flip the object along its own depth axis regardless of world rotation (in {windowId})">
                 <span>Y L<span class="underline">o</span>cal</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Z Local" appearance-id="menu item text: Z Local (in {windowId})" location-id="third item in the Local axis section of the Mirror nested menu (Object context menu) (in {windowId})" functionality-id="mirrors the selected object along its own local Z axis (in {windowId})" intent-id="flip the object along its own vertical axis regardless of world rotation (in {windowId})">
                 <span>Z Local</span>
               </div>
             </div>
           {/if}
        </div>
        <div class="px-5 py-[3px] {isObjectContextMenuSnapOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group relative" alt-id="Snap" appearance-id="menu item with a right-pointing caret arrow, highlighted when submenu is open for Snap (in {windowId})" location-id="Object context menu, below the Mirror item (in {windowId})" functionality-id="opens the Snap submenu for snapping objects and the 3D cursor to various targets (in {windowId})" intent-id="precisely align objects or the 3D cursor to scene elements using snap targets (in {windowId})" on:click|stopPropagation={() => { isObjectContextMenuSnapOpen = !isObjectContextMenuSnapOpen; updateOpenParam(); }}>
           <span>S<span class="underline">n</span>ap</span>
           <i class="fa-solid fa-caret-right text-[10px] {isObjectContextMenuSnapOpen ? 'text-white' : 'text-[#888]'} pointer-events-none group-hover:text-white"></i>
           
           {#if isObjectContextMenuSnapOpen}
             <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[260px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Snap nested menu" appearance-id="dark dropdown panel listing snap targets for selection and cursor (in {windowId})" location-id="to the right of Snap item in the Object context menu (in {windowId})" functionality-id="contains options for snapping the selection or 3D cursor to grid, cursor, or active elements (in {windowId})" intent-id="quickly position objects and the 3D cursor at precise snap targets (in {windowId})">
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Selection to Grid" appearance-id="menu item text: Selection to Grid (in {windowId})" location-id="first item in the Snap nested menu (Object context menu) (in {windowId})" functionality-id="snaps the selected object to the nearest grid intersection (in {windowId})" intent-id="align the object precisely to the scene grid (in {windowId})">
                 <span><span class="underline">S</span>election to Grid</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Selection to Cursor" appearance-id="menu item text: Selection to Cursor (in {windowId})" location-id="second item in the Snap nested menu (Object context menu) (in {windowId})" functionality-id="moves the selected object to the location of the 3D cursor (in {windowId})" intent-id="place the object exactly at the 3D cursor position (in {windowId})">
                 <span>Selec<span class="underline">t</span>ion to Cursor</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Selection to Cursor (Keep Offset)" appearance-id="menu item text: Selection to Cursor (Keep Offset) (in {windowId})" location-id="third item in the Snap nested menu (Object context menu) (in {windowId})" functionality-id="moves the selected object to the 3D cursor while preserving relative offsets (in {windowId})" intent-id="align the selection to the cursor without changing the relative positions of selected objects (in {windowId})">
                 <span>Selection to <span class="underline">C</span>ursor (Keep Offset)</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Selection to Active" appearance-id="menu item text: Selection to Active (in {windowId})" location-id="fourth item in the Snap nested menu (Object context menu) (in {windowId})" functionality-id="snaps all selected objects to the position of the active object (in {windowId})" intent-id="stack multiple selected objects at the active object location (in {windowId})">
                 <span>Selection to <span class="underline">A</span>ctive</span>
               </div>
               
               <div class="my-1 border-t border-[#333]"></div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Cursor to Selected" appearance-id="menu item text: Cursor to Selected (in {windowId})" location-id="fifth item in the Snap nested menu (Object context menu) (in {windowId})" functionality-id="moves the 3D cursor to the location of the selected object (in {windowId})" intent-id="place the 3D cursor at the selected object for future snap operations (in {windowId})">
                 <span>C<span class="underline">u</span>rsor to Selected</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Cursor to World Origin" appearance-id="menu item text: Cursor to World Origin (in {windowId})" location-id="sixth item in the Snap nested menu (Object context menu) (in {windowId})" functionality-id="moves the 3D cursor to the world origin (0, 0, 0) (in {windowId})" intent-id="reset the 3D cursor to the center of the scene (in {windowId})">
                 <span>Cursor to <span class="underline">W</span>orld Origin</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Cursor to Grid" appearance-id="menu item text: Cursor to Grid (in {windowId})" location-id="seventh item in the Snap nested menu (Object context menu) (in {windowId})" functionality-id="snaps the 3D cursor to the nearest grid intersection (in {windowId})" intent-id="align the 3D cursor precisely to the scene grid for accurate object placement (in {windowId})">
                 <span>Cursor to <span class="underline">G</span>rid</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Cursor to Active" appearance-id="menu item text: Cursor to Active (in {windowId})" location-id="eighth item in the Snap nested menu (Object context menu) (in {windowId})" functionality-id="moves the 3D cursor to the location of the active object (in {windowId})" intent-id="use the active object position as the new 3D cursor location (in {windowId})">
                 <span>Cu<span class="underline">r</span>sor to Active</span>
               </div>
             </div>
           {/if}
        </div>
        <div class="px-5 py-[3px] {isObjectContextMenuParentOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group relative" alt-id="Parent" appearance-id="menu item with a right-pointing caret arrow, highlighted when submenu is open for Parent (in {windowId})" location-id="Object context menu, below the Snap item (in {windowId})" functionality-id="opens the Parent submenu for creating parent-child relationships between objects (in {windowId})" intent-id="set up object hierarchy by choosing the parenting method from the context menu (in {windowId})" on:click|stopPropagation={() => { isObjectContextMenuParentOpen = !isObjectContextMenuParentOpen; updateOpenParam(); }}>
           <span>Par<span class="underline">e</span>nt</span>
           <i class="fa-solid fa-caret-right text-[10px] {isObjectContextMenuParentOpen ? 'text-white' : 'text-[#888]'} pointer-events-none group-hover:text-white"></i>
           
           {#if isObjectContextMenuParentOpen}
             <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[300px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Parent nested menu" appearance-id="dark dropdown panel listing parenting method options (in {windowId})" location-id="to the right of Parent item in the Object context menu (in {windowId})" functionality-id="contains options for various parent types including Object, Armature, Bone, Curve, and more (in {windowId})" intent-id="choose how the child object should be parented to the active parent object (in {windowId})">
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Object Parent" appearance-id="menu item text: Object with keyboard shortcut Cmd P (in {windowId})" location-id="first item in the Parent nested menu (Object context menu) (in {windowId})" functionality-id="creates a simple object parent relationship linking child transforms to the parent (in {windowId})" intent-id="make the child follow the parent object movements without deformation (in {windowId})">
                 <span><span class="underline">O</span>bject</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Armature Deform" appearance-id="menu item text: Armature Deform with keyboard shortcut Cmd P (in {windowId})" location-id="second item in the Parent nested menu (Object context menu) (in {windowId})" functionality-id="parents the object to an armature for skeletal deformation (in {windowId})" intent-id="rig the mesh object so the armature bones can deform it (in {windowId})">
                 <span><span class="underline">A</span>rmature Deform</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between pl-9" alt-id="With Empty Groups" appearance-id="menu item text: With Empty Groups (indented), with keyboard shortcut Cmd P (in {windowId})" location-id="third item in the Parent nested menu, sub-option under Armature Deform (in {windowId})" functionality-id="parents to the armature and creates empty vertex groups for manual weight painting (in {windowId})" intent-id="set up armature parenting with blank vertex groups ready for manual weight assignment (in {windowId})">
                 <span><span class="underline">W</span>ith Empty Groups</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between pl-9" alt-id="With Automatic Weights" appearance-id="menu item text: With Automatic Weights (indented), with keyboard shortcut Cmd P (in {windowId})" location-id="fourth item in the Parent nested menu, sub-option under Armature Deform (in {windowId})" functionality-id="parents to the armature and automatically calculates bone influence weights (in {windowId})" intent-id="quickly rig the mesh with auto-calculated weights for basic armature deformation (in {windowId})">
                 <span>Wit<span class="underline">h</span> Automatic Weights</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between pl-9" alt-id="With Envelope Weights" appearance-id="menu item text: With Envelope Weights (indented), with keyboard shortcut Cmd P (in {windowId})" location-id="fifth item in the Parent nested menu, sub-option under Armature Deform (in {windowId})" functionality-id="parents to the armature and uses bone envelope distances to calculate weights (in {windowId})" intent-id="use bone envelope volumes to automatically assign vertex weights (in {windowId})">
                 <span>With <span class="underline">E</span>nvelope Weights</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Bone" appearance-id="menu item text: Bone with keyboard shortcut Cmd P (in {windowId})" location-id="sixth item in the Parent nested menu (Object context menu) (in {windowId})" functionality-id="parents the object to a specific bone in an armature object (in {windowId})" intent-id="attach an object to a specific bone so it follows that bone during animation (in {windowId})">
                 <span><span class="underline">B</span>one</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Bone Relative" appearance-id="menu item text: Bone Relative with keyboard shortcut Cmd P (in {windowId})" location-id="seventh item in the Parent nested menu (Object context menu) (in {windowId})" functionality-id="parents the object to a specific bone using bone-relative space (in {windowId})" intent-id="attach an object to a bone while preserving relative offset for editing flexibility (in {windowId})">
                 <span>Bone <span class="underline">R</span>elative</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Curve Deform" appearance-id="menu item text: Curve Deform with keyboard shortcut Cmd P (in {windowId})" location-id="eighth item in the Parent nested menu (Object context menu) (in {windowId})" functionality-id="parents the object to a curve and deforms the object along the curve shape (in {windowId})" intent-id="make the object bend and follow a curve path for procedural deformation (in {windowId})">
                 <span><span class="underline">C</span>urve Deform</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Follow Path" appearance-id="menu item text: Follow Path with keyboard shortcut Cmd P (in {windowId})" location-id="ninth item in the Parent nested menu (Object context menu) (in {windowId})" functionality-id="creates a Follow Path constraint making the object animate along the curve (in {windowId})" intent-id="animate the object moving along a path using the Follow Path parent type (in {windowId})">
                 <span><span class="underline">F</span>ollow Path</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Path Constraint" appearance-id="menu item text: Path Constraint with keyboard shortcut Cmd P (in {windowId})" location-id="tenth item in the Parent nested menu (Object context menu) (in {windowId})" functionality-id="adds a Follow Path constraint to the object without parenting (in {windowId})" intent-id="constrain the object to move along a curve without a full parent relationship (in {windowId})">
                 <span><span class="underline">P</span>ath Constraint</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Lattice Deform" appearance-id="menu item text: Lattice Deform with keyboard shortcut Cmd P (in {windowId})" location-id="eleventh item in the Parent nested menu (Object context menu) (in {windowId})" functionality-id="parents the object to a lattice for cage-based deformation (in {windowId})" intent-id="deform the object by editing the control points of a surrounding lattice cage (in {windowId})">
                 <span><span class="underline">L</span>attice Deform</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Vertex" appearance-id="menu item text: Vertex with keyboard shortcut Cmd P (in {windowId})" location-id="twelfth item in the Parent nested menu (Object context menu) (in {windowId})" functionality-id="parents the object to a specific vertex on another mesh (in {windowId})" intent-id="attach an object to a mesh vertex so it moves with that point during editing (in {windowId})">
                 <span>Verte<span class="underline">x</span></span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Vertex (Triangle)" appearance-id="menu item text: Vertex (Triangle) with keyboard shortcut Cmd P (in {windowId})" location-id="thirteenth item in the Parent nested menu (Object context menu) (in {windowId})" functionality-id="parents the object to three vertices defining a triangular face (in {windowId})" intent-id="attach an object to a three-vertex face for face-based tracking (in {windowId})">
                 <span>Vertex (<span class="underline">T</span>riangle)</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               
               <div class="my-1 border-t border-[#333]"></div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Make Parent without Inverse" appearance-id="menu item text: Make Parent without Inverse (in {windowId})" location-id="fourteenth item in the Parent nested menu (Object context menu) (in {windowId})" functionality-id="creates a parent relationship without compensating with an inverse transformation (in {windowId})" intent-id="parent the object while keeping its current world transform applied as-is (in {windowId})">
                 <span><span class="underline">M</span>ake Parent without Inverse</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Make Parent without Inverse (Keep Transform)" appearance-id="menu item text: Make Parent without Inverse (Keep Transform) (in {windowId})" location-id="fifteenth item in the Parent nested menu (Object context menu) (in {windowId})" functionality-id="creates a parent relationship without inverse while keeping the current world transform (in {windowId})" intent-id="parent the object and preserve its existing world position after parenting (in {windowId})">
                 <span>Make Parent without <span class="underline">I</span>nverse (Keep Transform)</span>
               </div>
               
               <div class="my-1 border-t border-[#333]"></div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Clear Parent" appearance-id="menu item text: Clear Parent with keyboard shortcut Alt P (in {windowId})" location-id="sixteenth item in the Parent nested menu (Object context menu) (in {windowId})" functionality-id="removes the parent relationship and resets the object to world space (in {windowId})" intent-id="unparent the object so it moves independently in the scene (in {windowId})">
                 <span>Clear Pare<span class="underline">n</span>t</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌥ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Clear and Keep Transformation" appearance-id="menu item text: Clear and Keep Transformation with keyboard shortcut Alt P (in {windowId})" location-id="seventeenth item in the Parent nested menu (Object context menu) (in {windowId})" functionality-id="removes the parent relationship while preserving the object world transform (in {windowId})" intent-id="unparent the object and maintain its current visual position in world space (in {windowId})">
                 <span>Clear and <span class="underline">K</span>eep Transformation</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌥ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Clear Parent Inverse" appearance-id="menu item text: Clear Parent Inverse with keyboard shortcut Alt P (in {windowId})" location-id="eighteenth item in the Parent nested menu (Object context menu) (in {windowId})" functionality-id="clears the inverse parent matrix without removing the parent relationship (in {windowId})" intent-id="reset the parent inverse correction while keeping the parent-child hierarchy (in {windowId})">
                 <span>Clear Parent Invers<span class="underline">e</span></span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌥ P</span>
               </div>
             </div>
           {/if}
        </div>
        <div class="px-5 py-[3px] {isObjectContextMenuMoveToCollectionOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group relative" alt-id="Move to Collection" appearance-id="menu item with keyboard shortcut M and a right-pointing caret arrow, highlighted when submenu is open (in {windowId})" location-id="Object context menu, below the Parent item (in {windowId})" functionality-id="opens the Move to Collection submenu for reassigning the object to a different collection (in {windowId})" intent-id="organize the right-clicked object by moving it into a specific scene collection (in {windowId})" on:click|stopPropagation={() => { isObjectContextMenuMoveToCollectionOpen = !isObjectContextMenuMoveToCollectionOpen; updateOpenParam(); }}>
           <span>Move <span class="underline">t</span>o Collection</span>
           <div class="flex items-center gap-2">
             <span class="text-[#888] text-[11px] group-hover:text-white font-mono">M</span>
             <i class="fa-solid fa-caret-right text-[10px] {isObjectContextMenuMoveToCollectionOpen ? 'text-white' : 'text-[#888]'} pointer-events-none group-hover:text-white"></i>
           </div>
           
           {#if isObjectContextMenuMoveToCollectionOpen}
             <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Move to Collection nested menu" appearance-id="dark dropdown panel listing available scene collections with options to create new ones (in {windowId})" location-id="to the right of Move to Collection item in the Object context menu (in {windowId})" functionality-id="contains all available collections in the scene hierarchy for the object to be moved into (in {windowId})" intent-id="navigate the scene collection structure to choose the destination collection (in {windowId})">
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px]" alt-id="+ New Collection" appearance-id="menu item with a plus icon and the text New Collection for + New Collection (in {windowId})" location-id="first item in the Move to Collection nested menu (Object context menu) (in {windowId})" functionality-id="creates a new collection and moves the object into it (in {windowId})" intent-id="quickly create a named collection and add the object to it in one step (in {windowId})">
                 <i class="fa-solid fa-plus text-[#888] text-[10px] pointer-events-none opacity-80"></i>
                 <span>New Collection</span>
               </div>
               
               <div class="my-1 border-t border-[#333]"></div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/sc" alt-id="Scene Collection" appearance-id="menu item with a shapes icon and the text Scene Collection (in {windowId})" location-id="second item in the Move to Collection nested menu (Object context menu) (in {windowId})" functionality-id="moves the object to the top-level Scene Collection (in {windowId})" intent-id="place the object in the root collection of the scene hierarchy (in {windowId})">
                 <i class="fa-solid fa-shapes text-[#888] text-[10px] group-hover/sc:text-white pointer-events-none"></i>
                 <span>Scene Collection</span>
               </div>
               
               <div class="px-5 py-[3px] {isObjectContextMenuMoveToCollectionCommonOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/common relative" alt-id="Common" appearance-id="menu item with an archive icon and the text Common, and a right-pointing caret (in {windowId})" location-id="third item in the Move to Collection nested menu (Object context menu) (in {windowId})" functionality-id="opens the Common nested collection submenu for moving the object to the Common collection or its children (in {windowId})" intent-id="organize the object into the Common shared collection group (in {windowId})" on:click|stopPropagation={() => { isObjectContextMenuMoveToCollectionCommonOpen = !isObjectContextMenuMoveToCollectionCommonOpen; updateOpenParam(); }}>
                 <div class="flex items-center gap-[10px]">
                   <i class="fa-solid fa-box-archive text-[#888] text-[10px] {isObjectContextMenuMoveToCollectionCommonOpen ? 'text-white' : 'group-hover/common:text-white'} pointer-events-none"></i>
                   <span>Common</span>
                 </div>
                 <i class="fa-solid fa-caret-right text-[10px] {isObjectContextMenuMoveToCollectionCommonOpen ? 'text-white' : 'text-[#888] group-hover/common:text-white'} pointer-events-none"></i>
                 
                 {#if isObjectContextMenuMoveToCollectionCommonOpen}
                   <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[102] w-[220px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Common nested menu" appearance-id="dark dropdown panel showing sub-collections within the Common collection (in {windowId})" location-id="to the right of Common item in the Move to Collection nested menu (in {windowId})" functionality-id="contains New Collection option and existing sub-collections within Common (in {windowId})" intent-id="choose the specific Common sub-collection to place the object in (in {windowId})">
                     <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px]" alt-id="+ New Collection (Common)" appearance-id="menu item with a plus icon and the text New Collection for + New Collection (Common) (in {windowId})" location-id="first item in the Common nested menu (Object context menu) (in {windowId})" functionality-id="creates a new sub-collection inside the Common collection and moves the object into it (in {windowId})" intent-id="add a new named sub-collection within Common for organizing objects (in {windowId})">
                       <i class="fa-solid fa-plus text-[#888] text-[10px] pointer-events-none opacity-80"></i>
                       <span>New Collection</span>
                     </div>
                     
                     <div class="my-1 border-t border-[#333]"></div>
                     
                     <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] relative group/commontarget" alt-id="Common (Move Target)" appearance-id="menu item with an archive icon showing a tooltip overlay explaining the action (in {windowId})" location-id="second item in the Common nested menu (Object context menu) (in {windowId})" functionality-id="moves the selected object directly into the Common collection (in {windowId})" intent-id="place the object in the Common collection as the destination (in {windowId})">
                       <i class="fa-solid fa-box-archive text-[#888] text-[10px] pointer-events-none group-hover/commontarget:text-white"></i>
                       <span class="opacity-0">Common</span>
                       <!-- Tooltip overlay to match image exactly -->
                       <div class="absolute left-6 top-1/2 -translate-y-1/2 bg-[#1a1a1a] text-[#ccc] text-[12px] px-2 py-[1px] rounded-[2px] shadow-[0_2px_4px_rgba(0,0,0,0.5)] border border-[#333] whitespace-nowrap pointer-events-none z-[103]">
                         Move objects to a collection.
                       </div>
                     </div>
                     
                     <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/ref" alt-id="Reference Images" appearance-id="menu item with an archive icon, the text Reference Images, and a right-pointing caret (in {windowId})" location-id="third item in the Common nested menu (Object context menu) (in {windowId})" functionality-id="moves or adds the object to the Reference Images sub-collection within Common (in {windowId})" intent-id="organize reference image planes into a dedicated sub-collection (in {windowId})">
                       <div class="flex items-center gap-[10px]">
                         <i class="fa-solid fa-box-archive text-[#888] text-[10px] group-hover/ref:text-white pointer-events-none"></i>
                         <span>Reference Images</span>
                       </div>
                       <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/ref:text-white"></i>
                     </div>
                   </div>
                 {/if}
               </div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/studio" alt-id="Studio" appearance-id="menu item with an archive icon, the text Studio, and a right-pointing caret (in {windowId})" location-id="fourth item in the Move to Collection nested menu (Object context menu) (in {windowId})" functionality-id="opens the Studio collection submenu for moving the object to the Studio collection or its children (in {windowId})" intent-id="organize the object into the Studio environment collection (in {windowId})">
                 <div class="flex items-center gap-[10px]">
                   <i class="fa-solid fa-box-archive text-[#888] text-[10px] group-hover/studio:text-white pointer-events-none"></i>
                   <span>Studio</span>
                 </div>
                 <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/studio:text-white"></i>
               </div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/sa" alt-id="Studio Assets" appearance-id="menu item with an archive icon and the text Studio Assets (in {windowId})" location-id="fifth item in the Move to Collection nested menu (Object context menu) (in {windowId})" functionality-id="moves the object to the Studio Assets sub-collection (in {windowId})" intent-id="organize the object into the shared studio assets collection (in {windowId})">
                 <i class="fa-solid fa-box-archive text-[#888] text-[10px] group-hover/sa:text-white pointer-events-none"></i>
                 <span>Studio Assets</span>
               </div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/da" alt-id="Demo Assets" appearance-id="menu item with an archive icon and the text Demo Assets (in {windowId})" location-id="sixth item in the Move to Collection nested menu (Object context menu) (in {windowId})" functionality-id="moves the object to the Demo Assets sub-collection (in {windowId})" intent-id="organize the object into the demo assets collection for demonstration purposes (in {windowId})">
                 <i class="fa-solid fa-box-archive text-[#888] text-[10px] group-hover/da:text-white pointer-events-none"></i>
                 <span>Demo Assets</span>
               </div>
             </div>
           {/if}
        </div>
        
        <div class="my-1 border-t border-[#333]"></div>
        
        <div class="px-5 py-[3px] bg-[#4772b3] text-white cursor-pointer flex items-center justify-between group" alt-id="Insert Keyframe" appearance-id="menu item highlighted in blue text: Insert Keyframe with keyboard shortcut I, currently selected (in {windowId})" location-id="Object context menu, below the Move to Collection item (in {windowId})" functionality-id="inserts a keyframe for the selected object properties at the current frame (in {windowId})" intent-id="record the current object state into the timeline animation (in {windowId})">
           <span><span class="underline">I</span>nsert Keyframe</span>
           <span class="text-[#ddd] text-[11px] font-mono group-hover:text-white">I</span>
        </div>
        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group" alt-id="Insert Keyframe with Keying Set" appearance-id="menu item text: Insert Keyframe with Keying Set... with keyboard shortcut K for Insert Keyframe with Keying Set (in {windowId})" location-id="Object context menu, below the Insert Keyframe item (in {windowId})" functionality-id="inserts a keyframe using the active keying set for batch property recording (in {windowId})" intent-id="record multiple object properties simultaneously using a predefined keying set (in {windowId})">
           <span>Insert <span class="underline">K</span>eyframe with Keying Set...</span>
           <span class="text-[#888] text-[11px] group-hover:text-white font-mono">K</span>
        </div>
        
        <div class="my-1 border-t border-[#333]"></div>
        
        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group" alt-id="Delete" appearance-id="menu item text: Delete with keyboard shortcut X for Delete (in {windowId})" location-id="last item in the Object context menu (in {windowId})" functionality-id="deletes the right-clicked object from the scene (in {windowId})" intent-id="quickly remove the object from the scene using the context menu (in {windowId})">
           <span>Delete</span>
           <span class="text-[#888] text-[11px] group-hover:text-white font-mono">X</span>
        </div>
      </div>
    {/if}
  </div>
</div>
