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

<div class="h-full flex flex-col bg-[#282828] relative" alt-id="3D Viewport editor panel">
  <!-- Header -->
  <div class="h-8 bg-[#282828] border-b border-[#1f1f1f] flex items-center px-2 justify-between text-[11px]" alt-id="3D Viewport header">
    <!-- Left side -->
    <div class="flex items-center gap-2">
      <EditorSelector bind:editor={currentEditor} windowId={windowId} />
      <div class="relative">
        <div class="flex items-center gap-1 px-1.5 py-[2px] {isInteractionModeDropdownOpen ? 'bg-[#4772b3] text-white' : 'bg-[#4772b3] text-white hover:bg-[#5885c7]'} border border-[#3c3c3c] rounded cursor-pointer" on:click={toggleInteractionModeDropdown} alt-id="Interaction mode selector: {interactionMode}, second element in the 3D Viewport header">
          <i class="fa-solid {interactionMode === 'object' ? 'fa-vector-square' : interactionMode === 'edit' ? 'fa-draw-polygon' : interactionMode === 'sculpt' ? 'fa-paintbrush' : interactionMode === 'vertex_paint' ? 'fa-paint-roller' : interactionMode === 'weight_paint' ? 'fa-dumbbell' : 'fa-chess-board'} text-[10px] text-white pointer-events-none"></i>
          <span class="text-white px-0.5 pointer-events-none">{interactionMode === 'object' ? 'Object Mode' : interactionMode === 'edit' ? 'Edit Mode' : interactionMode === 'sculpt' ? 'Sculpt Mode' : interactionMode === 'vertex_paint' ? 'Vertex Paint' : interactionMode === 'weight_paint' ? 'Weight Paint' : 'Texture Paint'}</span>
          <i class="fa-solid fa-chevron-down text-[8px] text-[#ccc] pointer-events-none"></i>
      </div>

        {#if isInteractionModeDropdownOpen}
          <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => { isInteractionModeDropdownOpen = false; updateOpenParam(); }}></div>
          <div class="absolute left-0 top-[24px] bg-[#1a1a1a] border border-[#2a2a2a] rounded shadow-[0_4px_12px_rgba(0,0,0,0.8)] z-50 py-1 w-[160px]" alt-id="Interaction mode dropdown menu">
            <div class="flex items-center gap-2 px-3 py-[3px] {interactionMode === 'object' ? 'bg-[#4772b3] text-white' : 'hover:bg-[#4772b3] hover:text-white text-[#ccc]'} cursor-pointer" alt-id="Interaction Mode: Object Mode" on:click={() => { interactionMode = 'object'; isInteractionModeDropdownOpen = false; updateOpenParam(); }}>
              <i class="fa-solid fa-vector-square text-[11px] pointer-events-none"></i>
              <span class="text-[13px] pointer-events-none"><u>O</u>bject Mode</span>
            </div>
            <div class="flex items-center gap-2 px-3 py-[3px] {interactionMode === 'edit' ? 'bg-[#4772b3] text-white' : 'hover:bg-[#4772b3] hover:text-white text-[#ccc]'} cursor-pointer" alt-id="Interaction Mode: Edit Mode" on:click={() => { interactionMode = 'edit'; isInteractionModeDropdownOpen = false; updateOpenParam(); }}>
              <i class="fa-solid fa-draw-polygon text-[11px] pointer-events-none"></i>
              <span class="text-[13px] pointer-events-none"><u>E</u>dit Mode</span>
            </div>
            <div class="flex items-center gap-2 px-3 py-[3px] {interactionMode === 'sculpt' ? 'bg-[#4772b3] text-white' : 'hover:bg-[#4772b3] hover:text-white text-[#ccc]'} cursor-pointer" alt-id="Interaction Mode: Sculpt Mode" on:click={() => { interactionMode = 'sculpt'; isInteractionModeDropdownOpen = false; updateOpenParam(); }}>
              <i class="fa-solid fa-paintbrush text-[11px] pointer-events-none"></i>
              <span class="text-[13px] pointer-events-none"><u>S</u>culpt Mode</span>
            </div>
            <div class="flex items-center gap-2 px-3 py-[3px] {interactionMode === 'vertex_paint' ? 'bg-[#4772b3] text-white' : 'hover:bg-[#4772b3] hover:text-white text-[#ccc]'} cursor-pointer" alt-id="Interaction Mode: Vertex Paint" on:click={() => { interactionMode = 'vertex_paint'; isInteractionModeDropdownOpen = false; updateOpenParam(); }}>
              <i class="fa-solid fa-paint-roller text-[11px] pointer-events-none"></i>
              <span class="text-[13px] pointer-events-none"><u>V</u>ertex Paint</span>
            </div>
            <div class="flex items-center gap-2 px-3 py-[3px] {interactionMode === 'weight_paint' ? 'bg-[#4772b3] text-white' : 'hover:bg-[#4772b3] hover:text-white text-[#ccc]'} cursor-pointer" alt-id="Interaction Mode: Weight Paint" on:click={() => { interactionMode = 'weight_paint'; isInteractionModeDropdownOpen = false; updateOpenParam(); }}>
              <i class="fa-solid fa-dumbbell text-[11px] pointer-events-none"></i>
              <span class="text-[13px] pointer-events-none"><u>W</u>eight Paint</span>
            </div>
            <div class="flex items-center gap-2 px-3 py-[3px] {interactionMode === 'texture_paint' ? 'bg-[#4772b3] text-white' : 'hover:bg-[#4772b3] hover:text-white text-[#ccc]'} cursor-pointer" alt-id="Interaction Mode: Texture Paint" on:click={() => { interactionMode = 'texture_paint'; isInteractionModeDropdownOpen = false; updateOpenParam(); }}>
              <i class="fa-solid fa-chess-board text-[11px] pointer-events-none"></i>
              <span class="text-[13px] pointer-events-none"><u>T</u>exture Paint</span>
            </div>
          </div>
        {/if}
      </div>
      <div class="relative">
        <div class="cursor-pointer hover:text-white {isViewportOptionsDropdownOpen ? 'text-white bg-[#444]' : 'text-[#a0a0a0]'} px-1 ml-1" alt-id="Viewport menu, third element in the 3D Viewport header" on:click|stopPropagation={() => { isViewportOptionsDropdownOpen = !isViewportOptionsDropdownOpen; updateOpenParam(); }}>
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
          
          <div class="absolute left-1 top-[24px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Viewport options nested menu">
            <div class="px-5 py-[3px] {isViewportOptionsViewOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group relative" alt-id="View" on:click|stopPropagation={() => { isViewportOptionsViewOpen = !isViewportOptionsViewOpen; updateOpenParam(); }}>
              <span><span class="underline">V</span>iew</span>
              <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsViewOpen ? 'text-white' : 'text-[#888] group-hover:text-white'} pointer-events-none"></i>
              
              {#if isViewportOptionsViewOpen}
                <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[102] w-[260px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="View nested menu">
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/toolbar" alt-id="Toolbar">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-square-check text-white text-[12px] group-hover/toolbar:text-white"></i>
                      <span><span class="underline">T</span>oolbar</span>
                    </div>
                    <span class="text-[#888] text-[11px] font-mono group-hover/toolbar:text-white">T</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/sidebar" alt-id="Sidebar">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-square-check text-white text-[12px] group-hover/sidebar:text-white"></i>
                      <span><span class="underline">S</span>idebar</span>
                    </div>
                    <span class="text-[#888] text-[11px] font-mono group-hover/sidebar:text-white">N</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ts" alt-id="Tool Settings">
                    <div class="w-[12px] h-[12px] border border-white rounded-[2px]"></div>
                    <span>Tool <span class="underline">S</span>ettings</span>
                  </div>
                  <div class="px-5 py-[3px] text-[#888] cursor-default flex items-center gap-[10px] group/as" alt-id="Asset Shelf">
                    <div class="w-[12px] h-[12px] border border-[#888] rounded-[2px] opacity-50"></div>
                    <span>Asset Sh<span class="underline">e</span>lf</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/alo" alt-id="Adjust Last Operation">
                    <i class="fa-solid fa-square-check text-white text-[12px] group-hover/alo:text-white"></i>
                    <span><span class="underline">A</span>djust Last Operation</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/fs" alt-id="Frame Selected">
                    <span><span class="underline">F</span>rame Selected</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/fs:text-white">Numpad .</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/fa" alt-id="Frame All">
                    <span>Frame <span class="underline">A</span>ll</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/fa:text-white">Home</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/po" alt-id="Perspective/Orthographic">
                    <span><span class="underline">P</span>erspective/Orthographic</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/po:text-white">Numpad 5</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/lv" alt-id="Local View">
                    <span><span class="underline">L</span>ocal View</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/lv:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/vn" alt-id="Viewer Node">
                    <i class="fa-solid fa-square-check text-white text-[12px] group-hover/vn:text-white"></i>
                    <span>Vi<span class="underline">e</span>wer Node</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/cameras" alt-id="Cameras">
                    <span><span class="underline">C</span>ameras</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/cameras:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/vp" alt-id="Viewpoint">
                    <span><span class="underline">V</span>iewpoint</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/vp:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/nav" alt-id="Navigation">
                    <span><span class="underline">N</span>avigation</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/nav:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/av" alt-id="Align View">
                    <span>Ali<span class="underline">g</span>n View</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/av:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/vr" alt-id="View Regions">
                    <span>View <span class="underline">R</span>egions</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/vr:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/pa" alt-id="Play Animation">
                    <span><span class="underline">P</span>lay Animation</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/pa:text-white">Space Bar</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/rvp" alt-id="Render Viewport Preview">
                    <i class="fa-solid fa-film text-[#888] text-[12px] group-hover/rvp:text-white pointer-events-none"></i>
                    <span>Render Vie<span class="underline">w</span>port Preview</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/rp" alt-id="Render Playblast">
                    <i class="fa-solid fa-compact-disc text-[#888] text-[12px] group-hover/rp:text-white pointer-events-none"></i>
                    <span>Render Play<span class="underline">b</span>last</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/rpk" alt-id="Render Playblast on Keyframes">
                    <i class="fa-solid fa-compact-disc text-[#888] text-[12px] group-hover/rpk:text-white pointer-events-none"></i>
                    <span>Render Playblast <span class="underline">o</span>n Keyframes</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/area" alt-id="Area">
                    <span><span class="underline">A</span>rea</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/area:text-white"></i>
                  </div>
                </div>
              {/if}
            </div>
            <div class="px-5 py-[3px] {isViewportOptionsSelectOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group relative" alt-id="Select" on:click|stopPropagation={() => { isViewportOptionsSelectOpen = !isViewportOptionsSelectOpen; updateOpenParam(); }}>
              <span><span class="underline">S</span>elect</span>
              <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsSelectOpen ? 'text-white' : 'text-[#888] group-hover:text-white'} pointer-events-none"></i>
              
              {#if isViewportOptionsSelectOpen}
                <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[102] w-[260px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Select nested menu">
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/all" alt-id="All">
                    <span><span class="underline">A</span>ll</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/all:text-white">A</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/none" alt-id="None">
                    <span><span class="underline">N</span>one</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/none:text-white">⌥ A</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/invert" alt-id="Invert">
                    <span><span class="underline">I</span>nvert</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/invert:text-white">⌘ I</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/box" alt-id="Box Select">
                    <span><span class="underline">B</span>ox Select</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/box:text-white">drag-Left Mouse</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/circle" alt-id="Circle Select">
                    <span><span class="underline">C</span>ircle Select</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/circle:text-white">C</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/lasso" alt-id="Lasso Select">
                    <span><span class="underline">L</span>asso Select</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/lasso:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/ac" alt-id="Select Active Camera">
                    <span><span class="underline">S</span>elect Active Camera</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/mirror" alt-id="Select Mirror">
                    <span>Select <span class="underline">M</span>irror</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/random" alt-id="Select Random">
                    <span>Select <span class="underline">R</span>andom</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/moreless" alt-id="More/Less">
                    <span>M<span class="underline">o</span>re/Less</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/moreless:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/type" alt-id="Select All by Type">
                    <span>Select All by <span class="underline">T</span>ype</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/type:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/grouped" alt-id="Select Grouped">
                    <span>Select <span class="underline">G</span>rouped</span>
                    <div class="flex items-center gap-2">
                      <span class="text-[#888] text-[11px] font-mono group-hover/grouped:text-white">⇧ G</span>
                      <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/grouped:text-white"></i>
                    </div>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/linked" alt-id="Select Linked">
                    <span>Select <span class="underline">L</span>inked</span>
                    <div class="flex items-center gap-2">
                      <span class="text-[#888] text-[11px] font-mono group-hover/linked:text-white">⇧ L</span>
                      <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/linked:text-white"></i>
                    </div>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/pattern" alt-id="Select Pattern...">
                    <span>Select <span class="underline">P</span>attern...</span>
                  </div>
                </div>
              {/if}
            </div>
            <div class="px-5 py-[3px] {isViewportOptionsAddOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group relative" alt-id="Add" on:click|stopPropagation={() => { isViewportOptionsAddOpen = !isViewportOptionsAddOpen; updateOpenParam(); }}>
              <span><span class="underline">A</span>dd</span>
              <div class="flex items-center gap-2">
                <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⇧ A</span>
                <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsAddOpen ? 'text-white' : 'text-[#888] group-hover:text-white'} pointer-events-none"></i>
              </div>
              
              {#if isViewportOptionsAddOpen}
                <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[102] w-[220px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Add nested menu">
                  <div class="px-5 py-[3px] {isViewportOptionsAddMeshOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/mesh relative" alt-id="Mesh" on:click|stopPropagation={() => { isViewportOptionsAddMeshOpen = !isViewportOptionsAddMeshOpen; updateOpenParam(); }}>
                    <div class="flex items-center gap-[10px]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 {isViewportOptionsAddMeshOpen ? 'text-white' : 'group-hover/mesh:text-white'}">
                        <path d="M1 1 L11 1 L6 9.5 Z" />
                      </svg>
                      <span><span class="underline">M</span>esh</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsAddMeshOpen ? 'text-white' : 'text-[#888] group-hover/mesh:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsAddMeshOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Mesh nested menu">
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/plane" alt-id="Plane">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/plane:text-white">
                            <rect x="2" y="2" width="8" height="8" />
                          </svg>
                          <span><span class="underline">P</span>lane</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/cube" alt-id="Cube">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/cube:text-white">
                            <path d="M2 4 L6 2 L10 4 L10 8 L6 10 L2 8 Z" />
                            <path d="M2 4 L6 6 L10 4" />
                            <path d="M6 6 L6 10" />
                          </svg>
                          <span><span class="underline">C</span>ube</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/circle" alt-id="Circle">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/circle:text-white">
                            <circle cx="6" cy="6" r="4.5" />
                          </svg>
                          <span>C<span class="underline">i</span>rcle</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/uvsphere" alt-id="UV Sphere">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/uvsphere:text-white">
                            <circle cx="6" cy="6" r="4.5" />
                            <path d="M6 1.5 L6 10.5 M2.5 4 L9.5 4 M2.5 8 L9.5 8 M4 2.5 L4 9.5 M8 2.5 L8 9.5" stroke-width="0.5" />
                          </svg>
                          <span><span class="underline">U</span>V Sphere</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/icosphere" alt-id="Ico Sphere">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/icosphere:text-white">
                            <path d="M6 1 L11 4 L6 11 L1 4 Z" />
                            <path d="M6 1 L6 6 L11 4" />
                            <path d="M6 6 L6 11" />
                            <path d="M6 6 L1 4" />
                          </svg>
                          <span>I<span class="underline">c</span>o Sphere</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/cylinder" alt-id="Cylinder">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/cylinder:text-white">
                            <ellipse cx="6" cy="3" rx="3.5" ry="1.5" />
                            <path d="M2.5 3 L2.5 9 M9.5 3 L9.5 9" />
                            <path d="M2.5 9 A 3.5 1.5 0 0 0 9.5 9" />
                          </svg>
                          <span>C<span class="underline">y</span>linder</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/cone" alt-id="Cone">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/cone:text-white">
                            <path d="M6 2 L2 9 M6 2 L10 9" />
                            <path d="M2 9 A 4 1.5 0 0 0 10 9" />
                          </svg>
                          <span>C<span class="underline">o</span>ne</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/torus" alt-id="Torus">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/torus:text-white">
                            <ellipse cx="6" cy="6" rx="4.5" ry="2" />
                            <ellipse cx="6" cy="6" rx="2.5" ry="0.8" />
                          </svg>
                          <span>T<span class="underline">o</span>rus</span>
                        </div>
                        
                        <div class="my-1 border-t border-[#333]"></div>
                        
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/grid" alt-id="Grid">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/grid:text-white">
                            <rect x="2" y="2" width="8" height="8" />
                            <line x1="5" y1="2" x2="5" y2="10" />
                            <line x1="7" y1="2" x2="7" y2="10" />
                            <line x1="2" y1="5" x2="10" y2="5" />
                            <line x1="2" y1="7" x2="10" y2="7" />
                          </svg>
                          <span><span class="underline">G</span>rid</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/monkey" alt-id="Monkey">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/monkey:text-white">
                            <path d="M4 3 Q 6 1 8 3 M2 5 Q 1 6 2 7 Q 3 8 4 7 M10 5 Q 11 6 10 7 Q 9 8 8 7 M4 7 Q 6 10 8 7 M3 4 L4 3 M9 4 L8 3 M5 5 L5 6 M7 5 L7 6 M5 8 L7 8" stroke-width="1" />
                          </svg>
                          <span>M<span class="underline">o</span>nkey</span>
                        </div>
                      </div>
                    {/if}
                  </div>
                  <div class="px-5 py-[3px] {isViewportOptionsAddCurveOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/curve relative" alt-id="Curve" on:click|stopPropagation={() => { isViewportOptionsAddCurveOpen = !isViewportOptionsAddCurveOpen; updateOpenParam(); }}>
                    <div class="flex items-center gap-[10px]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 {isViewportOptionsAddCurveOpen ? 'text-white' : 'group-hover/curve:text-white'}">
                        <path d="M9 1 C5 1 3 5 3 9" />
                      </svg>
                      <span><span class="underline">C</span>urve</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsAddCurveOpen ? 'text-white' : 'text-[#888] group-hover/curve:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsAddCurveOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Curve nested menu">
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/bezier" alt-id="Bézier">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/bezier:text-white">
                            <path d="M 3 9 C 3 3, 9 3, 9 9" />
                            <circle cx="3" cy="9" r="1.5" fill="currentColor" stroke="none" />
                            <circle cx="9" cy="9" r="1.5" fill="currentColor" stroke="none" />
                            <path d="M 3 9 L 2 10 M 3 9 L 4 8 M 9 9 L 8 10 M 9 9 L 10 8" stroke-width="0.5" />
                          </svg>
                          <span><span class="underline">B</span>ézier</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/curvecircle" alt-id="Circle">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/curvecircle:text-white">
                            <circle cx="6" cy="6" r="4" />
                            <circle cx="6" cy="2" r="1.5" fill="currentColor" stroke="none" />
                            <circle cx="6" cy="10" r="1.5" fill="currentColor" stroke="none" />
                            <path d="M 5 2 L 7 2 M 5 10 L 7 10" stroke-width="0.5" />
                          </svg>
                          <span><span class="underline">C</span>ircle</span>
                        </div>
                        
                        <div class="my-1 border-t border-[#333]"></div>
                        
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/nurbscurve" alt-id="Nurbs Curve">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/nurbscurve:text-white">
                            <path d="M 3 10 Q 6 3, 9 10" />
                            <path d="M 3 10 L 3 3 L 9 3 L 9 10" stroke-width="0.5" stroke-dasharray="1 1" />
                            <circle cx="3" cy="3" r="1" fill="currentColor" stroke="none" />
                            <circle cx="9" cy="3" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>N<span class="underline">u</span>rbs Curve</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/nurbscircle" alt-id="Nurbs Circle">
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
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/path" alt-id="Path">
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
                        
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/emptyhair" alt-id="Empty Hair">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/emptyhair:text-white">
                            <path d="M 3 10 Q 5 5, 2 2" />
                            <path d="M 6 10 Q 8 5, 5 2" />
                            <path d="M 9 10 Q 11 5, 8 2" />
                          </svg>
                          <span><span class="underline">E</span>mpty Hair</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/fur" alt-id="Fur">
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
                  <div class="px-5 py-[3px] {isViewportOptionsAddSurfaceOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/surface relative" alt-id="Surface" on:click|stopPropagation={() => { isViewportOptionsAddSurfaceOpen = !isViewportOptionsAddSurfaceOpen; updateOpenParam(); }}>
                    <div class="flex items-center gap-[10px]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 {isViewportOptionsAddSurfaceOpen ? 'text-white' : 'group-hover/surface:text-white'}">
                        <path d="M2 1 L10 1 L9 11 L3 11 L1 6 Z" />
                      </svg>
                      <span><span class="underline">S</span>urface</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsAddSurfaceOpen ? 'text-white' : 'text-[#888] group-hover/surface:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsAddSurfaceOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Surface nested menu">
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/nurbscurvesurf" alt-id="Nurbs Curve">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/nurbscurvesurf:text-white">
                            <path d="M 3 10 Q 6 3, 9 10" />
                            <path d="M 3 10 L 3 3 L 9 3 L 9 10" stroke-width="0.5" stroke-dasharray="1 1" />
                            <circle cx="3" cy="3" r="1" fill="currentColor" stroke="none" />
                            <circle cx="9" cy="3" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Nurbs C<span class="underline">u</span>rve</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/nurbscirclesurf" alt-id="Nurbs Circle">
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
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/nurbssurface" alt-id="Nurbs Surface">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/nurbssurface:text-white">
                            <path d="M 2 4 Q 6 1, 10 4 L 10 10 Q 6 7, 2 10 Z" stroke-linejoin="round" />
                            <circle cx="2" cy="4" r="1" fill="currentColor" stroke="none" />
                            <circle cx="10" cy="4" r="1" fill="currentColor" stroke="none" />
                            <circle cx="10" cy="10" r="1" fill="currentColor" stroke="none" />
                            <circle cx="2" cy="10" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Nurbs S<span class="underline">u</span>rface</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/nurbscylinder" alt-id="Nurbs Cylinder">
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
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/nurbssphere" alt-id="Nurbs Sphere">
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
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/nurbstorus" alt-id="Nurbs Torus">
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
                  <div class="px-5 py-[3px] {isViewportOptionsAddMetaballOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/metaball relative" alt-id="Metaball" on:click|stopPropagation={() => { isViewportOptionsAddMetaballOpen = !isViewportOptionsAddMetaballOpen; updateOpenParam(); }}>
                    <div class="flex items-center gap-[10px]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 {isViewportOptionsAddMetaballOpen ? 'text-white' : 'group-hover/metaball:text-white'}">
                        <circle cx="5" cy="6" r="3.5" />
                        <circle cx="8" cy="4" r="2" />
                      </svg>
                      <span>M<span class="underline">e</span>taball</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsAddMetaballOpen ? 'text-white' : 'text-[#888] group-hover/metaball:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsAddMetaballOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Metaball nested menu">
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ball" alt-id="Ball">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ball:text-white">
                            <circle cx="6" cy="6" r="4.5" />
                            <path d="M 6 1.5 A 2.5 4.5 0 0 0 6 10.5" />
                          </svg>
                          <span><span class="underline">B</span>all</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/capsule" alt-id="Capsule">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/capsule:text-white">
                            <rect x="2" y="4" width="8" height="4" rx="2" transform="rotate(-45 6 6)" />
                            <path d="M 4 4 L 8 8" stroke-width="0.5" />
                          </svg>
                          <span><span class="underline">C</span>apsule</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/metaplane" alt-id="Plane">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/metaplane:text-white">
                            <rect x="2" y="2" width="8" height="8" rx="2" />
                          </svg>
                          <span><span class="underline">P</span>lane</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ellipsoid" alt-id="Ellipsoid">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ellipsoid:text-white">
                            <ellipse cx="6" cy="6" rx="4.5" ry="2.5" transform="rotate(-45 6 6)" />
                            <path d="M 2.8 9.2 L 9.2 2.8" stroke-width="0.5" />
                          </svg>
                          <span><span class="underline">E</span>llipsoid</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/metacube" alt-id="Cube">
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
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/text" alt-id="Text">
                    <i class="fa-solid fa-font text-[#888] text-[12px] group-hover/text:text-white"></i>
                    <span>Te<span class="underline">x</span>t</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/pointcloud" alt-id="Point Cloud">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="text-[#888] group-hover/pointcloud:text-white pointer-events-none">
                      <circle cx="3" cy="3" r="1.5" />
                      <circle cx="9" cy="4" r="1.5" />
                      <circle cx="5" cy="8" r="1.5" />
                      <circle cx="10" cy="9" r="1.5" />
                    </svg>
                    <span>P<span class="underline">o</span>int Cloud</span>
                  </div>
                  <div class="px-5 py-[3px] {isViewportOptionsAddVolumeOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/volume relative" alt-id="Volume" on:click|stopPropagation={() => { isViewportOptionsAddVolumeOpen = !isViewportOptionsAddVolumeOpen; updateOpenParam(); }}>
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-cloud text-[12px] pointer-events-none opacity-80 {isViewportOptionsAddVolumeOpen ? 'text-white' : 'group-hover/volume:text-white'}"></i>
                      <span><span class="underline">V</span>olume</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsAddVolumeOpen ? 'text-white' : 'text-[#888] group-hover/volume:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsAddVolumeOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Volume nested menu">
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/importvdb" alt-id="Import OpenVDB...">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/importvdb:text-white">
                            <path d="M3.5 8.5 L8.5 8.5 C10 8.5 10 6 8.5 6 C8.5 4.5 6.5 4 5.5 5.5 C4.5 4.5 3 5 3.5 6.5 C2 6.5 2 8.5 3.5 8.5 Z" />
                          </svg>
                          <span>Import OpenVDB...</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/vol-empty" alt-id="Empty">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/vol-empty:text-white">
                            <path d="M3.5 8.5 L8.5 8.5 C10 8.5 10 6 8.5 6 C8.5 4.5 6.5 4 5.5 5.5 C4.5 4.5 3 5 3.5 6.5 C2 6.5 2 8.5 3.5 8.5 Z" />
                          </svg>
                          <span>Empty</span>
                        </div>
                      </div>
                    {/if}
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/gp" alt-id="Grease Pencil">
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
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/armature" alt-id="Armature">
                    <i class="fa-solid fa-child-reaching text-[#888] text-[12px] group-hover/armature:text-white"></i>
                    <span><span class="underline">A</span>rmature</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/lattice" alt-id="Lattice">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-border-all text-[#888] text-[12px] group-hover/lattice:text-white"></i>
                      <span><span class="underline">L</span>attice</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/lattice:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/empty" alt-id="Empty">
                    <div class="flex items-center gap-[10px]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/empty:text-white">
                        <path d="M6 1 L6 11 M1 6 L11 6 M3 3 L9 9 M3 9 L9 3" />
                      </svg>
                      <span><span class="underline">E</span>mpty</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/empty:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/image" alt-id="Image">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-regular fa-image text-[#888] text-[12px] group-hover/image:text-white"></i>
                      <span><span class="underline">I</span>mage</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/image:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/light" alt-id="Light">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-regular fa-lightbulb text-[#888] text-[12px] group-hover/light:text-white"></i>
                      <span>Ligh<span class="underline">t</span></span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/light:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] {isViewportOptionsAddLightProbeOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/lightprobe relative" alt-id="Light Probe" on:click|stopPropagation={() => { isViewportOptionsAddLightProbeOpen = !isViewportOptionsAddLightProbeOpen; updateOpenParam(); }}>
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-burst text-[12px] pointer-events-none opacity-80 {isViewportOptionsAddLightProbeOpen ? 'text-white' : 'group-hover/lightprobe:text-white'}"></i>
                      <span>Light <span class="underline">P</span>robe</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsAddLightProbeOpen ? 'text-white' : 'text-[#888] group-hover/lightprobe:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsAddLightProbeOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Light Probe nested menu">
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/probe-sphere" alt-id="Sphere">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/probe-sphere:text-white">
                            <path d="M1.5 3.5 L8.5 3.5 L8.5 10.5 L1.5 10.5 Z" />
                            <path d="M1.5 3.5 L4.5 0.5 L10.5 0.5 L10.5 7.5 L8.5 10.5" />
                            <path d="M8.5 3.5 L10.5 0.5" />
                            <circle cx="5" cy="7" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Sphere</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/probe-plane" alt-id="Plane">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/probe-plane:text-white">
                            <path d="M6 1 L11 6 L6 11 L1 6 Z" />
                            <circle cx="6" cy="6" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Plane</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/probe-volume" alt-id="Volume">
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
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/camera" alt-id="Camera">
                    <i class="fa-solid fa-video text-[#888] text-[12px] group-hover/camera:text-white"></i>
                    <span>C<span class="underline">a</span>mera</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/speaker" alt-id="Speaker">
                    <i class="fa-solid fa-volume-high text-[#888] text-[12px] group-hover/speaker:text-white"></i>
                    <span>Spea<span class="underline">k</span>er</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] {isViewportOptionsAddForceFieldOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/forcefield relative" alt-id="Force Field" on:click|stopPropagation={() => { isViewportOptionsAddForceFieldOpen = !isViewportOptionsAddForceFieldOpen; updateOpenParam(); }}>
                    <div class="flex items-center gap-[10px]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 {isViewportOptionsAddForceFieldOpen ? 'text-white' : 'group-hover/forcefield:text-white'}">
                        <path d="M2.5 1 L1.5 3 L3.5 6 L1.5 9 L2.5 11 M6 1 L5 3 L7 6 L5 9 L6 11 M9.5 1 L8.5 3 L10.5 6 L8.5 9 L9.5 11" />
                      </svg>
                      <span><span class="underline">F</span>orce Field</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsAddForceFieldOpen ? 'text-white' : 'text-[#888] group-hover/forcefield:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsAddForceFieldOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Force Field nested menu">
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-force" alt-id="Force">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-force:text-white">
                            <path d="M2.5 1 L1.5 3 L3.5 6 L1.5 9 L2.5 11 M6 1 L5 3 L7 6 L5 9 L6 11 M9.5 1 L8.5 3 L10.5 6 L8.5 9 L9.5 11" />
                          </svg>
                          <span>Force</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-wind" alt-id="Wind">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-wind:text-white">
                            <path d="M1 3 L8 3 C9.5 3 10.5 4 10.5 5.5 C10.5 7 9.5 8 8 8 L7 8" />
                            <path d="M2 6 L6 6" />
                            <path d="M1 9 L7 9 C8.5 9 9.5 10 9.5 11" />
                          </svg>
                          <span>Wind</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-vortex" alt-id="Vortex">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-vortex:text-white">
                            <path d="M6 5.5 C6.5 5.5 7 6 7 6.5 C7 7.5 5 7.5 5 6 C5 4 8 4 8 6.5 C8 9 4 9 4 6 C4 2.5 9 2.5 9 6 C9 10 3 10 3 6 C3 1.5 10.5 1.5 10.5 6" />
                          </svg>
                          <span>Vortex</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-magnetic" alt-id="Magnetic">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-magnetic:text-white">
                            <path d="M6 1 L6 11" />
                            <path d="M4 6 C4 4, 8 4, 8 6 C8 8, 4 8, 4 6" />
                            <path d="M2 6 C2 2, 10 2, 10 6 C10 10, 2 10, 2 6" />
                            <path d="M5.5 5 L6.5 6 L5.5 7" />
                          </svg>
                          <span>Magnetic</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-harmonic" alt-id="Harmonic">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-harmonic:text-white">
                            <path d="M1 6 Q 3 1 6 6 T 11 6" />
                          </svg>
                          <span>Harmonic</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-charge" alt-id="Charge">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-charge:text-white">
                            <circle cx="4" cy="8" r="2.5" />
                            <path d="M3 8 L5 8 M4 7 L4 9" />
                            <circle cx="8" cy="4" r="2.5" />
                            <path d="M7 4 L9 4" />
                          </svg>
                          <span>Charge</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-lennard" alt-id="Lennard-Jones">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-lennard:text-white">
                            <circle cx="3.5" cy="4.5" r="1.5" />
                            <circle cx="3.5" cy="9.5" r="1.5" />
                            <circle cx="8.5" cy="7" r="1.5" />
                            <path d="M4.5 5.5 L7.5 6.5 M4.5 8.5 L7.5 7.5 M3.5 6 L3.5 8" stroke-dasharray="1 1" />
                          </svg>
                          <span>Lennard-Jones</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-texture" alt-id="Texture">
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
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-curveguide" alt-id="Curve Guide">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-curveguide:text-white">
                            <path d="M4 9 C 8 9, 8 3, 4 3" />
                            <circle cx="2.5" cy="9.5" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Curve Guide</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-boid" alt-id="Boid">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-boid:text-white">
                            <path d="M3 4 L5 4 L4 6 Z M6 2 L8 2 L7 4 Z M8 5 L10 5 L9 7 Z" fill="none" />
                            <circle cx="2.5" cy="9.5" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Boid</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-turbulence" alt-id="Turbulence">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-turbulence:text-white">
                            <path d="M4 2 L3 4 L5 6 L3 8 L4 10 M7 2 L6 4 L8 6 L6 8 L7 10 M10 2 L9 4 L11 6 L9 8 L10 10" />
                            <circle cx="2.5" cy="9.5" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Turbulence</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-drag" alt-id="Drag">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80 group-hover/ff-drag:text-white">
                            <path d="M7 2 C4 2 3 5 4 7 C5 9 9 9 10 7 C11 5 10 2 7 2 Z" />
                            <path d="M5 4 L9 4" />
                            <circle cx="2.5" cy="9.5" r="1" fill="currentColor" stroke="none" />
                          </svg>
                          <span>Drag</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/ff-fluidflow" alt-id="Fluid Flow">
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
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/collinst" alt-id="Collection Instance...">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-layer-group text-[#888] text-[12px] group-hover/collinst:text-white"></i>
                      <span>C<span class="underline">o</span>llection Instance...</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>
            <div class="px-5 py-[3px] {isViewportOptionsObjectOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group relative" alt-id="Object Viewport Options" on:click|stopPropagation={() => { isViewportOptionsObjectOpen = !isViewportOptionsObjectOpen; updateOpenParam(); }}>
              <span><span class="underline">O</span>bject</span>
              <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsObjectOpen ? 'text-white' : 'text-[#888] group-hover:text-white'} pointer-events-none"></i>
              
              {#if isViewportOptionsObjectOpen}
                <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[102] w-[260px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Object nested menu">
                  <div class="px-5 py-[3px] {isViewportOptionsObjectTransformOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/transform relative" alt-id="Transform" on:click|stopPropagation={() => { isViewportOptionsObjectTransformOpen = !isViewportOptionsObjectTransformOpen; updateOpenParam(); }}>
                    <span><span class="underline">T</span>ransform</span>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsObjectTransformOpen ? 'text-white' : 'text-[#888] group-hover/transform:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsObjectTransformOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[260px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Transform nested menu">
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/move" alt-id="Move">
                          <span><span class="underline">M</span>ove</span>
                          <span class="text-[#888] text-[11px] font-mono group-hover/move:text-white">G</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/rotate" alt-id="Rotate">
                          <span><span class="underline">R</span>otate</span>
                          <span class="text-[#888] text-[11px] font-mono group-hover/rotate:text-white">R</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/scale" alt-id="Scale">
                          <span><span class="underline">S</span>cale</span>
                          <span class="text-[#888] text-[11px] font-mono group-hover/scale:text-white">S</span>
                        </div>
                        
                        <div class="my-1 border-t border-[#333]"></div>
                        
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/tosphere" alt-id="To Sphere">
                          <span><span class="underline">T</span>o Sphere</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/shear" alt-id="Shear">
                          <span>Sh<span class="underline">e</span>ar</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/bend" alt-id="Bend">
                          <span><span class="underline">B</span>end</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/pushpull" alt-id="Push/Pull">
                          <span><span class="underline">P</span>ush/Pull</span>
                        </div>
                        
                        <div class="my-1 border-t border-[#333]"></div>
                        
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/movetex" alt-id="Move Texture Space">
                          <span>Mo<span class="underline">v</span>e Texture Space</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/scaletex" alt-id="Scale Texture Space">
                          <span>S<span class="underline">c</span>ale Texture Space</span>
                        </div>
                        
                        <div class="my-1 border-t border-[#333]"></div>
                        
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/align" alt-id="Align to Transform Orientation">
                          <span><span class="underline">A</span>lign to Transform Orientation</span>
                        </div>
                        
                        <div class="my-1 border-t border-[#333]"></div>
                        
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/randomize" alt-id="Randomize Transform">
                          <span>Ra<span class="underline">n</span>domize Transform</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/alignobj" alt-id="Align Objects">
                          <span>Align <span class="underline">O</span>bjects</span>
                        </div>
                      </div>
                    {/if}
                  </div>
                  <div class="px-5 py-[3px] {isViewportOptionsObjectSetOriginOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/setorigin relative" alt-id="Set Origin" on:click|stopPropagation={() => { isViewportOptionsObjectSetOriginOpen = !isViewportOptionsObjectSetOriginOpen; updateOpenParam(); }}>
                    <span><span class="underline">S</span>et Origin</span>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsObjectSetOriginOpen ? 'text-white' : 'text-[#888] group-hover/setorigin:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsObjectSetOriginOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[260px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Set Origin nested menu">
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/geoorig" alt-id="Geometry to Origin">
                          <span><span class="underline">G</span>eometry to Origin</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/origgeo" alt-id="Origin to Geometry">
                          <span><span class="underline">O</span>rigin to Geometry</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/orig3d" alt-id="Origin to 3D Cursor">
                          <span>Origin to 3D <span class="underline">C</span>ursor</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/origcom" alt-id="Origin to Center of Mass (Surface)">
                          <span>Origin to <span class="underline">C</span>enter of Mass (Surface)</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/origcov" alt-id="Origin to Center of Mass (Volume)">
                          <span>Origin to Center of <span class="underline">M</span>ass (Volume)</span>
                        </div>
                      </div>
                    {/if}
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/mirror" alt-id="Mirror">
                    <span><span class="underline">M</span>irror</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/mirror:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/clear" alt-id="Clear">
                    <span><span class="underline">C</span>lear</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/clear:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/apply" alt-id="Apply">
                    <span><span class="underline">A</span>pply</span>
                    <div class="flex items-center gap-2">
                      <span class="text-[#888] text-[11px] font-mono group-hover/apply:text-white">⌘ A</span>
                      <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/apply:text-white"></i>
                    </div>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/snap" alt-id="Snap">
                    <span>S<span class="underline">n</span>ap</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/snap:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/dupobj" alt-id="Duplicate Objects">
                    <span><span class="underline">D</span>uplicate Objects</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/dupobj:text-white">⇧ D</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/duplink" alt-id="Duplicate Linked">
                    <span>Duplicate <span class="underline">L</span>inked</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/duplink:text-white">⌥ D</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/join" alt-id="Join">
                    <span><span class="underline">J</span>oin</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/join:text-white">⌘ J</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/copy" alt-id="Copy Objects">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-regular fa-copy text-[#888] text-[12px] group-hover/copy:text-white"></i>
                      <span>C<span class="underline">o</span>py Objects</span>
                    </div>
                    <span class="text-[#888] text-[11px] font-mono group-hover/copy:text-white">⌘ C</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/paste" alt-id="Paste Objects">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-clipboard-list text-[#888] text-[12px] group-hover/paste:text-white"></i>
                      <span><span class="underline">P</span>aste Objects</span>
                    </div>
                    <span class="text-[#888] text-[11px] font-mono group-hover/paste:text-white">⌘ V</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/asset" alt-id="Asset">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-book text-[#888] text-[12px] group-hover/asset:text-white"></i>
                      <span>Ass<span class="underline">e</span>t</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/asset:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/coll" alt-id="Collection">
                    <div class="flex items-center gap-[10px]">
                      <div class="w-[12px]"></div> <!-- spacer -->
                      <span>C<span class="underline">o</span>llection</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/coll:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/libor" alt-id="Library Override">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-link-slash text-[#888] text-[12px] group-hover/libor:text-white"></i>
                      <span>Librar<span class="underline">y</span> Override</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/libor:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/rels" alt-id="Relations">
                    <div class="flex items-center gap-[10px]">
                      <div class="w-[12px]"></div> <!-- spacer -->
                      <span><span class="underline">R</span>elations</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/rels:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/parent" alt-id="Parent">
                    <div class="flex items-center gap-[10px]">
                      <div class="w-[12px]"></div> <!-- spacer -->
                      <span>P<span class="underline">a</span>rent</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/parent:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] {isViewportOptionsObjectModifiersOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/mods relative" alt-id="Modifiers" on:click|stopPropagation={() => { isViewportOptionsObjectModifiersOpen = !isViewportOptionsObjectModifiersOpen; updateOpenParam(); }}>
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-wrench text-[#888] text-[12px] {isViewportOptionsObjectModifiersOpen ? 'text-white' : 'group-hover/mods:text-white'}"></i>
                      <span><span class="underline">M</span>odifiers</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsObjectModifiersOpen ? 'text-white' : 'text-[#888] group-hover/mods:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsObjectModifiersOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[260px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Modifiers nested menu">
                        <div class="px-5 py-[3px] {isViewportOptionsObjectModifiersAddOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/addmod relative" alt-id="Add Modifier" on:click|stopPropagation={() => { isViewportOptionsObjectModifiersAddOpen = !isViewportOptionsObjectModifiersAddOpen; updateOpenParam(); }}>
                          <span><span class="underline">A</span>dd Modifier</span>
                          <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsObjectModifiersAddOpen ? 'text-white' : 'text-[#888] group-hover/addmod:text-white'} pointer-events-none"></i>
                          
                          {#if isViewportOptionsObjectModifiersAddOpen}
                            <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[104] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Add Modifier nested menu">
                              <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/editmod" alt-id="Edit">
                                <span>Edit</span>
                                <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/editmod:text-white"></i>
                              </div>
                              <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/genmod" alt-id="Generate">
                                <span>Generate</span>
                                <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/genmod:text-white"></i>
                              </div>
                              <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/defmod" alt-id="Deform">
                                <span>Deform</span>
                                <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/defmod:text-white"></i>
                              </div>
                              <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/normmod" alt-id="Normals">
                                <span>Normals</span>
                                <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/normmod:text-white"></i>
                              </div>
                              <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/physmod" alt-id="Physics">
                                <span>Physics</span>
                                <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/physmod:text-white"></i>
                              </div>
                              
                              <div class="my-1 border-t border-[#333]"></div>
                              
                              <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/geomod" alt-id="Geometry">
                                <span>Geometry</span>
                                <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/geomod:text-white"></i>
                              </div>
                              <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/hairmod" alt-id="Hair">
                                <span>Hair</span>
                                <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/hairmod:text-white"></i>
                              </div>
                              <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/instmod" alt-id="Instances">
                                <span>Instances</span>
                                <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/instmod:text-white"></i>
                              </div>
                              
                              <div class="my-1 border-t border-[#333]"></div>
                              
                              <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/unassigned" alt-id="Unassigned">
                                <div class="flex items-center gap-[10px]">
                                  <i class="fa-regular fa-file text-[#888] text-[12px] group-hover/unassigned:text-white pointer-events-none" style="border-style: dotted; border-width: 1px; border-color: transparent;"></i>
                                  <span>Unassigned</span>
                                </div>
                                <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/unassigned:text-white"></i>
                              </div>
                              <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/geonodes" alt-id="Geometry Nodes">
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
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/copymods" alt-id="Copy Modifiers to Selected Objects">
                          <span><span class="underline">C</span>opy Modifiers to Selected Objects</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/clearmods" alt-id="Clear Object Modifiers">
                          <span>Clear <span class="underline">O</span>bject Modifiers</span>
                        </div>
                      </div>
                    {/if}
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/consts" alt-id="Constraints">
                    <div class="flex items-center gap-[10px]">
                      <i class="fa-solid fa-link text-[#888] text-[12px] group-hover/consts:text-white"></i>
                      <span>C<span class="underline">o</span>nstraints</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/consts:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/track" alt-id="Track">
                    <div class="flex items-center gap-[10px]">
                      <div class="w-[12px]"></div> <!-- spacer -->
                      <span>Trac<span class="underline">k</span></span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/track:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/linktrans" alt-id="Link/Transfer Data">
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
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/shades" alt-id="Shade Smooth">
                    <span><span class="underline">S</span>hade Smooth</span>
                  </div>
                  <div class="px-5 py-[3px] text-[#888] cursor-default flex items-center justify-between group/shadea" alt-id="Shade Auto Smooth">
                    <span>Shade Auto Smooth</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/shadef" alt-id="Shade Flat">
                    <span>Shade <span class="underline">F</span>lat</span>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] {isViewportOptionsObjectAnimationOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/anim relative" alt-id="Animation" on:click|stopPropagation={() => { isViewportOptionsObjectAnimationOpen = !isViewportOptionsObjectAnimationOpen; updateOpenParam(); }}>
                    <span><span class="underline">A</span>nimation</span>
                    <i class="fa-solid fa-caret-right text-[10px] {isViewportOptionsObjectAnimationOpen ? 'text-white' : 'text-[#888] group-hover/anim:text-white'} pointer-events-none"></i>
                    
                    {#if isViewportOptionsObjectAnimationOpen}
                      <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[103] w-[300px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Animation nested menu">
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/inskey" alt-id="Insert Keyframe">
                          <span><span class="underline">I</span>nsert Keyframe</span>
                          <span class="text-[#888] text-[11px] font-mono group-hover/inskey:text-white">I</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/inskeyset" alt-id="Insert Keyframe with Keying Set...">
                          <span>Insert <span class="underline">K</span>eyframe with Keying Set...</span>
                          <span class="text-[#888] text-[11px] font-mono group-hover/inskeyset:text-white">K</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/delkey" alt-id="Delete Keyframes...">
                          <span><span class="underline">D</span>elete Keyframes...</span>
                          <span class="text-[#888] text-[11px] font-mono group-hover/delkey:text-white">⌥ I</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/clearkey" alt-id="Clear Keyframes...">
                          <span><span class="underline">C</span>lear Keyframes...</span>
                        </div>
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/changekeyset" alt-id="Change Keying Set...">
                          <span>Change Keying <span class="underline">S</span>et...</span>
                          <span class="text-[#888] text-[11px] font-mono group-hover/changekeyset:text-white">⇧ K</span>
                        </div>
                        
                        <div class="my-1 border-t border-[#333]"></div>
                        
                        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/bakeaction" alt-id="Bake Action...">
                          <span><span class="underline">B</span>ake Action...</span>
                        </div>
                        <div class="px-5 py-[3px] text-[#888] cursor-default flex items-center justify-between group/bakeobj" alt-id="Bake Object Transform to Grease Pencil...">
                          <span>Bake <span class="underline">O</span>bject Transform to Grease Pencil...</span>
                        </div>
                        <div class="px-5 py-[3px] text-[#888] cursor-default flex items-center justify-between group/replaction" alt-id="Replace Action">
                          <span><span class="underline">R</span>eplace Action</span>
                        </div>
                        <div class="px-5 py-[3px] text-[#888] cursor-default flex items-center justify-between group/replnewaction" alt-id="Replace with new Action">
                          <span>Replace <span class="underline">w</span>ith new Action</span>
                        </div>
                      </div>
                    {/if}
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/rigid" alt-id="Rigid Body">
                    <span>Rigid <span class="underline">B</span>ody</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/rigid:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/quick" alt-id="Quick Effects">
                    <span><span class="underline">Q</span>uick Effects</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/quick:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/conv" alt-id="Convert">
                    <span>Conv<span class="underline">e</span>rt</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/conv:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/showhide" alt-id="Show/Hide">
                    <span>Show/<span class="underline">H</span>ide</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/showhide:text-white"></i>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/cleanup" alt-id="Clean Up">
                    <span>Clean <span class="underline">U</span>p</span>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/cleanup:text-white"></i>
                  </div>
                  
                  <div class="my-1 border-t border-[#333]"></div>
                  
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/del" alt-id="Delete">
                    <span><span class="underline">D</span>elete</span>
                    <span class="text-[#888] text-[11px] font-mono group-hover/del:text-white">X</span>
                  </div>
                  <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/delglob" alt-id="Delete Global">
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
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-l" alt-id="Transform Orientation: Global">
          <i class="fa-light fa-arrows-up-down-left-right text-[12px]"></i>
          <span class="text-[#ccc]">Global</span>
          <i class="fa-solid fa-chevron-down text-[8px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-r border-l-0" alt-id="Transform Pivot Point">
          <i class="fa-solid fa-link text-[12px]"></i>
          <i class="fa-solid fa-chevron-down text-[8px]"></i>
        </div>
      </div>
      
      <div class="flex items-center gap-0.5 text-[#a0a0a0]">
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-l" alt-id="Snap toggle">
          <i class="fa-solid fa-magnet text-[#ccc] text-[12px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-r border-l-0" alt-id="Snap options dropdown">
          <i class="fa-solid fa-square-dashed text-[12px]"></i>
          <i class="fa-solid fa-chevron-down text-[8px]"></i>
        </div>
      </div>
      
      <div class="flex items-center gap-0.5 text-[#a0a0a0]">
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-l" alt-id="Proportional Editing toggle">
          <i class="fa-solid fa-bullseye text-[#ccc] text-[12px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-r border-l-0" alt-id="Proportional Editing options dropdown">
          <i class="fa-regular fa-bell text-[12px]"></i>
          <i class="fa-solid fa-chevron-down text-[8px]"></i>
        </div>
      </div>
    </div>
    
    <!-- Right side tools -->
    <div class="flex items-center gap-2 text-[#a0a0a0]">
      <!-- Object Types Visibility -->
      <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded" alt-id="Object Types Visibility settings">
        <i class="fa-solid fa-eye text-[12px]"></i>
        <i class="fa-solid fa-chevron-down text-[8px]"></i>
      </div>

      <!-- Viewport Gizmos and Overlays -->
      <div class="flex items-center gap-0.5">
        <div class="flex items-center gap-1 cursor-pointer text-white bg-[#4772b3] border border-[#4772b3] px-2 py-[2px] rounded-l" alt-id="Viewport Gizmos toggle">
          <i class="fa-solid fa-bow-arrow text-[12px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-1 py-[2px] border-l-0" alt-id="Viewport Gizmos dropdown">
          <i class="fa-solid fa-chevron-down text-[8px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer text-white bg-[#4772b3] border border-[#4772b3] px-2 py-[2px] border-l-0" alt-id="Viewport Overlays toggle">
          <i class="fa-solid fa-layer-group text-[12px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-1 py-[2px] rounded-r border-l-0" alt-id="Viewport Overlays dropdown">
          <i class="fa-solid fa-chevron-down text-[8px]"></i>
        </div>
      </div>
      
      <!-- Toggle X-Ray -->
      <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded" alt-id="Toggle X-Ray">
        <i class="fa-solid fa-clone text-[12px]"></i>
      </div>

      <!-- Shading Modes -->
      <div class="flex items-center gap-0.5">
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-l" alt-id="Wireframe shading mode">
          <i class="fa-light fa-globe text-[12px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] border-l-0" alt-id="Solid shading mode">
          <i class="fa-solid fa-circle text-[12px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer text-white bg-[#4772b3] border border-[#4772b3] px-2 py-[2px] border-l-0" alt-id="Material Preview shading mode, currently active">
          <i class="fa-solid fa-circle-half-stroke text-[12px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-r border-l-0" alt-id="Rendered shading mode">
          <i class="fa-regular fa-circle text-[12px]"></i>
        </div>
      </div>
      
      <!-- Shading dropdown -->
      <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-1 py-[2px] rounded" alt-id="Shading dropdown">
        <i class="fa-solid fa-chevron-down text-[8px]"></i>
      </div>
    </div>
  </div>
  
  <!-- Viewport Content -->
  <div class="flex-1 relative overflow-hidden flex items-center justify-center {isMainViewport ? 'bg-[#1c1c1c]' : 'bg-[#333333]'}" alt-id="3D Viewport main area" on:contextmenu={handleViewportContextMenu} on:click={() => { if (isObjectContextMenuOpen || isViewportOptionsDropdownOpen || isViewportOptionsViewOpen || isViewportOptionsSelectOpen || isViewportOptionsAddOpen || isViewportOptionsAddMeshOpen || isViewportOptionsAddCurveOpen || isViewportOptionsAddSurfaceOpen || isViewportOptionsAddMetaballOpen || isViewportOptionsAddVolumeOpen || isViewportOptionsAddLightProbeOpen || isViewportOptionsAddForceFieldOpen || isViewportOptionsObjectOpen || isViewportOptionsObjectTransformOpen || isViewportOptionsObjectSetOriginOpen || isViewportOptionsObjectModifiersOpen || isViewportOptionsObjectModifiersAddOpen || isViewportOptionsObjectAnimationOpen) { isObjectContextMenuOpen = false; isObjectContextMenuConvertToOpen = false; isObjectContextMenuSetOriginOpen = false; isObjectContextMenuMirrorOpen = false; isObjectContextMenuSnapOpen = false; isObjectContextMenuParentOpen = false; isObjectContextMenuMoveToCollectionOpen = false; isObjectContextMenuMoveToCollectionCommonOpen = false; isViewportOptionsDropdownOpen = false; isViewportOptionsViewOpen = false; isViewportOptionsSelectOpen = false; isViewportOptionsAddOpen = false; isViewportOptionsAddMeshOpen = false; isViewportOptionsAddCurveOpen = false; isViewportOptionsAddSurfaceOpen = false; isViewportOptionsAddMetaballOpen = false; isViewportOptionsAddVolumeOpen = false; isViewportOptionsAddLightProbeOpen = false; isViewportOptionsAddForceFieldOpen = false; isViewportOptionsObjectOpen = false; isViewportOptionsObjectTransformOpen = false; isViewportOptionsObjectSetOriginOpen = false; isViewportOptionsObjectModifiersOpen = false; isViewportOptionsObjectModifiersAddOpen = false; isViewportOptionsObjectAnimationOpen = false; updateOpenParam(); } }}>
    
    <!-- Left Toolbar (T-Panel) -->
    {#if isLeftToolbarCollapsed}
      <div class="absolute left-0 top-4 z-20" alt-id="Collapsed left toolbar handle">
        <div class="w-[18px] h-[28px] bg-[#282828] bg-opacity-95 rounded-r flex items-center justify-center cursor-pointer hover:bg-[#333] border border-[#1f1f1f] border-l-0 shadow-md" on:click={() => isLeftToolbarCollapsed = false} alt-id="Expand left toolbar button">
          <i class="fa-solid fa-chevron-right text-[10px] text-[#a0a0a0]"></i>
        </div>
      </div>
    {:else}
      <div class="absolute left-0 top-2 flex flex-col gap-[6px] z-20 pl-[4px] {isLeftToolbarExpanded ? 'w-[120px]' : 'w-[50px]'} transition-[width] duration-150 group/toolbar" alt-id="Viewport left toolbar">
        
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
        }} alt-id="Invisible resize left toolbar handle"></div>

      <!-- Toolbar Content Container -->
      <div class="flex flex-col gap-[6px] h-full overflow-y-auto overflow-x-hidden" style="scrollbar-width: none; -ms-overflow-style: none;">
        <style>
          .flex-col::-webkit-scrollbar {
            display: none;
          }
        </style>
        
        {#if interactionMode === 'sculpt'}
          <!-- Sculpt Mode Toolbar -->
          <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-full pb-1 mb-4" alt-id="Sculpt Mode Tools">
            
            <!-- Brush Tools -->
            <div class="flex flex-col">
              {#each [
                { name: 'Brush', icon: 'fa-paintbrush', shortcut: '⇧ Space Bar, 1' },
                { name: 'Paint', icon: 'fa-paint-roller', shortcut: '' },
                { name: 'Mask', icon: 'fa-mask', shortcut: 'M' },
                { name: 'Draw Face Sets', icon: 'fa-shapes', shortcut: '' }
              ] as tool}
                <div class="w-full h-[36px] {activeSculptTool === tool.name ? 'bg-[#4772b3] text-white' : 'text-[#ccc] hover:bg-[#333] hover:text-white'} flex items-center cursor-pointer relative" on:click={() => handleSculptToolClick(tool.name)} alt-id="{tool.name} button">
                  <div class="w-[50px] h-[36px] flex items-center justify-center shrink-0">
                    <i class="fa-solid {tool.icon} text-[14px] pointer-events-none"></i>
                  </div>
                  {#if isLeftToolbarExpanded}
                    <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">{tool.name}</span>
                  {/if}
                  {#if activeTooltip === tool.name.toLowerCase().replace(/ /g, '-') && !isLeftToolbarExpanded}
                    <div class="absolute left-[54px] top-1/2 -translate-y-1/2 bg-[#1a1a1a] text-white px-3 py-2 rounded shadow-[0_2px_8px_rgba(0,0,0,0.5)] border border-[#2a2a2a] z-50 whitespace-nowrap flex flex-col gap-1" alt-id="{tool.name} tool tooltip">
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
                <div class="w-full h-[36px] flex items-center {activeSculptTool === tool.name ? 'bg-[#4772b3] text-white' : 'text-[#ccc] hover:bg-[#333] hover:text-white'} cursor-pointer relative" on:click={() => handleSculptToolClick(tool.name)} alt-id="{tool.name} button">
                  <div class="w-[50px] h-[36px] flex items-center justify-center shrink-0">
                    <i class="fa-solid {tool.icon} text-[14px] pointer-events-none"></i>
                  </div>
                  {#if isLeftToolbarExpanded}
                    <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">{tool.name}</span>
                  {/if}
                  {#if activeTooltip === tool.name.toLowerCase().replace(/ /g, '-') && !isLeftToolbarExpanded}
                    <div class="absolute left-[54px] top-1/2 -translate-y-1/2 bg-[#1a1a1a] text-white px-3 py-2 rounded shadow-[0_2px_8px_rgba(0,0,0,0.5)] border border-[#2a2a2a] z-50 whitespace-nowrap flex flex-col gap-1" alt-id="{tool.name} tool tooltip">
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
                <div class="w-full h-[36px] flex items-center {activeSculptTool === tool.name ? 'bg-[#4772b3] text-white' : 'text-[#ccc] hover:bg-[#333] hover:text-white'} cursor-pointer relative" on:click={() => handleSculptToolClick(tool.name)} alt-id="{tool.name} button">
                  <div class="w-[50px] h-[36px] flex items-center justify-center shrink-0">
                    <i class="fa-solid {tool.icon} text-[14px] pointer-events-none"></i>
                  </div>
                  {#if isLeftToolbarExpanded}
                    <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">{tool.name}</span>
                  {/if}
                  {#if activeTooltip === tool.name.toLowerCase().replace(/ /g, '-') && !isLeftToolbarExpanded}
                    <div class="absolute left-[54px] top-1/2 -translate-y-1/2 bg-[#1a1a1a] text-white px-3 py-2 rounded shadow-[0_2px_8px_rgba(0,0,0,0.5)] border border-[#2a2a2a] z-50 whitespace-nowrap flex flex-col gap-1" alt-id="{tool.name} tool tooltip">
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
                <div class="w-full h-[36px] flex items-center {activeSculptTool === tool.name ? 'bg-[#4772b3] text-white' : 'text-[#ccc] hover:bg-[#333] hover:text-white'} cursor-pointer relative" on:click={() => handleSculptToolClick(tool.name)} alt-id="{tool.name} button">
                  <div class="w-[50px] h-[36px] flex items-center justify-center shrink-0">
                    <i class="fa-solid {tool.icon} text-[14px] pointer-events-none"></i>
                  </div>
                  {#if isLeftToolbarExpanded}
                    <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">{tool.name}</span>
                  {/if}
                  {#if activeTooltip === tool.name.toLowerCase().replace(/ /g, '-') && !isLeftToolbarExpanded}
                    <div class="absolute left-[54px] top-1/2 -translate-y-1/2 bg-[#1a1a1a] text-white px-3 py-2 rounded shadow-[0_2px_8px_rgba(0,0,0,0.5)] border border-[#2a2a2a] z-50 whitespace-nowrap flex flex-col gap-1" alt-id="{tool.name} tool tooltip">
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
                <div class="w-full h-[36px] flex items-center {activeSculptTool === tool.name ? 'bg-[#4772b3] text-white' : 'text-[#ccc] hover:bg-[#333] hover:text-white'} cursor-pointer relative" on:click={() => handleSculptToolClick(tool.name)} alt-id="{tool.name} button">
                  <div class="w-[50px] h-[36px] flex items-center justify-center shrink-0">
                    <i class="fa-solid {tool.icon} text-[14px] pointer-events-none"></i>
                  </div>
                  {#if isLeftToolbarExpanded}
                    <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">{tool.name}</span>
                  {/if}
                  {#if activeTooltip === tool.name.toLowerCase().replace(/ /g, '-') && !isLeftToolbarExpanded}
                    <div class="absolute left-[54px] top-1/2 -translate-y-1/2 bg-[#1a1a1a] text-white px-3 py-2 rounded shadow-[0_2px_8px_rgba(0,0,0,0.5)] border border-[#2a2a2a] z-50 whitespace-nowrap flex flex-col gap-1" alt-id="{tool.name} tool tooltip">
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
                <div class="w-full h-[36px] flex items-center {activeSculptTool === tool.name ? 'bg-[#4772b3] text-white' : 'text-[#ccc] hover:bg-[#333] hover:text-white'} cursor-pointer relative" on:click={() => handleSculptToolClick(tool.name)} alt-id="{tool.name} button">
                  <div class="w-[50px] h-[36px] flex items-center justify-center shrink-0">
                    <i class="fa-solid {tool.icon} text-[14px] pointer-events-none"></i>
                  </div>
                  {#if isLeftToolbarExpanded}
                    <span class="text-[12px] whitespace-nowrap ml-2 pointer-events-none">{tool.name}</span>
                  {/if}
                  {#if activeTooltip === tool.name.toLowerCase().replace(/ /g, '-') && !isLeftToolbarExpanded}
                    <div class="absolute left-[54px] top-1/2 -translate-y-1/2 bg-[#1a1a1a] text-white px-3 py-2 rounded shadow-[0_2px_8px_rgba(0,0,0,0.5)] border border-[#2a2a2a] z-50 whitespace-nowrap flex flex-col gap-1" alt-id="{tool.name} tool tooltip">
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
          <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-full pb-1 mb-4" alt-id="Texture Paint Mode Tools">
            <div class="flex flex-col mb-2">
              {#each [
                { name: 'Brush', icon: 'fa-paintbrush', active: true, hasTriangle: false, extraHTML: '<div class="w-4 h-[2px] bg-[#888] rounded-full mt-0.5 pointer-events-none transform -rotate-12 opacity-80"></div>' },
                { name: 'Blur', icon: 'fa-droplet', active: false, hasTriangle: false, extraHTML: '<div class="w-4 h-[2px] bg-[#888] rounded-full mt-0.5 pointer-events-none transform -rotate-12 opacity-80"></div>' },
                { name: 'Smear', icon: 'fa-hand-pointer', active: false, hasTriangle: false, extraHTML: '<div class="w-4 h-[2px] bg-[#888] rounded-full mt-0.5 pointer-events-none transform -rotate-12 opacity-80"></div>' },
                { name: 'Clone', icon: 'fa-stamp', active: false, hasTriangle: false, extraHTML: '<div class="w-4 h-[2px] bg-[#888] rounded-full mt-0.5 pointer-events-none transform -rotate-12 opacity-80"></div>' },
                { name: 'Fill', icon: 'fa-fill-drip', active: false, hasTriangle: false, extraHTML: '' },
                { name: 'Mask', icon: 'fa-clone', active: false, hasTriangle: false, extraHTML: '<div class="absolute bottom-1 right-1 w-2 h-2 bg-white rounded-tl-[1px] transform -rotate-45 pointer-events-none"></div>' }
              ] as tool}
                <div class="w-full h-[36px] {tool.active ? 'bg-[#4772b3] text-white' : 'text-[#ccc] hover:bg-[#333] hover:text-white'} flex items-center cursor-pointer relative" alt-id="{tool.name} tool">
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
              <div class="w-full h-[36px] text-[#ccc] hover:bg-[#333] hover:text-white flex items-center cursor-pointer relative" alt-id="Annotate tool">
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
          <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-full pb-1 mb-4" alt-id="Weight Paint Mode Tools">
            <div class="flex flex-col mb-2">
              {#each [
                { name: 'Brush', icon: 'fa-paintbrush', active: true, hasTriangle: false, extraHTML: '<div class="w-4 h-[2px] bg-[#888] rounded-full mt-0.5 pointer-events-none transform -rotate-12 opacity-80"></div>' },
                { name: 'Blur', icon: 'fa-droplet', active: false, hasTriangle: false, extraHTML: '<div class="w-4 h-[2px] bg-[#888] rounded-full mt-0.5 pointer-events-none transform -rotate-12 opacity-80"></div>' },
                { name: 'Average', icon: 'fa-sun', active: false, hasTriangle: false, extraHTML: '' },
                { name: 'Smear', icon: 'fa-hand-pointer', active: false, hasTriangle: false, extraHTML: '<div class="w-4 h-[2px] bg-[#888] rounded-full mt-0.5 pointer-events-none transform -rotate-12 opacity-80"></div>' },
                { name: 'Gradient', icon: '', active: false, hasTriangle: false, extraHTML: '<div class="w-4 h-1 bg-gradient-to-r from-[#ccc] to-transparent transform -rotate-45 pointer-events-none border border-[#888] rounded-full relative mt-1"><div class="absolute -left-[3px] -bottom-[3px] w-1.5 h-1.5 rounded-full bg-[#ccc]"></div><div class="absolute -right-[3px] -top-[3px] w-1.5 h-1.5 rounded-full bg-[#ccc]"></div></div>' },
                { name: 'Sample Weight', icon: 'fa-eye-dropper', active: false, hasTriangle: true, extraHTML: '<div class="w-4 h-[2px] bg-[#888] rounded-full mt-0.5 pointer-events-none transform -rotate-12 opacity-80"></div>' }
              ] as tool}
                <div class="w-full h-[36px] {tool.active ? 'bg-[#4772b3] text-white' : 'text-[#ccc] hover:bg-[#333] hover:text-white'} flex items-center cursor-pointer relative" alt-id="{tool.name} tool">
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
              <div class="w-full h-[36px] text-[#ccc] hover:bg-[#333] hover:text-white flex items-center cursor-pointer relative" alt-id="Annotate tool">
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
          <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-full pb-1 mb-4" alt-id="Vertex Paint Mode Tools">
            <div class="flex flex-col mb-2">
              {#each [
                { name: 'Brush', icon: 'fa-paintbrush', active: true, hasTriangle: false, extraHTML: '<div class="w-4 h-[2px] bg-[#888] rounded-full mt-0.5 pointer-events-none transform -rotate-12 opacity-80"></div>' },
                { name: 'Blur', icon: 'fa-droplet', active: false, hasTriangle: false, extraHTML: '' },
                { name: 'Average', icon: 'fa-sun', active: false, hasTriangle: false, extraHTML: '' },
                { name: 'Smear', icon: 'fa-hand-pointer', active: false, hasTriangle: false, extraHTML: '<div class="w-4 h-[2px] bg-[#888] rounded-full mt-0.5 pointer-events-none transform -rotate-12 opacity-80"></div>' }
              ] as tool}
                <div class="w-full h-[36px] {tool.active ? 'bg-[#4772b3] text-white' : 'text-[#ccc] hover:bg-[#333] hover:text-white'} flex items-center cursor-pointer relative" alt-id="{tool.name} tool">
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
              <div class="w-full h-[36px] text-[#ccc] hover:bg-[#333] hover:text-white flex items-center cursor-pointer relative" alt-id="Annotate tool">
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
          <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-full pb-1 mb-4" alt-id="Edit Mode Tools">
            
            <div class="flex flex-col mb-2">
              {#each [
                { name: 'Select Box', icon: 'fa-arrow-pointer', borderStyle: 'border-dashed border-[#ffcc00]', extraHTML: '' },
                { name: 'Cursor', icon: 'fa-crosshairs', extraHTML: '' }
              ] as tool}
                <div class="w-full h-[36px] {tool.name === 'Select Box' ? 'bg-[#4772b3] text-white' : 'text-[#ccc] hover:bg-[#333] hover:text-white'} flex items-center cursor-pointer relative" alt-id="{tool.name} tool">
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
                <div class="w-full h-[36px] text-[#ccc] hover:bg-[#333] hover:text-white flex items-center cursor-pointer relative" alt-id="{tool.name} tool">
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
                <div class="w-full h-[36px] text-[#ccc] hover:bg-[#333] hover:text-white flex items-center cursor-pointer relative" alt-id="{tool.name} tool">
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
                <div class="w-full h-[36px] text-[#ccc] hover:bg-[#333] hover:text-white flex items-center cursor-pointer relative" alt-id="{tool.name} tool">
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
                <div class="w-full h-[36px] text-[#ccc] hover:bg-[#333] hover:text-white flex items-center cursor-pointer relative" alt-id="{tool.name} tool">
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
        <div class="w-full h-[50px] rounded-t-[3px] bg-[#4772b3] flex items-center text-white cursor-pointer relative border-b border-[#1f1f1f]" alt-id="Select Box tool, currently active, first element in the viewport toolbar">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <div class="relative w-6 h-6 flex items-center justify-center border-[1.5px] border-dashed border-[#ffcc00] opacity-90">
              <i class="fa-solid fa-arrow-pointer text-[12px] text-white shadow-sm transform -translate-x-0.5"></i>
            </div>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Select Box</span>
          <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-b-[6px] border-b-white/80"></div>
        </div>
        <div class="w-full h-[50px] rounded-b-[3px] hover:bg-[#444] flex items-center text-[#ccc] cursor-pointer relative" alt-id="Cursor tool, second element in the viewport toolbar">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <i class="fa-regular fa-crosshairs text-[20px]"></i>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Cursor</span>
        </div>
      </div>
      
      <!-- Group 2 -->
      <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-full overflow-hidden">
        <div class="w-full h-[50px] hover:bg-[#444] rounded-t-[3px] flex items-center text-[#ccc] cursor-pointer border-b border-[#1f1f1f]" alt-id="Move tool, third element in the viewport toolbar">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <i class="fa-solid fa-arrows-up-down-left-right text-[18px]"></i>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Move</span>
        </div>
        <div class="w-full h-[50px] hover:bg-[#444] flex items-center text-[#ccc] cursor-pointer border-b border-[#1f1f1f]" alt-id="Rotate tool, fourth element in the viewport toolbar">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <i class="fa-solid fa-rotate text-[18px]"></i>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Rotate</span>
        </div>
        <div class="w-full h-[50px] hover:bg-[#444] flex items-center text-[#ccc] cursor-pointer relative border-b border-[#1f1f1f]" alt-id="Scale tool, fifth element in the viewport toolbar">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <div class="relative flex items-center justify-center">
              <i class="fa-regular fa-square text-[18px]"></i>
              <i class="fa-solid fa-arrow-up-right text-[10px] absolute top-[-3px] right-[-5px]"></i>
            </div>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Scale</span>
          <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-b-[6px] border-b-[#888]"></div>
        </div>
        <div class="w-full h-[50px] hover:bg-[#444] rounded-b-[3px] flex items-center text-[#ccc] cursor-pointer relative" alt-id="Transform tool, sixth element in the viewport toolbar">
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
        <div class="w-full h-[50px] hover:bg-[#444] rounded-t-[3px] flex items-center text-[#ccc] cursor-pointer relative border-b border-[#1f1f1f]" alt-id="Annotate tool, seventh element in the viewport toolbar">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <div class="relative flex flex-col items-center">
              <i class="fa-solid fa-pen text-[14px] transform rotate-45 -translate-y-0.5"></i>
              <div class="w-5 h-[2px] bg-[#66cc99] rounded-full mt-0.5"></div>
            </div>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Annotate</span>
          <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-b-[6px] border-b-[#888]"></div>
        </div>
        <div class="w-full h-[50px] hover:bg-[#444] rounded-b-[3px] flex items-center text-[#ccc] cursor-pointer relative" alt-id="Measure tool, eighth element in the viewport toolbar">
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
        <div class="w-full h-[50px] hover:bg-[#444] rounded-[3px] flex items-center text-[#ccc] cursor-pointer relative" alt-id="Add Cube tool, ninth element in the viewport toolbar">
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
      <div class="w-[280px] bg-[#282828] bg-opacity-95 backdrop-blur-sm flex flex-col text-[13px] rounded-bl-sm" alt-id="Viewport properties right sidebar">
        <!-- Content wrappers -->
        <div class="flex-1 overflow-y-auto overflow-x-hidden">
          <div class="border-b border-[#1f1f1f]">
            <!-- Transform Header -->
            <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" alt-id="Transform panel header, expanded">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center"></i>
                <span class="font-medium text-[14px]">Transform</span>
              </div>
              <!-- Drag grip -->
              <div class="flex gap-[2px] opacity-40 cursor-grab" alt-id="Panel drag handle">
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
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-t-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Location X input field">
                    <span class="w-5 text-[#ff3333] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">X</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">-0.023445 m</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Location X button"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] px-[8px] py-[4px] relative group cursor-text" alt-id="Location Y input field">
                    <span class="w-5 text-[#88ff33] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Y</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">1.0303 m</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Location Y button"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-b-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Location Z input field">
                    <span class="w-5 text-[#3388ff] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Z</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">-0.28996 m</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Location Z button"></i>
                  </div>
                </div>
              </div>
              
              <!-- Rotation -->
              <div class="flex flex-col gap-1">
                <div class="text-[#ccc] text-[12px] mb-[2px]">Rotation:</div>
                <div class="flex flex-col gap-[1px]">
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-t-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Rotation X input field">
                    <span class="w-5 text-[#ff3333] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">X</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">0°</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Rotation X button"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] px-[8px] py-[4px] relative group cursor-text" alt-id="Rotation Y input field">
                    <span class="w-5 text-[#88ff33] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Y</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">0°</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Rotation Y button"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-b-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Rotation Z input field">
                    <span class="w-5 text-[#3388ff] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Z</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">0°</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Rotation Z button"></i>
                  </div>
                </div>
                <div class="bg-[#2a2a2a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1.5 text-[#ccc] flex justify-between items-center cursor-pointer hover:bg-[#333] mt-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" alt-id="Rotation mode dropdown">
                  <span class="text-[13px] pointer-events-none">XYZ Euler</span><i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                </div>
              </div>
              
              <!-- Scale -->
              <div class="flex flex-col gap-1">
                <div class="text-[#ccc] text-[12px] mb-[2px]">Scale:</div>
                <div class="flex flex-col gap-[1px]">
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-t-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Scale X input field">
                    <span class="w-5 text-[#ff3333] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">X</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">1.000</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Scale X button"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] px-[8px] py-[4px] relative group cursor-text" alt-id="Scale Y input field">
                    <span class="w-5 text-[#88ff33] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Y</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">1.000</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Scale Y button"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-b-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Scale Z input field">
                    <span class="w-5 text-[#3388ff] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Z</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">1.000</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Scale Z button"></i>
                  </div>
                </div>
              </div>
              
              <!-- Dimensions -->
              <div class="flex flex-col gap-1 pb-2">
                <div class="text-[#ccc] text-[12px] mb-[2px]">Dimensions:</div>
                <div class="flex flex-col gap-[1px]">
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-t-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Dimension X input field">
                    <span class="w-5 text-[#ff3333] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">X</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">1.18 m</span>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] px-[8px] py-[4px] relative group cursor-text" alt-id="Dimension Y input field">
                    <span class="w-5 text-[#88ff33] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Y</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">0.23 m</span>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-b-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Dimension Z input field">
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
      <div class="flex flex-col mt-[35px] ml-[2px] gap-[2px] z-10 w-[34px]" alt-id="Viewport properties sidebar tabs">
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer text-white bg-[#3d3d3d] rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide" alt-id="Item tab, currently selected, first element in the viewport sidebar tabs" style="writing-mode: vertical-rl;">Item</div>
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333] rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide" alt-id="Tool tab, second element in the viewport sidebar tabs" style="writing-mode: vertical-rl;">Tool</div>
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333] rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide" alt-id="View tab, third element in the viewport sidebar tabs" style="writing-mode: vertical-rl;">View</div>
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333] rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide" alt-id="Animation tab, fourth element in the viewport sidebar tabs" style="writing-mode: vertical-rl;">Animation</div>
      </div>
    </div>

    {#if isMainViewport}
      <!-- Grid approximation -->
      <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(#aaa 1px, transparent 1px), linear-gradient(90deg, #aaa 1px, transparent 1px); background-size: 40px 40px; transform: perspective(500px) rotateX(60deg) scale(2); transform-origin: top;"></div>

      <!-- The isometric room image placeholder -->
      <div class="relative w-80 h-80 z-10" alt-id="3D scene containing an isometric room">
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
      <div class="relative w-[400px] h-[400px] z-10" alt-id="3D scene Top Orthographic view">
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
      <div class="w-[84px] h-[84px] rounded-full hover:bg-[#3a3a3a]/30 relative mb-2 cursor-pointer transition-colors flex items-center justify-center" alt-id="3D navigation axis gizmo">
        <!-- Axes container -->
        <div class="absolute top-1/2 left-1/2 w-0 h-0">
          <!-- Lines -->
          <div class="absolute w-[2px] h-[30px] bg-[#3388ff] origin-bottom left-[-1px] bottom-0" style="transform: rotate(0deg);"></div>
          <div class="absolute w-[2px] h-[30px] bg-[#8cc43c] origin-bottom left-[-1px] bottom-0" style="transform: rotate(65deg);"></div>
          <div class="absolute w-[2px] h-[30px] bg-[#f34555] origin-bottom left-[-1px] bottom-0" style="transform: rotate(135deg);"></div>
          
          <!-- Positive Dots -->
          <div class="absolute w-[22px] h-[22px] bg-[#3388ff] rounded-full flex items-center justify-center text-[12px] text-white font-bold shadow-sm" style="transform: rotate(0deg) translateY(-30px) rotate(0deg); top: 0; left: 0; margin-left: -11px; margin-top: -11px;" alt-id="Positive Z axis button, top element in the 3D navigation axis gizmo">Z</div>
          <div class="absolute w-[22px] h-[22px] bg-[#8cc43c] rounded-full flex items-center justify-center text-[12px] text-[#111] font-bold shadow-sm" style="transform: rotate(65deg) translateY(-30px) rotate(-65deg); top: 0; left: 0; margin-left: -11px; margin-top: -11px;" alt-id="Positive Y axis button, top right element in the 3D navigation axis gizmo">Y</div>
          <div class="absolute w-[22px] h-[22px] bg-[#f34555] rounded-full flex items-center justify-center text-[12px] text-white font-bold shadow-sm" style="transform: rotate(135deg) translateY(-30px) rotate(-135deg); top: 0; left: 0; margin-left: -11px; margin-top: -11px;" alt-id="Positive X axis button, bottom right element in the 3D navigation axis gizmo">X</div>

          <!-- Negative Dots -->
          <div class="absolute w-[18px] h-[18px] rounded-full border-[3px] border-[#3388ff] bg-[#333] bg-opacity-90" style="transform: rotate(180deg) translateY(-30px); top: 0; left: 0; margin-left: -9px; margin-top: -9px;" alt-id="Negative Z axis button, bottom element in the 3D navigation axis gizmo"></div>
          <div class="absolute w-[18px] h-[18px] rounded-full border-[3px] border-[#8cc43c] bg-[#333] bg-opacity-90" style="transform: rotate(245deg) translateY(-30px); top: 0; left: 0; margin-left: -9px; margin-top: -9px;" alt-id="Negative Y axis button, bottom left element in the 3D navigation axis gizmo"></div>
          <div class="absolute w-[18px] h-[18px] rounded-full border-[3px] border-[#f34555] bg-[#333] bg-opacity-90" style="transform: rotate(315deg) translateY(-30px); top: 0; left: 0; margin-left: -9px; margin-top: -9px;" alt-id="Negative X axis button, top left element in the 3D navigation axis gizmo"></div>
        </div>
      </div>
      
      <!-- Navigation Buttons -->
      <div class="flex flex-col gap-2">
        <div class="w-[38px] h-[38px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Zoom viewport button, first element in the viewport navigation controls"><i class="fa-solid fa-magnifying-glass-plus text-[16px]"></i></div>
        <div class="w-[38px] h-[38px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Pan viewport button, second element in the viewport navigation controls"><i class="fa-solid fa-hand text-[16px]"></i></div>
        <div class="w-[38px] h-[38px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Toggle camera view button, third element in the viewport navigation controls"><i class="fa-solid fa-video text-[15px]"></i></div>
        <div class="w-[38px] h-[38px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Toggle perspective/orthographic button, fourth element in the viewport navigation controls"><i class="fa-solid fa-table-cells text-[17px]"></i></div>
      </div>
    </div>
    



    <!-- Asset Shelf (Bottom Bar for Texture Paint Mode) -->
    {#if interactionMode === 'texture_paint'}
      <div class="absolute bottom-0 left-[36px] right-0 bg-[#1d1d1d] border-t border-[#333] flex flex-col z-20" style="margin-right: 0px;" alt-id="Texture Paint Mode Asset Shelf">
        <!-- Header -->
        <div class="flex items-center justify-between h-[28px] px-2 border-b border-[#333]">
          <!-- Left Header Tabs -->
          <div class="flex items-center h-full gap-[1px]">
            <div class="h-full flex items-center justify-center px-2 cursor-pointer hover:bg-[#333] text-[#aaa] hover:text-[#ccc]" alt-id="Asset Shelf Menu Toggle">
              <i class="fa-solid fa-bars text-[12px] pointer-events-none"></i>
            </div>
            <div class="h-full flex items-center justify-center px-3 cursor-pointer bg-[#333] text-[#ccc]" alt-id="Asset Shelf Tab: All">
              <span class="text-[12px] pointer-events-none">All</span>
            </div>
            <div class="h-full flex items-center justify-center px-3 cursor-pointer hover:bg-[#333] text-[#aaa] hover:text-[#ccc]" alt-id="Asset Shelf Tab: Basic">
              <span class="text-[12px] pointer-events-none">Basic</span>
            </div>
            <div class="h-full flex items-center justify-center px-3 cursor-pointer hover:bg-[#333] text-[#aaa] hover:text-[#ccc]" alt-id="Asset Shelf Tab: Erase">
              <span class="text-[12px] pointer-events-none">Erase</span>
            </div>
            <div class="h-full flex items-center justify-center px-3 cursor-pointer hover:bg-[#333] text-[#aaa] hover:text-[#ccc]" alt-id="Asset Shelf Tab: Pixel Art">
              <span class="text-[12px] pointer-events-none">Pixel Art</span>
            </div>
            <div class="h-full flex items-center justify-center px-3 cursor-pointer hover:bg-[#333] text-[#aaa] hover:text-[#ccc]" alt-id="Asset Shelf Tab: Utilities">
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
            <div class="h-full flex-shrink-0 w-[48px] flex flex-col items-center justify-center cursor-pointer border-r border-[#333] hover:bg-[#333] {brush.active ? 'bg-[#4772b3] shadow-[inset_0_0_0_1px_#8fb8ff]' : ''}" alt-id="Texture Paint Brush: {brush.name}">
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
      <div class="absolute bottom-0 left-[36px] right-0 bg-[#1d1d1d] border-t border-[#333] flex flex-col z-20" style="margin-right: 0px;" alt-id="Vertex Paint Mode Asset Shelf">
        <!-- Header -->
        <div class="flex items-center justify-between h-[28px] px-2 border-b border-[#333]">
          <!-- Left Header Tabs -->
          <div class="flex items-center h-full gap-[1px]">
            <div class="h-full flex items-center justify-center px-2 cursor-pointer hover:bg-[#333] text-[#aaa] hover:text-[#ccc]" alt-id="Asset Shelf Menu Toggle">
              <i class="fa-solid fa-bars text-[12px] pointer-events-none"></i>
            </div>
            <div class="h-full flex items-center justify-center px-3 cursor-pointer bg-[#333] text-[#ccc]" alt-id="Asset Shelf Tab: All">
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
            <div class="h-full flex-shrink-0 w-[48px] flex flex-col items-center justify-center cursor-pointer border-r border-[#333] hover:bg-[#333] {brush.active ? 'bg-[#4772b3] shadow-[inset_0_0_0_1px_#8fb8ff]' : ''}" alt-id="Vertex Paint Brush: {brush.name}">
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
      <div class="absolute bottom-0 left-[36px] right-0 bg-[#1d1d1d] border-t border-[#333] flex flex-col z-20" style="margin-right: 0px;" alt-id="Sculpt Mode Asset Shelf">
        <!-- Header -->
        <div class="flex items-center justify-between h-[28px] px-2 border-b border-[#333]">
          <!-- Left Header Tabs -->
          <div class="flex items-center h-full gap-[1px]">
            <div class="h-full flex items-center justify-center px-2 cursor-pointer hover:bg-[#333] text-[#aaa] hover:text-[#ccc]" alt-id="Asset Shelf Menu Toggle">
              <i class="fa-solid fa-bars text-[12px] pointer-events-none"></i>
            </div>
            <div class="h-full flex items-center justify-center px-3 cursor-pointer bg-[#333] text-[#ccc]" alt-id="Asset Shelf Tab: All">
              <span class="text-[12px] pointer-events-none">All</span>
            </div>
            <div class="h-full flex items-center justify-center px-3 cursor-pointer hover:bg-[#333] text-[#aaa] hover:text-[#ccc]" alt-id="Asset Shelf Tab: General">
              <span class="text-[12px] pointer-events-none">General</span>
            </div>
            <div class="h-full flex items-center justify-center px-3 cursor-pointer hover:bg-[#333] text-[#aaa] hover:text-[#ccc]" alt-id="Asset Shelf Tab: Paint">
              <span class="text-[12px] pointer-events-none">Paint</span>
            </div>
            <div class="h-full flex items-center justify-center px-3 cursor-pointer hover:bg-[#333] text-[#aaa] hover:text-[#ccc]" alt-id="Asset Shelf Tab: Simulation">
              <span class="text-[12px] pointer-events-none">Simulation</span>
            </div>
          </div>
          <!-- Right Header Controls -->
          <div class="flex items-center h-full gap-2 py-1">
            <div class="flex items-center bg-[#282828] border border-[#111] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] px-1.5 py-0.5 cursor-pointer hover:bg-[#333]" alt-id="Display type dropdown">
              <i class="fa-solid fa-grip text-[12px] text-[#ccc] pointer-events-none"></i>
              <i class="fa-solid fa-chevron-down text-[9px] text-[#aaa] ml-1 pointer-events-none"></i>
            </div>
            <div class="flex items-center bg-[#282828] border border-[#111] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] px-2 py-0.5 w-[140px]" alt-id="Search assets input container">
              <i class="fa-solid fa-magnifying-glass text-[12px] text-[#888] pointer-events-none"></i>
              <input type="text" class="bg-transparent border-none outline-none text-[#ccc] text-[12px] ml-2 w-full placeholder-[#888]" placeholder="Search" alt-id="Search assets input field">
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
            <div class="h-full flex-shrink-0 w-[48px] flex flex-col items-center justify-center cursor-pointer border-r border-[#333] hover:bg-[#333] {brush.active ? 'bg-[#4772b3] shadow-[inset_0_0_0_1px_#8fb8ff]' : ''}" alt-id="Sculpt Brush: {brush.name}">
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
           alt-id="Object context menu">
        <div class="px-5 pb-1.5 pt-0.5 text-[#999] text-[12px] border-b border-[#333] mb-1 pointer-events-none">Object</div>
        
        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Shade Smooth">
           <span><span class="underline">S</span>hade Smooth</span>
        </div>
        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Shade Auto Smooth">
           <span>Shade <span class="underline">A</span>uto Smooth</span>
        </div>
        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Shade Flat">
           <span>Shade <span class="underline">F</span>lat</span>
        </div>
        
        <div class="my-1 border-t border-[#333]"></div>
        
        <div class="px-5 py-[3px] {isObjectContextMenuConvertToOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group relative" alt-id="Convert To" on:click|stopPropagation={() => { isObjectContextMenuConvertToOpen = !isObjectContextMenuConvertToOpen; updateOpenParam(); }}>
           <span><span class="underline">C</span>onvert To</span>
           <i class="fa-solid fa-caret-right text-[10px] {isObjectContextMenuConvertToOpen ? 'text-white' : 'text-[#888]'} pointer-events-none group-hover:text-white"></i>
           
           {#if isObjectContextMenuConvertToOpen}
             <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Convert To nested menu">
               <div class="px-5 py-[5px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-3" alt-id="Convert To Mesh">
                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80">
                   <path d="M1 1 L11 1 L6 9.5 Z" />
                 </svg>
                 <span><span class="underline">M</span>esh</span>
               </div>
               <div class="px-5 py-[5px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-3" alt-id="Convert To Curve">
                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80">
                   <path d="M8 2 A 5 5 0 0 0 4 10" stroke-linecap="round" />
                 </svg>
                 <span><span class="underline">C</span>urve</span>
               </div>
               <div class="px-5 py-[5px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-3" alt-id="Convert To Curves">
                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80">
                   <path d="M3 11 C 4 7, 7 3, 9 3" stroke-linecap="round" />
                   <path d="M6 11 C 7 7, 10 3, 12 3" stroke-linecap="round" />
                   <path d="M9 11 C 10 8, 12 5, 13 5" stroke-linecap="round" />
                 </svg>
                 <span><span class="underline">C</span>urves</span>
               </div>
               <div class="px-5 py-[5px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[14px]" alt-id="Convert To Point Cloud">
                 <div class="w-[12px] h-[12px] flex flex-col items-center justify-center pointer-events-none relative -left-[1px] opacity-80">
                   <div class="w-[4px] h-[4px] bg-current rounded-full mb-[1px]"></div>
                   <div class="flex gap-[2px]">
                     <div class="w-[4px] h-[4px] bg-current rounded-full"></div>
                     <div class="w-[4px] h-[4px] bg-current rounded-full"></div>
                   </div>
                 </div>
                 <span><span class="underline">P</span>oint Cloud</span>
               </div>
               <div class="px-5 py-[5px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-3" alt-id="Convert To Grease Pencil">
                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none opacity-80">
                   <path d="M2 12 Q 4 1, 8 2 T 12 8 T 8 12 T 2 12" stroke-linecap="round" stroke-linejoin="round" />
                 </svg>
                 <span><span class="underline">G</span>rease Pencil</span>
               </div>
             </div>
           {/if}
        </div>
        <div class="px-5 py-[3px] {isObjectContextMenuSetOriginOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group relative" alt-id="Set Origin" on:click|stopPropagation={() => { isObjectContextMenuSetOriginOpen = !isObjectContextMenuSetOriginOpen; updateOpenParam(); }}>
           <span>Set <span class="underline">O</span>rigin</span>
           <i class="fa-solid fa-caret-right text-[10px] {isObjectContextMenuSetOriginOpen ? 'text-white' : 'text-[#888]'} pointer-events-none group-hover:text-white"></i>
           
           {#if isObjectContextMenuSetOriginOpen}
             <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[260px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Set Origin nested menu">
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Geometry to Origin">
                 <span><span class="underline">G</span>eometry to Origin</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Origin to Geometry">
                 <span><span class="underline">O</span>rigin to Geometry</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Origin to 3D Cursor">
                 <span>Origin <span class="underline">t</span>o 3D Cursor</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Origin to Center of Mass (Surface)">
                 <span>Origin to <span class="underline">C</span>enter of Mass (Surface)</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Origin to Center of Mass (Volume)">
                 <span>Origin to Center of <span class="underline">M</span>ass (Volume)</span>
               </div>
             </div>
           {/if}
        </div>
        
        <div class="my-1 border-t border-[#333]"></div>
        
        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group" alt-id="Copy Objects">
           <div class="flex items-center gap-[6px] relative -left-4"><i class="fa-regular fa-copy text-[12px] text-[#aaa] group-hover:text-white w-3 text-center"></i> <span>Cop<span class="underline">y</span> Objects</span></div>
           <span class="text-[#888] text-[11px] group-hover:text-white font-mono">⌘ C</span>
        </div>
        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group" alt-id="Paste Objects">
           <div class="flex items-center gap-[6px] relative -left-4"><i class="fa-solid fa-arrow-right-to-bracket text-[12px] text-[#aaa] group-hover:text-white w-3 text-center transform -scale-y-100 rotate-90"></i> <span><span class="underline">P</span>aste Objects</span></div>
           <span class="text-[#888] text-[11px] group-hover:text-white font-mono">⌘ V</span>
        </div>
        
        <div class="my-1 border-t border-[#333]"></div>
        
        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group" alt-id="Duplicate Objects">
           <div class="flex items-center gap-[6px] relative -left-4"><i class="fa-regular fa-clone text-[12px] text-[#aaa] group-hover:text-white w-3 text-center"></i> <span><span class="underline">D</span>uplicate Objects</span></div>
           <span class="text-[#888] text-[11px] group-hover:text-white font-mono">⇧ D</span>
        </div>
        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group" alt-id="Duplicate Linked">
           <div class="flex items-center gap-[6px] relative -left-4"><span class="w-3"></span> <span>Duplicate <span class="underline">L</span>inked</span></div>
           <span class="text-[#888] text-[11px] group-hover:text-white font-mono">⌥ D</span>
        </div>
        
        <div class="my-1 border-t border-[#333]"></div>
        
        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group" alt-id="Rename Active Object">
           <span><span class="underline">R</span>ename Active Object...</span>
           <span class="text-[#888] text-[11px] group-hover:text-white font-mono">F2</span>
        </div>
        
        <div class="my-1 border-t border-[#333]"></div>
        
        <div class="px-5 py-[3px] {isObjectContextMenuMirrorOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group relative" alt-id="Mirror" on:click|stopPropagation={() => { isObjectContextMenuMirrorOpen = !isObjectContextMenuMirrorOpen; updateOpenParam(); }}>
           <span><span class="underline">M</span>irror</span>
           <i class="fa-solid fa-caret-right text-[10px] {isObjectContextMenuMirrorOpen ? 'text-white' : 'text-[#888]'} pointer-events-none group-hover:text-white"></i>
           
           {#if isObjectContextMenuMirrorOpen}
             <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Mirror nested menu">
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Interactive Mirror">
                 <span><span class="underline">I</span>nteractive Mirror</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">^ M</span>
               </div>
               
               <div class="my-1 border-t border-[#333]"></div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="X Global">
                 <span><span class="underline">X</span> Global</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Y Global">
                 <span><span class="underline">Y</span> Global</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Z Global">
                 <span><span class="underline">Z</span> Global</span>
               </div>
               
               <div class="my-1 border-t border-[#333]"></div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="X Local">
                 <span>X <span class="underline">L</span>ocal</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Y Local">
                 <span>Y L<span class="underline">o</span>cal</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Z Local">
                 <span>Z Local</span>
               </div>
             </div>
           {/if}
        </div>
        <div class="px-5 py-[3px] {isObjectContextMenuSnapOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group relative" alt-id="Snap" on:click|stopPropagation={() => { isObjectContextMenuSnapOpen = !isObjectContextMenuSnapOpen; updateOpenParam(); }}>
           <span>S<span class="underline">n</span>ap</span>
           <i class="fa-solid fa-caret-right text-[10px] {isObjectContextMenuSnapOpen ? 'text-white' : 'text-[#888]'} pointer-events-none group-hover:text-white"></i>
           
           {#if isObjectContextMenuSnapOpen}
             <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[260px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Snap nested menu">
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Selection to Grid">
                 <span><span class="underline">S</span>election to Grid</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Selection to Cursor">
                 <span>Selec<span class="underline">t</span>ion to Cursor</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Selection to Cursor (Keep Offset)">
                 <span>Selection to <span class="underline">C</span>ursor (Keep Offset)</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Selection to Active">
                 <span>Selection to <span class="underline">A</span>ctive</span>
               </div>
               
               <div class="my-1 border-t border-[#333]"></div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Cursor to Selected">
                 <span>C<span class="underline">u</span>rsor to Selected</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Cursor to World Origin">
                 <span>Cursor to <span class="underline">W</span>orld Origin</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Cursor to Grid">
                 <span>Cursor to <span class="underline">G</span>rid</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Cursor to Active">
                 <span>Cu<span class="underline">r</span>sor to Active</span>
               </div>
             </div>
           {/if}
        </div>
        <div class="px-5 py-[3px] {isObjectContextMenuParentOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group relative" alt-id="Parent" on:click|stopPropagation={() => { isObjectContextMenuParentOpen = !isObjectContextMenuParentOpen; updateOpenParam(); }}>
           <span>Par<span class="underline">e</span>nt</span>
           <i class="fa-solid fa-caret-right text-[10px] {isObjectContextMenuParentOpen ? 'text-white' : 'text-[#888]'} pointer-events-none group-hover:text-white"></i>
           
           {#if isObjectContextMenuParentOpen}
             <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[300px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Parent nested menu">
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Object Parent">
                 <span><span class="underline">O</span>bject</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Armature Deform">
                 <span><span class="underline">A</span>rmature Deform</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between pl-9" alt-id="With Empty Groups">
                 <span><span class="underline">W</span>ith Empty Groups</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between pl-9" alt-id="With Automatic Weights">
                 <span>Wit<span class="underline">h</span> Automatic Weights</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between pl-9" alt-id="With Envelope Weights">
                 <span>With <span class="underline">E</span>nvelope Weights</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Bone">
                 <span><span class="underline">B</span>one</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Bone Relative">
                 <span>Bone <span class="underline">R</span>elative</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Curve Deform">
                 <span><span class="underline">C</span>urve Deform</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Follow Path">
                 <span><span class="underline">F</span>ollow Path</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Path Constraint">
                 <span><span class="underline">P</span>ath Constraint</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Lattice Deform">
                 <span><span class="underline">L</span>attice Deform</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Vertex">
                 <span>Verte<span class="underline">x</span></span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Vertex (Triangle)">
                 <span>Vertex (<span class="underline">T</span>riangle)</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌘ P</span>
               </div>
               
               <div class="my-1 border-t border-[#333]"></div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Make Parent without Inverse">
                 <span><span class="underline">M</span>ake Parent without Inverse</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Make Parent without Inverse (Keep Transform)">
                 <span>Make Parent without <span class="underline">I</span>nverse (Keep Transform)</span>
               </div>
               
               <div class="my-1 border-t border-[#333]"></div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Clear Parent">
                 <span>Clear Pare<span class="underline">n</span>t</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌥ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Clear and Keep Transformation">
                 <span>Clear and <span class="underline">K</span>eep Transformation</span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌥ P</span>
               </div>
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between" alt-id="Clear Parent Inverse">
                 <span>Clear Parent Invers<span class="underline">e</span></span>
                 <span class="text-[#888] text-[11px] font-mono group-hover:text-white">⌥ P</span>
               </div>
             </div>
           {/if}
        </div>
        <div class="px-5 py-[3px] {isObjectContextMenuMoveToCollectionOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group relative" alt-id="Move to Collection" on:click|stopPropagation={() => { isObjectContextMenuMoveToCollectionOpen = !isObjectContextMenuMoveToCollectionOpen; updateOpenParam(); }}>
           <span>Move <span class="underline">t</span>o Collection</span>
           <div class="flex items-center gap-2">
             <span class="text-[#888] text-[11px] group-hover:text-white font-mono">M</span>
             <i class="fa-solid fa-caret-right text-[10px] {isObjectContextMenuMoveToCollectionOpen ? 'text-white' : 'text-[#888]'} pointer-events-none group-hover:text-white"></i>
           </div>
           
           {#if isObjectContextMenuMoveToCollectionOpen}
             <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[200px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Move to Collection nested menu">
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px]" alt-id="+ New Collection">
                 <i class="fa-solid fa-plus text-[#888] text-[10px] pointer-events-none opacity-80"></i>
                 <span>New Collection</span>
               </div>
               
               <div class="my-1 border-t border-[#333]"></div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/sc" alt-id="Scene Collection">
                 <i class="fa-solid fa-shapes text-[#888] text-[10px] group-hover/sc:text-white pointer-events-none"></i>
                 <span>Scene Collection</span>
               </div>
               
               <div class="px-5 py-[3px] {isObjectContextMenuMoveToCollectionCommonOpen ? 'bg-[#444] text-[#ccc]' : 'hover:bg-[#4772b3] hover:text-white'} cursor-pointer flex items-center justify-between group/common relative" alt-id="Common" on:click|stopPropagation={() => { isObjectContextMenuMoveToCollectionCommonOpen = !isObjectContextMenuMoveToCollectionCommonOpen; updateOpenParam(); }}>
                 <div class="flex items-center gap-[10px]">
                   <i class="fa-solid fa-box-archive text-[#888] text-[10px] {isObjectContextMenuMoveToCollectionCommonOpen ? 'text-white' : 'group-hover/common:text-white'} pointer-events-none"></i>
                   <span>Common</span>
                 </div>
                 <i class="fa-solid fa-caret-right text-[10px] {isObjectContextMenuMoveToCollectionCommonOpen ? 'text-white' : 'text-[#888] group-hover/common:text-white'} pointer-events-none"></i>
                 
                 {#if isObjectContextMenuMoveToCollectionCommonOpen}
                   <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[102] w-[220px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Common nested menu">
                     <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px]" alt-id="+ New Collection (Common)">
                       <i class="fa-solid fa-plus text-[#888] text-[10px] pointer-events-none opacity-80"></i>
                       <span>New Collection</span>
                     </div>
                     
                     <div class="my-1 border-t border-[#333]"></div>
                     
                     <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] relative group/commontarget" alt-id="Common (Move Target)">
                       <i class="fa-solid fa-box-archive text-[#888] text-[10px] pointer-events-none group-hover/commontarget:text-white"></i>
                       <span class="opacity-0">Common</span>
                       <!-- Tooltip overlay to match image exactly -->
                       <div class="absolute left-6 top-1/2 -translate-y-1/2 bg-[#1a1a1a] text-[#ccc] text-[12px] px-2 py-[1px] rounded-[2px] shadow-[0_2px_4px_rgba(0,0,0,0.5)] border border-[#333] whitespace-nowrap pointer-events-none z-[103]">
                         Move objects to a collection.
                       </div>
                     </div>
                     
                     <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/ref" alt-id="Reference Images">
                       <div class="flex items-center gap-[10px]">
                         <i class="fa-solid fa-box-archive text-[#888] text-[10px] group-hover/ref:text-white pointer-events-none"></i>
                         <span>Reference Images</span>
                       </div>
                       <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/ref:text-white"></i>
                     </div>
                   </div>
                 {/if}
               </div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group/studio" alt-id="Studio">
                 <div class="flex items-center gap-[10px]">
                   <i class="fa-solid fa-box-archive text-[#888] text-[10px] group-hover/studio:text-white pointer-events-none"></i>
                   <span>Studio</span>
                 </div>
                 <i class="fa-solid fa-caret-right text-[10px] text-[#888] pointer-events-none group-hover/studio:text-white"></i>
               </div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/sa" alt-id="Studio Assets">
                 <i class="fa-solid fa-box-archive text-[#888] text-[10px] group-hover/sa:text-white pointer-events-none"></i>
                 <span>Studio Assets</span>
               </div>
               
               <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center gap-[10px] group/da" alt-id="Demo Assets">
                 <i class="fa-solid fa-box-archive text-[#888] text-[10px] group-hover/da:text-white pointer-events-none"></i>
                 <span>Demo Assets</span>
               </div>
             </div>
           {/if}
        </div>
        
        <div class="my-1 border-t border-[#333]"></div>
        
        <div class="px-5 py-[3px] bg-[#4772b3] text-white cursor-pointer flex items-center justify-between group" alt-id="Insert Keyframe">
           <span><span class="underline">I</span>nsert Keyframe</span>
           <span class="text-[#ddd] text-[11px] font-mono group-hover:text-white">I</span>
        </div>
        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group" alt-id="Insert Keyframe with Keying Set">
           <span>Insert <span class="underline">K</span>eyframe with Keying Set...</span>
           <span class="text-[#888] text-[11px] group-hover:text-white font-mono">K</span>
        </div>
        
        <div class="my-1 border-t border-[#333]"></div>
        
        <div class="px-5 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center justify-between group" alt-id="Delete">
           <span>Delete</span>
           <span class="text-[#888] text-[11px] group-hover:text-white font-mono">X</span>
        </div>
      </div>
    {/if}
  </div>
</div>
