export default function Timeline(){
    return(
        <div class="flex items-center">

  <div class="relative">
    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">

    </div>
    <div class="mt-3 ml-4">

      <h3 class="text-lg font-semibold">Event 1</h3>
      <p>Event description goes here.</p>
    </div>
  </div>

  <div class="h-12 w-1 bg-blue-500 ml-4">
  </div>

  <div class="relative">
    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
    </div>
    <div class="mt-3 ml-4">
      <h3 class="text-lg font-semibold">Event 2</h3>
      <p>Event description goes here.</p>
    </div>
  </div>

  <div class="h-12 w-8 border-t-2 border-blue-500 border-solid border-opacity-50 mt-2">
  </div>


  <div class="relative">
    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
    </div>
    <div class="mt-3 ml-4">
      <h3 class="text-lg font-semibold">Event 3</h3>
      <p>Event description goes here.</p>
    </div>
  </div>
</div>

    )
}