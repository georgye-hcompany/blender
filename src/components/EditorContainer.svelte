<script>
  import AssetBrowser from './AssetBrowser.svelte';
  import Viewport3D from './Viewport3D.svelte';
  import Outliner from './Outliner.svelte';
  import Properties from './Properties.svelte';
  import ImageEditor from './ImageEditor.svelte';
  import Compositor from './Compositor.svelte';
  import ShaderEditor from './ShaderEditor.svelte';
  import Spreadsheet from './Spreadsheet.svelte';

  export let initialEditor = 'viewport_3d';
  export let isMainViewport = false;
  export let windowId = '';
  
  let currentEditor = (initialEditor || 'viewport_3d').split(',')[0];

  // Map editor IDs to components
  // Fallback to Viewport3D/Outliner if the selected editor isn't implemented yet
  $: getComponent = (id) => {
    switch (id) {
      case 'asset_browser': return AssetBrowser;
      case 'viewport_3d': return Viewport3D;
      case 'outliner': return Outliner;
      case 'properties': return Properties;
      case 'image_editor': return ImageEditor;
      case 'compositor': return Compositor;
      case 'shader_editor': return ShaderEditor;
      case 'spreadsheet': return Spreadsheet;
      default: return Viewport3D;
    }
  };

  $: {
    if (typeof window !== 'undefined' && windowId) {
      const url = new URL(window.location.href);
      const currentVal = url.searchParams.get(windowId) || '';
      const baseEditor = currentVal.split(',')[0] || '';
      
      if (baseEditor && baseEditor !== currentEditor) {
        url.searchParams.set(windowId, currentEditor);
        const search = url.searchParams.toString().replace(/%2C/g, ',');
        window.history.replaceState({}, '', `${url.pathname}?${search}`);
      }
    }
  }
</script>

<div class="w-full h-full relative flex flex-col">
  {#if currentEditor === 'viewport_3d'}
    <svelte:component this={getComponent(currentEditor)} bind:currentEditor isMainViewport={isMainViewport} windowId={windowId} />
  {:else}
    <svelte:component this={getComponent(currentEditor)} bind:currentEditor windowId={windowId} />
  {/if}
</div>
