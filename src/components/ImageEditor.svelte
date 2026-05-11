<script>
  import EditorSelector from './EditorSelector.svelte';
  import { onMount } from 'svelte';
  
  export let currentEditor = 'image_editor';
  export let windowId = '';

  let isModeDropdownOpen = false;
  let currentMode = 'view'; // view, paint, mask

  let isMainMenuOpen = false;
  let isMenuViewOpen = false;
  let isMenuImageOpen = false;
  let isImageSelectorOpen = false;
  let isDisplayChannelsDropdownOpen = false;

  function toggleDisplayChannelsDropdown(e) {
    if (e) e.stopPropagation();
    isDisplayChannelsDropdownOpen = !isDisplayChannelsDropdownOpen;
    updateOpenParam();
  }

  function toggleImageSelector(e) {
    if (e) e.stopPropagation();
    isImageSelectorOpen = !isImageSelectorOpen;
    updateOpenParam();
  }

  function toggleMainMenu(e) {
    if (e) e.stopPropagation();
    isMainMenuOpen = !isMainMenuOpen;
    if (!isMainMenuOpen) {
      isMenuViewOpen = false;
      isMenuImageOpen = false;
    }
    updateOpenParam();
  }

  function toggleModeDropdown(e) {
    if (e) e.stopPropagation();
    isModeDropdownOpen = !isModeDropdownOpen;
    updateOpenParam();
  }

  function setMode(mode) {
    currentMode = mode;
    isModeDropdownOpen = false;
    updateOpenParam();
  }

  function updateOpenParam() {
    if (typeof window !== 'undefined' && windowId) {
      const url = new URL(window.location.href);
      let openParam = url.searchParams.get('open') || '';
      let states = openParam ? openParam.split(',').filter(Boolean) : [];
      
      const slug = `${windowId}-image-mode-dropdown`;
      if (isModeDropdownOpen) {
        if (!states.includes(slug)) states.push(slug);
      } else {
        states = states.filter(s => s !== slug);
      }
      
      const menuSlug = `${windowId}-image-main-menu`;
      if (isMainMenuOpen) {
        if (!states.includes(menuSlug)) states.push(menuSlug);
      } else {
        states = states.filter(s => s !== menuSlug);
      }
      
      const viewMenuSlug = `${windowId}-image-menu-view`;
      if (isMenuViewOpen) {
        if (!states.includes(viewMenuSlug)) states.push(viewMenuSlug);
      } else {
        states = states.filter(s => s !== viewMenuSlug);
      }
      
      const imageMenuSlug = `${windowId}-image-menu-image`;
      if (isMenuImageOpen) {
        if (!states.includes(imageMenuSlug)) states.push(imageMenuSlug);
      } else {
        states = states.filter(s => s !== imageMenuSlug);
      }
      
      const imageSelectorSlug = `${windowId}-image-selector-dropdown`;
      if (isImageSelectorOpen) {
        if (!states.includes(imageSelectorSlug)) states.push(imageSelectorSlug);
      } else {
        states = states.filter(s => s !== imageSelectorSlug);
      }
      
      const displayChannelsSlug = `${windowId}-image-display-channels`;
      if (isDisplayChannelsDropdownOpen) {
        if (!states.includes(displayChannelsSlug)) states.push(displayChannelsSlug);
      } else {
        states = states.filter(s => s !== displayChannelsSlug);
      }
      
      if (states.length > 0) {
        url.searchParams.set('open', states.join(','));
      } else {
        url.searchParams.delete('open');
      }
      window.history.replaceState({}, '', url);
    }
  }

  onMount(() => {
    if (typeof window !== 'undefined' && windowId) {
      const url = new URL(window.location.href);
      const openParam = url.searchParams.get('open') || '';
      if (openParam.includes(`${windowId}-image-mode-dropdown`)) {
        isModeDropdownOpen = true;
      }
      if (openParam.includes(`${windowId}-image-main-menu`)) {
        isMainMenuOpen = true;
      }
      if (openParam.includes(`${windowId}-image-menu-view`)) {
        isMenuViewOpen = true;
      }
      if (openParam.includes(`${windowId}-image-menu-image`)) {
        isMenuImageOpen = true;
      }
      if (openParam.includes(`${windowId}-image-selector-dropdown`)) {
        isImageSelectorOpen = true;
      }
      if (openParam.includes(`${windowId}-image-display-channels`)) {
        isDisplayChannelsDropdownOpen = true;
      }
    }
  });
