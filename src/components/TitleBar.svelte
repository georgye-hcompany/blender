<script>
  import { onMount } from 'svelte';

  let isFileMenuOpen = false;
  let isFileMenuNewOpen = false;
  let isFileMenuRecoverOpen = false;
  let isFileMenuDataPreviewsOpen = false;
  let isFileMenuImportOpen = false;
  let isFileMenuExportOpen = false;
  let isFileMenuExternalDataOpen = false;
  let isFileMenuCleanUpOpen = false;
  let isFileMenuDefaultsOpen = false;
  let isEditMenuOpen = false;
  let isEditMenuUndoHistoryOpen = false;
  let isRenderMenuOpen = false;
  let isWindowMenuOpen = false;
  let isHelpMenuOpen = false;
  let isAddWorkspaceDropdownOpen = false;
  let isAddWorkspaceGeneralOpen = false;
  let isAddWorkspace2DAnimationOpen = false;
  let isAddWorkspaceSculptingOpen = false;
  let isAddWorkspaceStoryboardingOpen = false;
  let isAddWorkspaceVFXOpen = false;
  let isAddWorkspaceVideoEditingOpen = false;

  onMount(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const openParam = urlParams.get('open') || '';
      if (openParam.includes('file-menu-dropdown')) {
        isFileMenuOpen = true;
      }
      if (openParam.includes('file-menu-new-dropdown')) {
        isFileMenuNewOpen = true;
      }
      if (openParam.includes('file-menu-recover-dropdown')) {
        isFileMenuRecoverOpen = true;
      }
      if (openParam.includes('add-workspace-dropdown')) {
        isAddWorkspaceDropdownOpen = true;
      }
      if (openParam.includes('add-workspace-general-dropdown')) {
        isAddWorkspaceGeneralOpen = true;
      }
      if (openParam.includes('add-workspace-2d-animation-dropdown')) {
        isAddWorkspace2DAnimationOpen = true;
      }
      if (openParam.includes('add-workspace-sculpting-dropdown')) {
        isAddWorkspaceSculptingOpen = true;
      }
      if (openParam.includes('add-workspace-storyboarding-dropdown')) {
        isAddWorkspaceStoryboardingOpen = true;
      }
      if (openParam.includes('add-workspace-vfx-dropdown')) {
        isAddWorkspaceVFXOpen = true;
      }
      if (openParam.includes('add-workspace-video-editing-dropdown')) {
        isAddWorkspaceVideoEditingOpen = true;
      }
    }
  });

  function toggleFileMenu(e) {
    if (e) e.stopPropagation();
    isFileMenuOpen = !isFileMenuOpen;
    if (isFileMenuOpen) {
      isEditMenuOpen = false;
      isRenderMenuOpen = false;
      isWindowMenuOpen = false;
      isHelpMenuOpen = false;
      isAddWorkspaceDropdownOpen = false;
    }
    updateOpenParam();
  }

  function toggleEditMenu(e) {
    if (e) e.stopPropagation();
    isEditMenuOpen = !isEditMenuOpen;
    if (isEditMenuOpen) {
      isFileMenuOpen = false;
      isRenderMenuOpen = false;
      isWindowMenuOpen = false;
      isHelpMenuOpen = false;
      isAddWorkspaceDropdownOpen = false;
    }
    updateOpenParam();
  }

  function toggleRenderMenu(e) {
    if (e) e.stopPropagation();
    isRenderMenuOpen = !isRenderMenuOpen;
    if (isRenderMenuOpen) {
      isFileMenuOpen = false;
      isEditMenuOpen = false;
      isWindowMenuOpen = false;
      isHelpMenuOpen = false;
      isAddWorkspaceDropdownOpen = false;
    }
    updateOpenParam();
  }

  function toggleWindowMenu(e) {
    if (e) e.stopPropagation();
    isWindowMenuOpen = !isWindowMenuOpen;
    if (isWindowMenuOpen) {
      isFileMenuOpen = false;
      isEditMenuOpen = false;
      isRenderMenuOpen = false;
      isHelpMenuOpen = false;
      isAddWorkspaceDropdownOpen = false;
    }
    updateOpenParam();
  }

  function toggleHelpMenu(e) {
    if (e) e.stopPropagation();
    isHelpMenuOpen = !isHelpMenuOpen;
    if (isHelpMenuOpen) {
      isFileMenuOpen = false;
      isEditMenuOpen = false;
      isRenderMenuOpen = false;
      isWindowMenuOpen = false;
      isAddWorkspaceDropdownOpen = false;
    }
    updateOpenParam();
  }
  
  function toggleAddWorkspaceDropdown(e) {
    if (e) e.stopPropagation();
    isAddWorkspaceDropdownOpen = !isAddWorkspaceDropdownOpen;
    if (!isAddWorkspaceDropdownOpen) {
      isAddWorkspaceGeneralOpen = false;
      isAddWorkspace2DAnimationOpen = false;
      isAddWorkspaceSculptingOpen = false;
      isAddWorkspaceStoryboardingOpen = false;
      isAddWorkspaceVFXOpen = false;
      isAddWorkspaceVideoEditingOpen = false;
    }
    updateOpenParam();
  }
  
  function toggleAddWorkspaceGeneral(e) {
    if (e) e.stopPropagation();
    isAddWorkspaceGeneralOpen = !isAddWorkspaceGeneralOpen;
    if (isAddWorkspaceGeneralOpen) {
      isAddWorkspace2DAnimationOpen = false;
      isAddWorkspaceSculptingOpen = false;
      isAddWorkspaceStoryboardingOpen = false;
      isAddWorkspaceVFXOpen = false;
      isAddWorkspaceVideoEditingOpen = false;
    }
    updateOpenParam();
  }
  
  function toggleAddWorkspace2DAnimation(e) {
    if (e) e.stopPropagation();
    isAddWorkspace2DAnimationOpen = !isAddWorkspace2DAnimationOpen;
    if (isAddWorkspace2DAnimationOpen) {
      isAddWorkspaceGeneralOpen = false;
      isAddWorkspaceSculptingOpen = false;
      isAddWorkspaceStoryboardingOpen = false;
      isAddWorkspaceVFXOpen = false;
      isAddWorkspaceVideoEditingOpen = false;
    }
    updateOpenParam();
  }

  function toggleAddWorkspaceSculpting(e) {
    if (e) e.stopPropagation();
    isAddWorkspaceSculptingOpen = !isAddWorkspaceSculptingOpen;
    if (isAddWorkspaceSculptingOpen) {
      isAddWorkspaceGeneralOpen = false;
      isAddWorkspace2DAnimationOpen = false;
      isAddWorkspaceStoryboardingOpen = false;
      isAddWorkspaceVFXOpen = false;
      isAddWorkspaceVideoEditingOpen = false;
    }
    updateOpenParam();
  }

  function toggleAddWorkspaceStoryboarding(e) {
    if (e) e.stopPropagation();
    isAddWorkspaceStoryboardingOpen = !isAddWorkspaceStoryboardingOpen;
    if (isAddWorkspaceStoryboardingOpen) {
      isAddWorkspaceGeneralOpen = false;
      isAddWorkspace2DAnimationOpen = false;
      isAddWorkspaceSculptingOpen = false;
      isAddWorkspaceVFXOpen = false;
      isAddWorkspaceVideoEditingOpen = false;
    }
    updateOpenParam();
  }

  function toggleAddWorkspaceVFX(e) {
    if (e) e.stopPropagation();
    isAddWorkspaceVFXOpen = !isAddWorkspaceVFXOpen;
    if (isAddWorkspaceVFXOpen) {
      isAddWorkspaceGeneralOpen = false;
      isAddWorkspace2DAnimationOpen = false;
      isAddWorkspaceSculptingOpen = false;
      isAddWorkspaceStoryboardingOpen = false;
      isAddWorkspaceVideoEditingOpen = false;
    }
    updateOpenParam();
  }

  function toggleAddWorkspaceVideoEditing(e) {
    if (e) e.stopPropagation();
    isAddWorkspaceVideoEditingOpen = !isAddWorkspaceVideoEditingOpen;
    if (isAddWorkspaceVideoEditingOpen) {
      isAddWorkspaceGeneralOpen = false;
      isAddWorkspace2DAnimationOpen = false;
      isAddWorkspaceSculptingOpen = false;
      isAddWorkspaceStoryboardingOpen = false;
      isAddWorkspaceVFXOpen = false;
    }
    updateOpenParam();
  }

  function updateOpenParam() {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      let openParam = url.searchParams.get('open') || '';
      let openStates = openParam ? openParam.split(',').filter(Boolean) : [];
      
      const slugFileMenu = 'file-menu-dropdown';
      if (isFileMenuOpen) {
        if (!openStates.includes(slugFileMenu)) openStates.push(slugFileMenu);
      } else {
        openStates = openStates.filter(s => s !== slugFileMenu);
      }
      
      const slugFileMenuNew = 'file-menu-new-dropdown';
      if (isFileMenuNewOpen) {
        if (!openStates.includes(slugFileMenuNew)) openStates.push(slugFileMenuNew);
      } else {
        openStates = openStates.filter(s => s !== slugFileMenuNew);
      }
      
      const slugFileMenuRecover = 'file-menu-recover-dropdown';
      if (isFileMenuRecoverOpen) {
        if (!openStates.includes(slugFileMenuRecover)) openStates.push(slugFileMenuRecover);
      } else {
        openStates = openStates.filter(s => s !== slugFileMenuRecover);
      }
      
      const slugFileMenuDataPreviews = 'file-menu-data-previews-dropdown';
      if (isFileMenuDataPreviewsOpen) {
        if (!openStates.includes(slugFileMenuDataPreviews)) openStates.push(slugFileMenuDataPreviews);
      } else {
        openStates = openStates.filter(s => s !== slugFileMenuDataPreviews);
      }
      
      const slugFileMenuImport = 'file-menu-import-dropdown';
      if (isFileMenuImportOpen) {
        if (!openStates.includes(slugFileMenuImport)) openStates.push(slugFileMenuImport);
      } else {
        openStates = openStates.filter(s => s !== slugFileMenuImport);
      }
      
      const slugFileMenuExport = 'file-menu-export-dropdown';
      if (isFileMenuExportOpen) {
        if (!openStates.includes(slugFileMenuExport)) openStates.push(slugFileMenuExport);
      } else {
        openStates = openStates.filter(s => s !== slugFileMenuExport);
      }
      
      const slugFileMenuExternalData = 'file-menu-external-data-dropdown';
      if (isFileMenuExternalDataOpen) {
        if (!openStates.includes(slugFileMenuExternalData)) openStates.push(slugFileMenuExternalData);
      } else {
        openStates = openStates.filter(s => s !== slugFileMenuExternalData);
      }
      
      const slugFileMenuCleanUp = 'file-menu-clean-up-dropdown';
      if (isFileMenuCleanUpOpen) {
        if (!openStates.includes(slugFileMenuCleanUp)) openStates.push(slugFileMenuCleanUp);
      } else {
        openStates = openStates.filter(s => s !== slugFileMenuCleanUp);
      }
      
      const slugFileMenuDefaults = 'file-menu-defaults-dropdown';
      if (isFileMenuDefaultsOpen) {
        if (!openStates.includes(slugFileMenuDefaults)) openStates.push(slugFileMenuDefaults);
      } else {
        openStates = openStates.filter(s => s !== slugFileMenuDefaults);
      }
      
      const slugEditMenu = 'edit-menu-dropdown';
      if (isEditMenuOpen) {
        if (!openStates.includes(slugEditMenu)) openStates.push(slugEditMenu);
      } else {
        openStates = openStates.filter(s => s !== slugEditMenu);
      }
      
      const slugEditMenuUndoHistory = 'edit-menu-undo-history-dropdown';
      if (isEditMenuUndoHistoryOpen) {
        if (!openStates.includes(slugEditMenuUndoHistory)) openStates.push(slugEditMenuUndoHistory);
      } else {
        openStates = openStates.filter(s => s !== slugEditMenuUndoHistory);
      }
      
      const slugRenderMenu = 'render-menu-dropdown';
      if (isRenderMenuOpen) {
        if (!openStates.includes(slugRenderMenu)) openStates.push(slugRenderMenu);
      } else {
        openStates = openStates.filter(s => s !== slugRenderMenu);
      }
      
      const slugWindowMenu = 'window-menu-dropdown';
      if (isWindowMenuOpen) {
        if (!openStates.includes(slugWindowMenu)) openStates.push(slugWindowMenu);
      } else {
        openStates = openStates.filter(s => s !== slugWindowMenu);
      }
      
      const slugHelpMenu = 'help-menu-dropdown';
      if (isHelpMenuOpen) {
        if (!openStates.includes(slugHelpMenu)) openStates.push(slugHelpMenu);
      } else {
        openStates = openStates.filter(s => s !== slugHelpMenu);
      }
      
      const slugDropdown = 'add-workspace-dropdown';
      if (isAddWorkspaceDropdownOpen) {
        if (!openStates.includes(slugDropdown)) openStates.push(slugDropdown);
      } else {
        openStates = openStates.filter(s => s !== slugDropdown);
      }
      
      const slugGeneral = 'add-workspace-general-dropdown';
      if (isAddWorkspaceGeneralOpen) {
        if (!openStates.includes(slugGeneral)) openStates.push(slugGeneral);
      } else {
        openStates = openStates.filter(s => s !== slugGeneral);
      }
      
      const slug2D = 'add-workspace-2d-animation-dropdown';
      if (isAddWorkspace2DAnimationOpen) {
        if (!openStates.includes(slug2D)) openStates.push(slug2D);
      } else {
        openStates = openStates.filter(s => s !== slug2D);
      }
      
      const slugSculpting = 'add-workspace-sculpting-dropdown';
      if (isAddWorkspaceSculptingOpen) {
        if (!openStates.includes(slugSculpting)) openStates.push(slugSculpting);
      } else {
        openStates = openStates.filter(s => s !== slugSculpting);
      }
      
      const slugStoryboarding = 'add-workspace-storyboarding-dropdown';
      if (isAddWorkspaceStoryboardingOpen) {
        if (!openStates.includes(slugStoryboarding)) openStates.push(slugStoryboarding);
      } else {
        openStates = openStates.filter(s => s !== slugStoryboarding);
      }
      
      const slugVFX = 'add-workspace-vfx-dropdown';
      if (isAddWorkspaceVFXOpen) {
        if (!openStates.includes(slugVFX)) openStates.push(slugVFX);
      } else {
        openStates = openStates.filter(s => s !== slugVFX);
      }
      
      const slugVideoEditing = 'add-workspace-video-editing-dropdown';
      if (isAddWorkspaceVideoEditingOpen) {
        if (!openStates.includes(slugVideoEditing)) openStates.push(slugVideoEditing);
      } else {
        openStates = openStates.filter(s => s !== slugVideoEditing);
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
</script>

<div class="h-[42px] bg-[#202020] border-b border-[#151515] flex items-center justify-between text-[14px] select-none" alt-id="Main application top bar" appearance-id="42px tall dark horizontal bar with Blender logo, menu items, workspace tabs, and datablocks" location-id="below the macOS title bar, above the main workspace area" functionality-id="provides access to application menus, workspace tabs, and material/world datablocks" intent-id="navigate between major Blender features and manage the current scene setup">
  <div class="flex items-center h-full">
    <div class="px-4 flex items-center h-full hover:bg-[#333] cursor-pointer" alt-id="Blender logo menu, first element in the main menu bar" appearance-id="Blender logo icon button on the far left of the menu bar" location-id="leftmost element of the main application menu bar" functionality-id="opens a menu with Blender-specific options when clicked" intent-id="access application-level settings and information">
      <i class="fa-brands fa-neos text-[#ccc] text-[18px] pointer-events-none"></i>
    </div>
    <div class="flex h-full">
      <div class="relative h-full flex items-center">
        <div class="px-3 flex items-center h-full {isFileMenuOpen ? 'bg-[#4772b3] text-white' : 'hover:bg-[#333] text-[#ccc]'} cursor-pointer" on:click={toggleFileMenu} alt-id="File menu, 2 element in the main menu bar" appearance-id="text button labeled File in the main menu bar" location-id="second element from the left in the main application menu bar, after the Blender logo" functionality-id="opens the File dropdown menu for file operations" intent-id="access file management commands such as open, save, and import"><span class="pointer-events-none">File</span></div>
        
        {#if isFileMenuOpen}
          <div class="absolute left-0 top-[42px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[100] w-[240px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="File menu dropdown" appearance-id="dark floating dropdown panel listing File menu options" location-id="below the File menu button in the top menu bar" functionality-id="provides a list of file management operations including New, Open, Save, Import, Export" intent-id="perform operations on the current Blender project file">
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group bg-[#4d4d4d] text-white" on:mouseenter={() => { isFileMenuNewOpen = true; isFileMenuRecoverOpen = false; isFileMenuDataPreviewsOpen = false; isFileMenuImportOpen = false; isFileMenuExportOpen = false; isFileMenuExternalDataOpen = false; isFileMenuCleanUpOpen = false; isFileMenuDefaultsOpen = false; updateOpenParam(); }} alt-id="File menu item: New" appearance-id="highlighted menu row with a plus-file icon and the text New, showing Cmd+N shortcut and a right arrow" location-id="first item in the File menu dropdown" functionality-id="creates a new Blender file from a chosen template" intent-id="start a fresh project using a specific workspace template">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-file-circle-plus text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">N</u>ew</span>
              </div>
              <div class="flex items-center gap-1 pointer-events-none">
                <span class="text-[11px] text-[#aaa] group-hover:text-[#eee]">⌘ N</span>
                <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee]"></i>
              </div>
              
              {#if isFileMenuNewOpen}
                <!-- New Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[200px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="New nested menu" appearance-id="dark floating submenu listing new file templates" location-id="to the right of the New item in the File menu" functionality-id="shows template options for creating a new Blender file" intent-id="choose which type of new project to create">
                  
                  <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="New menu item: General" appearance-id="menu row with a plus-file icon and the text General" location-id="first item in the New nested menu" functionality-id="creates a new Blender file using the General template" intent-id="start a new general-purpose 3D project">
                    <i class="fa-solid fa-file-circle-plus text-[#ccc] group-hover:text-white text-[12px] w-4 text-center pointer-events-none"></i>
                    <span class="pointer-events-none"><u class="underline-offset-2 decoration-1">G</u>eneral</span>
                  </div>
                  
                  <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="New menu item: 2D Animation" appearance-id="menu row with a file-lines icon and the text 2D Animation" location-id="second item in the New nested menu" functionality-id="creates a new Blender file configured for 2D animation" intent-id="start a new 2D animation project">
                    <i class="fa-solid fa-file-lines text-[#ccc] group-hover:text-white text-[12px] w-4 text-center pointer-events-none"></i>
                    <span class="pointer-events-none">2D Animation</span>
                  </div>
                  
                  <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="New menu item: Sculpting" appearance-id="menu row with a paintbrush icon and the text Sculpting" location-id="third item in the New nested menu" functionality-id="creates a new Blender file configured for sculpting" intent-id="start a new sculpting project">
                    <i class="fa-solid fa-paintbrush text-[#ccc] group-hover:text-white text-[12px] w-4 text-center pointer-events-none"></i>
                    <span class="pointer-events-none"><u class="underline-offset-2 decoration-1">S</u>culpting</span>
                  </div>
                  
                  <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="New menu item: Storyboarding" appearance-id="menu row with a pen icon and the text Storyboarding" location-id="fourth item in the New nested menu" functionality-id="creates a new Blender file configured for storyboarding" intent-id="start a new storyboard project">
                    <i class="fa-solid fa-pen text-[#ccc] group-hover:text-white text-[12px] w-4 text-center pointer-events-none"></i>
                    <span class="pointer-events-none">Storyboarding</span>
                  </div>
                  
                  <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="New menu item: VFX" appearance-id="menu row with a crosshairs icon and the text VFX" location-id="fifth item in the New nested menu" functionality-id="creates a new Blender file configured for visual effects" intent-id="start a new VFX project">
                    <i class="fa-solid fa-crosshairs text-[#ccc] group-hover:text-white text-[12px] w-4 text-center pointer-events-none"></i>
                    <span class="pointer-events-none">VFX</span>
                  </div>
                  
                  <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="New menu item: Video Editing" appearance-id="menu row with a clapperboard icon and the text Video Editing" location-id="sixth item in the New nested menu" functionality-id="creates a new Blender file configured for video editing" intent-id="start a new video editing project">
                    <i class="fa-solid fa-clapperboard text-[#ccc] group-hover:text-white text-[12px] w-4 text-center pointer-events-none"></i>
                    <span class="pointer-events-none">Video <u class="underline-offset-2 decoration-1">E</u>diting</span>
                  </div>
                  
                </div>
              {/if}
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="File menu item: Open..." appearance-id="menu row with a folder-open icon, the text Open..., and a Cmd+O shortcut" location-id="below the New item in the File menu dropdown" functionality-id="opens a file browser to load an existing blend file" intent-id="open a previously saved Blender project">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-folder-open text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">O</u>pen...</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ O</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="File menu item: Open Recent" appearance-id="menu row with the text Open Recent and a Shift+Cmd+O shortcut with a right arrow" location-id="below the Open item in the File menu dropdown" functionality-id="shows a submenu of recently opened blend files" intent-id="quickly reopen a recently used project">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Open <u class="underline-offset-2 decoration-1">R</u>ecent</span>
              </div>
              <div class="flex items-center gap-1 pointer-events-none">
                <span class="text-[11px] text-[#aaa] group-hover:text-[#eee]">⇧ ⌘ O</span>
                <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee]"></i>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="File menu item: Revert" appearance-id="menu row with the text Revert" location-id="below Open Recent in the File menu dropdown" functionality-id="reverts the current file to its last saved state" intent-id="undo all changes since the last save">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Rev<u class="underline-offset-2 decoration-1">e</u>rt</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group bg-[#4d4d4d] text-white" on:mouseenter={() => { isFileMenuRecoverOpen = true; isFileMenuNewOpen = false; isFileMenuDataPreviewsOpen = false; isFileMenuImportOpen = false; isFileMenuExportOpen = false; isFileMenuExternalDataOpen = false; isFileMenuCleanUpOpen = false; isFileMenuDefaultsOpen = false; updateOpenParam(); }} alt-id="File menu item: Recover" appearance-id="highlighted menu row with the text Recover and a right arrow" location-id="below Revert in the File menu dropdown" functionality-id="opens a submenu with options to recover unsaved work" intent-id="recover work lost due to a crash or accidental close">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Recover</span>
              </div>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isFileMenuRecoverOpen}
                <!-- Recover Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[106px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[200px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Recover nested menu" appearance-id="dark floating submenu with Last Session and Auto Save options" location-id="to the right of the Recover item in the File menu" functionality-id="lists recovery methods for unsaved Blender sessions" intent-id="recover from a crash or unexpected close">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Recover menu item: Last Session" appearance-id="menu row with the text Last Session" location-id="first item in the Recover nested menu" functionality-id="opens the auto-saved file from the last Blender session" intent-id="recover the previous session after a crash">
                    <span class="pointer-events-none ml-6"><u class="underline-offset-2 decoration-1">L</u>ast Session</span>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Recover menu item: Auto Save..." appearance-id="menu row with the text Auto Save..." location-id="second item in the Recover nested menu" functionality-id="opens a file browser to find and load an auto-saved blend file" intent-id="manually locate and restore an auto-saved file">
                    <span class="pointer-events-none ml-6"><u class="underline-offset-2 decoration-1">A</u>uto Save...</span>
                  </div>
                  
                </div>
              {/if}
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="File menu item: Save" appearance-id="menu row with a floppy-disk icon, the text Save, and a Cmd+S shortcut" location-id="below the separator after Recover in the File menu dropdown" functionality-id="saves the current blend file to its current location" intent-id="save the current work to disk">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-floppy-disk text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">S</u>ave</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ S</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="File menu item: Save As..." appearance-id="menu row with the text Save As... and a Shift+Cmd+S shortcut" location-id="below Save in the File menu dropdown" functionality-id="opens a file browser to save the blend file with a new name or location" intent-id="save a copy of the project under a different name or location">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Save <u class="underline-offset-2 decoration-1">A</u>s...</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⇧ ⌘ S</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="File menu item: Save Copy..." appearance-id="menu row with the text Save Copy..." location-id="below Save As in the File menu dropdown" functionality-id="saves a copy of the current blend file without changing the active file path" intent-id="create a backup copy of the current project">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Save <u class="underline-offset-2 decoration-1">C</u>opy...</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="File menu item: Save Incremental" appearance-id="menu row with the text Save Incremental and an Alt+Cmd+S shortcut" location-id="below Save Copy in the File menu dropdown" functionality-id="saves a numbered incremental copy of the current blend file" intent-id="create versioned saves for iterative development">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Save <u class="underline-offset-2 decoration-1">I</u>ncremental</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌥ ⌘ S</span>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="File menu item: Link..." appearance-id="menu row with a link icon and the text Link..." location-id="below the separator after Save Incremental in the File menu dropdown" functionality-id="opens a file browser to link assets from another blend file" intent-id="reference data from another blend file without embedding it">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-link text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">L</u>ink...</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="File menu item: Append..." appearance-id="menu row with a paperclip icon and the text Append..." location-id="below Link in the File menu dropdown" functionality-id="opens a file browser to append data from another blend file" intent-id="copy data from another blend file into the current project">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-paperclip text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">A</u>ppend...</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group {isFileMenuDataPreviewsOpen ? 'bg-[#4d4d4d] text-white' : ''}" on:mouseenter={() => { isFileMenuDataPreviewsOpen = true; isFileMenuNewOpen = false; isFileMenuRecoverOpen = false; isFileMenuImportOpen = false; isFileMenuExportOpen = false; isFileMenuExternalDataOpen = false; isFileMenuCleanUpOpen = false; isFileMenuDefaultsOpen = false; updateOpenParam(); }} alt-id="File menu item: Data Previews" appearance-id="menu row with the text Data Previews and a right arrow" location-id="below Append in the File menu dropdown" functionality-id="opens a submenu for managing data-block preview thumbnails" intent-id="manage preview images for assets in the current file">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">D</u>ata Previews</span>
              </div>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isFileMenuDataPreviewsOpen}
                <!-- Data Previews Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[316px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[240px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Data Previews nested menu" appearance-id="dark floating submenu with preview management options" location-id="to the right of the Data Previews item in the File menu" functionality-id="provides options to refresh, generate, or clear data-block preview thumbnails" intent-id="manage thumbnail previews for data-blocks">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Data Previews menu item: Refresh Data-Block Previews" appearance-id="menu row with the text Refresh Data-Block Previews" location-id="first item in the Data Previews nested menu" functionality-id="refreshes the preview thumbnails for all data-blocks in the current file" intent-id="update outdated preview images for assets">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">R</u>efresh Data-Block Previews</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Data Previews menu item: Batch-Generate Previews..." appearance-id="menu row with the text Batch-Generate Previews..." location-id="second item in the Data Previews nested menu" functionality-id="opens a dialog to batch-generate preview thumbnails for data-blocks" intent-id="generate preview images for multiple assets at once">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">B</u>atch-Generate Previews...</span>
                    </div>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Data Previews menu item: Clear Data-Block Previews..." appearance-id="menu row with the text Clear Data-Block Previews..." location-id="third item in the Data Previews nested menu, below the separator" functionality-id="clears all preview thumbnails from data-blocks in the current file" intent-id="remove all preview images to save file size">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">C</u>lear Data-Block Previews...</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Data Previews menu item: Batch-Clear Previews..." appearance-id="menu row with the text Batch-Clear Previews..." location-id="fourth item in the Data Previews nested menu" functionality-id="opens a dialog to batch-clear preview thumbnails from multiple files" intent-id="bulk remove preview thumbnails from multiple blend files">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>Batch-Clear <u class="underline-offset-2 decoration-1">P</u>reviews...</span>
                    </div>
                  </div>
                  
                </div>
              {/if}
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group {isFileMenuImportOpen ? 'bg-[#4d4d4d] text-white' : ''}" on:mouseenter={() => { isFileMenuImportOpen = true; isFileMenuNewOpen = false; isFileMenuRecoverOpen = false; isFileMenuDataPreviewsOpen = false; isFileMenuExportOpen = false; isFileMenuExternalDataOpen = false; isFileMenuCleanUpOpen = false; isFileMenuDefaultsOpen = false; updateOpenParam(); }} alt-id="File menu item: Import" appearance-id="menu row with a download icon, the text Import, and a right arrow" location-id="below the separator after Data Previews in the File menu dropdown" functionality-id="opens a submenu of supported import formats" intent-id="import a 3D model or scene from an external file format">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-download text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">I</u>mport</span>
              </div>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isFileMenuImportOpen}
                <!-- Import Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[340px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[280px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Import nested menu" appearance-id="dark floating submenu listing supported import file formats" location-id="to the right of the Import item in the File menu" functionality-id="lists all file formats that can be imported into Blender" intent-id="choose a file format to import into the current project">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: Alembic" appearance-id="menu row with the text Alembic (.abc) for Import menu item: Alembic" location-id="first item in the Import nested menu" functionality-id="imports an Alembic file into the current scene" intent-id="bring in animated 3D data from an Alembic cache file">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">A</u>lembic (.abc)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: Universal Scene Description" appearance-id="menu row with the text Universal Scene Description (.usd*) for Import menu item: Universal Scene Description" location-id="second item in the Import nested menu" functionality-id="imports a USD file into the current scene" intent-id="bring in a Universal Scene Description file">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">U</u>niversal Scene Description (.usd*)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: SVG as Grease Pencil" appearance-id="menu row with the text SVG as Grease Pencil" location-id="third item in the Import nested menu" functionality-id="imports an SVG file and converts it to Grease Pencil strokes" intent-id="convert vector graphics into Grease Pencil objects">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">S</u>VG as Grease Pencil</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: Wavefront" appearance-id="menu row with the text Wavefront (.obj) for Import menu item: Wavefront" location-id="fourth item in the Import nested menu" functionality-id="imports a Wavefront OBJ file into the current scene" intent-id="bring in a 3D mesh from an OBJ file">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">W</u>avefront (.obj)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: Stanford PLY" appearance-id="menu row with the text Stanford PLY (.ply) for Import menu item: Stanford PLY" location-id="fifth item in the Import nested menu" functionality-id="imports a Stanford PLY file into the current scene" intent-id="bring in point cloud or mesh data from a PLY file">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>Stanford <u class="underline-offset-2 decoration-1">P</u>LY (.ply)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: STL" appearance-id="menu row with the text STL (.stl) for Import menu item: STL" location-id="sixth item in the Import nested menu" functionality-id="imports an STL file into the current scene" intent-id="bring in a mesh from an STL file, common for 3D printing">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>S<u class="underline-offset-2 decoration-1">T</u>L (.stl)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: FBX" appearance-id="menu row with the text FBX (.fbx) for Import menu item: FBX" location-id="seventh item in the Import nested menu" functionality-id="imports an FBX file into the current scene" intent-id="bring in rigged or animated models from an FBX file">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">F</u>BX (.fbx)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: Motion Capture" appearance-id="menu row with the text Motion Capture (.bvh)" location-id="eighth item in the Import nested menu" functionality-id="imports a BVH motion capture file into the current scene" intent-id="apply motion capture data to an armature">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">M</u>otion Capture (.bvh)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: Scalable Vector Graphics" appearance-id="menu row with the text Scalable Vector Graphics (.svg)" location-id="ninth item in the Import nested menu" functionality-id="imports an SVG file as a curve object" intent-id="convert a vector graphic into a Blender curve object">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>Scalable <u class="underline-offset-2 decoration-1">V</u>ector Graphics (.svg)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: FBX Legacy" appearance-id="menu row with the text FBX (.fbx) (Legacy)" location-id="tenth item in the Import nested menu" functionality-id="imports an FBX file using the legacy importer" intent-id="use the older FBX importer for compatibility">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>FBX (.fbx) (<u class="underline-offset-2 decoration-1">L</u>egacy)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: glTF 2.0" appearance-id="menu row with the text glTF 2.0 (.glb/.gltf) for Import menu item: glTF 2.0" location-id="eleventh item in the Import nested menu" functionality-id="imports a glTF 2.0 file into the current scene" intent-id="bring in a modern real-time 3D asset in glTF format">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">g</u>lTF 2.0 (.glb/.gltf)</span>
                    </div>
                  </div>
                  
                </div>
              {/if}
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group {isFileMenuExportOpen ? 'bg-[#4d4d4d] text-white' : ''}" on:mouseenter={() => { isFileMenuExportOpen = true; isFileMenuNewOpen = false; isFileMenuRecoverOpen = false; isFileMenuDataPreviewsOpen = false; isFileMenuImportOpen = false; isFileMenuExternalDataOpen = false; isFileMenuCleanUpOpen = false; isFileMenuDefaultsOpen = false; updateOpenParam(); }} alt-id="File menu item: Export" appearance-id="menu row with an upload icon, the text Export, and a right arrow" location-id="below Import in the File menu dropdown" functionality-id="opens a submenu of supported export formats" intent-id="export the current scene or selected objects to an external file format">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-upload text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">E</u>xport</span>
              </div>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isFileMenuExportOpen}
                <!-- Export Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[366px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[280px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Export nested menu" appearance-id="dark floating submenu listing supported export file formats" location-id="to the right of the Export item in the File menu" functionality-id="lists all file formats that can be exported from Blender" intent-id="choose a file format to export the current scene">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Export menu item: Alembic" appearance-id="menu row with the text Alembic (.abc) for Export menu item: Alembic" location-id="first item in the Export nested menu" functionality-id="exports the current scene to an Alembic file" intent-id="share animated 3D data via an Alembic cache file">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">A</u>lembic (.abc)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Export menu item: Universal Scene Description" appearance-id="menu row with the text Universal Scene Description (.usd*) for Export menu item: Universal Scene Description" location-id="second item in the Export nested menu" functionality-id="exports the current scene to a USD file" intent-id="export a Universal Scene Description for use in other DCC tools">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">U</u>niversal Scene Description (.usd*)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Export menu item: Grease Pencil as SVG" appearance-id="menu row with the text Grease Pencil as SVG" location-id="third item in the Export nested menu" functionality-id="exports Grease Pencil strokes to an SVG file" intent-id="convert Grease Pencil drawings to scalable vector graphics">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">G</u>rease Pencil as SVG</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Export menu item: Grease Pencil as PDF" appearance-id="menu row with the text Grease Pencil as PDF" location-id="fourth item in the Export nested menu" functionality-id="exports Grease Pencil strokes to a PDF file" intent-id="convert Grease Pencil drawings to a PDF document">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>Grease <u class="underline-offset-2 decoration-1">P</u>encil as PDF</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Export menu item: Wavefront" appearance-id="menu row with the text Wavefront (.obj) for Export menu item: Wavefront" location-id="fifth item in the Export nested menu" functionality-id="exports the scene or selected objects to a Wavefront OBJ file" intent-id="share a 3D mesh in the widely-supported OBJ format">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">W</u>avefront (.obj)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Export menu item: Stanford PLY" appearance-id="menu row with the text Stanford PLY (.ply) for Export menu item: Stanford PLY" location-id="sixth item in the Export nested menu" functionality-id="exports the scene or selected objects to a Stanford PLY file" intent-id="export mesh data to the PLY format">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">S</u>tanford PLY (.ply)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Export menu item: STL" appearance-id="menu row with the text STL (.stl) for Export menu item: STL" location-id="seventh item in the Export nested menu" functionality-id="exports the scene or selected objects to an STL file" intent-id="prepare a mesh for 3D printing by exporting to STL">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>S<u class="underline-offset-2 decoration-1">T</u>L (.stl)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 mx-1 cursor-default opacity-50" alt-id="Export menu item: Motion Capture" appearance-id="dimmed menu row with the text Motion Capture (.bvh)" location-id="eighth item in the Export nested menu, grayed out and unavailable" functionality-id="exports animation data to BVH format (currently unavailable)" intent-id="export motion capture data to BVH format when available">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>Motion Capture (.bvh)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Export menu item: FBX" appearance-id="menu row with the text FBX (.fbx) for Export menu item: FBX" location-id="ninth item in the Export nested menu" functionality-id="exports the scene or selected objects to an FBX file" intent-id="share rigged or animated models in the FBX format">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">F</u>BX (.fbx)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Export menu item: glTF 2.0" appearance-id="menu row with the text glTF 2.0 (.glb/.gltf) for Export menu item: glTF 2.0" location-id="tenth item in the Export nested menu" functionality-id="exports the scene or selected objects to a glTF 2.0 file" intent-id="export a real-time 3D asset in the modern glTF format">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>g<u class="underline-offset-2 decoration-1">l</u>TF 2.0 (.glb/.gltf)</span>
                    </div>
                  </div>
                  
                </div>
              {/if}
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 mx-1 cursor-default opacity-50" alt-id="File menu item: Export All Collections" appearance-id="dimmed menu row with the text Export All Collections, grayed out" location-id="below Export in the File menu dropdown, unavailable" functionality-id="exports all collections (currently unavailable)" intent-id="bulk export all collections when the feature is available">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>E<u class="underline-offset-2 decoration-1">x</u>port All Collections</span>
              </div>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group {isFileMenuExternalDataOpen ? 'bg-[#4d4d4d] text-white' : ''}" on:mouseenter={() => { isFileMenuExternalDataOpen = true; isFileMenuNewOpen = false; isFileMenuRecoverOpen = false; isFileMenuDataPreviewsOpen = false; isFileMenuImportOpen = false; isFileMenuExportOpen = false; isFileMenuCleanUpOpen = false; isFileMenuDefaultsOpen = false; updateOpenParam(); }} alt-id="File menu item: External Data" appearance-id="menu row with the text External Data and a right arrow" location-id="below the separator after Export All Collections in the File menu" functionality-id="opens a submenu for managing linked and packed external files" intent-id="control how external data like textures and libraries are handled">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Ex<u class="underline-offset-2 decoration-1">t</u>ernal Data</span>
              </div>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isFileMenuExternalDataOpen}
                <!-- External Data Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[396px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[260px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="External Data nested menu" appearance-id="dark floating submenu with resource packing and path management options" location-id="to the right of the External Data item in the File menu" functionality-id="provides options for packing resources and managing file paths" intent-id="manage external files linked to the current blend file">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="External Data menu item: Automatically Pack Resources" appearance-id="menu row with a checkbox icon and the text Automatically Pack Resources" location-id="first item in the External Data nested menu" functionality-id="toggles automatic packing of all external resources into the blend file on save" intent-id="ensure all assets are embedded in the file automatically">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <i class="fa-regular fa-square text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                      <span><u class="underline-offset-2 decoration-1">A</u>utomatically Pack Resources</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="External Data menu item: Pack Resources" appearance-id="menu row with the text Pack Resources" location-id="second item in the External Data nested menu" functionality-id="packs all external resources into the current blend file" intent-id="embed all linked textures and files into the blend file">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">P</u>ack Resources</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="External Data menu item: Unpack Resources" appearance-id="menu row with the text Unpack Resources" location-id="third item in the External Data nested menu" functionality-id="unpacks all embedded resources to external files" intent-id="extract embedded assets to separate files on disk">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">U</u>npack Resources</span>
                    </div>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="External Data menu item: Pack Linked Libraries" appearance-id="menu row with the text Pack Linked Libraries" location-id="fourth item in the External Data nested menu" functionality-id="packs all linked library files into the current blend file" intent-id="embed linked library blend files into the current project">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>Pack <u class="underline-offset-2 decoration-1">L</u>inked Libraries</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="External Data menu item: Unpack Linked Libraries" appearance-id="menu row with the text Unpack Linked Libraries" location-id="fifth item in the External Data nested menu" functionality-id="unpacks linked libraries to separate blend files on disk" intent-id="extract embedded library files to their own files">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>U<u class="underline-offset-2 decoration-1">n</u>pack Linked Libraries</span>
                    </div>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="External Data menu item: Make Paths Relative" appearance-id="menu row with the text Make Paths Relative" location-id="sixth item in the External Data nested menu, below the separator" functionality-id="converts all absolute file paths in the project to relative paths" intent-id="make the project portable by using relative file paths">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">M</u>ake Paths Relative</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="External Data menu item: Make Paths Absolute" appearance-id="menu row with the text Make Paths Absolute" location-id="seventh item in the External Data nested menu" functionality-id="converts all relative file paths in the project to absolute paths" intent-id="resolve relative paths to full file system paths">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>Ma<u class="underline-offset-2 decoration-1">k</u>e Paths Absolute</span>
                    </div>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="External Data menu item: Report Missing Files" appearance-id="menu row with the text Report Missing Files" location-id="eighth item in the External Data nested menu, below a separator" functionality-id="generates a report listing all missing external files" intent-id="identify which linked external files cannot be found">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">R</u>eport Missing Files</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="External Data menu item: Find Missing Files..." appearance-id="menu row with the text Find Missing Files..." location-id="ninth item in the External Data nested menu" functionality-id="opens a file browser to locate missing external files" intent-id="relink missing textures and assets to new file locations">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">F</u>ind Missing Files...</span>
                    </div>
                  </div>
                  
                </div>
              {/if}
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group {isFileMenuCleanUpOpen ? 'bg-[#4d4d4d] text-white' : ''}" on:mouseenter={() => { isFileMenuCleanUpOpen = true; isFileMenuNewOpen = false; isFileMenuRecoverOpen = false; isFileMenuDataPreviewsOpen = false; isFileMenuImportOpen = false; isFileMenuExportOpen = false; isFileMenuExternalDataOpen = false; isFileMenuDefaultsOpen = false; updateOpenParam(); }} alt-id="File menu item: Clean Up" appearance-id="menu row with the text Clean Up and a right arrow" location-id="below the separator after External Data in the File menu" functionality-id="opens a submenu for removing unused data from the file" intent-id="reduce file size by cleaning up unused data-blocks">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Clean <u class="underline-offset-2 decoration-1">U</u>p</span>
              </div>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isFileMenuCleanUpOpen}
                <!-- Clean Up Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[420px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[210px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Clean Up nested menu" appearance-id="dark floating submenu with unused data cleanup options" location-id="to the right of the Clean Up item in the File menu" functionality-id="provides options to purge or manage unused data in the project" intent-id="remove orphaned data to keep the project clean">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Clean Up menu item: Purge Unused Data..." appearance-id="menu row with the text Purge Unused Data..." location-id="first item in the Clean Up nested menu" functionality-id="permanently removes all unused data-blocks from the file" intent-id="delete all orphaned meshes, materials, and other unused assets">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">P</u>urge Unused Data...</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Clean Up menu item: Manage Unused Data..." appearance-id="menu row with the text Manage Unused Data..." location-id="second item in the Clean Up nested menu" functionality-id="opens a dialog to selectively manage unused data-blocks" intent-id="review and selectively remove orphaned assets">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">M</u>anage Unused Data...</span>
                    </div>
                  </div>
                  
                </div>
              {/if}
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group {isFileMenuDefaultsOpen ? 'bg-[#4d4d4d] text-white' : ''}" on:mouseenter={() => { isFileMenuDefaultsOpen = true; isFileMenuNewOpen = false; isFileMenuRecoverOpen = false; isFileMenuDataPreviewsOpen = false; isFileMenuImportOpen = false; isFileMenuExportOpen = false; isFileMenuExternalDataOpen = false; isFileMenuCleanUpOpen = false; updateOpenParam(); }} alt-id="File menu item: Defaults" appearance-id="menu row with the text Defaults and a right arrow" location-id="near the bottom of the File menu dropdown" functionality-id="opens a submenu for saving or resetting startup defaults" intent-id="manage the default state of Blender on startup">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">D</u>efaults</span>
              </div>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isFileMenuDefaultsOpen}
                <!-- Defaults Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[448px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[210px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Defaults nested menu" appearance-id="dark floating submenu with startup file options" location-id="to the right of the Defaults item in the File menu" functionality-id="provides options to save or reset the Blender startup configuration" intent-id="customize what Blender opens with by default">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Defaults menu item: Save Startup File" appearance-id="menu row with the text Save Startup File" location-id="first item in the Defaults nested menu" functionality-id="saves the current scene as the startup file for future sessions" intent-id="set the current workspace as the default starting state">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">S</u>ave Startup File</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Defaults menu item: Load Factory Settings" appearance-id="menu row with the text Load Factory Settings" location-id="second item in the Defaults nested menu" functionality-id="resets Blender to its factory default configuration" intent-id="restore Blender to its out-of-the-box settings">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">L</u>oad Factory Settings</span>
                    </div>
                  </div>
                  
                </div>
              {/if}
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="File menu item: Quit" appearance-id="menu row with a power-off icon and the text Quit at the bottom of the File menu" location-id="last item at the bottom of the File menu dropdown" functionality-id="quits the Blender application" intent-id="close Blender and exit the program">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-power-off text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">Q</u>uit</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ Q</span>
            </div>
            
          </div>
        {/if}
      </div>
      <div class="relative h-full flex items-center">
        <div class="px-3 flex items-center h-full {isEditMenuOpen ? 'bg-[#4772b3] text-white' : 'hover:bg-[#333] text-[#ccc]'} cursor-pointer" on:click={toggleEditMenu} alt-id="Edit menu, 3 element in the main menu bar" appearance-id="text button labeled Edit in the main menu bar" location-id="third element from the left in the main application menu bar" functionality-id="opens the Edit dropdown menu for undo and preference operations" intent-id="access editing history, search, and application preferences"><span class="pointer-events-none">Edit</span></div>
        
        {#if isEditMenuOpen}
          <div class="absolute left-0 top-[42px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[100] w-[240px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Edit menu dropdown" appearance-id="dark floating dropdown panel listing Edit menu options" location-id="below the Edit menu button in the top menu bar" functionality-id="provides undo, redo, search, and preferences operations" intent-id="manage editing history and application settings">
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Edit menu item: Undo" appearance-id="menu row with an undo arrow icon, the text Undo, and a Cmd+Z shortcut" location-id="first item in the Edit menu dropdown" functionality-id="undoes the last performed operation" intent-id="step back through the editing history">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-rotate-left text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">U</u>ndo</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ Z</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 mx-1 cursor-default opacity-50" alt-id="Edit menu item: Redo" appearance-id="dimmed menu row with the text Redo and a Shift+Cmd+Z shortcut" location-id="second item in the Edit menu dropdown, grayed out" functionality-id="redoes the last undone operation (unavailable when nothing to redo)" intent-id="step forward through the editing history">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-rotate-right text-[#ccc] text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">R</u>edo</span>
              </div>
              <span class="text-[11px] text-[#aaa] pointer-events-none">⇧ ⌘ Z</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group {isEditMenuUndoHistoryOpen ? 'bg-[#4d4d4d] text-white' : ''}" on:mouseenter={() => { isEditMenuUndoHistoryOpen = true; updateOpenParam(); }} on:mouseleave={() => isEditMenuUndoHistoryOpen = false} alt-id="Edit menu item: Undo History" appearance-id="menu row with the text Undo History and a right arrow" location-id="third item in the Edit menu dropdown" functionality-id="opens a submenu showing the full undo history" intent-id="jump to a specific point in the undo history">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Undo <u class="underline-offset-2 decoration-1">H</u>istory</span>
              </div>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isEditMenuUndoHistoryOpen}
                <!-- Undo History Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[50px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[200px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Undo History nested menu" appearance-id="dark floating submenu listing the history of past operations" location-id="to the right of the Undo History item in the Edit menu" functionality-id="shows a list of recent operations that can be undone" intent-id="select a specific past state to revert to">
                  <div class="px-3 py-1 text-[#aaa] italic pointer-events-none">Empty</div>
                </div>
              {/if}
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Edit menu item: Adjust Last Operation..." appearance-id="menu row with the text Adjust Last Operation..." location-id="below Undo History in the Edit menu dropdown" functionality-id="opens a panel to adjust the parameters of the last performed operation" intent-id="fine-tune the settings of the most recent action">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">A</u>djust Last Operation...</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">F9</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Edit menu item: Repeat Last" appearance-id="menu row with the text Repeat Last and a Shift+R shortcut" location-id="below Adjust Last Operation in the Edit menu dropdown" functionality-id="repeats the last performed operation" intent-id="apply the same action again quickly">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Repeat <u class="underline-offset-2 decoration-1">L</u>ast</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⇧ R</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Edit menu item: Repeat History..." appearance-id="menu row with the text Repeat History..." location-id="below Repeat Last in the Edit menu dropdown" functionality-id="opens a dialog to select and repeat a previous operation" intent-id="reapply a specific past action from the history">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>R<u class="underline-offset-2 decoration-1">e</u>peat History...</span>
              </div>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Edit menu item: Menu Search..." appearance-id="menu row with a search icon, the text Menu Search..., and an F3 shortcut" location-id="below the separator after Repeat History in the Edit menu dropdown" functionality-id="opens a searchable list of all Blender menu commands" intent-id="find and execute any Blender command by name">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-magnifying-glass text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">M</u>enu Search...</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">F3</span>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Edit menu item: Rename Active Item..." appearance-id="menu row with the text Rename Active Item... and an F2 shortcut" location-id="below Menu Search in the Edit menu dropdown" functionality-id="opens an inline rename dialog for the currently active item" intent-id="quickly rename the selected object or data-block">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Rename Active <u class="underline-offset-2 decoration-1">I</u>tem...</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">F2</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Edit menu item: Batch Rename..." appearance-id="menu row with the text Batch Rename... and a Ctrl+F2 shortcut" location-id="below Rename Active Item in the Edit menu dropdown" functionality-id="opens a batch rename dialog for multiple selected items" intent-id="rename many objects or data-blocks at once using patterns">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">B</u>atch Rename...</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ F2</span>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Edit menu item: Lock Object Modes" appearance-id="menu row with a lock icon and the text Lock Object Modes" location-id="below the separator after Batch Rename in the Edit menu dropdown" functionality-id="toggles locking of object interaction modes to prevent accidental mode changes" intent-id="prevent accidentally switching the interaction mode of selected objects">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-square-check text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span>Lock <u class="underline-offset-2 decoration-1">O</u>bject Modes</span>
              </div>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Edit menu item: Preferences..." appearance-id="menu row with a settings gear icon and the text Preferences..." location-id="last item in the Edit menu dropdown" functionality-id="opens the Blender Preferences window" intent-id="configure Blender settings such as themes, input, and add-ons">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-gear text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">P</u>references...</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ ,</span>
            </div>
            
          </div>
        {/if}
      </div>
      <div class="relative h-full flex items-center">
        <div class="px-3 flex items-center h-full {isRenderMenuOpen ? 'bg-[#4772b3] text-white' : 'hover:bg-[#333] text-[#ccc]'} cursor-pointer" on:click={toggleRenderMenu} alt-id="Render menu, 4 element in the main menu bar" appearance-id="text button labeled Render in the main menu bar" location-id="fourth element from the left in the main application menu bar" functionality-id="opens the Render dropdown menu for rendering operations" intent-id="access rendering commands and view the render output"><span class="pointer-events-none">Render</span></div>
        
        {#if isRenderMenuOpen}
          <div class="absolute left-0 top-[42px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[100] w-[220px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Render menu dropdown" appearance-id="dark floating dropdown panel listing Render menu options" location-id="below the Render menu button in the top menu bar" functionality-id="provides commands to render images, animations, and audio" intent-id="initiate rendering of the current scene">
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Render menu item: Render Image" appearance-id="menu row with a camera icon, the text Render Image, and an F12 shortcut" location-id="first item in the Render menu dropdown" functionality-id="renders a single still image of the current scene" intent-id="produce a final image from the current camera view">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-camera-retro text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">R</u>ender Image</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">F12</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Render menu item: Render Animation" appearance-id="menu row with a film-strip icon, the text Render Animation, and a Ctrl+F12 shortcut" location-id="second item in the Render menu dropdown" functionality-id="renders the entire animation sequence as individual frames" intent-id="produce a full rendered animation from the timeline">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-film text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span>Render <u class="underline-offset-2 decoration-1">A</u>nimation</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ F12</span>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Render menu item: Render Audio..." appearance-id="menu row with an audio-waveform icon and the text Render Audio..." location-id="third item in the Render menu dropdown" functionality-id="renders only the audio track from the current scene" intent-id="export the scene audio without re-rendering visuals">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>R<u class="underline-offset-2 decoration-1">e</u>nder Audio...</span>
              </div>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Render menu item: View Render" appearance-id="menu row with an eye icon, the text View Render, and an F11 shortcut" location-id="fourth item in the Render menu dropdown, below a separator" functionality-id="opens the Image Editor to view the last rendered image" intent-id="check the result of the most recent render">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">V</u>iew Render</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">F11</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Render menu item: View Animation" appearance-id="menu row with a play icon and the text View Animation" location-id="fifth item in the Render menu dropdown" functionality-id="plays back the last rendered animation in a viewer" intent-id="preview the result of the most recent animation render">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>V<u class="underline-offset-2 decoration-1">i</u>ew Animation</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ F11</span>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Render menu item: Lock Interface" appearance-id="menu row with a lock icon and the text Lock Interface" location-id="sixth item in the Render menu dropdown, below a separator" functionality-id="locks the Blender interface during rendering to prevent interruptions" intent-id="prevent accidental UI interactions while rendering">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-regular fa-square text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">L</u>ock Interface</span>
              </div>
            </div>
            
          </div>
        {/if}
      </div>
      <div class="relative h-full flex items-center">
        <div class="px-3 flex items-center h-full {isWindowMenuOpen ? 'bg-[#4772b3] text-white' : 'hover:bg-[#333] text-[#ccc]'} cursor-pointer" on:click={toggleWindowMenu} alt-id="Window menu, 5 element in the main menu bar" appearance-id="text button labeled Window in the main menu bar" location-id="fifth element from the left in the main application menu bar" functionality-id="opens the Window dropdown menu for window management options" intent-id="manage Blender application windows and workspaces"><span class="pointer-events-none">Window</span></div>
        
        {#if isWindowMenuOpen}
          <div class="absolute left-0 top-[42px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[100] w-[260px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Window menu dropdown" appearance-id="dark floating dropdown panel listing Window menu options" location-id="below the Window menu button in the top menu bar" functionality-id="provides window management commands for Blender" intent-id="control Blender window states and navigation">
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Window menu item: New Window" appearance-id="menu row with the text New Window" location-id="first item in the Window menu dropdown" functionality-id="opens an additional Blender application window" intent-id="work in multiple Blender windows simultaneously">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">N</u>ew Window</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Window menu item: New Main Window" appearance-id="menu row with the text New Main Window" location-id="second item in the Window menu dropdown" functionality-id="opens a new main Blender window" intent-id="create a separate main workspace window">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>New <u class="underline-offset-2 decoration-1">M</u>ain Window</span>
              </div>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Window menu item: Toggle Window Fullscreen" appearance-id="menu row with the text Toggle Window Fullscreen" location-id="third item in the Window menu dropdown" functionality-id="toggles the Blender window between fullscreen and windowed mode" intent-id="maximize screen space by going fullscreen">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-up-right-and-down-left-from-center text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">T</u>oggle Window Fullscreen</span>
              </div>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Window menu item: Next Workspace" appearance-id="menu row with the text Next Workspace and a Ctrl+Page Up shortcut" location-id="fourth item in the Window menu dropdown, below a separator" functionality-id="switches to the next workspace tab" intent-id="cycle through workspace tabs in order">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Next <u class="underline-offset-2 decoration-1">W</u>orkspace</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ Page Down</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Window menu item: Previous Workspace" appearance-id="menu row with the text Previous Workspace and a Ctrl+Page Down shortcut" location-id="fifth item in the Window menu dropdown" functionality-id="switches to the previous workspace tab" intent-id="cycle through workspace tabs in reverse order">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">P</u>revious Workspace</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ Page Up</span>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Window menu item: Show Status Bar" appearance-id="menu row with the text Show Status Bar" location-id="sixth item in the Window menu dropdown, below a separator" functionality-id="toggles the visibility of the status bar at the bottom of the screen" intent-id="show or hide the status bar for more workspace space">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-square-check text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span>Show Status Bar</span>
              </div>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Window menu item: Save Screenshot..." appearance-id="menu row with the text Save Screenshot..." location-id="seventh item in the Window menu dropdown" functionality-id="saves a screenshot of the entire Blender window to a file" intent-id="capture and save an image of the current Blender window state">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">S</u>ave Screenshot...</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Window menu item: Save Screenshot (Editor)..." appearance-id="menu row with the text Save Screenshot (Editor)..." location-id="last item in the Window menu dropdown" functionality-id="saves a screenshot of the active editor panel to a file" intent-id="capture and save an image of just the active editor">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Save Screenshot (<u class="underline-offset-2 decoration-1">E</u>ditor)...</span>
              </div>
            </div>
            
          </div>
        {/if}
      </div>
      <div class="relative h-full flex items-center">
        <div class="px-3 flex items-center h-full {isHelpMenuOpen ? 'bg-[#4772b3] text-white' : 'hover:bg-[#333] text-[#ccc]'} cursor-pointer" on:click={toggleHelpMenu} alt-id="Help menu, 6 element in the main menu bar" appearance-id="text button labeled Help in the main menu bar" location-id="sixth element from the left in the main application menu bar" functionality-id="opens the Help dropdown menu for documentation and support links" intent-id="access Blender documentation and community resources"><span class="pointer-events-none">Help</span></div>
        
        {#if isHelpMenuOpen}
          <div class="absolute left-0 top-[42px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[100] w-[220px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Help menu dropdown" appearance-id="dark floating dropdown panel listing Help menu options" location-id="below the Help menu button in the top menu bar" functionality-id="provides links to Blender documentation, community, and bug reporting" intent-id="find help and resources for using Blender">
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Help menu item: Manual" appearance-id="menu row with a book icon and the text Manual" location-id="first item in the Help menu dropdown" functionality-id="opens the Blender Manual in a web browser" intent-id="access the official Blender documentation">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-globe text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">M</u>anual</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Help menu item: Support" appearance-id="menu row with a life-ring icon and the text Support" location-id="second item in the Help menu dropdown" functionality-id="opens the Blender support page in a web browser" intent-id="get technical support for Blender">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">S</u>upport</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Help menu item: User Communities" appearance-id="menu row with a users icon and the text User Communities" location-id="third item in the Help menu dropdown" functionality-id="opens a page linking to Blender user communities" intent-id="connect with other Blender users online">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">U</u>ser Communities</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Help menu item: Get Involved" appearance-id="menu row with a handshake icon and the text Get Involved" location-id="fourth item in the Help menu dropdown" functionality-id="opens a page for contributing to the Blender project" intent-id="learn how to contribute to Blender development or documentation">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">G</u>et Involved</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Help menu item: Release Notes" appearance-id="menu row with a file-text icon and the text Release Notes" location-id="fifth item in the Help menu dropdown, below a separator" functionality-id="opens the release notes for the current Blender version" intent-id="review what's new in this version of Blender">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">R</u>elease Notes</span>
              </div>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Help menu item: Report a Bug" appearance-id="menu row with a bug icon and the text Report a Bug" location-id="sixth item in the Help menu dropdown" functionality-id="opens the Blender bug tracker in a web browser" intent-id="submit a bug report about an issue in Blender">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-globe text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span>Report <u class="underline-offset-2 decoration-1">a</u> Bug</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Help menu item: Save System Info..." appearance-id="menu row with the text Save System Info..." location-id="last item in the Help menu dropdown" functionality-id="saves system information to a text file for debugging" intent-id="gather system details when reporting a technical issue">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Save System <u class="underline-offset-2 decoration-1">I</u>nfo...</span>
              </div>
            </div>
            
          </div>
        {/if}
      </div>
    </div>
    
    <!-- Divider -->
    <div class="h-6 w-[1px] bg-[#111] mx-2"></div>
    

    <!-- Global Click Outside -->
    {#if isAddWorkspaceDropdownOpen || isFileMenuOpen || isEditMenuOpen || isRenderMenuOpen || isWindowMenuOpen || isHelpMenuOpen}
      <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => { 
        isFileMenuOpen = false;
        isFileMenuNewOpen = false;
        isFileMenuRecoverOpen = false;
        isFileMenuDataPreviewsOpen = false;
        isFileMenuImportOpen = false;
        isFileMenuExportOpen = false;
        isFileMenuExternalDataOpen = false;
        isFileMenuCleanUpOpen = false;
        isFileMenuDefaultsOpen = false;
        isAddWorkspaceDropdownOpen = false;
      isEditMenuOpen = false;
      isRenderMenuOpen = false;
      isWindowMenuOpen = false;
      isHelpMenuOpen = false;
        isAddWorkspaceGeneralOpen = false;
        isAddWorkspace2DAnimationOpen = false;
        isAddWorkspaceSculptingOpen = false;
        isAddWorkspaceStoryboardingOpen = false;
        isAddWorkspaceVFXOpen = false;
        isAddWorkspaceVideoEditingOpen = false;
        updateOpenParam();
      }}></div>
    {/if}
    <!-- Workspaces -->
    <div class="flex h-full items-end pt-1 relative">
      {#each [
        { name: 'Scene', active: true },
        { name: 'Rendering', active: false },
        { name: 'Animation', active: false },
        { name: 'Compositing', active: false },
        { name: '2D Animation', active: false }
      ] as tab, i}
        <div class="px-4 py-1.5 flex items-center cursor-pointer {tab.active ? 'bg-[#3d3d3d] text-[#fff] rounded-t' : 'text-[#a0a0a0] hover:text-[#ccc]'}" alt-id="{tab.name} workspace tab, {tab.active ? 'currently active' : ''}" appearance-id="{tab.name} workspace tab button{tab.active ? ', highlighted as active' : ', unhighlighted'}" location-id="{tab.name} position in the workspace tab bar below the main menu" functionality-id="switches to the {tab.name} workspace layout" intent-id="change the active workspace to the {tab.name} editor layout">
          <span class="text-[13px] pointer-events-none">{tab.name}</span>
        </div>
      {/each}
      <div class="px-4 py-1.5 flex items-center cursor-pointer text-[#a0a0a0] hover:text-[#ccc]" on:click={toggleAddWorkspaceDropdown} alt-id="Add workspace button" appearance-id="plus icon button after the last workspace tab" location-id="rightmost button in the workspace tab bar in the top bar" functionality-id="opens the Add Workspace dropdown to add a new workspace tab" intent-id="add a new workspace tab to the session for a different work context">
        <i class="fa-light fa-plus text-[16px] pointer-events-none"></i>
      </div>
      
      {#if isAddWorkspaceDropdownOpen}
        <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => { 
          isFileMenuOpen = false;
          isAddWorkspaceDropdownOpen = false;
      isEditMenuOpen = false;
      isRenderMenuOpen = false;
      isWindowMenuOpen = false;
      isHelpMenuOpen = false;
          isAddWorkspaceGeneralOpen = false;
          isAddWorkspace2DAnimationOpen = false;
          isAddWorkspaceSculptingOpen = false;
          isAddWorkspaceStoryboardingOpen = false;
          isAddWorkspaceVFXOpen = false;
          isAddWorkspaceVideoEditingOpen = false;
          updateOpenParam();
        }}></div>
        <div class="fixed left-[420px] top-[80px] bg-[#1a1a1a] border border-[#2a2a2a] rounded shadow-[0_4px_12px_rgba(0,0,0,0.8)] z-50 py-1 w-[200px]" alt-id="Add Workspace dropdown menu" appearance-id="dark floating panel with workspace category options" location-id="below the add workspace button in the top bar" functionality-id="allows selecting a workspace type to add to the session" intent-id="choose which type of workspace to add to the tab bar">
          <div class="px-3 py-1.5 text-[#a0a0a0] text-[13px]" alt-id="Add Workspace title" appearance-id="gray text reading Add Workspace at the top of the dropdown" location-id="top of the Add Workspace dropdown menu" functionality-id="labels the dropdown as the Add Workspace menu" intent-id="identifies the purpose of the dropdown panel">Add Workspace</div>
          <div class="w-full h-[1px] bg-[#2a2a2a] my-1"></div>
          
          <div class="flex items-center gap-2 px-3 py-1.5 text-[#ccc] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Search workspace types" appearance-id="row with a search icon and placeholder text for searching workspace types" location-id="below the title in the Add Workspace dropdown" functionality-id="filters the list of workspace categories by search text" intent-id="quickly find a specific workspace type to add">
            <i class="fa-light fa-magnifying-glass text-[13px] pointer-events-none"></i>
            <span class="text-[13px] pointer-events-none">Search...</span>
          </div>
          <div class="w-full h-[1px] bg-[#2a2a2a] my-1"></div>
          
          <div class="flex items-center justify-between px-3 py-1 {isAddWorkspaceGeneralOpen ? 'bg-[#444] text-[#ccc]' : 'text-[#ccc] hover:bg-[#4772b3] hover:text-white'} cursor-pointer relative" on:click={toggleAddWorkspaceGeneral} alt-id="General workspace category" appearance-id="menu row with the text General and a right arrow" location-id="first category in the Add Workspace dropdown menu" functionality-id="opens the General workspaces nested submenu" intent-id="browse and add general-purpose workspaces">
            <span class="text-[13px] pointer-events-none ml-6">General</span>
            <i class="fa-solid fa-caret-right text-[10px] {isAddWorkspaceGeneralOpen ? 'text-white' : 'text-[#888]'} pointer-events-none"></i>
            
            {#if isAddWorkspaceGeneralOpen}
              <div class="absolute left-full top-[-4px] bg-[#1a1a1a] border border-[#2a2a2a] rounded shadow-[0_4px_12px_rgba(0,0,0,0.8)] z-50 py-1 w-[200px] cursor-default" on:click|stopPropagation alt-id="General workspaces nested menu" appearance-id="dark floating submenu listing General workspace options" location-id="to the right of the General category in the Add Workspace dropdown" functionality-id="lists available General workspace layouts to add" intent-id="select a specific general workspace to add to the session">
                {#each ['Animation', 'Compositing', 'Geometry Nodes', 'Layout', 'Modeling', 'Rendering', 'Scripting', 'Sculpting', 'Shading', 'Texture Paint', 'UV Editing'] as ws}
                  <div class="px-5 py-1 text-[#ccc] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="{ws} workspace option" appearance-id="menu row showing the workspace name {ws} in the workspace category submenu for {ws} workspace option" location-id="{ws} item in the workspace category nested submenu for {ws} workspace option" functionality-id="adds the {ws} workspace to the current Blender session for {ws} workspace option" intent-id="open the {ws} workspace layout for {ws} workspace option">
                    <span class="text-[13px] pointer-events-none">{ws}</span>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
          <div class="flex items-center justify-between px-3 py-1 {isAddWorkspace2DAnimationOpen ? 'bg-[#444] text-[#ccc]' : 'text-[#ccc] hover:bg-[#4772b3] hover:text-white'} cursor-pointer relative" on:click={toggleAddWorkspace2DAnimation} alt-id="2D Animation workspace category" appearance-id="menu row with the text 2D Animation and a right arrow" location-id="second category in the Add Workspace dropdown menu" functionality-id="opens the 2D Animation workspaces nested submenu" intent-id="browse and add 2D animation workspaces">
            <span class="text-[13px] pointer-events-none ml-6">2D Animation</span>
            <i class="fa-solid fa-caret-right text-[10px] {isAddWorkspace2DAnimationOpen ? 'text-white' : 'text-[#888]'} pointer-events-none"></i>
            
            {#if isAddWorkspace2DAnimationOpen}
              <div class="absolute left-full top-[-4px] bg-[#1a1a1a] border border-[#2a2a2a] rounded shadow-[0_4px_12px_rgba(0,0,0,0.8)] z-50 py-1 w-[200px] cursor-default" on:click|stopPropagation alt-id="2D Animation workspaces nested menu" appearance-id="dark floating submenu listing 2D Animation workspace options" location-id="to the right of the 2D Animation category in the Add Workspace dropdown" functionality-id="lists available 2D animation workspace layouts to add" intent-id="select a specific 2D animation workspace to add">
                {#each ['2D Animation', '2D Full Canvas'] as ws}
                  <div class="px-5 py-1 text-[#ccc] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="{ws} workspace option" appearance-id="menu row showing the workspace name {ws} in the workspace category submenu for {ws} workspace option" location-id="{ws} item in the workspace category nested submenu for {ws} workspace option" functionality-id="adds the {ws} workspace to the current Blender session for {ws} workspace option" intent-id="open the {ws} workspace layout for {ws} workspace option">
                    <span class="text-[13px] pointer-events-none">{ws}</span>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
          <div class="flex items-center justify-between px-3 py-1 {isAddWorkspaceSculptingOpen ? 'bg-[#444] text-[#ccc]' : 'text-[#ccc] hover:bg-[#4772b3] hover:text-white'} cursor-pointer relative" on:click={toggleAddWorkspaceSculpting} alt-id="Sculpting workspace category" appearance-id="menu row with the text Sculpting and a right arrow" location-id="third category in the Add Workspace dropdown menu" functionality-id="opens the Sculpting workspaces nested submenu" intent-id="browse and add sculpting workspaces">
            <span class="text-[13px] pointer-events-none ml-6">Sculpting</span>
            <i class="fa-solid fa-caret-right text-[10px] {isAddWorkspaceSculptingOpen ? 'text-white' : 'text-[#888]'} pointer-events-none"></i>
            
            {#if isAddWorkspaceSculptingOpen}
              <div class="absolute left-full top-[-4px] bg-[#1a1a1a] border border-[#2a2a2a] rounded shadow-[0_4px_12px_rgba(0,0,0,0.8)] z-50 py-1 w-[200px] cursor-default" on:click|stopPropagation alt-id="Sculpting workspaces nested menu" appearance-id="dark floating submenu listing Sculpting workspace options" location-id="to the right of the Sculpting category in the Add Workspace dropdown" functionality-id="lists available sculpting workspace layouts to add" intent-id="select a specific sculpting workspace to add">
                {#each ['Sculpting', 'Shading'] as ws}
                  <div class="px-5 py-1 text-[#ccc] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="{ws} workspace option" appearance-id="menu row showing the workspace name {ws} in the workspace category submenu for {ws} workspace option" location-id="{ws} item in the workspace category nested submenu for {ws} workspace option" functionality-id="adds the {ws} workspace to the current Blender session for {ws} workspace option" intent-id="open the {ws} workspace layout for {ws} workspace option">
                    <span class="text-[13px] pointer-events-none">{ws}</span>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
          <div class="flex items-center justify-between px-3 py-1 {isAddWorkspaceStoryboardingOpen ? 'bg-[#444] text-[#ccc]' : 'text-[#ccc] hover:bg-[#4772b3] hover:text-white'} cursor-pointer relative" on:click={toggleAddWorkspaceStoryboarding} alt-id="Storyboarding workspace category" appearance-id="menu row with the text Storyboarding and a right arrow" location-id="fourth category in the Add Workspace dropdown menu" functionality-id="opens the Storyboarding workspaces nested submenu" intent-id="browse and add storyboarding workspaces">
            <span class="text-[13px] pointer-events-none ml-6">Storyboarding</span>
            <i class="fa-solid fa-caret-right text-[10px] {isAddWorkspaceStoryboardingOpen ? 'text-white' : 'text-[#888]'} pointer-events-none"></i>
            
            {#if isAddWorkspaceStoryboardingOpen}
              <div class="absolute left-full top-[-4px] bg-[#1a1a1a] border border-[#2a2a2a] rounded shadow-[0_4px_12px_rgba(0,0,0,0.8)] z-50 py-1 w-[200px] cursor-default" on:click|stopPropagation alt-id="Storyboarding workspaces nested menu" appearance-id="dark floating submenu listing Storyboarding workspace options" location-id="to the right of the Storyboarding category in the Add Workspace dropdown" functionality-id="lists available storyboarding workspace layouts to add" intent-id="select a specific storyboarding workspace to add">
                {#each ['Storyboarding', 'Video Editing'] as ws}
                  <div class="px-5 py-1 text-[#ccc] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="{ws} workspace option" appearance-id="menu row showing the workspace name {ws} in the workspace category submenu for {ws} workspace option" location-id="{ws} item in the workspace category nested submenu for {ws} workspace option" functionality-id="adds the {ws} workspace to the current Blender session for {ws} workspace option" intent-id="open the {ws} workspace layout for {ws} workspace option">
                    <span class="text-[13px] pointer-events-none">{ws}</span>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
          <div class="flex items-center justify-between px-3 py-1 {isAddWorkspaceVFXOpen ? 'bg-[#444] text-[#ccc]' : 'text-[#ccc] hover:bg-[#4772b3] hover:text-white'} cursor-pointer relative" on:click={toggleAddWorkspaceVFX} alt-id="VFX workspace category" appearance-id="menu row with the text VFX and a right arrow" location-id="fifth category in the Add Workspace dropdown menu" functionality-id="opens the VFX workspaces nested submenu" intent-id="browse and add VFX workspaces">
            <span class="text-[13px] pointer-events-none ml-6">VFX</span>
            <i class="fa-solid fa-caret-right text-[10px] {isAddWorkspaceVFXOpen ? 'text-white' : 'text-[#888]'} pointer-events-none"></i>
            
            {#if isAddWorkspaceVFXOpen}
              <div class="absolute left-full top-[-4px] bg-[#1a1a1a] border border-[#2a2a2a] rounded shadow-[0_4px_12px_rgba(0,0,0,0.8)] z-50 py-1 w-[200px] cursor-default" on:click|stopPropagation alt-id="VFX workspaces nested menu" appearance-id="dark floating submenu listing VFX workspace options" location-id="to the right of the VFX category in the Add Workspace dropdown" functionality-id="lists available VFX workspace layouts to add" intent-id="select a specific VFX workspace to add">
                {#each ['Compositing', 'Masking', 'Motion Tracking', 'Rendering'] as ws}
                  <div class="px-5 py-1 text-[#ccc] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="{ws} workspace option" appearance-id="menu row showing the workspace name {ws} in the workspace category submenu for {ws} workspace option" location-id="{ws} item in the workspace category nested submenu for {ws} workspace option" functionality-id="adds the {ws} workspace to the current Blender session for {ws} workspace option" intent-id="open the {ws} workspace layout for {ws} workspace option">
                    <span class="text-[13px] pointer-events-none">{ws}</span>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
          <div class="flex items-center justify-between px-3 py-1 {isAddWorkspaceVideoEditingOpen ? 'bg-[#444] text-[#ccc]' : 'text-[#ccc] hover:bg-[#4772b3] hover:text-white'} cursor-pointer relative" on:click={toggleAddWorkspaceVideoEditing} alt-id="Video Editing workspace category" appearance-id="menu row with the text Video Editing and a right arrow" location-id="sixth category in the Add Workspace dropdown menu" functionality-id="opens the Video Editing workspaces nested submenu" intent-id="browse and add video editing workspaces">
            <span class="text-[13px] pointer-events-none ml-6">Video Editing</span>
            <i class="fa-solid fa-caret-right text-[10px] {isAddWorkspaceVideoEditingOpen ? 'text-white' : 'text-[#888]'} pointer-events-none"></i>
            
            {#if isAddWorkspaceVideoEditingOpen}
              <div class="absolute left-full top-[-4px] bg-[#1a1a1a] border border-[#2a2a2a] rounded shadow-[0_4px_12px_rgba(0,0,0,0.8)] z-50 py-1 w-[200px] cursor-default" on:click|stopPropagation alt-id="Video Editing workspaces nested menu" appearance-id="dark floating submenu listing Video Editing workspace options" location-id="to the right of the Video Editing category in the Add Workspace dropdown" functionality-id="lists available video editing workspace layouts to add" intent-id="select a specific video editing workspace to add">
                {#each ['Rendering', 'Video Editing'] as ws}
                  <div class="px-5 py-1 text-[#ccc] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="{ws} workspace option" appearance-id="menu row showing the workspace name {ws} in the workspace category submenu for {ws} workspace option" location-id="{ws} item in the workspace category nested submenu for {ws} workspace option" functionality-id="adds the {ws} workspace to the current Blender session for {ws} workspace option" intent-id="open the {ws} workspace layout for {ws} workspace option">
                    <span class="text-[13px] pointer-events-none">{ws}</span>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
          
          <div class="w-full h-[1px] bg-[#2a2a2a] my-1"></div>
          <div class="flex items-center gap-2 px-3 py-1 text-[#ccc] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Duplicate Current workspace" appearance-id="menu row with a clone icon and the text Duplicate Current at the bottom of the Add Workspace dropdown" location-id="at the bottom of the Add Workspace dropdown, below a separator" functionality-id="duplicates the currently active workspace and adds it as a new tab" intent-id="create a copy of the current workspace layout">
            <i class="fa-regular fa-clone text-[13px] pointer-events-none"></i>
            <span class="text-[13px] pointer-events-none">Duplicate Current</span>
          </div>
        </div>
      {/if}
    </div>
  </div>
  <div class="flex items-center h-full pr-4 gap-3">
    <!-- Material Datablock -->
    <div class="flex items-center h-[28px] rounded-[4px] border border-[#111] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" alt-id="Material datablock selector" appearance-id="compact horizontal widget with icon, material name, new, and unlink buttons" location-id="right side of the top bar, in the datablock selectors group" functionality-id="allows browsing, creating, and unlinking material data-blocks" intent-id="manage which material is currently assigned and active">
      <div class="flex items-center gap-1.5 px-2 h-full bg-[#2a2a2a] border-r border-[#111] cursor-pointer hover:bg-[#333]" alt-id="Material icon and dropdown" appearance-id="shapes icon with a chevron indicating a dropdown" location-id="leftmost section of the material datablock selector" functionality-id="opens a dropdown to browse available materials" intent-id="select a different material from the existing ones">
        <i class="fa-solid fa-shapes text-[14px] text-[#ccc] pointer-events-none"></i>
        <i class="fa-solid fa-chevron-down text-[10px] text-[#888] pointer-events-none"></i>
      </div>
      <div class="flex items-center px-2.5 h-full w-[160px] justify-between bg-[#1a1a1a] cursor-text shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]" alt-id="Material name input field" appearance-id="dark text field showing the current material name Cube Diorama with a pin icon" location-id="center section of the material datablock selector" functionality-id="displays and allows renaming the current material" intent-id="rename or identify the currently active material">
        <span class="text-[#eee] text-[14px] pointer-events-none">Cube Diorama</span>
        <i class="fa-solid fa-thumbtack text-[13px] text-[#888] hover:text-[#ccc] cursor-pointer transform -rotate-45" alt-id="Pin material" appearance-id="small thumbtack icon rotated 45 degrees inside the material name field" location-id="right side of the material name input field" functionality-id="pins the material to prevent it from being replaced by object selection changes" intent-id="keep the current material visible even when selecting other objects"></i>
      </div>
      <div class="px-2 h-full flex items-center bg-[#3d3d3d] border-l border-[#111] cursor-pointer hover:bg-[#4d4d4d]" alt-id="New material button" appearance-id="button with a copy icon on the right side of the material name field" location-id="third section of the material datablock selector, between name and unlink" functionality-id="creates a new copy of the current material or adds a new material" intent-id="duplicate the material or create a fresh one">
        <i class="fa-regular fa-copy text-[14px] text-[#eee] pointer-events-none"></i>
      </div>
      <div class="px-2 h-full flex items-center bg-[#2a2a2a] border-l border-[#111] cursor-pointer hover:bg-[#333]" alt-id="Unlink material button" appearance-id="button with an X icon on the far right of the material datablock selector" location-id="rightmost section of the material datablock selector" functionality-id="unlinks the current material from the active object" intent-id="remove the material assignment from the object">
        <i class="fa-light fa-xmark text-[16px] text-[#555] hover:text-[#999] pointer-events-none"></i>
      </div>
    </div>

    <!-- World Datablock -->
    <div class="flex items-center h-[28px] rounded-[4px] border border-[#111] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" alt-id="World environment datablock selector" appearance-id="compact horizontal widget with icon, world name, new, and unlink buttons" location-id="right side of the top bar, to the right of the material selector" functionality-id="allows browsing, creating, and unlinking world environment data-blocks" intent-id="manage which world environment is currently active">
      <div class="flex items-center gap-1.5 px-2 h-full bg-[#2a2a2a] border-r border-[#111] cursor-pointer hover:bg-[#333]" alt-id="World icon and dropdown" appearance-id="images icon with a chevron indicating a dropdown" location-id="leftmost section of the world environment datablock selector" functionality-id="opens a dropdown to browse available world environments" intent-id="select a different world environment from existing ones">
        <i class="fa-light fa-images text-[14px] text-[#ccc] pointer-events-none"></i>
        <i class="fa-solid fa-chevron-down text-[10px] text-[#888] pointer-events-none"></i>
      </div>
      <div class="flex items-center px-2.5 h-full w-[110px] bg-[#1a1a1a] cursor-text shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]" alt-id="World name input field" appearance-id="dark text field showing the current world name Studio" location-id="center section of the world environment datablock selector" functionality-id="displays the name of the currently active world environment" intent-id="identify the currently active world environment">
        <span class="text-[#eee] text-[14px] pointer-events-none">Studio</span>
      </div>
      <div class="px-2 h-full flex items-center bg-[#3d3d3d] border-l border-[#111] cursor-pointer hover:bg-[#4d4d4d]" alt-id="New world button" appearance-id="button with a copy icon on the right side of the world name field" location-id="third section of the world environment datablock selector" functionality-id="creates a new copy of the current world environment" intent-id="duplicate the world environment or create a new one">
        <i class="fa-regular fa-copy text-[14px] text-[#eee] pointer-events-none"></i>
      </div>
      <div class="px-2 h-full flex items-center bg-[#2a2a2a] border-l border-[#111] cursor-pointer hover:bg-[#333]" alt-id="Unlink world button" appearance-id="button with an X icon on the far right of the world environment datablock selector" location-id="rightmost section of the world environment datablock selector" functionality-id="unlinks the current world environment from the scene" intent-id="remove the world environment assignment from the scene">
        <i class="fa-light fa-xmark text-[16px] text-[#555] hover:text-[#999] pointer-events-none"></i>
      </div>
    </div>
  </div>
</div>
