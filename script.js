// Your code here.
// Store the initial mouse position and scroll position
    let initialMouseX = 0;
    let initialScrollX = 0;

    // Flag to check if dragging is in progress
    let isDragging = false;

    // Get the items container element
    const itemsContainer = document.querySelector('.items');

    // Event listener for mouse down event
    itemsContainer.addEventListener('mousedown', (event) => {
      // Set the initial mouse position and scroll position
      initialMouseX = event.pageX - itemsContainer.offsetLeft;
      initialScrollX = itemsContainer.scrollLeft;

      // Set the dragging flag to true
      isDragging = true;

      // Add the 'active' class to the items container
      itemsContainer.classList.add('active');
    });

    // Event listener for mouse move event
    itemsContainer.addEventListener('mousemove', (event) => {
      if (!isDragging) return; // Exit if dragging is not in progress

      // Calculate the distance moved by the mouse
      const mouseX = event.pageX - itemsContainer.offsetLeft;
      const distance = mouseX - initialMouseX;

      // Update the scroll position based on the mouse movement
      itemsContainer.scrollLeft = initialScrollX - distance;
    });

    // Event listener for mouse up event
    itemsContainer.addEventListener('mouseup', () => {
      // Set the dragging flag to false
      isDragging = false;

      // Remove the 'active' class from the items container
      itemsContainer.classList.remove('active');
    });

    // Event listener for mouse leave event
    itemsContainer.addEventListener('mouseleave', () => {
      // Set the dragging flag to false
      isDragging = false;

      // Remove the 'active' class from the items container
      itemsContainer.classList.remove('active');
    });