</script>

<div class="h-full flex flex-col bg-[#282828]" alt-id="Image Editor panel">
  <!-- Header -->
  <div class="h-10 bg-[#282828] border-b border-[#1f1f1f] flex items-center px-2 justify-between text-[13px]" alt-id="Image Editor header">
    <!-- Left side -->
    <div class="flex items-center gap-2">
      <EditorSelector bind:editor={currentEditor} windowId={windowId} />
      
      <!-- Mode selector -->
      <div class="relative">
        <div class="flex items-center gap-1 cursor-pointer hover:text-white px-2 py-1 rounded-[3px] {isModeDropdownOpen ? 'bg-[#4772b3] text-white shadow-none' : 'text-[#ccc]'}" on:click={toggleModeDropdown} alt-id="Image Editor Mode selector, currently {currentMode}">
          <i class="fa-solid {currentMode === 'view' ? 'fa-image-polaroid' : currentMode === 'paint' ? 'fa-chess-board' : 'fa-circle-stop'} text-[14px] pointer-events-none"></i>
          <span class="text-[14px] px-0.5 pointer-events-none">{currentMode === 'view' ? 'View' : currentMode === 'paint' ? 'Paint' : 'Mask'}</span>
          <i class="fa-solid fa-chevron-down text-[10px] {isModeDropdownOpen ? 'text-white' : 'text-[#a0a0a0]'} pointer-events-none"></i>
        </div>

        {#if isModeDropdownOpen}
          <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => {
            isModeDropdownOpen = false;
            updateOpenParam();
          }}></div>
          <div class="absolute left-0 top-[26px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-50 w-[140px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Image Editor Mode dropdown menu">
            <div class="px-3 py-1 text-[#aaa] border-b border-[#333] mb-1 flex items-center" alt-id="Mode header">
              <span class="pointer-events-none">Mode</span>
            </div>
            
            <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer {currentMode === 'view' ? 'bg-[#4772b3] text-white' : ''} group" on:click={() => setMode('view')} alt-id="View mode option">
              <i class="fa-solid fa-image-polaroid text-[13px] w-4 text-center pointer-events-none"></i>
              <span class="pointer-events-none"><u class="underline-offset-2 decoration-1">V</u>iew</span>
            </div>
            
            <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer {currentMode === 'paint' ? 'bg-[#4772b3] text-white' : ''} group" on:click={() => setMode('paint')} alt-id="Paint mode option">
              <i class="fa-solid fa-chess-board text-[13px] w-4 text-center pointer-events-none"></i>
              <span class="pointer-events-none"><u class="underline-offset-2 decoration-1">P</u>aint</span>
            </div>

            <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer {currentMode === 'mask' ? 'bg-[#4772b3] text-white' : ''} group" on:click={() => setMode('mask')} alt-id="Mask mode option">
              <i class="fa-solid fa-circle-stop text-[13px] w-4 text-center pointer-events-none"></i>
              <span class="pointer-events-none"><u class="underline-offset-2 decoration-1">M</u>ask</span>
            </div>
          </div>
        {/if}
      </div>
      
      <!-- Hamburger Menu -->
      <div class="relative">
        <div class="flex items-center justify-center cursor-pointer hover:text-white px-2 py-1 rounded-[3px] {isMainMenuOpen ? 'bg-[#4772b3] text-white shadow-none' : 'text-[#ccc]'}" on:click={toggleMainMenu} alt-id="Image Editor main menu (hamburger)">
          <i class="fa-solid fa-bars text-[14px] pointer-events-none"></i>
        </div>

        {#if isMainMenuOpen}
          <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => {
            isMainMenuOpen = false;
            isMenuViewOpen = false;
            isMenuImageOpen = false;
            updateOpenParam();
          }}></div>
          
          <!-- Main Dropdown -->
          <div class="absolute left-0 top-[26px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-50 w-[180px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Image Editor main menu dropdown">
            
            <!-- View Menu Item -->
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer {isMenuViewOpen ? 'bg-[#4d4d4d] text-white' : ''} group relative" 
                 on:mouseenter={() => { isMenuViewOpen = true; isMenuImageOpen = false; updateOpenParam(); }}
                 alt-id="View menu toggle item; View menu item">
              <span class="pointer-events-none ml-1"><u class="underline-offset-2 decoration-1">V</u>iew</span>
              <i class="fa-solid fa-caret-right text-[10px] {isMenuViewOpen ? 'text-white' : 'text-[#a0a0a0] group-hover:text-white'} pointer-events-none"></i>
              
              {#if isMenuViewOpen}
                <div class="absolute left-full top-[-6px] ml-[2px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-50 min-w-[200px] rounded-[3px] flex flex-col cursor-default" alt-id="View submenu">
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Toolbar toggle">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"><i class="fa-solid fa-check text-[10px]"></i></div>
                      <span>Toolbar</span>
                    </div>
                    <span class="text-[#888] text-[11px] group-hover:text-[#eee]">T</span>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Sidebar toggle">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"></div>
                      <span>Sidebar</span>
                    </div>
                    <span class="text-[#888] text-[11px] group-hover:text-[#eee]">N</span>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Tool Settings toggle">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"></div>
                      <span>Tool Settings</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 text-[#666] cursor-default" alt-id="Asset Shelf toggle (disabled)">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"></div>
                      <span>Asset Shelf</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Adjust Last Operation toggle">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"><i class="fa-solid fa-check text-[10px]"></i></div>
                      <span>Adjust Last Operation</span>
                    </div>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] mx-3 my-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Update Automatically toggle">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"><i class="fa-solid fa-check text-[10px]"></i></div>
                      <span>Update Automatically</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Show Metadata toggle">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"></div>
                      <span>Show Metadata</span>
                    </div>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] mx-3 my-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Frame All">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"></div>
                      <span><u class="underline-offset-2 decoration-1">F</u>rame All</span>
                    </div>
                    <span class="text-[#888] text-[11px] group-hover:text-[#eee]">Home</span>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 text-[#666] cursor-default" alt-id="Center View to Cursor (disabled)">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"></div>
                      <span><u class="underline-offset-2 decoration-1">C</u>enter View to Cursor</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Zoom submenu toggle">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"></div>
                      <span><u class="underline-offset-2 decoration-1">Z</u>oom</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#a0a0a0] group-hover:text-white pointer-events-none"></i>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Area submenu toggle">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"></div>
                      <span><u class="underline-offset-2 decoration-1">A</u>rea</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#a0a0a0] group-hover:text-white pointer-events-none"></i>
                  </div>
                  
                </div>
              {/if}
            </div>
            
            <!-- Image Menu Item -->
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer {isMenuImageOpen ? 'bg-[#4d4d4d] text-white' : ''} group relative" 
                 on:mouseenter={() => { isMenuImageOpen = true; isMenuViewOpen = false; updateOpenParam(); }}
                 alt-id="Image menu toggle item; Image menu item">
              <span class="pointer-events-none ml-1"><u class="underline-offset-2 decoration-1">I</u>mage</span>
              <i class="fa-solid fa-caret-right text-[10px] {isMenuImageOpen ? 'text-white' : 'text-[#a0a0a0] group-hover:text-white'} pointer-events-none"></i>
              
              {#if isMenuImageOpen}
                <div class="absolute left-full top-[-6px] ml-[2px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-50 min-w-[240px] rounded-[3px] flex flex-col cursor-default" alt-id="Image submenu">
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="New image">
                    <div class="flex items-center gap-2">
                      <i class="fa-solid fa-file-medical text-[12px] w-3 text-center text-[#ccc] group-hover:text-white"></i>
                      <span><u class="underline-offset-2 decoration-1">N</u>ew...</span>
                    </div>
                    <span class="text-[#888] text-[11px] group-hover:text-[#eee]">⌥ N</span>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Open image">
                    <div class="flex items-center gap-2">
                      <i class="fa-solid fa-folder-open text-[12px] w-3 text-center text-[#ccc] group-hover:text-white"></i>
                      <span><u class="underline-offset-2 decoration-1">O</u>pen...</span>
                    </div>
                    <span class="text-[#888] text-[11px] group-hover:text-[#eee]">⌥ O</span>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Open Cached Render">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span>Open <u class="underline-offset-2 decoration-1">C</u>ached Render</span>
                    </div>
                    <span class="text-[#888] text-[11px] group-hover:text-[#eee]">⌘ R</span>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] mx-3 my-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 text-[#666] cursor-default" alt-id="Replace image (disabled)">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span><u class="underline-offset-2 decoration-1">R</u>eplace...</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Reload image">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span>Reload</span>
                    </div>
                    <span class="text-[#888] text-[11px] group-hover:text-[#eee]">⌥ R</span>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Edit Externally">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span><u class="underline-offset-2 decoration-1">E</u>dit Externally</span>
                    </div>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] mx-3 my-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Copy image">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span>Copy</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Paste image">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span><u class="underline-offset-2 decoration-1">P</u>aste</span>
                    </div>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] mx-3 my-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Save image">
                    <div class="flex items-center gap-2">
                      <i class="fa-solid fa-floppy-disk text-[12px] w-3 text-center text-[#ccc] group-hover:text-white"></i>
                      <span><u class="underline-offset-2 decoration-1">S</u>ave</span>
                    </div>
                    <span class="text-[#888] text-[11px] group-hover:text-[#eee]">⌥ S</span>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Save As">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span>Save <u class="underline-offset-2 decoration-1">A</u>s...</span>
                    </div>
                    <span class="text-[#888] text-[11px] group-hover:text-[#eee]">⇧ ⌥ S</span>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Save a Copy">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span>Sav<u class="underline-offset-2 decoration-1">e</u> a Copy...</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 text-[#666] cursor-default" alt-id="Save All Images (disabled)">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span>Save All <u class="underline-offset-2 decoration-1">I</u>mages</span>
                    </div>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] mx-3 my-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Invert submenu toggle">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"></div>
                      <span>Invert</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#a0a0a0] group-hover:text-white pointer-events-none"></i>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Resize image">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span>Resi<u class="underline-offset-2 decoration-1">z</u>e</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Transform submenu toggle">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"></div>
                      <span><u class="underline-offset-2 decoration-1">T</u>ransform</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#a0a0a0] group-hover:text-white pointer-events-none"></i>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] mx-3 my-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Unpack image">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span><u class="underline-offset-2 decoration-1">U</u>npack</span>
                    </div>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] mx-3 my-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Extract Palette">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span>E<u class="underline-offset-2 decoration-1">x</u>tract Palette</span>
                    </div>
                  </div>
                  
                </div>
              {/if}
            </div>
            
          </div>
        {/if}
      </div>
      
      <!-- Image dropdown -->
      <div class="relative">
        <div class="flex items-center gap-1 cursor-pointer hover:text-white px-2 py-1 rounded-[3px] {isImageSelectorOpen ? 'bg-[#4772b3] text-white shadow-none' : 'text-[#ccc]'}" on:click={toggleImageSelector} alt-id="Image selection menu, third element in the Image Editor header">
          <i class="fa-solid fa-image text-[14px] {isImageSelectorOpen ? 'text-white' : 'text-[#ccc]'} pointer-events-none"></i>
          <i class="fa-solid fa-chevron-down text-[10px] {isImageSelectorOpen ? 'text-white' : 'text-[#a0a0a0]'} pointer-events-none"></i>
        </div>

        {#if isImageSelectorOpen}
          <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => {
            isImageSelectorOpen = false;
            updateOpenParam();
          }}></div>
          <div class="absolute left-0 top-[28px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-50 min-w-[280px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Image selector dropdown menu">
            
            <!-- Up arrow caret -->
            <div class="absolute top-[-5px] left-[15px] w-0 h-0 border-l-[5px] border-r-[5px] border-b-[5px] border-l-transparent border-r-transparent border-b-[#cccccc] pointer-events-none"></div>

            <div class="flex flex-col py-1">
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Image option: picture_shells_in_the_sand.jpg">
                <div class="w-[18px] h-[18px] bg-[#555] rounded-[2px] overflow-hidden flex items-center justify-center"><i class="fa-solid fa-image text-[10px] text-[#ccc]"></i></div>
                <span class="pointer-events-none">picture_shells_in_the_sand.jpg</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Image option: picture_windmill_x.jpg">
                <div class="w-[18px] h-[18px] bg-[#555] rounded-[2px] overflow-hidden flex items-center justify-center"><i class="fa-solid fa-image text-[10px] text-[#ccc]"></i></div>
                <span class="pointer-events-none">picture_windmill_x.jpg</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Image option: planks_herringbone.height.tif">
                <div class="w-[18px] h-[18px] bg-[#555] rounded-[2px] overflow-hidden flex items-center justify-center"><i class="fa-solid fa-border-all text-[10px] text-[#ccc]"></i></div>
                <span class="pointer-events-none">planks_herringbone.height.tif</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Image option: planks_herringbone.tif">
                <div class="w-[18px] h-[18px] bg-[#8B5A2B] rounded-[2px] overflow-hidden flex items-center justify-center"><i class="fa-solid fa-border-all text-[10px] text-[#ccc]"></i></div>
                <span class="pointer-events-none">planks_herringbone.tif</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Image option: Render Result">
                <div class="w-[18px] h-[18px]"></div>
                <span class="pointer-events-none">Render Result</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-1 bg-[#4772b3] text-white cursor-pointer group" alt-id="Image option: render_studio.jpg (Active)">
                <div class="w-[18px] h-[18px] bg-[#555] rounded-[2px] overflow-hidden flex items-center justify-center"><i class="fa-solid fa-image text-[10px] text-[#ccc]"></i></div>
                <span class="pointer-events-none">F render_studio.jpg</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Image option: rug_pattern">
                <div class="w-[18px] h-[18px] bg-[#555] rounded-[2px] overflow-hidden flex items-center justify-center"><i class="fa-solid fa-certificate text-[10px] text-[#ccc]"></i></div>
                <span class="pointer-events-none">rug_pattern</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Image option: Scratches">
                <div class="w-[18px] h-[18px] bg-[#111] border border-[#222] rounded-[2px] overflow-hidden flex items-center justify-center"></div>
                <span class="pointer-events-none">Scratches</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Image option: streaks">
                <div class="w-[18px] h-[18px] bg-[#555] rounded-[2px] overflow-hidden flex items-center justify-center"><i class="fa-solid fa-barcode text-[10px] text-[#ccc]"></i></div>
                <span class="pointer-events-none">streaks</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Image option: wood">
                <div class="w-[18px] h-[18px] bg-[#5C4033] border border-[#333] rounded-[2px] overflow-hidden flex items-center justify-center"></div>
                <span class="pointer-events-none">wood</span>
              </div>
            </div>

            <!-- Search input -->
            <div class="px-2 pb-1 pt-1 mt-1 border-t border-[#333]">
              <div class="flex items-center bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Image search input">
                <i class="fa-solid fa-magnifying-glass text-[12px] text-[#ccc] mr-2 pointer-events-none"></i>
                <div class="w-[1px] h-3 bg-[#4772b3] mr-1 animate-pulse pointer-events-none"></div>
              </div>
            </div>

          </div>
        {/if}
      </div>

      <!-- File input group -->
      <div class="flex items-center gap-1">
        <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-[10px] py-[4px] text-[#ccc] min-w-[220px] justify-between relative shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] cursor-text" alt-id="Current image file name: render_studio.jpg">
          <span class="text-[14px] tracking-wide relative top-[-1px] pointer-events-none">render_studio.jpg</span>
          <div class="flex items-center gap-3 opacity-80">
            <!-- Shield icon -->
            <div class="w-5 h-5 bg-[#4772b3] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] border border-[#222] cursor-pointer" alt-id="Fake user indicator (Active)">
              <i class="fa-solid fa-shield-check text-[11px] text-white pointer-events-none"></i>
            </div>
            <i class="fa-regular fa-clone text-[15px] hover:text-white cursor-pointer" alt-id="New image button"></i>
            <i class="fa-solid fa-box-archive text-[15px] hover:text-white cursor-pointer" alt-id="Pack image button"></i>
            <i class="fa-solid fa-xmark text-[15px] hover:text-white cursor-pointer ml-1" alt-id="Close image button"></i>
          </div>
        </div>
        <!-- Pin -->
        <i class="fa-solid fa-thumbtack text-[15px] text-[#ccc] hover:text-white cursor-pointer ml-1 transform -rotate-45" alt-id="Pin image button"></i>
      </div>
    </div>
    
    <!-- Right side -->
    <div class="flex items-center gap-0.5 text-[#a0a0a0]">
      <!-- Gizmos -->
      <div class="flex items-center gap-1 cursor-pointer text-white bg-[#4772b3] border border-[#4772b3] px-2 py-[2px] rounded-l" alt-id="Gizmos toggle">
        <i class="fa-solid fa-bow-arrow text-[14px] pointer-events-none"></i>
      </div>
      <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-1 py-[2px] rounded-r border-l-0 mr-1" alt-id="Gizmos dropdown">
        <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
      </div>

      <!-- Overlays -->
      <div class="flex items-center gap-1 cursor-pointer text-white bg-[#4772b3] border border-[#4772b3] px-2 py-[2px] rounded-l" alt-id="Overlays toggle">
        <i class="fa-solid fa-circle-half-stroke text-[14px] pointer-events-none"></i>
      </div>
      <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-1 py-[2px] rounded-r border-l-0 mr-1" alt-id="Overlays dropdown">
        <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
      </div>

      <!-- Image channels -->
      <div class="relative">
        <div class="flex items-center gap-1 cursor-pointer {isDisplayChannelsDropdownOpen ? 'text-white bg-[#4772b3] border-[#4772b3]' : 'hover:text-white bg-[#282828] border-[#3c3c3c] text-[#ccc]'} border px-1 py-[2px] rounded" on:click={toggleDisplayChannelsDropdown} alt-id="Image Channels toggle">
          <i class="fa-solid fa-image-polaroid text-[14px] opacity-80 pointer-events-none"></i>
          <i class="fa-solid fa-chevron-down text-[10px] opacity-80 pointer-events-none"></i>
        </div>

        {#if isDisplayChannelsDropdownOpen}
          <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => {
            isDisplayChannelsDropdownOpen = false;
            updateOpenParam();
          }}></div>
          <div class="absolute right-0 top-[26px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-50 w-[180px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Display Channels dropdown menu">
            <div class="px-3 py-1 text-[#aaa] border-b border-[#333] mb-1 flex items-center" alt-id="Display Channels header">
              <span class="pointer-events-none">Display Channels</span>
            </div>
            
            <div class="flex flex-col pt-1">
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer bg-[#4772b3] text-white group" alt-id="Channel option: Color & Alpha (Active)">
                <div class="w-4 h-4 bg-white flex items-center justify-center relative overflow-hidden pointer-events-none">
                  <div class="absolute top-0 right-0 w-0 h-0 border-l-[16px] border-b-[16px] border-l-transparent border-b-[#4772b3]"></div>
                  <div class="w-[3px] h-[3px] bg-white rounded-full absolute top-[3px] right-[3px] z-10"></div>
                </div>
                <span class="pointer-events-none"><u class="underline-offset-2 decoration-1">C</u>olor & Alpha</span>
              </div>
              
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Channel option: Color">
                <div class="w-4 h-4 bg-[#555] border border-[#ccc] flex items-center justify-center pointer-events-none">
                  <i class="fa-solid fa-image text-[8px] text-[#ccc]"></i>
                </div>
                <span class="pointer-events-none">C<u class="underline-offset-2 decoration-1">o</u>lor</span>
              </div>
              
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Channel option: Alpha">
                <div class="w-4 h-4 bg-black flex items-center justify-center relative overflow-hidden pointer-events-none border border-transparent">
                  <div class="absolute top-0 left-0 w-0 h-0 border-b-[16px] border-l-[16px] border-b-transparent border-l-white"></div>
                </div>
                <span class="pointer-events-none"><u class="underline-offset-2 decoration-1">A</u>lpha</span>
              </div>
              
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group mt-2" alt-id="Channel option: Red">
                <div class="w-4 h-4 bg-[#222] border border-[#a00] flex items-center justify-center text-[11px] font-bold text-[#ccc] pointer-events-none">R</div>
                <span class="pointer-events-none"><u class="underline-offset-2 decoration-1">R</u>ed</span>
              </div>
              
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Channel option: Green">
                <div class="w-4 h-4 bg-[#222] border border-[#0a0] flex items-center justify-center text-[11px] font-bold text-[#ccc] pointer-events-none">G</div>
                <span class="pointer-events-none"><u class="underline-offset-2 decoration-1">G</u>reen</span>
              </div>
              
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Channel option: Blue">
                <div class="w-4 h-4 bg-[#222] border border-[#00f] flex items-center justify-center text-[11px] font-bold text-[#ccc] pointer-events-none">B</div>
                <span class="pointer-events-none"><u class="underline-offset-2 decoration-1">B</u>lue</span>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>

  <!-- Main view -->
  <div class="flex-1 bg-[#1a1a1a] relative overflow-hidden flex items-center justify-center" alt-id="Image Editor main view">
    <!-- Left Toolbar -->
    <div class="absolute left-0 top-2 flex flex-col gap-[6px] z-20 pl-[4px] w-[50px]" alt-id="Image Editor left toolbar">
      <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] overflow-hidden">
        <!-- Sample Tool -->
        <div class="w-full h-[50px] rounded-t-[3px] bg-[#4772b3] flex items-center justify-center text-white cursor-pointer border-b border-[#1f1f1f]" alt-id="Sample color tool, currently active">
          <i class="fa-solid fa-eye-dropper text-[18px] text-white shadow-sm transform -rotate-45 pointer-events-none"></i>
        </div>
        <!-- Annotate Tool -->
        <div class="w-full h-[50px] rounded-b-[3px] hover:bg-[#444] flex items-center justify-center text-[#ccc] cursor-pointer" alt-id="Annotate tool">
          <div class="relative flex flex-col items-center pointer-events-none">
            <i class="fa-solid fa-pen text-[16px] transform rotate-45 -translate-y-0.5 pointer-events-none"></i>
            <div class="w-[24px] h-[2px] bg-[#66cc99] rounded-full mt-1 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Controls -->
    <div class="absolute right-4 top-4 flex flex-col gap-2 z-20">
      <div class="w-[46px] h-[46px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Zoom image button"><i class="fa-solid fa-magnifying-glass-plus text-[20px] pointer-events-none"></i></div>
      <div class="w-[46px] h-[46px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Pan image button"><i class="fa-solid fa-hand text-[20px] pointer-events-none"></i></div>
    </div>
    
    <!-- Right Expand Chevron -->
    <div class="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-4 h-8 bg-[#282828]/50 flex items-center justify-center cursor-pointer hover:bg-[#333] rounded-l opacity-50 hover:opacity-100 transition-opacity" alt-id="Expand right sidebar button">
      <i class="fa-solid fa-chevron-left text-[10px] text-[#ccc] pointer-events-none"></i>
    </div>

    <!-- Image Content -->
    <div class="relative max-w-full max-h-full flex items-center justify-center p-4">
      <img src="https://picsum.photos/seed/blender/800/600" class="max-w-full max-h-full object-contain shadow-[0_0_15px_rgba(0,0,0,0.5)]" alt="Rendered studio image" />
    </div>
  </div>
</div>
