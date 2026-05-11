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

<div class="h-full flex flex-col bg-[#282828]" alt-id="Image Editor panel" appearance-id="dark panel displaying an image with a header bar and toolbar overlaid on the image canvas" location-id="within the Image Editor container panel in the Blender workspace" functionality-id="provides tools for viewing, painting on, and managing 2D images and render results" intent-id="view and edit image textures, render outputs, and UV layouts in a 2D canvas">
  <!-- Header -->
  <div class="h-10 bg-[#282828] border-b border-[#1f1f1f] flex items-center px-2 justify-between text-[13px]" alt-id="Image Editor header" appearance-id="dark horizontal bar with mode selector, image selector, and display controls" location-id="top of the Image Editor panel, below the editor container header" functionality-id="contains mode selection, image browsing controls, and viewport display toggles" intent-id="provide quick access to mode switching, image loading, and display options for the image editor">
    <!-- Left side -->
    <div class="flex items-center gap-2">
      <EditorSelector bind:editor={currentEditor} windowId={windowId} />
      
      <!-- Mode selector -->
      <div class="relative">
        <div class="flex items-center gap-1 cursor-pointer hover:text-white px-2 py-1 rounded-[3px] {isModeDropdownOpen ? 'bg-[#4772b3] text-white shadow-none' : 'text-[#ccc]'}" on:click={toggleModeDropdown} alt-id="Image Editor Mode selector, currently {currentMode}" appearance-id="button showing the current mode name with a mode icon and chevron dropdown" location-id="left side of the Image Editor header" functionality-id="opens a dropdown to switch between View, Paint, and Mask modes in the image editor" intent-id="change the interaction mode for working with the image in the editor">
          <i class="fa-solid {currentMode === 'view' ? 'fa-image-polaroid' : currentMode === 'paint' ? 'fa-chess-board' : 'fa-circle-stop'} text-[14px] pointer-events-none"></i>
          <span class="text-[14px] px-0.5 pointer-events-none">{currentMode === 'view' ? 'View' : currentMode === 'paint' ? 'Paint' : 'Mask'}</span>
          <i class="fa-solid fa-chevron-down text-[10px] {isModeDropdownOpen ? 'text-white' : 'text-[#a0a0a0]'} pointer-events-none"></i>
        </div>

        {#if isModeDropdownOpen}
          <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => {
            isModeDropdownOpen = false;
            updateOpenParam();
          }}></div>
          <div class="absolute left-0 top-[26px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-50 w-[140px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Image Editor Mode dropdown menu" appearance-id="dark dropdown panel listing View, Paint, and Mask mode options with icons" location-id="below the Image Editor Mode selector button" functionality-id="shows all available editor modes for the Image Editor" intent-id="allow the user to switch between viewing, painting on, and masking the image">
            <div class="px-3 py-1 text-[#aaa] border-b border-[#333] mb-1 flex items-center" alt-id="Mode header" appearance-id="gray label text reading Mode at the top of the mode dropdown" location-id="inside the Image Editor Mode dropdown menu, above the mode options" functionality-id="labels the dropdown as the mode selector" intent-id="provide a clear title for the mode selection list">
              <span class="pointer-events-none">Mode</span>
            </div>
            
            <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer {currentMode === 'view' ? 'bg-[#4772b3] text-white' : ''} group" on:click={() => setMode('view')} alt-id="View mode option" appearance-id="menu item with an eye icon and the text View" location-id="Image Editor Mode dropdown menu, first option" functionality-id="switches the Image Editor to View mode for examining images without editing" intent-id="set the Image Editor to a non-destructive viewing mode for image inspection">
              <i class="fa-solid fa-image-polaroid text-[13px] w-4 text-center pointer-events-none"></i>
              <span class="pointer-events-none"><u class="underline-offset-2 decoration-1">V</u>iew</span>
            </div>
            
            <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer {currentMode === 'paint' ? 'bg-[#4772b3] text-white' : ''} group" on:click={() => setMode('paint')} alt-id="Paint mode option" appearance-id="menu item with a brush icon and the text Paint" location-id="Image Editor Mode dropdown menu, second option" functionality-id="switches the Image Editor to Paint mode for texture painting" intent-id="enter texture paint mode to draw directly on the 2D image texture">
              <i class="fa-solid fa-chess-board text-[13px] w-4 text-center pointer-events-none"></i>
              <span class="pointer-events-none"><u class="underline-offset-2 decoration-1">P</u>aint</span>
            </div>

            <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer {currentMode === 'mask' ? 'bg-[#4772b3] text-white' : ''} group" on:click={() => setMode('mask')} alt-id="Mask mode option" appearance-id="menu item with a mask icon and the text Mask" location-id="Image Editor Mode dropdown menu, third option" functionality-id="switches the Image Editor to Mask mode for creating and editing mask splines" intent-id="create and edit mask overlays for compositing and VFX work">
              <i class="fa-solid fa-circle-stop text-[13px] w-4 text-center pointer-events-none"></i>
              <span class="pointer-events-none"><u class="underline-offset-2 decoration-1">M</u>ask</span>
            </div>
          </div>
        {/if}
      </div>
      
      <!-- Hamburger Menu -->
      <div class="relative">
        <div class="flex items-center justify-center cursor-pointer hover:text-white px-2 py-1 rounded-[3px] {isMainMenuOpen ? 'bg-[#4772b3] text-white shadow-none' : 'text-[#ccc]'}" on:click={toggleMainMenu} alt-id="Image Editor main menu (hamburger)" appearance-id="hamburger menu icon button that opens a dropdown with View and Image submenus" location-id="left side of the Image Editor header, after the mode selector" functionality-id="opens a dropdown menu containing View and Image menu items" intent-id="access View settings and Image file operations for the current image">
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
          <div class="absolute left-0 top-[26px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-50 w-[180px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Image Editor main menu dropdown" appearance-id="dark dropdown panel with View and Image menu items" location-id="below the Image Editor main menu hamburger button" functionality-id="contains the View and Image top-level menu items" intent-id="provide access to all image editor commands through a standard menu structure">
            
            <!-- View Menu Item -->
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer {isMenuViewOpen ? 'bg-[#4d4d4d] text-white' : ''} group relative" 
                 on:mouseenter={() => { isMenuViewOpen = true; isMenuImageOpen = false; updateOpenParam(); }}
                 alt-id="View menu toggle item; View menu item" appearance-id="menu item labeled View with a right-pointing arrow indicating a submenu" location-id="first item in the Image Editor main menu dropdown" functionality-id="opens the View submenu with display and navigation options" intent-id="access options for controlling the image editor display and viewport navigation">
              <span class="pointer-events-none ml-1"><u class="underline-offset-2 decoration-1">V</u>iew</span>
              <i class="fa-solid fa-caret-right text-[10px] {isMenuViewOpen ? 'text-white' : 'text-[#a0a0a0] group-hover:text-white'} pointer-events-none"></i>
              
              {#if isMenuViewOpen}
                <div class="absolute left-full top-[-6px] ml-[2px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-50 min-w-[200px] rounded-[3px] flex flex-col cursor-default" alt-id="View submenu" appearance-id="dark dropdown panel showing View menu options including toolbar toggles and zoom controls" location-id="to the right of the View menu item in the Image Editor main menu" functionality-id="contains options for toggling UI panels and controlling the viewport view" intent-id="customize what UI elements are visible and how the image is displayed">
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Toolbar toggle" appearance-id="menu item labeled Toolbar with a checkmark indicator" location-id="View submenu, first item" functionality-id="shows or hides the left toolbar panel in the Image Editor" intent-id="toggle the visibility of the tool buttons on the left side of the image canvas">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"><i class="fa-solid fa-check text-[10px]"></i></div>
                      <span>Toolbar</span>
                    </div>
                    <span class="text-[#888] text-[11px] group-hover:text-[#eee]">T</span>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Sidebar toggle" appearance-id="menu item labeled Sidebar with a keyboard shortcut indicator" location-id="View submenu, second item" functionality-id="shows or hides the right sidebar panel in the Image Editor" intent-id="toggle the visibility of the properties sidebar on the right side of the image editor">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"></div>
                      <span>Sidebar</span>
                    </div>
                    <span class="text-[#888] text-[11px] group-hover:text-[#eee]">N</span>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Tool Settings toggle" appearance-id="menu item labeled Tool Settings" location-id="View submenu, third item" functionality-id="shows or hides the tool settings bar in the Image Editor" intent-id="toggle the visibility of the active tool settings header in the image editor">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"></div>
                      <span>Tool Settings</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 text-[#666] cursor-default" alt-id="Asset Shelf toggle (disabled)" appearance-id="grayed out menu item labeled Asset Shelf, not clickable" location-id="View submenu, fourth item" functionality-id="represents the Asset Shelf toggle which is unavailable in the current context" intent-id="show that the asset shelf is not supported in the current image editor mode">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"></div>
                      <span>Asset Shelf</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Adjust Last Operation toggle" appearance-id="menu item labeled Adjust Last Operation" location-id="View submenu, fifth item" functionality-id="toggles the Adjust Last Operation panel at the bottom-left of the editor" intent-id="show or hide the panel for tweaking the most recently performed operation">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"><i class="fa-solid fa-check text-[10px]"></i></div>
                      <span>Adjust Last Operation</span>
                    </div>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] mx-3 my-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Update Automatically toggle" appearance-id="menu item labeled Update Automatically with a checkmark" location-id="View submenu, showing automatic update option" functionality-id="enables or disables automatic image update when the source changes" intent-id="control whether the image editor refreshes automatically when the source image is modified">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"><i class="fa-solid fa-check text-[10px]"></i></div>
                      <span>Update Automatically</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Show Metadata toggle" appearance-id="menu item labeled Show Metadata" location-id="View submenu, showing metadata visibility option" functionality-id="toggles the display of image metadata information in the viewer" intent-id="show or hide EXIF data and other metadata overlaid on the image">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"></div>
                      <span>Show Metadata</span>
                    </div>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] mx-3 my-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Frame All" appearance-id="menu item labeled Frame All with keyboard shortcut Home" location-id="View submenu, frame all option" functionality-id="zooms the viewport to fit the entire image in view" intent-id="reset the zoom and pan to show the complete image in the editor canvas">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"></div>
                      <span><u class="underline-offset-2 decoration-1">F</u>rame All</span>
                    </div>
                    <span class="text-[#888] text-[11px] group-hover:text-[#eee]">Home</span>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 text-[#666] cursor-default" alt-id="Center View to Cursor (disabled)" appearance-id="grayed out menu item labeled Center View to Cursor, not clickable" location-id="View submenu, center to cursor option" functionality-id="centers the viewport on the 2D cursor location (currently unavailable)" intent-id="show that centering on the cursor is not available in the current context">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"></div>
                      <span><u class="underline-offset-2 decoration-1">C</u>enter View to Cursor</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Zoom submenu toggle" appearance-id="menu item labeled Zoom with a right-pointing arrow indicating a submenu" location-id="View submenu, zoom options" functionality-id="opens a submenu with preset zoom level options" intent-id="quickly set the image zoom to a specific percentage">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"></div>
                      <span><u class="underline-offset-2 decoration-1">Z</u>oom</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#a0a0a0] group-hover:text-white pointer-events-none"></i>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Area submenu toggle" appearance-id="menu item labeled Area with a right-pointing arrow indicating a submenu" location-id="View submenu, area options" functionality-id="opens a submenu with options for splitting and joining editor areas" intent-id="manage the workspace panel layout by splitting or merging areas">
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
                 alt-id="Image menu toggle item; Image menu item" appearance-id="menu item labeled Image with a right-pointing arrow indicating a submenu" location-id="second item in the Image Editor main menu dropdown" functionality-id="opens the Image submenu with file operations like New, Open, Save, and image transformations" intent-id="access image file operations and pixel manipulation tools">
              <span class="pointer-events-none ml-1"><u class="underline-offset-2 decoration-1">I</u>mage</span>
              <i class="fa-solid fa-caret-right text-[10px] {isMenuImageOpen ? 'text-white' : 'text-[#a0a0a0] group-hover:text-white'} pointer-events-none"></i>
              
              {#if isMenuImageOpen}
                <div class="absolute left-full top-[-6px] ml-[2px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-50 min-w-[240px] rounded-[3px] flex flex-col cursor-default" alt-id="Image submenu" appearance-id="dark dropdown panel listing image file operations and transformation tools" location-id="to the right of the Image menu item in the Image Editor main menu" functionality-id="contains options for creating, loading, saving, and transforming images" intent-id="manage image files and apply operations like resize, invert, and transform">
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="New image" appearance-id="menu item labeled New with an Alt N keyboard shortcut" location-id="Image submenu, first item" functionality-id="opens a dialog to create a new blank image data-block" intent-id="create a fresh canvas for painting or baking to a new image texture">
                    <div class="flex items-center gap-2">
                      <i class="fa-solid fa-file-medical text-[12px] w-3 text-center text-[#ccc] group-hover:text-white"></i>
                      <span><u class="underline-offset-2 decoration-1">N</u>ew...</span>
                    </div>
                    <span class="text-[#888] text-[11px] group-hover:text-[#eee]">⌥ N</span>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Open image" appearance-id="menu item labeled Open... with an Alt O keyboard shortcut" location-id="Image submenu, second item" functionality-id="opens a file browser to load an image from disk into the editor" intent-id="load an existing image file to view or edit in the image editor">
                    <div class="flex items-center gap-2">
                      <i class="fa-solid fa-folder-open text-[12px] w-3 text-center text-[#ccc] group-hover:text-white"></i>
                      <span><u class="underline-offset-2 decoration-1">O</u>pen...</span>
                    </div>
                    <span class="text-[#888] text-[11px] group-hover:text-[#eee]">⌥ O</span>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Open Cached Render" appearance-id="menu item labeled Open Cached Render" location-id="Image submenu, third item" functionality-id="loads the most recently cached render result into the image editor" intent-id="quickly reload the last render output without re-rendering">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span>Open <u class="underline-offset-2 decoration-1">C</u>ached Render</span>
                    </div>
                    <span class="text-[#888] text-[11px] group-hover:text-[#eee]">⌘ R</span>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] mx-3 my-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 text-[#666] cursor-default" alt-id="Replace image (disabled)" appearance-id="grayed out menu item labeled Replace..., not clickable" location-id="Image submenu, fourth item" functionality-id="represents the Replace operation for swapping an image file (currently unavailable)" intent-id="show that replacing the current image file is not available in the current context">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span><u class="underline-offset-2 decoration-1">R</u>eplace...</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Reload image" appearance-id="menu item labeled Reload with an Alt R keyboard shortcut" location-id="Image submenu, fifth item" functionality-id="reloads the image from disk to reflect any external changes to the file" intent-id="refresh the image data when the source file has been modified externally">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span>Reload</span>
                    </div>
                    <span class="text-[#888] text-[11px] group-hover:text-[#eee]">⌥ R</span>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Edit Externally" appearance-id="menu item labeled Edit Externally" location-id="Image submenu, sixth item" functionality-id="opens the image in the configured external image editor application" intent-id="use an external application like Photoshop or GIMP to edit the image">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span><u class="underline-offset-2 decoration-1">E</u>dit Externally</span>
                    </div>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] mx-3 my-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Copy image" appearance-id="menu item labeled Copy with a keyboard shortcut" location-id="Image submenu, seventh item" functionality-id="copies the current image to the system clipboard" intent-id="copy the image data for pasting into other applications">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span>Copy</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Paste image" appearance-id="menu item labeled Paste" location-id="Image submenu, eighth item" functionality-id="pastes an image from the system clipboard into the editor" intent-id="bring clipboard image data into Blender as a new image data-block">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span><u class="underline-offset-2 decoration-1">P</u>aste</span>
                    </div>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] mx-3 my-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Save image" appearance-id="menu item labeled Save with an Alt S keyboard shortcut" location-id="Image submenu, ninth item" functionality-id="saves the current image to its existing file path on disk" intent-id="persist changes to the image file without opening a save dialog">
                    <div class="flex items-center gap-2">
                      <i class="fa-solid fa-floppy-disk text-[12px] w-3 text-center text-[#ccc] group-hover:text-white"></i>
                      <span><u class="underline-offset-2 decoration-1">S</u>ave</span>
                    </div>
                    <span class="text-[#888] text-[11px] group-hover:text-[#eee]">⌥ S</span>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Save As" appearance-id="menu item labeled Save As... with a Shift Alt S keyboard shortcut" location-id="Image submenu, tenth item" functionality-id="opens a file browser to save the image to a new path or filename" intent-id="save the image to a different location or with a different name">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span>Save <u class="underline-offset-2 decoration-1">A</u>s...</span>
                    </div>
                    <span class="text-[#888] text-[11px] group-hover:text-[#eee]">⇧ ⌥ S</span>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Save a Copy" appearance-id="menu item labeled Save a Copy..." location-id="Image submenu, eleventh item" functionality-id="saves a copy of the image to a new path without changing the active image path" intent-id="export the current image as a new file while keeping the original reference">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span>Sav<u class="underline-offset-2 decoration-1">e</u> a Copy...</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 text-[#666] cursor-default" alt-id="Save All Images (disabled)" appearance-id="grayed out menu item labeled Save All Images, not clickable" location-id="Image submenu, twelfth item" functionality-id="represents the Save All Images operation which is currently unavailable" intent-id="show that batch saving of all modified images is not available in the current context">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span>Save All <u class="underline-offset-2 decoration-1">I</u>mages</span>
                    </div>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] mx-3 my-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Invert submenu toggle" appearance-id="menu item labeled Invert with a right-pointing arrow" location-id="Image submenu, invert section" functionality-id="opens a submenu with options for inverting image color channels" intent-id="flip the color values of selected channels in the image">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"></div>
                      <span>Invert</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#a0a0a0] group-hover:text-white pointer-events-none"></i>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Resize image" appearance-id="menu item labeled Resize" location-id="Image submenu, resize option" functionality-id="opens a dialog for resizing the image to a new resolution" intent-id="change the pixel dimensions of the current image data">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span>Resi<u class="underline-offset-2 decoration-1">z</u>e</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Transform submenu toggle" appearance-id="menu item labeled Transform with a right-pointing arrow" location-id="Image submenu, transform section" functionality-id="opens a submenu with options for flipping and rotating the image" intent-id="apply non-destructive geometric transformations to the image canvas">
                    <div class="flex items-center gap-2">
                      <div class="w-3 flex justify-center"></div>
                      <span><u class="underline-offset-2 decoration-1">T</u>ransform</span>
                    </div>
                    <i class="fa-solid fa-caret-right text-[10px] text-[#a0a0a0] group-hover:text-white pointer-events-none"></i>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] mx-3 my-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Unpack image" appearance-id="menu item labeled Unpack" location-id="Image submenu, unpack option" functionality-id="extracts and saves the packed image data to a file on disk" intent-id="convert a packed embedded image into an external file that can be edited outside Blender">
                    <div class="flex items-center gap-2">
                      <div class="w-3"></div>
                      <span><u class="underline-offset-2 decoration-1">U</u>npack</span>
                    </div>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] mx-3 my-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-0.5 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Extract Palette" appearance-id="menu item labeled Extract Palette" location-id="Image submenu, last item" functionality-id="extracts a color palette from the current image and creates a palette data-block" intent-id="automatically generate a color palette from the image for use in Blender painting tools">
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
        <div class="flex items-center gap-1 cursor-pointer hover:text-white px-2 py-1 rounded-[3px] {isImageSelectorOpen ? 'bg-[#4772b3] text-white shadow-none' : 'text-[#ccc]'}" on:click={toggleImageSelector} alt-id="Image selection menu, third element in the Image Editor header" appearance-id="button showing the current image name with a downward chevron for browsing" location-id="center area of the Image Editor header, after the main menu" functionality-id="opens a dropdown list of all available image data-blocks in the current file" intent-id="switch the displayed image by selecting a different image from the list">
          <i class="fa-solid fa-image text-[14px] {isImageSelectorOpen ? 'text-white' : 'text-[#ccc]'} pointer-events-none"></i>
          <i class="fa-solid fa-chevron-down text-[10px] {isImageSelectorOpen ? 'text-white' : 'text-[#a0a0a0]'} pointer-events-none"></i>
        </div>

        {#if isImageSelectorOpen}
          <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => {
            isImageSelectorOpen = false;
            updateOpenParam();
          }}></div>
          <div class="absolute left-0 top-[28px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-50 min-w-[280px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Image selector dropdown menu" appearance-id="dark dropdown panel listing all image data-blocks with search input and thumbnail previews" location-id="below the Image selection menu button in the Image Editor header" functionality-id="shows all images currently loaded in the Blender file with a search filter" intent-id="find and select a specific image from all available images in the file">
            
            <!-- Up arrow caret -->
            <div class="absolute top-[-5px] left-[15px] w-0 h-0 border-l-[5px] border-r-[5px] border-b-[5px] border-l-transparent border-r-transparent border-b-[#cccccc] pointer-events-none"></div>

            <div class="flex flex-col py-1">
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Image option: picture_shells_in_the_sand.jpg" appearance-id="list item showing a thumbnail and the filename picture_shells_in_the_sand.jpg" location-id="Image selector dropdown, first item in the image list" functionality-id="selects the shells image to display in the Image Editor" intent-id="switch the image editor to show the picture_shells_in_the_sand.jpg image">
                <div class="w-[18px] h-[18px] bg-[#555] rounded-[2px] overflow-hidden flex items-center justify-center"><i class="fa-solid fa-image text-[10px] text-[#ccc]"></i></div>
                <span class="pointer-events-none">picture_shells_in_the_sand.jpg</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Image option: picture_windmill_x.jpg" appearance-id="list item showing a thumbnail and the filename picture_windmill_x.jpg" location-id="Image selector dropdown, second item in the image list" functionality-id="selects the windmill image to display in the Image Editor" intent-id="switch the image editor to show the picture_windmill_x.jpg image">
                <div class="w-[18px] h-[18px] bg-[#555] rounded-[2px] overflow-hidden flex items-center justify-center"><i class="fa-solid fa-image text-[10px] text-[#ccc]"></i></div>
                <span class="pointer-events-none">picture_windmill_x.jpg</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Image option: planks_herringbone.height.tif" appearance-id="list item showing a thumbnail and the filename planks_herringbone.height.tif" location-id="Image selector dropdown, third item in the image list" functionality-id="selects the herringbone height map image to display in the Image Editor" intent-id="switch the image editor to show the herringbone height texture">
                <div class="w-[18px] h-[18px] bg-[#555] rounded-[2px] overflow-hidden flex items-center justify-center"><i class="fa-solid fa-border-all text-[10px] text-[#ccc]"></i></div>
                <span class="pointer-events-none">planks_herringbone.height.tif</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Image option: planks_herringbone.tif" appearance-id="list item showing a thumbnail and the filename planks_herringbone.tif" location-id="Image selector dropdown, fourth item in the image list" functionality-id="selects the herringbone planks texture image to display in the Image Editor" intent-id="switch the image editor to show the planks herringbone color texture">
                <div class="w-[18px] h-[18px] bg-[#8B5A2B] rounded-[2px] overflow-hidden flex items-center justify-center"><i class="fa-solid fa-border-all text-[10px] text-[#ccc]"></i></div>
                <span class="pointer-events-none">planks_herringbone.tif</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Image option: Render Result" appearance-id="list item showing a render icon and the text Render Result" location-id="Image selector dropdown, Render Result item" functionality-id="selects the current render result to display in the Image Editor" intent-id="view the most recently rendered output image in the image editor">
                <div class="w-[18px] h-[18px]"></div>
                <span class="pointer-events-none">Render Result</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-1 bg-[#4772b3] text-white cursor-pointer group" alt-id="Image option: render_studio.jpg (Active)" appearance-id="highlighted blue list item showing a thumbnail and the filename render_studio.jpg as the currently active image" location-id="Image selector dropdown, currently selected active item" functionality-id="this is the currently displayed image in the Image Editor" intent-id="shows which image is currently active and being displayed in the editor">
                <div class="w-[18px] h-[18px] bg-[#555] rounded-[2px] overflow-hidden flex items-center justify-center"><i class="fa-solid fa-image text-[10px] text-[#ccc]"></i></div>
                <span class="pointer-events-none">F render_studio.jpg</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Image option: rug_pattern" appearance-id="list item showing a thumbnail and the name rug_pattern" location-id="Image selector dropdown, rug pattern item" functionality-id="selects the rug pattern image to display in the Image Editor" intent-id="switch the image editor to show the rug pattern texture">
                <div class="w-[18px] h-[18px] bg-[#555] rounded-[2px] overflow-hidden flex items-center justify-center"><i class="fa-solid fa-certificate text-[10px] text-[#ccc]"></i></div>
                <span class="pointer-events-none">rug_pattern</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Image option: Scratches" appearance-id="list item showing a thumbnail and the name Scratches" location-id="Image selector dropdown, Scratches item" functionality-id="selects the Scratches texture image to display in the Image Editor" intent-id="switch the image editor to show the scratches procedural texture">
                <div class="w-[18px] h-[18px] bg-[#111] border border-[#222] rounded-[2px] overflow-hidden flex items-center justify-center"></div>
                <span class="pointer-events-none">Scratches</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Image option: streaks" appearance-id="list item showing a thumbnail and the name streaks" location-id="Image selector dropdown, streaks item" functionality-id="selects the streaks image to display in the Image Editor" intent-id="switch the image editor to show the streaks texture">
                <div class="w-[18px] h-[18px] bg-[#555] rounded-[2px] overflow-hidden flex items-center justify-center"><i class="fa-solid fa-barcode text-[10px] text-[#ccc]"></i></div>
                <span class="pointer-events-none">streaks</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Image option: wood" appearance-id="list item showing a thumbnail and the name wood" location-id="Image selector dropdown, wood item" functionality-id="selects the wood texture image to display in the Image Editor" intent-id="switch the image editor to show the wood grain texture">
                <div class="w-[18px] h-[18px] bg-[#5C4033] border border-[#333] rounded-[2px] overflow-hidden flex items-center justify-center"></div>
                <span class="pointer-events-none">wood</span>
              </div>
            </div>

            <!-- Search input -->
            <div class="px-2 pb-1 pt-1 mt-1 border-t border-[#333]">
              <div class="flex items-center bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-6 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-text" alt-id="Image search input" appearance-id="dark text input field with search placeholder in the image selector dropdown" location-id="bottom of the Image selector dropdown menu" functionality-id="accepts text to filter the image list by filename" intent-id="quickly find a specific image in the list by typing part of its name">
                <i class="fa-solid fa-magnifying-glass text-[12px] text-[#ccc] mr-2 pointer-events-none"></i>
                <div class="w-[1px] h-3 bg-[#4772b3] mr-1 animate-pulse pointer-events-none"></div>
              </div>
            </div>

          </div>
        {/if}
      </div>

      <!-- File input group -->
      <div class="flex items-center gap-1">
        <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-[10px] py-[4px] text-[#ccc] min-w-[220px] justify-between relative shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] cursor-text" alt-id="Current image file name: render_studio.jpg" appearance-id="dark text field showing the filename render_studio.jpg with data-block management buttons" location-id="Image Editor header, right side of the image selector button" functionality-id="displays the currently loaded image filename and provides quick access to data-block management" intent-id="identify and manage the currently displayed image file">
          <span class="text-[14px] tracking-wide relative top-[-1px] pointer-events-none">render_studio.jpg</span>
          <div class="flex items-center gap-3 opacity-80">
            <!-- Shield icon -->
            <div class="w-5 h-5 bg-[#4772b3] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] border border-[#222] cursor-pointer" alt-id="Fake user indicator (Active)" appearance-id="small blue square button with a shield icon indicating fake user is enabled" location-id="inside the current image filename field, before the clone icon" functionality-id="shows that the image has a fake user preventing automatic deletion and can be clicked to toggle" intent-id="protect the image from being purged when it has no other users">
              <i class="fa-solid fa-shield-check text-[11px] text-white pointer-events-none"></i>
            </div>
            <i class="fa-regular fa-clone text-[15px] hover:text-white cursor-pointer" alt-id="New image button" appearance-id="small clone icon button for creating a new image" location-id="inside the current image filename field, first action button" functionality-id="creates a new blank image data-block in the file" intent-id="quickly add a new image canvas without opening the full New Image dialog"></i>
            <i class="fa-solid fa-box-archive text-[15px] hover:text-white cursor-pointer" alt-id="Pack image button" appearance-id="small archive box icon button for packing the image into the .blend file" location-id="inside the current image filename field, second action button" functionality-id="embeds the image file data into the .blend file for portability" intent-id="make the image self-contained so the .blend file can be shared without external image files"></i>
            <i class="fa-solid fa-xmark text-[15px] hover:text-white cursor-pointer ml-1" alt-id="Close image button" appearance-id="small X icon button for closing/removing the current image from the editor" location-id="inside the current image filename field, third action button" functionality-id="removes the current image assignment from the image editor" intent-id="unload the current image from the image editor view"></i>
          </div>
        </div>
        <!-- Pin -->
        <i class="fa-solid fa-thumbtack text-[15px] text-[#ccc] hover:text-white cursor-pointer ml-1 transform -rotate-45" alt-id="Pin image button" appearance-id="small thumbtack icon button at a diagonal angle" location-id="Image Editor header, after the image filename field" functionality-id="pins the current image to keep it displayed when the object selection changes" intent-id="lock the image editor to show the current image regardless of which object is selected"></i>
      </div>
    </div>
    
    <!-- Right side -->
    <div class="flex items-center gap-0.5 text-[#a0a0a0]">
      <!-- Gizmos -->
      <div class="flex items-center gap-1 cursor-pointer text-white bg-[#4772b3] border border-[#4772b3] px-2 py-[2px] rounded-l" alt-id="Gizmos toggle" appearance-id="small blue highlighted button with a direction arrows icon, currently active, part of a button pair" location-id="right side of the Image Editor header, left of the Gizmos dropdown" functionality-id="enables or disables gizmo overlays in the Image Editor viewport" intent-id="show or hide interactive gizmos for transform operations in the image editor">
        <i class="fa-solid fa-bow-arrow text-[14px] pointer-events-none"></i>
      </div>
      <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-1 py-[2px] rounded-r border-l-0 mr-1" alt-id="Gizmos dropdown" appearance-id="small chevron-down button to the right of the Gizmos toggle" location-id="right side of the Image Editor header, next to the Gizmos toggle" functionality-id="opens the gizmos panel for configuring which gizmos are displayed" intent-id="customize which gizmo types are visible in the image editor viewport">
        <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
      </div>

      <!-- Overlays -->
      <div class="flex items-center gap-1 cursor-pointer text-white bg-[#4772b3] border border-[#4772b3] px-2 py-[2px] rounded-l" alt-id="Overlays toggle" appearance-id="small blue highlighted button with overlapping circles icon, currently active, part of a button pair" location-id="right side of the Image Editor header, left of the Overlays dropdown" functionality-id="enables or disables all viewport overlays in the Image Editor" intent-id="toggle display overlays such as UV edges and annotations in the image editor">
        <i class="fa-solid fa-circle-half-stroke text-[14px] pointer-events-none"></i>
      </div>
      <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-1 py-[2px] rounded-r border-l-0 mr-1" alt-id="Overlays dropdown" appearance-id="small chevron-down button to the right of the Overlays toggle" location-id="right side of the Image Editor header, next to the Overlays toggle" functionality-id="opens the overlays panel for configuring which overlays are shown in the image editor" intent-id="customize which overlay types are visible in the image editor viewport">
        <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
      </div>

      <!-- Image channels -->
      <div class="relative">
        <div class="flex items-center gap-1 cursor-pointer {isDisplayChannelsDropdownOpen ? 'text-white bg-[#4772b3] border-[#4772b3]' : 'hover:text-white bg-[#282828] border-[#3c3c3c] text-[#ccc]'} border px-1 py-[2px] rounded" on:click={toggleDisplayChannelsDropdown} alt-id="Image Channels toggle" appearance-id="button showing the current display channel name with a chevron" location-id="right side of the Image Editor header, after the Overlays dropdown" functionality-id="opens a dropdown to select which color channel is displayed in the viewer" intent-id="preview individual R, G, B, or Alpha channels or the combined color and alpha">
          <i class="fa-solid fa-image-polaroid text-[14px] opacity-80 pointer-events-none"></i>
          <i class="fa-solid fa-chevron-down text-[10px] opacity-80 pointer-events-none"></i>
        </div>

        {#if isDisplayChannelsDropdownOpen}
          <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => {
            isDisplayChannelsDropdownOpen = false;
            updateOpenParam();
          }}></div>
          <div class="absolute right-0 top-[26px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-50 w-[180px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Display Channels dropdown menu" appearance-id="dark dropdown panel listing display channel options with color indicators" location-id="below the Image Channels toggle in the Image Editor header" functionality-id="shows all available display channel options including Color & Alpha, Color, Alpha, R, G, and B" intent-id="choose which pixel channel or combination to display in the image editor canvas">
            <div class="px-3 py-1 text-[#aaa] border-b border-[#333] mb-1 flex items-center" alt-id="Display Channels header" appearance-id="gray label text reading Display Channels at the top of the channel dropdown" location-id="inside the Display Channels dropdown menu, above the channel options" functionality-id="labels the dropdown as the display channel selector" intent-id="provide a clear title for the channel selection list">
              <span class="pointer-events-none">Display Channels</span>
            </div>
            
            <div class="flex flex-col pt-1">
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer bg-[#4772b3] text-white group" alt-id="Channel option: Color & Alpha (Active)" appearance-id="blue highlighted menu item showing Color & Alpha as the active display mode" location-id="Display Channels dropdown, first and currently active option" functionality-id="sets the image display to show both color and alpha channels in a standard RGBA view" intent-id="view the full image with transparency as the default display mode">
                <div class="w-4 h-4 bg-white flex items-center justify-center relative overflow-hidden pointer-events-none">
                  <div class="absolute top-0 right-0 w-0 h-0 border-l-[16px] border-b-[16px] border-l-transparent border-b-[#4772b3]"></div>
                  <div class="w-[3px] h-[3px] bg-white rounded-full absolute top-[3px] right-[3px] z-10"></div>
                </div>
                <span class="pointer-events-none"><u class="underline-offset-2 decoration-1">C</u>olor & Alpha</span>
              </div>
              
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Channel option: Color" appearance-id="menu item with a square swatch icon showing the Color display option" location-id="Display Channels dropdown, second option" functionality-id="sets the image display to show only the RGB color channels without alpha" intent-id="view the image colors without transparency influence for accurate color evaluation">
                <div class="w-4 h-4 bg-[#555] border border-[#ccc] flex items-center justify-center pointer-events-none">
                  <i class="fa-solid fa-image text-[8px] text-[#ccc]"></i>
                </div>
                <span class="pointer-events-none">C<u class="underline-offset-2 decoration-1">o</u>lor</span>
              </div>
              
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Channel option: Alpha" appearance-id="menu item with a gray square icon showing the Alpha display option" location-id="Display Channels dropdown, third option" functionality-id="sets the image display to show only the alpha transparency channel in grayscale" intent-id="inspect the transparency mask of the image to check alpha coverage">
                <div class="w-4 h-4 bg-black flex items-center justify-center relative overflow-hidden pointer-events-none border border-transparent">
                  <div class="absolute top-0 left-0 w-0 h-0 border-b-[16px] border-l-[16px] border-b-transparent border-l-white"></div>
                </div>
                <span class="pointer-events-none"><u class="underline-offset-2 decoration-1">A</u>lpha</span>
              </div>
              
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group mt-2" alt-id="Channel option: Red" appearance-id="menu item with a red square icon showing the Red channel option" location-id="Display Channels dropdown, fourth option" functionality-id="sets the image display to show only the red channel in grayscale" intent-id="isolate the red channel to inspect or evaluate its data independently">
                <div class="w-4 h-4 bg-[#222] border border-[#a00] flex items-center justify-center text-[11px] font-bold text-[#ccc] pointer-events-none">R</div>
                <span class="pointer-events-none"><u class="underline-offset-2 decoration-1">R</u>ed</span>
              </div>
              
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Channel option: Green" appearance-id="menu item with a green square icon showing the Green channel option" location-id="Display Channels dropdown, fifth option" functionality-id="sets the image display to show only the green channel in grayscale" intent-id="isolate the green channel to inspect or evaluate its data independently">
                <div class="w-4 h-4 bg-[#222] border border-[#0a0] flex items-center justify-center text-[11px] font-bold text-[#ccc] pointer-events-none">G</div>
                <span class="pointer-events-none"><u class="underline-offset-2 decoration-1">G</u>reen</span>
              </div>
              
              <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Channel option: Blue" appearance-id="menu item with a blue square icon showing the Blue channel option" location-id="Display Channels dropdown, sixth option" functionality-id="sets the image display to show only the blue channel in grayscale" intent-id="isolate the blue channel to inspect or evaluate its data independently">
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
  <div class="flex-1 bg-[#1a1a1a] relative overflow-hidden flex items-center justify-center" alt-id="Image Editor main view" appearance-id="large dark canvas area showing the loaded image centered within, with navigation buttons overlaid" location-id="center area of the Image Editor panel, below the header" functionality-id="displays the active image and accepts mouse input for panning, zooming, and image operations" intent-id="provide the primary canvas for viewing and interacting with the image content">
    <!-- Left Toolbar -->
    <div class="absolute left-0 top-2 flex flex-col gap-[6px] z-20 pl-[4px] w-[50px]" alt-id="Image Editor left toolbar" appearance-id="vertical toolbar on the left edge of the image canvas with tool buttons" location-id="left edge of the Image Editor main view area" functionality-id="contains tool buttons for image editing operations in the current mode" intent-id="provide quick access to the available editing tools for the image editor">
      <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] overflow-hidden">
        <!-- Sample Tool -->
        <div class="w-full h-[50px] rounded-t-[3px] bg-[#4772b3] flex items-center justify-center text-white cursor-pointer border-b border-[#1f1f1f]" alt-id="Sample color tool, currently active" appearance-id="tall blue highlighted button with an eyedropper icon, currently active" location-id="first button in the Image Editor left toolbar" functionality-id="activates the Sample Color tool for picking and sampling colors from the image" intent-id="select a color from any pixel in the image by clicking on it">
          <i class="fa-solid fa-eye-dropper text-[18px] text-white shadow-sm transform -rotate-45 pointer-events-none"></i>
        </div>
        <!-- Annotate Tool -->
        <div class="w-full h-[50px] rounded-b-[3px] hover:bg-[#444] flex items-center justify-center text-[#ccc] cursor-pointer" alt-id="Annotate tool" appearance-id="tall button with a pencil icon" location-id="second button in the Image Editor left toolbar" functionality-id="activates the Annotate tool for drawing freehand annotations on the image" intent-id="add sketch notes or reference marks directly on top of the image canvas">
          <div class="relative flex flex-col items-center pointer-events-none">
            <i class="fa-solid fa-pen text-[16px] transform rotate-45 -translate-y-0.5 pointer-events-none"></i>
            <div class="w-[24px] h-[2px] bg-[#66cc99] rounded-full mt-1 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Controls -->
    <div class="absolute right-4 top-4 flex flex-col gap-2 z-20">
      <div class="w-[46px] h-[46px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Zoom image button" appearance-id="circular button with a magnifying glass plus icon" location-id="bottom-right area of the Image Editor main view, first navigation button" functionality-id="zooms the image view in toward the center" intent-id="get a closer look at the image detail in the editor canvas"><i class="fa-solid fa-magnifying-glass-plus text-[20px] pointer-events-none"></i></div>
      <div class="w-[46px] h-[46px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Pan image button" appearance-id="circular button with an open hand icon" location-id="bottom-right area of the Image Editor main view, second navigation button" functionality-id="enables panning mode to drag and reposition the image in the canvas" intent-id="scroll the view to see different parts of a zoomed-in image"><i class="fa-solid fa-hand text-[20px] pointer-events-none"></i></div>
    </div>
    
    <!-- Right Expand Chevron -->
    <div class="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-4 h-8 bg-[#282828]/50 flex items-center justify-center cursor-pointer hover:bg-[#333] rounded-l opacity-50 hover:opacity-100 transition-opacity" alt-id="Expand right sidebar button" appearance-id="thin vertical tab on the right edge of the image canvas for expanding the sidebar" location-id="right edge of the Image Editor main view, center vertically" functionality-id="expands the right sidebar panel of the Image Editor" intent-id="reveal the Image Editor sidebar with additional settings and metadata">
      <i class="fa-solid fa-chevron-left text-[10px] text-[#ccc] pointer-events-none"></i>
    </div>

    <!-- Image Content -->
    <div class="relative max-w-full max-h-full flex items-center justify-center p-4">
      <img src="https://picsum.photos/seed/blender/800/600" class="max-w-full max-h-full object-contain shadow-[0_0_15px_rgba(0,0,0,0.5)]" alt="Rendered studio image" />
    </div>
  </div>
</div>
