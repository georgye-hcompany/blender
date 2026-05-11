<script>
  export let editor;
  export let windowId = '';
  import { createEventDispatcher, onMount } from 'svelte';
  const dispatch = createEventDispatcher();

  let isOpen = false;
  let triggerElement;
  let dropdownX = 0;
  let dropdownY = 0;

  const editors = {
    General: [
      { id: 'viewport_3d', name: '3D Viewport', icon: 'fa-cube', shortcut: '⇧ F5' },
      { id: 'image_editor', name: 'Image Editor', icon: 'fa-image', shortcut: '⇧ F10' },
      { id: 'uv_editor', name: 'UV Editor', icon: 'fa-border-none', shortcut: '⇧ F10' },
      { id: 'geometry_node', name: 'Geometry Node Editor', icon: 'fa-circle-nodes', shortcut: '⇧ F3' },
      { id: 'compositor', name: 'Compositor', icon: 'fa-layer-group', shortcut: '⇧ F3' },
      { id: 'shader_editor', name: 'Shader Editor', icon: 'fa-circle-nodes', shortcut: '⇧ F3' },
      { id: 'texture_node', name: 'Texture Node Editor', icon: 'fa-chess-board', shortcut: '⇧ F3' },
      { id: 'video_sequencer', name: 'Video Sequencer', icon: 'fa-film', shortcut: '⇧ F8' },
      { id: 'movie_clip', name: 'Movie Clip Editor', icon: 'fa-clapperboard-play', shortcut: '⇧ F2' }
    ],
    Animation: [
      { id: 'dope_sheet', name: 'Dope Sheet', icon: 'fa-diamond', shortcut: '⇧ F12' },
      { id: 'timeline', name: 'Timeline', icon: 'fa-clock', shortcut: '⇧ F12' },
      { id: 'graph_editor', name: 'Graph Editor', icon: 'fa-chart-line', shortcut: '⇧ F6' },
      { id: 'drivers', name: 'Drivers', icon: 'fa-steering-wheel', shortcut: '⇧ F6' },
      { id: 'nonlinear_animation', name: 'Nonlinear Animation', icon: 'fa-align-left', shortcut: '' }
    ],
    Scripting: [
      { id: 'text_editor', name: 'Text Editor', icon: 'fa-file-lines', shortcut: '⇧ F11' },
      { id: 'python_console', name: 'Python Console', icon: 'fa-terminal', shortcut: '⇧ F4' },
      { id: 'info', name: 'Info', icon: 'fa-circle-info', shortcut: '' }
    ],
    Data: [
      { id: 'outliner', name: 'Outliner', icon: 'fa-list-tree', shortcut: '⇧ F9' },
      { id: 'properties', name: 'Properties', icon: 'fa-sliders', shortcut: '⇧ F7' },
      { id: 'file_browser', name: 'File Browser', icon: 'fa-folder', shortcut: '⇧ F1' },
      { id: 'asset_browser', name: 'Asset Browser', icon: 'fa-books', shortcut: '⇧ F1' },
      { id: 'spreadsheet', name: 'Spreadsheet', icon: 'fa-table-cells', shortcut: '' },
      { id: 'preferences', name: 'Preferences', icon: 'fa-gear', shortcut: '' }
    ]
  };

  function updateOpenParam() {
    if (typeof window !== 'undefined' && windowId) {
      const url = new URL(window.location.href);
      let openParam = url.searchParams.get('open') || '';
      let openStates = openParam ? openParam.split(',').filter(Boolean) : [];
      
      const slug = `${windowId}-editor-selector`;
      
      if (isOpen) {
        if (!openStates.includes(slug)) openStates.push(slug);
      } else {
        openStates = openStates.filter(s => s !== slug);
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

  onMount(() => {
    if (typeof window !== 'undefined' && windowId) {
      const urlParams = new URLSearchParams(window.location.search);
      const openParam = urlParams.get('open') || '';
      if (openParam.includes(`${windowId}-editor-selector`)) {
        isOpen = true;
        requestAnimationFrame(() => {
          if (triggerElement) {
            const rect = triggerElement.getBoundingClientRect();
            dropdownX = rect.left;
            dropdownY = rect.bottom + 2;
          }
        });
      }
    }
  });

  function toggleDropdown(event) {
    if (!isOpen) {
      if (triggerElement) {
        const rect = triggerElement.getBoundingClientRect();
        dropdownX = rect.left;
        dropdownY = rect.bottom + 2;
      }
      isOpen = true;
    } else {
      isOpen = false;
    }
    updateOpenParam();
  }

  function selectEditor(id) {
    editor = id;
    isOpen = false;
    updateOpenParam();
  }
  
  $: currentEditorData = Object.values(editors).flat().find(e => e.id === editor);
  $: currentIcon = currentEditorData?.icon || 'fa-cube';
  $: currentName = currentEditorData?.name || '3D Viewport';

  function closeOnClickOutside(node) {
    const handleClick = event => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        if (isOpen) {
          isOpen = false;
          updateOpenParam();
        }
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    }
  }
</script>

<div class="relative flex" >
  <div bind:this={triggerElement} class="px-2 py-1 bg-[#282828] border border-[#3c3c3c] rounded hover:bg-[#333] cursor-pointer flex items-center justify-center gap-1.5 text-[#ccc] min-w-[30px] min-h-[24px]" on:click={toggleDropdown} alt-id="Editor type selector: {currentName}" appearance-id="small button showing the {currentName} editor icon and name with a dropdown chevron in {windowId}" location-id="top-left of {windowId} editor panel, used to switch editor types" functionality-id="opens the editor type dropdown to change which editor is displayed in {windowId}" intent-id="switch {windowId} to a different editor type">
    <i class="fa-light {currentIcon} text-[14px] pointer-events-none"></i>
    <i class="fa-solid fa-chevron-down text-[9px] text-[#a0a0a0] pointer-events-none"></i>
  </div>
  
  {#if isOpen}
    <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={toggleDropdown}></div>
    <div class="fixed bg-[#1a1a1a] border border-[#2a2a2a] rounded shadow-[0_4px_12px_rgba(0,0,0,0.8)] z-50 py-2 text-[13px] flex overflow-x-auto" style="left: {dropdownX}px; top: {dropdownY}px;" alt-id="Editor types dropdown menu" appearance-id="dark floating panel with editor type options grouped by category for {windowId}" location-id="below the editor type selector button in {windowId}" functionality-id="lists all available editor types that can be assigned to {windowId}" intent-id="select a different editor to view in {windowId} workspace panel">
      {#each Object.entries(editors) as [category, items], colIndex}
        <div class="flex flex-col min-w-[230px] {colIndex !== Object.keys(editors).length - 1 ? 'border-r border-[#333]' : ''}">
          <div class="px-4 py-[2px] text-[#a0a0a0] text-[13px] mb-0.5 pointer-events-none">{category}</div>
          <div class="h-[1px] bg-[#333] my-0.5 mx-3 pointer-events-none"></div>
          <div class="flex flex-col py-1">
            {#each items as item, index}
              <div class="px-4 py-[3px] hover:bg-[#4772b3] hover:text-white cursor-pointer flex items-center {editor === item.id ? 'bg-[#4772b3] text-white' : 'text-[#ccc]'}" on:click={() => selectEditor(item.id)} alt-id="{item.name} editor option, element {index + 1} in {category} category" appearance-id="menu row showing the editor icon and name for {item.name} in {windowId} dropdown" location-id="item {index + 1} in the {category} section of the {windowId} editor types dropdown" functionality-id="switches {windowId} panel to the {item.name} editor" intent-id="open the {item.name} editor in {windowId} workspace panel">
                <i class="fa-light {item.icon} w-5 text-center pointer-events-none"></i>
                <span class="pointer-events-none ml-1 flex-1">{item.name}</span>
                {#if item.shortcut}
                  <span class="ml-2 text-[11px] {editor === item.id ? 'text-white opacity-80' : 'text-[#888]'} pointer-events-none">{item.shortcut}</span>
                {/if}
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
