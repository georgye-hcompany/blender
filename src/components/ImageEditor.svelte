<script>
</script>

<div class="h-full flex flex-col bg-[#282828]" alt-id="Image Editor panel">
  <!-- Header -->
  <div class="h-7 flex items-center px-2 gap-3 text-[11px] border-b border-[#1f1f1f]" alt-id="Image Editor header">
    <div class="cursor-pointer hover:text-white text-[#a0a0a0]" alt-id="Editor type selector: Image Editor, first element in the Image Editor header"><i class="fa-light fa-image"></i></div>
    <div class="cursor-pointer hover:text-white text-[#ccc]" alt-id="View menu, second element in the Image Editor header">View</div>
    <div class="cursor-pointer hover:text-white text-[#ccc]" alt-id="Image menu, third element in the Image Editor header">Image</div>
  </div>
  <!-- Image view -->
  <div class="flex-1 bg-[#1c1c1c] relative flex items-center justify-center p-2 overflow-hidden" alt-id="Image Editor main view">
     <div class="relative w-36 h-36 border border-black shadow-[0_0_10px_rgba(0,0,0,0.5)] bg-black overflow-hidden flex items-center justify-center" alt-id="Rendered image preview">
       <div class="relative w-24 h-24">
         <div class="absolute inset-0 bg-[#2d1b11] transform rotate-45 scale-y-50 shadow-2xl border border-[#22120a]"></div>
         <div class="absolute bottom-0 left-0 w-1/2 h-full bg-[#e6dbce] origin-bottom-right transform skew-y-[-45deg] border-l border-t border-[#a69b8e]"></div>
         <div class="absolute bottom-0 right-0 w-1/2 h-full bg-[#1b6b5d] origin-bottom-left transform skew-y-[45deg] border-r border-t border-[#0b4b3d]"></div>
         <!-- Window -->
         <div class="absolute top-[25%] right-[10%] w-[30%] h-[30%] bg-[#a0d2eb] border-[2px] border-[#5c3a21] origin-bottom-left transform skew-y-[45deg] grid grid-cols-2 grid-rows-2">
           <div class="border border-[#5c3a21] bg-white/20"></div>
           <div class="border border-[#5c3a21] bg-white/20"></div>
           <div class="border border-[#5c3a21] bg-white/20"></div>
           <div class="border border-[#5c3a21] bg-white/20"></div>
         </div>
       </div>
     </div>
  </div>
</div>
